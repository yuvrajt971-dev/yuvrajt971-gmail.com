/**
 * SALON REAL LOOK - MAIN JAVASCRIPT ENGINE
 * Handles DOM rendering from content.js, interactive modals, masonry filtering,
 * reviews slider, smooth scrolling, and scroll animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure SALON_DATA is available
  const data = window.SALON_DATA;
  if (!data) {
    console.error('SALON_DATA not found in content.js');
    return;
  }

  /* ==========================================================================
     ICON HELPER (SVG RENDERER)
     ========================================================================== */
  function getIconSvg(name) {
    const icons = {
      'scissors': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`,
      'phone': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
      'whatsapp': `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.299.431 2.504 1.156 3.473l-.759 2.769 2.835-.744a5.732 5.732 0 0 0 2.535.592h.003c3.18 0 5.767-2.586 5.768-5.766 0-1.541-.6-2.989-1.688-4.079a5.727 5.727 0 0 0-4.082-1.611zm3.376 8.163c-.141.396-.826.758-1.141.802-.298.042-.68.06-1.127-.083a8.91 8.91 0 0 1-3.238-2.023 9.882 9.882 0 0 1-1.89-2.353c-.22-.382-.023-.589.117-.729.126-.126.282-.324.423-.486.141-.162.188-.27.282-.45.094-.18.047-.342-.023-.486-.07-.144-.635-1.53-.87-2.095-.228-.549-.462-.475-.635-.484-.162-.009-.348-.01-.534-.01a1.026 1.026 0 0 0-.744.348c-.258.282-.986.964-.986 2.353s1.01 2.73 1.15 2.918c.141.188 1.986 3.033 4.812 4.254.672.291 1.198.465 1.607.595.674.214 1.288.184 1.773.111.542-.081 1.666-.682 1.899-1.342.234-.66.234-1.226.164-1.342-.07-.117-.258-.188-.54-.33z"/></svg>`,
      'instagram': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
      'award': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
      'crown': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-8-4 8-6-7zm3 16h14"/></svg>`,
      'flame': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
      'sparkles': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/></svg>`,
      'shield': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      'tag': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
      'star': `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      'heart-handshake': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
      'building': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="12"/><line x1="15" y1="22" x2="15" y2="12"/><line x1="12" y1="22" x2="12" y2="12"/><line x1="8" y1="6" x2="8.01" y2="6"/><line x1="12" y1="6" x2="12.01" y2="6"/><line x1="16" y1="6" x2="16.01" y2="6"/><line x1="8" y1="10" x2="8.01" y2="10"/><line x1="12" y1="10" x2="12.01" y2="10"/><line x1="16" y1="10" x2="16.01" y2="10"/></svg>`,
      'map-pin': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
      'clock': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
      'play': `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
      'x': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
      'menu': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`
    };
    return icons[name] || icons['scissors'];
  }

  /* ==========================================================================
     RENDER HEADER & MOBILE NAV
     ========================================================================== */
  function renderHeader() {
    document.title = data.websiteTitle;

    // Header Links
    const navMenu = document.getElementById('nav-menu');
    const mobileNavList = document.getElementById('mobile-nav-list');
    
    if (navMenu) {
      navMenu.innerHTML = data.navLinks.map((link, idx) => `
        <li>
          <a href="#${link.id}" class="nav-link ${idx === 0 ? 'active' : ''}">${link.label}</a>
        </li>
      `).join('');
    }

    if (mobileNavList) {
      mobileNavList.innerHTML = data.navLinks.map((link, idx) => `
        <li>
          <a href="#${link.id}" class="mobile-nav-link ${idx === 0 ? 'active' : ''}">
            ${link.label}
            <span>→</span>
          </a>
        </li>
      `).join('');
    }

    // Call Now & Social Buttons
    const callBtns = document.querySelectorAll('.btn-call-now');
    callBtns.forEach(btn => {
      btn.href = `tel:${data.salonInfo.phone}`;
    });
  }

  /* ==========================================================================
     RENDER HERO SECTION
     ========================================================================== */
  function renderHero() {
    const heroBadge = document.getElementById('hero-badge');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroVideo = document.getElementById('hero-bg-video');
    const heroCtaPrimary = document.getElementById('hero-cta-primary');
    const heroCtaSecondary = document.getElementById('hero-cta-secondary');

    if (heroBadge) heroBadge.innerText = data.hero.badge;
    if (heroTitle) heroTitle.innerHTML = data.hero.title;
    if (heroSubtitle) heroSubtitle.innerText = data.hero.subtitle;
    if (heroVideo) {
      heroVideo.poster = data.hero.posterImage;
      heroVideo.src = data.hero.bgVideo;
    }
    if (heroCtaPrimary) {
      heroCtaPrimary.innerText = data.hero.ctaPrimary.text;
      heroCtaPrimary.href = data.hero.ctaPrimary.link;
    }
    if (heroCtaSecondary) {
      heroCtaSecondary.innerText = data.hero.ctaSecondary.text;
      heroCtaSecondary.href = data.hero.ctaSecondary.link;
    }
  }

  /* ==========================================================================
     RENDER FEATURED VIDEOS
     ========================================================================== */
  function renderFeaturedVideos() {
    const grid = document.getElementById('featured-videos-grid');
    if (!grid) return;

    grid.innerHTML = data.featuredVideos.map(video => `
      <div class="video-card-lg" data-video-url="${video.videoUrl}" data-video-title="${video.title}">
        <div class="video-card-thumb">
          <img src="${video.thumbnail}" alt="${video.title}" loading="lazy" referrerPolicy="no-referrer" />
          <div class="play-overlay">
            <div class="play-btn-circle">
              ${getIconSvg('play')}
            </div>
          </div>
          <span class="video-duration">${video.duration}</span>
        </div>
        <div class="video-card-content">
          <span class="video-tag">${video.tag}</span>
          <h3 class="video-card-title">${video.title}</h3>
          <p class="video-card-desc">${video.subtitle}</p>
        </div>
      </div>
    `).join('');

    // Add click event for video modal
    grid.querySelectorAll('.video-card-lg').forEach(card => {
      card.addEventListener('click', () => {
        openVideoModal(card.dataset.videoUrl, card.dataset.videoTitle);
      });
    });
  }

  /* ==========================================================================
     RENDER GALLERY & CATEGORIES FILTER
     ========================================================================== */
  function renderGallery() {
    const filterContainer = document.getElementById('gallery-filters');
    const masonryGrid = document.getElementById('masonry-grid');
    if (!filterContainer || !masonryGrid) return;

    // Render filter categories
    filterContainer.innerHTML = data.galleryCategories.map((cat, idx) => `
      <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-category="${cat}">
        ${cat}
      </button>
    `).join('');

    function displayGalleryItems(category) {
      const filtered = category === 'All' 
        ? data.galleryItems 
        : data.galleryItems.filter(item => item.category.toLowerCase() === category.toLowerCase());

      masonryGrid.innerHTML = filtered.map(item => `
        <div class="masonry-item" data-id="${item.id}" data-img="${item.image}" data-title="${item.title}" data-desc="${item.description}" data-cat="${item.category}">
          <div class="masonry-img-wrapper">
            <img src="${item.image}" alt="${item.title}" loading="lazy" referrerPolicy="no-referrer" />
            <div class="gallery-overlay">
              <span class="gallery-item-category">${item.category}</span>
              <h4 class="gallery-item-title">${item.title}</h4>
            </div>
          </div>
        </div>
      `).join('');

      // Add click lightbox trigger
      masonryGrid.querySelectorAll('.masonry-item').forEach(item => {
        item.addEventListener('click', () => {
          openImageModal(item.dataset.img, item.dataset.title, item.dataset.cat, item.dataset.desc);
        });
      });
    }

    // Initial render all
    displayGalleryItems('All');

    // Filter button click listener
    filterContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        filterContainer.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        displayGalleryItems(e.target.dataset.category);
      }
    });
  }

  /* ==========================================================================
     RENDER VIDEO GALLERY
     ========================================================================== */
  function renderVideoGallery() {
    const grid = document.getElementById('video-gallery-grid');
    if (!grid) return;

    grid.innerHTML = data.videoGallery.map(video => `
      <div class="video-card-lg" data-video-url="${video.videoUrl}" data-video-title="${video.title}">
        <div class="video-card-thumb">
          <img src="${video.thumbnail}" alt="${video.title}" loading="lazy" referrerPolicy="no-referrer" />
          <div class="play-overlay">
            <div class="play-btn-circle">
              ${getIconSvg('play')}
            </div>
          </div>
          <span class="video-duration">${video.duration}</span>
        </div>
        <div class="video-card-content">
          <span class="video-tag">PRO SHOWCASE</span>
          <h3 class="video-card-title">${video.title}</h3>
          <p class="video-card-desc">${video.desc}</p>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.video-card-lg').forEach(card => {
      card.addEventListener('click', () => {
        openVideoModal(card.dataset.videoUrl, card.dataset.videoTitle);
      });
    });
  }

  /* ==========================================================================
     RENDER BEARD SECTION
     ========================================================================== */
  function renderBeardSection() {
    const beardImage = document.getElementById('beard-section-img');
    const beardTitle = document.getElementById('beard-section-title');
    const beardDesc = document.getElementById('beard-section-desc');
    const featuresGrid = document.getElementById('beard-features-grid');

    if (beardImage) beardImage.src = data.beardSection.image;
    if (beardTitle) beardTitle.innerText = data.beardSection.title;
    if (beardDesc) beardDesc.innerText = data.beardSection.description;

    if (featuresGrid) {
      featuresGrid.innerHTML = data.beardSection.featureCards.map(feat => `
        <div class="beard-feature-card">
          <div class="beard-feature-icon">${getIconSvg(feat.icon || 'scissors')}</div>
          <h4 class="beard-feature-title">${feat.title}</h4>
          <p class="beard-feature-desc">${feat.desc}</p>
        </div>
      `).join('');
    }
  }

  /* ==========================================================================
     RENDER SERVICES
     ========================================================================== */
  function renderServices() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    grid.innerHTML = data.services.map(s => `
      <div class="service-card">
        <div class="service-img-wrapper">
          <img src="${s.image}" alt="${s.title}" loading="lazy" referrerPolicy="no-referrer" />
          <span class="service-price-badge">${s.price}</span>
        </div>
        <div class="service-body">
          <h3 class="service-title">${s.title}</h3>
          <span class="service-duration">${getIconSvg('clock')} ${s.duration}</span>
          <p class="service-desc">${s.description}</p>
          <a href="${data.salonInfo.whatsappUrl}" target="_blank" class="btn-outline-gold" style="width: 100%;">
            ${getIconSvg('whatsapp')} Inquire on WhatsApp
          </a>
        </div>
      </div>
    `).join('');
  }

  /* ==========================================================================
     RENDER WHY CHOOSE US
     ========================================================================== */
  function renderWhyUs() {
    const grid = document.getElementById('why-us-grid');
    if (!grid) return;

    grid.innerHTML = data.whyChooseUs.map(item => `
      <div class="why-card">
        <div class="why-icon">${getIconSvg(item.icon)}</div>
        <h3 class="why-title">${item.title}</h3>
        <p class="why-desc">${item.description}</p>
      </div>
    `).join('');
  }

  /* ==========================================================================
     RENDER REVIEWS CAROUSEL
     ========================================================================== */
  function renderReviews() {
    const wrapper = document.getElementById('reviews-wrapper');
    const dotsContainer = document.getElementById('slider-dots');
    if (!wrapper || !dotsContainer) return;

    wrapper.innerHTML = data.reviews.map(r => `
      <div class="review-slide">
        <div class="review-card">
          <div class="review-stars">
            ${Array(r.rating).fill(getIconSvg('star')).join('')}
          </div>
          <p class="review-text">"${r.text}"</p>
          <div class="review-user">
            <img src="${r.avatar}" alt="${r.name}" class="review-avatar" loading="lazy" referrerPolicy="no-referrer" />
            <div>
              <h4 class="review-name">${r.name}</h4>
              <p class="review-role">${r.role}</p>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    dotsContainer.innerHTML = data.reviews.map((_, idx) => `
      <div class="slider-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></div>
    `).join('');

    // Carousel Logic
    let currentSlide = 0;
    const totalSlides = data.reviews.length;

    function goToSlide(index) {
      currentSlide = (index + totalSlides) % totalSlides;
      wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
      dotsContainer.querySelectorAll('.slider-dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlide);
      });
    }

    document.getElementById('prev-review-btn')?.addEventListener('click', () => goToSlide(currentSlide - 1));
    document.getElementById('next-review-btn')?.addEventListener('click', () => goToSlide(currentSlide + 1));

    dotsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('slider-dot')) {
        goToSlide(parseInt(e.target.dataset.index, 10));
      }
    });

    // Auto rotate every 6 seconds
    let autoSlideTimer = setInterval(() => goToSlide(currentSlide + 1), 6000);
    const sliderContainer = document.querySelector('.reviews-slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
      sliderContainer.addEventListener('mouseleave', () => {
        autoSlideTimer = setInterval(() => goToSlide(currentSlide + 1), 6000);
      });
    }
  }

  /* ==========================================================================
     RENDER CONTACT SECTION
     ========================================================================== */
  function renderContact() {
    const phoneElement = document.getElementById('contact-phone');
    const addressElement = document.getElementById('contact-address');
    const hoursElement = document.getElementById('contact-hours');
    const mapIframe = document.getElementById('contact-map-iframe');

    if (phoneElement) {
      phoneElement.innerHTML = `
        <a href="tel:${data.salonInfo.phone}" style="color: var(--gold-primary); font-weight: 700;">
          ${data.salonInfo.displayPhone}
        </a>
      `;
    }

    if (addressElement) addressElement.innerText = data.salonInfo.address;

    if (hoursElement) {
      hoursElement.innerHTML = data.salonInfo.hours.map(h => `
        <div><strong>${h.days}:</strong> ${h.time}</div>
      `).join('');
    }

    if (mapIframe) mapIframe.src = data.salonInfo.mapsEmbedUrl;

    // Contact buttons
    document.querySelectorAll('.btn-whatsapp-action').forEach(btn => {
      btn.href = data.salonInfo.whatsappUrl;
    });
    document.querySelectorAll('.btn-instagram-action').forEach(btn => {
      btn.href = data.salonInfo.instagramUrl;
    });
  }

  /* ==========================================================================
     LIGHTBOX MODALS (VIDEO & IMAGE)
     ========================================================================== */
  const modalOverlay = document.getElementById('modal-overlay');
  const modalContainer = document.getElementById('modal-container');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openVideoModal(url, title) {
    if (!modalOverlay || !modalContainer) return;
    modalContainer.innerHTML = `
      <div style="padding: 16px 20px; border-bottom: 1px solid var(--border-glass);">
        <h3 style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--gold-primary);">${title}</h3>
      </div>
      <div class="modal-video-container">
        <video src="${url}" controls autoplay playsinline style="width:100%; height:100%; object-fit:cover;"></video>
      </div>
    `;
    modalOverlay.classList.add('open');
  }

  function openImageModal(imgSrc, title, category, desc) {
    if (!modalOverlay || !modalContainer) return;
    modalContainer.innerHTML = `
      <div class="modal-image-container">
        <img src="${imgSrc}" alt="${title}" referrerPolicy="no-referrer" />
      </div>
      <div style="padding: 24px; background: var(--bg-card); border-top: 1px solid var(--border-glass);">
        <span style="color: var(--gold-primary); font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">${category}</span>
        <h3 style="font-family: var(--font-heading); font-size: 1.4rem; color: var(--text-white); margin: 6px 0;">${title}</h3>
        <p style="color: var(--text-gray); font-size: 0.95rem;">${desc}</p>
      </div>
    `;
    modalOverlay.classList.add('open');
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    if (modalContainer) modalContainer.innerHTML = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  /* ==========================================================================
     HEADER SCROLL & MOBILE DRAWER LOGIC
     ========================================================================== */
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile nav drawer
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileClose = document.getElementById('mobile-close-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');

  function openMobileNav() {
    mobileNav?.classList.add('open');
    mobileNavOverlay?.classList.add('open');
  }
  function closeMobileNav() {
    mobileNav?.classList.remove('open');
    mobileNavOverlay?.classList.remove('open');
  }

  mobileToggle?.addEventListener('click', openMobileNav);
  mobileClose?.addEventListener('click', closeMobileNav);
  mobileNavOverlay?.addEventListener('click', closeMobileNav);

  // Close mobile nav when clicking a link
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('mobile-nav-link')) {
      closeMobileNav();
    }
  });

  /* ==========================================================================
     INIT ALL SECTIONS
     ========================================================================== */
  renderHeader();
  renderHero();
  renderFeaturedVideos();
  renderGallery();
  renderVideoGallery();
  renderBeardSection();
  renderServices();
  renderWhyUs();
  renderReviews();
  renderContact();
});
