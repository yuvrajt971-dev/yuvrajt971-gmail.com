/* ==========================================================================
   REAL LOOK SALON — ADMIN DASHBOARD JAVASCRIPT
   Manages all website content stored in LocalStorage
   ========================================================================== */

const LOCAL_STORAGE_KEY = 'REAL_LOOK_SALON_CONTENT_V1';
const CREDS_STORAGE_KEY = 'REAL_LOOK_ADMIN_CREDS_V1';
const APPOINTMENTS_STORAGE_KEY = 'REAL_LOOK_SALON_APPOINTMENTS_V1';

// Default Admin Credentials
const DEFAULT_CREDS = {
    username: 'admin',
    password: 'admin123'
};

// Default Initial Data Structure
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
    ]
};

// Admin State
let siteData = {};
let currentCreds = {};
let isLoggedIn = false;

document.addEventListener('DOMContentLoaded', () => {
    initCreds();
    initSiteData();
    setupLoginHandler();
    setupNavigationTabs();
    setupFormAutoSave();
    setupDropzones();
    setupModals();
    setupSecurityForm();
});

/* --------------------------------------------------------------------------
   INITIALIZATION & AUTHENTICATION
   -------------------------------------------------------------------------- */
function initCreds() {
    const storedCreds = localStorage.getItem(CREDS_STORAGE_KEY);
    if (storedCreds) {
        try {
            currentCreds = JSON.parse(storedCreds);
        } catch (e) {
            currentCreds = DEFAULT_CREDS;
        }
    } else {
        currentCreds = DEFAULT_CREDS;
        localStorage.setItem(CREDS_STORAGE_KEY, JSON.stringify(DEFAULT_CREDS));
    }
}

function initSiteData() {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
        try {
            siteData = JSON.parse(storedData);
            siteData = { ...DEFAULT_SITE_DATA, ...siteData };
            siteData.general = { ...DEFAULT_SITE_DATA.general, ...(siteData.general || {}) };
        } catch (e) {
            siteData = DEFAULT_SITE_DATA;
        }
    } else {
        siteData = DEFAULT_SITE_DATA;
        saveDataToStorage();
    }
}

function setupLoginHandler() {
    const loginForm = document.getElementById('loginForm');
    const loginScreen = document.getElementById('loginScreen');
    const adminApp = document.getElementById('adminApp');
    const loginError = document.getElementById('loginError');
    const togglePass = document.getElementById('togglePassVisibility');
    const passInput = document.getElementById('loginPassword');

    // Toggle Password Visibility
    togglePass?.addEventListener('click', () => {
        const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passInput.setAttribute('type', type);
        togglePass.querySelector('i').className = type === 'password' ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash';
    });

    loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = document.getElementById('loginUsername').value.trim();
        const pass = document.getElementById('loginPassword').value.trim();

        if (user === currentCreds.username && pass === currentCreds.password) {
            isLoggedIn = true;
            loginScreen.classList.add('hidden');
            adminApp.classList.remove('hidden');
            populateGeneralForms();
            renderAdminGallery();
            renderAdminVideos();
            renderAdminServices();
            renderAdminReviews();
            showToast('Welcome to Real Look Admin Panel!', 'success');
        } else {
            loginError.classList.remove('hidden');
        }
    });

    document.getElementById('logoutBtn')?.addEventListener('click', () => {
        isLoggedIn = false;
        adminApp.classList.add('hidden');
        loginScreen.classList.remove('hidden');
        loginError.classList.add('hidden');
        showToast('Logged out successfully', 'success');
    });

    document.getElementById('mobileSidebarToggle')?.addEventListener('click', () => {
        document.querySelector('.admin-sidebar')?.classList.toggle('open');
    });
}

/* --------------------------------------------------------------------------
   NAVIGATION TABS
   -------------------------------------------------------------------------- */
function setupNavigationTabs() {
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    const tabContents = document.querySelectorAll('.admin-tab');
    const tabTitleEl = document.getElementById('currentTabTitle');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const targetTab = e.currentTarget.getAttribute('data-tab');

            navItems.forEach(i => i.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            e.currentTarget.classList.add('active');
            const targetEl = document.getElementById(targetTab);
            if (targetEl) targetEl.classList.add('active');

            if (tabTitleEl) {
                tabTitleEl.textContent = e.currentTarget.querySelector('span').textContent;
            }

            // Close mobile sidebar if open
            document.querySelector('.admin-sidebar')?.classList.remove('open');
        });
    });
}

/* --------------------------------------------------------------------------
   FORM BINDING & SAVE
   -------------------------------------------------------------------------- */
function populateGeneralForms() {
    const g = siteData.general;

    setInputValue('inputSalonTitle', g.title);
    setInputValue('inputSubtitle', g.subtitle);
    setInputValue('inputHeroTitle1', g.heroTitleLine1);
    setInputValue('inputHeroTitle2', g.heroTitleLine2);
    setInputValue('inputHeroSub', g.heroSubtitle);
    setInputValue('inputHeroVideoUrl', g.heroVideo);
    
    // Video Preview
    const vSource = document.getElementById('heroVideoPreviewSource');
    const vPreview = document.getElementById('heroVideoPreview');
    if (vSource && vPreview) {
        vSource.src = g.heroVideo;
        vPreview.load();
    }

    setInputValue('inputPhone', g.phone);
    setInputValue('inputWhatsapp', g.whatsapp);
    setInputValue('inputEmail', g.email);
    setInputValue('inputInstagram', g.instagram);
    setInputValue('inputAddress', g.address);
    setInputValue('inputMapsUrl', g.mapsIframe);
    setInputValue('inputHours', g.workingHours);
    setInputValue('inputFooterAbout', g.footerAbout);
}

function setupFormAutoSave() {
    const inputs = [
        'inputSalonTitle', 'inputSubtitle', 'inputHeroTitle1', 'inputHeroTitle2',
        'inputHeroSub', 'inputHeroVideoUrl', 'inputPhone', 'inputWhatsapp',
        'inputEmail', 'inputInstagram', 'inputAddress', 'inputMapsUrl',
        'inputHours', 'inputFooterAbout'
    ];

    inputs.forEach(id => {
        const el = document.getElementById(id);
        el?.addEventListener('input', () => {
            readGeneralFormInputs();
            saveDataToStorage();
        });
    });

    const saveAndGoHome = () => {
        readGeneralFormInputs();
        saveDataToStorage();
        showToast('All changes saved! Redirecting to Home Page...', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 700);
    };

    document.getElementById('saveAllBtn')?.addEventListener('click', saveAndGoHome);
    document.querySelectorAll('.save-go-home-btn').forEach(btn => {
        btn.addEventListener('click', saveAndGoHome);
    });
}

function readGeneralFormInputs() {
    siteData.general = {
        title: getInputValue('inputSalonTitle'),
        subtitle: getInputValue('inputSubtitle'),
        tagline: "PREMIUM MASCULINE GROOMING STUDIO",
        heroTitleLine1: getInputValue('inputHeroTitle1'),
        heroTitleLine2: getInputValue('inputHeroTitle2'),
        heroSubtitle: getInputValue('inputHeroSub'),
        heroVideo: getInputValue('inputHeroVideoUrl'),
        phone: getInputValue('inputPhone'),
        whatsapp: getInputValue('inputWhatsapp'),
        email: getInputValue('inputEmail'),
        address: getInputValue('inputAddress'),
        instagram: getInputValue('inputInstagram'),
        mapsIframe: getInputValue('inputMapsUrl'),
        workingHours: getInputValue('inputHours'),
        footerAbout: getInputValue('inputFooterAbout')
    };
}

function saveDataToStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(siteData));
}

/* --------------------------------------------------------------------------
   GALLERY MANAGER
   -------------------------------------------------------------------------- */
function renderAdminGallery() {
    const grid = document.getElementById('adminGalleryGrid');
    if (!grid) return;

    grid.innerHTML = '';
    siteData.gallery.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'admin-media-card';
        card.innerHTML = `
            <div class="media-thumb-wrap">
                <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.title)}">
            </div>
            <div class="media-card-body">
                <div>
                    <span class="media-card-tag">${escapeHtml(item.category)}</span>
                    <h4 class="media-card-title">${escapeHtml(item.title)}</h4>
                </div>
                <div class="media-card-actions">
                    <button class="btn-edit" data-index="${index}"><i class="fa-solid fa-pen"></i> Replace</button>
                    <button class="btn-del" data-index="${index}"><i class="fa-solid fa-trash"></i> Delete</button>
                </div>
            </div>
        `;

        card.querySelector('.btn-edit').addEventListener('click', () => openImageModal(index));
        card.querySelector('.btn-del').addEventListener('click', () => deleteGalleryImage(index));

        grid.appendChild(card);
    });
}

function deleteGalleryImage(index) {
    if (confirm('Are you sure you want to delete this gallery image?')) {
        siteData.gallery.splice(index, 1);
        saveDataToStorage();
        renderAdminGallery();
        showToast('Image deleted successfully', 'success');
    }
}

/* --------------------------------------------------------------------------
   VIDEO MANAGER
   -------------------------------------------------------------------------- */
function renderAdminVideos() {
    const grid = document.getElementById('adminVideoGrid');
    if (!grid) return;

    grid.innerHTML = '';
    siteData.videos.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'admin-media-card';
        card.innerHTML = `
            <div class="media-thumb-wrap">
                <video src="${escapeHtml(item.url)}" muted controls></video>
            </div>
            <div class="media-card-body">
                <div>
                    <span class="media-card-tag">${escapeHtml(item.badge)}</span>
                    <h4 class="media-card-title">${escapeHtml(item.title)}</h4>
                </div>
                <div class="media-card-actions">
                    <button class="btn-edit" data-index="${index}"><i class="fa-solid fa-pen"></i> Replace</button>
                    <button class="btn-del" data-index="${index}"><i class="fa-solid fa-trash"></i> Delete</button>
                </div>
            </div>
        `;

        card.querySelector('.btn-edit').addEventListener('click', () => openVideoModal(index));
        card.querySelector('.btn-del').addEventListener('click', () => deleteVideo(index));

        grid.appendChild(card);
    });
}

function deleteVideo(index) {
    if (confirm('Are you sure you want to delete this video reel?')) {
        siteData.videos.splice(index, 1);
        saveDataToStorage();
        renderAdminVideos();
        showToast('Video deleted successfully', 'success');
    }
}

/* --------------------------------------------------------------------------
   SERVICES MANAGER
   -------------------------------------------------------------------------- */
function renderAdminServices() {
    const list = document.getElementById('adminServicesList');
    if (!list) return;

    list.innerHTML = '';
    siteData.services.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'admin-item-card';
        card.innerHTML = `
            <div class="item-info">
                <h4><i class="fa-solid ${escapeHtml(item.icon)} text-gold"></i> ${escapeHtml(item.title)} — <span class="text-gold">${escapeHtml(item.price)}</span> (${escapeHtml(item.duration)})</h4>
                <p>${escapeHtml(item.description)}</p>
            </div>
            <div class="item-actions">
                <button class="btn btn-outline btn-sm btn-edit-srv"><i class="fa-solid fa-pen"></i> Edit</button>
                <button class="btn btn-danger btn-sm btn-del-srv"><i class="fa-solid fa-trash"></i> Delete</button>
            </div>
        `;

        card.querySelector('.btn-edit-srv').addEventListener('click', () => openServiceModal(index));
        card.querySelector('.btn-del-srv').addEventListener('click', () => deleteService(index));

        list.appendChild(card);
    });
}

function deleteService(index) {
    if (confirm('Are you sure you want to delete this service?')) {
        siteData.services.splice(index, 1);
        saveDataToStorage();
        renderAdminServices();
        showToast('Service deleted', 'success');
    }
}

/* --------------------------------------------------------------------------
   REVIEWS MANAGER
   -------------------------------------------------------------------------- */
function renderAdminReviews() {
    const list = document.getElementById('adminReviewsList');
    if (!list) return;

    list.innerHTML = '';
    siteData.reviews.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'admin-item-card';
        const stars = '★'.repeat(item.rating);

        card.innerHTML = `
            <div class="item-info">
                <h4>${escapeHtml(item.name)} <span class="text-gold">${stars}</span> (${escapeHtml(item.tag)})</h4>
                <p>"${escapeHtml(item.text)}"</p>
            </div>
            <div class="item-actions">
                <button class="btn btn-outline btn-sm btn-edit-rev"><i class="fa-solid fa-pen"></i> Edit</button>
                <button class="btn btn-danger btn-sm btn-del-rev"><i class="fa-solid fa-trash"></i> Delete</button>
            </div>
        `;

        card.querySelector('.btn-edit-rev').addEventListener('click', () => openReviewModal(index));
        card.querySelector('.btn-del-rev').addEventListener('click', () => deleteReview(index));

        list.appendChild(card);
    });
}

function deleteReview(index) {
    if (confirm('Delete this client review?')) {
        siteData.reviews.splice(index, 1);
        saveDataToStorage();
        renderAdminReviews();
        showToast('Review removed', 'success');
    }
}

/* --------------------------------------------------------------------------
   DRAG & DROP MEDIA FILE UPLOADS
   -------------------------------------------------------------------------- */
function setupDropzones() {
    // Hero Video Dropzone
    const heroDrop = document.getElementById('heroVideoDropzone');
    const heroFile = document.getElementById('inputHeroVideoFile');

    if (heroDrop && heroFile) {
        setupFileDropzone(heroDrop, heroFile, (dataUrl) => {
            setInputValue('inputHeroVideoUrl', dataUrl);
            const vPreview = document.getElementById('heroVideoPreview');
            const vSource = document.getElementById('heroVideoPreviewSource');
            if (vSource && vPreview) {
                vSource.src = dataUrl;
                vPreview.load();
            }
            readGeneralFormInputs();
            saveDataToStorage();
            showToast('Hero video updated!', 'success');
        });
    }

    // Gallery Bulk Drag & Drop
    const galleryDrop = document.getElementById('galleryDropzone');
    const galleryFile = document.getElementById('galleryFileInput');

    if (galleryDrop && galleryFile) {
        setupFileDropzone(galleryDrop, galleryFile, (dataUrl, file) => {
            const newImage = {
                title: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' '),
                category: 'cuts',
                src: dataUrl
            };
            siteData.gallery.unshift(newImage);
            saveDataToStorage();
            renderAdminGallery();
            showToast(`Uploaded ${file.name} to gallery`, 'success');
        });
    }

    // Videos Bulk Drag & Drop
    const videoDrop = document.getElementById('videoDropzone');
    const videoFile = document.getElementById('videoFileInput');

    if (videoDrop && videoFile) {
        setupFileDropzone(videoDrop, videoFile, (dataUrl, file) => {
            const newVid = {
                title: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' '),
                badge: 'REEL',
                url: dataUrl
            };
            siteData.videos.unshift(newVid);
            saveDataToStorage();
            renderAdminVideos();
            showToast(`Uploaded ${file.name} to video reels`, 'success');
        });
    }
}

function setupFileDropzone(dropEl, inputEl, callback) {
    ['dragenter', 'dragover'].forEach(eventName => {
        dropEl.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropEl.classList.add('dragover');
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropEl.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropEl.classList.remove('dragover');
        });
    });

    dropEl.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        handleFiles(files, callback);
    });

    inputEl.addEventListener('change', (e) => {
        const files = e.target.files;
        handleFiles(files, callback);
    });
}

function handleFiles(files, callback) {
    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            callback(e.target.result, file);
        };
        reader.readAsDataURL(file);
    });
}

/* --------------------------------------------------------------------------
   MODALS SETUP
   -------------------------------------------------------------------------- */
function setupModals() {
    // GALLERY IMAGE MODAL
    const openImgModalBtn = document.getElementById('openAddImageModal');
    const closeImgModalBtn = document.getElementById('closeImageModal');
    const cancelImgModalBtn = document.getElementById('cancelImageModal');
    const imgModal = document.getElementById('imageModal');
    const imgModalForm = document.getElementById('imageModalForm');

    openImgModalBtn?.addEventListener('click', () => openImageModal(-1));
    closeImgModalBtn?.addEventListener('click', () => imgModal.classList.add('hidden'));
    cancelImgModalBtn?.addEventListener('click', () => imgModal.classList.add('hidden'));

    // Toggle Image Radio Source
    document.querySelectorAll('input[name="imgSourceType"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'file') {
                document.getElementById('imgUploadFileGroup').classList.remove('hidden');
                document.getElementById('imgUrlGroup').classList.add('hidden');
            } else {
                document.getElementById('imgUploadFileGroup').classList.add('hidden');
                document.getElementById('imgUrlGroup').classList.remove('hidden');
            }
        });
    });

    // Image File Input Preview
    document.getElementById('imgModalFileInput')?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                document.getElementById('imgModalPreview').src = ev.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Image URL Input Preview
    document.getElementById('imgModalUrlInput')?.addEventListener('input', (e) => {
        document.getElementById('imgModalPreview').src = e.target.value;
    });

    imgModalForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const index = parseInt(document.getElementById('imageEditIndex').value);
        const title = document.getElementById('imgModalTitle').value;
        const category = document.getElementById('imgModalCategory').value;
        const src = document.getElementById('imgModalPreview').src;

        const imgObj = { title, category, src };
        if (index === -1) {
            siteData.gallery.unshift(imgObj);
        } else {
            siteData.gallery[index] = imgObj;
        }

        saveDataToStorage();
        renderAdminGallery();
        imgModal.classList.add('hidden');
        showToast('Gallery image saved!', 'success');
    });

    // VIDEO MODAL
    document.getElementById('openAddVideoModal')?.addEventListener('click', () => openVideoModal(-1));
    document.getElementById('closeVideoModal')?.addEventListener('click', () => document.getElementById('videoModal').classList.add('hidden'));
    document.getElementById('cancelVideoModal')?.addEventListener('click', () => document.getElementById('videoModal').classList.add('hidden'));

    document.querySelectorAll('input[name="vidSourceType"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'file') {
                document.getElementById('vidUploadFileGroup').classList.remove('hidden');
                document.getElementById('vidUrlGroup').classList.add('hidden');
            } else {
                document.getElementById('vidUploadFileGroup').classList.add('hidden');
                document.getElementById('vidUrlGroup').classList.remove('hidden');
            }
        });
    });

    document.getElementById('vidModalFileInput')?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                const vPreview = document.getElementById('vidModalPreview');
                const vSource = document.getElementById('vidModalPreviewSource');
                vSource.src = ev.target.result;
                vPreview.load();
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('vidModalUrlInput')?.addEventListener('input', (e) => {
        const vPreview = document.getElementById('vidModalPreview');
        const vSource = document.getElementById('vidModalPreviewSource');
        vSource.src = e.target.value;
        vPreview.load();
    });

    document.getElementById('videoModalForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const index = parseInt(document.getElementById('videoEditIndex').value);
        const title = document.getElementById('vidModalTitle').value;
        const badge = document.getElementById('vidModalBadge').value;
        const url = document.getElementById('vidModalPreviewSource').src;

        const vidObj = { title, badge, url };
        if (index === -1) {
            siteData.videos.unshift(vidObj);
        } else {
            siteData.videos[index] = vidObj;
        }

        saveDataToStorage();
        renderAdminVideos();
        document.getElementById('videoModal').classList.add('hidden');
        showToast('Video reel saved!', 'success');
    });

    // SERVICE MODAL
    document.getElementById('openAddServiceModal')?.addEventListener('click', () => openServiceModal(-1));
    document.getElementById('closeServiceModal')?.addEventListener('click', () => document.getElementById('serviceModal').classList.add('hidden'));
    document.getElementById('cancelServiceModal')?.addEventListener('click', () => document.getElementById('serviceModal').classList.add('hidden'));

    document.getElementById('serviceModalForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const index = parseInt(document.getElementById('serviceEditIndex').value);
        const title = document.getElementById('srvModalTitle').value;
        const price = document.getElementById('srvModalPrice').value;
        const duration = document.getElementById('srvModalDuration').value;
        const icon = document.getElementById('srvModalIcon').value;
        const description = document.getElementById('srvModalDesc').value;
        const features = document.getElementById('srvModalFeatures').value.split(',').map(f => f.trim()).filter(Boolean);

        const srvObj = { title, price, duration, icon, description, features };
        if (index === -1) {
            siteData.services.push(srvObj);
        } else {
            siteData.services[index] = srvObj;
        }

        saveDataToStorage();
        renderAdminServices();
        document.getElementById('serviceModal').classList.add('hidden');
        showToast('Service saved!', 'success');
    });

    // REVIEW MODAL
    document.getElementById('openAddReviewModal')?.addEventListener('click', () => openReviewModal(-1));
    document.getElementById('closeReviewModal')?.addEventListener('click', () => document.getElementById('reviewModal').classList.add('hidden'));
    document.getElementById('cancelReviewModal')?.addEventListener('click', () => document.getElementById('reviewModal').classList.add('hidden'));

    document.getElementById('reviewModalForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const index = parseInt(document.getElementById('reviewEditIndex').value);
        const name = document.getElementById('revModalName').value;
        const rating = parseInt(document.getElementById('revModalRating').value);
        const tag = document.getElementById('revModalTag').value;
        const text = document.getElementById('revModalText').value;

        const revObj = { name, rating, tag, text };
        if (index === -1) {
            siteData.reviews.unshift(revObj);
        } else {
            siteData.reviews[index] = revObj;
        }

        saveDataToStorage();
        renderAdminReviews();
        document.getElementById('reviewModal').classList.add('hidden');
        showToast('Review saved!', 'success');
    });
}

function openImageModal(index) {
    const modal = document.getElementById('imageModal');
    const title = document.getElementById('imageModalTitle');
    document.getElementById('imageEditIndex').value = index;

    if (index === -1) {
        title.textContent = 'Add Gallery Image';
        document.getElementById('imgModalTitle').value = '';
        document.getElementById('imgModalCategory').value = 'cuts';
        document.getElementById('imgModalPreview').src = 'images/gallery1.jpg';
    } else {
        title.textContent = 'Replace / Edit Image';
        const img = siteData.gallery[index];
        document.getElementById('imgModalTitle').value = img.title;
        document.getElementById('imgModalCategory').value = img.category;
        document.getElementById('imgModalPreview').src = img.src;
    }

    modal.classList.remove('hidden');
}

function openVideoModal(index) {
    const modal = document.getElementById('videoModal');
    const title = document.getElementById('videoModalTitle');
    document.getElementById('videoEditIndex').value = index;

    const vPreview = document.getElementById('vidModalPreview');
    const vSource = document.getElementById('vidModalPreviewSource');

    if (index === -1) {
        title.textContent = 'Add Video Reel';
        document.getElementById('vidModalTitle').value = '';
        document.getElementById('vidModalBadge').value = 'REEL';
        vSource.src = 'videos/haircut1.mp4';
    } else {
        title.textContent = 'Replace / Edit Video';
        const vid = siteData.videos[index];
        document.getElementById('vidModalTitle').value = vid.title;
        document.getElementById('vidModalBadge').value = vid.badge;
        vSource.src = vid.url;
    }
    vPreview.load();

    modal.classList.remove('hidden');
}

function openServiceModal(index) {
    const modal = document.getElementById('serviceModal');
    const title = document.getElementById('serviceModalTitle');
    document.getElementById('serviceEditIndex').value = index;

    if (index === -1) {
        title.textContent = 'Add New Service';
        document.getElementById('srvModalTitle').value = '';
        document.getElementById('srvModalPrice').value = '$40';
        document.getElementById('srvModalDuration').value = '30 Min';
        document.getElementById('srvModalIcon').value = 'fa-scissors';
        document.getElementById('srvModalDesc').value = '';
        document.getElementById('srvModalFeatures').value = 'Scalp Wash, Hot Towel';
    } else {
        title.textContent = 'Edit Service';
        const srv = siteData.services[index];
        document.getElementById('srvModalTitle').value = srv.title;
        document.getElementById('srvModalPrice').value = srv.price;
        document.getElementById('srvModalDuration').value = srv.duration;
        document.getElementById('srvModalIcon').value = srv.icon;
        document.getElementById('srvModalDesc').value = srv.description;
        document.getElementById('srvModalFeatures').value = (srv.features || []).join(', ');
    }

    modal.classList.remove('hidden');
}

function openReviewModal(index) {
    const modal = document.getElementById('reviewModal');
    const title = document.getElementById('reviewModalTitle');
    document.getElementById('reviewEditIndex').value = index;

    if (index === -1) {
        title.textContent = 'Add Client Review';
        document.getElementById('revModalName').value = '';
        document.getElementById('revModalRating').value = '5';
        document.getElementById('revModalTag').value = 'Verified Client';
        document.getElementById('revModalText').value = '';
    } else {
        title.textContent = 'Edit Client Review';
        const rev = siteData.reviews[index];
        document.getElementById('revModalName').value = rev.name;
        document.getElementById('revModalRating').value = rev.rating.toString();
        document.getElementById('revModalTag').value = rev.tag;
        document.getElementById('revModalText').value = rev.text;
    }

    modal.classList.remove('hidden');
}

/* --------------------------------------------------------------------------
   SECURITY & RESET FORM
   -------------------------------------------------------------------------- */
function setupSecurityForm() {
    const form = document.getElementById('changePasswordForm');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const curr = document.getElementById('currentPassInput').value;
        const newP = document.getElementById('newPassInput').value;
        const confP = document.getElementById('confirmPassInput').value;

        if (curr !== currentCreds.password) {
            showToast('Current password incorrect', 'error');
            return;
        }

        if (newP !== confP) {
            showToast('New passwords do not match', 'error');
            return;
        }

        currentCreds.password = newP;
        localStorage.setItem(CREDS_STORAGE_KEY, JSON.stringify(currentCreds));
        form.reset();
        showToast('Admin password updated successfully!', 'success');
    });

    document.getElementById('resetFactoryBtn')?.addEventListener('click', () => {
        if (confirm('CRITICAL WARNING: This will reset all salon content, titles, videos, and images back to default factory settings. Proceed?')) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_SITE_DATA));
            initSiteData();
            populateGeneralForms();
            renderAdminGallery();
            renderAdminVideos();
            renderAdminServices();
            renderAdminReviews();
            showToast('Reset to factory defaults completed', 'success');
        }
    });
}

/* --------------------------------------------------------------------------
   UTILITIES & TOASTS
   -------------------------------------------------------------------------- */
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? 'fa-circle-check' : (type === 'error' ? 'fa-circle-xmark' : 'fa-circle-info');

    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function getInputValue(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
}

function setInputValue(id, val) {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.value = val;
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
