/**
 * Portfolio Website - Modern JavaScript
 * Author: José Rodrigo Fuentes Ramírez
 * Year: 2026
 */

(function() {
  'use strict';

  // ===================================
  // STATE MANAGEMENT
  // ===================================
  const state = {
    isScrolled: false,
    isMobileMenuOpen: false,
    currentSection: 'hero',
    currentLang: 'es'
  };

  // ===================================
  // DOM ELEMENTS
  // ===================================
  const elements = {
    navbar: null,
    navToggle: null,
    navMenu: null,
    navLinks: null,
    sections: null,
    langToggle: null,
    i18nElements: null
  };

  // ===================================
  // INITIALIZATION
  // ===================================
  function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setup);
    } else {
      setup();
    }
  }

  function setup() {
    // Cache DOM elements
    cacheElements();

    // Initialize features
    initI18n();
    initSmoothScroll();
    initScrollSpy();
    initMobileMenu();
    initNavbarScroll();
    initAnimations();
    initProjectsFilter(); // NEW: Project filtering

    // Add event listeners
    attachEventListeners();

    console.log('Portfolio initialized successfully');
  }

  function cacheElements() {
    elements.navbar = document.querySelector('.navbar');
    elements.navToggle = document.querySelector('.nav-toggle');
    elements.navMenu = document.querySelector('.nav-menu');
    elements.navLinks = document.querySelectorAll('.nav-link');
    elements.sections = document.querySelectorAll('section[id]');
    elements.langToggle = document.querySelector('#langToggle');
    elements.i18nElements = document.querySelectorAll('[data-i18n]');
  }

  // ===================================
  // SMOOTH SCROLL
  // ===================================
  function initSmoothScroll() {
    // Modern browsers already support scroll-behavior: smooth in CSS
    // But we add JS for more control and older browser support

    elements.navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Also handle hero CTAs
    const heroCTAs = document.querySelectorAll('.hero-cta a, .hero-links a');
    heroCTAs.forEach(link => {
      if (link.hash) {
        link.addEventListener('click', handleSmoothScroll);
      }
    });
  }

  function handleSmoothScroll(e) {
    const targetId = this.getAttribute('href');

    // Only handle internal links
    if (!targetId || !targetId.startsWith('#')) return;

    e.preventDefault();

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    // Close mobile menu if open
    if (state.isMobileMenuOpen) {
      closeMobileMenu();
    }

    // Calculate offset for fixed navbar
    const navbarHeight = elements.navbar?.offsetHeight || 72;
    const targetPosition = targetElement.offsetTop - navbarHeight;

    // Smooth scroll
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Update URL without jumping
    history.pushState(null, '', targetId);
  }

  // ===================================
  // SCROLL SPY
  // ===================================
  function initScrollSpy() {
    // Use Intersection Observer for better performance
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

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
  // MOBILE MENU
  // ===================================
  function initMobileMenu() {
    if (!elements.navToggle) return;

    elements.navToggle.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (state.isMobileMenuOpen &&
          !elements.navMenu.contains(e.target) &&
          !elements.navToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close menu on escape key
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
    document.body.style.overflow = 'hidden'; // Prevent scroll
  }

  function closeMobileMenu() {
    state.isMobileMenuOpen = false;
    elements.navMenu?.classList.remove('active');
    elements.navToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = ''; // Restore scroll
  }

  // ===================================
  // NAVBAR SCROLL EFFECT
  // ===================================
  function initNavbarScroll() {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleNavbarScroll();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Initial check
    handleNavbarScroll();
  }

  function handleNavbarScroll() {
    const scrolled = window.scrollY > 20;

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
  // SCROLL ANIMATIONS
  // ===================================
  function initAnimations() {
    // Use Intersection Observer for scroll animations
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            animationObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Animate elements on scroll
    const animateElements = document.querySelectorAll(
      '.timeline-item, .project-card, .skill-category, .stat-card, .education-card'
    );

    animateElements.forEach(el => {
      animationObserver.observe(el);
    });
  }

  // ===================================
  // LAZY LOADING IMAGES
  // ===================================
  function initLazyLoading() {
    // Modern browsers support loading="lazy" attribute
    // But we can add IntersectionObserver for more control

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
  // INTERNATIONALIZATION (i18n)
  // ===================================
  function initI18n() {
    // Load saved language preference
    const savedLang = localStorage.getItem('portfolio-lang') || 'es';
    state.currentLang = savedLang;

    // Set initial language
    setLanguage(savedLang);

    // Add language toggle handler
    if (elements.langToggle) {
      elements.langToggle.addEventListener('click', toggleLanguage);
    }
  }

  function toggleLanguage() {
    const newLang = state.currentLang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
  }

  function setLanguage(lang) {
    if (!translations[lang]) {
      console.error(`Language "${lang}" not found`);
      return;
    }

    state.currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update flag in toggle button
    const currentLangElement = document.getElementById('currentLang');
    if (currentLangElement) {
      currentLangElement.textContent = lang === 'es' ? '🇪🇸' : '🇬🇧';
      currentLangElement.setAttribute('title', lang === 'es' ? 'Español' : 'English');
    }

    // Translate all elements
    translatePage(lang);
  }

  function translatePage(lang) {
    const t = translations[lang];

    // Translate elements with data-i18n attribute
    elements.i18nElements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = getNestedTranslation(t, key);

      if (translation) {
        // Check if element should use innerHTML (for HTML content like <br>)
        if (element.hasAttribute('data-i18n-html')) {
          element.innerHTML = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    // Translate list items (for timeline descriptions)
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

    // Update aria-labels
    updateAriaLabels(lang);

    // Update meta tags
    updateMetaTags(lang);
  }

  function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }

  function updateAriaLabels(lang) {
    const t = translations[lang];

    // Update navbar aria-label
    const navbar = document.querySelector('.navbar');
    if (navbar && t.a11y?.main_nav) {
      navbar.setAttribute('aria-label', t.a11y.main_nav);
    }

    // Update nav-toggle aria-label
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle && t.a11y?.open_menu) {
      navToggle.setAttribute('aria-label', t.a11y.open_menu);
    }
  }

  function updateMetaTags(lang) {
    const descriptions = {
      es: 'José Rodrigo Fuentes Ramírez - Full Stack Developer especializado en Power Apps, C# y Angular. Ingeniero de Telecomunicaciones con experiencia en Telefónica y consultoría tecnológica.',
      en: 'José Rodrigo Fuentes Ramírez - Full Stack Developer specialized in Power Apps, C# and Angular. Telecommunications Engineer with experience at Telefónica and technology consulting.'
    };

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', descriptions[lang]);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', descriptions[lang]);
    }
  }

  // ===================================
  // KEYBOARD NAVIGATION
  // ===================================
  function attachEventListeners() {
    // Keyboard navigation for accessibility
    document.addEventListener('keydown', (e) => {
      // Navigate sections with arrow keys (when not in input)
      if (document.activeElement.tagName !== 'INPUT' &&
          document.activeElement.tagName !== 'TEXTAREA') {

        if (e.key === 'ArrowDown') {
          navigateToNextSection();
        } else if (e.key === 'ArrowUp') {
          navigateToPreviousSection();
        }
      }
    });

    // Handle focus trap in mobile menu
    if (elements.navMenu) {
      elements.navMenu.addEventListener('keydown', handleMenuKeyboard);
    }
  }

  function handleMenuKeyboard(e) {
    if (!state.isMobileMenuOpen) return;

    const focusableElements = elements.navMenu.querySelectorAll(
      'a[href], button:not([disabled])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

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
    const sectionsArray = Array.from(elements.sections);
    const currentIndex = sectionsArray.findIndex(s => s.id === state.currentSection);

    if (currentIndex < sectionsArray.length - 1) {
      const nextSection = sectionsArray[currentIndex + 1];
      scrollToSection(nextSection);
    }
  }

  function navigateToPreviousSection() {
    const sectionsArray = Array.from(elements.sections);
    const currentIndex = sectionsArray.findIndex(s => s.id === state.currentSection);

    if (currentIndex > 0) {
      const previousSection = sectionsArray[currentIndex - 1];
      scrollToSection(previousSection);
    }
  }

  function scrollToSection(section) {
    const navbarHeight = elements.navbar?.offsetHeight || 72;
    const targetPosition = section.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }

  // ===================================
  // PROJECT FILTERING
  // ===================================
  function initProjectsFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (!filterButtons.length || !projectCards.length) {
      return; // No filters or projects found
    }

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects with animation
        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');

          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            // Re-trigger animation
            card.classList.remove('fade-in-up');
            setTimeout(() => {
              card.classList.add('fade-in-up');
            }, 10);
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ===================================
  // UTILITY FUNCTIONS
  // ===================================
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
  // PERFORMANCE MONITORING (DEV ONLY)
  // ===================================
  function logPerformance() {
    if (window.performance && console.table) {
      const perfData = performance.getEntriesByType('navigation')[0];

      console.log('Performance Metrics:');
      console.table({
        'DNS Lookup': `${Math.round(perfData.domainLookupEnd - perfData.domainLookupStart)}ms`,
        'TCP Connection': `${Math.round(perfData.connectEnd - perfData.connectStart)}ms`,
        'Response Time': `${Math.round(perfData.responseEnd - perfData.requestStart)}ms`,
        'DOM Processing': `${Math.round(perfData.domComplete - perfData.domLoading)}ms`,
        'Page Load': `${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`
      });
    }
  }

  // ===================================
  // PUBLIC API (if needed)
  // ===================================
  window.PortfolioApp = {
    init,
    state,
    scrollToSection,
    closeMobileMenu
  };

  // ===================================
  // START APPLICATION
  // ===================================
  init();

})();

// ===================================
// LEGACY COMPATIBILITY
// ===================================
// Keep these empty functions for backward compatibility
// They are not needed anymore but won't break if called
function datospantalla() {
  console.log('datospantalla() is deprecated - functionality now handled by modern JS');
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
