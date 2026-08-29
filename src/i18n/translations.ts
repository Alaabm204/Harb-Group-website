export type Lang = "en" | "ar"

export const t = {
  nav: {
    home: { en: "Home", ar: "الرئيسية" },
    about: { en: "About Us", ar: "من نحن" },
    services: { en: "Services", ar: "خدماتنا" },
    products: { en: "Products", ar: "منتجاتنا" },
    projects: { en: "Projects", ar: "مشاريعنا" },
    clients: { en: "Clients", ar: "عملاؤنا" },
    contact: { en: "Contact Us", ar: "اتصل بنا" },
  },
  hero: {
    servicesBtn: { en: "Our Services", ar: "خدماتنا" },
    contactBtn: { en: "Contact Us", ar: "اتصل بنا" },
  },
  about: {
    title: { en: "About Us", ar: "من نحن" },
    readMore: { en: "Read More", ar: "اقرأ المزيد" },
  },
  services: {
    title: { en: "Our Services", ar: "خدماتنا" },
    more: { en: "View All Services", ar: "عرض جميع الخدمات" },
    details: { en: "Service Details", ar: "تفاصيل الخدمة" },
  },
  products: {
    title: { en: "Our Products", ar: "منتجاتنا" },
    more: { en: "View All Products", ar: "عرض جميع المنتجات" },
    specs: { en: "Specifications", ar: "المواصفات" },
    openFile: { en: "Open Product File", ar: "فتح ملف المنتج" },
    noFile: { en: "No product file available", ar: "لا يوجد ملف للمنتج" },
  },
  projects: {
    title: { en: "Our Projects", ar: "مشاريعنا" },
    more: { en: "View All Projects", ar: "عرض جميع المشاريع" },
    year: { en: "Completion Year", ar: "سنة الإنجاز" },
    client: { en: "Client", ar: "العميل" },
  },
  clients: {
    title: { en: "Our Clients", ar: "عملاؤنا" },
    sub: { en: "Trusted by leading organizations across the region.", ar: "موثوق به من قبل المؤسسات الرائدة في المنطقة." },
    current: { en: "Current Collaborations", ar: "التعاونات الحالية" },
    previous: { en: "Previous Collaborations", ar: "التعاونات السابقة" },
  },
  clientDetail: {
    back: { en: "Back to Clients", ar: "العودة إلى العملاء" },
  },
  contact: {
    title: { en: "Contact Us", ar: "اتصل بنا" },
    name: { en: "Full Name", ar: "الاسم الكامل" },
    email: { en: "Email Address", ar: "البريد الإلكتروني" },
    phone: { en: "Phone Number", ar: "رقم الهاتف" },
    subject: { en: "Subject", ar: "الموضوع" },
    message: { en: "Message", ar: "الرسالة" },
    send: { en: "Send Message", ar: "إرسال الرسالة" },
    sending: { en: "Sending…", ar: "جارٍ الإرسال…" },
    success: { en: "Your message has been sent successfully. We will get back to you shortly.", ar: "تم إرسال رسالتك بنجاح. سنعود إليك قريباً." },
    error: { en: "Something went wrong. Please try again.", ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى." },
    rateLimited: { en: "Too many attempts. Please wait a little while before trying again.", ar: "عدد كبير من المحاولات. يرجى الانتظار قليلاً قبل المحاولة مرة أخرى." },
    fixFields: { en: "Please correct the highlighted fields and try again.", ar: "يرجى تصحيح الحقول المظللة والمحاولة مرة أخرى." },
    server: { en: "The server had a problem. Please try again in a few minutes.", ar: "حدثت مشكلة في الخادم. يرجى المحاولة بعد دقائق." },
    network: { en: "Could not reach the server. Please check your internet connection and try again.", ar: "تعذر الاتصال بالخادم. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى." },
    address: { en: "Address", ar: "العنوان" },
    hours: { en: "Working Hours", ar: "ساعات العمل" },
    follow: { en: "Follow Us", ar: "تابعنا" },
  },
  cta: {
    title: { en: "Ready to Start Your Project?", ar: "هل أنت مستعد لبدء مشروعك؟" },
    sub: { en: "Contact our team of experts today and let us bring your vision to life with precision engineering.", ar: "تواصل مع فريق خبرائنا اليوم ودعنا نحول رؤيتك إلى واقع بهندسة دقيقة." },
    btn: { en: "Get In Touch", ar: "تواصل معنا" },
  },
  footer: {
    desc: { en: "Leading steel fabrication and engineering solutions trusted by major clients across the region.", ar: "حلول تصنيع الصلب والهندسة الرائدة التي يثق بها كبار العملاء في المنطقة." },
    links: { en: "Quick Links", ar: "روابط سريعة" },
    copyright: { en: "© 2025 HARB Group. All rights reserved.", ar: "© 2025 مجموعة حرب. جميع الحقوق محفوظة." },
  },
  vision: { en: "Our Vision", ar: "رؤيتنا" },
  mission: { en: "Our Mission", ar: "مهمتنا" },
  whyUs: { en: "Why Choose Us", ar: "لماذا تختارنا" },
  stats: { en: "Our Track Record", ar: "سجلنا الحافل" },
  error: { en: "Something went wrong. Please try again.", ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى." },
}

export function tx(key: { en: string; ar: string }, lang: Lang) {
  return key[lang]
}
