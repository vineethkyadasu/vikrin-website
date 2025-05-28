// pages/index.js
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, TrendingUp, Smartphone, Zap, Users } from 'lucide-react';

const services = [
  'E-Commerce Development',
  'Business Websites',
  'Custom Platforms',
  'SEO & Ads',
  'Lead Funnels',
  'Social Campaigns'
];

function AnimatedServiceCarousel({ items }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [items.length]);

  const getItem = (offset) => items[(index + offset + items.length) % items.length];

  return (
    <div className="relative h-48 flex items-center justify-center overflow-hidden">
      {[2, 1, 0, -1, -2].map((offset) => {
        const value = getItem(offset);
        const key = `${index}-${offset}`;
        const isMain = offset === 0;

        return (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.8, y: offset * 30 }}
            animate={{ opacity: isMain ? 1 : 0.3, scale: isMain ? 1.15 : 0.9, y: offset * 30 }}
            exit={{ opacity: 0, scale: 0.8, y: offset * 30 }}
            transition={{ duration: 0.6 }}
            className={`absolute text-center ${
              isMain ? 'text-2xl md:text-3xl font-bold text-white' : 'text-sm md:text-base text-slate-300'
            }`}
          >
            {value}
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <header className="flex items-center justify-between px-8 py-5 bg-white/90 backdrop-blur-lg shadow-md sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Vikrin Logo" width={40} height={40} />
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

      {/* Hero Section */}
      <section className="py-24 px-6 bg-[#012322] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10 border border-white/10 shadow-lg">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Digital Powerhouse for <br className="hidden md:block" /> Websites & Marketing
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Vikrin builds stunning websites and drives growth with cutting-edge digital marketing.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold">
                Let’s Talk
              </a>
              <a href="#portfolio" className="bg-white/10 border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black">
                See Our Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <AnimatedServiceCarousel items={services} />
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 opacity-20 blur-[160px] rounded-full z-0" />
      </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Our Services</h2>

          <h3 className="text-2xl font-semibold mb-6 text-blue-700">Web Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {["E-Commerce", "Business Websites", "Custom Platforms"].map((title, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="p-6 border rounded-xl shadow-md bg-white hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold mb-2 text-blue-600">{title}</h4>
                <p className="text-gray-600">High-performance {title.toLowerCase()} built with modern frameworks and UX best practices.</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-blue-700">Digital Marketing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["SEO Optimization", "Social Media Management", "Performance Ads"].map((title, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="p-6 border rounded-xl shadow-md bg-white hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold mb-2 text-blue-600">{title}</h4>
                <p className="text-gray-600">Boost visibility and traffic with expert-level {title.toLowerCase()}.</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-white px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Portfolio Highlights</h2>

          <h3 className="text-2xl font-semibold text-left text-blue-700 mb-6">Web Development</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {["ecommerce-fashion-store", "online-learning-portal", "real-estate-listing-site", "health-clinic-booking", "personal-brand-portfolio", "consulting-firm-site"].map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-50 border rounded-2xl p-4 shadow hover:shadow-xl transition"
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <Image
                    src={`/projects/${img}.jpg`}
                    alt={img}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-xl transform group-hover:scale-105 transition duration-300 ease-in-out"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1 capitalize">{img.replace(/-/g, ' ')}</h4>
                <p className="text-gray-600 text-sm">Custom-built, responsive designs made to perform and impress.</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-left text-blue-700 mb-6">Digital Marketing</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[{ title: "SEO Growth Campaign", image: "seo-campaign", desc: "Ranked local businesses on Page 1 in just 3 months." }, { title: "Social Media Blitz", image: "social-media", desc: "Doubled engagement through custom campaigns and reels." }, { title: "Lead Gen Landing Page", image: "lead-gen", desc: "Built and promoted landing page with 12% conversion rate." }].map(({ title, image, desc }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-50 border rounded-2xl p-4 shadow hover:shadow-xl transition"
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <Image
                    src={`/projects/${image}.jpg`}
                    alt={title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-xl transform group-hover:scale-105 transition duration-300 ease-in-out"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">{title}</h4>
                <p className="text-gray-600 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="py-20 bg-gray-100 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Why Choose Vikrin?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { icon: <Code className="text-blue-600 w-8 h-8 mb-3" />, title: "Enterprise-Ready Code", desc: "Built for scale, security, and flexibility with industry-standard frameworks." },
                { icon: <Layout className="text-blue-600 w-8 h-8 mb-3" />, title: "Modern UI/UX", desc: "Designs that are intuitive, attractive, and conversion-focused." },
                { icon: <TrendingUp className="text-blue-600 w-8 h-8 mb-3" />, title: "SEO Optimized", desc: "Sites that rank higher with fast loading, structured data, and optimized content." },
                { icon: <Smartphone className="text-blue-600 w-8 h-8 mb-3" />, title: "Mobile First", desc: "Every screen matters — responsive across all devices by default." },
                { icon: <Zap className="text-blue-600 w-8 h-8 mb-3" />, title: "Speed Obsessed", desc: "Optimized assets, smart lazy loading, and blazing fast hosting with Vercel." },
                { icon: <Users className="text-blue-600 w-8 h-8 mb-3" />, title: "Client-First Culture", desc: "We collaborate closely and prioritize your goals above all else." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="p-6 bg-white rounded-xl border shadow-md hover:shadow-lg transition">
                  {icon}
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
                  <p className="text-gray-700 text-sm">{desc}</p>
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
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Build Something Great</h2>
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