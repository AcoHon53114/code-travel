import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import earthMap from '../assets/code-travel-earth-map.webp';

// Latitude / longitude positions spread the languages around the whole planet.
// The last two begin past the side of the globe and naturally appear as it turns.
const pinPositions = [
  [.38, -.35], [-.25, .08], [.08, 1.25], [.52, 2.05],
  [-.18, 2.85], [-.10, -2.65], [-.78, -1.85], [-.56, -1.10]
];

function globePoint(latitude, longitude) {
  const cosLatitude = Math.cos(latitude);
  return new THREE.Vector3(
    cosLatitude * Math.sin(longitude),
    Math.sin(latitude),
    cosLatitude * Math.cos(longitude)
  ).normalize();
}

function makeAtmosphere() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 512;
  const context = canvas.getContext('2d');
  const glow = context.createRadialGradient(256, 256, 0, 256, 256, 256);
  // The centre is fully transparent because the globe sits in front of it.
  // Only the small outer band is visible, fading into the space background.
  glow.addColorStop(0, 'rgba(65, 198, 255, 0)');
  glow.addColorStop(.84, 'rgba(65, 198, 255, 0)');
  glow.addColorStop(.9, 'rgba(65, 198, 255, .04)');
  glow.addColorStop(.945, 'rgba(78, 211, 255, .23)');
  glow.addColorStop(.982, 'rgba(104, 223, 255, .1)');
  glow.addColorStop(1, 'rgba(104, 223, 255, 0)');
  context.fillStyle = glow;
  context.fillRect(0, 0, 512, 512);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const atmosphere = new THREE.Sprite(new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }));
  atmosphere.scale.set(4.32, 4.32, 1);
  atmosphere.position.z = -.12;
  return atmosphere;
}

function makeSurfacePin(language, normal) {
  const faceCanvas = document.createElement('canvas');
  faceCanvas.width = faceCanvas.height = 160;
  const ctx = faceCanvas.getContext('2d');
  // Keep the marker visually light: it is a glass-like decal on the surface,
  // never a cylinder or a billboard floating above the globe.
  ctx.beginPath(); ctx.arc(80, 80, 58, 0, Math.PI * 2); ctx.fillStyle = `${language.color}88`; ctx.fill();
  ctx.lineWidth = 4; ctx.strokeStyle = '#efffff'; ctx.stroke();
  const faceTexture = new THREE.CanvasTexture(faceCanvas); faceTexture.colorSpace = THREE.SRGBColorSpace;
  const textCanvas = document.createElement('canvas');
  textCanvas.width = textCanvas.height = 160;
  const textContext = textCanvas.getContext('2d');
  textContext.fillStyle = '#f7ffff'; textContext.font = '700 43px Inter, sans-serif'; textContext.textAlign = 'center'; textContext.textBaseline = 'middle'; textContext.fillText(language.short, 80, 84);
  const textTexture = new THREE.CanvasTexture(textCanvas); textTexture.colorSpace = THREE.SRGBColorSpace;
  const badge = new THREE.Group();
  badge.position.copy(normal.clone().multiplyScalar(2.018)); badge.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
  const halo = new THREE.Mesh(new THREE.CircleGeometry(.315, 32), new THREE.MeshBasicMaterial({ color: language.color, transparent: true, opacity: .24, depthTest: true, depthWrite: false })); halo.position.z = .002; badge.add(halo);
  const face = new THREE.Mesh(new THREE.CircleGeometry(.25, 32), new THREE.MeshBasicMaterial({ map: faceTexture, transparent: true, depthTest: true, depthWrite: false })); face.position.z = .006; face.userData.language = language; badge.add(face);
  // The disc stays locked to the globe, while this transparent text layer is
  // counter-rotated toward the camera for consistently upright initials.
  const label = new THREE.Mesh(new THREE.PlaneGeometry(.5, .5), new THREE.MeshBasicMaterial({ map: textTexture, transparent: true, side: THREE.DoubleSide, depthTest: true, depthWrite: false }));
  label.position.z = .011;
  label.userData.language = language;
  badge.userData.label = label;
  badge.add(label);
  return badge;
}

export default function CodePlanet({ languages, t }) {
  const [selected, setSelected] = useState(languages[0]);
  const [interReady, setInterReady] = useState(false);
  const mountRef = useRef(null);

  useEffect(() => {
    let active = true;
    const fontLoad = document.fonts?.load ? document.fonts.load('700 43px Inter') : Promise.resolve();
    fontLoad.catch(() => {}).finally(() => { if (active) setInterReady(true); });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!interReady) return undefined;
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, .1, 100); camera.position.set(0, .15, 6.5);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);
    const globe = new THREE.Group(); scene.add(globe);
    const travelTexture = new THREE.TextureLoader().load(earthMap);
    travelTexture.colorSpace = THREE.SRGBColorSpace;
    travelTexture.wrapS = THREE.RepeatWrapping;
    travelTexture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    const sphereMaterial = new THREE.MeshPhysicalMaterial({
      map: travelTexture, color: '#ffffff', emissive: '#317ba4', emissiveMap: travelTexture, emissiveIntensity: .5,
      roughness: .32, metalness: .02, clearcoat: .46, clearcoatRoughness: .24
    });
    // Lift the deep-blue ocean texture only. This deliberately happens before
    // the lighting calculation, so it cannot enlarge the three existing light
    // reflections or change the language markers.
    sphereMaterial.onBeforeCompile = (shader) => {
      shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>', `
        #include <map_fragment>
        float oceanBlue = max(diffuseColor.b - diffuseColor.r * .46, 0.0);
        float oceanMask = smoothstep(.055, .22, oceanBlue)
          * (1.0 - smoothstep(.46, .76, diffuseColor.g));
        diffuseColor.rgb += vec3(0.0, .052, .095) * oceanMask;
      `);
    };
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(2, 64, 64), sphereMaterial); globe.add(sphere);
    // A soft halo sits behind the 3D Earth and fades into the background.
    // It remains a glow rather than becoming a rotating blue ring.
    scene.add(makeAtmosphere());
    const pins = languages.map((language, index) => { const [latitude, longitude] = pinPositions[index]; const pin = makeSurfacePin(language, globePoint(latitude, longitude)); globe.add(pin); return pin; });
    scene.add(new THREE.HemisphereLight('#d8fbff', '#0d3555', 2.05));
    const key = new THREE.PointLight('#e9ffff', 42, 13, 2); key.position.set(-3.8, 3.7, 4.8); scene.add(key);
    const fill = new THREE.PointLight('#52cbd8', 9, 10, 2); fill.position.set(-3.2, -.7, 3.4); scene.add(fill);
    const rim = new THREE.DirectionalLight('#4b9dc5', 1.7); rim.position.set(4, -2, -4); scene.add(rim);
    const raycaster = new THREE.Raycaster(); const pointer = new THREE.Vector2(); let drag = false; let moved = false; let lastX = 0;
    const resize = () => { const { width, height } = mount.getBoundingClientRect(); renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix(); };
    const observer = new ResizeObserver(resize); observer.observe(mount); resize();
    const isDesktop = () => window.matchMedia('(min-width: 781px)').matches;
    const selectPinAtPointer = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(pins, true)[0];
      if (hit) setSelected(hit.object.userData.language);
    };
    const down = (event) => {
      moved = false;
      // Tablet and phone remain auto-rotating, but a tap can still select a
      // surface icon. Dragging stays a desktop-only interaction.
      if (!isDesktop()) return;
      drag = true;
      lastX = event.clientX;
      renderer.domElement.setPointerCapture(event.pointerId);
      mount.classList.add('is-dragging');
    };
    const move = (event) => { if (!drag) return; const delta = event.clientX - lastX; if (Math.abs(delta) > 1) moved = true; globe.rotation.y += delta * .012; lastX = event.clientX; };
    const up = (event) => {
      const wasDragging = drag;
      if (!isDesktop() || (wasDragging && !moved)) selectPinAtPointer(event);
      drag = false;
      mount.classList.remove('is-dragging');
      if (wasDragging) renderer.domElement.releasePointerCapture?.(event.pointerId);
    };
    const cancel = (event) => {
      const wasDragging = drag;
      drag = false;
      moved = false;
      mount.classList.remove('is-dragging');
      if (wasDragging) renderer.domElement.releasePointerCapture?.(event.pointerId);
    };
    renderer.domElement.addEventListener('pointerdown', down); renderer.domElement.addEventListener('pointermove', move); renderer.domElement.addEventListener('pointerup', up); renderer.domElement.addEventListener('pointercancel', cancel);
    const inverseGlobeRotation = new THREE.Quaternion();
    const orientLabels = () => {
      inverseGlobeRotation.copy(globe.quaternion).invert();
      pins.forEach((pin) => {
        pin.userData.label.quaternion.copy(pin.quaternion).invert().multiply(inverseGlobeRotation).multiply(camera.quaternion);
      });
    };
    let frame; const animate = () => { if (!drag) globe.rotation.y += .00075; orientLabels(); renderer.render(scene, camera); frame = requestAnimationFrame(animate); }; animate();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); renderer.domElement.removeEventListener('pointerdown', down); renderer.domElement.removeEventListener('pointermove', move); renderer.domElement.removeEventListener('pointerup', up); renderer.domElement.removeEventListener('pointercancel', cancel); scene.traverse((node) => { node.geometry?.dispose(); if (node.material) { (Array.isArray(node.material) ? node.material : [node.material]).forEach((material) => { material.map?.dispose(); material.dispose(); }); } }); renderer.dispose(); mount.replaceChildren(); };
  }, [languages, interReady]);

  return <section className="planet-panel" aria-label="Interactive 3D programming language globe"><div className="three-globe" ref={mountRef} aria-label="A slowly rotating 3D Code Planet. On desktop, drag left and right to rotate." /><article className="language-preview"><p className="eyebrow">{selected.zone} {t.destination}</p><h2>{selected.name}</h2><p>{t.first}: {selected.year}</p><div className="tag-list">{selected.frameworks.map((framework) => <span key={framework}>{framework}</span>)}</div><Link className="text-button" to={`/destinations/${selected.slug}`}>{t.exploreLanguage.replace('{name}', selected.name)} <span>→</span></Link></article></section>;
}
