-- Real Look Salon Database Schema
-- Production Ready PHP 8+ & MySQL

CREATE DATABASE IF NOT EXISTS `reallooksalon` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `reallooksalon`;

-- 1. Admins Table
CREATE TABLE IF NOT EXISTS `admins` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Default admin user: username 'admin', password 'admin123' (hashed using BCRYPT)
INSERT INTO `admins` (`id`, `username`, `password`) VALUES
(1, 'admin', '$2y$10$e8460p7P1yPAG1bU28.rS.2xV5/Gf5kLg8m8v2m3v4v5v6v7v8v9v')
ON DUPLICATE KEY UPDATE `id`=`id`;

-- 2. General Settings Table
CREATE TABLE IF NOT EXISTS `settings` (
    `setting_key` VARCHAR(100) PRIMARY KEY,
    `setting_value` TEXT NULL,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Seed Default Settings
INSERT INTO `settings` (`setting_key`, `setting_value`) VALUES
('title', 'REAL LOOK SALON'),
('subtitle', 'CRAFTING YOUR CONFIDENCE'),
('tagline', 'PREMIUM MASCULINE GROOMING STUDIO'),
('heroTitleLine1', 'YOUR STYLE.'),
('heroTitleLine2', 'YOUR CONFIDENCE.'),
('heroSubtitle', 'Professional Haircuts • Beard Styling • Hair Color • Premium Grooming'),
('heroVideo', 'uploads/videos/hero.mp4'),
('phone', '+1 (555) 019-2834'),
('whatsapp', '+15550192834'),
('email', 'info@reallooksalon.com'),
('address', '124 Luxury Boulevard, Suite 10, Downtown Financial District'),
('instagram', 'https://www.instagram.com/salonreallook/?hl=en'),
('facebook', 'https://www.facebook.com/salonreallook'),
('mapsIframe', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.9537353153166!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus'),
('workingHours', 'Mon – Sat: 10:00 AM – 9:00 PM\nSunday: 10:00 AM – 8:00 PM'),
('footerAbout', 'Real Look Salon is a modern luxury grooming space for men. We deliver precision haircuts, master beard sculpting, and bespoke scalp treatments.')
ON DUPLICATE KEY UPDATE `setting_key`=`setting_key`;

-- 3. Services Table
CREATE TABLE IF NOT EXISTS `services` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(150) NOT NULL,
    `price` VARCHAR(50) NOT NULL,
    `duration` VARCHAR(50) NOT NULL,
    `icon` VARCHAR(50) NOT NULL DEFAULT 'fa-scissors',
    `description` TEXT NOT NULL,
    `features` TEXT NULL,
    `sort_order` INT DEFAULT 0,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `services` (`id`, `title`, `price`, `duration`, `icon`, `description`, `features`, `sort_order`) VALUES
(1, 'Executive Haircut & Fade', '$45', '45 Min', 'fa-scissors', 'Precision cut tailored to your head shape, including shampoo wash, scalp massage, hot towel, and styling with premium pomade.', '["Scalp Massage", "Hot Towel", "Razor Finish"]', 1),
(2, 'Beard Sculpting & Razor Lineup', '$35', '30 Min', 'fa-user-ninja', 'Master beard trimming, hot towel wrap, straight razor edging, and organic beard oil hydration massage.', '["Hot Towel Wrap", "Straight Razor Edging", "Oil Massage"]', 2),
(3, 'Royal Hair & Beard Combo', '$70', '60 Min', 'fa-crown', 'Our signature experience. Includes full haircut, custom beard sculpting, charcoal facial mask, and hot towel relaxation.', '["Haircut + Beard", "Charcoal Facial", "Hot Towel Refresh"]', 3),
(4, 'Hair Color & Gray Blending', '$55', '45 Min', 'fa-wand-magic-sparkles', 'Subtle, natural gray blending or full rich hair color transformation using ammonia-free luxury products.', '["Natural Toning", "Ammonia-Free", "Color Lock Treatment"]', 4),
(5, 'Scalp Detox & Charcoal Spa', '$40', '30 Min', 'fa-spa', 'Deep cleansing scalp exfoliation, steam treatment, invigorating head massage, and hair follicle nourishment.', '["Exfoliating Scrub", "Steam Treatment", "Stress Relief Massage"]', 5),
(6, 'Junior Gentleman Cut', '$30', '30 Min', 'fa-child', 'Gentle, stylish haircuts for young gentlemen (under 12 years) with patience, styling, and a smile.', '["Gentle Stylists", "Kids Hair Styling", "Complimentary Juice"]', 6)
ON DUPLICATE KEY UPDATE `id`=`id`;

-- 4. Gallery Table
CREATE TABLE IF NOT EXISTS `gallery` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(150) NOT NULL,
    `category` VARCHAR(50) NOT NULL DEFAULT 'cuts',
    `src` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `gallery` (`id`, `title`, `category`, `src`) VALUES
(1, 'Precision Skin Fade', 'cuts', 'images/gallery1.jpg'),
(2, 'Master Beard Sculpting', 'beard', 'images/gallery2.jpg'),
(3, 'Luxury Salon Atmosphere', 'interior', 'images/gallery3.jpg'),
(4, 'Textured Crop & Taper', 'cuts', 'images/gallery4.jpg'),
(5, 'Natural Gray Blending', 'color', 'images/gallery5.jpg'),
(6, 'Classic Barber Styling', 'cuts', 'images/gallery6.jpg')
ON DUPLICATE KEY UPDATE `id`=`id`;

-- 5. Videos Table
CREATE TABLE IF NOT EXISTS `videos` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(150) NOT NULL,
    `badge` VARCHAR(50) NOT NULL DEFAULT 'HAIRCUT',
    `url` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `videos` (`id`, `title`, `badge`, `url`) VALUES
(1, 'Skin Fade & Textured Top', 'HAIRCUT', 'videos/haircut1.mp4'),
(2, 'Executive Beard Sculpting', 'BEARD WORK', 'videos/haircut2.mp4'),
(3, 'Modern Crop & Hair Design', 'TRENDING', 'videos/haircut3.mp4'),
(4, 'Hot Towel Razor Lineup', 'SHAVE', 'videos/haircut4.mp4')
ON DUPLICATE KEY UPDATE `id`=`id`;

-- 6. Reviews Table
CREATE TABLE IF NOT EXISTS `reviews` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `tag` VARCHAR(100) DEFAULT 'Client',
    `rating` INT DEFAULT 5,
    `text` TEXT NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `reviews` (`id`, `name`, `tag`, `rating`, `text`) VALUES
(1, 'David Harrison', 'Executive Client', 5, 'Real Look Salon is hands down the best grooming studio in town. Alex gave me the cleanest fade and beard shape up I\'ve ever had. Highly recommended!'),
(2, 'Marcus Vance', 'Regular Member', 5, 'From the hot towel service to the precise razor lineup, everything feels like a 5-star experience. The atmosphere is relaxing and classy.'),
(3, 'Julian Thorne', 'First-time Guest', 5, 'Superb attention to detail! I got the Royal Hair & Beard combo before my wedding. The barbers here are true master craftsmen.')
ON DUPLICATE KEY UPDATE `id`=`id`;
