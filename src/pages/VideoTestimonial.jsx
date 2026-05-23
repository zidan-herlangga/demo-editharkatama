import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MusicButton from '../components/MusicButton';

const videoEmbeds = [
  'https://drive.google.com/file/d/1PEaMQyo1vH8PuD6ExbMQicBh1urJlHh7/preview',
  'https://drive.google.com/file/d/1sli7gfwdYjGoL1flwKshW2Pzkf2kU6Dg/preview',
  'https://drive.google.com/file/d/1Qv8i0PcE28YCDyQcQL-F7Z-73XObxJpH/preview',
  'https://drive.google.com/file/d/1SKFNdKD8-VJaux-1c_8K1kVcS3JGvhoq/preview',
  'https://drive.google.com/file/d/1VZI7ot2SF9j7pEZBTEQqJi1c1b5g0QLN/preview',
];

export default function VideoTestimonial() {

  return (
    <div className="font-sans text-gray-700 bg-[#faf8f5]">
      <Header />

      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-emerald-800 via-green-600 to-brand-400"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,183,39,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white uppercase tracking-wider mb-6 drop-shadow-lg">
            Video Testimonial
          </h1>
          <div className="text-white/90 text-sm sm:text-base font-medium tracking-[0.2em] uppercase min-h-[2rem]"></div>
          <a
            href="#video-testimonial"
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
        <section id="video-testimonial" className="py-20 px-4" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 uppercase block leading-none">
                Testimonial
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase -mt-7 relative z-10">
                Testimonial
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {videoEmbeds.map((src, idx) => (
                <div
                  key={idx}
                  className={`shadow-md bg-white p-1 rounded-xl ${idx === videoEmbeds.length - 1 ? 'md:col-span-2 max-w-2xl mx-auto' : ''}`}
                >
                  <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '0.75rem' }}>
                    <iframe
                      src={src}
                      className="absolute top-0 left-0 w-full h-full"
                      style={{ borderRadius: '0.75rem' }}
                      frameBorder="0"
                      allowFullScreen
                      title={`Video Testimonial ${idx + 1}`}
                    ></iframe>
                  </div>
                </div>
              ))}
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
