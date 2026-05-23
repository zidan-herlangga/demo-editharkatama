import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import Catering from "./pages/Catering";
import WeddingOrganizer from "./pages/WeddingOrganizer";
import PaketWedding from "./pages/PaketWedding";
import EventOrganizer from "./pages/EventOrganizer";
import Transportasi from "./pages/Transportasi";
import Galeri from "./pages/Galeri";
import Dekorasi from "./pages/Dekorasi";
import Fotografi from "./pages/Fotografi";
import Akomodasi from "./pages/Akomodasi";
import AutoDetailing from "./pages/AutoDetailing";
import VideoTestimonial from "./pages/VideoTestimonial";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catering" element={<Catering />} />
      <Route path="/wo" element={<WeddingOrganizer />} />
      <Route path="/paket-wedding" element={<PaketWedding />} />
      <Route path="/eo" element={<EventOrganizer />} />
      <Route path="/transportasi" element={<Transportasi />} />
      <Route path="/galeri" element={<Galeri />} />
      <Route path="/dekorasi" element={<Dekorasi />} />
      <Route path="/fotografi" element={<Fotografi />} />
      <Route path="/akomodasi" element={<Akomodasi />} />
      <Route path="/auto-detailing" element={<AutoDetailing />} />
      <Route path="/video-testimonial" element={<VideoTestimonial />} />
      <Route path="*" element={
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-brand-400 mb-4">404</h1>
            <p className="text-xl mb-8">Halaman tidak ditemukan</p>
            <a href="/" className="px-6 py-3 bg-brand-400 text-gray-900 font-bold rounded-lg hover:bg-brand-300 transition">Kembali ke Beranda</a>
          </div>
        </div>
      } />
    </Routes>
  );
}
