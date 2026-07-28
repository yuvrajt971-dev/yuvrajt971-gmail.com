/**
 * Salon Real Look - Admin Dashboard Script
 * Manages authentication, media, gallery, services, reviews, and site settings.
 */

const STORAGE_KEY = 'salon_real_look_data_v1';
const AUTH_KEY = 'salon_real_look_admin_auth';

// DEFAULT DATA
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

// GET DATA FROM STORAGE
function getData() {
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

// SAVE DATA TO STORAGE
function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  initLoginForm();
  initTabNavigation();
  initLogout();
  initResetData();

  if (isLoggedIn()) {
    renderAllAdminData();
  }
});

// AUTHENTICATION
function isLoggedIn() {
  return sessionStorage.getItem(AUTH_KEY) === 'true';
}

function checkAuth() {
  const overlay = document.getElementById('loginOverlay');
  const layout = document.getElementById('dashboardLayout');

  if (isLoggedIn()) {
    overlay.classList.remove('active');
    layout.classList.remove('hidden');
    renderAllAdminData();
  } else {
    overlay.classList.add('active');
    layout.classList.add('hidden');
  }
}

function initLoginForm() {
  const form = document.getElementById('adminLoginForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('adminUsername').value.trim();
    const pass = document.getElementById('adminPassword').value.trim();

    if (user === 'admin' && pass === 'admin123') {
      sessionStorage.setItem(AUTH_KEY, 'true');
      checkAuth();
      form.reset();
    } else {
      alert('Invalid Username or Password! Use admin / admin123');
    }
  });
}

function initLogout() {
  const btn = document.getElementById('adminLogoutBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      sessionStorage.removeItem(AUTH_KEY);
      checkAuth();
    });
  }
}

// TAB NAVIGATION
function initTabNavigation() {
  const menuItems = document.querySelectorAll('.sidebar-menu .menu-item');
  const panes = document.querySelectorAll('.tab-pane');
  const titleEl = document.getElementById('currentTabTitle');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(m => m.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      item.classList.add('active');
      const tabId = item.getAttribute('data-tab');
      const targetPane = document.getElementById(tabId);
      if (targetPane) targetPane.classList.add('active');

      if (titleEl) {
        titleEl.innerHTML = item.innerHTML;
      }
    });
  });
}

// RENDER ALL ADMIN DATA
function renderAllAdminData() {
  const data = getData();

  // Overview Counts
  document.getElementById('statGalleryCount').textContent = data.gallery.length;
  document.getElementById('statServiceCount').textContent = data.services.length;
  document.getElementById('statVideoCount').textContent = data.videos.length;
  document.getElementById('statReviewCount').textContent = data.reviews.length;

  // Media Tab
  document.getElementById('heroVideoInput').value = data.settings.heroVideoUrl || 'assets/videos/hero-reel.mp4';
  renderVideosTable(data.videos);

  // Gallery Tab
  renderGalleryCards(data.gallery);

  // Services Tab
  renderServicesTable(data.services);

  // Content Tab
  populateContentForm(data.settings);

  // Reviews Tab
  renderReviewsList(data.reviews);
}

// MEDIA MANAGER
function renderVideosTable(videos) {
  const list = document.getElementById('adminVideosList');
  if (!list) return;

  list.innerHTML = videos.map(v => `
    <tr>
      <td><img src="${v.thumbnail}" class="table-thumb" referrerPolicy="no-referrer"></td>
      <td><strong>${v.title}</strong></td>
      <td>${v.duration}</td>
      <td>${v.views}</td>
      <td>
        <button class="action-btn-sm" onclick="deleteVideo(${v.id})"><i class="fa-solid fa-trash"></i> Delete</button>
      </td>
    </tr>
  `).join('');
}

document.getElementById('heroVideoForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const val = document.getElementById('heroVideoInput').value.trim();
  const data = getData();
  data.settings.heroVideoUrl = val;
  saveData(data);
  alert('Hero Background Video URL Saved successfully!');
});

document.getElementById('addVideoForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = getData();
  const newVid = {
    id: Date.now(),
    title: document.getElementById('newVidTitle').value.trim(),
    videoUrl: document.getElementById('newVidUrl').value.trim(),
    thumbnail: document.getElementById('newVidThumb').value.trim(),
    duration: document.getElementById('newVidDuration').value.trim() || '02:00',
    views: document.getElementById('newVidViews').value.trim() || '1.0K views'
  };

  data.videos.unshift(newVid);
  saveData(data);
  renderAllAdminData();
  e.target.reset();
  alert('New Video Reel added!');
});

window.deleteVideo = function(id) {
  if (!confirm('Are you sure you want to delete this video?')) return;
  const data = getData();
  data.videos = data.videos.filter(v => v.id !== id);
  saveData(data);
  renderAllAdminData();
};

// GALLERY MANAGER
function renderGalleryCards(gallery) {
  const container = document.getElementById('adminGalleryCards');
  if (!container) return;

  container.innerHTML = gallery.map(g => `
    <div class="admin-gal-card">
      <img src="${g.image}" class="admin-gal-img" referrerPolicy="no-referrer">
      <div class="admin-gal-body">
        <span>${g.category}</span>
        <h5>${g.title}</h5>
        <button class="action-btn-sm mt-2" onclick="deleteGalleryItem(${g.id})"><i class="fa-solid fa-trash"></i> Remove</button>
      </div>
    </div>
  `).join('');
}

document.getElementById('addGalleryForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = getData();
  const newItem = {
    id: Date.now(),
    title: document.getElementById('galTitle').value.trim(),
    category: document.getElementById('galCategory').value,
    image: document.getElementById('galImage').value.trim(),
    desc: document.getElementById('galDesc').value.trim()
  };

  data.gallery.unshift(newItem);
  saveData(data);
  renderAllAdminData();
  e.target.reset();
  alert('Gallery Photo Added!');
});

window.deleteGalleryItem = function(id) {
  if (!confirm('Delete this photo from gallery?')) return;
  const data = getData();
  data.gallery = data.gallery.filter(g => g.id !== id);
  saveData(data);
  renderAllAdminData();
};

// SERVICES MANAGER
function renderServicesTable(services) {
  const list = document.getElementById('adminServicesList');
  if (!list) return;

  list.innerHTML = services.map(s => `
    <tr>
      <td><img src="${s.image}" class="table-thumb" referrerPolicy="no-referrer"></td>
      <td><strong>${s.name}</strong></td>
      <td><span class="gold-icon">${s.price}</span></td>
      <td>${s.duration}</td>
      <td>
        <button class="action-btn-sm" onclick="deleteService(${s.id})"><i class="fa-solid fa-trash"></i> Remove</button>
      </td>
    </tr>
  `).join('');
}

document.getElementById('addServiceForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = getData();
  const newSrv = {
    id: Date.now(),
    name: document.getElementById('srvName').value.trim(),
    price: document.getElementById('srvPrice').value.trim(),
    duration: document.getElementById('srvDuration').value.trim(),
    image: document.getElementById('srvImage').value.trim(),
    desc: document.getElementById('srvDesc').value.trim()
  };

  data.services.push(newSrv);
  saveData(data);
  renderAllAdminData();
  e.target.reset();
  alert('Service Added!');
});

window.deleteService = function(id) {
  if (!confirm('Remove this service?')) return;
  const data = getData();
  data.services = data.services.filter(s => s.id !== id);
  saveData(data);
  renderAllAdminData();
};

// CONTENT MANAGER
function populateContentForm(settings) {
  document.getElementById('cntBrandName').value = settings.brandName || '';
  document.getElementById('cntHeroTitle').value = settings.heroTitle || '';
  document.getElementById('cntHeroSubtitle').value = settings.heroSubtitle || '';
  document.getElementById('cntHeroBadge').value = settings.heroBadge || '';
  document.getElementById('cntPhone').value = settings.phone || '';
  document.getElementById('cntWaNumber').value = settings.whatsappNumber || '';
  document.getElementById('cntIgLink').value = settings.instagramLink || '';
  document.getElementById('cntHours').value = settings.hours || '';
  document.getElementById('cntAddress').value = settings.address || '';
  document.getElementById('cntFooterText').value = settings.footerText || '';
}

document.getElementById('siteContentForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = getData();
  data.settings.brandName = document.getElementById('cntBrandName').value.trim();
  data.settings.heroTitle = document.getElementById('cntHeroTitle').value.trim();
  data.settings.heroSubtitle = document.getElementById('cntHeroSubtitle').value.trim();
  data.settings.heroBadge = document.getElementById('cntHeroBadge').value.trim();
  data.settings.phone = document.getElementById('cntPhone').value.trim();
  data.settings.whatsappNumber = document.getElementById('cntWaNumber').value.trim();
  data.settings.instagramLink = document.getElementById('cntIgLink').value.trim();
  data.settings.hours = document.getElementById('cntHours').value.trim();
  data.settings.address = document.getElementById('cntAddress').value.trim();
  data.settings.footerText = document.getElementById('cntFooterText').value.trim();

  saveData(data);
  alert('Website Content Updated! Visit live page to view changes.');
});

// REVIEWS MANAGER
function renderReviewsList(reviews) {
  const container = document.getElementById('adminReviewsList');
  if (!container) return;

  container.innerHTML = reviews.map(r => `
    <div class="admin-card mt-3">
      <div style="display:flex; align-items:center; justify-content:space-between;">
        <div>
          <strong>${r.name}</strong> - <span class="gold-icon">${r.service}</span>
          <p class="text-muted mt-2">"${r.text}"</p>
        </div>
        <button class="action-btn-sm" onclick="deleteReview(${r.id})"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join('');
}

document.getElementById('addReviewForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = getData();
  const newRev = {
    id: Date.now(),
    name: document.getElementById('revName').value.trim(),
    service: document.getElementById('revService').value.trim(),
    avatar: document.getElementById('revAvatar').value.trim(),
    text: document.getElementById('revText').value.trim()
  };

  data.reviews.push(newRev);
  saveData(data);
  renderAllAdminData();
  e.target.reset();
  alert('Review Testimonial Added!');
});

window.deleteReview = function(id) {
  if (!confirm('Delete this review?')) return;
  const data = getData();
  data.reviews = data.reviews.filter(r => r.id !== id);
  saveData(data);
  renderAllAdminData();
};

// RESET ALL DATA TO DEFAULT
function initResetData() {
  const btn = document.getElementById('resetDefaultsBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      if (confirm('Are you sure you want to RESET all content, services, gallery, and settings back to original factory defaults?')) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_SITE_DATA));
        renderAllAdminData();
        alert('Data reset to default successfully!');
      }
    });
  }
}
