import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MusicButton from '../components/MusicButton';



const dekorasiImages = [
  { src: "/assets/img/dekorasi/dekorasi1.jpg", label: "Dekorasi 1" },
  { src: "/assets/img/dekorasi/setup1.jpg", label: "Setup 1" },
  { src: "/assets/img/dekorasi/dekorasi3.jpg", label: "Dekorasi 3" },
  { src: "/assets/img/dekorasi/dekorasi2.jpg", label: "Dekorasi 2" },
  { src: "/assets/img/dekorasi/dekorasi4.jpg", label: "Dekorasi 4" },
  { src: "/assets/img/dekorasi/setup3.jpg", label: "Setup 3" },
  { src: "/assets/img/dekorasi/dekorasi-1.jpg", label: "Dekorasi" },
  { src: "/assets/img/dekorasi/dekorasi-2.jpg", label: "Dekorasi" },
  { src: "/assets/img/dekorasi/dekorasi-3.jpg", label: "Dekorasi" },
  { src: "/assets/img/dekorasi/dekorasi-4.jpg", label: "Dekorasi" },
  { src: "/assets/img/dekorasi/dekorasi-5.jpg", label: "Dekorasi" },
  { src: "/assets/img/dekorasi/dekorasi-6.jpg", label: "Dekorasi" },
  { src: "/assets/img/dekorasi/dekorasi-7.jpg", label: "Dekorasi" },
  { src: "/assets/img/dekorasi/dekorasi-8.jpg", label: "Dekorasi" },
  { src: "/assets/img/dekorasi/dekorasi-9.jpg", label: "Dekorasi" },
  { src: "/assets/img/dekorasi/dekorasi-10.jpg", label: "Dekorasi" },
  { src: "/assets/img/dekorasi/dekorasi-11.jpg", label: "Dekorasi" },
  { src: "/assets/img/dekorasi/dekorasi-12.jpg", label: "Dekorasi" },
  { src: "/assets/img/dekorasi/dekorasi-13.jpg", label: "Dekorasi" },
  { src: "/assets/img/dekorasi/dekorasi-14.jpg", label: "Dekorasi" },
  { src: "/assets/img/dekorasi/dekorasi-15.jpg", label: "Dekorasi" },
  { src: "/assets/img/dekorasi/dekorasi-16.jpg", label: "Dekorasi" },
  { src: "/assets/img/dekorasi/dekorasi-17.jpg", label: "Dekorasi" },
  { src: "/assets/img/dekorasi/dekorasi-18.jpg", label: "Dekorasi" },
];

const partners = [
  { href: "https://www.instagram.com/ivanadecoration/", dataUrl: "//iframely.net/TdIESyg" },
  { href: "https://www.instagram.com/zia.decoration/", dataUrl: "//iframely.net/4RZ83XQ" },
  { href: "https://www.instagram.com/hestialuira/", dataUrl: "//iframely.net/MW23mKK" },
  { href: "https://www.instagram.com/sanggaryeni/", dataUrl: "//iframely.net/7gz3d8l" },
  { href: "https://www.instagram.com/winda_ratnasari/", dataUrl: "//iframely.net/xgh1Le1" },
  { href: "https://www.instagram.com/keziabridalstudio._by_appointm/", dataUrl: "//iframely.net/cLfFHSj" },
];

export default function Dekorasi() {
  useEffect(() => {
    const iframelyScript = document.createElement('script');
    iframelyScript.src = '//iframely.net/embed.js';
    iframelyScript.async = true;
    document.body.appendChild(iframelyScript);

    const glightboxScript = document.createElement('script');
    glightboxScript.src = 'https://cdn.jsdelivr.net/gh/mcstudios/glightbox@3.3.0/dist/js/glightbox.min.js';
    glightboxScript.onload = () => {
      if (window.GLightbox) {
        window.GLightbox({ selector: '.portfolio-lightbox' });
      }
    };
    document.body.appendChild(glightboxScript);

    const glightboxCss = document.createElement('link');
    glightboxCss.rel = 'stylesheet';
    glightboxCss.href = 'https://cdn.jsdelivr.net/gh/mcstudios/glightbox@3.3.0/dist/css/glightbox.min.css';
    document.head.appendChild(glightboxCss);

    return () => {
      document.body.removeChild(iframelyScript);
      document.body.removeChild(glightboxScript);
      document.head.removeChild(glightboxCss);
    };
  }, []);

  return (
    <div className="font-sans text-gray-700 bg-[#faf8f5]">
      <Header />

      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-800 via-rose-600 to-brand-400"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,183,39,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white uppercase tracking-wider mb-6 drop-shadow-lg">
            Dekorasi
          </h1>
          <div className="text-white/90 text-sm sm:text-base font-medium tracking-[0.2em] uppercase min-h-[2rem]"></div>
          <a
            href="#dekorasi"
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
        <section id="dekorasi" className="py-20 px-4" data-aos="fade-up">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">
                Dekorasi
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">
                Dekorasi
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dekorasiImages.map((img, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer bg-white"
                >
                  <img
                    src={img.src}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={img.label}
                  />
                  {img.label !== "Dekorasi" && (
                    <a
                      href={img.src}
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox preview-link"
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                    </a>
                  )}
                  {img.label === "Dekorasi" && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-semibold">{img.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="dekorasipartner"
          className="py-20 px-4 bg-white"
          data-aos="fade-up"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">
                Partnership
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">
                Partnership
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg hover:border-pink-200 transition-all duration-300"
                >
                  <div className="iframely-embed">
                    <div
                      className="iframely-responsive"
                      style={{ height: "140px", paddingBottom: 0 }}
                    >
                      <a
                        href={partner.href}
                        data-iframely-url={partner.dataUrl}
                      >
                        {partner.href}
                      </a>
                    </div>
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
