import { useEffect, useState } from 'react';

export function useDashboardProgress(duration = 1050) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return undefined;
    }

    const startedAt = performance.now();
    let frameId;

    const tick = (now) => {
      const elapsed = Math.min((now - startedAt) / duration, 1);
      setProgress(1 - (1 - elapsed) ** 3);

      if (elapsed < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration]);

  return progress;
}
