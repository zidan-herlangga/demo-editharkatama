import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MusicButton from '../components/MusicButton';

const dayCards = [
  {
    day: 1,
    items: [
      'Perjalanan menuju Jogjakarta, kumpul di lokasi keberangkatan',
      'Menuju kota Jogjakarta jam 6 pagi',
      'Tiba di Jogja',
      'Check in hotel jam 7 malam',
      'Snack makan siang dan malam',
    ],
  },
  {
    day: 2,
    items: [
      'Peserta akan di ajak menikmati sarapan pagi',
      'Menuju objek wisata jeep merapi',
      'Menuju tempat oleh-oleh khas Jogja',
      'Farewell dinner di Aula Hotel Merapi Merbabu',
      'Makan pagi, siang, dan malam',
    ],
  },
  {
    day: 3,
    items: [
      'Peserta akan di ajak mengunjungi objek wisata',
      'Sarapan pagi',
      'Menuju goa Pindul',
      'Menuju hutan pinus',
      'Acara bebas di Malioboro',
      'Bermalam di perjalanan',
      'Makan Malam di Resto Raos Jogja',
      'Makan pagi, siang, dan malam',
    ],
  },
  {
    day: 4,
    items: [
      'Makan pagi',
      'Perjalanan pulang menuju kota asal',
    ],
  },
];

const facilities = [
  { icon: 'ri-hotel-line', title: 'Hotel Bintang 4', items: ['Hotel Merapi Merbabu', 'Aula kegiatan untuk kapasitas ±200 orang', 'Parkir bus dan mobil'] },
  { icon: 'ri-camera-line', title: 'Foto', items: ['Dokumentasi kegiatan perjalanan'] },
  { icon: 'ri-medicine-bottle-line', title: 'P3K', items: ['Obat-obatan selama dalam perjalanan'] },
  { icon: 'ri-ticket-line', title: 'Ticket', items: ['Free Ticket Masuk Objek Wisata yang telah di Jadwalkan'] },
  { icon: 'ri-restaurant-line', title: 'Makanan', items: ['Pagi, Siang, Malam sebanyak 9x (dalam bentuk box dan prasmanan)'] },
  { icon: 'ri-cup-line', title: 'Air', items: ['Minuman Mineral Botol stand by setiap hari'] },
  { icon: 'ri-file-text-line', title: 'Spanduk', items: ['Tema acara kegiatan dan nama Sekolah serta tujuan perjalanan'] },
  { icon: 'ri-user-star-line', title: 'Tour Leader', items: ['Pemandu acara tour dari awal sampai dengan selesai kegiatan', 'Crew Event Organizer / Tour Leader stand by 3 orang'] },
  { icon: 'ri-shield-check-line', title: 'Asuransi', items: ['Perjalanan tour sudah dilengkapi dengan asuransi perjalanan untuk masing-masing peserta tour'] },
];

export default function Akomodasi() {

  return (
    <div className="font-sans text-gray-700 bg-[#faf8f5]">
      <Header />

      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-teal-800 via-emerald-600 to-brand-400"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,183,39,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white uppercase tracking-wider mb-6 drop-shadow-lg">
            Akomodasi
          </h1>
          <div className="text-white/90 text-sm sm:text-base font-medium tracking-[0.2em] uppercase min-h-[2rem]"></div>
          <a
            href="#akomodasi"
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
        <section id="akomodasi" className="py-20 px-4" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">
                Timeline
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">
                Timeline
              </h2>
              <p className="text-gray-500 mt-2">Timeline Jogjakarta</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[0, 1].map((colIdx) => (
                <div key={colIdx} className="space-y-8">
                  {dayCards.filter((_, i) => i % 2 === colIdx).map((card) => (
                    <div
                      key={card.day}
                      className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg hover:border-teal-200 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                          <span className="text-teal-600 font-bold text-lg">{card.day}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Day {card.day}</h3>
                      </div>
                      <ul className="space-y-3">
                        {card.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <i className="ri-time-line text-teal-500 mt-1"></i>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">
                Fasilitas
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">
                Fasilitas Kegiatan
              </h2>
            </div>

            <div className="max-w-4xl mx-auto bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl shadow-sm border border-teal-100 p-8 lg:p-10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {facilities.map((fac, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-5 shadow-sm border border-teal-50 hover:shadow-md transition"
                  >
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mb-3">
                      <i className={`${fac.icon} text-teal-600`}></i>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{fac.title}</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {fac.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
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
