import { useState } from 'react';

export default function WhatsAppButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition"
        title="WhatsApp"
      >
        <i className="ri-whatsapp-line text-xl" />
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-800">Butuh bantuan? Hubungi kami</h3>
              <button
                onClick={() => setShowModal(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
              >
                <i className="ri-close-line text-gray-500" />
              </button>
            </div>
            <div className="p-6">
              <a
                href="https://api.whatsapp.com/send/?phone=6282298066188&text=Halo+kak.+Saya+mau+tanya%3F+&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition"
              >
                <img
                  src="/assets/img/vector-business-men-icon.jpg"
                  alt="Indah Purnamasari"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">Indah Purnamasari</p>
                  <p className="text-sm text-gray-500">Klik untuk chat</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
