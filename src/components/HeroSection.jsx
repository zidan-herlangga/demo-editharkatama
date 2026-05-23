import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const defaultStrings = [
  'Wedding & Event Organizer',
  'Jasa Transportasi Pariwisata',
  'Catering',
  'Make Up Artist',
  'Fotografi & Videografi',
];

export default function HeroSection({
  title,
  gradient = 'from-stone-800 via-amber-700 to-brand-400',
  subtitle,
  id = 'hero',
  scrollTarget = '#about',
  strings = defaultStrings,
}) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let charIndex = 0;
    const currentString = strings[textIndex];
    const typingInterval = setInterval(() => {
      charIndex++;
      setDisplayedText(currentString.slice(0, charIndex));
      if (charIndex >= currentString.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % strings.length);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [textIndex, strings]);

  const handleScrollClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(scrollTarget.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/' + scrollTarget);
    }
  };

  const renderLogo = () => {
    return (
      <img
        src="/assets/img/logo-edith.webp"
        alt="logo edith arkatama"
        className="w-64 sm:w-72 mx-auto mb-8 drop-shadow-2xl"
      />
    );
  };

  const renderContent = () => (
    <>
      {renderLogo()}
      <div className="text-white/90 text-sm sm:text-base font-medium tracking-[0.2em] uppercase min-h-[2rem]">
        {displayedText}
      </div>
      <a
        href={scrollTarget}
        onClick={handleScrollClick}
        className="inline-block mt-12 animate-bounce"
      >
        <img
          src="/assets/img/bx--chevron-down.png"
          alt="scroll"
          className="h-8 opacity-60"
        />
      </a>
    </>
  );

  if (title) {
    return (
      <section
        id={id}
        className={`min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br ${gradient}`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,183,39,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <a
            href={scrollTarget}
            onClick={handleScrollClick}
            className="inline-block mt-12 animate-bounce"
          >
            <img
              src="/assets/img/bx--chevron-down.png"
              alt="scroll"
              className="h-8 opacity-60"
            />
          </a>
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br ${gradient}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,183,39,0.12),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-center px-4">{renderContent()}</div>
    </section>
  );
}
