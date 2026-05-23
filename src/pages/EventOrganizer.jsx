import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';





const packagesData = [
  {
    name: "Paket A",
    venue: "venue1",
    price: 10000000,
    description: "",
    image: "/assets/img/event-organizer-image/paket-eo-1.jpeg",
  },
  {
    name: "Paket B",
    venue: "venue2",
    price: 20000000,
    description: "",
    image: "/assets/img/event-organizer-image/paket-eo.jpg",
  },
  {
    name: "Paket C",
    venue: "venue3",
    price: 15000000,
    description: "",
    image: "/assets/img/event-organizer-image/paket-eo-1.jpeg",
  },
  {
    name: "Paket D",
    venue: "venue1",
    price: 25000000,
    description: "",
    image: "/assets/img/event-organizer-image/paket-eo.jpg",
  },
  {
    name: "Paket E",
    venue: "venue2",
    price: 18000000,
    description: " ",
    image: "/assets/img/event-organizer-image/paket-eo-1.jpeg",
  },
];

const formatPrice = (price) =>
  price.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

export default function EventOrganizer() {
  const [sortPrice, setSortPrice] = useState("default");
  const [sortVenue, setSortVenue] = useState("all");
  const [modalPkg, setModalPkg] = useState(null);




  const getFilteredPackages = () => {
    let filtered = packagesData.filter(
      (pkg) => sortVenue === "all" || pkg.venue === sortVenue
    );
    if (sortPrice === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortPrice === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }
    return filtered;
  };

  const filtered = getFilteredPackages();

  const openModal = (pkg) => setModalPkg(pkg);
  const closeModal = () => setModalPkg(null);

  return (
    <div className="font-sans text-gray-700 bg-[#faf8f5]">
      <Header />

      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-600 to-brand-400"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,183,39,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="hero-container text-center relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-wider mb-4">
            EVENT ORGANIZER
          </h1>
          <div className="text-white/90 text-sm sm:text-base font-medium tracking-[0.2em] uppercase min-h-[2rem]"></div>
          <a
            href="#search-box"
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
        <section id="search-box" className="py-20 px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 relative" data-aos="fade-up">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">
                Paket Event
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">
                Paket Event
              </h2>
            </div>
            <div className="filter-container bg-brand-50 flex items-center justify-center p-6 rounded-xl" data-aos="fade-up">
              <div className="search-filter-container">
                <div className="flex flex-wrap gap-4 items-center">
                  <label
                    htmlFor="sort-price"
                    className="text-gray-700 font-medium"
                  >
                    Urutkan Harga:
                  </label>
                  <select
                    id="sort-price"
                    value={sortPrice}
                    onChange={(e) => setSortPrice(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none"
                  >
                    <option value="default">Semua</option>
                    <option value="asc">Harga Terendah</option>
                    <option value="desc">Harga Tertinggi</option>
                  </select>
                  <label
                    htmlFor="sort-venue"
                    className="text-gray-700 font-medium"
                  >
                    Filter Venue:
                  </label>
                  <select
                    id="sort-venue"
                    value={sortVenue}
                    onChange={(e) => setSortVenue(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none"
                  >
                    <option value="all">Semua</option>
                    <option value="venue1">Venue 1</option>
                    <option value="venue2">Venue 2</option>
                    <option value="venue3">Venue 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div
              id="packages"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            >
              {filtered.map((pkg) => (
                <div
                  key={pkg.name}
                  className="package bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => openModal(pkg)}
                >
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-brand-600 font-semibold text-lg">
                      {formatPrice(pkg.price)}
                    </p>
                    <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                      <i className="ri-map-pin-line"></i> {pkg.venue}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {modalPkg && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h5 className="text-xl font-bold text-gray-800">
                {modalPkg.name}
              </h5>
              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
                aria-label="Close"
              >
                <i className="ri-close-line text-gray-500"></i>
              </button>
            </div>
            <div className="p-6">
              <img
                id="modal-image"
                src={modalPkg.image}
                alt={modalPkg.name}
                className="w-full h-auto mb-4 rounded-lg"
              />
              <h2 className="font-bold text-2xl text-gray-800 mb-2">
                {modalPkg.name}
              </h2>
              <p className="text-gray-500 mb-2">
                <i className="ri-map-pin-line"></i> Venue: {modalPkg.venue}
              </p>
              <p className="text-gray-700 font-semibold mb-2">
                Harga: {formatPrice(modalPkg.price)}
              </p>
              <p className="text-gray-600">
                {modalPkg.description || "\u00A0"}
              </p>
            </div>
            <div className="p-6 border-t border-gray-100">
              <a
                href={`https://wa.me/6282298066188?text=${encodeURIComponent(
                  `Saya ingin membeli ${modalPkg.name}. Harga ${formatPrice(
                    modalPkg.price
                  )}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg font-bold text-white transition"
                style={{ background: "rgb(93, 192, 36)" }}
              >
                Pesan Via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
