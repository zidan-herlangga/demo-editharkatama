import { useState } from 'react';
import Header from '../components/Header';
import WhatsAppButton from '../components/WhatsAppButton';
import MusicButton from '../components/MusicButton';

const priceList = [
  { name: 'Exterior Detailing', small: '1.200K', medium: '1.300K', large: '1.500K' },
  { name: 'Interior Detailing', small: '800K', medium: '900K', large: '1.000K' },
  { name: 'Engine Detailing', small: '500K', medium: '600K', large: '700K' },
  { name: 'Complete Detailing', small: '2.200K', medium: '2.400K', large: '2.800K' },
  { name: 'Glass Detailing Coating', small: '800K', medium: '1.500K', large: '2.000K' },
  { name: 'Glass Detailing Coating Premium Car & Super Car', small: '-', medium: '-', large: '2.500K' },
  { name: 'Plastic and Stainless Coating', small: '-', medium: '-', large: '1.500K' },
  { name: 'Motor Bike Coating', small: '-', medium: '1.500K', large: '2.000K' },
];

const coatingPackages = [
  { name: 'Complete Detailing Coating 3 Layer', desc: 'Paint: 3 Layers Nano Ceramic Coating', small: '3.500K', medium: '4.000K', large: '4.500K' },
  { name: 'Complete Detailing Coating', desc: 'Paint: 5 Layers Nano Ceramic Coating', small: '5.000K', medium: '5.500K', large: '6.000K' },
  { name: 'Complete Detailing Coating Premium', desc: 'Paint: 6 Layers Nano Ceramic Coating', small: '6.500K', medium: '7.000K', large: '8.000K' },
  { name: 'Premium Car & Super Car Coating 5 Layer', desc: 'Paint: 5 Layers Nano Ceramic Coating', small: '-', medium: '-', large: '9.000K' },
  { name: 'Premium Car & Super Car Coating 6 Layer', desc: 'Paint: 6 Layers Nano Ceramic Coating', small: '-', medium: '-', large: '10.000K' },
  { name: 'Coating Under Body (Anti Karat)', desc: null, small: '2.000K', medium: '2.500K', large: '3.000K' },
];

const detailingServices = [
  { icon: 'ri-car-line', title: 'Exterior Detailing', desc: 'Pengerjaan khusus eksterior mobil yang membersihkan cat mobil dari kontaminan, menghilangkan jamur dan baret, serta memberikan perlindungan tambahan menggunakan wax/paint protection.', color: 'slate' },
  { icon: 'ri-seat-line', title: 'Interior Detailing', desc: 'Pembersihan interior mobil secara menyeluruh serta mengurangi bau tidak sedap agar kondisi interior bersih dan nyaman untuk dikendarai.', color: 'red' },
  { icon: 'ri-star-line', title: 'Complete Detailing', desc: 'Paket yang meliputi Exterior, Interior & Engine Detailing untuk mengembalikan kondisi layaknya mobil baru.', color: 'yellow' },
];

const galleryImages = [
  '/assets/img/altor-img/Screenshot 2024-08-26 142831.png',
  '/assets/img/altor-img/Screenshot 2024-08-26 145718.png',
  '/assets/img/altor-img/Screenshot 2024-08-26 145600.png',
  '/assets/img/altor-img/Screenshot 2024-08-26 145438.png',
];

const carouselImages = [
  '/assets/img/altor-img/image-1.jpg',
  '/assets/img/altor-img/image-2.jpg',
  '/assets/img/altor-img/image-3.jpg',
  '/assets/img/altor-img/image-4.jpg',
];

function AltorFooter() {
  return (
    <footer
      className="bg-black text-gray-300 py-16 px-6"
      style={{
        background: "url('/assets/img/altor-img/mobil.png') center no-repeat fixed",
        backgroundSize: 'contain',
        backgroundColor: '#000000',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap gap-12">
          <div className="w-full lg:w-1/2">
            <img src="/assets/img/altor-img/altor-logo.png" className="h-40 w-auto mb-8" alt="Altor Logo" />
            <h3 className="text-white text-xl font-semibold mb-3">Address</h3>
            <address className="not-italic text-gray-400 leading-relaxed">
              Ruko Cemara Grand Boulevard. Blok U6/15 Harapan Indah Bekasi, Bekasi 17214
            </address>

            <h3 className="text-white text-xl font-semibold mt-8 mb-3">Contact</h3>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:premiumaltor@gmail.com" className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 hover:bg-white/20 transition rounded-full text-red-400 text-sm">
                <i className="ri-mail-line"></i> premiumaltor@gmail.com
              </a>
              <a href="https://www.instagram.com/altor.premium/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 hover:bg-white/20 transition rounded-full text-red-400 text-sm">
                <i className="ri-instagram-line"></i> Instagram
              </a>
              <a href="https://wa.me/6287771105008" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 hover:bg-white/20 transition rounded-full text-red-400 text-sm">
                <i className="ri-whatsapp-line"></i> Gani
              </a>
              <a href="https://wa.me/628814167070" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 hover:bg-white/20 transition rounded-full text-red-400 text-sm">
                <i className="ri-whatsapp-line"></i> Rian
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">&copy; 2024 Altor Premium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function AutoDetailing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = (index = 0) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <div className="font-sans text-gray-700 bg-[#faf8f5]">
      <Header />

      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-600 to-brand-400"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,183,39,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4">
          <img
            src="/assets/img/altor-img/altor-logo.png"
            alt="Altor Premium"
            className="w-48 sm:w-56 mx-auto mb-8 drop-shadow-2xl"
          />
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white uppercase tracking-wider mb-6 drop-shadow-lg">
            Auto Detailing
          </h1>
          <div className="text-white/90 text-sm sm:text-base font-medium tracking-[0.2em] uppercase min-h-[2rem]"></div>
          <a
            href="#portfolio-details"
            className="scrollto inline-block mt-12 animate-bounce"
            title="Scroll Down"
          >
            <img
              src="/assets/img/bx--chevron-down.png"
              alt="scroll"
              className="h-8 opacity-60 mx-auto"
            />
          </a>
        </div>
      </section>

      <main id="main">
        <section id="portfolio-details" className="py-20 px-4" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl shadow-sm border border-gray-100 p-8" data-aos="fade-right" data-aos-delay="350">
                  <img
                    src="/assets/img/altor-img/car_mclaren_mclaren_artura_red_car_sport_supercar_4k_hd_cars-3840x2160-removebg-preview (1).png"
                    alt="Altor - Mobil Sport"
                    className="w-full h-auto object-contain max-h-96"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:border-red-200 transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <i className="ri-information-line text-red-500"></i> INFORMATION
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-gray-700 min-w-[80px]">Category:</span>
                      <span className="text-gray-600">Auto Detailing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-gray-700 min-w-[80px]">Address:</span>
                      <span className="text-gray-600">Ruko Cemara Grand Boulevard. Blok U6/15 Harapan Indah Bekasi, Bekasi 17214</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-gray-700 min-w-[80px]">Email:</span>
                      <span className="text-gray-600">premiumaltor@gmail.com</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-gray-700 min-w-[80px]">Contact us:</span>
                      <span className="text-gray-600">
                        <a href="https://wa.me/6287771105008" className="text-red-500 hover:text-red-700 transition">Gani</a>
                        /
                        <a href="https://wa.me/628814167070" className="text-red-500 hover:text-red-700 transition">Rian</a>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-gray-700 min-w-[80px]">Project URL:</span>
                      <a href="https://www.instagram.com/altor.premium/" target="_blank" rel="noreferrer" className="text-red-500 hover:text-red-700 transition flex items-center gap-1">
                        <i className="ri-instagram-line"></i> Altor.Premium
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:border-red-200 transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <i className="ri-book-open-line text-red-500"></i> E-CATALOGUE
                  </h3>
                  <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3 text-gray-700 font-semibold">
                        <i className="ri-add-line text-red-500 text-lg"></i> Coating
                      </li>
                      <li className="flex items-center gap-3 text-gray-700 font-semibold">
                        <i className="ri-add-line text-red-500 text-lg"></i> Detailing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">Price List</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">Price List</h2>
            </div>

            <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-100">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                    <th className="p-4 font-semibold"></th>
                    <th className="p-4 font-semibold text-center">SMALL</th>
                    <th className="p-4 font-semibold text-center">MEDIUM</th>
                    <th className="p-4 font-semibold text-center">LARGE</th>
                  </tr>
                </thead>
                <tbody>
                  {priceList.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-slate-50 transition">
                      <td className="p-4 font-bold text-gray-800">{row.name}</td>
                      <td className="p-4 text-center font-semibold text-slate-700">{row.small}</td>
                      <td className="p-4 text-center font-semibold text-slate-700">{row.medium}</td>
                      <td className="p-4 text-center font-semibold text-slate-700">{row.large}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 px-4" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">Coating</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">Coating Package</h2>
              <p className="text-gray-500 mt-2 text-sm uppercase tracking-wider font-semibold">Complete Detailing</p>
            </div>

            <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-100">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gradient-to-r from-red-800 to-red-700 text-white">
                    <th className="p-4 font-semibold"></th>
                    <th className="p-4 font-semibold text-center">SMALL</th>
                    <th className="p-4 font-semibold text-center">MEDIUM</th>
                    <th className="p-4 font-semibold text-center">LARGE</th>
                  </tr>
                </thead>
                <tbody>
                  {coatingPackages.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-red-50 transition">
                      <td className="p-4">
                        <h5 className="font-bold text-gray-800">{row.name}</h5>
                        {row.desc && <p className="text-sm text-gray-500">{row.desc}</p>}
                      </td>
                      <td className="p-4 text-center font-semibold text-slate-700">{row.small}</td>
                      <td className="p-4 text-center font-semibold text-slate-700">{row.medium}</td>
                      <td className="p-4 text-center font-semibold text-slate-700">{row.large}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-black" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-white/5 uppercase block leading-none">Layanan</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase -mt-7 relative z-10">Layanan Detailing</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {detailingServices.map((svc, idx) => {
                const borderColor = svc.color === 'slate' ? 'border-slate-500' : svc.color === 'red' ? 'border-red-500' : 'border-yellow-500';
                const bgColor = svc.color === 'slate' ? 'bg-slate-100' : svc.color === 'red' ? 'bg-red-100' : 'bg-yellow-100';
                const textColor = svc.color === 'slate' ? 'text-slate-600' : svc.color === 'red' ? 'text-red-600' : 'text-yellow-600';
                return (
                <div
                  key={idx}
                  className={`bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 border-t-4 ${borderColor}`}
                >
                  <div className={`w-14 h-14 rounded-full ${bgColor} flex items-center justify-center mb-4`}>
                    <i className={`${svc.icon} ${textColor} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{svc.title}</h3>
                  <p className="text-gray-600 leading-relaxed italic">{svc.desc}</p>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-4" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">Galeri</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">Hasil Pengerjaan</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {galleryImages.map((src, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <img
                    src={src}
                    alt={`Hasil Detailing ${idx + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button
                onClick={() => openModal(0)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition shadow-lg hover:shadow-xl"
              >
                <i className="ri-image-line"></i> Lihat Foto Lainnya
              </button>
            </div>
          </div>
        </section>
      </main>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl">
            <div className="flex justify-end p-3">
              <button
                onClick={() => setShowModal(false)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
              >
                <i className="ri-close-line text-gray-500 text-xl"></i>
              </button>
            </div>
            <div className="relative px-4 pb-4">
              <img
                src={carouselImages[currentIndex]}
                className="w-full h-96 object-contain rounded-xl"
                alt="Foto Mobil"
              />
              <button
                onClick={prevImage}
                className="absolute left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition"
              >
                <i className="ri-arrow-left-s-line text-2xl"></i>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition"
              >
                <i className="ri-arrow-right-s-line text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <WhatsAppButton />
      <MusicButton />
      <AltorFooter />
    </div>
  );
}
