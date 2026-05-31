// Site configuration
export const SITE_CONFIG = {
  name: 'BM Battery Zone',
  tagline: 'Power Your World. Anytime. Anywhere.',
  phone: '+91 9047142757',
  whatsapp: '919047142757',
  email: 'batteryzone81@gmail.com',
  address: 'No. 166, Uppilipalayam Main Rd, Varadharajapuram, Coimbatore, Tamil Nadu - 641015',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.106621173661!2d77.02534026948925!3d11.00659359932229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857376ec72b6b%3A0xe240c3ddf23c1f89!2sEXIDE%20CARE%20BM%20BATTERY%20ZONE!5e0!3m2!1sen!2sin!4v1780236808736!5m2!1sen!2sin',
  hours: {
    weekdays: 'Mon – Sat: 9:00 AM – 9:00 PM',
    // sunday: 'Sunday: 10:00 AM – 5:00 PM',
  },
  social: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
  },
  whatsappMessage: 'Hello BM Battery Zone! I need help with battery/UPS/solar service.',
};

export const getWhatsAppUrl = (message = SITE_CONFIG.whatsappMessage) =>
  `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
