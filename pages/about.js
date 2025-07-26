// pages/about.js
import Head from 'next/head';
import Link from 'next/link';
import { Briefcase, TrendingUp, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us – Vikrin</title>
        <meta name="description" content="Learn more about Vikrin – our mission, values, and how we empower businesses to grow online." />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Hero Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1F3CAB] mb-6">
            We Build Digital Powerhouses
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            At Vikrin, we craft stunning websites and execute powerful marketing strategies that fuel business growth. Our mission is to turn your vision into scalable digital success.
          </p>

          {/* Icon Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
            <div className="bg-white shadow-md rounded-2xl p-8">
              <Briefcase className="h-8 w-8 text-[#1F3CAB] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-gray-600">
                Our team brings years of expertise in design, development, SEO, and advertising to every project we take on.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-8">
              <TrendingUp className="h-8 w-8 text-[#1F3CAB] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growth-Driven</h3>
              <p className="text-gray-600">
                We don’t just build websites—we build engines for growth with measurable results.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-8">
              <Users className="h-8 w-8 text-[#1F3CAB] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Client First</h3>
              <p className="text-gray-600">
                We partner closely with our clients to ensure every solution is aligned with their goals and values.
              </p>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-16">
            <Link
              href="/"
              className="inline-block text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}