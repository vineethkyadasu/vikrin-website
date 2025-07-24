// pages/index.js
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Layout, TrendingUp, Smartphone, Zap, Users } from 'lucide-react';
import Head from "next/head";

const services = [
  'E-Commerce Development',
  'Business Websites',
  'Custom Platforms',
  'SEO & Ads',
  'Lead Funnels',
  'Social Campaigns'
];

function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 bg-[#e5e5e5] text-gray-900">
      <div className="max-w-7xl mx-auto bg-[#042927] bg-grid rounded-3xl px-8 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 text-white space-y-6">
          <h1 className="text-[42px] md:text-[52px] font-extrabold leading-tight">
            Digital Powerhouse <br className="hidden md:block" /> for Websites & Marketing
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Vikrin builds stunning websites and drives growth with cutting-edge digital marketing.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
  <a
    href="#contact"
    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold text-center"
  >
    Let’s Talk
  </a>
  <a
    href="#portfolio"
    className="bg-white/10 border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black text-center"
  >
    See Our Work
  </a>
</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 h-64 overflow-hidden relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={services[index]}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="px-8 py-6 bg-white/10 text-white font-semibold rounded-xl text-center border border-white/20 shadow-xl w-80"
            >
              {services[index]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ✅ Main Home Component
export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Vikrin – Web Development & Digital Marketing Agency</title>
        <meta name="description" content="Vikrin builds stunning websites and drives growth with cutting-edge digital marketing." />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Vikrin – Websites & Marketing" />
        <meta property="og:description" content="Your trusted partner for digital solutions – from websites to marketing." />
        <meta property="og:image" content="https://vikrin.com/meta-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className="flex items-center justify-between px-8 py-5 bg-[#e5e5e5] shadow-md sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <Link href="/" scroll={true}>
            <Image
              src="/logo.png"
              alt="Vikrin Logo"
              width={160}
              height={48}
              className="h-12 w-auto cursor-pointer"
              priority
              quality={100}
            />
          </Link>
        </div>
        <div className="md:hidden">
  <button onClick={() => setNavOpen(!navOpen)} className="text-gray-700 text-2xl">
    ☰
  </button>
</div>

<nav className={`${navOpen ? "flex" : "hidden"} flex-col absolute top-20 right-8 bg-white p-4 rounded-lg shadow-md space-y-4 md:flex md:flex-row md:static md:bg-transparent md:space-y-0 md:space-x-6 text-gray-700 font-medium`}>
  <Link href="#services" className="hover:text-blue-600">Services</Link>
  <Link href="#portfolio" className="hover:text-blue-600">Portfolio</Link>
  <Link href="#why-us" className="hover:text-blue-600">Why Us</Link>
  <Link href="#testimonials" className="hover:text-blue-600">Testimonials</Link>
  <Link href="#contact" className="hover:text-blue-600">Contact</Link>
</nav>
      </header>

      <div id="top"></div>

      <main className="bg-[#e5e5e5]">
        <HeroSection />

        {/* Services Section */}
<section id="services" className="py-24 px-6 max-w-6xl mx-auto">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-[#1F3CAB]">
    Our <span className="text-[#1F3CAB]">Services</span>
  </h2>

  <h3 className="text-2xl font-semibold mb-6 text-[#1F3CAB] tracking-tight">Web Development</h3>
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
        <p className="text-gray-600">
          High-performance {title.toLowerCase()} built with modern frameworks and UX best practices.
        </p>
      </motion.div>
    ))}
  </div>

  <h3 className="text-2xl font-semibold mb-6 text-[#1F3CAB] tracking-tight">Digital Marketing</h3>
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
        <h4 className="text-lg font-semibold mb-2 text-blue-700">{title}</h4>
        <p className="text-gray-600">
          Boost visibility and traffic with expert-level {title.toLowerCase()}.
        </p>
      </motion.div>
    ))}
  </div>
</section>

        {/* Portfolio Section */}
  <section id="portfolio" className="py-20 px-6 max-w-6xl mx-auto">
  <h2 className="text-4xl font-bold text-center mb-14 text-[#1F3CAB]">
    Portfolio Highlights
  </h2>

    <h3 className="text-2xl font-semibold text-left text-blue-700 mb-6">Web Development</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
      {["ecommerce-fashion-store", "online-learning-portal", "real-estate-listing-site", "health-clinic-booking", "personal-brand-portfolio", "consulting-firm-site"].map((img, index) => (
        <motion.div
          key={img}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group bg-white border rounded-2xl p-4 shadow hover:shadow-xl transition"
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
          className="group bg-white border rounded-2xl p-4 shadow hover:shadow-xl transition"
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
  <section id="why-us" className="py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12 text-[#1F3CAB]">
      Why Choose Vikrin?
    </h2>
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
  <section id="testimonials" className="py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12 text-[#1F3CAB]">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-8 text-left">
        {["Vikrin transformed our online presence!", "Their SEO helped us double our leads.", "Beautiful, fast websites and great team.", "We love their ongoing support."].map((quote, index) => (
          <div key={index} className="p-6 bg-white border rounded-xl shadow">
            <p className="text-gray-700 italic">“{quote}”</p>
            <p className="mt-4 font-semibold text-blue-600">— Happy Client</p>
          </div>
        ))}
      </div>
    </div>
  </section>

        <section id="contact" className="py-24 px-6 bg-gradient-to-br from-[#f5f7fa] to-[#e4eaf2]">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
    <div>
      <h2 className="text-4xl font-bold mb-4 text-[#1F3CAB]">Let's Build Something Great</h2>
      <p className="text-lg text-gray-700">Reach out via your preferred channel. We'll get back within 24 hours.</p>
    </div>

    <div className="flex flex-col md:flex-row justify-center gap-6">
      <a
        href="mailto:contact@vikrin.com"
        className="flex items-center justify-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform text-blue-600 font-semibold text-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M4 4h16v16H4z" fill="none" />
          <path d="M4 4l8 8 8-8" stroke="currentColor" strokeWidth="2" />
        </svg>
        Email Us
      </a>

      <a
  href="https://wa.me/919177754434"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform text-green-600 font-semibold text-lg"
>
  <svg
    className="w-6 h-6"
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.003 2.667c-7.356 0-13.333 5.978-13.333 13.333 0 2.355.62 4.64 1.795 6.664L2.667 29.333l6.816-1.773a13.295 13.295 0 006.52 1.741c7.355 0 13.333-5.978 13.333-13.334s-5.978-13.333-13.333-13.333zm0 24a10.67 10.67 0 01-5.453-1.495l-.392-.236-4.04 1.052 1.077-3.935-.255-.403a10.664 10.664 0 01-1.636-5.612c0-5.893 4.78-10.667 10.666-10.667s10.667 4.774 10.667 10.667c0 5.885-4.774 10.667-10.667 10.667zm5.213-7.947c-.287-.144-1.7-.84-1.964-.934-.264-.095-.456-.143-.647.144-.191.287-.744.934-.911 1.127-.168.191-.336.215-.623.071-.287-.144-1.214-.447-2.314-1.425-.855-.761-1.43-1.7-1.597-1.987-.168-.287-.018-.443.127-.587.131-.131.287-.335.431-.503.144-.167.191-.287.287-.478.095-.191.048-.359-.024-.503-.071-.143-.647-1.562-.888-2.139-.232-.559-.471-.48-.647-.487l-.551-.012c-.191 0-.503.071-.767.335s-1.007.983-1.007 2.396 1.031 2.78 1.175 2.975c.143.191 2.03 3.1 4.923 4.345.688.297 1.224.474 1.642.605.69.22 1.318.19 1.813.115.553-.083 1.7-.696 1.942-1.367.24-.671.24-1.247.168-1.367-.072-.119-.264-.191-.551-.335z" />
  </svg>
  WhatsApp Us
</a>
    </div>
  </div>
</section>

       {/* Footer */}
  <footer className="py-6 text-center text-sm text-gray-700">
    &copy; {new Date().getFullYear()} Vikrin.com. All rights reserved.
  </footer>
</main>
</>
);
}