/**
 * Portfolio Website - JavaScript Moderno
 * Autor: José Rodrigo Fuentes Ramírez
 * Año: 2026
 *
 * Sistema completo de gestión del portfolio con funcionalidades:
 * - Navegación smooth scroll
 * - Sistema bilingüe ES/EN con persistencia
 * - Menú responsive para móviles
 * - Animaciones con Intersection Observer
 * - Filtrado de proyectos por categoría
 */

(function() {
  'use strict';

  // ===================================
  // GESTIÓN DE ESTADO GLOBAL
  // ===================================
  const state = {
    isScrolled: false,         // Si la página ha hecho scroll (para navbar)
    isMobileMenuOpen: false,   // Si el menú móvil está abierto
    currentSection: 'hero',    // Sección actual visible en el viewport
    currentLang: 'es'          // Idioma actual del sitio (es/en)
  };

  // ===================================
  // ELEMENTOS DEL DOM (CACHE)
  // ===================================
  const elements = {
    navbar: null,          // Barra de navegación principal
    navToggle: null,       // Botón hamburguesa (móvil)
    navMenu: null,         // Menú de navegación
    navLinks: null,        // Enlaces del menú
    sections: null,        // Todas las secciones con ID
    langToggle: null,      // Botón de cambio de idioma
    i18nElements: null     // Elementos con traducciones (data-i18n)
  };

  // ===================================
  // INICIALIZACIÓN
  // ===================================
  function init() {
    // Esperar a que el DOM esté completamente cargado
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setup);
    } else {
      setup();
    }
  }

  function setup() {
    // Cachear elementos del DOM para mejor rendimiento
    cacheElements();

    // Inicializar todas las funcionalidades
    initI18n();              // Sistema de internacionalización
    initSmoothScroll();      // Navegación suave entre secciones
    initScrollSpy();         // Detección de sección activa al hacer scroll
    initMobileMenu();        // Menú hamburguesa responsive
    initNavbarScroll();      // Efecto de scroll en la navbar
    initAnimations();        // Animaciones al hacer scroll
    initProjectsFilter();    // Sistema de filtrado de proyectos

    // Adjuntar eventos globales
    attachEventListeners();

    console.log('✅ Portfolio inicializado correctamente');
  }

  function cacheElements() {
    // Guardar referencias a elementos del DOM que se usan frecuentemente
    elements.navbar = document.querySelector('.navbar');
    elements.navToggle = document.querySelector('.nav-toggle');
    elements.navMenu = document.querySelector('.nav-menu');
    elements.navLinks = document.querySelectorAll('.nav-link');
    elements.sections = document.querySelectorAll('section[id]');
    elements.langToggle = document.querySelector('#langToggle');
    elements.i18nElements = document.querySelectorAll('[data-i18n]');
  }

  // ===================================
  // SMOOTH SCROLL (NAVEGACIÓN SUAVE)
  // ===================================
  function initSmoothScroll() {
    // Los navegadores modernos soportan scroll-behavior: smooth en CSS
    // Pero añadimos JS para más control y compatibilidad con navegadores antiguos

    // Agregar smooth scroll a los enlaces del menú
    elements.navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // También manejar los botones CTA del hero
    const heroCTAs = document.querySelectorAll('.hero-cta a, .hero-links a');
    heroCTAs.forEach(link => {
      if (link.hash) {
        link.addEventListener('click', handleSmoothScroll);
      }
    });
  }

  function handleSmoothScroll(e) {
    const targetId = this.getAttribute('href');

    // Solo manejar enlaces internos (que empiezan con #)
    if (!targetId || !targetId.startsWith('#')) return;

    e.preventDefault();

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    // Cerrar menú móvil si está abierto
    if (state.isMobileMenuOpen) {
      closeMobileMenu();
    }

    // Calcular offset para compensar la navbar fija
    const navbarHeight = elements.navbar?.offsetHeight || 72;
    const targetPosition = targetElement.offsetTop - navbarHeight;

    // Hacer scroll suave a la sección
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Actualizar URL sin hacer scroll (para compartir enlaces directos)
    history.pushState(null, '', targetId);
  }

  // ===================================
  // SCROLL SPY (DETECCIÓN DE SECCIÓN)
  // ===================================
  function initScrollSpy() {
    // Usar Intersection Observer para mejor rendimiento que scroll events
    const observerOptions = {
      root: null,                           // Viewport como root
      rootMargin: '-20% 0px -80% 0px',     // Activar cuando la sección está en el centro
      threshold: 0                          // Disparar tan pronto como sea visible
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observar todas las secciones
    elements.sections.forEach(section => {
      observer.observe(section);
    });
  }

  function handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        updateActiveNavLink(sectionId);
        state.currentSection = sectionId;
      }
    });
  }

  function updateActiveNavLink(sectionId) {
    // Actualizar clase 'active' en el enlace del menú correspondiente
    elements.navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${sectionId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // ===================================
  // MENÚ MÓVIL (RESPONSIVE)
  // ===================================
  function initMobileMenu() {
    if (!elements.navToggle) return;

    elements.navToggle.addEventListener('click', toggleMobileMenu);

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (state.isMobileMenuOpen &&
          !elements.navMenu.contains(e.target) &&
          !elements.navToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.isMobileMenuOpen) {
        closeMobileMenu();
      }
    });
  }

  function toggleMobileMenu() {
    if (state.isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    state.isMobileMenuOpen = true;
    elements.navMenu?.classList.add('active');
    elements.navToggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
  }

  function closeMobileMenu() {
    state.isMobileMenuOpen = false;
    elements.navMenu?.classList.remove('active');
    elements.navToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = ''; // Restaurar scroll del body
  }

  // ===================================
  // EFECTO DE SCROLL EN NAVBAR
  // ===================================
  function initNavbarScroll() {
    let ticking = false;

    // Usar requestAnimationFrame para optimizar performance
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleNavbarScroll();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Verificación inicial
    handleNavbarScroll();
  }

  function handleNavbarScroll() {
    const scrolled = window.scrollY > 20;

    // Solo actualizar DOM si el estado cambió
    if (scrolled !== state.isScrolled) {
      state.isScrolled = scrolled;

      if (scrolled) {
        elements.navbar?.classList.add('scrolled');
      } else {
        elements.navbar?.classList.remove('scrolled');
      }
    }
  }

  // ===================================
  // ANIMACIONES AL HACER SCROLL
  // ===================================
  function initAnimations() {
    // Usar Intersection Observer para activar animaciones al entrar en viewport
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Agregar clase de animación
            entry.target.classList.add('fade-in-up');
            // Dejar de observar este elemento (animar solo una vez)
            animationObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,                    // Activar cuando 10% del elemento es visible
        rootMargin: '0px 0px -100px 0px'  // Activar un poco antes de entrar completamente
      }
    );

    // Seleccionar elementos a animar
    const animateElements = document.querySelectorAll(
      '.timeline-item, .project-card, .skill-category, .stat-card, .education-card'
    );

    animateElements.forEach(el => {
      animationObserver.observe(el);
    });
  }

  // ===================================
  // LAZY LOADING DE IMÁGENES
  // ===================================
  function initLazyLoading() {
    // Los navegadores modernos soportan el atributo loading="lazy"
    // Pero podemos agregar IntersectionObserver para más control

    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }

  // ===================================
  // INTERNACIONALIZACIÓN (i18n)
  // ===================================
  function initI18n() {
    // Cargar preferencia de idioma guardada (o español por defecto)
    const savedLang = localStorage.getItem('portfolio-lang') || 'es';
    state.currentLang = savedLang;

    // Establecer idioma inicial
    setLanguage(savedLang);

    // Agregar manejador al botón de cambio de idioma
    if (elements.langToggle) {
      elements.langToggle.addEventListener('click', toggleLanguage);
    }
  }

  function toggleLanguage() {
    // Cambiar entre español e inglés
    const newLang = state.currentLang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
  }

  function setLanguage(lang) {
    // Verificar que el idioma existe en el objeto de traducciones
    if (!translations[lang]) {
      console.error(`Idioma "${lang}" no encontrado`);
      return;
    }

    // Actualizar estado y guardar preferencia
    state.currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    // Actualizar atributo lang del HTML (para SEO y accesibilidad)
    document.documentElement.lang = lang;

    // Actualizar bandera en el botón de cambio de idioma
    // IMPORTANTE: Mostrar la bandera del idioma AL QUE PUEDES CAMBIAR, no el actual
    const currentLangElement = document.getElementById('currentLang');
    if (currentLangElement) {
      // Si está en español, mostrar bandera inglesa (para cambiar a inglés)
      // Si está en inglés, mostrar bandera española (para cambiar a español)

      // Definir SVGs de las banderas
      const flagSpain = `
        <svg class="flag-icon" viewBox="0 0 750 500" xmlns="http://www.w3.org/2000/svg">
          <!-- Fondo general (amarillo) -->
          <rect width="750" height="500" fill="#F9A603" />
          <!-- Franja superior (roja) -->
          <rect width="750" height="125" fill="#C60B1E" />
          <!-- Franja inferior (roja) -->
          <rect y="375" width="750" height="125" fill="#C60B1E" />
        </svg>
      `;

      const flagUK = `
        <svg class="flag-icon" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#012169" d="M0 0h640v480H0z"/>
          <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
          <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
          <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
          <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
        </svg>
      `;

      // Mostrar la bandera del idioma al que se puede cambiar
      currentLangElement.innerHTML = lang === 'es' ? flagUK : flagSpain;
      currentLangElement.setAttribute('title', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');
    }

    // Traducir todos los elementos de la página
    translatePage(lang);
  }

  function translatePage(lang) {
    const t = translations[lang];

    // Traducir elementos con atributo data-i18n
    elements.i18nElements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = getNestedTranslation(t, key);

      if (translation) {
        // Verificar si el elemento debe usar innerHTML (para contenido HTML como <br>)
        if (element.hasAttribute('data-i18n-html')) {
          element.innerHTML = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    // Traducir listas de elementos (para descripciones de experiencia)
    const listElements = document.querySelectorAll('[data-i18n-list]');
    listElements.forEach(ul => {
      const key = ul.getAttribute('data-i18n-list');
      const translations_list = getNestedTranslation(t, key);

      if (Array.isArray(translations_list)) {
        const listItems = ul.querySelectorAll('li');
        listItems.forEach((li, index) => {
          if (translations_list[index]) {
            li.textContent = translations_list[index];
          }
        });
      }
    });

    // Actualizar etiquetas ARIA para accesibilidad
    updateAriaLabels(lang);

    // Actualizar meta tags para SEO
    updateMetaTags(lang);
  }

  function getNestedTranslation(obj, path) {
    // Obtener traducción usando notación de punto (ej: 'hero.title')
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }

  function updateAriaLabels(lang) {
    const t = translations[lang];

    // Actualizar aria-label de la navbar
    const navbar = document.querySelector('.navbar');
    if (navbar && t.a11y?.main_nav) {
      navbar.setAttribute('aria-label', t.a11y.main_nav);
    }

    // Actualizar aria-label del botón de menú móvil
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle && t.a11y?.open_menu) {
      navToggle.setAttribute('aria-label', t.a11y.open_menu);
    }
  }

  function updateMetaTags(lang) {
    // Descripciones meta para cada idioma (SEO)
    const descriptions = {
      es: 'José Rodrigo Fuentes Ramírez - Microsoft Power Platform Specialist certificado. Especializado en Power Apps, Power Automate y Power BI. Consultor en Telefónica con 15+ proyectos de automatización empresarial.',
      en: 'José Rodrigo Fuentes Ramírez - Microsoft Certified Power Platform Specialist. Specialized in Power Apps, Power Automate and Power BI. Consultant at Telefónica with 15+ enterprise automation projects.'
    };

    // Actualizar meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', descriptions[lang]);
    }

    // Actualizar Open Graph description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', descriptions[lang]);
    }
  }

  // ===================================
  // NAVEGACIÓN POR TECLADO
  // ===================================
  function attachEventListeners() {
    // Navegación por teclado para accesibilidad
    document.addEventListener('keydown', (e) => {
      // Navegar entre secciones con flechas (cuando no estás en un input)
      if (document.activeElement.tagName !== 'INPUT' &&
          document.activeElement.tagName !== 'TEXTAREA') {

        if (e.key === 'ArrowDown') {
          navigateToNextSection();
        } else if (e.key === 'ArrowUp') {
          navigateToPreviousSection();
        }
      }
    });

    // Manejar focus trap en menú móvil (para navegación por teclado)
    if (elements.navMenu) {
      elements.navMenu.addEventListener('keydown', handleMenuKeyboard);
    }
  }

  function handleMenuKeyboard(e) {
    if (!state.isMobileMenuOpen) return;

    // Obtener todos los elementos navegables del menú
    const focusableElements = elements.navMenu.querySelectorAll(
      'a[href], button:not([disabled])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Implementar focus trap (mantener foco dentro del menú)
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }

  function navigateToNextSection() {
    // Navegar a la siguiente sección con flecha abajo
    const sectionsArray = Array.from(elements.sections);
    const currentIndex = sectionsArray.findIndex(s => s.id === state.currentSection);

    if (currentIndex < sectionsArray.length - 1) {
      const nextSection = sectionsArray[currentIndex + 1];
      scrollToSection(nextSection);
    }
  }

  function navigateToPreviousSection() {
    // Navegar a la sección anterior con flecha arriba
    const sectionsArray = Array.from(elements.sections);
    const currentIndex = sectionsArray.findIndex(s => s.id === state.currentSection);

    if (currentIndex > 0) {
      const previousSection = sectionsArray[currentIndex - 1];
      scrollToSection(previousSection);
    }
  }

  function scrollToSection(section) {
    // Hacer scroll a una sección específica
    const navbarHeight = elements.navbar?.offsetHeight || 72;
    const targetPosition = section.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }

  // ===================================
  // FILTRADO DE PROYECTOS
  // ===================================
  function initProjectsFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Salir si no hay botones de filtro o proyectos
    if (!filterButtons.length || !projectCards.length) {
      return;
    }

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Actualizar botón activo
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filtrar proyectos con animación
        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');

          if (filter === 'all' || category === filter) {
            // Mostrar proyecto
            card.style.display = 'flex';
            // Re-activar animación
            card.classList.remove('fade-in-up');
            setTimeout(() => {
              card.classList.add('fade-in-up');
            }, 10);
          } else {
            // Ocultar proyecto
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ===================================
  // FUNCIONES UTILITARIAS
  // ===================================

  /**
   * Debounce - Retrasa la ejecución de una función hasta que pasen X ms sin que se llame
   * Útil para eventos que se disparan frecuentemente (resize, scroll, input)
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Throttle - Limita la ejecución de una función a una vez cada X ms
   * Similar a debounce pero garantiza ejecución regular
   */
  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // ===================================
  // MONITOREO DE PERFORMANCE (SOLO DEV)
  // ===================================
  function logPerformance() {
    // Función para medir tiempos de carga (útil para debugging)
    if (window.performance && console.table) {
      const perfData = performance.getEntriesByType('navigation')[0];

      console.log('📊 Métricas de Performance:');
      console.table({
        'DNS Lookup': `${Math.round(perfData.domainLookupEnd - perfData.domainLookupStart)}ms`,
        'Conexión TCP': `${Math.round(perfData.connectEnd - perfData.connectStart)}ms`,
        'Tiempo de Respuesta': `${Math.round(perfData.responseEnd - perfData.requestStart)}ms`,
        'Procesamiento DOM': `${Math.round(perfData.domComplete - perfData.domLoading)}ms`,
        'Carga Total': `${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`
      });
    }
  }

  // ===================================
  // API PÚBLICA (si se necesita)
  // ===================================
  window.PortfolioApp = {
    init,                // Inicializar la aplicación
    state,               // Estado global (lectura)
    scrollToSection,     // Navegar a una sección programáticamente
    closeMobileMenu      // Cerrar menú móvil programáticamente
  };

  // ===================================
  // INICIAR APLICACIÓN
  // ===================================
  init();

})();

// ===================================
// COMPATIBILIDAD CON VERSIÓN LEGACY
// ===================================
// Mantener estas funciones vacías para compatibilidad hacia atrás
// Ya no son necesarias pero no romperán el código si se llaman

function datospantalla() {
  console.warn('datospantalla() está deprecada - funcionalidad manejada por JS moderno');
}

function mostrarPrincipal() {
  const section = document.querySelector('#hero');
  if (section) window.PortfolioApp?.scrollToSection(section);
}

function mostrarUniversidad() {
  const section = document.querySelector('#education');
  if (section) window.PortfolioApp?.scrollToSection(section);
}

function mostrarProyectos() {
  const section = document.querySelector('#projects');
  if (section) window.PortfolioApp?.scrollToSection(section);
}

function mostrarDocumentos() {
  const section = document.querySelector('#education');
  if (section) window.PortfolioApp?.scrollToSection(section);
}
