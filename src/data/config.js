// Site configuration
export const SITE_CONFIG = {
  name: 'BM Battery Zone',
  tagline: 'Power Your World. Anytime. Anywhere.',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'info@bmbatteryzone.com',
  address: 'No. 166/170, Uppilipalayam Main Rd, Varadharajapuram, Coimbatore, Tamil Nadu - 641015',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5377086!2d76.9613!3d11.0053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f461b13%3A0x3b710a38e7e5a0b0!2sUppilipalayam%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1617000000000!5m2!1sen!2sin',
  hours: {
    weekdays: 'Mon – Sat: 9:00 AM – 8:00 PM',
    sunday: 'Sunday: 10:00 AM – 5:00 PM',
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
