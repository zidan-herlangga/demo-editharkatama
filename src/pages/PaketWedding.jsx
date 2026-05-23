import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const packagesData = [
  { name: "Paket Wedding A", venue: "Hotel Horison Bekasi", price: 35000000, description: "Paket pernikahan lengkap dengan dekorasi, katering, dan dokumentasi.", image: "/assets/img/wedding-organizer-image/wedding-3.JPG" },
  { name: "Paket Wedding B", venue: "Park 5 Cilandak Hotel", price: 45000000, description: "Paket premium dengan venue mewah dan layanan eksklusif.", image: "/assets/img/wedding-organizer-image/wedding-5.JPG" },
  { name: "Paket Wedding C", venue: "SouthLake MGC", price: 25000000, description: "Paket ekonomis dengan fasilitas lengkap untuk acara intim.", image: "/assets/img/wedding-organizer-image/wedding-6.JPG" },
  { name: "Paket Wedding D", venue: "Hotel MaxOne", price: 30000000, description: "Paket standar dengan pilihan dekorasi fleksibel.", image: "/assets/img/wedding-organizer-image/wedding-7.JPG" },
];

const formatPrice = (price) =>
  price.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

export default function PaketWedding() {
  const [showWAModal, setShowWAModal] = useState(false);
  const [sortPrice, setSortPrice] = useState("default");
  const [sortVenue, setSortVenue] = useState("all");
  const [selectedPkg, setSelectedPkg] = useState(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Sacramento&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
    };
  }, []);

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

  return (
    <div className="font-sans text-gray-700 bg-[#faf8f5]">
      <Header />

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-rose-800 via-rose-600 to-brand-400">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,183,39,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 font-sacramento">Paket Wedding</h1>
          <p className="text-white/90 text-sm sm:text-base font-medium tracking-[0.2em] uppercase min-h-[2rem]"></p>
          <a href="#search-box" className="inline-block mt-12 animate-bounce">
            <img src="/assets/img/bx--chevron-down.png" alt="scroll" className="h-8 opacity-60 mx-auto" />
          </a>
        </div>
      </section>

      <main id="main">
        <section id="search-box" className="py-20 px-4">
          <div className="max-w-7xl mx-auto" id="container__packages">
            <div className="text-center mb-16 relative" data-aos="fade-up">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">Paket</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 -mt-7 relative z-10">Paket Wedding</h2>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-12" data-aos="fade-up">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-3">
                  <label htmlFor="sort-price" className="text-sm font-medium text-gray-700 whitespace-nowrap">Urutkan Harga:</label>
                  <select
                    id="sort-price"
                    value={sortPrice}
                    onChange={(e) => setSortPrice(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm bg-white focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition"
                  >
                    <option value="default">Pilih / Semua</option>
                    <option value="asc">Harga Terendah</option>
                    <option value="desc">Harga Tertinggi</option>
                  </select>
                </div>
                <div className="flex items-center gap-3">
                  <label htmlFor="sort-venue" className="text-sm font-medium text-gray-700 whitespace-nowrap">Filter Venue:</label>
                  <select
                    id="sort-venue"
                    value={sortVenue}
                    onChange={(e) => setSortVenue(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm bg-white focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition"
                  >
                    <option value="all">Pilih / Semua</option>
                    <option value="Hotel Horison Bekasi">Hotel Horison Bekasi</option>
                    <option value="Park 5 Cilandak Hotel">Park 5 Cilandak Hotel</option>
                    <option value="SouthLake MGC">SouthLake MGC</option>
                    <option value="Hotel MaxOne">Hotel MaxOne</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8" data-aos="fade-up">
              {filtered.map((pkg) => (
                <div
                  key={pkg.name}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedPkg(pkg)}
                >
                  <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <p className="text-brand-600 font-semibold text-lg">{formatPrice(pkg.price)}</p>
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

      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
        <button className="w-12 h-12 rounded-full bg-brand-400 text-white flex items-center justify-center shadow-lg hover:bg-brand-500 transition" title="Play Music">
          <i className="ri-music-line text-xl"></i>
        </button>
        <button onClick={() => setShowWAModal(true)} className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition" title="WhatsApp">
          <i className="ri-whatsapp-line text-xl"></i>
        </button>
      </div>

      <audio id="backgroundMusic" loop src="/assets/music/jinggle-edith.mp3"></audio>

      {selectedPkg && (
        <div id="exampleModal" className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setSelectedPkg(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h5 className="text-lg font-bold text-gray-800">{selectedPkg.name}</h5>
              <button onClick={() => setSelectedPkg(null)} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
                <i className="ri-close-line text-gray-500"></i>
              </button>
            </div>
            <div className="p-6">
              <img src={selectedPkg.image} alt={selectedPkg.name} className="w-full h-56 object-cover rounded-xl mb-4" />
              <h2 className="text-xl font-bold text-gray-800 mb-2">{selectedPkg.name}</h2>
              <p className="text-sm text-gray-500 mb-2"><i className="ri-map-pin-line"></i> {selectedPkg.venue}</p>
              <p className="text-lg font-bold text-brand-500 mb-4">{formatPrice(selectedPkg.price)}</p>
              <p className="text-gray-600 leading-relaxed">{selectedPkg.description}</p>
            </div>
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100">
              <a
                href={`https://wa.me/6282298066188?text=${encodeURIComponent(`Saya ingin membeli ${selectedPkg.name}. Harga ${formatPrice(selectedPkg.price)}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition"
              >
                Pesan Via WhatsApp
              </a>
              <button
                onClick={() => {
                  const text = `${selectedPkg.name}\nHarga: ${formatPrice(selectedPkg.price)}\nVenue: ${selectedPkg.venue}\nDeskripsi: ${selectedPkg.description}`;
                  navigator.clipboard.writeText(text);
                }}
                className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition"
              >
                Salin Teks
              </button>
            </div>
          </div>
        </div>
      )}

      {showWAModal && (
        <div id="whatsappModal" className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setShowWAModal(false)}>
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-800">Butuh bantuan? Hubungi kami</h3>
              <button onClick={() => setShowWAModal(false)} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
                <i className="ri-close-line text-gray-500"></i>
              </button>
            </div>
            <div className="p-6">
              <a href="https://api.whatsapp.com/send/?phone=6282298066188&text=Halo+kak.+Saya+mau+tanya%3F+&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition">
                <img src="/assets/img/vector-business-men-icon.jpg" alt="Indah Purnamasari" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-gray-800">Indah Purnamasari</p>
                  <p className="text-sm text-gray-500">Klik untuk chat</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
