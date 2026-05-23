import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MusicButton from '../components/MusicButton';

const busImages = [
  { src: "/assets/img/bus/galeri-bus/bus-1.jpeg", label: "Bus 1" },
  { src: "/assets/img/bus/galeri-bus/bus-2.jpeg", label: "Bus 2" },
  { src: "/assets/img/bus/galeri-bus/bus-3.jpeg", label: "Bus 3" },
  { src: "/assets/img/bus/galeri-bus/bus-4.jpeg", label: "Bus 4" },
  { src: "/assets/img/bus/galeri-bus/bus-5.jpeg", label: "Bus 5" },
  { src: "/assets/img/bus/galeri-bus/bus-6.jpeg", label: "Bus 6" },
  { src: "/assets/img/bus/galeri-bus/bus-7.jpeg", label: "Bus 7" },
  { src: "/assets/img/bus/galeri-bus/bus-8.jpeg", label: "Bus 8" },
  { src: "/assets/img/bus/galeri-bus/bus-9.jpeg", label: "Bus 9" },
  { src: "/assets/img/bus/galeri-bus/bus-10.jpeg", label: "Bus 10" },
  { src: "/assets/img/bus/galeri-bus/bus-11.jpeg", label: "Bus 11" },
  { src: "/assets/img/bus/galeri-bus/bus-12.jpeg", label: "Bus 12" },
];

export default function Transportasi() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/mcstudios/glightbox@3.3.0/dist/js/glightbox.min.js';
    script.onload = () => {
      if (window.GLightbox) {
        window.GLightbox({ selector: '.portfolio-lightbox' });
      }
    };
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/mcstudios/glightbox@3.3.0/dist/css/glightbox.min.css';
    document.head.appendChild(link);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
      if (document.head.contains(link)) document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="font-sans text-gray-700 bg-[#faf8f5]">
      <Header />

      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-cyan-800 via-blue-600 to-brand-400"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,183,39,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white uppercase tracking-wider mb-6 drop-shadow-lg">
            Transportasi
          </h1>
          <div className="text-white/90 text-sm sm:text-base font-medium tracking-[0.2em] uppercase min-h-[2rem]"></div>
          <a
            href="#transportasi"
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
        <section id="transportasi" className="py-20 px-4" data-aos="fade-up">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">
                Fasilitas Bus
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">
                Fasilitas Bus
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm p-10 border border-gray-100 text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 w-48 h-48 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <img
                    src="/assets/img/bus/bus-vector.png"
                    alt="Bus"
                    className="h-40 w-auto"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Asyrof Bus
                </h3>
                <div className="w-16 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
                <ul className="text-gray-600 leading-relaxed space-y-2 text-lg">
                  <li className="flex items-center justify-center gap-2">
                    <i className="ri-check-line text-green-500"></i> Bus
                    Pariwisata (ASYROF Tahun 2023-2024)
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <i className="ri-check-line text-green-500"></i>{" "}
                    Transportasi Jeep Merapi
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <i className="ri-check-line text-green-500"></i> AC, TV,
                    Karaoke, Cleaning Seat
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <i className="ri-check-line text-green-500"></i> Bensin,
                    Tip, Tol, Parkir Objek Wisata
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="galeri"
          className="py-20 px-4 bg-white"
          data-aos="fade-up"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">
                Galeri Bus
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">
                Galeri Bus
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {busImages.map((img) => (
                <div
                  key={img.label}
                  className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer bg-white"
                >
                  <img
                    src={img.src}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={img.label}
                  />
                  <a
                    href={img.src}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                  </a>
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-semibold">{img.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <MusicButton />
      <Footer />
    </div>
  );
}
