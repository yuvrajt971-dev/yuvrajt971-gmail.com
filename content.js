/**
 * SALON REAL LOOK - CONTENT MANAGEMENT FILE
 * All website information, text, media, services, reviews, and contact info.
 * Modify this file to update any content on the website.
 */

const SALON_DATA = {
  websiteTitle: "Salon Real Look | Luxury Barber Experience",
  
  salonInfo: {
    name: "SALON REAL LOOK",
    tagline: "PREMIUM BARBER EXPERIENCE",
    phone: "9227518888",
    displayPhone: "+91 92275 18888",
    whatsappNumber: "919227518888",
    whatsappUrl: "https://wa.me/919227518888?text=Hello%20Salon%20Real%20Look%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.",
    instagramUrl: "https://www.instagram.com/salonreallook/",
    address: "Salon Real Look, Luxury Market Plaza, Main Boulevard, Near Central Square",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9523293816766!2d72.56!3d23.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzE4LjAiTiA3MsKwMzMnMzYuMCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin",
    hours: [
      { days: "Monday - Saturday", time: "09:00 AM - 10:00 PM" },
      { days: "Sunday", time: "09:00 AM - 10:00 PM" }
    ]
  },

  navLinks: [
    { id: "home", label: "Home" },
    { id: "featured-videos", label: "Featured" },
    { id: "gallery", label: "Gallery" },
    { id: "videos", label: "Videos" },
    { id: "beard", label: "Beard Styling" },
    { id: "services", label: "Services" },
    { id: "why-us", label: "Why Choose Us" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Contact" }
  ],

  hero: {
    badge: "PREMIUM BARBER EXPERIENCE",
    title: "LUXURY HAIRCUTS & BEARD STYLING",
    subtitle: "Modern Grooming for the Distinguished Gentleman. Master Craftsmanship, Unrivaled Precision, and Opulent Ambience.",
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-barber-trimming-the-beard-of-a-client-40590-large.mp4",
    posterImage: "/src/assets/images/barber_hero_bg_1785226153372.jpg",
    ctaPrimary: { text: "Explore Gallery", link: "#gallery" },
    ctaSecondary: { text: "Watch Videos", link: "#videos" }
  },

  featuredVideos: [
    {
      id: "fv1",
      title: "Royal Precision Skin Fade & Haircut",
      subtitle: "Watch our master barber engineer a clean razor sharp gradient fade",
      duration: "01:45",
      thumbnail: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-barber-cutting-the-hair-of-a-young-man-40589-large.mp4",
      tag: "SIGNATURE FADE"
    },
    {
      id: "fv2",
      title: "Beard Sculpting & Hot Towel Treatment",
      subtitle: "Experience our signature 5-step hot towel beard conditioning & razor trim",
      duration: "02:10",
      thumbnail: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-barber-trimming-the-beard-of-a-client-40590-large.mp4",
      tag: "ROYAL BEARD"
    },
    {
      id: "fv3",
      title: "VIP Scalp Therapy & Luxury Styling",
      subtitle: "Relaxing head massage, organic hair spa, and professional pompadour finish",
      duration: "01:30",
      thumbnail: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-barber-washing-a-client-s-hair-40588-large.mp4",
      tag: "HAIR SPA"
    }
  ],

  galleryCategories: [
    "All",
    "Haircut",
    "Fade",
    "Beard",
    "Kids",
    "Hair Styling",
    "Hair Color",
    "Modern Style"
  ],

  galleryItems: [
    {
      id: "g1",
      category: "Haircut",
      title: "Classic Gentleman Taper Cut",
      image: "/src/assets/images/haircut_fade_1785226200330.jpg",
      description: "Clean side-part taper with textured top volume and pristine edges."
    },
    {
      id: "g2",
      category: "Beard",
      title: "Imperial Beard Sculpt",
      image: "/src/assets/images/beard_styling_1785226181785.jpg",
      description: "Precision razor cheek line with hot towel conditioning and balm finish."
    },
    {
      id: "g3",
      category: "Fade",
      title: "Mid Skin Fade & Pompadour",
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1000&auto=format&fit=crop",
      description: "Seamless skin fade blending into high-shine structured pompadour."
    },
    {
      id: "g4",
      category: "Hair Styling",
      title: "Textured Crop & Drop Fade",
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop",
      description: "Modern matte textured top paired with clean drop fade contours."
    },
    {
      id: "g5",
      category: "Hair Color",
      title: "Platinum Gold Highlight Fade",
      image: "https://images.unsplash.com/photo-1562004768-ace69b3f8573?q=80&w=1000&auto=format&fit=crop",
      description: "Custom metallic gold & platinum highlights on sharp dark contrast."
    },
    {
      id: "g6",
      category: "Beard",
      title: "Royal Stubble & Sharp Neckline",
      image: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1000&auto=format&fit=crop",
      description: "Disciplined stubble gradient with razor crisp cheek & neck lines."
    },
    {
      id: "g7",
      category: "Kids",
      title: "Young Gentleman Undercut",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
      description: "Comfortable, stylish kid haircut with gentle styling and fun design."
    },
    {
      id: "g8",
      category: "Modern Style",
      title: "Mullet Modern Twist",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
      description: "Modernized burst fade mullet crafted with textured flow."
    },
    {
      id: "g9",
      category: "Fade",
      title: "High & Tight Razor Blur",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop",
      description: "Ultra clean high fade with sharp surgical lineup."
    },
    {
      id: "g10",
      category: "Hair Styling",
      title: "Slick Back Executive Style",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop",
      description: "High gloss classic slicked back style for formal luxury settings."
    },
    {
      id: "g11",
      category: "Hair Color",
      title: "Smokey Ash Hair Tint",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
      description: "Deep ash grey toning with protective hair gloss therapy."
    },
    {
      id: "g12",
      category: "Modern Style",
      title: "VIP Grooming Showcase",
      image: "/src/assets/images/barber_hero_bg_1785226153372.jpg",
      description: "Full royal treatment in our opulent luxury salon atmosphere."
    }
  ],

  videoGallery: [
    {
      id: "vg1",
      title: "Signature Haircut & Beard Transformation",
      duration: "02:15",
      thumbnail: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-barber-cutting-the-hair-of-a-young-man-40589-large.mp4",
      desc: "Full head-to-toe makeover showcasing razor sharp lines and pompadour blow-dry."
    },
    {
      id: "vg2",
      title: "Hot Towel Beard Shaping Ritual",
      duration: "01:50",
      thumbnail: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-barber-trimming-the-beard-of-a-client-40590-large.mp4",
      desc: "Soothing eucalyptus steam towel application followed by Japanese straight razor line art."
    },
    {
      id: "vg3",
      title: "Scalp Massage & Hair Wash Experience",
      duration: "01:30",
      thumbnail: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-barber-washing-a-client-s-hair-40588-large.mp4",
      desc: "Deep cleansing scalp therapy designed to promote healthy hair growth and total relaxation."
    }
  ],

  beardSection: {
    title: "PREMIUM BEARD STYLING",
    description: "Professional beard shaping using premium organic products, hot towel steam therapy, and master razor techniques tailored specifically to your facial anatomy.",
    image: "/src/assets/images/beard_styling_1785226181785.jpg",
    featureCards: [
      {
        icon: "crown",
        title: "Royal Beard Trim",
        desc: "Custom sculpting and symmetrical cheek alignment engineered to enhance jawline structure."
      },
      {
        icon: "flame",
        title: "Hot Towel Ritual",
        desc: "Infused essential oil steam towels that soften coarse whiskers and deeply hydrate skin."
      },
      {
        icon: "scissors",
        title: "Premium Razor Finish",
        desc: "Surgical Japanese straight razor detailing for ultra-crisp contours and clean necklines."
      },
      {
        icon: "sparkles",
        title: "Luxury Beard Elixir",
        desc: "Handcrafted golden oil and butter conditioning for ultimate softness and subtle aromatic shine."
      }
    ]
  },

  services: [
    {
      id: "s1",
      title: "Hair Cut & Style",
      price: "₹500",
      duration: "30 mins",
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop",
      description: "Consultation, precision haircut, neck razor shave, washing, and pomade styling."
    },
    {
      id: "s2",
      title: "Beard Trim & Sculpt",
      price: "₹350",
      duration: "25 mins",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
      description: "Beard shaping, mustache trim, hot towel steam, and essential oil conditioning."
    },
    {
      id: "s3",
      title: "Hair Wash & Blowdry",
      price: "₹250",
      duration: "20 mins",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
      description: "Deep cleansing hair wash with botanical shampoo, scalp massage, and blowout."
    },
    {
      id: "s4",
      title: "Royal Hair Spa",
      price: "₹999",
      duration: "45 mins",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop",
      description: "Nourishing hair mask treatment, herbal steam bath, intense scalp acupressure massage."
    },
    {
      id: "s5",
      title: "Luxury Hair Color",
      price: "₹1,200",
      duration: "50 mins",
      image: "https://images.unsplash.com/photo-1562004768-ace69b3f8573?q=80&w=800&auto=format&fit=crop",
      description: "Ammonia-free premium hair color tinting, natural grey coverage, or custom highlights."
    },
    {
      id: "s6",
      title: "Kids Royal Haircut",
      price: "₹400",
      duration: "25 mins",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      description: "Patient, friendly barber care for kids with stylish cuts and complimentary juice."
    },
    {
      id: "s7",
      title: "Full Royal Executive Combo",
      price: "₹1,999",
      duration: "75 mins",
      image: "/src/assets/images/barber_hero_bg_1785226153372.jpg",
      description: "Haircut, Beard Sculpting, Hot Towel Therapy, Hair Spa Massage, and Facial Detox."
    }
  ],

  whyChooseUs: [
    {
      icon: "award",
      title: "Professional Stylists",
      description: "Master barbers with years of experience crafting flawless styles tailored to your face shape."
    },
    {
      icon: "building",
      title: "Luxury Interior",
      description: "A plush black and gold lounge environment designed for supreme comfort and relaxation."
    },
    {
      icon: "scissors",
      title: "Premium Equipment",
      description: "Imported Japanese steel shears, skin-safe trimmers, and organic grooming products."
    },
    {
      icon: "shield",
      title: "Clean Environment",
      description: "Sterilized tools for every client, fresh disposable towels, and 100% hygiene guarantee."
    },
    {
      icon: "tag",
      title: "Affordable Pricing",
      description: "5-star international luxury experience offered at competitive, transparent local rates."
    },
    {
      icon: "heart-handshake",
      title: "Friendly Service",
      description: "Warm hospitality, complimentary espresso/tea, and individualized attention."
    },
    {
      icon: "star",
      title: "Customer Satisfaction",
      description: "Trusted by thousands of loyal clients who demand nothing short of perfection."
    }
  ],

  reviews: [
    {
      id: "r1",
      name: "Vikram Sharma",
      role: "Verified Client",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      text: "Salon Real Look is easily the best luxury barber experience in town. The gold ambient decor feels like a 5-star hotel lounge, and the skin fade was absolute perfection!"
    },
    {
      id: "r2",
      name: "Arjun Patel",
      role: "Regular Gentleman",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      text: "The hot towel beard sculpting ritual is unbelievable. They pay attention to every single detail. My beard line has never looked this sharp!"
    },
    {
      id: "r3",
      name: "Rohan Mehta",
      role: "Corporate Executive",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      text: "Extremely professional barbers, spotless hygiene, and very polite staff. I got the Executive Combo and felt rejuvenated. Worth every single rupee."
    },
    {
      id: "r4",
      name: "Karan Verma",
      role: "Style Enthusiast",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      text: "Brought my younger brother for a haircut too! Their patience with kids is remarkable, and the haircuts are celebrity grade."
    }
  ],

  footer: {
    about: "Salon Real Look is a premier luxury barber shop dedicated to delivering world-class hair styling, beard sculpting, and executive grooming in an elegant black & gold environment.",
    copyright: "© 2026 SALON REAL LOOK. All Rights Reserved. Crafted with Gold & Precision."
  }
};

// Export to global scope for script.js
window.SALON_DATA = SALON_DATA;
