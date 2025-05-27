// pages/index.js

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We Build Websites for Everyone
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          From individuals to businesses, basic sites to advanced platforms — Vikrin makes it happen.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700"
        >
          Start Your Website
        </a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "E-Commerce", desc: "Online stores that sell and scale" },
            { title: "Education Platforms", desc: "Courses, schools, learning tools" },
            { title: "Business Websites", desc: "Professional presence for any company" },
            { title: "Personal Portfolios", desc: "Showcase your work or resume" },
            { title: "Landing Pages", desc: "High-conversion single page sites" },
            { title: "Custom Platforms", desc: "Fully tailored web applications" },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Your Website</h2>
        <p className="text-lg mb-8">Reach out and get a free consultation today.</p>
        <a
          href="mailto:hello@vikrin.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Vikrin.com. All rights reserved.
      </footer>
    </main>
  );
}