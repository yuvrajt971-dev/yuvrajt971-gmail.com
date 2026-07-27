<?php
// index.php - Dynamic Public Homepage
require_once __DIR__ . '/config/database.php';

// Helper to fetch all settings as key-value pairs
$settings = [
    'title' => 'REAL LOOK SALON',
    'subtitle' => 'CRAFTING YOUR CONFIDENCE',
    'tagline' => 'PREMIUM MASCULINE GROOMING STUDIO',
    'heroTitleLine1' => 'YOUR STYLE.',
    'heroTitleLine2' => 'YOUR CONFIDENCE.',
    'heroSubtitle' => 'Professional Haircuts • Beard Styling • Hair Color • Premium Grooming',
    'heroVideo' => 'videos/hero.mp4',
    'phone' => '+1 (555) 019-2834',
    'whatsapp' => '+15550192834',
    'email' => 'info@reallooksalon.com',
    'address' => '124 Luxury Boulevard, Suite 10, Downtown Financial District',
    'instagram' => 'https://www.instagram.com/salonreallook/?hl=en',
    'facebook' => 'https://www.facebook.com/salonreallook',
    'mapsIframe' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.9537353153166!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus',
    'workingHours' => "Mon – Sat: 10:00 AM – 9:00 PM\nSunday: 10:00 AM – 8:00 PM",
    'footerAbout' => 'Real Look Salon is a modern luxury grooming space for men. We deliver precision haircuts, master beard sculpting, and bespoke scalp treatments.'
];

$services = [];
$gallery = [];
$videos = [];
$reviews = [];

try {
    $db = getDBConnection();

    // Fetch Settings
    $stmt = $db->query('SELECT setting_key, setting_value FROM settings');
    while ($row = $stmt->fetch()) {
        if (!empty($row['setting_value'])) {
            $settings[$row['setting_key']] = $row['setting_value'];
        }
    }

    // Fetch Services
    $stmt = $db->query('SELECT * FROM services ORDER BY sort_order ASC, id ASC');
    $services = $stmt->fetchAll();

    // Fetch Gallery
    $stmt = $db->query('SELECT * FROM gallery ORDER BY id DESC');
    $gallery = $stmt->fetchAll();

    // Fetch Videos
    $stmt = $db->query('SELECT * FROM videos ORDER BY id DESC');
    $videos = $stmt->fetchAll();

    // Fetch Reviews
    $stmt = $db->query('SELECT * FROM reviews ORDER BY id DESC');
    $reviews = $stmt->fetchAll();
} catch (\Exception $e) {
    // Graceful fallback to default arrays if DB connection is unavailable
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($settings['title']) ?> — <?= htmlspecialchars($settings['subtitle']) ?></title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- PRELOADER -->
    <div id="preloader" class="preloader">
        <div class="preloader-content">
            <div class="scissor-loader">
                <i class="fa-solid fa-scissors text-gold"></i>
            </div>
            <h1 class="preloader-title"><?= htmlspecialchars($settings['title']) ?></h1>
            <p class="preloader-sub"><?= htmlspecialchars($settings['subtitle']) ?></p>
            <div class="loader-bar"><div class="loader-progress"></div></div>
        </div>
    </div>

    <!-- HEADER / NAVIGATION -->
    <header id="header" class="site-header">
        <div class="header-container">
            <a href="index.php" class="brand-logo">
                <span class="logo-mark"><i class="fa-solid fa-scissors"></i></span>
                <div class="logo-text">
                    <span class="logo-title"><?= htmlspecialchars(explode(' ', $settings['title'])[0] ?? 'REAL LOOK') ?></span>
                    <span class="logo-sub"><?= htmlspecialchars(implode(' ', array_slice(explode(' ', $settings['title']), 1)) ?: 'SALON') ?></span>
                </div>
            </a>

            <nav class="desktop-nav">
                <a href="#hero" class="nav-link active">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#reels" class="nav-link">Reels & Videos</a>
                <a href="#gallery" class="nav-link">Gallery</a>
                <a href="#about" class="nav-link">About Us</a>
                <a href="#reviews" class="nav-link">Reviews</a>
                <a href="#contact" class="nav-link">Contact</a>
            </nav>

            <div class="header-actions">
                <a href="admin/login.php" class="header-icon-link" title="Admin Panel"><i class="fa-solid fa-lock"></i></a>
                <a href="<?= htmlspecialchars($settings['instagram']) ?>" target="_blank" class="header-icon-link"><i class="fa-brands fa-instagram"></i></a>
                <a href="#book" class="btn btn-gold btn-sm btn-header-book">
                    <span>Book Appointment</span>
                    <i class="fa-solid fa-calendar-check"></i>
                </a>
                <button id="menuToggle" class="mobile-menu-btn" aria-label="Toggle Navigation"><i class="fa-solid fa-bars"></i></button>
            </div>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section id="hero" class="hero-section">
        <div class="hero-video-wrap">
            <video id="heroVideo" autoplay loop muted playsinline poster="images/hero_poster.jpg">
                <source src="<?= htmlspecialchars($settings['heroVideo']) ?>" type="video/mp4">
            </video>
            <div class="hero-video-overlay"></div>
        </div>

        <div class="hero-content-wrap">
            <div class="hero-content">
                <div class="badge-gold">
                    <i class="fa-solid fa-crown text-gold"></i>
                    <span><?= htmlspecialchars($settings['tagline']) ?></span>
                </div>

                <h1 class="hero-title">
                    <?= htmlspecialchars($settings['heroTitleLine1']) ?><br>
                    <span class="text-gold"><?= htmlspecialchars($settings['heroTitleLine2']) ?></span>
                </h1>

                <p class="hero-subtitle"><?= htmlspecialchars($settings['heroSubtitle']) ?></p>

                <div class="hero-cta-group">
                    <a href="#book" class="btn btn-gold btn-lg">
                        <span>Book Appointment Now</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a href="https://wa.me/<?= preg_replace('/[^0-9]/', '', $settings['whatsapp']) ?>" target="_blank" class="btn btn-outline btn-lg">
                        <i class="fa-brands fa-whatsapp text-gold"></i>
                        <span>WhatsApp Us</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- SERVICES SECTION -->
    <section id="services" class="section-padding bg-dark">
        <div class="container">
            <div class="section-header text-center">
                <span class="section-eyebrow">OUR EXPERT SERVICES</span>
                <h2 class="section-title">PRECISION GROOMING MENU</h2>
                <div class="gold-divider mx-auto"></div>
            </div>

            <div class="services-grid" id="servicesGrid">
                <?php foreach ($services as $index => $srv): ?>
                    <div class="service-card reveal-up" data-delay="<?= $index * 100 ?>">
                        <div>
                            <div class="service-card-header">
                                <div class="service-icon"><i class="fa-solid <?= htmlspecialchars($srv['icon'] ?: 'fa-scissors') ?>"></i></div>
                                <div class="service-price-box">
                                    <span class="service-price"><?= htmlspecialchars($srv['price']) ?></span>
                                    <span class="service-duration"><?= htmlspecialchars($srv['duration']) ?></span>
                                </div>
                            </div>
                            <h3 class="service-title"><?= htmlspecialchars($srv['title']) ?></h3>
                            <p class="service-desc"><?= htmlspecialchars($srv['description']) ?></p>
                        </div>
                        <a href="#book" class="btn btn-outline btn-full btn-sm book-service-btn" data-service="<?= htmlspecialchars($srv['title']) ?>">
                            <span>Select & Book</span>
                            <i class="fa-solid fa-angle-right"></i>
                        </a>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- REELS / VIDEOS SECTION -->
    <section id="reels" class="section-padding bg-black">
        <div class="container">
            <div class="section-header text-center">
                <span class="section-eyebrow">INSTAGRAM REELS & SHORTS</span>
                <h2 class="section-title">HAIRCUT & SCULPTING VIDEOS</h2>
                <div class="gold-divider mx-auto"></div>
            </div>

            <div class="reels-slider-wrap">
                <button id="reelPrev" class="reel-nav-btn prev"><i class="fa-solid fa-chevron-left"></i></button>
                <div class="reels-track-container">
                    <div class="reels-track" id="reelTrack">
                        <?php foreach ($videos as $vid): ?>
                            <div class="reel-card">
                                <video class="reel-video" loop muted playsinline poster="images/gallery1.jpg">
                                    <source src="<?= htmlspecialchars($vid['url']) ?>" type="video/mp4">
                                </video>
                                <div class="reel-overlay">
                                    <span class="reel-badge"><i class="fa-solid fa-bolt"></i> <?= htmlspecialchars($vid['badge']) ?></span>
                                    <div class="reel-info">
                                        <h3 class="reel-title"><?= htmlspecialchars($vid['title']) ?></h3>
                                        <button class="reel-play-btn" aria-label="Play Reel"><i class="fa-solid fa-play"></i></button>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                <button id="reelNext" class="reel-nav-btn next"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    </section>

    <!-- GALLERY SECTION -->
    <section id="gallery" class="section-padding bg-dark">
        <div class="container">
            <div class="section-header text-center">
                <span class="section-eyebrow">PORTFOLIO & ATMOSPHERE</span>
                <h2 class="section-title">HAIRCUT & STYLE GALLERY</h2>
                <div class="gold-divider mx-auto"></div>
            </div>

            <div class="gallery-grid" id="galleryGrid">
                <?php foreach ($gallery as $index => $item): ?>
                    <div class="gallery-item reveal-up" data-index="<?= $index ?>">
                        <img src="<?= htmlspecialchars($item['src']) ?>" alt="<?= htmlspecialchars($item['title']) ?>" loading="lazy">
                        <div class="gallery-item-overlay">
                            <span class="gallery-item-tag"><i class="fa-solid fa-scissors"></i> <?= htmlspecialchars($item['category']) ?></span>
                            <h3 class="gallery-item-title"><?= htmlspecialchars($item['title']) ?></h3>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- REVIEWS SECTION -->
    <section id="reviews" class="section-padding bg-black">
        <div class="container">
            <div class="section-header text-center">
                <span class="section-eyebrow">TESTIMONIALS</span>
                <h2 class="section-title">WHAT OUR CLIENTS SAY</h2>
                <div class="gold-divider mx-auto"></div>
            </div>

            <div class="testimonials-slider">
                <div class="testimonial-track" id="testimonialTrack">
                    <?php foreach ($reviews as $rev): ?>
                        <div class="testimonial-card">
                            <div class="stars-row"><?= str_repeat('★', (int)$rev['rating']) . str_repeat('☆', 5 - (int)$rev['rating']) ?></div>
                            <p class="testimonial-quote">"<?= htmlspecialchars($rev['text']) ?>"</p>
                            <h4 class="testimonial-author"><?= htmlspecialchars($rev['name']) ?></h4>
                            <span class="testimonial-tag"><?= htmlspecialchars($rev['tag']) ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="testimonial-dots" id="testimonialDots"></div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col brand-col">
                    <a href="index.php" class="brand-logo mb-4">
                        <span class="logo-mark"><i class="fa-solid fa-scissors"></i></span>
                        <div class="logo-text">
                            <span class="logo-title"><?= htmlspecialchars(explode(' ', $settings['title'])[0] ?? 'REAL LOOK') ?></span>
                            <span class="logo-sub"><?= htmlspecialchars(implode(' ', array_slice(explode(' ', $settings['title']), 1)) ?: 'SALON') ?></span>
                        </div>
                    </a>
                    <p class="footer-about"><?= htmlspecialchars($settings['footerAbout']) ?></p>
                </div>

                <div class="footer-col">
                    <h4 class="footer-title">Contact & Location</h4>
                    <p class="footer-info"><i class="fa-solid fa-location-dot text-gold"></i> <?= htmlspecialchars($settings['address']) ?></p>
                    <p class="footer-info"><i class="fa-solid fa-phone text-gold"></i> <?= htmlspecialchars($settings['phone']) ?></p>
                    <p class="footer-info"><i class="fa-solid fa-envelope text-gold"></i> <?= htmlspecialchars($settings['email']) ?></p>
                </div>

                <div class="footer-col">
                    <h4 class="footer-title">Working Hours</h4>
                    <p class="footer-hours"><?= nl2br(htmlspecialchars($settings['workingHours'])) ?></p>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; <?= date('Y') ?> <?= htmlspecialchars($settings['title']) ?>. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
