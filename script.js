/* ==========================================================================
   REAL LOOK SALON — PUBLIC WEBSITE JAVASCRIPT
   Reads content dynamically from LocalStorage
   ========================================================================== */

const LOCAL_STORAGE_KEY = 'REAL_LOOK_SALON_CONTENT_V1';
const APPOINTMENTS_STORAGE_KEY = 'REAL_LOOK_SALON_APPOINTMENTS_V1';

// Default initial data structure
const DEFAULT_SITE_DATA = {
    general: {
        title: "REAL LOOK SALON",
        subtitle: "CRAFTING YOUR CONFIDENCE",
        tagline: "PREMIUM MASCULINE GROOMING STUDIO",
        heroTitleLine1: "YOUR STYLE.",
        heroTitleLine2: "YOUR CONFIDENCE.",
        heroSubtitle: "Professional Haircuts • Beard Styling • Hair Color • Premium Grooming",
        heroVideo: "videos/hero.mp4",
        phone: "+1 (555) 019-2834",
        whatsapp: "+15550192834",
        email: "info@reallooksalon.com",
        address: "124 Luxury Boulevard, Suite 10, Downtown Financial District",
        instagram: "https://www.instagram.com/salonreallook/?hl=en",
        mapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.9537353153166!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
        workingHours: "Mon – Sat: 10:00 AM – 9:00 PM\nSunday: 10:00 AM – 8:00 PM",
        footerAbout: "Real Look Salon is a modern luxury grooming space for men. We deliver precision haircuts, master beard sculpting, and bespoke scalp treatments."
    },
    services: [
        {
            title: "Executive Haircut & Fade",
            price: "$45",
            duration: "45 Min",
            icon: "fa-scissors",
            description: "Precision cut tailored to your head shape, including shampoo wash, scalp massage, hot towel, and styling with premium pomade.",
            features: ["Scalp Massage", "Hot Towel", "Razor Finish"]
        },
        {
            title: "Beard Sculpting & Razor Lineup",
            price: "$35",
            duration: "30 Min",
            icon: "fa-user-ninja",
            description: "Master beard trimming, hot towel wrap, straight razor edging, and organic beard oil hydration massage.",
            features: ["Hot Towel Wrap", "Straight Razor Edging", "Oil Massage"]
        },
        {
            title: "Royal Hair & Beard Combo",
            price: "$70",
            duration: "60 Min",
            icon: "fa-crown",
            description: "Our signature experience. Includes full haircut, custom beard sculpting, charcoal facial mask, and hot towel relaxation.",
            features: ["Haircut + Beard", "Charcoal Facial", "Hot Towel Refresh"]
        },
        {
            title: "Hair Color & Gray Blending",
            price: "$55",
            duration: "45 Min",
            icon: "fa-wand-magic-sparkles",
            description: "Subtle, natural gray blending or full rich hair color transformation using ammonia-free luxury products.",
            features: ["Natural Toning", "Ammonia-Free", "Color Lock Treatment"]
        },
        {
            title: "Scalp Detox & Charcoal Spa",
            price: "$40",
            duration: "30 Min",
            icon: "fa-spa",
            description: "Deep cleansing scalp exfoliation, steam treatment, invigorating head massage, and hair follicle nourishment.",
            features: ["Exfoliating Scrub", "Steam Treatment", "Stress Relief Massage"]
        },
        {
            title: "Junior Gentleman Cut",
            price: "$30",
            duration: "30 Min",
            icon: "fa-child",
            description: "Gentle, stylish haircuts for young gentlemen (under 12 years) with patience, styling, and a smile.",
            features: ["Gentle Stylists", "Kids Hair Styling", "Complimentary Juice"]
        }
    ],
    videos: [
        {
            title: "Skin Fade & Textured Top",
            badge: "HAIRCUT",
            url: "videos/haircut1.mp4"
        },
        {
            title: "Executive Beard Sculpting",
            badge: "BEARD WORK",
            url: "videos/haircut2.mp4"
        },
        {
            title: "Modern Crop & Hair Design",
            badge: "TRENDING",
            url: "videos/haircut3.mp4"
        },
        {
            title: "Hot Towel Razor Lineup",
            badge: "SHAVE",
            url: "videos/haircut1.mp4"
        }
    ],
    gallery: [
        {
            title: "Precision Skin Fade",
            category: "cuts",
            src: "images/gallery1.jpg"
        },
        {
            title: "Master Beard Sculpting",
            category: "beard",
            src: "images/gallery2.jpg"
        },
        {
            title: "Luxury Salon Atmosphere",
            category: "interior",
            src: "images/gallery3.jpg"
        },
        {
            title: "Textured Crop & Taper",
            category: "cuts",
            src: "images/gallery4.jpg"
        },
        {
            title: "Natural Gray Blending",
            category: "color",
            src: "images/gallery1.jpg"
        },
        {
            title: "Classic Barber Styling",
            category: "cuts",
            src: "images/gallery2.jpg"
        }
    ],
    reviews: [
        {
            name: "David Harrison",
            tag: "Executive Client",
            rating: 5,
            text: "Real Look Salon is hands down the best grooming studio in town. Alex gave me the cleanest fade and beard shape up I've ever had. Highly recommended!"
        },
        {
            name: "Marcus Vance",
            tag: "Regular Member",
            rating: 5,
            text: "From the hot towel service to the precise razor lineup, everything feels like a 5-star experience. The atmosphere is relaxing and classy."
        },
        {
            name: "Julian Thorne",
            tag: "First-time Guest",
            rating: 5,
            text: "Superb attention to detail! I got the Royal Hair & Beard combo before my wedding. The barbers here are true master craftsmen."
        }
    ],
    whyUs: [
        {
            icon: "fa-award",
            title: "Master Barber Artists",
            desc: "Our team consists of licensed master barbers with over 8+ years of dedicated precision cut experience."
        },
        {
            icon: "fa-couch",
            title: "Luxury Atmosphere",
            desc: "Enjoy comfortable leather chairs, complimentary espresso or cold beverages, and curated music."
        },
        {
            icon: "fa-bottle-droplet",
            title: "Premium Products",
            desc: "We use exclusively organic beard oils, scalp treatments, and top-tier matte pomades."
        },
        {
            icon: "fa-shield-virus",
            title: "Sanitary Excellence",
            desc: "Hospital-grade sterilization for all razors, blades, and tools after every single haircut."
        }
    ]
};

// State Object
let siteData = {};
let currentReelIndex = 0;
let currentTestimonialIndex = 0;
let testimonialInterval = null;
let currentGalleryFilter = 'all';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadDataFromStorage();
    renderSiteContent();
    setupEventListeners();
    setupScrollAnimations();
    hidePreloader();
});

// Listen for updates from Admin Panel (other tabs / windows)
window.addEventListener('storage', (e) => {
    if (e.key === LOCAL_STORAGE_KEY) {
        loadDataFromStorage();
        renderSiteContent();
    }
});

/* --------------------------------------------------------------------------
   DATA MANAGEMENT
   -------------------------------------------------------------------------- */
function loadDataFromStorage() {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
        try {
            siteData = JSON.parse(stored);
            // Ensure any missing keys are merged from default
            siteData = { ...DEFAULT_SITE_DATA, ...siteData };
            siteData.general = { ...DEFAULT_SITE_DATA.general, ...(siteData.general || {}) };
        } catch (err) {
            console.error('Failed to parse localStorage data:', err);
            siteData = DEFAULT_SITE_DATA;
        }
    } else {
        siteData = DEFAULT_SITE_DATA;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_SITE_DATA));
    }
}

/* --------------------------------------------------------------------------
   RENDER SITE CONTENT DYNAMICALLY
   -------------------------------------------------------------------------- */
function renderSiteContent() {
    const g = siteData.general;

    // Preloader Titles
    setElText('preloaderTitle', g.title);
    setElText('preloaderSubtitle', g.subtitle);

    // Header Branding
    setElText('siteLogoTitle', g.title.split(' ')[0] || 'REAL LOOK');
    setElText('siteLogoSub', g.title.split(' ').slice(1).join(' ') || 'SALON');
    setElText('mobileLogoMain', g.title);
    
    setElAttr('headerInstagram', 'href', g.instagram);
    setElAttr('mobileSocialInsta', 'href', g.instagram);
    setElAttr('mobileSocialWa', 'href', `https://wa.me/${g.whatsapp.replace(/[^0-9]/g, '')}`);
    setElAttr('mobileSocialPhone', 'href', `tel:${g.phone.replace(/[^0-9]/g, '')}`);

    // Hero Section
    setElText('heroBadgeText', g.tagline || 'PREMIUM MASCULINE GROOMING STUDIO');
    setElText('heroTitle', `${g.heroTitleLine1}\n${g.heroTitleLine2}`);
    
    // Formatted Hero Title HTML
    const heroTitleEl = document.getElementById('heroTitle');
    if (heroTitleEl) {
        heroTitleEl.innerHTML = `${escapeHtml(g.heroTitleLine1 || 'YOUR STYLE.')}<br><span class="text-gold">${escapeHtml(g.heroTitleLine2 || 'YOUR CONFIDENCE.')}</span>`;
    }

    setElText('heroSubtitle', g.heroSubtitle || 'Professional Haircuts • Beard Styling • Hair Color');

    // Hero Video Update
    const heroVideo = document.getElementById('heroVideo');
    const heroVideoSource = document.getElementById('heroVideoSource');
    if (heroVideo && heroVideoSource) {
        if (heroVideoSource.src !== g.heroVideo) {
            heroVideoSource.src = g.heroVideo;
            heroVideo.load();
            heroVideo.play().catch(() => {});
        }
    }

    // Render Services Grid & Form Select Options
    renderServices();

    // Render Video Reels
    renderVideos();

    // Render Gallery
    renderGallery();

    // Render Why Choose Us
    renderWhyUs();

    // Render Reviews
    renderReviews();

    // Contact Card & Footer Details
    setElText('contactCardTitle', g.title);
    setElText('contactCardSub', g.subtitle);
    setElText('contactAddress', g.address);
    setElText('contactPhone', g.phone);
    setElAttr('contactPhone', 'href', `tel:${g.phone.replace(/[^0-9]/g, '')}`);
    setElText('contactEmail', g.email);
    setElAttr('contactEmail', 'href', `mailto:${g.email}`);
    
    // Formatted Working Hours
    const contactHoursEl = document.getElementById('contactHours');
    if (contactHoursEl) {
        contactHoursEl.innerHTML = escapeHtml(g.workingHours).replace(/\n/g, '<br>');
    }

    // Map iframe
    const mapIframe = document.getElementById('mapIframe');
    if (mapIframe && g.mapsIframe) {
        mapIframe.src = g.mapsIframe;
    }

    // Quick Contact Buttons
    setElAttr('callBtnLink', 'href', `tel:${g.phone.replace(/[^0-9]/g, '')}`);
    setElText('callBtnText', `Call Now (${g.phone})`);
    setElAttr('waBtnLink', 'href', `https://wa.me/${g.whatsapp.replace(/[^0-9]/g, '')}`);
    setElAttr('instaBtnLink', 'href', g.instagram);

    // Social Row Links
    setElAttr('socialRowInsta', 'href', g.instagram);
    setElAttr('socialRowWa', 'href', `https://wa.me/${g.whatsapp.replace(/[^0-9]/g, '')}`);
    setElAttr('socialRowPhone', 'href', `tel:${g.phone.replace(/[^0-9]/g, '')}`);

    // Footer
    setElText('footerLogoMain', g.title.split(' ')[0] || 'REAL LOOK');
    setElText('footerLogoSub', g.title.split(' ').slice(1).join(' ') || 'SALON');
    setElText('footerAbout', g.footerAbout);
    setElAttr('footerSocialInsta', 'href', g.instagram);
    setElAttr('footerSocialWa', 'href', `https://wa.me/${g.whatsapp.replace(/[^0-9]/g, '')}`);
    setElAttr('footerSocialPhone', 'href', `tel:${g.phone.replace(/[^0-9]/g, '')}`);
    
    setElText('footerPhone', g.phone);
    setElText('footerEmail', g.email);
    setElText('footerCopyrightName', g.title);
}

/* --------------------------------------------------------------------------
   COMPONENT RENDERERS
   -------------------------------------------------------------------------- */
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    const select = document.getElementById('serviceSelect');
    if (!grid) return;

    grid.innerHTML = '';
    if (select) select.innerHTML = '';

    siteData.services.forEach((srv, index) => {
        // Service Card
        const card = document.createElement('div');
        card.className = 'service-card reveal-up';
        card.setAttribute('data-delay', (index * 100).toString());

        const featuresHtml = (srv.features || []).map(f => `<span class="feature-tag"><i class="fa-solid fa-check text-gold"></i> ${escapeHtml(f)}</span>`).join('');

        card.innerHTML = `
            <div>
                <div class="service-card-header">
                    <div class="service-icon"><i class="fa-solid ${escapeHtml(srv.icon || 'fa-scissors')}"></i></div>
                    <div class="service-price-box">
                        <span class="service-price">${escapeHtml(srv.price)}</span>
                        <span class="service-duration">${escapeHtml(srv.duration)}</span>
                    </div>
                </div>
                <h3 class="service-title">${escapeHtml(srv.title)}</h3>
                <p class="service-desc">${escapeHtml(srv.description)}</p>
                <div class="service-features">${featuresHtml}</div>
            </div>
            <a href="#book" class="btn btn-outline btn-full btn-sm book-service-btn" data-service="${escapeHtml(srv.title)}">
                <span>Select & Book</span>
                <i class="fa-solid fa-angle-right"></i>
            </a>
        `;
        grid.appendChild(card);

        // Add to Appointment Form Select dropdown
        if (select) {
            const opt = document.createElement('option');
            opt.value = srv.title;
            opt.textContent = `${srv.title} (${srv.price})`;
            select.appendChild(opt);
        }
    });

    // Attach click event to "Select & Book" buttons
    document.querySelectorAll('.book-service-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const serviceName = e.currentTarget.getAttribute('data-service');
            if (select && serviceName) {
                select.value = serviceName;
            }
        });
    });
}

function renderVideos() {
    const track = document.getElementById('reelTrack');
    if (!track) return;

    track.innerHTML = '';
    siteData.videos.forEach((vid) => {
        const card = document.createElement('div');
        card.className = 'reel-card';
        card.innerHTML = `
            <video class="reel-video" loop muted playsinline poster="images/gallery1.jpg">
                <source src="${escapeHtml(vid.url)}" type="video/mp4">
            </video>
            <div class="reel-overlay">
                <span class="reel-badge"><i class="fa-solid fa-bolt"></i> ${escapeHtml(vid.badge)}</span>
                <div class="reel-info">
                    <h3 class="reel-title">${escapeHtml(vid.title)}</h3>
                    <button class="reel-play-btn" aria-label="Play Reel"><i class="fa-solid fa-play"></i></button>
                </div>
            </div>
        `;

        // Video playback on hover / click
        const videoEl = card.querySelector('video');
        card.addEventListener('mouseenter', () => videoEl.play().catch(() => {}));
        card.addEventListener('mouseleave', () => {
            videoEl.pause();
            videoEl.currentTime = 0;
        });
        card.addEventListener('click', () => {
            if (videoEl.paused) videoEl.play(); else videoEl.pause();
        });

        track.appendChild(card);
    });
}

function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    grid.innerHTML = '';
    const filtered = currentGalleryFilter === 'all' 
        ? siteData.gallery 
        : siteData.gallery.filter(item => item.category === currentGalleryFilter);

    filtered.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'gallery-item reveal-up';
        card.setAttribute('data-index', index.toString());

        card.innerHTML = `
            <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.title)}" loading="lazy">
            <div class="gallery-item-overlay">
                <span class="gallery-item-tag"><i class="fa-solid fa-scissors"></i> ${escapeHtml(item.category)}</span>
                <h3 class="gallery-item-title">${escapeHtml(item.title)}</h3>
            </div>
        `;

        card.addEventListener('click', () => openLightbox(index, filtered));
        grid.appendChild(card);
    });
}

function renderWhyUs() {
    const grid = document.getElementById('whyUsGrid');
    if (!grid) return;

    grid.innerHTML = '';
    siteData.whyUs.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'why-card reveal-up';
        card.innerHTML = `
            <div class="why-icon"><i class="fa-solid ${escapeHtml(item.icon)}"></i></div>
            <h3 class="why-title">${escapeHtml(item.title)}</h3>
            <p class="why-desc">${escapeHtml(item.desc)}</p>
        `;
        grid.appendChild(card);
    });
}

function renderReviews() {
    const track = document.getElementById('testimonialTrack');
    const dotsContainer = document.getElementById('testimonialDots');
    if (!track) return;

    track.innerHTML = '';
    if (dotsContainer) dotsContainer.innerHTML = '';

    siteData.reviews.forEach((rev, index) => {
        // Testimonial Card
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        const starsHtml = '★'.repeat(rev.rating) + '☆'.repeat(5 - rev.rating);

        card.innerHTML = `
            <div class="stars-row">${starsHtml}</div>
            <p class="testimonial-quote">"${escapeHtml(rev.text)}"</p>
            <h4 class="testimonial-author">${escapeHtml(rev.name)}</h4>
            <span class="testimonial-tag">${escapeHtml(rev.tag)}</span>
        `;
        track.appendChild(card);

        // Dot
        if (dotsContainer) {
            const dot = document.createElement('div');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToTestimonial(index));
            dotsContainer.appendChild(dot);
        }
    });

    startTestimonialAutoSlide();
}

/* --------------------------------------------------------------------------
   SLIDERS & LIGHTBOX
   -------------------------------------------------------------------------- */
function goToTestimonial(index) {
    currentTestimonialIndex = index;
    const track = document.getElementById('testimonialTrack');
    if (track) {
        track.style.transform = `translateX(-${index * 100}%)`;
    }
    const dots = document.querySelectorAll('#testimonialDots .dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function startTestimonialAutoSlide() {
    if (testimonialInterval) clearInterval(testimonialInterval);
    if (siteData.reviews.length <= 1) return;

    testimonialInterval = setInterval(() => {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % siteData.reviews.length;
        goToTestimonial(currentTestimonialIndex);
    }, 5000);
}

// Reel Slider Next/Prev Controls
function setupReelSlider() {
    const prevBtn = document.getElementById('reelPrev');
    const nextBtn = document.getElementById('reelNext');
    const track = document.getElementById('reelTrack');

    if (!prevBtn || !nextBtn || !track) return;

    nextBtn.addEventListener('click', () => {
        const cardWidth = 280 + 24; // width + gap
        const maxScroll = track.scrollWidth - track.clientWidth;
        currentReelIndex = Math.min(currentReelIndex + 1, Math.floor(maxScroll / cardWidth));
        track.style.transform = `translateX(-${currentReelIndex * cardWidth}px)`;
    });

    prevBtn.addEventListener('click', () => {
        const cardWidth = 280 + 24;
        currentReelIndex = Math.max(currentReelIndex - 1, 0);
        track.style.transform = `translateX(-${currentReelIndex * cardWidth}px)`;
    });
}

// Lightbox
let activeLightboxItems = [];
let currentLightboxIndex = 0;

function openLightbox(index, items) {
    activeLightboxItems = items;
    currentLightboxIndex = index;

    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const title = document.getElementById('lightboxTitle');
    const counter = document.getElementById('lightboxCounter');

    if (!lightbox || !img) return;

    img.src = items[index].src;
    if (title) title.textContent = items[index].title;
    if (counter) counter.textContent = `${index + 1} / ${items.length}`;

    lightbox.classList.add('active');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.remove('active');
}

/* --------------------------------------------------------------------------
   EVENT LISTENERS & INTERACTIVITY
   -------------------------------------------------------------------------- */
function setupEventListeners() {
    // Header Scroll Effect
    const header = document.getElementById('header');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header?.classList.add('scrolled');
            backToTop?.classList.add('visible');
        } else {
            header?.classList.remove('scrolled');
            backToTop?.classList.remove('visible');
        }
    });

    backToTop?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile Navigation Drawer
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const mobileNav = document.getElementById('mobileNav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    menuToggle?.addEventListener('click', () => mobileNav?.classList.add('open'));
    menuClose?.addEventListener('click', () => mobileNav?.classList.remove('open'));
    mobileLinks.forEach(link => link.addEventListener('click', () => mobileNav?.classList.remove('open')));

    // Gallery Filter Buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            currentGalleryFilter = e.currentTarget.getAttribute('data-filter') || 'all';
            renderGallery();
        });
    });

    // Lightbox Controls
    document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
    document.getElementById('lightboxPrev')?.addEventListener('click', () => {
        if (activeLightboxItems.length === 0) return;
        currentLightboxIndex = (currentLightboxIndex - 1 + activeLightboxItems.length) % activeLightboxItems.length;
        openLightbox(currentLightboxIndex, activeLightboxItems);
    });
    document.getElementById('lightboxNext')?.addEventListener('click', () => {
        if (activeLightboxItems.length === 0) return;
        currentLightboxIndex = (currentLightboxIndex + 1) % activeLightboxItems.length;
        openLightbox(currentLightboxIndex, activeLightboxItems);
    });

    // Reel Slider Setup
    setupReelSlider();

    // Appointment Form Submission
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        // Set default date to today
        const dateInput = document.getElementById('bookingDate');
        if (dateInput) {
            dateInput.value = new Date().toISOString().split('T')[0];
        }

        appointmentForm.addEventListener('submit', handleAppointmentSubmit);
    }

    document.getElementById('closeSuccessBtn')?.addEventListener('click', () => {
        document.getElementById('formSuccess')?.classList.add('hidden');
    });
}

function handleAppointmentSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('clientName')?.value;
    const phone = document.getElementById('clientPhone')?.value;
    const service = document.getElementById('serviceSelect')?.value;
    const barber = document.getElementById('barberSelect')?.value;
    const date = document.getElementById('bookingDate')?.value;
    const time = document.getElementById('bookingTime')?.value;

    const newAppointment = {
        id: Date.now(),
        name,
        phone,
        service,
        barber,
        date,
        time,
        createdAt: new Date().toISOString()
    };

    // Save appointment to LocalStorage
    const existing = JSON.parse(localStorage.getItem(APPOINTMENTS_STORAGE_KEY) || '[]');
    existing.unshift(newAppointment);
    localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(existing));

    // Display Success Overlay
    setElText('resName', name);
    setElText('resService', service);
    setElText('resDate', date);
    setElText('resTime', time);

    document.getElementById('formSuccess')?.classList.remove('hidden');
    appointmentForm.reset();
}

/* --------------------------------------------------------------------------
   SCROLL ANIMATIONS & UTILS
   -------------------------------------------------------------------------- */
function setupScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
}

function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 400);
    }
}

// Utility Functions
function setElText(id, text) {
    const el = document.getElementById(id);
    if (el && text !== undefined) el.textContent = text;
}

function setElAttr(id, attr, val) {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.setAttribute(attr, val);
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
