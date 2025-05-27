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
          <Link href="#testimonials" className="hover:text-blue-600">Testimonials</Link>
          <Link href="#contact" className="hover:text-blue-600">Contact</Link>
        </nav>
      </header>

      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <section className="text-center py-32 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Digital Powerhouse for Websites & Marketing
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-gray-300">
            Vikrin builds stunning websites and drives growth with cutting-edge digital marketing.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">
              Let's Talk
            </a>
            <a href="#portfolio" className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black">
              See Our Work
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Our Services</h2>

          <h3 className="text-2xl font-semibold mb-6 text-blue-700">Web Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {["E-Commerce", "Business Websites", "Custom Platforms"].map(title => (
              <div key={title} className="p-6 border rounded-xl shadow-md bg-white">
                <h4 className="text-xl font-semibold mb-2 text-blue-600">{title}</h4>
                <p className="text-gray-600">{`High-performance ${title.toLowerCase()} built with modern frameworks and UX best practices.`}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-blue-700">Digital Marketing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["SEO Optimization", "Social Media Management", "Performance Ads"].map(title => (
              <div key={title} className="p-6 border rounded-xl shadow-md bg-white">
                <h4 className="text-xl font-semibold mb-2 text-blue-600">{title}</h4>
                <p className="text-gray-600">{`Boost visibility and traffic with expert-level ${title.toLowerCase()}.`}</p>
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
                <img
                  src={`/projects/${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z-]/g, '')}.jpg`}
                  alt={title}
                  className="mb-4 rounded w-full h-48 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">A modern, responsive design tailored for conversion and performance.</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="py-20 bg-gray-100 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-10">Why Choose Vikrin?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {["Enterprise-Ready Code", "Modern UI/UX", "SEO Optimized", "Mobile First", "Speed Obsessed", "Client First Culture"].map(feature => (
                <div key={feature} className="p-6 bg-white rounded-xl border shadow-md hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">{feature}</h3>
                  <p className="text-gray-700 text-sm">We deliver on what matters most — design, performance, and results.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {["Vikrin transformed our online presence!", "Their SEO helped us double our leads.", "Beautiful, fast websites and great team.", "We love their ongoing support."].map((quote, index) => (
                <div key={index} className="p-6 bg-gray-50 border rounded-xl shadow">
                  <p className="text-gray-700 italic">“{quote}”</p>
                  <p className="mt-4 font-semibold text-blue-600">— Happy Client</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let’s Build Something Great</h2>
          <p className="text-xl mb-10 text-gray-700">Reach out today to schedule a free consultation and discuss your goals.</p>
          <a href="mailto:hello@vikrin.com" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700">
            Contact Us
          </a>
          <p className="mt-4 text-gray-500 text-sm">Or call us directly at <strong>+91 91777 54434</strong></p>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Vikrin.com. All rights reserved.
        </footer>
      </main>
    </>
  );
}