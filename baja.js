/**
 * BAJA Event Organizer — Production Script
 * Handles: Language switching, Navbar, Countdown Timer, Mobile Menu
 */

'use strict';

/* ==========================================================================
   I18N DICTIONARY
   ========================================================================== */
const translations = {
  id: {
    'nav.about':     'Tentang Kami',
    'nav.services':  'Layanan',
    'nav.events':    'Agenda',
    'nav.gallery':   'Galeri',
    'nav.downloads': 'Unduhan',
    'nav.cta':       'Hubungi Kami',

    'hero.kicker':        'Manajemen Kejuaraan Profesional',
    'hero.title':         'Mengeksekusi Kejuaraan Nasional<br>dengan <em class="gold-gradient">Presisi</em>',
    'hero.desc':          'Dari registrasi digital hingga seremoni penutupan — kami memastikan setiap pertandingan berjalan adil, tertata, dan berkesan bagi atlet, pelatih, dan penyelenggara.',
    'hero.primary_cta':   'Daftar Sekarang',
    'hero.secondary_cta': 'Selengkapnya',
    'hero.partners_label':'Dipercaya Oleh',

    'stats.1.label': 'Kejuaraan Nasional',
    'stats.1.desc':  'Sukses diselenggarakan di berbagai daerah.',
    'stats.2.label': 'Atlet Tanding',
    'stats.2.desc':  'Terverifikasi dalam sistem pendaftaran digital kami.',
    'stats.3.label': 'Tahun Pengalaman',
    'stats.3.desc':  'Otoritas terpercaya dalam manajemen olahraga.',

    'about.kicker':      'Standar BAJA',
    'about.title':       'Mengangkat Kompetisi Bela Diri ke Tataran Profesional',
    'about.p1':          'BAJA Event Organizer lahir dari satu keyakinan: kejuaraan pencak silat layak mendapat standar operasional sekelas olahraga internasional. Kami hadir agar setiap atlet bisa fokus bertanding, bukan mengurus teknis yang seharusnya menjadi tanggung jawab kami.',
    'about.p2':          'Melalui sistem pendaftaran digital yang aman, penyusunan bagan tanding berbasis algoritma, dan penugasan wasit bersertifikasi nasional, kami menjaga integritas pertandingan dan martabat setiap pesilat yang turun ke gelanggang.',
    'about.img_caption': 'Kepercayaan Institusional',
    'about.feat1_title': 'Verifikasi Identitas & Timbang Badan Digital',
    'about.feat1_desc':  'Terhubung langsung ke sistem bagan secara real-time.',
    'about.feat2_title': 'Panel Wasit & Juri Bersertifikasi',
    'about.feat2_desc':  'Pejabat tingkat nasional dengan rotasi impartial.',
    'about.feat3_title': 'Integrasi Skor Digital Real-Time',
    'about.feat3_desc':  'Layar arena tersinkron dengan pusat administrasi.',

    'services.kicker': 'Keahlian Operasional',
    'services.title':  'Solusi Acara yang Komprehensif',
    'services.desc':   'Dari pendaftaran digital pertama hingga penyerahan medali terakhir, kami mengelola seluruh aspek kejuaraan dengan tingkat ketelitian kelas tinggi.',
    'services.1.title': 'Manajemen Registrasi',
    'services.1.desc':  'Portal pendaftaran atlet berbasis cloud dengan verifikasi dokumen dan pembayaran yang aman.',
    'services.2.title': 'Sistem Bagan Digital',
    'services.2.desc':  'Algoritma penjadwalan presisi dengan pembaruan bagan secara langsung yang dapat diakses oleh pelatih.',
    'services.3.title': 'Administrasi Arena',
    'services.3.desc':  'Koordinasi lapangan terstruktur: rotasi wasit, tim medis, dan logistik pertandingan.',
    'services.4.title': 'Seremoni Penghargaan',
    'services.4.desc':  'Penyerahan medali yang khidmat dan prestisius bagi para juara.',
    'services.5.title': 'Kepatuhan & Protokol Keselamatan',
    'services.5.desc':  'Kepatuhan penuh terhadap regulasi federasi nasional: peralatan standar, tenaga medis bersertifikat, zona pemanasan yang layak, dan asuransi acara komprehensif.',

    'events.kicker':      'Kejuaraan Berikutnya',
    'events.title':       'Agenda Mendatang',
    'events.status':      'Pendaftaran Dibuka',
    'events.status_open': 'Pendaftaran Dibuka',
    'events.date':        'Segera Diumumkan',
    'events.date_riau':    'Oktober 2026',
    'events.location':    'Gelanggang Remaja, Pekanbaru, Riau',
    'events.location_riau':'Gedung Pemuda, Pekanbaru, Riau',
    'events.view_all':    'Lihat Semua',
    'events.view_details':'Lihat Berkas',
    'events.timer_label': 'Waktu Tersisa',

    'timer.days':  'Hari',
    'timer.hours': 'Jam',
    'timer.mins':  'Menit',
    'timer.secs':  'Detik',

    'gallery.kicker': 'Dokumentasi',
    'gallery.title':  'Galeri Kegiatan',
    'gallery.desc':   'Melihat lebih dekat keseruan pertandingan, dedikasi, dan sportivitas para atlet di arena nasional.',

    'downloads.kicker': 'Pusat Unduhan',
    'downloads.title':  'Berkas Resmi Kejuaraan',
    'downloads.desc':   'Dokumen resmi, panduan, dan materi promosi untuk kejuaraan mendatang.',
    'downloads.1': 'Proposal Kejuaraan',
    'downloads.2': 'Panduan Manajer',
    'downloads.3': 'Poster Resmi',
    'downloads.4': 'Buku Peraturan IPSI 2022',

    'contact.kicker':        'Hubungi Kami',
    'contact.title':         'Bermitra dengan Presisi',
    'contact.desc':          'Siap meningkatkan standar kejuaraan Anda? Hubungi tim manajemen kami untuk solusi operasional yang dirancang khusus sesuai kebutuhan Anda.',
    'contact.address_label': 'Kantor Pusat',
    'contact.email_label':   'Surel',
    'contact.phone_label':   'Telepon',
    'contact.wa_cta':        'Chat di WhatsApp',

    'footer.tagline': 'Penyelenggara Kejuaraan Pencak Silat Profesional',
  },

  en: {
    'nav.about':     'About Us',
    'nav.services':  'Services',
    'nav.events':    'Events',
    'nav.gallery':   'Gallery',
    'nav.downloads': 'Downloads',
    'nav.cta':       'Contact Us',

    'hero.kicker':        'Professional Championship Management',
    'hero.title':         'Orchestrating National Championships<br>with <em class="gold-gradient">Precision</em>',
    'hero.desc':          'From digital registration to the closing ceremony — we ensure every competition runs fairly, structured, and memorably for athletes, coaches, and organizers.',
    'hero.primary_cta':   'Register Now',
    'hero.secondary_cta': 'Discover More',
    'hero.partners_label':'Trusted By',

    'stats.1.label': 'National Championships',
    'stats.1.desc':  'Flawlessly executed across the region.',
    'stats.2.label': 'Athletes Managed',
    'stats.2.desc':  'Verified through our digital registration ecosystem.',
    'stats.3.label': 'Years of Experience',
    'stats.3.desc':  'Trusted authority in sports management.',

    'about.kicker':      'The BAJA Standard',
    'about.title':       'Elevating Martial Arts to Professional Heights',
    'about.p1':          'BAJA Event Organizer was founded on one conviction: Pencak Silat championships deserve the same operational standards as international sports. We\'re here so every athlete can focus on competing, not on technical matters that should be our responsibility.',
    'about.p2':          'Through secure digital registration, algorithm-driven bracket generation, and the deployment of nationally certified referees, we protect the integrity of every match and the honor of every competing martial artist.',
    'about.img_caption': 'Institutional Trust',
    'about.feat1_title': 'Digital Identity & Weigh-In Verification',
    'about.feat1_desc':  'Connected directly to the bracket system in real-time.',
    'about.feat2_title': 'Certified Referee & Judging Panels',
    'about.feat2_desc':  'National-level officials with impartial rotation schedules.',
    'about.feat3_title': 'Real-Time Digital Scoring Integration',
    'about.feat3_desc':  'Arena displays synced with central administration.',

    'services.kicker': 'Operational Expertise',
    'services.title':  'Comprehensive Event Solutions',
    'services.desc':   'From the first digital registration to the final medal ceremony, we manage every aspect of the championship with meticulous precision.',
    'services.1.title': 'Registration Management',
    'services.1.desc':  'Cloud-based athlete registration portals with secure document verification and payment gateways.',
    'services.2.title': 'Digital Bracket System',
    'services.2.desc':  'Precision scheduling algorithms and real-time bracket updates accessible to coaches.',
    'services.3.title': 'Arena Administration',
    'services.3.desc':  'Structured on-site coordination: referee rotations, medical teams, and arena logistics.',
    'services.4.title': 'Award Ceremonies',
    'services.4.desc':  'Dignified and prestigious medal presentations to honor the champions.',
    'services.5.title': 'Compliance & Safety Protocols',
    'services.5.desc':  'Full compliance with national federation regulations: standard equipment, certified medical personnel, proper warm-up zones, and comprehensive event insurance.',

    'events.kicker':      'Upcoming Championship',
    'events.title':       'Upcoming Events',
    'events.status':      'Registration Open',
    'events.status_open': 'Registration Open',
    'events.date':        'Date Coming Soon',
    'events.date_riau':    'October 2026',
    'events.location':    'Gelanggang Remaja, Pekanbaru, Riau',
    'events.location_riau':'Gedung Pemuda, Pekanbaru, Riau',
    'events.view_all':    'View All',
    'events.view_details':'View Documents',
    'events.timer_label': 'Time Remaining',

    'timer.days':  'Days',
    'timer.hours': 'Hours',
    'timer.mins':  'Mins',
    'timer.secs':  'Secs',

    'gallery.kicker': 'Visual Archive',
    'gallery.title':  'Moments of Prestige',
    'gallery.desc':   'Intensity, discipline, and sportsmanship from national-level championship arenas.',

    'downloads.kicker': 'Download Center',
    'downloads.title':  'Official Event Documents',
    'downloads.desc':   'Official documents, guides, and promotional materials for upcoming championships.',
    'downloads.1': 'Event Proposal',
    'downloads.2': 'Manager Handbook',
    'downloads.3': 'Official Flyer',
    'downloads.4': 'IPSI Rulebook 2022',

    'contact.kicker':        'Get In Touch',
    'contact.title':         'Partner With Precision',
    'contact.desc':          'Ready to elevate your next championship? Contact our management team for bespoke operational solutions tailored to your needs.',
    'contact.address_label': 'Headquarters',
    'contact.email_label':   'Email',
    'contact.phone_label':   'Phone',
    'contact.wa_cta':        'Chat on WhatsApp',

    'footer.tagline': 'Professional Pencak Silat Championship Organizer',
  }
};

/* ==========================================================================
   LANGUAGE SWITCHER
   ========================================================================== */
let currentLang = 'id';

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang][key];
    if (text !== undefined) el.innerHTML = text;
  });
  const btn = document.getElementById('lang-switch');
  if (btn) {
    btn.textContent = lang === 'id' ? 'ID / EN' : 'EN / ID';
    btn.setAttribute('aria-label', lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia');
  }
}

function initLangSwitch() {
  const btn = document.getElementById('lang-switch');
  if (!btn) return;
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    applyTranslations(currentLang);
  });
}

/* ==========================================================================
   STICKY NAVBAR
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        navbar.classList.toggle('navbar--scrolled', window.scrollY > 40);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ==========================================================================
   MOBILE MENU
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const drawer = document.getElementById('nav-mobile-drawer');
  if (!toggle || !drawer) return;

  let isOpen = false;

  function openMenu() {
    isOpen = true;
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.querySelector('.material-symbols-outlined').textContent = 'close';
  }

  function closeMenu() {
    isOpen = false;
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.querySelector('.material-symbols-outlined').textContent = 'menu';
  }

  toggle.addEventListener('click', () => {
    isOpen ? closeMenu() : openMenu();
  });

  // Close on link click
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen) closeMenu();
  });
}

/* ==========================================================================
   COUNTDOWN TIMER
   ========================================================================== */
function initCountdown() {
  const timers = document.querySelectorAll('.event-card__timer');
  if (timers.length === 0) return;

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const now = Date.now();
    timers.forEach(timer => {
      const targetStr = timer.getAttribute('data-target-date');
      if (!targetStr) return;
      
      const target = new Date(targetStr).getTime();
      const diff = target - now;

      const daysEl  = timer.querySelector('.t-days');
      const hoursEl = timer.querySelector('.t-hours');
      const minsEl  = timer.querySelector('.t-mins');
      const secsEl  = timer.querySelector('.t-secs');

      if (diff <= 0) {
        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minsEl) minsEl.textContent = '00';
        if (secsEl) secsEl.textContent = '00';
        return;
      }

      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000)  / 60000);
      const s = Math.floor((diff % 60000)    / 1000);

      if (daysEl) daysEl.textContent  = pad(d);
      if (hoursEl) hoursEl.textContent = pad(h);
      if (minsEl) minsEl.textContent  = pad(m);
      if (secsEl) secsEl.textContent  = pad(s);
    });
  }

  tick();
  setInterval(tick, 1000);
}

/* ==========================================================================
   FOOTER YEAR
   ========================================================================== */
function initFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ==========================================================================
   SMOOTH SCROLL
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ==========================================================================
   INIT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initLangSwitch();
  initCountdown();
  initFooterYear();
  initSmoothScroll();
});