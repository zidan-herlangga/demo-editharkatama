import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const layananItems = [
  { label: 'Layanan Kami', to: '/#services' },
  { label: 'Penjualan Makanan dan Minuman', to: '/catering' },
  { label: 'Wedding Organizer', to: '/wo' },
  { label: 'Event Organizer', to: '/eo' },
  { label: 'Jasa Transportasi', to: '/transportasi' },
  { label: 'Fotografi', to: '/fotografi' },
  { label: 'Penyedia Akomodasi', to: '/akomodasi' },
  { label: 'Auto Detailing', to: '/auto-detailing' },
];

const galeriItems = [
  { label: 'Foto', to: '/galeri' },
  { label: 'Video', to: '/video-testimonial' },
  { label: 'Dekorasi', to: '/dekorasi' },
];

function NavLinks({ openDropdown, toggleDropdown, handleNavClick, navLinkClass, offcanvasLinkClass, dropdownLinkClass, isActive, mobile }) {
  const handleClick = (to) => {
    handleNavClick(to);
  };

  return (
    <>
      <Link
        to="/"
        onClick={() => handleClick('/')}
        className={mobile ? offcanvasLinkClass('/') : navLinkClass('/', true)}
      >
        Beranda
      </Link>

      <DropdownNav
        label="Layanan"
        name="layanan"
        items={layananItems}
        mobile={mobile}
        isOpen={openDropdown === 'layanan'}
        onToggle={toggleDropdown}
        onItemClick={handleClick}
        dropdownClass={dropdownLinkClass}
        isActive={isActive}
      />

      <DropdownNav
        label="Galeri"
        name="galeri"
        items={galeriItems}
        mobile={mobile}
        isOpen={openDropdown === 'galeri'}
        onToggle={toggleDropdown}
        onItemClick={handleClick}
        dropdownClass={dropdownLinkClass}
        isActive={isActive}
      />

      <a
        href="/#contact"
        onClick={(e) => {
          e.preventDefault();
          handleClick('/#contact');
        }}
        className={mobile ? offcanvasLinkClass('/#contact') : navLinkClass('/#contact', false)}
      >
        Kontak
      </a>
    </>
  );
}

function DropdownNav({ label, name, items, mobile, isOpen, onToggle, onItemClick, dropdownClass, isActive }) {
  return (
    <div className={`relative ${mobile ? '' : 'group'}`}>
      <button
        onClick={() => onToggle(name)}
        className={`flex items-center gap-1 w-full text-left ${
          mobile
            ? 'px-4 py-3 text-sm font-medium text-white/70 hover:text-white rounded-lg'
            : 'text-xs font-semibold uppercase tracking-wider px-3 py-2 text-white/80 hover:text-brand-400 transition-colors duration-300'
        }`}
      >
        {label}
        <i className={`ri-arrow-down-s-line text-xs transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>

      <div
        className={`${
          mobile
            ? `overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'
              }`
            : `absolute left-0 top-full min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-2`
        }`}
      >
        <ul className={`${mobile ? 'space-y-0.5 ml-4' : 'bg-white rounded-xl shadow-xl py-2 border border-gray-100'}`}>
          {items.map((item) => (
            <li key={item.label}>
              {item.to.startsWith('/#') ? (
                <a
                  href={item.to}
                  onClick={(e) => { e.preventDefault(); onItemClick(item.to); }}
                  className={mobile
                    ? 'block px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition'
                    : 'block px-4 py-2.5 text-sm text-gray-700 hover:text-brand-500 hover:bg-brand-50 transition'
                  }
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.to}
                  onClick={() => onItemClick(item.to)}
                  className={mobile
                    ? `block px-4 py-2.5 text-sm rounded-lg transition ${isActive(item.to) ? 'text-brand-400 bg-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'}`
                    : dropdownClass(item.to)
                  }
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const prevLocationRef = useRef(location);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (prevLocationRef.current !== location) {
      prevLocationRef.current = location;
      setOffcanvasOpen(false);
      setOpenDropdown(null);
      document.body.style.overflow = '';
    }
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = offcanvasOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [offcanvasOpen]);

  const isActive = (path) => {
    if (path.startsWith('/#')) return false;
    return location.pathname === path;
  };

  const handleNavClick = (to) => {
    setOffcanvasOpen(false);
    setOpenDropdown(null);
    if (to.startsWith('/#')) {
      const id = to.replace('/#', '');
      if (location.pathname === '/') {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navLinkClass = (path, isActivePath) => {
    const isActiveLink = isActivePath ? true : path === '/' ? location.pathname === '/' : isActive(path);
    return `relative text-xs font-semibold uppercase tracking-wider px-3 py-2 transition-colors duration-300 ${
      isActiveLink ? 'text-brand-400' : 'text-white/80 hover:text-brand-400'
    }`;
  };

  const offcanvasLinkClass = (path) => {
    const active = isActive(path);
    return `block px-4 py-3 text-sm font-medium transition-colors rounded-lg ${
      active ? 'text-brand-400 bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/5'
    }`;
  };

  const dropdownLinkClass = (path) => {
    const active = isActive(path);
    return `block px-4 py-2.5 text-sm transition ${
      active ? 'text-brand-500 bg-brand-50 font-semibold' : 'text-gray-700 hover:text-brand-500 hover:bg-brand-50'
    }`;
  };

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 h-20 ${
          scrolled
            ? 'bg-gray-900/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-gradient-to-b from-black/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/assets/img/logo-edith.webp"
              alt="CV. Edith Arkatama"
              className="h-14 sm:h-16 w-auto drop-shadow-lg"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <NavLinks
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              handleNavClick={handleNavClick}
              navLinkClass={navLinkClass}
              offcanvasLinkClass={offcanvasLinkClass}
              dropdownLinkClass={dropdownLinkClass}
              isActive={isActive}
            />
          </nav>

          <button
            className="lg:hidden relative z-[60] w-10 h-10 flex items-center justify-center text-white"
            onClick={() => setOffcanvasOpen(!offcanvasOpen)}
            aria-label="Toggle navigation"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 origin-center ${
                  offcanvasOpen ? 'rotate-45 translate-y-[9px]' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                  offcanvasOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 origin-center ${
                  offcanvasOpen ? '-rotate-45 -translate-y-[9px]' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[45] transition-all duration-500 ${
          offcanvasOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={() => setOffcanvasOpen(false)}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      <div
        className={`fixed top-0 right-0 z-[55] h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-out ${
          offcanvasOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
          <span className="text-white font-semibold tracking-wider text-sm uppercase">Menu</span>
          <button
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
            onClick={() => setOffcanvasOpen(false)}
            aria-label="Close menu"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-5rem)]">
          <NavLinks
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            handleNavClick={handleNavClick}
            navLinkClass={navLinkClass}
            offcanvasLinkClass={offcanvasLinkClass}
            dropdownLinkClass={dropdownLinkClass}
            isActive={isActive}
            mobile
          />
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <div className="flex justify-center gap-3">
            <a href="https://facebook.com/edithwoeo" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-400 hover:text-white transition-all">
              <i className="ri-facebook-fill text-sm"></i>
            </a>
            <a href="https://instagram.com/edithwoeo" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-400 hover:text-white transition-all">
              <i className="ri-instagram-line text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
