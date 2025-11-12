import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Icon Components - Inline SVG with proper stroke weights
const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const AcademicCapIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const GlobalKidsPage = () => {
  const programs = [
    { name: 'Global Tech', icon: <SparklesIcon /> },
    { name: 'Global Music', icon: <SparklesIcon /> },
    { name: 'GSA (Gender & Sexuality Alliance)', icon: <HeartIcon /> },
    { name: 'Food Justice', icon: <UsersIcon /> },
    { name: 'Girls Group', icon: <HeartIcon /> },
    { name: 'Student Newspaper', icon: <AcademicCapIcon /> },
    { name: 'Student Council', icon: <UsersIcon /> }
  ];

  const services = [
    'School-wide events and celebrations',
    'Attendance support and monitoring',
    'Parent engagement and family resources'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20" style={{
          background: 'linear-gradient(to bottom, #00213a 0%, #00213a 70%, rgba(0, 33, 58, 0.7) 80%, rgba(0, 33, 58, 0.3) 90%, rgba(255, 255, 255, 1) 100%)'
        }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <GlobeIcon />
                <span className="text-sm font-semibold text-white tracking-tight">Community Partnership</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-semibold text-white mb-6 tracking-tight" style={{letterSpacing: '-0.02em'}}>
              Global Kids, Inc.
            </h1>

            <p className="text-2xl text-white/90 font-normal max-w-3xl leading-relaxed mb-8">
              Developing active global citizens prepared to engage and succeed in our ever-changing world
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://globalkids.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#00213a] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-sm"
              >
                Visit Global Kids Website
                <ArrowRightIcon />
              </a>
              <a
                href="https://www.instagram.com/globalkids/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                Follow on Instagram
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </section>

        {/* What is a Global Citizen Section */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24 mt-12">
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8 lg:p-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight flex items-center gap-3" style={{letterSpacing: '-0.02em'}}>
              <div className="w-12 h-12 rounded-lg bg-[#fdbb2e]/10 flex items-center justify-center text-[#00213a]">
                <GlobeIcon />
              </div>
              What Does it Mean to Be a Global Citizen?
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-gray-900">Global Kids</strong> is a nonprofit organization that focuses on <strong className="text-[#00213a]">youth development</strong>, <strong className="text-[#00213a]">global education</strong>, and <strong className="text-[#00213a]">civic engagement</strong> among NYC youth.
              </p>
              <p className="text-gray-700 leading-relaxed">
                GK aims to fulfill its mission to develop active global citizens who are prepared to engage and succeed in our ever-changing world. GK has been the lead community-based organization (CBO) at PS 96 for the past three years.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fdbb2e]/5 rounded-lg border border-[#fdbb2e]/20 mb-4">
              <SparklesIcon />
              <span className="text-sm font-semibold text-[#00213a] tracking-tight">Programs & Activities</span>
            </div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight" style={{letterSpacing: '-0.02em'}}>
              Our Programming at PS 96
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Global Kids offers various in-school and after-school programs designed to empower students and build community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-[#fdbb2e]/20 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#fdbb2e]/10 flex items-center justify-center text-[#00213a] flex-shrink-0 group-hover:bg-[#fdbb2e]/20 transition-colors duration-200">
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                      {program.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 mb-4">
                <HeartIcon />
                <span className="text-sm font-semibold text-gray-700 tracking-tight">Student & Family Services</span>
              </div>
              <h2 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight" style={{letterSpacing: '-0.02em'}}>
                Supporting Our Community
              </h2>
              <p className="text-lg text-gray-600">
                Global Kids provides comprehensive services to students and their families.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#fdbb2e]/10 flex items-center justify-center text-[#00213a] mb-4">
                    <UsersIcon />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 mb-4">
              <SparklesIcon />
              <span className="text-sm font-semibold text-gray-700 tracking-tight">Our Community</span>
            </div>
            <h2 className="text-4xl font-semibold text-gray-900 tracking-tight" style={{letterSpacing: '-0.02em'}}>
              GK Leaders in Action
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div
                key={index}
                className="aspect-square bg-gradient-to-br from-[#fdbb2e]/10 to-[#fdbb2e]/5 rounded-xl overflow-hidden border border-gray-200"
              >
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <UsersIcon />
                    <p className="text-xs mt-2">Photo {index}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#00213a] py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-semibold text-white mb-6 tracking-tight" style={{letterSpacing: '-0.02em'}}>
              Join Us in Building Global Citizens
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Together with Global Kids, we're empowering the next generation to engage with the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://globalkids.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#00213a] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-sm"
              >
                Learn More About Global Kids
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GlobalKidsPage;
