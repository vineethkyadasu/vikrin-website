export default function Footer() {
  return (
    <footer className="bg-[#1F3CAB] text-white py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Vikrin</h3>
          <p>Building solutions that matter. Let’s talk.</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p>Email: <a href="mailto:contact@vikrin.com" className="underline">contact@vikrin.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/919177754434" className="underline">+91 91777 54434</a></p>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Vikrin. All rights reserved.
      </div>
    </footer>
  );
}