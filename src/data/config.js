// Site configuration - update these with real values
export const SITE_CONFIG = {
  name: 'BM Battery Zone',
  tagline: 'Power Your World. Anytime. Anywhere.',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'info@bmbatteryzone.com',
  address: 'No. 45, Main Road, Salem, Tamil Nadu - 636001',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62513.27697063093!2d78.1097!3d11.6643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1caed8a24cd%3A0x43c8491804d30dff!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1617000000000!5m2!1sen!2sin',
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
