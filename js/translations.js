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
      label: 'Microsoft Power Platform Specialist',
      certified: 'Microsoft Certified',
      title: 'José Rodrigo<br>Fuentes Ramírez',
      description: 'Full Stack Developer especializado en Power Apps, Power Automate y Power BI. Transformo procesos empresariales en soluciones digitales escalables combinando low-code Microsoft 365 con desarrollo custom en C# y Angular.',
      stats: ['🏆 Microsoft Certified', '•', '2+ años Telefónica', '•', '15+ proyectos Power Platform', '•', '🤖 IA & Copilot'],
      cta_primary: 'Hablemos',
      cta_secondary: 'Ver proyectos'
    },

    // Sección de Especialización (Power Platform)
    expertise: {
      title: 'Especialización Power Platform',
      subtitle: 'Diseño y desarrollo soluciones low-code/no-code que automatizan procesos y mejoran la productividad empresarial',

      powerapps_title: 'Power Apps',
      powerapps_desc: 'Canvas apps y Model-driven apps conectadas a Dataverse, SharePoint y APIs custom.',
      powerapps_highlights: [
        'Aplicaciones empresariales multiplataforma',
        'Integración con Dynamics 365',
        'Conectores personalizados C#'
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
        'Integración con Dataverse'
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
      lead: 'Soy un ingeniero de telecomunicaciones con más de 2 años de experiencia en consultoría y desarrollo de software, actualmente trabajando en Telefónica como Full Stack Developer.',
      p1: 'Mi enfoque se centra en crear soluciones tecnológicas que generen impacto real. He trabajado con equipos multidisciplinarios desarrollando aplicaciones empresariales con Power Apps, backends en C# y frontends modernos con Angular y TypeScript.',
      p2: 'Me apasiona el aprendizaje continuo y la mejora de procesos. Combino sólidos conocimientos técnicos con habilidades de comunicación y trabajo en equipo para entregar proyectos de calidad.',
      stat1_number: '2+',
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
        'Desarrollo de 12+ aplicaciones empresariales con Power Apps (Canvas y Model-driven) para departamentos de HR, Finance y Operations',
        'Automatización de 18+ procesos críticos con Power Automate, reduciendo tiempo de gestión en 45%',
        'Implementación de conectores personalizados en C# para integración con sistemas legacy y APIs externas',
        'Creación de 8 dashboards interactivos con Power BI para análisis de KPIs departamentales en tiempo real',
        'Integración de AI Builder y Microsoft Copilot para procesamiento inteligente de documentos y asistencia en desarrollo',
        'Uso de IA generativa (Claude, ChatGPT) para optimización de código, debugging y documentación técnica'
      ],

      // Perklam
      per_title: 'Técnico Informático',
      per_company: 'Perklam',
      per_period: '2023',
      per_desc: [
        'Desarrollo de página web corporativa',
        'Asistencia en tecnologías informáticas y de comunicaciones'
      ],

      // Adesso
      ade_title: 'Frontend Developer',
      ade_company: 'Adesso',
      ade_period: '2022 - 2023',
      ade_desc: [
        'Desarrollo de aplicaciones web con Angular y TypeScript',
        'Implementación de interfaces responsivas con HTML5 y SCSS',
        'Uso de metodologías ágiles con Jira y Bitbucket'
      ],

      // Freelance
      free_title: 'Desarrollo de Aplicación Android',
      free_company: 'Freelance',
      free_period: '2021',
      free_desc: [
        'Desarrollo de aplicación móvil "Epilepsi Control" para Android',
        'Gestión completa del proyecto desde diseño hasta implementación'
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
      driveris_desc: 'Desarrollo de plataforma web completa para concesionario de vehículos en Sevilla. Implementación con Angular, TypeScript y metodologías ágiles.',
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
      portfolio_desc: 'Desarrollo de portfolio responsive con Bootstrap, JavaScript y CSS3 para mostrar proyectos y experiencia profesional.',
      portfolio_link: 'Ver código',

      ondas_title: 'Simulador de Ondas Electromagnéticas',
      ondas_desc: 'Simulador gráfico 3D de ondas planas electromagnéticas con incidencia normal y oblicua desarrollado en Matlab.',
      ondas_link: 'Ver código'
    },

    // Education Section
    education: {
      title: 'Educación y certificaciones',
      certs_title: 'Certificaciones Microsoft',
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
    // Navegación principal
    nav: {
      expertise: 'Expertise',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact'
    },

    // Sección Hero (portada principal)
    hero: {
      label: 'Microsoft Power Platform Specialist',
      certified: 'Microsoft Certified',
      title: 'José Rodrigo<br>Fuentes Ramírez',
      description: 'Full Stack Developer specialized in Power Apps, Power Automate and Power BI. I transform business processes into scalable digital solutions combining low-code Microsoft 365 with custom development in C# and Angular.',
      stats: ['🏆 Microsoft Certified', '•', '2+ years Telefónica', '•', '15+ Power Platform projects', '•', '🤖 AI & Copilot'],
      cta_primary: "Let's talk",
      cta_secondary: 'View projects'
    },

    // Sección de Especialización (Power Platform)
    expertise: {
      title: 'Power Platform Expertise',
      subtitle: 'I design and develop low-code/no-code solutions that automate processes and improve business productivity',

      powerapps_title: 'Power Apps',
      powerapps_desc: 'Canvas and Model-driven apps connected to Dataverse, SharePoint and custom APIs.',
      powerapps_highlights: [
        'Cross-platform enterprise applications',
        'Dynamics 365 integration',
        'Custom C# connectors'
      ],

      powerautomate_title: 'Power Automate',
      powerautomate_desc: 'Complex workflows that integrate systems and automate repetitive tasks.',
      powerautomate_highlights: [
        'Process automation (RPA)',
        'Multi-service integrations',
        'Notifications and approvals'
      ],

      powerbi_title: 'Power BI',
      powerbi_desc: 'Interactive dashboards that transform data into actionable insights.',
      powerbi_highlights: [
        'Real-time executive reports',
        'Advanced DAX and Power Query',
        'Dataverse integration'
      ],

      m365_title: 'SharePoint & Microsoft 365',
      m365_desc: 'Modern intranets, document management and enterprise collaboration.',
      m365_highlights: [
        'SharePoint Online (SPFx)',
        'Microsoft Teams integrations',
        'OneDrive and permissions management'
      ],

      ai_title: 'AI & Microsoft Copilot',
      ai_desc: 'Artificial intelligence integration in Power Platform with AI Builder and Copilot.',
      ai_highlights: [
        'AI Builder (OCR, Document Processing)',
        'Microsoft Copilot for Power Apps',
        'Prompt engineering and AI automation'
      ]
    },

    // About Section
    about: {
      title: 'About me',
      lead: 'I am a telecommunications engineer with over 2 years of experience in consulting and software development, currently working at Telefónica as a Full Stack Developer.',
      p1: 'My focus is on creating technological solutions that generate real impact. I have worked with multidisciplinary teams developing enterprise applications with Power Apps, backends in C# and modern frontends with Angular and TypeScript.',
      p2: 'I am passionate about continuous learning and process improvement. I combine solid technical knowledge with communication and teamwork skills to deliver quality projects.',
      stat1_number: '2+',
      stat1_label: 'Years of experience',
      stat2_number: '10+',
      stat2_label: 'Completed projects',
      stat3_number: '3',
      stat3_label: 'Tech companies'
    },

    // Experience Section
    experience: {
      title: 'Professional experience',

      // Telefónica
      tel_title: 'Power Platform Developer',
      tel_company: 'Telefónica',
      tel_period: '2023 - Present',
      current: 'Current position',
      tel_desc: [
        'Development of 12+ enterprise applications with Power Apps (Canvas and Model-driven) for HR, Finance and Operations departments',
        'Automation of 18+ critical processes with Power Automate, reducing management time by 45%',
        'Implementation of custom connectors in C# for integration with legacy systems and external APIs',
        'Creation of 8 interactive dashboards with Power BI for real-time departmental KPI analysis',
        'Integration of AI Builder and Microsoft Copilot for intelligent document processing and development assistance',
        'Use of generative AI (Claude, ChatGPT) for code optimization, debugging and technical documentation'
      ],

      // Perklam
      per_title: 'IT Technician',
      per_company: 'Perklam',
      per_period: '2023',
      per_desc: [
        'Corporate website development',
        'Assistance in IT and communications technologies'
      ],

      // Adesso
      ade_title: 'Frontend Developer',
      ade_company: 'Adesso',
      ade_period: '2022 - 2023',
      ade_desc: [
        'Web application development with Angular and TypeScript',
        'Implementation of responsive interfaces with HTML5 and SCSS',
        'Use of agile methodologies with Jira and Bitbucket'
      ],

      // Freelance
      free_title: 'Android Application Development',
      free_company: 'Freelance',
      free_period: '2021',
      free_desc: [
        'Development of "Epilepsi Control" mobile application for Android',
        'Complete project management from design to implementation'
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
      title: 'Featured projects',
      filter_all: 'All',
      filter_powerplatform: 'Power Platform',
      filter_webdev: 'Web Dev',
      filter_academic: 'Academic',

      driveris_title: 'Car Dealership - Driveris',
      driveris_desc: 'Development of complete web platform for vehicle dealership in Seville. Implementation with Angular, TypeScript and agile methodologies.',
      driveris_link: 'View project',

      perklam_title: 'Customization Startup - Perklam',
      perklam_desc: 'Design and development of e-commerce for product customization startup. Implemented with WordPress and SEO optimizations.',
      perklam_link: 'View project',

      metropolis_title: 'Metropolis-Hastings Method',
      metropolis_desc: 'Bachelor\'s Thesis: Study and application of the Metropolis-Hastings method for Bayesian inversion in remote sensing and vegetation analysis.',
      metropolis_link: 'View document',

      epilepsi_title: 'Epilepsi Control',
      epilepsi_desc: 'Mobile application for Android that allows people with epilepsy to keep complete track of their disease, medication and seizures.',
      epilepsi_link: 'Download',

      portfolio_title: 'Personal Portfolio',
      portfolio_desc: 'Development of responsive portfolio with Bootstrap, JavaScript and CSS3 to showcase projects and professional experience.',
      portfolio_link: 'View code',

      ondas_title: 'Electromagnetic Waves Simulator',
      ondas_desc: '3D graphical simulator of electromagnetic plane waves with normal and oblique incidence developed in Matlab.',
      ondas_link: 'View code'
    },

    // Education Section
    education: {
      title: 'Education and certifications',
      certs_title: 'Microsoft Certifications',
      view_profile: 'View Microsoft Learn Profile',

      uc3m_title: 'Bachelor\'s Degree in Communication Systems Engineering',
      uc3m_institution: 'Carlos III University of Madrid',
      uc3m_period: '2021',
      uc3m_desc: 'Specialization in analysis and design of advanced communication systems, mobile networks, space communications and information processing.',

      goodjob_title: 'Cybersecurity - IMPACT #include Program',
      goodjob_institution: 'GoodJob Foundation',
      goodjob_period: '2022',

      english_title: 'English B1.2',
      english_institution: 'Impulso06',
      english_period: '2020',

      cert1: 'Web Development for E-commerce',
      cert2: 'PrestaShop',
      cert3: 'SEO Optimization in WordPress',
      cert4: 'Applications with Android and HTML5',
      cert5: 'IoT Challenges and Solutions'
    },

    // Contact Section
    contact: {
      title: "Let's talk",
      subtitle: 'Do you have a project in mind or want to collaborate? I am always open to new opportunities.',
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
