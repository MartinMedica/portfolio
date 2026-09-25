export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

export const ui = {
  es: {
    title: "Portfolio Martín Médica - Programador Web",
    "header.home": "Inicio",
    "header.experience": "Experiencia",
    "header.projects": "Proyectos",
    "hero.available": "Disponible para trabajar",
    "hero.exp": "+7 años de experiencia.",
    "hero.role": "Desarrollador Web.",
    "experience.id": "experiencia",
    "experience.title": "Experiencia Laboral",
    "experience.ml.title":
      "MercadoLibre — Frontend Engineer (Frontend Core / Platform)",
    "experience.ml.date": "Junio 2021 – Septiembre 2025",
    "experience.ml.desc":
      "Desarrollo y mantenimiento de un framework frontend basado en React, utilizado por más de 1.000 aplicaciones a nivel compañía, incluyendo tooling compartido y configuraciones base (Webpack, Babel, ESLint, Jest). Automatización de migraciones y upgrades a gran escala mediante codemods, e implementación de funcionalidades clave como Server Side Rendering (SSR), routing basado en filesystem y arquitectura de Islands. Foco en mejorar la Developer Experience, reduciendo fricción y estandarizando prácticas entre equipos.",
    "experience.tata.title": "Tata Consultancy Services — Software Developer",
    "experience.tata.date": "Junio 2019 – Junio 2021",
    "experience.tata.desc":
      "Desarrollo de extensiones y plugins para pipelines de CI/CD, automatizando análisis de seguridad estática (SAST), cobertura de tests y control de quality gates. Desarrollo frontend con Vue.js, construcción de APIs REST con .NET e integración con bases de datos SQL.",
    "projects.id": "proyectos",
    "projects.title": "Proyectos",
    "projects.transcribe.title": "Transcribe",
    "projects.transcribe.desc":
      "Herramienta web para transcribir música que permite controlar la velocidad, crear loops y marcadores, y analizar el audio con waveform y EQ para trabajar con mayor precisión.",
    "projects.shorten.title": "Shorten",
    "projects.shorten.desc":
      "Acortador de URLs construido con arquitectura serverless en AWS. Frontend estático en Astro servido desde CloudFront + S3, API con API Gateway y AWS Lambda, y persistencia en DynamoDB para redirecciones rápidas.",
  },
  en: {
    title: "Portfolio Martín Médica - Web Developer",
    "header.home": "Home",
    "header.experience": "Experience",
    "header.projects": "Projects",
    "hero.available": "Available to work",
    "hero.exp": "+7 years of experience.",
    "hero.role": "Web Developer.",
    "experience.id": "experience",
    "experience.title": "Work Experience",
    "experience.ml.date": "June 2021 – September 2025",
    "experience.ml.desc":
      "Development and maintenance of a React-based frontend framework used by over 1,000 applications across the company, including shared tooling and base configurations (Webpack, Babel, ESLint, Jest). Automation of large-scale migrations and upgrades using codemods, and implementation of key features such as Server Side Rendering (SSR), filesystem-based routing, and Island architecture. Focus on improving the Developer Experience by reducing friction and standardizing practices across teams.",
    "experience.tata.date": "June 2019 – June 2021",
    "experience.tata.desc":
      "Development of extensions and plugins for CI/CD pipelines, automating static security analysis (SAST), test coverage, and quality control gates. Frontend development with Vue.js, building REST APIs with .NET, and integration with SQL databases.",
    "projects.id": "projects",
    "projects.title": "Projects",
    "projects.transcribe.desc":
      "A web-based tool for transcribing music that allows you to control speed, create loops and markers, and analyze audio with waveform and EQ for greater precision.",
    "projects.shorten.title": "Shorten",
    "projects.shorten.desc":
      "A URL shortener built using a serverless AWS architecture. Static Astro frontend served through CloudFront + S3, API powered by API Gateway and AWS Lambda, with DynamoDB for fast URL lookups and redirects.",
  },
} as const;
