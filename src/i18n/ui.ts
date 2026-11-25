export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "en";

export const ui = {
  es: {
    title: "Martín Médica | Ingeniero frontend",
    "header.home": "Inicio",
    "header.experience": "Experiencia",
    "header.projects": "Proyectos",
    "hero.available": "Disponible para trabajar",
    description:
      "Ingeniero frontend en Montevideo. React, TypeScript y plataformas frontend. Trabajé en Nordic en Mercado Libre, usado por más de 1.000 aplicaciones.",
    "hero.location": "Montevideo, Uruguay.",
    "hero.role":
      "Ingeniero frontend | React, TypeScript y plataformas frontend",
    "hero.description":
      "Desarrollo aplicaciones web y las herramientas que usan los equipos para construirlas. En Mercado Libre trabajé en Nordic, un framework interno de React usado por más de 1.000 aplicaciones.",
    "experience.id": "experiencia",
    "experience.title": "Experiencia Laboral",
    "experience.ml.title":
      "Mercado Libre | Frontend Engineer (Frontend Core / Platform)",
    "experience.ml.date": "Junio 2021 – Septiembre 2025",
    "experience.ml.desc":
      "Desarrollo de Nordic, un framework interno de React usado por más de 1.000 aplicaciones en Mercado Libre.",
    "experience.ml.routing":
      "Descubrimiento de rutas e integración con Express para Nordic Pages.",
    "experience.ml.migrations":
      "Automatización de migraciones con codemods y Doctor CLI.",
    "experience.ml.react":
      "Compatibilidad de SSR e hidratación durante la actualización a React 19.",
    "experience.tata.title": "TCS | Software Developer",
    "experience.tata.date": "Junio 2019 – Junio 2021",
    "experience.tata.desc":
      "Desarrollo frontend con Vue.js, APIs REST con .NET e integración con bases de datos SQL. Desarrollo de extensiones y plugins para Azure Pipelines para automatizar análisis de seguridad, cobertura de tests y controles de calidad.",
    "projects.id": "proyectos",
    "projects.title": "Proyectos",
    "projects.danira.title": "Danira",
    "projects.danira.desc":
      "Portfolio fotográfico con React, TypeScript y Sanity que le permite a la fotógrafa publicar sus propias colecciones.",
    "projects.preview": "Ver proyecto",
    "projects.screenshot": "Captura de pantalla de",
    "projects.browserAi.title": "Browser AI",
    "projects.browserAi.desc":
      "Demo de IA que convierte imágenes en descripciones con Transformers.js. La inferencia corre en un Web Worker en el dispositivo. Podés probar una imagen de ejemplo o subir la tuya.",
    "projects.shorten.title": "Shorten",
    "projects.shorten.desc":
      "Acortador de URLs construido con arquitectura serverless en AWS. Frontend estático en Astro servido desde CloudFront + S3, API con API Gateway y AWS Lambda, y persistencia en DynamoDB para redirecciones rápidas.",
  },
  en: {
    title: "Martín Médica | Frontend Engineer",
    "header.home": "Home",
    "header.experience": "Experience",
    "header.projects": "Projects",
    "hero.available": "Available to work",
    description:
      "Frontend Engineer based in Montevideo. React, TypeScript and frontend platform work, including Nordic at Mercado Libre, used by 1,000+ applications.",
    "hero.location": "Based in Montevideo, Uruguay.",
    "hero.role": "Frontend Engineer | React, TypeScript & Frontend Platform",
    "hero.description":
      "I build web applications and the tooling behind them. At Mercado Libre, I worked on Nordic, an internal React framework used by 1,000+ applications.",
    "experience.id": "experience",
    "experience.title": "Work Experience",
    "experience.ml.title":
      "Mercado Libre | Frontend Engineer (Frontend Core / Platform)",
    "experience.ml.date": "June 2021 – September 2025",
    "experience.ml.desc":
      "Developed Nordic, an internal React framework used by 1,000+ applications at Mercado Libre.",
    "experience.ml.routing":
      "Route discovery and Express integration for Nordic Pages.",
    "experience.ml.migrations":
      "Migration automation with codemods and Doctor CLI.",
    "experience.ml.react":
      "SSR and hydration compatibility during the upgrade to React 19.",
    "experience.tata.title": "TCS | Software Developer",
    "experience.tata.date": "June 2019 – June 2021",
    "experience.tata.desc":
      "Frontend development with Vue.js, REST APIs with .NET, and SQL database integration. Built extensions and plugins for Azure Pipelines to automate security analysis, test coverage, and quality checks.",
    "projects.id": "projects",
    "projects.title": "Projects",
    "projects.danira.title": "Danira",
    "projects.danira.desc":
      "A photography portfolio built with React, TypeScript and Sanity that lets the photographer publish her own collections.",
    "projects.preview": "View project",
    "projects.screenshot": "Screenshot of",
    "projects.browserAi.title": "Browser AI",
    "projects.browserAi.desc":
      "An AI demo that turns images into captions with Transformers.js. Inference runs in a Web Worker on the device. Try a sample image or upload your own.",
    "projects.shorten.title": "Shorten",
    "projects.shorten.desc":
      "A URL shortener built using a serverless AWS architecture. Static Astro frontend served through CloudFront + S3, API powered by API Gateway and AWS Lambda, with DynamoDB for fast URL lookups and redirects.",
  },
} as const;
