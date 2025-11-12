import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Icon Components
const ClockIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center" style={{
          background: 'linear-gradient(to bottom, #00213a 0%, #00213a 70%, rgba(0, 33, 58, 0.7) 80%, rgba(0, 33, 58, 0.3) 90%, rgba(255, 255, 255, 1) 100%)'
        }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                <ClockIcon />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-7xl font-semibold text-white mb-6 tracking-tight" style={{letterSpacing: '-0.02em'}}>
              Coming Soon
            </h1>

            {/* Description */}
            <p className="text-2xl text-white/90 font-normal max-w-2xl mx-auto leading-relaxed mb-12">
              We're working hard to bring you this page. Check back soon for updates!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#00213a] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-sm"
              >
                <HomeIcon />
                Return to Home
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                Visit FAQ
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-16 pt-16 border-t border-white/20">
              <p className="text-white/80 text-sm mb-4">
                In the meantime, you can:
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <Link
                  to="/calendar"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-200"
                >
                  <div className="text-[#fdbb2e] font-semibold mb-2">School Calendar</div>
                  <p className="text-white/80 text-sm">View upcoming events and important dates</p>
                </Link>
                <Link
                  to="/faq"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-200"
                >
                  <div className="text-[#fdbb2e] font-semibold mb-2">FAQ</div>
                  <p className="text-white/80 text-sm">Find answers to common questions</p>
                </Link>
                <Link
                  to="/#contact"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-200"
                >
                  <div className="text-[#fdbb2e] font-semibold mb-2">Contact Us</div>
                  <p className="text-white/80 text-sm">Get in touch with our school</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoonPage;
