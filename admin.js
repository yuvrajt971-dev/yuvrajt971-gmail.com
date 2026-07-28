/* ==========================================================
   SALON REAL LOOK - ADMIN PANEL SCRIPT
   ========================================================== */

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
  ]
};

let currentData = getStoredData();

function getStoredData() {
  const saved = localStorage.getItem('salon_real_look_data');
  if (saved) {
    try {
      return { ...DEFAULT_SALON_DATA, ...JSON.parse(saved) };
    } catch (e) {
      console.error(e);
    }
  }
  return DEFAULT_SALON_DATA;
}

function saveData() {
  localStorage.setItem('salon_real_look_data', JSON.stringify(currentData));
}

document.addEventListener('DOMContentLoaded', () => {
  // Check auth state
  if (sessionStorage.getItem('salon_admin_logged_in') === 'true') {
    showDashboard();
  }

  // Set date display
  const dateEl = document.getElementById('admin-date-display');
  if (dateEl) {
    dateEl.textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  // Login Form
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('admin-user').value.trim();
      const pass = document.getElementById('admin-pass').value.trim();
      const errEl = document.getElementById('login-error');

      if (user === 'admin' && pass === 'admin123') {
        sessionStorage.setItem('salon_admin_logged_in', 'true');
        if (errEl) errEl.style.display = 'none';
        showDashboard();
      } else {
        if (errEl) errEl.style.display = 'block';
      }
    });
  }

  // Logout
  const logoutBtn = document.getElementById('admin-logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('salon_admin_logged_in');
      location.reload();
    });
  }

  // Sidebar Tab Switcher
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const tabId = item.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // Hero File Upload Preview
  const heroFile = document.getElementById('hero-file-input');
  if (heroFile) {
    heroFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const url = URL.createObjectURL(file);
        const prevContainer = document.getElementById('hero-preview-container');
        const prevVideo = document.getElementById('hero-preview-video');
        if (prevContainer && prevVideo) {
          prevVideo.src = url;
          prevContainer.style.display = 'block';
        }
      }
    });
  }

  initAdminForms();
});

function showDashboard() {
  document.getElementById('login-wrapper').style.display = 'none';
  document.getElementById('admin-dashboard').style.display = 'flex';
  renderOverview();
  populateFormFields();
}

window.switchTab = function(tabId) {
  const menuItems = document.querySelectorAll('.menu-item');
  const panels = document.querySelectorAll('.tab-panel');
  const titleEl = document.getElementById('tab-page-title');

  menuItems.forEach(i => i.classList.remove('active'));
  panels.forEach(p => p.classList.remove('active'));

  const targetItem = document.querySelector(`.menu-item[data-tab="${tabId}"]`);
  const targetPanel = document.getElementById(tabId);

  if (targetItem) targetItem.classList.add('active');
  if (targetPanel) targetPanel.classList.add('active');

  if (titleEl && targetItem) {
    const text = targetItem.querySelector('span').textContent;
    titleEl.innerHTML = `Dashboard <span>${text}</span>`;
  }

  if (tabId === 'tab-overview') renderOverview();
  if (tabId === 'tab-media') renderMediaTab();
  if (tabId === 'tab-gallery') renderGalleryTab();
  if (tabId === 'tab-content') renderContentTab();
  if (tabId === 'tab-appointments') renderAppointmentsTab();
};

/* ==========================================================
   OVERVIEW & STATS
   ========================================================== */
function renderOverview() {
  const apts = JSON.parse(localStorage.getItem('salon_real_look_appointments') || '[]');
  
  const aptsCount = document.getElementById('stat-apts-count');
  const galCount = document.getElementById('stat-gallery-count');
  const servCount = document.getElementById('stat-services-count');
  const vidCount = document.getElementById('stat-videos-count');

  if (aptsCount) aptsCount.textContent = apts.length;
  if (galCount) galCount.textContent = currentData.gallery.length;
  if (servCount) servCount.textContent = currentData.services.length;
  if (vidCount) vidCount.textContent = currentData.videos.length;

  const tableBody = document.getElementById('overview-recent-appointments');
  if (tableBody) {
    if (apts.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--admin-muted);">No appointments booked yet.</td></tr>`;
    } else {
      tableBody.innerHTML = apts.slice(0, 5).map(a => `
        <tr>
          <td><strong>${a.name}</strong></td>
          <td>${a.phone}</td>
          <td>${a.service}</td>
          <td>${a.date} @ ${a.time}</td>
          <td><span class="status-badge ${a.status === 'Confirmed' ? 'status-confirmed' : 'status-pending'}">${a.status}</span></td>
        </tr>
      `).join('');
    }
  }
}

/* ==========================================================
   POPULATE FORM FIELDS
   ========================================================== */
function populateFormFields() {
  const heroTitle = document.getElementById('edit-hero-title');
  const heroSub = document.getElementById('edit-hero-subtitle');
  const phone = document.getElementById('edit-phone');
  const wa = document.getElementById('edit-whatsapp');
  const insta = document.getElementById('edit-instagram');
  const hours = document.getElementById('edit-hours');
  const footer = document.getElementById('edit-footer');

  if (heroTitle) heroTitle.value = currentData.heroTitle;
  if (heroSub) heroSub.value = currentData.heroSubtitle;
  if (phone) phone.value = currentData.phone;
  if (wa) wa.value = currentData.whatsappUrl;
  if (insta) insta.value = currentData.instagramUrl;
  if (hours) hours.value = currentData.hours;
  if (footer) footer.value = currentData.footerText;
}

/* ==========================================================
   INIT FORMS
   ========================================================== */
function initAdminForms() {
  // Form Hero Content
  const formHero = document.getElementById('form-hero-content');
  if (formHero) {
    formHero.addEventListener('submit', (e) => {
      e.preventDefault();
      currentData.heroTitle = document.getElementById('edit-hero-title').value;
      currentData.heroSubtitle = document.getElementById('edit-hero-subtitle').value;
      saveData();
      alert("Hero text updated successfully!");
    });
  }

  // Form Business Content
  const formBiz = document.getElementById('form-business-content');
  if (formBiz) {
    formBiz.addEventListener('submit', (e) => {
      e.preventDefault();
      currentData.phone = document.getElementById('edit-phone').value;
      currentData.whatsappUrl = document.getElementById('edit-whatsapp').value;
      currentData.instagramUrl = document.getElementById('edit-instagram').value;
      currentData.hours = document.getElementById('edit-hours').value;
      currentData.footerText = document.getElementById('edit-footer').value;
      saveData();
      alert("Business details updated!");
    });
  }

  // Form Add Service
  const formService = document.getElementById('form-add-service');
  if (formService) {
    formService.addEventListener('submit', (e) => {
      e.preventDefault();
      const newServ = {
        id: "s_" + Date.now(),
        name: document.getElementById('serv-name').value,
        price: document.getElementById('serv-price').value,
        desc: document.getElementById('serv-desc').value,
        img: document.getElementById('serv-img').value
      };
      currentData.services.unshift(newServ);
      saveData();
      formService.reset();
      renderContentTab();
      alert("New Service Added!");
    });
  }

  // Form Add Video
  const formVid = document.getElementById('form-add-video');
  if (formVid) {
    formVid.addEventListener('submit', (e) => {
      e.preventDefault();
      const newVid = {
        id: "v_" + Date.now(),
        title: document.getElementById('vid-title').value,
        category: document.getElementById('vid-cat').value,
        duration: "02:00",
        thumb: document.getElementById('vid-thumb').value,
        videoUrl: document.getElementById('vid-url').value
      };
      currentData.videos.unshift(newVid);
      saveData();
      formVid.reset();
      renderMediaTab();
      alert("Showcase Video Added!");
    });
  }

  // Form Add Gallery
  const formGal = document.getElementById('form-add-gallery');
  if (formGal) {
    formGal.addEventListener('submit', (e) => {
      e.preventDefault();
      const newGal = {
        id: "g_" + Date.now(),
        title: document.getElementById('gal-title').value,
        cat: document.getElementById('gal-cat').value,
        img: document.getElementById('gal-img').value
      };
      currentData.gallery.unshift(newGal);
      saveData();
      formGal.reset();
      renderGalleryTab();
      alert("Gallery Item Added!");
    });
  }
}

/* ==========================================================
   RENDER MEDIA TAB
   ========================================================== */
function renderMediaTab() {
  const container = document.getElementById('admin-videos-list');
  if (!container) return;

  container.innerHTML = currentData.videos.map(v => `
    <div class="media-item-card">
      <img src="${v.thumb}" class="media-thumb" alt="${v.title}">
      <div class="media-info">
        <div class="media-title">${v.title}</div>
        <div style="font-size:0.75rem; color:var(--admin-muted);">${v.category}</div>
        <button class="btn-delete" onclick="deleteVideo('${v.id}')"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join('');
}

window.deleteVideo = function(id) {
  if (confirm("Delete this video?")) {
    currentData.videos = currentData.videos.filter(v => v.id !== id);
    saveData();
    renderMediaTab();
  }
};

/* ==========================================================
   RENDER GALLERY TAB
   ========================================================== */
function renderGalleryTab() {
  const container = document.getElementById('admin-gallery-list');
  if (!container) return;

  container.innerHTML = currentData.gallery.map(g => `
    <div class="media-item-card">
      <img src="${g.img}" class="media-thumb" alt="${g.title}">
      <div class="media-info">
        <div class="media-title">${g.title}</div>
        <div style="font-size:0.75rem; color:var(--admin-gold);">${g.cat}</div>
        <button class="btn-delete" onclick="deleteGalleryItem('${g.id}')"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join('');
}

window.deleteGalleryItem = function(id) {
  if (confirm("Delete this image?")) {
    currentData.gallery = currentData.gallery.filter(g => g.id !== id);
    saveData();
    renderGalleryTab();
  }
};

/* ==========================================================
   RENDER CONTENT TAB
   ========================================================== */
function renderContentTab() {
  const container = document.getElementById('admin-services-list');
  if (!container) return;

  container.innerHTML = currentData.services.map(s => `
    <div class="media-item-card">
      <img src="${s.img}" class="media-thumb" alt="${s.name}">
      <div class="media-info">
        <div class="media-title">${s.name}</div>
        <div style="font-size:0.8rem; color:var(--admin-gold); font-weight:700;">${s.price}</div>
        <button class="btn-delete" onclick="deleteService('${s.id}')"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join('');
}

window.deleteService = function(id) {
  if (confirm("Delete service?")) {
    currentData.services = currentData.services.filter(s => s.id !== id);
    saveData();
    renderContentTab();
  }
};

/* ==========================================================
   RENDER APPOINTMENTS TAB
   ========================================================== */
function renderAppointmentsTab() {
  const apts = JSON.parse(localStorage.getItem('salon_real_look_appointments') || '[]');
  const tableBody = document.getElementById('admin-appointments-tbody');

  if (!tableBody) return;

  if (apts.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--admin-muted);">No appointments booked yet.</td></tr>`;
    return;
  }

  tableBody.innerHTML = apts.map(a => `
    <tr>
      <td><strong>${a.name}</strong></td>
      <td>${a.phone}</td>
      <td>${a.date} @ ${a.time}</td>
      <td>${a.service}</td>
      <td style="max-width:180px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${a.message}</td>
      <td><span class="status-badge ${a.status === 'Confirmed' ? 'status-confirmed' : 'status-pending'}">${a.status}</span></td>
      <td>
        <button onclick="toggleAppointmentStatus('${a.id}')" style="background:rgba(40,167,69,0.2); color:#28a745; border:1px solid #28a745; border-radius:6px; padding:4px 8px; font-size:0.75rem; cursor:pointer; margin-right:4px;">Status</button>
        <button onclick="deleteAppointment('${a.id}')" style="background:rgba(220,53,69,0.2); color:#dc3545; border:1px solid #dc3545; border-radius:6px; padding:4px 8px; font-size:0.75rem; cursor:pointer;">Delete</button>
      </td>
    </tr>
  `).join('');
}

window.toggleAppointmentStatus = function(id) {
  let apts = JSON.parse(localStorage.getItem('salon_real_look_appointments') || '[]');
  apts = apts.map(a => {
    if (a.id === id) {
      a.status = a.status === 'Confirmed' ? 'Pending' : 'Confirmed';
    }
    return a;
  });
  localStorage.setItem('salon_real_look_appointments', JSON.stringify(apts));
  renderAppointmentsTab();
};

window.deleteAppointment = function(id) {
  if (confirm("Delete appointment entry?")) {
    let apts = JSON.parse(localStorage.getItem('salon_real_look_appointments') || '[]');
    apts = apts.filter(a => a.id !== id);
    localStorage.setItem('salon_real_look_appointments', JSON.stringify(apts));
    renderAppointmentsTab();
  }
};

window.clearAllAppointments = function() {
  if (confirm("Are you sure you want to delete ALL appointments?")) {
    localStorage.setItem('salon_real_look_appointments', JSON.stringify([]));
    renderAppointmentsTab();
  }
};

/* ==========================================================
   RESET DATA TO DEFAULT
   ========================================================== */
window.resetAllDataToDefault = function() {
  if (confirm("Reset website data back to factory defaults?")) {
    localStorage.removeItem('salon_real_look_data');
    currentData = DEFAULT_SALON_DATA;
    populateFormFields();
    alert("Data restored to factory default!");
    location.reload();
  }
};
