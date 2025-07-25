// components/FloatingContactButtons.js

import { Mail, MessageCircle } from "lucide-react";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
  href="mailto:contact@vikrin.com"
  className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
  aria-label="Email"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
</a>

      <a
  href="https://wa.me/919177754434"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
  aria-label="WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0012 0C5.37 0 0 5.38 0 12a11.87 11.87 0 001.7 6.14L0 24l6.29-1.65A11.9 11.9 0 0012 24c6.63 0 12-5.38 12-12a11.87 11.87 0 00-3.48-8.52zM12 22a9.9 9.9 0 01-5.06-1.39l-.36-.22-3.73.98.99-3.63-.23-.38A9.93 9.93 0 1122 12c0 5.52-4.48 10-10 10zm5.24-7.45c-.29-.14-1.71-.84-1.98-.93s-.46-.14-.65.15-.75.93-.92 1.12-.34.21-.63.07a8.1 8.1 0 01-2.39-1.64A9.55 9.55 0 019.1 11c-.18-.3-.02-.47.13-.62.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38 0-.53s-.65-1.56-.89-2.13c-.24-.56-.48-.48-.64-.49l-.55-.01c-.19 0-.5.07-.77.32A3.1 3.1 0 006.01 9c0 1.47 1.08 2.89 1.23 3.09.15.19 2.14 3.4 5.2 4.57.73.31 1.3.49 1.74.62.74.21 1.36.18 1.88.11.57-.08 1.72-.7 1.97-1.39.25-.68.25-1.26.18-1.38-.08-.13-.27-.21-.56-.35z" />
  </svg>
</a>
    </div>
  );
}

