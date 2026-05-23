import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MusicButton from '../components/MusicButton';



const services = [
  {
    id: 'foodModal',
    icon: 'ri-restaurant-line',
    title: 'Penjualan Makanan dan Minuman',
    href: '/catering',
    desc: 'Layanan kami meliputi Catering untuk Sosial Event...',
    body: 'Layanan kami meliputi Catering untuk Sosial Event, Catering Wedding, serta Corporate Catering.'
  },
  {
    id: 'stationeryModal',
    icon: 'ri-pencil-ruler-line',
    title: 'Perdagangan Alat Tulis',
    href: '#',
    desc: 'Menyediakan berbagai macam alat tulis dan perlengkapan kantor berkualitas...',
    body: 'Menyediakan berbagai macam alat tulis dan perlengkapan kantor berkualitas untuk memenuhi kebutuhan sekolah, bisnis, dan pribadi Anda. Produk kami mencakup pena, kertas, buku catatan, dan banyak lagi.'
  },
  {
    id: 'eventModal',
    icon: 'ri-calendar-event-line',
    title: 'Event Organizer',
    href: '/eo',
    desc: 'Kami menyediakan layanan perencanaan dan penyelenggaraan acara...',
    body: 'Kami menyediakan Layanan perencanaan penyelenggaraan acara untuk kebutuhan Perusahaan dan Personal, mulai dari Ulang Tahun, Anniversary, Opening Venue, Graduation serta Event besar lainnya, kami memastikan detail event berjalan dengan lancar dan di tangani oleh para profesional baik dari segi produksi hingga crew yang terlibat di dalamnya.'
  },
  {
    id: 'weddingModal',
    icon: 'ri-heart-line',
    title: 'Wedding Organizer',
    href: '/wo',
    desc: 'Kami menyediakan berbagai macam paket pernikahan dengan pilihan berbagai...',
    body: 'Kami menyediakan berbagai macam paket pernikahan dengan pilihan berbagai macam venue sesuai dengan keinginan dan budgeting klien, mulai dari Catering Buffe Menu, Team Dekorasi, Team MUA, Team Foto & Video, Sound & Band, MC, Talent yang profesional. <a href="/wo#search-box" class="text-brand-500 underline">Kunjungi Paket</a>'
  },
  {
    id: 'transportModal',
    icon: 'ri-car-line',
    title: 'Jasa Transportasi',
    href: '/transportasi',
    desc: 'Menawarkan layanan transportasi yang handal dan aman...',
    body: 'Menawarkan layanan transportasi yang handal dan aman untuk berbagai keperluan, baik itu perjalanan pribadi, antar-jemput bandara, maupun layanan transportasi untuk acara khusus.'
  },
  {
    id: 'itModal',
    icon: 'ri-computer-line',
    title: 'IT',
    href: '#',
    desc: 'Menyediakan solusi IT yang komprehensif, termasuk pengembangan perangkat lunak...',
    body: 'Menyediakan solusi IT yang komprehensif, termasuk pengembangan perangkat lunak, manajemen jaringan, dan dukungan teknis untuk memastikan sistem informasi Anda berjalan dengan efisien dan aman.'
  },
  {
    id: 'photographyModal',
    icon: 'ri-camera-line',
    title: 'Fotografi',
    href: '/galeri',
    desc: 'Layanan Foto dan Video untuk acara Formal dan Non Formal...',
    body: 'Layanan fotografi profesional untuk mengabadikan momen-momen berharga dalam hidup Anda. Kami menawarkan berbagai paket untuk pernikahan, acara keluarga, dan sesi foto pribadi.'
  },
  {
    id: 'accommodationModal',
    icon: 'ri-hotel-line',
    title: 'Penyedia Akomodasi',
    href: '/akomodasi',
    desc: 'Menyediakan berbagai pilihan akomodasi yang nyaman dan terjangkau...',
    body: 'Menyediakan berbagai pilihan akomodasi yang nyaman dan terjangkau untuk memenuhi kebutuhan perjalanan Anda, baik itu untuk liburan, bisnis, atau kunjungan singkat.'
  },
  {
    id: 'detailingModal',
    icon: 'ri-flashlight-line',
    title: 'Auto Detailing',
    href: '/auto-detailing',
    desc: 'Layanan detailing mobil yang profesional untuk menjaga kendaraan...',
    body: 'Layanan detailing mobil yang profesional untuk menjaga kendaraan Anda tetap bersih dan terlihat baru. Kami menawarkan berbagai paket pembersihan dan perawatan eksterior serta interior.'
  },
  {
    id: 'partyModal',
    icon: 'ri-gift-line',
    title: 'Penyewa Alat Pesta',
    href: '#',
    desc: 'Menyediakan berbagai perlengkapan event Corporate dan...',
    body: 'Menyediakan berbagai perlengkapan event Corporate dan Personal, Panggung Rigging, Backdrop, Lighting, Sound System, Tenda, Dekorasi Pelaminan dan Sosial Event.'
  }
];

const typedStrings = [
  'CV. EDITH ARKATAMA',
  'Wedding Organizer',
  'Event Organizer',
  'Catering'
];
const typeSpeed = 100;
const deleteSpeed = 60;
const pauseTime = 2000;

const partners = [
  { src: '/assets/img/testimonial/roemah-djatinegara.webp', alt: 'Roemah Djatinegara' },
  { src: '/assets/img/testimonial/hotel-savero.webp', alt: 'Savero Style Bogor' },
  { src: '/assets/img/testimonial/pesona-alam-resort.webp', alt: 'Pesona Alam Resort' },
  { src: '/assets/img/testimonial/TamarinHotelJakarta.webp', alt: 'Tamarin Hotel Jakarta' },
  { src: '/assets/img/testimonial/brother-production.webp', alt: 'Brother Production' },
  { src: '/assets/img/testimonial/botanica-black.webp', alt: 'The Botanica' },
  { src: '/assets/img/testimonial/haris-hotel.webp', alt: 'Harris Hotel' },
  { src: '/assets/img/testimonial/SMPIT-Gema.webp', alt: 'SMPIT Gema Nurani' },
  { src: '/assets/img/testimonial/SMAIT-Gema.webp', alt: 'SMAIT Gema Nurani' },
  { src: '/assets/img/testimonial/SMKMitraBaktiHusada.webp', alt: 'SMK Mitra Bakti Husada' }
];

function Home() {
  const [activeModal, setActiveModal] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCustomOrder, setShowCustomOrder] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [customForm, setCustomForm] = useState({
    productType: '',
    customDescription: '',
    quantity: '',
    specifications: '',
    deliveryDate: ''
  });




  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeModal]);

  useEffect(() => {
    const currentStr = typedStrings[charIndex % typedStrings.length];
    let timer;

    if (!isDeleting) {
      if (typedText.length < currentStr.length) {
        timer = setTimeout(() => {
          setTypedText(currentStr.slice(0, typedText.length + 1));
        }, typeSpeed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      if (typedText.length > 0) {
        timer = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, deleteSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCharIndex((prev) => prev + 1);
        }, 0);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, charIndex]);

  const openModal = (id) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  const openCustomOrder = () => setShowCustomOrder(true);
  const closeCustomOrder = () => setShowCustomOrder(false);

  const openWhatsApp = () => setShowWhatsApp(true);
  const closeWhatsApp = () => setShowWhatsApp(false);

  const handleCustomChange = (e) => {
    setCustomForm({ ...customForm, [e.target.name]: e.target.value });
  };

  const sendCustomOrder = () => {
    const { productType, customDescription, quantity, specifications, deliveryDate } = customForm;
    const msg = `Jenis Produk/Layanan: ${productType}\nDeskripsi: ${customDescription}\nJumlah: ${quantity}\nSpesifikasi: ${specifications}\nTanggal Pengiriman: ${deliveryDate}`;
    window.open(`https://api.whatsapp.com/send?phone=6282298066188&text=${encodeURIComponent(msg)}`, '_blank');
    closeCustomOrder();
  };

  const sendContact = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    const waMessage = `Nama: ${name}\nEmail: ${email}\nSubject: ${subject}\nPesan: ${message}`;
    window.open(`https://api.whatsapp.com/send?phone=6282298066188&text=${encodeURIComponent(waMessage)}`, '_blank');
  };

  const currentService = services.find((s) => s.id === activeModal);

  return (
    <div className="font-sans text-gray-700 bg-[#faf8f5]">
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#a69224] via-[#825c24] to-[#523a1a]"
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4">
          <img
            src="/assets/img/logo-edith.webp"
            alt="logo edith arkatama"
            className="w-64 sm:w-72 mx-auto mb-8 drop-shadow-2xl"
          />
          <div className="text-white/90 text-sm sm:text-base font-medium tracking-[0.2em] uppercase min-h-[2rem]">
            {typedText}
            <span className="animate-pulse ml-0.5">|</span>
          </div>
          <a href="#about" className="inline-block mt-12 animate-bounce">
            <img
              src="/assets/img/bx--chevron-down.png"
              alt="scroll"
              className="h-8 opacity-60 mx-auto"
            />
          </a>
        </div>
      </section>

      <main id="main">
        {/* About Section */}
        <section id="about" className="py-20 px-4" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">Tentang Kami</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">Tentang Kami</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-brand-500 mb-4">Tentang Edith</h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  <strong>Edith</strong> melayani perusahaan kecil, menengah, dan perusahaan besar, baik swasta maupun pemerintahan. Sejak didirikannya CV. Edith Arkatama pada tanggal 14 April 2021, kami menjalankan bisnis yang nyaman, jujur, dan berkualitas kepada Personal Klien maupun Perusahaan Klien yang menjadi mitra kerja kami. Kami selalu mengutamakan kepuasan serta kepercayaan demi kelangsungan bisnis yang baik dan berkelanjutan.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-brand-500 mb-4">Kenapa memilih kami?</h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Kami berkomitmen untuk memberikan pengalaman berpergian yang mulus. Mulai dari perencanaan hingga penyelesaian perjalanan, memberikan harga spesial dan keunggulan terbaik tanpa mengorbankan kualitas. Kami merencanakan dan mengatur acara serta perjalanan yang tak terlupakan.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-brand-50 to-white rounded-xl shadow-sm p-8 border border-brand-100">
                <div className="w-12 h-12 rounded-full bg-brand-200 flex items-center justify-center mb-4">
                  <i className="ri-eye-line text-brand-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Visi</h3>
                <p className="text-gray-600 leading-relaxed">Menjadi salah satu pelaku bisnis dan perusahaan yang dipercaya melayani perdagangan umum dan jasa di Indonesia.</p>
              </div>

              <div className="bg-gradient-to-br from-brand-50 to-white rounded-xl shadow-sm p-8 border border-brand-100">
                <div className="w-12 h-12 rounded-full bg-brand-200 flex items-center justify-center mb-4">
                  <i className="ri-target-line text-brand-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Misi</h3>
                <p className="text-gray-600 leading-relaxed">Menjadi perusahaan yang terus berkembang dan bergerak maju mengikuti kebutuhan pasar, baik dalam bidang jasa maupun barang yang berkualitas dan dalam suasana harmonis yang menguntungkan semua pihak.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Blockquotes Section */}
        <section className="py-20 px-4 bg-white" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">Butuh apa?</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">Butuh apa?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative bg-white rounded-xl shadow-md border border-gray-100 p-8 pt-14 hover:shadow-lg hover:border-brand-200 transition-all duration-300 group">
                <div className="absolute -top-6 left-8 w-14 h-14 rounded-full bg-brand-400 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">01</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Corporate Tour</h3>
                <p className="text-gray-600 leading-relaxed">Travel agent berpengalaman dalam mengkreasikan tour spesial perusahaan/tim Anda.</p>
              </div>

              <div className="relative bg-white rounded-xl shadow-md border border-gray-100 p-8 pt-14 hover:shadow-lg hover:border-brand-200 transition-all duration-300 group">
                <div className="absolute -top-6 left-8 w-14 h-14 rounded-full bg-brand-400 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">02</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Corporate Gathering</h3>
                <p className="text-gray-600 leading-relaxed">Ciptakan wadah saling berinteraksi, mengenal & memperat hubungan sesama karyawan demi hadirkan budaya perusahaan positif. Request Edith Corporate Special Program.</p>
              </div>

              <div className="relative bg-white rounded-xl shadow-md border border-gray-100 p-8 pt-14 hover:shadow-lg hover:border-brand-200 transition-all duration-300 group">
                <div className="absolute -top-6 left-8 w-14 h-14 rounded-full bg-brand-400 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">03</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">School / Study Tour</h3>
                <p className="text-gray-600 leading-relaxed">Buat momen spesial sekolah Anda dengan program Study Tour berpengalaman dari Edith Event Planner dengan harga terjangkau! Request Edith School Special Program!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">Layanan Kami</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">Layanan Kami</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-lg hover:border-brand-200 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-xl bg-brand-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-100 transition-colors">
                    <i className={`${service.icon} text-2xl text-brand-500`} />
                  </div>
                  <h4 className="text-base font-bold text-gray-800 mb-2">
                    <a href={service.href} className="hover:text-brand-500 transition">{service.title}</a>
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.desc}</p>
                  <button
                    onClick={() => openModal(service.id)}
                    className="text-brand-500 text-sm font-semibold hover:text-brand-600 transition inline-flex items-center gap-1"
                  >
                    Read More <span className="text-lg leading-none">&rarr;</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Detail Modal */}
        {activeModal && currentService && (
          <div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800">{currentService.title}</h3>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
                >
                  <i className="ri-close-line text-gray-500" />
                </button>
              </div>
              <div className="p-6 text-gray-600 leading-relaxed">
                <div className="w-16 h-16 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                  <i className={`${currentService.icon} text-2xl text-brand-500`} />
                </div>
                <p dangerouslySetInnerHTML={{ __html: currentService.body }} />
              </div>
              <div className="p-6 border-t border-gray-100 flex justify-between">
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition"
                >
                  Tutup
                </button>
                <a
                  href={currentService.href}
                  className="px-6 py-2.5 bg-brand-400 hover:bg-brand-500 text-white rounded-lg font-medium transition"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Custom Packages Section */}
        <section className="py-20 px-4 bg-gray-900 text-white" data-aos="fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Pemesanan Custom</h2>
            <div className="w-16 h-1 bg-brand-400 mx-auto mb-8" />
            <p className="text-xl mb-4">
              Hubungi <i className="ri-whatsapp-line text-green-400" />{' '}
              <a
                href="https://api.whatsapp.com/send/?phone=6282298066188&text=Halo+kak.+Saya+mau+tanya%3F+&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 hover:text-brand-300 transition"
              >
                +62 822-9806-6188
              </a>
            </p>
            <p className="text-gray-400 mb-8">
              Terima kasih telah menghubungi kami! Kami senang mendengar bahwa Anda tertarik untuk melakukan pemesanan custom.
            </p>
            <button
              onClick={openCustomOrder}
              className="inline-block px-8 py-3 bg-brand-400 text-gray-900 font-bold rounded-lg hover:bg-brand-300 transition shadow-lg"
            >
              Buat pesanan custom
            </button>
          </div>
        </section>

        {/* Custom Order Modal */}
        {showCustomOrder && (
          <div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
            onClick={closeCustomOrder}
          >
            <div
              className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800">Form Pemesanan Custom</h3>
                <button
                  onClick={closeCustomOrder}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
                >
                  <i className="ri-close-line text-gray-500" />
                </button>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Produk/Layanan:</label>
                  <input
                    type="text"
                    name="productType"
                    value={customForm.productType}
                    onChange={handleCustomChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Kustomisasi:</label>
                  <textarea
                    name="customDescription"
                    rows="4"
                    value={customForm.customDescription}
                    onChange={handleCustomChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jumlah Pesanan:</label>
                  <input
                    type="number"
                    name="quantity"
                    value={customForm.quantity}
                    onChange={handleCustomChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Spesifikasi (Warna, Ukuran, dll.):</label>
                  <input
                    type="text"
                    name="specifications"
                    value={customForm.specifications}
                    onChange={handleCustomChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Pengiriman:</label>
                  <input
                    type="date"
                    name="deliveryDate"
                    value={customForm.deliveryDate}
                    onChange={handleCustomChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition"
                  />
                </div>
                <button
                  type="button"
                  onClick={sendCustomOrder}
                  className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition shadow"
                >
                  Kirim Pesanan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Partnership Section */}
        <section id="support" className="py-20 px-4 bg-white" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">Partnership</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">Partnership</h2>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 items-center">
              {partners.map((partner, i) => (
                <div
                  key={i}
                  className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
                >
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="max-h-12 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">Kontak Kami</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">Kontak Kami</h2>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31733.668189585936!2d106.9545597347656!3d-6.169770100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698a4cee557ee3%3A0x6daf2bf887cc67cb!2sRuko%20Cemara%20-%20Grand%2C%20Jl.%20Harapan%20Indah%20Boulevard%20Blk.%20U6%20No.17%2C%20Pusaka%20Rakyat%2C%20Kec.%20Tarumajaya%2C%20Kabupaten%20Bekasi%2C%20Jawa%20Barat%2017214!5e0!3m2!1sid!2sid!4v1723520209174!5m2!1sid!2sid"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="maps"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-sm mb-12"
            />

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center hover:shadow-md transition">
                    <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-3">
                      <i className="ri-share-line text-brand-500 text-xl" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-3">Social Media</h3>
                    <div className="flex justify-center gap-3">
                      <a
                        href="https://facebook.com/edithwoeo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand-400 hover:text-white hover:border-brand-400 transition"
                      >
                        <i className="ri-facebook-fill" />
                      </a>
                      <a
                        href="https://instagram.com/edithwoeo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand-400 hover:text-white hover:border-brand-400 transition"
                      >
                        <i className="ri-instagram-line" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center hover:shadow-md transition">
                    <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-3">
                      <i className="ri-phone-line text-brand-500 text-xl" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">Telp</h3>
                    <p className="text-gray-600">+62 822-9806-6188</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center hover:shadow-md transition">
                  <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-3">
                    <i className="ri-map-pin-line text-brand-500 text-xl" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3">Branch Office</h3>
                  <p className="text-gray-600">
                    Ruko Cemara Grand Boulevard Blok U6 No.15 Kota Harapan Indah<br />
                    Kab. Bekasi, Desa Pustaka Rakyat, Kec Taruma Jaya
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <form onSubmit={sendContact}>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nama"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Pesan"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-brand-400 hover:bg-brand-500 text-white font-bold rounded-lg transition shadow"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
        <MusicButton />
        <button
          onClick={openWhatsApp}
          className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition"
          title="WhatsApp"
        >
          <i className="ri-whatsapp-line text-xl" />
        </button>
      </div>

      {/* WhatsApp Modal */}
      {showWhatsApp && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={closeWhatsApp}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-800">Butuh bantuan? Hubungi kami</h3>
              <button
                onClick={closeWhatsApp}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
              >
                <i className="ri-close-line text-gray-500" />
              </button>
            </div>
            <div className="p-6">
              <a
                href="https://api.whatsapp.com/send/?phone=6282298066188&text=Halo+kak.+Saya+mau+tanya%3F+&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition"
              >
                <img
                  src="/assets/img/vector-business-men-icon.jpg"
                  alt="Indah Purnamasari"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">Indah Purnamasari</p>
                  <p className="text-sm text-gray-500">Klik untuk chat</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
