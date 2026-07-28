/**
 * Salon Real Look - Main Interactive Script
 * Handles LocalStorage synchronization, animations, modals, gallery filtering,
 * video lightbox, counter animations, and WhatsApp appointment booking.
 */

// LOCAL STORAGE DATA KEY
const STORAGE_KEY = 'salon_real_look_data_v1';

// INITIAL DEFAULT DATA (If LocalStorage is empty)
const DEFAULT_SITE_DATA = {
  settings: {
    brandName: 'SALON REAL LOOK',
    heroTitle: 'SALON REAL LOOK',
    heroSubtitle: 'Premium Haircuts & Beard Styling',
    heroBadge: 'EST. 2014 • SALON REAL LOOK',
    phone: '+91 9227518888',
    whatsappNumber: '919227518888',
    instagramLink: 'https://www.instagram.com/salonreallook/',
    address: 'Salon Real Look, Prime Avenue, Main Market, India',
    hours: 'Mon - Sun: 09:00 AM - 09:30 PM',
    heroVideoUrl: 'assets/videos/hero-reel.mp4',
    footerText: 'The pinnacle of masculine luxury grooming. Delivering perfection in every haircut, skin fade, and beard styling.'
  },
  services: [
    {
      id: 1,
      name: 'Hair Cut & Custom Styling',
      price: '₹499',
      duration: '35 Mins',
      desc: 'Precision haircut tailored to face geometry, deep scalp wash, hot towel steam finish & luxury styling wax.',
      image: '/src/assets/images/fade_haircut_style_1785221181479.jpg'
    },
    {
      id: 2,
      name: 'Beard Trim & Razor Line-Up',
      price: '₹349',
      duration: '25 Mins',
      desc: 'Hot towel aromatherapy steam, precision straight razor edge shaping, and organic beard oil conditioning.',
      image: '/src/assets/images/beard_styling_model_1785221162741.jpg'
    },
    {
      id: 3,
      name: 'Hair Wash & Scalp Massage',
      price: '₹299',
      duration: '20 Mins',
      desc: 'Deep cleansing anti-dandruff shampoo, invigorating scalp acupressure massage & blow-dry finish.',
      image: '/src/assets/images/hero_barber_salon_1785221101041.jpg'
    },
    {
      id: 4,
      name: 'Hair Spa & Keratin Therapy',
      price: '₹799',
      duration: '45 Mins',
      desc: 'Intensive hair repair steam therapy, root nourishment cream, scalp detoxification & relaxing neck massage.',
      image: '/src/assets/images/hero_barber_salon_1785221101041.jpg'
    },
    {
      id: 5,
      name: 'Hair Coloring & Highlights',
      price: '₹999',
      duration: '60 Mins',
      desc: 'Ammonia-free premium global hair coloring, grey coverage, subtle highlights & shine lock treatment.',
      image: '/src/assets/images/fade_haircut_style_1785221181479.jpg'
    },
    {
      id: 6,
      name: 'Kids Royal Haircut',
      price: '₹399',
      duration: '30 Mins',
      desc: 'Patient, fun, and trendy haircut experience for young gentlemen under 12 years with gentle styling.',
      image: '/src/assets/images/fade_haircut_style_1785221181479.jpg'
    }
  ],
  gallery: [
    {
      id: 1,
      title: 'Precision Skin Taper Fade',
      category: 'Fade',
      image: '/src/assets/images/fade_haircut_style_1785221181479.jpg',
      desc: 'Seamless bald fade gradient with textured crop top styling.'
    },
    {
      id: 2,
      title: 'Royal Beard Sculpt & Razor Line',
      category: 'Beard',
      image: '/src/assets/images/beard_styling_model_1785221162741.jpg',
      desc: 'Custom beard taper with razor-sharp cheek line and hot oil shine.'
    },
    {
      id: 3,
      title: 'Textured Quiff & Side Part',
      category: 'Haircuts',
      image: '/src/assets/images/hero_barber_salon_1785221101041.jpg',
      desc: 'Classic volume quiff with clean tapered sides for executive look.'
    },
    {
      id: 4,
      title: 'Modern Mullet & Drop Fade',
      category: 'Modern Hairstyle',
      image: '/src/assets/images/fade_haircut_style_1785221181479.jpg',
      desc: 'Contemporary flow mullet with low drop skin fade.'
    },
    {
      id: 5,
      title: 'VIP Platinum Grey Color',
      category: 'Hair Color',
      image: '/src/assets/images/hero_barber_salon_1785221101041.jpg',
      desc: 'Ash platinum grey transformation with protective scalp serum.'
    },
    {
      id: 6,
      title: 'Young Gentleman Sharp Cut',
      category: 'Kids Haircut',
      image: '/src/assets/images/fade_haircut_style_1785221181479.jpg',
      desc: 'Neat side sweep cut tailored for school & events.'
    },
    {
      id: 7,
      title: 'Signature Executive Pompadour',
      category: 'Luxury Hairstyle',
      image: '/src/assets/images/hero_barber_salon_1785221101041.jpg',
      desc: 'High sheen pompadour crafted with Japanese shears and pomade.'
    },
    {
      id: 8,
      title: 'Low Bald Fade & Stubble Line',
      category: 'Fade',
      image: '/src/assets/images/beard_styling_model_1785221162741.jpg',
      desc: 'Crisp low skin fade seamlessly connecting to groomed stubble.'
    }
  ],
  videos: [
    {
      id: 1,
      title: 'Masterclass Low Taper Skin Fade Transformation',
      thumbnail: '/src/assets/images/fade_haircut_style_1785221181479.jpg',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-barber-cutting-a-mans-hair-with-scissors-42861-large.mp4',
      duration: '02:45',
      views: '18.4K views'
    },
    {
      id: 2,
      title: 'Hot Towel Beard Trimming & Straight Razor Lineup',
      thumbnail: '/src/assets/images/beard_styling_model_1785221162741.jpg',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-getting-his-beard-trimmed-at-a-barber-shop-42863-large.mp4',
      duration: '01:50',
      views: '24.1K views'
    },
    {
      id: 3,
      title: 'Full VIP Haircut & Scalp Massage Experience',
      thumbnail: '/src/assets/images/hero_barber_salon_1785221101041.jpg',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-barber-styling-a-mans-hair-with-a-comb-42862-large.mp4',
      duration: '03:10',
      views: '32.9K views'
    }
  ],
  reviews: [
    {
      id: 1,
      name: 'Aman Verma',
      service: 'Hair Cut & Beard Combo',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: 'Salon Real Look is easily the best luxury barber in the city. The skin fade is super clean and the hot towel beard treatment felt like a 5-star spa!'
    },
    {
      id: 2,
      name: 'Vikram Mehta',
      service: 'Royal Haircut & Styling',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      text: 'Extremely professional team. They listened carefully to what style I wanted and executed it flawlessly. The ambient lighting and espresso made it a top tier experience.'
    },
    {
      id: 3,
      name: 'Rohan Joshi',
      service: 'Hair Color & Scalp Spa',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
      text: 'Got my hair colored and styled for my wedding. My friends were blown away by the look! Highly recommended for any groom.'
    }
  ]
};

// GET STORED SITE DATA
function getSiteData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_SITE_DATA));
    return DEFAULT_SITE_DATA;
  }
  try {
    return JSON.parse(saved);
  } catch (e) {
    return DEFAULT_SITE_DATA;
  }
}

// DOM CONTENT LOADED INITIALIZER
document.addEventListener('DOMContentLoaded', () => {
  const siteData = getSiteData();

  initPreloader();
  applySiteSettings(siteData.settings);
  renderServices(siteData.services);
  renderGallery(siteData.gallery);
  renderVideos(siteData.videos);
  renderReviews(siteData.reviews);
  initNavigation();
  initGalleryFiltering();
  initModals();
  initCounterAnimations();
  initScrollReveal();
  initAppointmentForm(siteData.settings.whatsappNumber);
});

// 1. PRELOADER
function initPreloader() {
  const preloader = document.getElementById('sitePreloader');
  const progress = document.getElementById('preloaderProgress');
  if (!preloader) return;

  let width = 0;
  const interval = setInterval(() => {
    width += 20;
    if (progress) progress.style.width = width + '%';
    if (width >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 300);
    }
  }, 100);
}

// 2. APPLY SETTINGS TO DOM
function applySiteSettings(settings) {
  if (!settings) return;

  const navBrand = document.getElementById('navBrandName');
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const heroBadgeText = document.getElementById('heroBadgeText');
  const contactPhone = document.getElementById('contactPhoneText');
  const contactIg = document.getElementById('contactIgText');
  const contactAddress = document.getElementById('contactAddressText');
  const contactHours = document.getElementById('contactHoursText');
  const footerBrand = document.getElementById('footerBrandName');
  const footerText = document.getElementById('footerText');
  const waBtn = document.getElementById('waFloatingBtn');
  const igBtn = document.getElementById('igFloatingBtn');

  if (navBrand) navBrand.textContent = settings.brandName || 'SALON REAL LOOK';
  if (heroTitle) heroTitle.textContent = settings.heroTitle || 'SALON REAL LOOK';
  if (heroSubtitle) heroSubtitle.textContent = settings.heroSubtitle || 'Premium Haircuts & Beard Styling';
  if (heroBadgeText) heroBadgeText.textContent = settings.heroBadge || 'EST. 2014 • SALON REAL LOOK';
  if (contactPhone) contactPhone.textContent = settings.phone || '+91 9227518888';
  if (contactIg) contactIg.textContent = '@salonreallook';
  if (contactAddress) contactAddress.textContent = settings.address;
  if (contactHours) contactHours.textContent = settings.hours;
  if (footerBrand) footerBrand.textContent = settings.brandName;
  if (footerText) footerText.textContent = settings.footerText;

  if (waBtn) waBtn.href = `https://wa.me/${settings.whatsappNumber || '919227518888'}`;
  if (igBtn) igBtn.href = settings.instagramLink || 'https://www.instagram.com/salonreallook/';
}

// 3. NAVIGATION & SCROLL
function initNavigation() {
  const header = document.getElementById('mainHeader');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileClose = document.getElementById('mobileMenuClose');
  const mobileOverlay = document.getElementById('mobileNavOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active nav highlighting
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile Drawer
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileNav);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  function closeMobileNav() {
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// 4. RENDER SERVICES
function renderServices(services) {
  const container = document.getElementById('servicesContainer');
  if (!container) return;

  container.innerHTML = services.map(srv => `
    <div class="service-card reveal-card">
      <div class="service-img-wrap">
        <img src="${srv.image}" alt="${srv.name}" class="service-img" loading="lazy" referrerPolicy="no-referrer">
        <div class="service-price-badge">${srv.price}</div>
      </div>
      <div class="service-body">
        <h3 class="service-title">${srv.name}</h3>
        <p class="service-desc">${srv.desc}</p>
        <div class="service-footer">
          <button class="btn btn-outline-gold btn-block book-service-btn" data-service="${srv.name}">
            <i class="fa-solid fa-calendar-check"></i> Book Now
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Attach event listener to book service buttons
  document.querySelectorAll('.book-service-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const srvName = e.currentTarget.getAttribute('data-service');
      const serviceSelect = document.getElementById('bookService');
      if (serviceSelect) {
        serviceSelect.value = srvName;
      }
      const appointmentSection = document.getElementById('appointment');
      if (appointmentSection) {
        appointmentSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// 5. RENDER GALLERY
function renderGallery(gallery) {
  const container = document.getElementById('galleryContainer');
  if (!container) return;

  container.innerHTML = gallery.map(item => `
    <div class="gallery-item reveal-card" data-category="${item.category}" data-id="${item.id}">
      <img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy" referrerPolicy="no-referrer">
      <div class="gallery-overlay">
        <span class="gallery-cat">${item.category}</span>
        <h3 class="gallery-item-title">${item.title}</h3>
      </div>
      <div class="gallery-zoom-icon">
        <i class="fa-solid fa-expand"></i>
      </div>
    </div>
  `).join('');

  // Attach lightbox openers
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const itemId = parseInt(item.getAttribute('data-id'), 10);
      const found = gallery.find(g => g.id === itemId);
      if (found) {
        openImageLightbox(found);
      }
    });
  });
}

// 6. GALLERY FILTERING
function initGalleryFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');
      const items = document.querySelectorAll('.gallery-item');

      items.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filterVal === 'all' || cat.toLowerCase() === filterVal.toLowerCase()) {
          item.classList.remove('hide');
          setTimeout(() => item.style.opacity = '1', 50);
        } else {
          item.style.opacity = '0';
          setTimeout(() => item.classList.add('hide'), 300);
        }
      });
    });
  });
}

// 7. RENDER VIDEOS
function renderVideos(videos) {
  const container = document.getElementById('videosContainer');
  if (!container) return;

  container.innerHTML = videos.map(v => `
    <div class="video-card reveal-card" data-video="${v.videoUrl}" data-title="${v.title}">
      <div class="video-thumb-wrap">
        <img src="${v.thumbnail}" alt="${v.title}" class="video-thumb-img" loading="lazy" referrerPolicy="no-referrer">
        <div class="play-btn-circle">
          <i class="fa-solid fa-play"></i>
        </div>
        <div class="video-duration">${v.duration}</div>
      </div>
      <div class="video-info">
        <h3 class="video-title">${v.title}</h3>
        <div class="video-meta">
          <span><i class="fa-solid fa-eye"></i> ${v.views}</span>
          <span>• Salon Real Look</span>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
      const videoUrl = card.getAttribute('data-video');
      const title = card.getAttribute('data-title');
      openVideoModal(videoUrl, title);
    });
  });
}

// 8. RENDER REVIEWS & SLIDER
function renderReviews(reviews) {
  const container = document.getElementById('reviewsContainer');
  const dotsContainer = document.getElementById('reviewDots');
  if (!container) return;

  container.innerHTML = reviews.map(r => `
    <div class="testimonial-card">
      <div class="review-glass-box">
        <div class="stars-rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <p class="review-text">"${r.text}"</p>
        <div class="client-info">
          <img src="${r.avatar}" alt="${r.name}" class="client-avatar" referrerPolicy="no-referrer">
          <div>
            <div class="client-name">${r.name} <i class="fa-solid fa-circle-check verified-icon" title="Verified Customer"></i></div>
            <div class="client-service">${r.service}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Dots
  if (dotsContainer) {
    dotsContainer.innerHTML = reviews.map((_, idx) => `
      <span class="dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>
    `).join('');
  }

  // Slider controls
  let currentIndex = 0;
  const prevBtn = document.getElementById('prevReview');
  const nextBtn = document.getElementById('nextReview');

  function updateSlider() {
    container.style.transform = `translateX(-${currentIndex * 100}%)`;
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
      updateSlider();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
      updateSlider();
    });
  }

  document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
      currentIndex = parseInt(e.target.getAttribute('data-index'), 10);
      updateSlider();
    });
  });

  // Auto slide
  setInterval(() => {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateSlider();
  }, 6000);
}

// 9. MODALS (LIGHTBOX & VIDEO)
function initModals() {
  const imgModal = document.getElementById('imageLightboxModal');
  const imgCloseBtn = document.getElementById('lightboxCloseBtn');
  const vidModal = document.getElementById('videoPlayerModal');
  const vidCloseBtn = document.getElementById('videoCloseBtn');
  const modalVideoPlayer = document.getElementById('modalVideoPlayer');

  if (imgCloseBtn) {
    imgCloseBtn.addEventListener('click', () => imgModal.classList.remove('active'));
  }
  if (vidCloseBtn) {
    vidCloseBtn.addEventListener('click', () => {
      vidModal.classList.remove('active');
      if (modalVideoPlayer) modalVideoPlayer.pause();
    });
  }

  // Close on backdrop click
  [imgModal, vidModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          if (modalVideoPlayer) modalVideoPlayer.pause();
        }
      });
    }
  });
}

function openImageLightbox(item) {
  const modal = document.getElementById('imageLightboxModal');
  const img = document.getElementById('lightboxImg');
  const cat = document.getElementById('lightboxCategory');
  const title = document.getElementById('lightboxTitle');
  const desc = document.getElementById('lightboxDesc');

  if (img) img.src = item.image;
  if (cat) cat.textContent = item.category;
  if (title) title.textContent = item.title;
  if (desc) desc.textContent = item.desc || 'Signature Barbering Style at Salon Real Look.';

  if (modal) modal.classList.add('active');
}

function openVideoModal(url, title) {
  const modal = document.getElementById('videoPlayerModal');
  const player = document.getElementById('modalVideoPlayer');
  const titleEl = document.getElementById('modalVideoTitle');

  if (player) {
    player.src = url;
    player.play();
  }
  if (titleEl) titleEl.textContent = title;

  if (modal) modal.classList.add('active');
}

// 10. COUNTER ANIMATION
function initCounterAnimations() {
  const counters = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          let count = 0;
          const speed = target / 50;

          const updateCount = () => {
            count += speed;
            if (count < target) {
              counter.textContent = Math.ceil(count).toLocaleString() + '+';
              setTimeout(updateCount, 25);
            } else {
              counter.textContent = target.toLocaleString() + '+';
            }
          };
          updateCount();
        });
      }
    });
  }, { threshold: 0.5 });

  const grid = document.getElementById('countersGrid');
  if (grid) observer.observe(grid);
}

// 11. SCROLL REVEAL
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal-fade, .reveal-slide-up, .reveal-slide-left, .reveal-slide-right, .reveal-card, .reveal-scale');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
}

// 12. APPOINTMENT FORM & WHATSAPP REDIRECT
function initAppointmentForm(waNumber = '919227518888') {
  const form = document.getElementById('appointmentForm');
  if (!form) return;

  // Set min date to today
  const dateInput = document.getElementById('bookDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('bookName').value.trim();
    const phone = document.getElementById('bookPhone').value.trim();
    const date = document.getElementById('bookDate').value;
    const time = document.getElementById('bookTime').value;
    const service = document.getElementById('bookService').value;
    const message = document.getElementById('bookMessage').value.trim();

    if (!name || !phone || !date || !time || !service) {
      alert('Please fill out all required fields.');
      return;
    }

    // Format WhatsApp message
    const formattedMsg = `Hello Salon Real Look,

I would like to book an appointment.

Name: ${name}
Phone: ${phone}
Date: ${date}
Time: ${time}
Service: ${service}
${message ? `Message: ${message}\n` : ''}
Please confirm my appointment.`;

    const encodedMsg = encodeURIComponent(formattedMsg);
    const waUrl = `https://wa.me/${waNumber}?text=${encodedMsg}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');

    alert(`Thank you ${name}! Your booking request has been generated. Opening WhatsApp to confirm with Salon Real Look.`);
    form.reset();
  });
}
