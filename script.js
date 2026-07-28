/* ==========================================================
   SALON REAL LOOK - MAIN CLIENT SCRIPT
   ========================================================== */

// DEFAULT APPLICATION DATA (Overridden by Admin Panel via LocalStorage)
const DEFAULT_SALON_DATA = {
  title: "SALON REAL LOOK",
  heroTitle: "SALON REAL LOOK",
  heroSubtitle: "Experience the finest craftsmanship in luxury haircuts, precision beard sculpts, and executive grooming.",
  phone: "+91 9227518888",
  whatsappUrl: "https://wa.me/919227518888",
  instagramUrl: "https://www.instagram.com/salonreallook/",
  hours: "Monday - Sunday: 9:00 AM - 9:00 PM",
  footerText: "The premier luxury barbering destination for modern hair styling, custom beard design, and high-end executive grooming.",
  
  highlights: [
    { title: "Haircut Images", desc: "400+ Trendy Styles", icon: "fa-camera-retro", target: "#gallery" },
    { title: "Haircut Videos", desc: "Cinematic Transformations", icon: "fa-circle-play", target: "#videos" },
    { title: "Trending Hairstyles", desc: "2026 Executive Cuts", icon: "fa-fire-flame-curved", target: "#gallery" },
    { title: "Premium Fade Styles", desc: "Skin, Drop & Taper Fades", icon: "fa-scissors", target: "#gallery" },
    { title: "Modern Looks", desc: "Coloring & Sculpting", icon: "fa-wand-magic-sparkles", target: "#services" }
  ],

  videos: [
    {
      id: "v1",
      title: "Royal Skin Fade & Beard Sculpt",
      category: "Luxury Transformation",
      duration: "02:15",
      thumb: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-barber-trimming-a-mans-beard-43480-large.mp4"
    },
    {
      id: "v2",
      title: "Textured Crop & Razor Lineup",
      category: "Modern Hairstyle",
      duration: "01:45",
      thumb: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-getting-a-haircut-from-a-barber-42353-large.mp4"
    },
    {
      id: "v3",
      title: "Executive Slick Back & Hot Towel",
      category: "Gentleman Grooming",
      duration: "03:10",
      thumb: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-barber-cutting-the-hair-of-a-man-in-a-barbershop-42352-large.mp4"
    }
  ],

  gallery: [
    { id: "g1", title: "Low Skin Fade", cat: "Fade", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80" },
    { id: "g2", title: "Beard Sculpt & Razor Edge", cat: "Beard", img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80" },
    { id: "g3", title: "Modern Textured Pompadour", cat: "Modern Hairstyle", img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80" },
    { id: "g4", title: "VIP Platinum Highlights", cat: "Hair Color", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80" },
    { id: "g5", title: "Young Gentleman Classic Cut", cat: "Kids Haircut", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=80" },
    { id: "g6", title: "Executive Side Part & Beard", cat: "Luxury Hairstyle", img: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=800&q=80" },
    { id: "g7", title: "Mid Taper Fade", cat: "Fade", img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80" },
    { id: "g8", title: "Hot Towel Beard Treatment", cat: "Beard", img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80" }
  ],

  services: [
    {
      id: "s1",
      name: "Hair Cut",
      price: "₹500 / $25",
      desc: "Precision scissors or clipper cut customized to face shape, hair wash, scalp massage, and styling.",
      img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "s2",
      name: "Beard Trim",
      price: "₹350 / $18",
      desc: "Detail beard shaping with straight razor edging, steam hot towel, and organic beard oil treatment.",
      img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "s3",
      name: "Hair Wash & Style",
      price: "₹250 / $12",
      desc: "Deep cleansing shampoo, scalp stimulating wash, blow dry, and matte clay finish.",
      img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "s4",
      name: "Hair Spa",
      price: "₹800 / $40",
      desc: "Nourishing scalp cream spa, infrared steam treatment, and stress-relief shoulder massage.",
      img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "s5",
      name: "Hair Coloring",
      price: "₹1200 / $60",
      desc: "Ammonia-free global hair color, grey coverage, or fashion highlights by master colorists.",
      img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "s6",
      name: "Kids Haircut",
      price: "₹350 / $18",
      desc: "Gentle, fun haircut experience for young gentlemen under 12 with complimentary style gel.",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=80"
    }
  ],

  reviews: [
    {
      name: "Vikram Sharma",
      role: "Regular VIP Client",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      text: "Salon Real Look is easily the best luxury barber salon in the city. The fade is always razor sharp, and the hot towel beard service is pure relaxation!"
    },
    {
      name: "Rohan Patel",
      role: "Business Executive",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      text: "Remarkable hospitality and skilled barbers. They take their time to listen to what cut you want and deliver unmatched perfection every time."
    },
    {
      name: "Anand Verma",
      role: "Fashion Blogger",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80",
      text: "The interior atmosphere is ultra-luxurious and clean. Got my haircut and beard colored before an event, and received non-stop compliments!"
    }
  ]
};

// LOAD OR INITIALIZE APP DATA
function getSalonData() {
  const saved = localStorage.getItem('salon_real_look_data');
  if (saved) {
    try {
      return { ...DEFAULT_SALON_DATA, ...JSON.parse(saved) };
    } catch (e) {
      console.error("Error parsing stored data", e);
    }
  }
  return DEFAULT_SALON_DATA;
}

const appData = getSalonData();

// DOM INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  // Preloader
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    if (preloader) preloader.classList.add('fade-out');
  }, 600);

  // Set current copyright year
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Set initial content values
  updateContentFromData();

  // Navigation Logic
  initNavbar();

  // Render Dynamic Sections
  renderHighlights();
  renderVideos();
  renderGallery('all');
  renderServices();
  renderReviews();

  // Initialize Event Listeners
  initGalleryTabs();
  initAppointmentForm();
  initCountersObserver();
  initMediaModal();
});

/* ==========================================================
   DYNAMIC CONTENT UPDATES
   ========================================================== */
function updateContentFromData() {
  const phoneVal = document.getElementById('contact-phone-val');
  if (phoneVal) phoneVal.textContent = appData.phone;

  const hoursVal = document.getElementById('contact-hours-val');
  if (hoursVal) hoursVal.textContent = appData.hours;

  const footerVal = document.getElementById('footer-text-val');
  if (footerVal) footerVal.textContent = appData.footerText;
}

/* ==========================================================
   NAVBAR & MOBILE DRAWER LOGIC
   ========================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // ScrollSpy Active Link
    let current = '';
    const sections = document.querySelectorAll('section, header');
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile Drawer Toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (mobileDrawer.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars-staggered';
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.className = 'fa-solid fa-bars-staggered';
      });
    });
  }
}

/* ==========================================================
   RENDER HIGHLIGHT CARDS
   ========================================================== */
function renderHighlights() {
  const container = document.getElementById('highlights-grid');
  if (!container) return;

  container.innerHTML = appData.highlights.map(item => `
    <div class="glass-card highlight-card" onclick="document.querySelector('${item.target}').scrollIntoView({behavior: 'smooth'})">
      <div class="highlight-icon">
        <i class="fa-solid ${item.icon}"></i>
      </div>
      <h3 class="highlight-title">${item.title}</h3>
      <p class="highlight-desc">${item.desc}</p>
    </div>
  `).join('');
}

/* ==========================================================
   RENDER VIDEO SHOWCASE
   ========================================================== */
function renderVideos() {
  const container = document.getElementById('video-grid');
  if (!container) return;

  container.innerHTML = appData.videos.map(item => `
    <div class="glass-card video-card" onclick="openVideoModal('${item.videoUrl}', '${item.title}')">
      <div class="video-thumb-wrapper">
        <img src="${item.thumb}" alt="${item.title}" loading="lazy">
        <div class="video-play-btn">
          <i class="fa-solid fa-play"></i>
        </div>
        <div class="video-duration">${item.duration}</div>
      </div>
      <div class="video-info">
        <div class="video-category">${item.category}</div>
        <h3 class="video-title">${item.title}</h3>
      </div>
    </div>
  `).join('');
}

/* ==========================================================
   RENDER GALLERY & FILTERING
   ========================================================== */
function renderGallery(categoryFilter = 'all') {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  const filtered = categoryFilter === 'all' 
    ? appData.gallery 
    : appData.gallery.filter(item => item.cat === categoryFilter);

  container.innerHTML = filtered.map(item => `
    <div class="gallery-item glass-card" onclick="openImageModal('${item.img}', '${item.title} - ${item.cat}')">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <div class="gallery-overlay">
        <div class="gallery-cat">${item.cat}</div>
        <h3 class="gallery-title">${item.title}</h3>
      </div>
      <div class="gallery-zoom-icon">
        <i class="fa-solid fa-magnifying-glass-plus"></i>
      </div>
    </div>
  `).join('');
}

function initGalleryTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-filter');
      renderGallery(cat);
    });
  });
}

/* ==========================================================
   RENDER SERVICES & BOOKING TRIGGER
   ========================================================== */
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  container.innerHTML = appData.services.map(item => `
    <div class="glass-card service-card">
      <div class="service-img-wrapper">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        <div class="service-price-tag">${item.price}</div>
      </div>
      <div class="service-body">
        <h3 class="service-name">${item.name}</h3>
        <p class="service-desc">${item.desc}</p>
        <button class="btn btn-gold service-btn" onclick="selectServiceAndScroll('${item.name}')">
          <i class="fa-solid fa-calendar-plus"></i> Book Now
        </button>
      </div>
    </div>
  `).join('');
}

window.selectServiceAndScroll = function(serviceName) {
  const select = document.getElementById('book-service');
  if (select) {
    for (let opt of select.options) {
      if (opt.value.toLowerCase().includes(serviceName.toLowerCase()) || serviceName.toLowerCase().includes(opt.value.toLowerCase())) {
        opt.selected = true;
        break;
      }
    }
  }
  const apptSec = document.getElementById('appointment');
  if (apptSec) {
    apptSec.scrollIntoView({ behavior: 'smooth' });
  }
};

/* ==========================================================
   RENDER REVIEWS SLIDER
   ========================================================== */
let currentSlide = 0;

function renderReviews() {
  const track = document.getElementById('reviews-track');
  const dotsContainer = document.getElementById('review-dots');
  if (!track || !dotsContainer) return;

  track.innerHTML = appData.reviews.map(r => `
    <div class="review-slide">
      <div class="glass-card review-card">
        <div class="review-quote-icon"><i class="fa-solid fa-quote-left"></i></div>
        <div class="review-stars">
          ${'<i class="fa-solid fa-star"></i>'.repeat(r.stars)}
        </div>
        <p class="review-text">"${r.text}"</p>
        <div class="review-author">
          <img src="${r.avatar}" alt="${r.name}" class="review-avatar">
          <div class="author-info">
            <h5>${r.name}</h5>
            <span>${r.role}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  dotsContainer.innerHTML = appData.reviews.map((_, idx) => `
    <div class="slider-dot ${idx === 0 ? 'active' : ''}" onclick="goToSlide(${idx})"></div>
  `).join('');

  // Arrows
  const prevBtn = document.getElementById('review-prev');
  const nextBtn = document.getElementById('review-next');

  if (prevBtn) prevBtn.onclick = () => goToSlide(currentSlide - 1);
  if (nextBtn) nextBtn.onclick = () => goToSlide(currentSlide + 1);

  // Auto Slide
  setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 6000);
}

window.goToSlide = function(idx) {
  const slides = document.querySelectorAll('.review-slide');
  const dots = document.querySelectorAll('.slider-dot');
  if (!slides.length) return;

  if (idx < 0) idx = slides.length - 1;
  if (idx >= slides.length) idx = 0;

  currentSlide = idx;
  const track = document.getElementById('reviews-track');
  if (track) {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  dots.forEach((dot, dIdx) => {
    dot.classList.toggle('active', dIdx === currentSlide);
  });
};

/* ==========================================================
   ANIMATED COUNTERS ON SCROLL
   ========================================================== */
function initCountersObserver() {
  const counters = document.querySelectorAll('.counter-num');
  if (!counters.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          let count = 0;
          const speed = target / 50;

          const updateCount = () => {
            count += speed;
            if (count < target) {
              counter.innerText = Math.ceil(count).toLocaleString() + (target === 5 ? '.0★' : '+');
              setTimeout(updateCount, 30);
            } else {
              counter.innerText = target.toLocaleString() + (target === 5 ? '.0★' : '+');
            }
          };

          updateCount();
        });
      }
    });
  }, { threshold: 0.4 });

  const aboutSec = document.getElementById('about');
  if (aboutSec) observer.observe(aboutSec);
}

/* ==========================================================
   APPOINTMENT FORM & WHATSAPP REDIRECT
   ========================================================== */
function initAppointmentForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  // Set min date to today
  const dateInput = document.getElementById('book-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('book-name').value.trim();
    const phone = document.getElementById('book-phone').value.trim();
    const date = document.getElementById('book-date').value;
    const time = document.getElementById('book-time').value;
    const service = document.getElementById('book-service').value;
    const message = document.getElementById('book-message').value.trim();

    if (!name || !phone || !date || !time || !service) {
      showToast("Please fill in all required fields!");
      return;
    }

    // Save appointment locally for admin view
    const newAppointment = {
      id: "apt_" + Date.now(),
      name,
      phone,
      date,
      time,
      service,
      message: message || "None",
      status: "Pending",
      timestamp: new Date().toLocaleString()
    };

    const storedApts = JSON.parse(localStorage.getItem('salon_real_look_appointments') || '[]');
    storedApts.unshift(newAppointment);
    localStorage.setItem('salon_real_look_appointments', JSON.stringify(storedApts));

    // Construct WhatsApp message
    const waMessage = 
`Hello Salon Real Look,

I would like to book an appointment.

Name: ${name}
Phone: ${phone}
Date: ${date}
Time: ${time}
Service: ${service}
Message: ${message || 'N/A'}

Please confirm my appointment.`;

    const encodedMsg = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/919227518888?text=${encodedMsg}`;

    showToast("Opening WhatsApp to complete your booking...");

    setTimeout(() => {
      window.open(waUrl, '_blank');
      form.reset();
    }, 1000);
  });
}

/* ==========================================================
   MEDIA MODAL / LIGHTBOX
   ========================================================== */
function initMediaModal() {
  const modal = document.getElementById('media-modal');
  const closeBtn = document.getElementById('modal-close');

  if (closeBtn && modal) {
    closeBtn.onclick = () => closeModal();
    modal.onclick = (e) => {
      if (e.target === modal) closeModal();
    };
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }
}

window.openImageModal = function(imgSrc, title) {
  const container = document.getElementById('modal-media-container');
  const caption = document.getElementById('modal-caption');
  const modal = document.getElementById('media-modal');

  if (container && modal) {
    container.innerHTML = `<img src="${imgSrc}" alt="${title}" style="max-height:80vh; margin:0 auto; display:block;">`;
    if (caption) caption.textContent = title;
    modal.classList.add('active');
  }
};

window.openVideoModal = function(videoUrl, title) {
  const container = document.getElementById('modal-media-container');
  const caption = document.getElementById('modal-caption');
  const modal = document.getElementById('media-modal');

  if (container && modal) {
    container.innerHTML = `
      <video controls autoplay style="width:100%; max-height:80vh;">
        <source src="${videoUrl}" type="video/mp4">
        Your browser does not support video play.
      </video>
    `;
    if (caption) caption.textContent = title;
    modal.classList.add('active');
  }
};

function closeModal() {
  const modal = document.getElementById('media-modal');
  const container = document.getElementById('modal-media-container');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      if (container) container.innerHTML = '';
    }, 300);
  }
}

/* ==========================================================
   TOAST NOTIFICATION UTILITY
   ========================================================== */
function showToast(message) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-msg');
  if (toast && msgEl) {
    msgEl.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
}
