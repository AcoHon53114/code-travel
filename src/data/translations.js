export const copy = {
  en: { nav: ['Destinations', 'Evolution Route', 'About'], heroEyebrow: 'A journey through programming', heroTitle: 'Explore the world,|one language| at a time.', heroIntro: 'From the first lines of code to today’s frameworks, Code Travel turns programming history into a world waiting to be explored.', start: 'Start the journey', viewTimeline: 'View evolution route', destinations: 'destinations', years: 'years of history', frameworks: 'frameworks', next: 'Your next stop', nextTitle: 'A map of ideas, tools and evolution.', choose: 'Choose your route', destinationsTitle: 'Eight destinations. Eight ways to build.', destinationsIntro: 'Each language is a place shaped by a different era, purpose and ecosystem.', explore: 'Explore route', timeline: 'Evolution route', timelineTitle: 'Follow the evolution route.', timelineIntro: 'A journey through the evolution of the eight stops featured in Code Travel.', about: 'Why Code Travel?', aboutTitle: 'Programming is a journey through ideas.', aboutIntro: 'Code Travel makes technical history easier to see, compare and explore.', aboutBody: 'Languages are more than syntax. Each one came from a real problem: performance, portability, usability, business scale or a new generation of devices.', aboutBody2: 'This student project turns those decisions into destinations. Start with a language, discover its era, then follow the frameworks that made it influential.', chooseDestination: 'Choose a destination', first: 'First released', origin: 'Origin', route: 'Primary route', popular: 'Popular frameworks', continue: 'Continue your journey', frameworkText: 'A major stop in the {name} ecosystem.', visitOfficial: 'Visit official website', destination: 'destination', exploreLanguage: 'Explore {name}' },
  'zh-Hant': { nav: ['目的地', '演化航線', '關於我們'], heroEyebrow: '一趟程式語言之旅', heroTitle: '探索程式世界，|逐個語言|出發。', heroIntro: '由最早的程式碼到今日的 framework，Code Travel 將程式演化變成一個值得探索的世界。', start: '開始旅程', viewTimeline: '查看演化航線', destinations: '個目的地', years: '年演化歷史', frameworks: '個 framework', next: '下一站', nextTitle: '一張關於概念、工具與演化的地圖。', choose: '選擇你的路線', destinationsTitle: '八個目的地，八種建立方式。', destinationsIntro: '每種程式語言都有不同年代、用途與生態系統所塑造的故事。', explore: '探索路線', timeline: '演化航線', timelineTitle: '沿著程式演化航線前行。', timelineIntro: '穿越 Code Travel 八個目的地的程式演化旅程。', about: '為何是 Code Travel？', aboutTitle: '程式設計是一段穿越想法的旅程。', aboutIntro: 'Code Travel 令技術歷史更容易看見、比較與探索。', aboutBody: '程式語言不只是 syntax。每一種語言，都由一個真實問題而生：效能、可攜性、易用性、商業規模，或新一代裝置。', aboutBody2: '這個學生 project 將這些選擇化成目的地。由一種 language 開始，認識它的年代，再跟隨令它重要的 frameworks。', chooseDestination: '選擇目的地', first: '首次發表', origin: '起源', route: '主要領域', popular: '主流 framework', continue: '繼續你的旅程', frameworkText: '{name} 生態系統中的重要一站。', visitOfficial: '前往官方網站', destination: '目的地', exploreLanguage: '探索 {name}' },
  'zh-Hans': { nav: ['目的地', '演化航线', '关于我们'], heroEyebrow: '一趟编程语言之旅', heroTitle: '探索编程世界，|逐个语言|出发。', heroIntro: '从最早的代码到今天的 framework，Code Travel 将编程演化变成一个值得探索的世界。', start: '开始旅程', viewTimeline: '查看演化航线', destinations: '个目的地', years: '年演化历史', frameworks: '个 framework', next: '下一站', nextTitle: '一张关于概念、工具与演化的地图。', choose: '选择你的路线', destinationsTitle: '八个目的地，八种构建方式。', destinationsIntro: '每种编程语言都有不同年代、用途与生态系统所塑造的故事。', explore: '探索路线', timeline: '演化航线', timelineTitle: '沿着编程演化航线前行。', timelineIntro: '穿越 Code Travel 八个目的地的编程演化旅程。', about: '为何是 Code Travel？', aboutTitle: '编程是一段穿越想法的旅程。', aboutIntro: 'Code Travel 令技术历史更容易看见、比较与探索。', aboutBody: '编程语言不只是 syntax。每一种语言，都由一个真实问题而生：性能、可移植性、易用性、商业规模，或新一代设备。', aboutBody2: '这个学生 project 将这些选择化成目的地。从一种 language 开始，认识它的年代，再跟随令它重要的 frameworks。', chooseDestination: '选择目的地', first: '首次发布', origin: '起源', route: '主要领域', popular: '主流 framework', continue: '继续你的旅程', frameworkText: '{name} 生态系统中的重要一站。', visitOfficial: '前往官方网站', destination: '目的地', exploreLanguage: '探索 {name}' }
};

Object.assign(copy.en, {
  officialWebsite: 'Official website',
  visitLanguageOfficial: 'Visit {name} official website'
});
Object.assign(copy['zh-Hant'], {
  officialWebsite: '官方網站',
  visitLanguageOfficial: '前往 {name} 官方網站'
});
Object.assign(copy['zh-Hans'], {
  officialWebsite: '官方网站',
  visitLanguageOfficial: '前往 {name} 官方网站'
});

export const languageDescriptions = {
  en: {
    javascript: 'Created for browser interaction, JavaScript became a defining language of the modern web.',
    python: 'Readable and versatile, Python became a key language for APIs, automation, data and AI.',
    java: 'Known for reliability and portability, Java remains a backbone of large enterprise systems.',
    csharp: 'Combining modern language features with .NET, C# powers business software, APIs and games.',
    cpp: 'C++ gives developers close control over performance, from systems software to game engines.',
    go: 'Designed for simplicity, reliability and concurrency, Go is a major language for cloud services.',
    rust: 'Rust brings memory safety and high performance to a new generation of systems, tools and services.',
    swift: 'Apple’s modern language, Swift helps create safe and expressive experiences across its platforms.'
  },
  'zh-Hant': {
    javascript: '為瀏覽器互動而生，JavaScript 已成為現代 Web 世界的重要語言。',
    python: '易讀而多用途，Python 已成為 API、自動化、數據分析與 AI 的重要語言。',
    java: '以可靠與可攜性見稱，Java 至今仍是大型企業系統的重要支柱。',
    csharp: '結合現代語言特性與 .NET 生態，C# 廣泛用於商業系統、API 與遊戲開發。',
    cpp: '提供貼近硬件的效能控制，C++ 橫跨系統、遊戲引擎與高效能軟件。',
    go: '為簡潔、可靠與高併發而設計，Go 是雲端服務與後端開發的重要選擇。',
    rust: '將記憶體安全與高效能結合，Rust 為新一代系統、工具與服務帶來新方向。',
    swift: 'Apple 的現代開發語言，Swift 用於打造安全、流暢而具表達力的跨平台體驗。'
  },
  'zh-Hans': {
    javascript: '为浏览器交互而生，JavaScript 已成为现代 Web 世界的重要语言。',
    python: '易读且用途广泛，Python 已成为 API、自动化、数据分析与 AI 的重要语言。',
    java: '以可靠性与可移植性著称，Java 至今仍是大型企业系统的重要支柱。',
    csharp: '结合现代语言特性与 .NET 生态，C# 广泛用于商业系统、API 与游戏开发。',
    cpp: '提供贴近硬件的性能控制，C++ 横跨系统、游戏引擎与高性能软件。',
    go: '为简洁、可靠与高并发而设计，Go 是云端服务与后端开发的重要选择。',
    rust: '将内存安全与高性能结合，Rust 为新一代系统、工具与服务带来新方向。',
    swift: 'Apple 的现代开发语言，Swift 用于打造安全、流畅且富有表现力的跨平台体验。'
  }
};

export const languageNames = { 'zh-Hant': { JavaScript: 'JavaScript', Python: 'Python', Java: 'Java', 'C#': 'C#', 'C++': 'C++', Swift: 'Swift' }, 'zh-Hans': { JavaScript: 'JavaScript', Python: 'Python', Java: 'Java', 'C#': 'C#', 'C++': 'C++', Swift: 'Swift' } };

export const frameworkDescriptions = {
  en: {
    javascript: { React: 'Build interactive interfaces with components—the most familiar stop on the modern frontend journey.', Vue: 'A lightweight, progressive route from static pages into interactive web experiences.', 'Next.js': 'Extend React with routing, server rendering and a full application architecture.' },
    python: { Django: 'Bring admin tools, security and data models together for complete web services.', FastAPI: 'A fast API route with automatic documentation, connecting data and AI services.', Flask: 'A simple, flexible starting point for services that can grow in your own direction.' },
    java: { 'Spring Boot': 'Use conventions and auto-configuration to accelerate enterprise APIs and large services.', Hibernate: 'Connect objects to databases and simplify the long route through enterprise data access.' },
    csharp: { '.NET': 'A cross-platform platform where desktop, cloud and server-side journeys meet.', 'ASP.NET Core': 'The modern .NET route for high-performance web APIs and enterprise websites.' },
    cpp: { Qt: 'Create cross-platform desktop interfaces with one toolkit across operating systems.', 'Unreal Engine': 'Step into high-fidelity real-time 3D for games and interactive worlds.' },
    go: { Gin: 'A fast HTTP framework for clear, efficient API services.', Fiber: 'A speed-focused, simple route for high-concurrency web services.', Echo: 'Build reliable Go APIs with a clean design and strong middleware support.' },
    rust: { Axum: 'Build modern, clear web APIs around Rust’s type-safe foundations.', 'Actix Web': 'A mature, high-performance web framework for services that value speed.', Rocket: 'Reduce boilerplate with an intuitive design that helps Rust web development take off.' },
    swift: { SwiftUI: 'Use a declarative approach to turn ideas into interfaces across Apple platforms.', UIKit: 'The established foundation for Apple apps with fine control over mobile experiences.' }
  },
  'zh-Hant': {
    javascript: { React: '以 component 建立互動介面，是現代前端旅程最常見的一站。', Vue: '輕量而循序漸進，適合由靜態頁面走進互動 Web。', 'Next.js': '在 React 之上加入路由、伺服器渲染與完整應用架構。' },
    python: { Django: '內建後台、安全與資料模型，適合快速建立完整 Web 服務。', FastAPI: '以高效 API 與自動文件聞名，連接數據與 AI 服務的重要一站。', Flask: '簡潔而彈性高，適合由小型服務開始自由擴展。' },
    java: { 'Spring Boot': '以慣例與自動設定加速企業 API 與大型服務開發。', Hibernate: '將物件與資料庫連接起來，簡化企業資料存取的長途旅程。' },
    csharp: { '.NET': '跨平台開發平台，讓桌面、雲端與服務端旅程匯聚一處。', 'ASP.NET Core': '用於建立高效 Web API 與企業網站的現代 .NET 路線。' },
    cpp: { Qt: '以一套工具建立跨平台桌面介面，連接不同作業系統。', 'Unreal Engine': '走進高畫質即時 3D 世界，是遊戲與互動內容的重要目的地。' },
    go: { Gin: '輕快的 HTTP framework，適合建立高效而清晰的 API 服務。', Fiber: '追求速度與簡潔的後端路線，適合高併發 Web 服務。', Echo: '以簡潔設計與良好 middleware 支援，建立可靠的 Go API。' },
    rust: { Axum: '以 Rust 型別安全為核心，建立現代而清晰的 Web API。', 'Actix Web': '高效能且成熟的 Web framework，適合追求速度的服務。', Rocket: '以直覺設計減少樣板程式，讓 Rust Web 開發更容易起飛。' },
    swift: { SwiftUI: '以宣告式方式建立 Apple 平台介面，快速把想法變成畫面。', UIKit: 'Apple app 開發的成熟基礎，適合精細掌控流動體驗。' }
  },
  'zh-Hans': {
    javascript: { React: '以 component 构建交互界面，是现代前端旅程最常见的一站。', Vue: '轻量且循序渐进，适合从静态页面走向交互 Web。', 'Next.js': '在 React 之上加入路由、服务端渲染与完整应用架构。' },
    python: { Django: '内置后台、安全与数据模型，适合快速构建完整 Web 服务。', FastAPI: '以高效 API 与自动文档闻名，是连接数据与 AI 服务的重要一站。', Flask: '简洁且灵活，适合从小型服务开始自由扩展。' },
    java: { 'Spring Boot': '通过约定与自动配置，加速企业 API 与大型服务开发。', Hibernate: '连接对象与数据库，简化企业数据访问的长途旅程。' },
    csharp: { '.NET': '跨平台开发平台，让桌面、云端与服务端旅程汇聚一处。', 'ASP.NET Core': '用于构建高效 Web API 与企业网站的现代 .NET 路线。' },
    cpp: { Qt: '用一套工具构建跨平台桌面界面，连接不同操作系统。', 'Unreal Engine': '走进高品质实时 3D 世界，是游戏与互动内容的重要目的地。' },
    go: { Gin: '轻快的 HTTP framework，适合构建高效而清晰的 API 服务。', Fiber: '追求速度与简洁的后端路线，适合高并发 Web 服务。', Echo: '以简洁设计与良好 middleware 支持，构建可靠的 Go API。' },
    rust: { Axum: '以 Rust 类型安全为核心，构建现代且清晰的 Web API。', 'Actix Web': '高性能且成熟的 Web framework，适合追求速度的服务。', Rocket: '以直观设计减少样板代码，让 Rust Web 开发更容易起飞。' },
    swift: { SwiftUI: '以声明式方式构建 Apple 平台界面，快速将想法变成画面。', UIKit: 'Apple app 开发的成熟基础，适合精细掌控移动体验。' }
  }
};
