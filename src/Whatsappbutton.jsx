// src/WhatsAppButton.jsx
import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/256785135000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      💬
    </a>
  );
};

export default WhatsAppButton;
