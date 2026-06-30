/**
 * Sistema de Traducciones (Internacionalización i18n)
 *
 * Este archivo contiene todas las traducciones del portfolio en español e inglés.
 * Para agregar o editar traducciones, simplemente modifica los textos en este archivo.
 *
 * Estructura:
 * - translations.es: Textos en español
 * - translations.en: Textos en inglés
 *
 * Uso en HTML:
 * - <element data-i18n="section.key">Texto por defecto</element>
 * - <element data-i18n-list="section.key_list"> para listas
 *
 * Las traducciones se actualizan automáticamente al cambiar de idioma.
 *
 * Autor: José Rodrigo Fuentes Ramírez
 * Año: 2026
 */

const translations = {
  // ===================================
  // ESPAÑOL (ES)
  // ===================================
  es: {
    // Navegación principal
    nav: {
      expertise: 'Especialización',
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Skills',
      projects: 'Proyectos',
      education: 'Educación',
      contact: 'Contacto'
    },

    // Sección Hero (portada principal)
    hero: {
      label: 'Power Platform Solutions Developer',
      certified: 'Professional Training',
      title: 'José Rodrigo<br>Fuentes Ramírez',
      description: 'Full Stack Developer especializado en Power Platform (Power Apps, Power Automate y Power BI). Diseño soluciones empresariales escalables que combinan el desarrollo Low-Code de Microsoft 365 con arquitecturas de datos robustas en SQL Server, optimizando procesos, automatizando tareas y convirtiendo los datos en información de valor para el negocio.',
      //stats: ['🏆 Advanced Training', '•', '2+ años Telefónica', '•', '5+ proyectos Power Platform', '•', '🤖 IA & Copilot'],
      cta_primary: 'Hablemos',
      cta_secondary: 'Ver proyectos'
    },

    // Sección de Especialización (Power Platform)
    expertise: {
      title: 'Especialización Power Platform',
      subtitle: 'Diseño y desarrollo soluciones low-code/no-code que automatizan procesos y mejoran la productividad empresarial',

      powerapps_title: 'Power Apps',
      powerapps_desc: 'Desarrollo de Canvas Apps y Model-driven Apps sobre Microsoft Power Platform.',
      powerapps_highlights: [
        'Análisis, diseño y modelado de datos',
        'Integración con SharePoint y Dynamics 365',
        'Integración de aplicaciones mediante conectores de Microsoft 365, Power Platform y servicios externos'
      ],

      powerautomate_title: 'Power Automate',
      powerautomate_desc: 'Workflows complejos que integran sistemas y automatizan tareas repetitivas.',
      powerautomate_highlights: [
        'Automatización de procesos (RPA)',
        'Integraciones multiservicio',
        'Notificaciones y aprobaciones'
      ],

      powerbi_title: 'Power BI',
      powerbi_desc: 'Dashboards interactivos que transforman datos en insights accionables.',
      powerbi_highlights: [
        'Reportes ejecutivos en tiempo real',
        'DAX y Power Query avanzado',
        'SQL Server integration'
      ],

      m365_title: 'SharePoint & Microsoft 365',
      m365_desc: 'Intranets modernas, gestión documental y colaboración empresarial.',
      m365_highlights: [
        'SharePoint Online (SPFx)',
        'Microsoft Teams integrations',
        'OneDrive y gestión de permisos'
      ],

      ai_title: 'IA & Microsoft Copilot',
      ai_desc: 'Integración de inteligencia artificial en Power Platform con AI Builder y Copilot.',
      ai_highlights: [
        'AI Builder (OCR, Document Processing)',
        'Microsoft Copilot for Power Apps',
        'Prompt engineering y automatización IA'
      ]
    },

    // About Section
    about: {
      title: 'Sobre mí',
      lead: 'Soy un ingeniero de telecomunicaciones con más de 4 años de experiencia en consultoría y desarrollo de software, actualmente trabajando en Telefónica como Full Stack Developer.',
      p1: 'Mi enfoque se centra en crear soluciones tecnológicas que generen impacto real. He trabajado con equipos multidisciplinarios desarrollando aplicaciones empresariales con Power Apps, backends en C# y frontends modernos con Angular y TypeScript.',
      p2: 'Me apasiona el aprendizaje continuo y la mejora de procesos. Combino sólidos conocimientos técnicos con habilidades de comunicación y trabajo en equipo para entregar proyectos de calidad.',
      stat1_number: '4+',
      stat1_label: 'Años de experiencia',
      stat2_number: '10+',
      stat2_label: 'Proyectos completados',
      stat3_number: '3',
      stat3_label: 'Empresas tecnológicas'
    },

    // Experience Section
    experience: {
      title: 'Experiencia profesional',

      // Telefónica
      tel_title: 'Power Platform Developer',
      tel_company: 'Telefónica',
      tel_period: '2023 - Actualidad',
      current: 'Posición actual',
      tel_desc: [
        
        'Desarrollo de 5+ aplicaciones empresariales con Microsoft Power Platform para producto, preventa y provisión en B2B.',
        'Automatización de procesos críticos con Power Automate, reduciendo el tiempo de gestión en un 80%',
        'Integración de aplicaciones mediante conectores de Microsoft 365, Power Platform y servicios externos',
        'Creación de 2 dashboards interactivos con Power BI para análisis de KPIs departamentales',
        'Integración de AI Builder y Microsoft Copilot para procesamiento inteligente de documentos y asistencia en desarrollo',
        'Uso de IA generativa (Copilot, Claude, ChatGPT, Gemini, Perplexity) para optimización de código, debugging y documentación técnica'
      ],

      // Perklam
      per_title: 'Digital Solutions Developer (Web)',
      per_company: 'Perklam',
      per_period: '2023',
      per_desc: [
        'Desarrollo e implantación de la página web corporativa con WordPress.',
        'Gestión integral del proyecto web: contratación y configuración del hosting, dominio, DNS, instalación y personalización del tema, y puesta en producción.',
        'Administración y mantenimiento de la infraestructura web, garantizando su disponibilidad y correcto funcionamiento.',
        'Soporte técnico en sistemas informáticos y comunicaciones, resolviendo incidencias y proporcionando asistencia a usuarios.'
      ],

      // Adesso
      ade_title: 'Web Developer',
      ade_company: 'Adesso',
      ade_period: '2022 - 2023',
      ade_desc: [
        'Desarrollo de aplicaciones web utilizando Angular, TypeScript y Node.js en entornos frontend y backend.',
        'Implementación de interfaces de usuario responsivas y optimizadas con HTML5, SCSS y buenas prácticas de UX/UI.',
        'Integración de servicios y consumo de APIs REST en arquitecturas modernas de aplicaciones web.',
        'Participación en equipos de desarrollo bajo metodologías ágiles, utilizando Jira para la gestión de tareas y Bitbucket para control de versiones.'
      ],

      // Freelance
      free_title: 'Desarrollador de Aplicaciones Android',
      free_company: 'Freelance',
      free_period: '2021',
      free_desc: [
        'Desarrollo de aplicación móvil para Android ("Epilepsi Control"), orientada al registro y seguimiento de información clínica.',
        'Gestión completa del ciclo de vida del proyecto: análisis, diseño, desarrollo, pruebas e implementación.'
      ]
    },

    // Skills Section
    skills: {
      title: 'Stack Tecnológico',
      powerplatform: 'Microsoft Power Platform',
      specialization: 'Especialización',
      m365: 'Ecosistema Microsoft 365',
      backend: 'Desarrollo Backend',
      frontend: 'Desarrollo Web'
    },

    // Projects Section
    projects: {
      title: 'Proyectos destacados',
      filter_all: 'Todos',
      filter_powerplatform: 'Power Platform',
      filter_webdev: 'Desarrollo Web',
      filter_academic: 'Académico',

      driveris_title: 'Concesionario de Coches - Driveris',
      driveris_desc: 'Desarrollo de plataforma web completa para la gestión y visualización del catálogo de vehículos de un concesionario en Sevilla, orientada a la consulta de stock, características y disponibilidad de vehículos. Implementación de la interfaz de usuario con Angular y TypeScript, asegurando una experiencia fluida, modular y escalable.Trabajo bajo metodologías ágiles, participando en la planificación, desarrollo iterativo y entrega continua de funcionalidades.',
      driveris_link: 'Ver proyecto',

      perklam_title: 'Startup de Personalizaciones - Perklam',
      perklam_desc: 'Diseño y desarrollo de e-commerce para startup de personalización de productos. Implementado con WordPress y optimizaciones SEO.',
      perklam_link: 'Ver proyecto',

      metropolis_title: 'Método Metropolis-Hastings',
      metropolis_desc: 'Proyecto de Fin de Grado: Estudio y aplicación del método Metropolis-Hastings para inversión Bayesiana en teledetección y análisis de vegetación.',
      metropolis_link: 'Ver documento',

      epilepsi_title: 'Epilepsi Control',
      epilepsi_desc: 'Aplicación móvil para Android que permite a personas con epilepsia llevar un control completo de su enfermedad, medicación y crisis.',
      epilepsi_link: 'Descargar',

      portfolio_title: 'Portfolio Personal',
      portfolio_desc: 'Desarrollo de portfolio responsive con Html, JavaScript y CSS3 para mostrar proyectos y experiencia profesional.',
      portfolio_link: 'Ver código',

      ondas_title: 'Simulador de Ondas Electromagnéticas',
      ondas_desc: 'Simulador gráfico 3D de ondas planas electromagnéticas con incidencia normal y oblicua desarrollado en Matlab.',
      ondas_link: 'Ver código'
    },

    // Education Section
    education: {
      title: 'Formación y desarrollo profesional',
      certs_title: 'Formación en Microsoft Power Platform',
      view_profile: 'Ver perfil en Microsoft Learn',

      uc3m_title: 'Grado en Ingeniería de Sistemas de Comunicaciones',
      uc3m_institution: 'Universidad Carlos III de Madrid',
      uc3m_period: '2021',
      uc3m_desc: 'Especialización en análisis y diseño de sistemas de comunicaciones avanzadas, redes móviles, comunicaciones espaciales y tratamiento de información.',

      goodjob_title: 'Ciberseguridad - Programa IMPACT #include',
      goodjob_institution: 'Fundación GoodJob',
      goodjob_period: '2022',

      english_title: 'Inglés B1.2',
      english_institution: 'Impulso06',
      english_period: '2020',

      cert1: 'Desarrollo Web para Comercio Electrónico',
      cert2: 'PrestaShop',
      cert3: 'Optimización SEO en WordPress',
      cert4: 'Aplicaciones con Android y HTML5',
      cert5: 'Retos y Soluciones IoT'
    },

    // Contact Section
    contact: {
      title: 'Hablemos',
      subtitle: '¿Tienes un proyecto en mente o quieres colaborar? Estoy siempre abierto a nuevas oportunidades.',
      email: 'Email',
      phone: 'Teléfono',
      download_cv: 'Descargar CV'
    },

    // Footer
    footer: {
      rights: '© 2026 José Rodrigo Fuentes Ramírez. Todos los derechos reservados.'
    },

    // Accessibility
    a11y: {
      skip_to_content: 'Saltar al contenido principal',
      open_menu: 'Abrir menú de navegación',
      main_nav: 'Navegación principal'
    }
  },

  // ===================================
  // INGLÉS (EN)
  // ===================================
  en: {
    // Main navigation
    nav: {
      expertise: 'Expertise',
      about: 'About Me',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact'
    },

    // Hero Section (main landing)
    hero: {
      label: 'Power Platform Solutions Developer',
      certified: 'Professional Training',
      title: 'José Rodrigo<br>Fuentes Ramírez',
      description: 'Full Stack Developer specialized in Power Platform (Power Apps, Power Automate, and Power BI). I design scalable enterprise solutions that combine Microsoft 365 Low-Code development with robust data architectures in SQL Server, optimizing processes, automating tasks, and turning data into valuable business insights.',
      //stats: ['🏆 Advanced Training', '•', '2+ years at Telefónica', '•', '5+ Power Platform projects', '•', '🤖 AI & Copilot'],
      cta_primary: "Let's talk",
      cta_secondary: 'View projects'
    },

    // Expertise Section (Power Platform)
    expertise: {
      title: 'Power Platform Expertise',
      subtitle: 'I design and develop low-code/no-code solutions that automate processes and improve business productivity',

      powerapps_title: 'Power Apps',
      powerapps_desc: 'Development of Canvas Apps and Model-driven Apps on Microsoft Power Platform.',
      powerapps_highlights: [
        'Data analysis, design, and modeling',
        'Integration with SharePoint and Dynamics 365',
        'Application integration through Microsoft 365, Power Platform, and external service connectors'
      ],

      powerautomate_title: 'Power Automate',
      powerautomate_desc: 'Complex workflows that integrate systems and automate repetitive tasks.',
      powerautomate_highlights: [
        'Process automation (RPA)',
        'Multi-service integrations',
        'Notifications and approvals'
      ],

      powerbi_title: 'Power BI',
      powerbi_desc: 'Interactive dashboards that turn data into actionable insights.',
      powerbi_highlights: [
        'Real-time executive reports',
        'Advanced DAX and Power Query',
        'SQL Server integration'
      ],

      m365_title: 'SharePoint & Microsoft 365',
      m365_desc: 'Modern intranets, document management, and enterprise collaboration.',
      m365_highlights: [
        'SharePoint Online (SPFx)',
        'Microsoft Teams integrations',
        'OneDrive and permissions management'
      ],

      ai_title: 'AI & Microsoft Copilot',
      ai_desc: 'Integration of artificial intelligence into Power Platform with AI Builder and Copilot.',
      ai_highlights: [
        'AI Builder (OCR, Document Processing)',
        'Microsoft Copilot for Power Apps',
        'Prompt engineering and AI automation'
      ]
    },

    // About Section
    about: {
      title: 'About Me',
      lead: "I'm a telecommunications engineer with over 4 years of experience in consulting and software development, currently working at Telefónica as a Full Stack Developer.",
      p1: 'My focus is on creating technological solutions that generate real impact. I have worked with multidisciplinary teams developing enterprise applications with Power Apps, backends in C#, and modern frontends with Angular and TypeScript.',
      p2: "I'm passionate about continuous learning and process improvement. I combine solid technical knowledge with communication and teamwork skills to deliver quality projects.",
      stat1_number: '4+',
      stat1_label: 'Years of experience',
      stat2_number: '10+',
      stat2_label: 'Completed projects',
      stat3_number: '3',
      stat3_label: 'Tech companies'
    },

    // Experience Section
    experience: {
      title: 'Professional Experience',

      // Telefónica
      tel_title: 'Power Platform Developer',
      tel_company: 'Telefónica',
      tel_period: '2023 - Present',
      current: 'Current position',
      tel_desc: [
        
        'Development of 5+ enterprise applications with Microsoft Power Platform for product, presales, and provisioning in B2B.',
        'Automation of critical processes with Power Automate, reducing management time by 80%',
        'Application integration through Microsoft 365, Power Platform, and external service connectors',
        'Creation of 2 interactive dashboards with Power BI for departmental KPI analysis',
        'Integration of AI Builder and Microsoft Copilot for intelligent document processing and development assistance',
        'Use of generative AI (Copilot, Claude, ChatGPT, Gemini, Perplexity) for code optimization, debugging, and technical documentation'
      ],

      // Perklam
      per_title: 'Digital Solutions Developer (Web)',
      per_company: 'Perklam',
      per_period: '2023',
      per_desc: [
        'Development and deployment of the corporate website with WordPress.',
        'Full project management: hosting and domain setup, DNS configuration, theme installation and customization, and production deployment.',
        'Administration and maintenance of the web infrastructure, ensuring its availability and proper operation.',
        'Technical support for computer systems and communications, resolving issues and providing user assistance.'
      ],

      // Adesso
      ade_title: 'Web Developer',
      ade_company: 'Adesso',
      ade_period: '2022 - 2023',
      ade_desc: [
        'Development of web applications using Angular, TypeScript, and Node.js in frontend and backend environments.',
        'Implementation of responsive, optimized user interfaces with HTML5, SCSS, and UX/UI best practices.',
        'Service integration and REST API consumption in modern web application architectures.',
        'Participation in development teams under agile methodologies, using Jira for task management and Bitbucket for version control.'
      ],

      // Freelance
      free_title: 'Android Application Developer',
      free_company: 'Freelance',
      free_period: '2021',
      free_desc: [
        'Development of a mobile Android application ("Epilepsi Control") for recording and tracking clinical information.',
        'Full management of the project lifecycle: analysis, design, development, testing, and deployment.'
      ]
    },

    // Skills Section
    skills: {
      title: 'Tech Stack',
      powerplatform: 'Microsoft Power Platform',
      specialization: 'Specialization',
      m365: 'Microsoft 365 Ecosystem',
      backend: 'Backend Development',
      frontend: 'Web Development'
    },

    // Projects Section
    projects: {
      title: 'Featured Projects',
      filter_all: 'All',
      filter_powerplatform: 'Power Platform',
      filter_webdev: 'Web Development',
      filter_academic: 'Academic',

      driveris_title: 'Car Dealership - Driveris',
      driveris_desc: 'Development of a complete web platform for managing and displaying the vehicle catalog of a dealership in Seville, focused on browsing stock, specifications, and vehicle availability. User interface implemented with Angular and TypeScript, ensuring a smooth, modular, and scalable experience. Worked under agile methodologies, participating in planning, iterative development, and continuous delivery of features.',
      driveris_link: 'View project',

      perklam_title: 'Customization Startup - Perklam',
      perklam_desc: 'Design and development of an e-commerce site for a product customization startup. Built with WordPress and SEO optimizations.',
      perklam_link: 'View project',

      metropolis_title: 'Metropolis-Hastings Method',
      metropolis_desc: "Bachelor's Thesis: Study and application of the Metropolis-Hastings method for Bayesian inversion in remote sensing and vegetation analysis.",
      metropolis_link: 'View document',

      epilepsi_title: 'Epilepsi Control',
      epilepsi_desc: 'Android mobile application that allows people with epilepsy to fully track their condition, medication, and seizures.',
      epilepsi_link: 'Download',

      portfolio_title: 'Personal Portfolio',
      portfolio_desc: 'Development of a responsive portfolio with HTML, JavaScript, and CSS3 to showcase projects and professional experience.',
      portfolio_link: 'View code',

      ondas_title: 'Electromagnetic Wave Simulator',
      ondas_desc: '3D graphical simulator of plane electromagnetic waves with normal and oblique incidence, developed in Matlab.',
      ondas_link: 'View code'
    },

    // Education Section
    education: {
      title: 'Education and Professional Development',
      certs_title: 'Microsoft Power Platform Training',
      view_profile: 'View profile on Microsoft Learn',

      uc3m_title: 'Degree in Communication Systems Engineering',
      uc3m_institution: 'Carlos III University of Madrid',
      uc3m_period: '2021',
      uc3m_desc: 'Specialization in the analysis and design of advanced communication systems, mobile networks, space communications, and information processing.',

      goodjob_title: 'Cybersecurity - IMPACT #include Program',
      goodjob_institution: 'GoodJob Foundation',
      goodjob_period: '2022',

      english_title: 'English B1.2',
      english_institution: 'Impulso06',
      english_period: '2020',

      cert1: 'Web Development for E-Commerce',
      cert2: 'PrestaShop',
      cert3: 'SEO Optimization on WordPress',
      cert4: 'Android and HTML5 Applications',
      cert5: 'IoT Challenges and Solutions'
    },

    // Contact Section
    contact: {
      title: "Let's Talk",
      subtitle: 'Have a project in mind or want to collaborate? I am always open to new opportunities.',
      email: 'Email',
      phone: 'Phone',
      download_cv: 'Download CV'
    },

    // Footer
    footer: {
      rights: '© 2026 José Rodrigo Fuentes Ramírez. All rights reserved.'
    },

    // Accessibility
    a11y: {
      skip_to_content: 'Skip to main content',
      open_menu: 'Open navigation menu',
      main_nav: 'Main navigation'
    }
  }
};

// ===================================
// EXPORTAR PARA USO EN OTROS ARCHIVOS
// ===================================
// Compatibilidad con módulos CommonJS (Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}

// Las traducciones están disponibles globalmente como 'translations'
// y son utilizadas automáticamente por paginaprincipal.js
