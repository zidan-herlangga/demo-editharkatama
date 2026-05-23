import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MusicButton from '../components/MusicButton';



const sections = [
  { id: 'section-index', label: 'Best Buffe', number: 1 },
  { id: 'section-pondokan', label: 'Pondokan', number: 2 },
  { id: 'section-gubukan', label: 'Gubukan', number: 3 },
  { id: 'section-menubox', label: 'Menubox', number: 4 },
];

export default function Catering() {
  const [activeSection, setActiveSection] = useState('section-index');

  return (
    <div className="font-sans text-gray-700 bg-[#faf8f5]">
      <Header />

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-orange-800 via-amber-600 to-brand-400">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,183,39,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4">CATERING</h1>
          <p className="text-white/90 text-sm sm:text-base font-medium tracking-[0.2em] uppercase">Catering untuk Social Event • Catering Wedding • Corporate Catering</p>
          <a href="#section-index" className="inline-block mt-12 animate-bounce">
            <img src="/assets/img/bx--chevron-down.png" className="h-8 opacity-60 mx-auto" alt="scroll" />
          </a>
        </div>
      </section>

      <main id="main">
        {activeSection === 'section-index' && (
          <section className="py-20" id="section-index" data-aos="fade-up">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16 relative">
                <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none select-none">Best Buffe</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">Best Buffe</h2>
              </div>

              <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl font-bold bg-brand-400 text-white px-6 py-2 rounded-lg">A</span>
                  <h3 className="text-2xl font-heading font-bold text-gray-800">Buffe A</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-brand-300 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Menu Dasar</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Nasi putih</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Nasi goreng</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Kerupuk</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Aneka puding</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Air mineral</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Soup</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Baso</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Kymlo</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Ayam sosis jagung</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Soup ayam jagung</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Soup makaroni sosis</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Soup ayam sosis</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Daging</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>Dendeng balado basah</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>Daging teriyaki</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>Cah daging paprika</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Sayur</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Cah bihun / cah sohun</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Cah jagung muda sosis</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Gado-gado</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Asinan</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Buncis penang</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Selada bangkok</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Cah sayuran</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Ayam</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam teriyaki</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam goreng saus mentega</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Chicken roll komplit</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam bumbu bali</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam rica-rica</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam goreng suhati</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam bakar keacap</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam bakar tailwang</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Side Dish (Pilihan)</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>Nasi goreng ayam</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>Mie goreng</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>Bihun goreng</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>Soun goreng</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl font-bold bg-brand-400 text-white px-6 py-2 rounded-lg">B</span>
                  <h3 className="text-2xl font-heading font-bold text-gray-800">Buffe B</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-brand-300 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Menu Dasar</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Nasi putih</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Nasi goreng</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Kerupuk</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Aneka puding</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Aneka snack</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Aneka buah segar</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Aneka soft drink / juice</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Air mineral</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Soup</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Daging cincang</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Ayam telur puyuh</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Bakso kembang tahu</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Kymlo</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Tom Khai Gai Vegetable</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Soup makaroni sosis</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Soup ayam sosis</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Soup ayam jagung</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Ikan</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan asam manis</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan acar bumbu kuning</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan fillet saos mayonaise</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan saos Padang</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan saos Thai</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan Palumara</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan Pesmol</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Ayam</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam rica kemangi</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam panggang bumbu rujak</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam bumbu bali</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam goreng mentega</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam goreng suhati</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam goreng khuangfu</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam goreng madu</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam bakar kecap</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam goreng kalasan</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Sayur</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Acar kuning kacang goreng</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Capcay</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Asinan betawi</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Salad</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Kentang mustofa</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Buncis Penang</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Asinan Penganten</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Asinan padang</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Asinan bogor</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Selada bangkok</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Daging</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>Kreseng daging</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>Gepuk daging</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Side Dish (Pilihan)</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>Nasi goreng ayam</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>Mie goreng</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>Bihun goreng</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>Soun goreng</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl font-bold bg-brand-400 text-white px-6 py-2 rounded-lg">C</span>
                  <h3 className="text-2xl font-heading font-bold text-gray-800">Buffe C</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-brand-300 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Menu Dasar</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Nasi putih</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Nasi goreng</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Kerupuk</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Aneka puding</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Aneka snack</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Aneka buah segar</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Aneka soft drink / juice</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Air mineral</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Soup</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Baso ayam</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Ayam jamur</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Buntut tulang iga</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Tom kha gai vegetable</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Soup baso tahu</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Soup macaroni sosis</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Soup ayam jagung</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Soup ayam sosis</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Soup kimlo</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Daging</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>Daging lada hitam</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>Steak daging</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>Daging teriyaki</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>Daging rica-rica</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>Daging lapis surabaya</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>Bistik daging</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>Rendang daging</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Ayam</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam teriyaki</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Chicken paprika</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam kuluyuk nanas</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Sayur</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Sapo tahu</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Cah baso udang</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Cah kymlo kering</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Asinan</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Kentang mustofa</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Asinan jakarta</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Buncis penang</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Asinan penganten</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Asinan padang</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Asinan bogor</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Asinan sayuran</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Cah sayuran</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Selada bangkok</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Ikan</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan asam manis</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan acar bumbu kuning</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan fillet mayonaise</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan saos padang</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan saos thai</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan saos palumara</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan saos pesmol</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl font-bold bg-brand-400 text-white px-6 py-2 rounded-lg">D</span>
                  <h3 className="text-2xl font-heading font-bold text-gray-800">Buffe D</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-brand-300 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Menu Dasar</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Nasi putih</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Nasi goreng</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Kerupuk</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Aneka puding</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Aneka snack</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Aneka buah segar</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Aneka soft drink / juice</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Salad buah</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Air mineral</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Soup</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Kymlo</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Ayam makaroni</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Jagung manis</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Tom kha gai vegetable</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Soup baso tahu</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Soup macaroni sosis</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Soup ayam jagung</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>Soup ayam sosis</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Sayur</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Cah brokolli ayam</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Caj brokolli tahu</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Cah kailand daging</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Asinan jakarta</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Buncis penang</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Asinan penganten</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Asinan padang</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Asinan bogor</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Cah sayuran</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>Selada bangkok</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Daging</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>Rendang daging</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>Steak daging</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>Sambal goreng printil</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Ayam</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Chicken teriyaki</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam masak cabai hijau</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam saos mentega</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam goreng suhati</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam goreng khuangfu</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam bakar madu</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam bakar kecap</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Ayam goreng kalasan</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Ikan</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan fillet saos mayonaise</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan asam manis</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan saos padang</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan saos thai</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan palumara</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>Ikan pesmol</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Pilihan Pelengkap</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0"></span>Rujak buah potong / serut</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0"></span>Asinan buah sayur / sayur</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0"></span>Asinan salad</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0"></span>Kentang mustofa</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="font-bold text-brand-600 uppercase tracking-wider text-sm mb-4 pb-3 border-b border-gray-100">Side Dish (Pilihan)</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>Nasi goreng ayam</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>Mie goreng</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>Bihun goreng</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>Soun goreng</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-200 shadow-md">
                  <div className="flex items-center gap-3 mb-6">
                    <i className="ri-heart-line text-2xl text-brand-500"></i>
                    <h3 className="text-xl font-heading font-bold text-gray-800">Non Wedding</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="bg-white/70 rounded-xl p-5 border border-amber-100">
                      <strong className="text-brand-700 block mb-2">PESANAN MINIMAL 500 PORSI</strong>
                      <p className="text-gray-600 flex items-center gap-2"><i className="ri-gift-line text-brand-400"></i>Bonus : Ice cream 1 gallon</p>
                    </li>
                    <li className="bg-white/70 rounded-xl p-5 border border-amber-100">
                      <strong className="text-brand-700 block mb-2">PESANAN MINIMAL 600 PORSI</strong>
                      <p className="text-gray-600 flex items-center gap-2"><i className="ri-gift-line text-brand-400"></i>Ice cream 1 gallon</p>
                      <p className="text-gray-600 flex items-center gap-2 mt-1"><i className="ri-gift-line text-brand-400"></i>Buffe keluarga 50 porsi</p>
                    </li>
                    <li className="bg-white/70 rounded-xl p-5 border border-amber-100">
                      <strong className="text-brand-700 block mb-2">PESANAN MINIMAL 700 PORSI, BONUS</strong>
                      <p className="text-gray-600 flex items-center gap-2"><i className="ri-gift-line text-brand-400"></i>Ice cream 1 gallon</p>
                      <p className="text-gray-600 flex items-center gap-2 mt-1"><i className="ri-gift-line text-brand-400"></i>Buffe keluarga 50 porsi</p>
                      <p className="text-gray-600 flex items-center gap-2 mt-1"><i className="ri-gift-line text-brand-400"></i>Siomay 100 porsi</p>
                    </li>
                    <li className="bg-white/70 rounded-xl p-5 border border-amber-100">
                      <strong className="text-brand-700 block mb-2">PESANAN MINIMAL 800 - 900 PORSI, BONUS</strong>
                      <p className="text-gray-600 flex items-center gap-2"><i className="ri-gift-line text-brand-400"></i>Ice cream 1 gallon</p>
                      <p className="text-gray-600 flex items-center gap-2 mt-1"><i className="ri-gift-line text-brand-400"></i>Buffe keluarga 50 porsi</p>
                      <p className="text-gray-600 flex items-center gap-2 mt-1"><i className="ri-gift-line text-brand-400"></i>Siomay 100 porsi</p>
                      <p className="text-gray-600 flex items-center gap-2 mt-1"><i className="ri-gift-line text-brand-400"></i>Kambing guling 1 ekor</p>
                    </li>
                    <li className="bg-white/70 rounded-xl p-5 border border-amber-100">
                      <strong className="text-brand-700 block mb-2">PESANAN MINIMAL 1000 PORSI, BONUS</strong>
                      <p className="text-gray-600 flex items-center gap-2"><i className="ri-gift-line text-brand-400"></i>Ice cream 1 gallon</p>
                      <p className="text-gray-600 flex items-center gap-2 mt-1"><i className="ri-gift-line text-brand-400"></i>Buffe keluarga 50 porsi</p>
                      <p className="text-gray-600 flex items-center gap-2 mt-1"><i className="ri-gift-line text-brand-400"></i>Siomay 100 porsi</p>
                      <p className="text-gray-600 flex items-center gap-2 mt-1"><i className="ri-gift-line text-brand-400"></i>Kambing guling 2 ekor</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-brand-50 to-yellow-50 rounded-2xl p-8 border border-brand-200 shadow-md">
                  <div className="flex items-center gap-3 mb-6">
                    <i className="ri-restaurant-2-line text-2xl text-brand-500"></i>
                    <h3 className="text-xl font-heading font-bold text-gray-800">Hidangan Mini Buffe</h3>
                  </div>
                  <ul className="grid grid-cols-2 gap-2.5">
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Timbel parahiyangan</li>
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Nasi liwet</li>
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Nasi kuning / uduk</li>
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Nasi bakar</li>
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Lampau minang</li>
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Nasi gudeg komplit</li>
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Nasi pecel</li>
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Nasi jamblang</li>
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Sego ndeso</li>
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Nasi tumpeng</li>
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Nasi ulam bali</li>
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Nasi rawon</li>
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Nasi kapau</li>
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Aneka bubur</li>
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Nasi ayam penyet</li>
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Nasi goreng komplit</li>
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Lontong cap gomeh</li>
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Waroeng kopi</li>
                    <li className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2.5"><i className="ri-check-line text-brand-400 text-sm"></i>Aneka salad</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'section-pondokan' && (
          <section className="py-20" id="section-pondokan" data-aos="fade-up">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16 relative">
                <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none select-none">Pondokan</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">Pondokan</h2>
              </div>
              <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-brand-400 flex items-center justify-center mx-auto -mt-16 mb-6 shadow-lg">
                    <i className="ri-store-2-line text-white text-2xl"></i>
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-gray-800 text-center mb-8">Menu Pondokan</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Es doger / puter / ice cream</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 500,000 / galon</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Sate ayam</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 15,000 / porsi</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Sate padang</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 15,000 / porsi</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Sate kambing</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 20,000 / porsi</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Kambing guling + Lontong</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 2,500,000 / ekor</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Pempek palembang</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 15,000 / porsi</span></div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Zuppa soup</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 25,000 / porsi</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Crepes</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 20,000 / porsi</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Kebab</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 20,000 / porsi</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Dimsum</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 20,000 / porsi</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Lasagna</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 25,000 / porsi</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Martabak</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 15,000 / porsi</span></div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Spaghetti bolognese</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 20,000 / porsi</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Fettuccine carbonara</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 20,000 / porsi</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Macaroni schotel</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 25,000 / porsi</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Empal gentong</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 25,000 / porsi</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Soto betawi</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 25,000 / porsi</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Soto sulung / Betawi</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 20,000 / porsi</span></div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Soto makasar</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 25,000 / porsi</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Soto padang</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 25,000 / porsi</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Lontong cap gomeh</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 25,000 / porsi</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Bakso</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 15,000 / porsi</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Bakwan malang</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 15,000 / porsi</span></div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-brand-50 transition"><span className="capitalize text-gray-700">Siomay</span><span className="font-semibold text-brand-600 whitespace-nowrap ml-3">Rp 15,000 / porsi</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'section-gubukan' && (
          <section className="py-20" id="section-gubukan" data-aos="fade-up">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16 relative">
                <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none select-none">Gubukan</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">Gubukan</h2>
              </div>
              <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-brand-400 flex items-center justify-center mx-auto -mt-16 mb-6 shadow-lg">
                    <i className="ri-restaurant-line text-white text-2xl"></i>
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-gray-800 text-center mb-8">Menu Gubukan</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {[
                      'Aneka bubur', 'Aneka gorengan', 'Aneka salad', 'Aneka serabi',
                      'Bakwan malang', 'Bebek packing', 'Fusili lada hitam', 'Bubur ayam',
                      'Chicken gordon blue', 'Chicken steak', 'Chocolate fountain', 'Cotto makasar',
                      'Crepes', 'Dimsum', 'Empal cirebon', 'Es buah edith',
                      'Es cincau', 'Es doger', 'Es merah delima', 'Es podeng',
                      'Es palu buntung', 'Es pisang hijau', 'Fettucini bolognese', 'Fettucini carbonara',
                      'Kambing guling', 'Kebab bakar', 'Kebab mandarin', 'Kebab turki',
                      'Korean barbeque', 'Laksa betawi', 'Lampau minang', 'Lasagna beef',
                      'Lagsana vegetarian', 'Lontong cap gomeh', 'Macaroni schootle', 'Martabak telur',
                      'Martabak mini', 'Mie jawa', 'Mie bakso', 'Mie kangkung',
                      'Mie kocok', 'Nasi bakar', 'Nasi ayam penyet', 'Pastel tutup',
                      'Pastel madiun', 'Pempek', 'Penne saus tomat', 'Rawon komplit',
                      'Roasted beef', 'Roti kane / roti jala', 'Sagu aren bakar', 'Sate ayam',
                      'Sate kambing', 'Sate padang', 'Shabu shabu', 'Siomay',
                      'Sop iga', 'Soto ayam', 'Soto ambengan', 'Soto bandung',
                      'Soto banjar', 'Soto betawi', 'Soto gombong', 'Soto mie',
                      'Soto padang', 'Soto sulung', 'Sphageti bolognese', 'Sphageti carbonara',
                      'Steak ikan', 'Steamboat', 'Sukiyaki', 'Tahu campur',
                      'Tahu gejrot', 'Zuppa soup', 'Tahu pong', 'Tekwan',
                      'Tempura', 'Teriyaki beef / chicken', 'Tomyang', 'Tong seng',
                      'Tumpeng', 'Warkop / jajan pasar', 'Wedang ronde',
                    ].map((item, i) => (
                      <div key={i} className="bg-gray-50 rounded-xl px-5 py-3 capitalize text-gray-700 flex items-center gap-2 hover:bg-brand-50 transition">
                        <i className="ri-arrow-right-s-line text-brand-400"></i>{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'section-menubox' && (
          <section className="py-20" id="section-menubox" data-aos="fade-up">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16 relative">
                <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none select-none">Menubox</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">Menubox</h2>
              </div>

              <div className="mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <i className="ri-cake-3-line text-2xl text-brand-500"></i>
                  <h3 className="text-2xl font-heading font-bold text-gray-800">Snack Box</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-brand-300 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="text-lg font-bold text-gray-700 mb-4">Snack Box A</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>2 buah snack</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Air mineral gelas</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Permen</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Tissue</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="text-lg font-bold text-gray-700 mb-4">Snack Box B</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>3 buah snack</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Air mineral gelas</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Permen</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Tissue</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="text-lg font-bold text-gray-700 mb-4">Snack Box A (dengan crackers)</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>2 buah snack</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Air mineral gelas</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Permen</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Tissue</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Kripik crackers</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h4 className="text-lg font-bold text-gray-700 mb-4">Snack Box B (dengan crackers)</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>3 buah snack</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Air mineral gelas</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Permen</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Tissue</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Kripik crackers</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl px-6 py-4 mb-8">
                  <h3 className="text-2xl font-heading font-bold text-center" style={{ color: '#ca9532' }}>
                    <i className="ri-box-3-line mr-2"></i>NASI BOX
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition">
                    <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mb-4">
                      <span className="font-bold text-brand-600">A</span>
                    </div>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Nasi putih</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Ayam bakar / ayam saus mentega</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Sambal goreng hati kentang</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Osengan buncis / cah kangkung muda</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Kerupuk</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Buah pisang</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Air mineral</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Tissue & sendok</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition">
                    <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mb-4">
                      <span className="font-bold text-brand-600">B</span>
                    </div>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Nasi putih</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Ayam / daging</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Sambal goreng hati kentang</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Bihun goreng / telor pindang</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Capcay / cah jagung muda</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Kerupuk</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Buah pisang / jeruk</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Air mineral</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Tissue & sendok</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition">
                    <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mb-4">
                      <span className="font-bold text-brand-600">C</span>
                    </div>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Nasi putih</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Ayam / daging</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Sambal goreng hati kentang</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Bihun goreng / telor pindang</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Capcay / cah jagung muda</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Kerupuk</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Buah pisang / jeruk</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Air mineral</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></span>Tissue & sendok</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <div className="flex justify-center gap-3 pb-16">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            className={`px-6 py-2.5 rounded-full font-semibold transition shadow ${
              activeSection === s.id
                ? 'bg-brand-400 text-white shadow'
                : 'bg-gray-200 text-gray-700 hover:bg-brand-400 hover:text-white'
            }`}
          >
            {s.number} <span className="hidden sm:inline ml-1">{s.label}</span>
          </button>
        ))}
      </div>

      <WhatsAppButton />
      <MusicButton />
      <Footer />
    </div>
  );
}
