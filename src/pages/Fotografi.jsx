
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MusicButton from '../components/MusicButton';



export default function Fotografi() {

  return (
    <div className="font-sans text-gray-700 bg-[#faf8f5]">
      <Header />

      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-800 via-indigo-600 to-brand-400"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,183,39,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white uppercase tracking-wider mb-6 drop-shadow-lg">
            Photography
          </h1>
          <div className="text-white/90 text-sm sm:text-base font-medium tracking-[0.2em] uppercase min-h-[2rem]"></div>
          <a
            href="#photography"
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
        <section id="photography" className="py-20 px-4" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">
                Photography
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">
                Photography
              </h2>
              <p className="text-gray-500 mt-2">Photo Session</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg hover:border-indigo-200 transition-all duration-300">
                <h4 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-indigo-400 uppercase">Service</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 py-2 border-b border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    <span className="text-gray-600">2 Jam</span>
                  </li>
                  <li className="flex items-center gap-3 py-2 border-b border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    <span className="text-gray-600">3 Jam</span>
                  </li>
                  <li className="flex items-center gap-3 py-2 border-b border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    <span className="text-gray-600">4 Jam</span>
                  </li>
                  <li className="flex items-center gap-3 py-2 border-b border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    <span className="text-gray-600">5 Jam</span>
                  </li>
                  <li className="flex items-center gap-3 py-2 border-b border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    <span className="text-gray-600">6 Jam</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg hover:border-indigo-200 transition-all duration-300">
                <h4 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-indigo-400 uppercase">Price</h4>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">2 Jam</span>
                    <span className="font-bold text-indigo-600">2.300 K</span>
                  </li>
                  <li className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">3 Jam</span>
                    <span className="font-bold text-indigo-600">2.800 K</span>
                  </li>
                  <li className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">4 Jam</span>
                    <span className="font-bold text-indigo-600">3.300 K</span>
                  </li>
                  <li className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">5 Jam</span>
                    <span className="font-bold text-indigo-600">3.800 K</span>
                  </li>
                  <li className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">6 Jam</span>
                    <span className="font-bold text-indigo-600">4.300 K</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold text-gray-800 mb-3">Includes:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-600"><i className="ri-check-line text-green-500"></i>Operator Photoboth</li>
                    <li className="flex items-center gap-2 text-gray-600"><i className="ri-check-line text-green-500"></i>Setup Box Selfiebooth</li>
                    <li className="flex items-center gap-2 text-gray-600"><i className="ri-check-line text-green-500"></i>Ligthing + Softbox</li>
                    <li className="flex items-center gap-2 text-gray-600"><i className="ri-check-line text-green-500"></i>Properti Photobooth</li>
                    <li className="flex items-center gap-2 text-gray-600"><i className="ri-check-line text-green-500"></i>Link GDrive</li>
                    <li className="flex items-center gap-2 text-gray-600"><i className="ri-check-line text-green-500"></i>Transport</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-indigo-200 text-center">
                <a href="https://instagram.com/nineties_photoworks" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-bold text-lg transition">
                  <i className="ri-instagram-line text-2xl"></i> NINETIES Photowork
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="spin-booth" className="py-20 px-4 bg-white" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">360 Spin Boot</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">360 Spin Video Booth</h2>
              <p className="text-gray-500 mt-2">Video Session</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg hover:border-purple-200 transition-all duration-300">
                <h4 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-purple-400 uppercase">Service</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 py-2 border-b border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    <span className="text-gray-600">2-3 Jam</span>
                  </li>
                  <li className="flex items-center gap-3 py-2 border-b border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    <span className="text-gray-600">4 Jam</span>
                  </li>
                  <li className="flex items-center gap-3 py-2 border-b border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    <span className="text-gray-600">5 Jam</span>
                  </li>
                  <li className="flex items-center gap-3 py-2 border-b border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    <span className="text-gray-600">6 Jam</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg hover:border-purple-200 transition-all duration-300">
                <h4 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-purple-400 uppercase">Price</h4>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">2-3 Jam</span>
                    <span className="font-bold text-purple-600">IDR 2.200.000</span>
                  </li>
                  <li className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">4 Jam</span>
                    <span className="font-bold text-purple-600">IDR 2.700.000</span>
                  </li>
                  <li className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">5 Jam</span>
                    <span className="font-bold text-purple-600">IDR 3.200.000</span>
                  </li>
                  <li className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">6 Jam</span>
                    <span className="font-bold text-purple-600">IDR 3.700.000</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100">
              <h5 className="font-bold text-gray-800 mb-3">Includes:</h5>
              <div className="grid sm:grid-cols-2 gap-2">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600"><i className="ri-check-line text-green-500"></i>Unlimited Videobooth</li>
                  <li className="flex items-center gap-2 text-gray-600"><i className="ri-check-line text-green-500"></i>Spinner kapasitas 6 orang</li>
                  <li className="flex items-center gap-2 text-gray-600"><i className="ri-check-line text-green-500"></i>2 Crew</li>
                  <li className="flex items-center gap-2 text-gray-600"><i className="ri-check-line text-green-500"></i>Ipad sharing Station</li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600"><i className="ri-check-line text-green-500"></i>Music Video</li>
                  <li className="flex items-center gap-2 text-gray-600"><i className="ri-check-line text-green-500"></i>Air drop, QR Code</li>
                  <li className="flex items-center gap-2 text-gray-600"><i className="ri-check-line text-green-500"></i>Design Template</li>
                  <li className="flex items-center gap-2 text-gray-600"><i className="ri-check-line text-green-500"></i>Video Lighting</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-purple-200 text-center">
                <a href="https://instagram.com/asta.moto" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-bold text-lg transition">
                  <i className="ri-instagram-line text-2xl"></i> @asta.moto
                </a>
                <p className="text-gray-500 text-sm mt-2">Photobooth & 360 Spin Videobooth</p>
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
