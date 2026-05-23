import { Link } from 'react-router-dom';

const services = [
  { label: 'Penjualan Makanan dan Minuman', to: '/catering' },
  { label: 'Wedding Organizer', to: '/wo' },
  { label: 'Event Organizer', to: '/eo' },
  { label: 'Jasa Transportasi', to: '/transportasi' },
  { label: 'Fotografi', to: '/fotografi' },
  { label: 'Penyedia Akomodasi', to: '/akomodasi' },
  { label: 'Auto Detailing', to: '/auto-detailing' },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="/assets/img/logo-edith.webp"
              alt="CV. Edith Arkatama"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              CV. Edith Arkatama melayani perusahaan kecil, menengah, dan perusahaan besar, baik swasta maupun pemerintahan sejak 2021.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-400 mb-4">Layanan</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.to}
                    className="text-gray-400 hover:text-brand-400 text-sm transition"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-400 mb-4">Galeri</h4>
            <ul className="space-y-2">
              <li><Link to="/galeri" className="text-gray-400 hover:text-brand-400 text-sm transition">Foto</Link></li>
              <li><Link to="/video-testimonial" className="text-gray-400 hover:text-brand-400 text-sm transition">Video</Link></li>
              <li><Link to="/dekorasi" className="text-gray-400 hover:text-brand-400 text-sm transition">Dekorasi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-400 mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line mt-0.5 text-brand-400"></i>
                Ruko Cemara Grand Boulevard Blok U6 No.15 Kota Harapan Indah, Kab. Bekasi
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-brand-400"></i>
                <a href="tel:+6282298066188" className="hover:text-brand-400 transition">+62 822-9806-6188</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-brand-400"></i>
                <a href="mailto:editharkatama@gmail.com" className="hover:text-brand-400 transition">editharkatama@gmail.com</a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="https://facebook.com/edithwoeo" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-400 hover:text-white transition">
                <i className="ri-facebook-fill text-sm"></i>
              </a>
              <a href="https://instagram.com/edithwoeo" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-400 hover:text-white transition">
                <i className="ri-instagram-line text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} <strong className="text-white">CV. Edith Arkatama</strong>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
