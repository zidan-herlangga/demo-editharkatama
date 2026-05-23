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

export default function WeddingOrganizer() {
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [showPackageModal, setShowPackageModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
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
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 font-sacramento">WEDDING ORGANIZER</h1>
          <p className="text-white/90 text-sm sm:text-base font-medium tracking-[0.2em] uppercase min-h-[2rem]"></p>
          <a href="#about-wedding" className="inline-block mt-12 animate-bounce">
            <img src="/assets/img/bx--chevron-down.png" alt="scroll" className="h-8 opacity-60 mx-auto" />
          </a>
        </div>
      </section>

      <main id="main">
        <section id="about-wedding" className="py-20 px-4" data-aos="fade-up">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none font-sacramento">W O</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 -mt-7 relative z-10 font-sacramento">Wedding Organizer</h2>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12" data-aos="fade-up">
              <div className="grid lg:grid-cols-2">
                <div className="grid grid-cols-2 gap-2 p-2">
                  <img src="https://media.istockphoto.com/id/491391396/photo/venice.webp?b=1&s=170667a&w=0&k=20&c=7gH3XMfWu03i23eKcnV2sdZHskShYMNg4K8h2sdahGc=" alt="Pre Wedding" className="w-full h-64 object-cover rounded-xl" />
                  <img src="https://media.istockphoto.com/id/509350271/photo/aerial-view-of-venice-with-saint-marks-square.webp?b=1&s=170667a&w=0&k=20&c=FBlGybz-Bz4NGww-sUW1gxbVDs--MS4ep_hJ3FtnoeU=" alt="Pre Wedding" className="w-full h-64 object-cover rounded-xl" />
                  <img src="https://plus.unsplash.com/premium_photo-1677048147217-cf7d944ef2d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a290YSUyMFZlbmVzaWF8ZW58MHx8MHx8fDA%3D" alt="Pre Wedding" className="w-full h-64 object-cover rounded-xl" />
                  <div className="w-full h-64 rounded-xl bg-gradient-to-br from-rose-50 to-brand-50 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Photography</p>
                      <h3 className="text-2xl font-bold text-gray-800 font-sacramento">Pre Wedding</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold text-rose-600 uppercase tracking-widest">Photography</span>
                      <span className="w-8 h-px bg-rose-200"></span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6 font-sacramento">Pre Wedding</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      Pasangan yang akan menikah untuk foto <i>prewedding</i>, biasanya memilih tema tertentu. Sesi foto prewedding dapat dilakukan di studio, di luar ruangan, hingga di kota-kota besar di seluruh dunia. Calon pengantin bisa saja memakai gaun designer dan setelan khusus hingga menaiki gondola di kota Venesia untuk mendapatkan foto prewedding idaman.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12" data-aos="fade-up">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-10 flex items-center order-2 lg:order-1">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6 font-sacramento">Setup Akad Nikah</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      Akad nikah adalah acara inti dari seluruh rangkaian proses pernikahan. Akad nikah dimaknai sebagai perjanjian antara wali dari mempelai perempuan dengan mempelai laki-laki dengan paling sedikit dua orang saksi yang mencukupi syarat menurut syariat agama. Dengan adanya akat nikah, maka hubungan antara dua insan yang sudah bersepakat untuk hidup berumah tangga diresmikan di hadapan manusi dan Tuhan.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 p-2 order-1 lg:order-2">
                  <img src="/assets/img/dekorasi/setup4.jpg" alt="Setup Akad Nikah" className="w-full h-64 object-cover rounded-xl" />
                  <img src="/assets/img/dekorasi/setup5.jpg" alt="Setup Akad Nikah" className="w-full h-64 object-cover rounded-xl" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12" data-aos="fade-up">
              <div className="grid lg:grid-cols-2">
                <div className="grid grid-cols-2 gap-2 p-2">
                  <img src="/assets/img/dekorasi/pengantin-nasional.webp" alt="Pengantin Nasional" className="w-full h-48 object-cover rounded-xl" />
                  <img src="/assets/img/dekorasi/pengantin-nasional-2.webp" alt="Pengantin Nasional" className="w-full h-48 object-cover rounded-xl" />
                  <img src="/assets/img/dekorasi/pengantin-nasional-3.webp" alt="Pengantin Nasional" className="w-full h-48 object-cover rounded-xl" />
                </div>
                <div className="p-8 lg:p-10 flex items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 font-sacramento">Pengantin</h3>
                    <h4 className="text-2xl font-semibold text-brand-500 mb-6 font-sacramento">Nasional</h4>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      Konsep pesta pernikahan bisa beragam, apalagi dengan kekayaan tradisi dan budaya Indonesia yang memberikan banyak pilihan tatacara pernikahan serat makna, perpaduan budaya saat menikah menjadi pilihan model pernikahan utamanya di Jakarta, kami-pun memberikan warna dan pilihan bagi calon pengantin untuk budaya Nasional yang diinginkan oleh setiap calon pengantin.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12" data-aos="fade-up">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-10 flex items-center order-2 lg:order-1">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 font-sacramento">Pengantin</h3>
                    <h4 className="text-2xl font-semibold text-brand-500 mb-6 font-sacramento">Internasional</h4>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      Pernikahan dengan gaya Barat kini menjadi salah satu konsep pernikahan yang baru di kalangan modern, jika anda ingin pernikahan yang simple dan intimate. Konsep Internasional adalah jawaban yang tepat, meski terlihat simple, gaya internasional ini tetap terlihat mewah karena dekorasi yang disuguhkan biasanya minimalis, busana yang dikenakan-pun beragam menyesuaikan dengan tema acara yang akan anda usung di hari spesial anda.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 p-2 order-1 lg:order-2">
                  <img src="/assets/img/dekorasi/pengantin-internasional.jpg" alt="Pengantin Internasional" className="w-full h-48 object-cover rounded-xl" />
                  <img src="/assets/img/dekorasi/pengantin-internasional-2.jpg" alt="Pengantin Internasional" className="w-full h-48 object-cover rounded-xl" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12" data-aos="fade-up">
              <div className="grid lg:grid-cols-2">
                <div className="grid grid-cols-2 gap-2 p-2">
                  <img src="/assets/img/dekorasi/setup1.jpg" alt="Setup Pelaminan" className="w-full h-48 object-cover rounded-xl" />
                  <img src="/assets/img/dekorasi/setup2.jpg" alt="Setup Pelaminan" className="w-full h-48 object-cover rounded-xl" />
                  <img src="/assets/img/dekorasi/setup3.jpg" alt="Setup Pelaminan" className="w-full h-48 object-cover rounded-xl" />
                </div>
                <div className="p-8 lg:p-10 flex items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 font-sacramento">Setup</h3>
                    <h4 className="text-2xl font-semibold text-brand-500 mb-6 font-sacramento">Pelaminan</h4>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      Momen menakjubkan seperti ini, harus dilengkapi dengan dekorasi yang luar biasa bukan? Jadi pastikan untuk tidak melewatkan elemen-elemen ini untuk membuat latar belakang memikat yang akan melengkapi momen janji suci anda.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" data-aos="fade-up">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-10 flex items-center order-2 lg:order-1">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6 font-sacramento">Dekor Tenda</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      Pada acara pernikahan outdoor, tenda adalah salah satu media pesta yang paling penting. Oleh karena itu, tenda dekorasi memiliki lapisan warna warni yang diatur media pesta yang paling penting. Oleh karenanya para undangan yang hadir merasakan nyaman serta terkesan dihari spesial anda.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 p-2 order-1 lg:order-2">
                  <img src="/assets/img/dekorasi/dekorasi2.jpg" alt="Dekor Tenda" className="w-full h-48 object-cover rounded-xl" />
                  <img src="/assets/img/dekorasi/dekorasi3.jpg" alt="Dekor Tenda" className="w-full h-48 object-cover rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="custom-packages" className="py-20 px-4 bg-gray-900 text-white" data-aos="fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-sacramento">Pemesanan Custom</h2>
            <div className="w-16 h-1 bg-brand-400 mx-auto mb-8"></div>
            <p className="text-xl mb-4">
              Hubungi <i className="ri-whatsapp-line text-green-400"></i>{' '}
              <a href="https://api.whatsapp.com/send/?phone=6282298066188&text=Halo+kak.+Saya+mau+tanya%3F+&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="text-brand-400 hover:text-brand-300 transition">+62 822-9806-6188</a>
            </p>
            <p className="text-gray-400 mb-8">
              Terima kasih telah menghubungi kami! Kami senang mendengar bahwa Anda tertarik untuk melakukan pemesanan custom.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => setShowCustomForm(true)} className="px-8 py-3 bg-brand-400 text-gray-900 font-bold rounded-lg hover:bg-brand-300 transition shadow-lg">
                Buat pesanan custom
              </button>
              <button onClick={() => setShowSearch(!showSearch)} className="px-8 py-3 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition">
                Lihat Paket Wedding
              </button>
            </div>
          </div>
        </section>

        {showSearch && (
          <section id="search-box" className="py-20 px-4" data-aos="fade-up">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 relative">
                <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">Paket</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 -mt-7 relative z-10">Paket Wedding</h2>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-12">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <div className="flex items-center gap-3">
                    <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Urutkan Harga:</label>
                    <select
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
                    <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Filter Venue:</label>
                    <select
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {filtered.map((pkg) => (
                  <div
                    key={pkg.name}
                    className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => { setSelectedPkg(pkg); setShowPackageModal(true); }}
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
        )}
      </main>

      {showCustomForm && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setShowCustomForm(false)}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-800">Form Pemesanan Custom</h3>
              <button onClick={() => setShowCustomForm(false)} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
                <i className="ri-close-line text-gray-500"></i>
              </button>
            </div>
            <div className="p-6">
              <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap:</label>
                  <input type="text" id="fullName" name="fullName" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition" />
                </div>
                <div className="mb-4">
                  <label htmlFor="weddingDate" className="block text-sm font-medium text-gray-700 mb-1">Tanggal Pernikahan:</label>
                  <input type="date" id="weddingDate" name="weddingDate" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition" />
                </div>
                <div className="mb-4">
                  <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-700 mb-1">Tempat Acara:</label>
                  <input type="text" id="eventLocation" name="eventLocation" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition" />
                </div>
                <div className="mb-4">
                  <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-1">Jumlah Tamu:</label>
                  <input type="number" id="guestCount" name="guestCount" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition" />
                </div>
                <div className="mb-4">
                  <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-1">Tema atau Konsep:</label>
                  <input type="text" id="theme" name="theme" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition" />
                </div>
                <div className="mb-4">
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Anggaran Total:</label>
                  <input type="number" id="budget" name="budget" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition" />
                </div>
                <div className="mb-4">
                  <label htmlFor="specialMessage" className="block text-sm font-medium text-gray-700 mb-1">Pesan Khusus:</label>
                  <textarea id="specialMessage" name="specialMessage" rows="4" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition"></textarea>
                </div>
                <div className="flex items-start mb-6">
                  <input type="checkbox" id="confirmationCheck" name="confirmationCheck" required className="mt-1 h-4 w-4 text-brand-400 border-gray-300 rounded focus:ring-brand-400" />
                  <label htmlFor="confirmationCheck" className="ml-2 text-sm text-gray-600">
                    Saya telah memeriksa informasi yang saya masukkan dan memastikan semuanya benar.
                  </label>
                </div>
                <button type="submit" className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition shadow">
                  Kirim Pesanan
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {showPackageModal && selectedPkg && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setShowPackageModal(false)}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h5 className="text-xl font-bold text-gray-800">{selectedPkg.name}</h5>
              <button onClick={() => setShowPackageModal(false)} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition" aria-label="Close">
                <i className="ri-close-line text-gray-500"></i>
              </button>
            </div>
            <div className="p-6">
              <img src={selectedPkg.image} alt={selectedPkg.name} className="w-full h-auto mb-4 rounded-lg" />
              <h2 className="font-bold text-2xl text-gray-800 mb-2">{selectedPkg.name}</h2>
              <p className="text-gray-500 mb-2"><i className="ri-map-pin-line"></i> Venue: {selectedPkg.venue}</p>
              <p className="text-gray-700 font-semibold mb-2">Harga: {formatPrice(selectedPkg.price)}</p>
              <p className="text-gray-600">{selectedPkg.description}</p>
            </div>
            <div className="p-6 border-t border-gray-100">
              <a href={`https://wa.me/6282298066188?text=${encodeURIComponent(`Saya ingin membeli ${selectedPkg.name}. Harga ${formatPrice(selectedPkg.price)}.`)}`} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-lg font-bold text-white transition" style={{ background: "rgb(93, 192, 36)" }}>
                Pesan Via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
        <button className="w-12 h-12 rounded-full bg-brand-400 text-white flex items-center justify-center shadow-lg hover:bg-brand-500 transition" title="Play Music">
          <i className="ri-music-line text-xl"></i>
        </button>
        <button onClick={() => setShowWAModal(true)} className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition" title="WhatsApp">
          <i className="ri-whatsapp-line text-xl"></i>
        </button>
      </div>

      <audio id="backgroundMusic" loop src="/assets/music/jinggle-edith.mp3"></audio>

      {showWAModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setShowWAModal(false)}>
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
