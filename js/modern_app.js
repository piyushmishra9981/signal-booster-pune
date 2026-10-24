/**
 * Modern Application Scripts for Mobile Signal Booster Pune
 * Provides: Mobile Drawer Nav, Accessible FAQ Accordion, Scroll Reveal Animations, and Smooth Scroll.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const menuToggleBtn = document.getElementById('mobileMenuToggle');
  const navDrawer = document.getElementById('mobileNavDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  function openDrawer() {
    if (navDrawer && drawerOverlay && menuToggleBtn) {
      navDrawer.classList.add('open');
      drawerOverlay.classList.add('open');
      menuToggleBtn.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (navDrawer && drawerOverlay && menuToggleBtn) {
      navDrawer.classList.remove('open');
      drawerOverlay.classList.remove('open');
      menuToggleBtn.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  if (menuToggleBtn) {
    menuToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (navDrawer && navDrawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeDrawer);
  }

  // Close drawer when clicking any link inside it
  const drawerLinks = document.querySelectorAll('.mobile-nav-drawer a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // 2. Interactive FAQ Accordion
  const faqHeaders = document.querySelectorAll('.faq-header-btn');
  faqHeaders.forEach(button => {
    button.addEventListener('click', () => {
      const parentCard = button.closest('.faq-card-item');
      if (!parentCard) return;
      const bodyContent = parentCard.querySelector('.faq-body-content');
      const isExpanded = parentCard.classList.contains('active');

      // Close other accordion items
      document.querySelectorAll('.faq-card-item.active').forEach(activeCard => {
        if (activeCard !== parentCard) {
          activeCard.classList.remove('active');
          const otherBody = activeCard.querySelector('.faq-body-content');
          if (otherBody) otherBody.style.maxHeight = null;
        }
      });

      if (!isExpanded) {
        parentCard.classList.add('active');
        if (bodyContent) {
          bodyContent.style.maxHeight = bodyContent.scrollHeight + 30 + 'px';
        }
      } else {
        parentCard.classList.remove('active');
        if (bodyContent) {
          bodyContent.style.maxHeight = null;
        }
      }
    });
  });

  // Automatically open the first FAQ item if present
  const firstFaq = document.querySelector('.faq-card-item');
  if (firstFaq) {
    const firstBtn = firstFaq.querySelector('.faq-header-btn');
    if (firstBtn) {
      firstBtn.click();
    }
  }

  // 3. Smooth scrolling for internal anchors with sticky header offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#' && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerHeight = document.querySelector('.modern-header')?.offsetHeight || 80;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 15;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // 4. Header Elevation on Scroll
  const header = document.querySelector('.modern-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = '0 4px 20px -2px rgba(0, 0, 0, 0.06)';
      }
    }, { passive: true });
  }

  // 5. Lightweight Scroll Reveal Animations using IntersectionObserver
  if ('IntersectionObserver' in window) {
    const revealElements = document.querySelectorAll('.service-card-modern, .feature-box-modern, .product-item-card, .install-step-card, .team-card-modern, .blog-card-modern, .area-badge-card, .coverage-cat-card, .target-env-card, .carrier-card-modern, .arch-card-modern');
    
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });
  }
});
