// components/FloatingContactButtons.js

import { Mail, MessageCircle } from "lucide-react";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href="mailto:contact@vikrin.com"
        className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-md flex items-center justify-center transition"
        title="Email Us"
      >
        <Mail className="w-6 h-6 text-blue-600" />
      </a>

      <a
        href="https://wa.me/919177754434"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-md flex items-center justify-center transition"
        title="WhatsApp Us"
      >
        <MessageCircle className="w-6 h-6 text-green-600" />
      </a>
    </div>
  );
}

