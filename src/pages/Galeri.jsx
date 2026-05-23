import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';



const filterItems = [
  { label: "All", value: "*" },
  { label: "Wisuda", value: "wisuda" },
  { label: "Pengantin", value: "pernikahan" },
];

const portfolioImages = [
  { category: "wisuda", src: "/assets/img/event-organizer-image/image-1.jpeg", title: "Wisuda", subtitle: "Image 1" },
  { category: "wisuda", src: "/assets/img/event-organizer-image/image-2.jpeg", title: "Wisuda", subtitle: "Image 2" },
  { category: "wisuda", src: "/assets/img/event-organizer-image/image-3.jpeg", title: "Wisuda", subtitle: "Image 3" },
  { category: "wisuda", src: "/assets/img/event-organizer-image/image-4.jpeg", title: "Wisuda", subtitle: "Image 4" },
  { category: "wisuda", src: "/assets/img/event-organizer-image/image-5.jpeg", title: "Wisuda", subtitle: "Image 5" },
  { category: "wisuda", src: "/assets/img/event-organizer-image/image-6.jpeg", title: "Wisuda", subtitle: "Image 6" },
  { category: "wisuda", src: "/assets/img/event-organizer-image/image-7.jpeg", title: "Wisuda", subtitle: "Image 7" },
  { category: "wisuda", src: "/assets/img/event-organizer-image/image-8.jpeg", title: "Wisuda", subtitle: "Image 8" },
  { category: "wisuda", src: "/assets/img/event-organizer-image/image-9.jpeg", title: "Wisuda", subtitle: "Image 9" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (1).jpeg", title: "Pengantin", subtitle: "Image 1" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (1).jpg", title: "Pengantin", subtitle: "Image 1" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (2).jpeg", title: "Pengantin", subtitle: "Image 2" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (2).jpg", title: "Pengantin", subtitle: "Image 2" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (3).jpeg", title: "Pengantin", subtitle: "Image 3" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (3).jpg", title: "Pengantin", subtitle: "Image 3" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (4).jpeg", title: "Pengantin", subtitle: "Image 4" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (4).jpg", title: "Pengantin", subtitle: "Image 4" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (5).jpeg", title: "Pengantin", subtitle: "Image 5" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (5).jpg", title: "Pengantin", subtitle: "Image 5" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (6).jpeg", title: "Pengantin", subtitle: "Image 6" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (6).jpg", title: "Pengantin", subtitle: "Image 6" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (7).jpeg", title: "Pengantin", subtitle: "Image 7" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (7).jpg", title: "Pengantin", subtitle: "Image 7" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (8).jpeg", title: "Pengantin", subtitle: "Image 8" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (8).jpg", title: "Pengantin", subtitle: "Image 8" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (9).jpeg", title: "Pengantin", subtitle: "Image 9" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (9).jpg", title: "Pengantin", subtitle: "Image 9" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (10).jpeg", title: "Pengantin", subtitle: "Image 10" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (11).jpeg", title: "Pengantin", subtitle: "Image 11" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (15).jpg", title: "Pengantin", subtitle: "Image 15" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (16).jpg", title: "Pengantin", subtitle: "Image 16" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (17).jpg", title: "Pengantin", subtitle: "Image 17" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (18).jpg", title: "Pengantin", subtitle: "Image 18" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/pengantin (19).jpg", title: "Pengantin", subtitle: "Image 19" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/p-1.jpg", title: "Pengantin", subtitle: "P-1" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/p-2.jpg", title: "Pengantin", subtitle: "P-2" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/wedding-3.JPG", title: "Pengantin", subtitle: "Wedding 3" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/wedding-5.JPG", title: "Pengantin", subtitle: "Wedding 5" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/wedding-6.JPG", title: "Pengantin", subtitle: "Wedding 6" },
  { category: "pernikahan", src: "/assets/img/wedding-organizer-image/wedding-7.JPG", title: "Pengantin", subtitle: "Wedding 7" },
];

export default function Galeri() {
  const [activeFilter, setActiveFilter] = useState("*");


  const filteredImages =
    activeFilter === "*"
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === activeFilter);

  return (
    <div className="font-sans text-gray-700 bg-[#faf8f5]">
      <Header />

      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-800 via-purple-600 to-brand-400"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,183,39,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white uppercase tracking-wider mb-6 drop-shadow-lg">
            Galeri
          </h1>
          <div className="text-white/90 text-sm sm:text-base font-medium tracking-[0.2em] uppercase min-h-[2rem]"></div>
          <a
            href="#galeri"
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
        <section id="galeri" className="py-20 px-4" data-aos="fade-up">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">
                Galeri
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">
                Galeri
              </h2>
              <p className="text-gray-600 mt-4">
                Untuk Harga{" "}
                <strong className="font-bold">Photobooth & Videobooth</strong>{" "}
                <Link
                  to="/fotografi"
                  className="text-brand-500 hover:text-brand-600 transition underline"
                >
                  Klik Disini.
                </Link>
              </p>
            </div>

            <ul
              id="portfolio-flters"
              className="flex justify-center gap-2 mb-12"
            >
              {filterItems.map((item) => (
                <li
                  key={item.value}
                  data-filter={item.value}
                  onClick={() => setActiveFilter(item.value)}
                  className={`px-5 py-2.5 rounded-lg font-medium cursor-pointer transition shadow-sm ${
                    activeFilter === item.value
                      ? "bg-brand-400 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-brand-200"
                  }`}
                >
                  {item.label}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 portfolio-container">
              {filteredImages.map((img, index) => (
                <div
                  key={index}
                  className={`portfolio-item filter-${img.category}`}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-md group bg-white">
                    <img
                      src={img.src}
                      className="w-full h-64 object-cover"
                      alt={img.subtitle}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-5">
                      <div>
                        <h4 className="text-white font-bold text-lg">
                          {img.title}
                        </h4>
                        <p className="text-white/80 text-sm">{img.subtitle}</p>
                      </div>
                    </div>
                    <div
                      className={`absolute top-3 ${
                        img.category === "wisuda" ? "right-3 flex gap-2" : "right-3"
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    >
                      <a
                        href={img.src}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox preview-link w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-700 hover:bg-brand-400 hover:text-white transition shadow-md"
                        title={img.subtitle}
                      >
                        <i className="ri-add-line text-lg"></i>
                      </a>
                      {img.category === "wisuda" && (
                        <a
                          href={img.src}
                          className="details-link w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-700 hover:bg-brand-400 hover:text-white transition shadow-md"
                          title="More Details"
                        >
                          <i className="ri-external-link-line text-lg"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
