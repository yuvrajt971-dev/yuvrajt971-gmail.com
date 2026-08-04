/**
 * STUDIO11 Women's Salon - Ultra-Premium Luxury Script
 * Vanilla JavaScript (No jQuery, No external dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. PRELOADER & INITIALIZATION
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
      }, 500);
    });
    // Fallback if load already fired
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
    }, 1500);
  }

  // 2. SCROLL PROGRESS BAR & STICKY NAVBAR
  const scrollProgress = document.getElementById('scroll-progress');
  const header = document.querySelector('.header');
  const scrollTopBtn = document.getElementById('scroll-top-btn');

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    if (scrollProgress) {
      scrollProgress.style.width = scrolled + '%';
    }

    if (header) {
      if (winScroll > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (scrollTopBtn) {
      if (winScroll > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }

    // Active Nav Highlight
    highlightActiveNav();
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Active Nav Link Observer
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightActiveNav() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // 3. MOBILE DRAWER MENU
  const hamburger = document.getElementById('hamburger');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function toggleMobileMenu() {
    if (mobileDrawer && mobileBackdrop) {
      mobileDrawer.classList.toggle('open');
      mobileBackdrop.classList.toggle('open');
      document.body.style.overflow = mobileDrawer.classList.contains('open') ? 'hidden' : '';
    }
  }

  if (hamburger) hamburger.addEventListener('click', toggleMobileMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', toggleMobileMenu);
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        toggleMobileMenu();
      }
    });
  });

  // 4. SCROLL ANIMATIONS INTERSECTION OBSERVER
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        
        // Trigger counter animation if it has data-count
        if (entry.target.classList.contains('stat-number') && !entry.target.dataset.counted) {
          animateCounter(entry.target);
          entry.target.dataset.counted = "true";
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => scrollObserver.observe(el));

  // 5. ANIMATED STAT COUNTERS
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    let start = 0;
    const duration = 2000; // ms
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        el.innerText = prefix + target.toLocaleString() + suffix;
        clearInterval(timer);
      } else {
        el.innerText = prefix + Math.floor(start).toLocaleString() + suffix;
      }
    }, stepTime);
  }

  // Also observe stat numbers specifically
  document.querySelectorAll('.stat-number').forEach(el => scrollObserver.observe(el));

  // 6. HERO FLOATING PARTICLES CANVAS
  const particleCanvas = document.getElementById('hero-particles');
  if (particleCanvas) {
    const ctx = particleCanvas.getContext('2d');
    let particles = [];
    let width = particleCanvas.width = particleCanvas.offsetWidth;
    let height = particleCanvas.height = particleCanvas.offsetHeight;

    window.addEventListener('resize', () => {
      width = particleCanvas.width = particleCanvas.offsetWidth;
      height = particleCanvas.height = particleCanvas.offsetHeight;
    });

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 0.8 + 0.2;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.color = Math.random() > 0.4 ? '#FF4F9A' : '#D4AF37';
      }
      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        if (this.y < 0 || this.opacity <= 0) {
          this.reset();
          this.y = height;
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    for (let i = 0; i < 45; i++) {
      particles.push(new Particle());
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  // 7. SERVICES FILTER & SEARCH
  const serviceFilterBtns = document.querySelectorAll('.service-filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');
  const serviceSearch = document.getElementById('services-search');

  function filterServices() {
    const activeBtn = document.querySelector('.service-filter-btn.active');
    const category = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    const query = serviceSearch ? serviceSearch.value.toLowerCase().trim() : '';

    serviceCards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      const cardTitle = card.querySelector('.service-title').innerText.toLowerCase();
      const cardDesc = card.querySelector('.service-desc').innerText.toLowerCase();

      const matchesCat = (category === 'all' || cardCat === category);
      const matchesSearch = !query || cardTitle.includes(query) || cardDesc.includes(query);

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
        card.classList.add('fade-up', 'animated');
      } else {
        card.style.display = 'none';
      }
    });
  }

  serviceFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      serviceFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterServices();
    });
  });

  if (serviceSearch) {
    serviceSearch.addEventListener('input', filterServices);
  }

  // 8. GALLERY FILTER & LIGHTBOX MODAL
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && lightboxModal && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxModal.classList.add('active');
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
    });
  }
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
      }
    });
  }

  // 9. BEFORE & AFTER SLIDER DRAG
  const baContainer = document.querySelector('.ba-container');
  if (baContainer) {
    const baBefore = baContainer.querySelector('.ba-before');
    const baHandle = baContainer.querySelector('.ba-handle');
    let isDragging = false;

    function moveSlider(x) {
      const rect = baContainer.getBoundingClientRect();
      let offsetX = x - rect.left;
      if (offsetX < 0) offsetX = 0;
      if (offsetX > rect.width) offsetX = rect.width;
      const percentage = (offsetX / rect.width) * 100;
      baBefore.style.width = percentage + '%';
      baHandle.style.left = percentage + '%';
    }

    baContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      moveSlider(e.clientX);
    });
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('mousemove', (e) => {
      if (isDragging) moveSlider(e.clientX);
    });

    // Touch events
    baContainer.addEventListener('touchstart', (e) => {
      isDragging = true;
      if (e.touches[0]) moveSlider(e.touches[0].clientX);
    });
    window.addEventListener('touchend', () => isDragging = false);
    window.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches[0]) moveSlider(e.touches[0].clientX);
    });
  }

  // 10. REVIEWS CAROUSEL
  const reviewCards = document.querySelectorAll('.review-card');
  const prevBtn = document.getElementById('review-prev');
  const nextBtn = document.getElementById('review-next');
  const dotsContainer = document.getElementById('review-dots');
  let currentReview = 0;

  if (reviewCards.length > 0) {
    // Create dots
    reviewCards.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (idx === 0) dot.classList.add('active');
      dot.addEventListener('click', () => showReview(idx));
      if (dotsContainer) dotsContainer.appendChild(dot);
    });

    function showReview(index) {
      reviewCards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
      });
      const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];
      dots.forEach((d, i) => {
        d.classList.toggle('active', i === index);
      });
      currentReview = index;
    }

    showReview(0);

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentReview = (currentReview + 1) % reviewCards.length;
        showReview(currentReview);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentReview = (currentReview - 1 + reviewCards.length) % reviewCards.length;
        showReview(currentReview);
      });
    }

    // Auto rotate every 6 seconds
    setInterval(() => {
      currentReview = (currentReview + 1) % reviewCards.length;
      showReview(currentReview);
    }, 6000);
  }

  // 11. PRICE ESTIMATOR / CALCULATOR
  const priceSelectBtns = document.querySelectorAll('.price-select-btn');
  const selectedListEl = document.getElementById('calc-selected-list');
  const totalAmountEl = document.getElementById('calc-total-amount');
  const whatsappCalcBtn = document.getElementById('calc-whatsapp-btn');

  let selectedServicesMap = new Map();

  priceSelectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-name');
      const price = parseInt(btn.getAttribute('data-price'), 10);

      if (selectedServicesMap.has(name)) {
        selectedServicesMap.delete(name);
        btn.innerText = '+';
        btn.style.background = 'var(--light-pink)';
        btn.style.color = 'var(--primary-pink)';
        showToast(`Removed ${name}`);
      } else {
        selectedServicesMap.set(name, price);
        btn.innerText = '✓';
        btn.style.background = 'var(--primary-pink)';
        btn.style.color = 'var(--white)';
        showToast(`Added ${name} (₨${price})`);
      }
      updateCalculator();
    });
  });

  function updateCalculator() {
    if (!selectedListEl || !totalAmountEl) return;
    selectedListEl.innerHTML = '';
    let total = 0;

    if (selectedServicesMap.size === 0) {
      selectedListEl.innerHTML = '<p style="color:rgba(255,255,255,0.5); font-size:0.85rem; text-align:center; margin-top:30px;">Select services above to estimate price</p>';
      totalAmountEl.innerText = '₨0';
      return;
    }

    selectedServicesMap.forEach((price, name) => {
      total += price;
      const itemRow = document.createElement('div');
      itemRow.classList.add('calc-item');
      itemRow.innerHTML = `
        <span>${name}</span>
        <span style="color:var(--accent-gold); font-weight:600;">₨${price}</span>
      `;
      selectedListEl.appendChild(itemRow);
    });

    totalAmountEl.innerText = `₨${total.toLocaleString()}`;
  }

  // Contact Form Direct Submit Handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your inquiry has been submitted.');
      contactForm.reset();
    });
  }

  // 13. TOAST SYSTEM
  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.classList.add('toast-container');
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.4s ease';
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }

  // Attach global toast for quick buttons
  window.showToast = showToast;
});
