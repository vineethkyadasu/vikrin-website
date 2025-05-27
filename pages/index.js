import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <header className="flex items-center justify-between px-8 py-5 bg-white/90 backdrop-blur-lg shadow-md sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Vikrin Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold text-gray-900">Vikrin</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="#services" className="hover:text-blue-600">Services</Link>
          <Link href="#portfolio" className="hover:text-blue-600">Portfolio</Link>
          <Link href="#why-us" className="hover:text-blue-600">Why Us</Link>
          <Link href="#contact" className="hover:text-blue-600">Contact</Link>
        </nav>
      </header>

      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero Section Inspired by GrowthSchool */}
<section className="text-center py-32 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
  <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
    We Build Scalable, Stunning Websites
  </h1>
  <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-gray-300">
    From e-commerce and education to custom platforms — Vikrin delivers performance, design, and results.
  </p>
  <div className="flex justify-center space-x-4">
    <a href="#contact" className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">
      Get Started
    </a>
    <a href="#portfolio" className="bg-transparent border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black">
      See Our Work
    </a>
  </div>
</section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "E-Commerce", desc: "Custom online stores with full functionality and secure payment integration." },
              { title: "Education Platforms", desc: "Build scalable LMS platforms, school portals, or course hubs." },
              { title: "Business Websites", desc: "Professional sites tailored to your brand and business goals." },
              { title: "Personal Portfolios", desc: "Showcase your skills or resume with a beautifully crafted portfolio." },
              { title: "Landing Pages", desc: "Marketing and lead generation pages that convert." },
              { title: "Custom Platforms", desc: "Fully tailored web apps for complex or unique needs." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition">
                <h3 className="text-2xl font-semibold mb-3 text-blue-600">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-white px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Portfolio Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["E-Commerce Fashion Store", "Online Learning Portal", "Real Estate Listing Site", "Health Clinic Booking", "Personal Brand Portfolio", "Consulting Firm Site"].map((title, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 border rounded-xl p-6 shadow hover:shadow-xl transition"
              >
                <img src="/vercel.svg" alt="Project Screenshot" className="mb-4 rounded" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">A modern, responsive design tailored for conversion and performance.</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Vikrin Section */}
        <section id="why-us" className="py-20 bg-gray-100 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-10">Why Choose Vikrin?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { title: "Custom-Coded Excellence", desc: "We don't rely on templates — every line of code is crafted for your brand." },
                { title: "Enterprise Performance", desc: "Sites that load fast, scale easily, and never lag." },
                { title: "Responsive by Design", desc: "Every screen matters. Our sites look great on all devices." },
                { title: "Scalable Architecture", desc: "From one-pagers to full web platforms — we scale with you." },
                { title: "Ongoing Support", desc: "Launch is just the beginning. We’re here for maintenance and growth." },
                { title: "Trusted Technology", desc: "Built on Next.js, Vercel, Tailwind — trusted by the web’s best." }
              ].map(({ title, desc }) => (
                <div key={title} className="p-6 bg-white rounded-xl border shadow-md hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
                  <p className="text-gray-700 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let’s Build Your Website</h2>
          <p className="text-xl mb-10 text-gray-700">Reach out today to schedule a free consultation and get started.</p>
          <a
            href="mailto:hello@vikrin.com"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700"
          >
            Contact Us
          </a>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Vikrin.com. All rights reserved.
        </footer>
      </main>
    </>
  );
}