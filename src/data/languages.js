export const languages = [
  { slug: 'javascript', name: 'JavaScript', short: 'JS', zone: 'Web', year: 1995, color: '#ffd84d', bannerImage: '/assets/language-passport-javascript.webp', officialUrl: 'https://ecma-international.org/publications-and-standards/standards/ecma-262/', frameworks: ['React', 'Vue', 'Next.js'], origin: 'Netscape', description: 'Created for browser interaction, JavaScript grew into a language used across the modern web.' },
  { slug: 'python', name: 'Python', short: 'Py', zone: 'AI & Data', year: 1991, color: '#77d4a1', bannerImage: '/assets/language-passport-python.webp', officialUrl: 'https://www.python.org/', frameworks: ['Django', 'FastAPI', 'Flask'], origin: 'Netherlands', description: 'Readable and versatile, Python became a key language for APIs, automation, data and AI.' },
  { slug: 'java', name: 'Java', short: 'Ja', zone: 'Enterprise', year: 1995, color: '#7fb7ff', bannerImage: '/assets/language-passport-java.webp', officialUrl: 'https://www.oracle.com/java/', frameworks: ['Spring Boot', 'Hibernate'], origin: 'Sun Microsystems', description: 'Java helped define reliable, portable enterprise software and remains a backbone of large systems.' },
  { slug: 'csharp', name: 'C#', short: 'C#', zone: 'Enterprise', year: 2000, color: '#bd91ff', bannerImage: '/assets/language-passport-csharp.webp', officialUrl: 'https://dotnet.microsoft.com/languages/csharp', frameworks: ['.NET', 'ASP.NET Core'], origin: 'Microsoft', description: 'C# combines modern language features with the .NET ecosystem for business software, APIs and games.' },
  { slug: 'cpp', name: 'C++', short: 'C++', zone: 'Systems', year: 1985, color: '#ff8f86', bannerImage: '/assets/language-passport-cpp.webp', officialUrl: 'https://isocpp.org/', frameworks: ['Qt', 'Unreal Engine'], origin: 'Bell Labs', description: 'C++ gives developers close control of performance, from operating systems to high-end game engines.' },
  { slug: 'go', name: 'Go', short: 'Go', zone: 'Cloud & Backend', year: 2009, color: '#62d7e5', bannerImage: '/assets/language-passport-go.webp', officialUrl: 'https://go.dev/', frameworks: ['Gin', 'Fiber', 'Echo'], origin: 'Google', description: 'Go was designed for simple, reliable and highly concurrent software, making it a major language for cloud services.' },
  { slug: 'rust', name: 'Rust', short: 'Rs', zone: 'Modern Systems', year: 2010, color: '#f69b4e', bannerImage: '/assets/language-passport-rust.webp', officialUrl: 'https://www.rust-lang.org/', frameworks: ['Axum', 'Actix Web', 'Rocket'], origin: 'Mozilla Research', description: 'Rust brings memory safety and high performance together for the next generation of systems, tools and services.' },
  { slug: 'swift', name: 'Swift', short: 'Sw', zone: 'Mobile', year: 2014, color: '#ffad68', bannerImage: '/assets/language-passport-swift.webp', officialUrl: 'https://www.swift.org/', frameworks: ['SwiftUI', 'UIKit'], origin: 'Apple', description: 'Swift is Apple’s modern language for creating expressive, safe experiences across its platforms.' }
];

export const frameworkLinks = {
  React: 'https://react.dev/', Vue: 'https://vuejs.org/', 'Next.js': 'https://nextjs.org/',
  Django: 'https://www.djangoproject.com/', FastAPI: 'https://fastapi.tiangolo.com/', Flask: 'https://flask.palletsprojects.com/',
  'Spring Boot': 'https://spring.io/projects/spring-boot', Hibernate: 'https://hibernate.org/',
  '.NET': 'https://dotnet.microsoft.com/', 'ASP.NET Core': 'https://dotnet.microsoft.com/apps/aspnet',
  Qt: 'https://www.qt.io/', 'Unreal Engine': 'https://www.unrealengine.com/',
  Gin: 'https://gin-gonic.com/', Fiber: 'https://gofiber.io/', Echo: 'https://echo.labstack.com/',
  Axum: 'https://docs.rs/axum/latest/axum/', 'Actix Web': 'https://actix.rs/', Rocket: 'https://rocket.rs/',
  SwiftUI: 'https://developer.apple.com/xcode/swiftui/', UIKit: 'https://developer.apple.com/documentation/uikit'
};
