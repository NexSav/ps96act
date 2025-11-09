import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

// Icon Components (inline SVG)
const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const HomePage = () => {
  // Respect user's motion preferences
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }
    const handler = (e) => {
      document.documentElement.style.setProperty('--animation-duration', e.matches ? '0.01ms' : '');
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Scraped data
  const schoolData = {
    name: 'Joseph C. Lanzetta School of the Arts, Collaboration, & Technology',
    shortName: 'PS 96',
    mascot: 'Lions',
    principal: 'James Konstantinakos',
    address: '216 E 120th St, New York, NY 10035',
    phone: '(212) 860-5851',
    fax: '(212) 860-6074',
    echalkCode: '9L38X2',
    socialLinks: {
      instagram: 'https://www.instagram.com/ps96act/',
      facebook: 'http://www.facebook.com/PS96Lions',
    },
    quickLinks: {
      parentPortal: 'https://mystudent.nyc/',
      nycdoe: 'https://www.schools.nyc.gov/',
      calendar: 'http://www.ps96act.com/calendar',
      faculty: 'http://www.ps96act.com/directory/faculty',
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="main-content">
        {/* Hero Section - Asymmetric Split Design */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
          {/* Diagonal Background Split */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066B8] via-[#0078D4] to-[#0091EA]"></div>
            <div
              className="absolute inset-0 bg-gradient-to-tl from-[#D4A908] via-[#E8BB09] to-[#F4C430]"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)' }}
            ></div>
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white">
                <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/40 shadow-lg">
                  <SparklesIcon />
                  <span className="text-sm font-bold text-white drop-shadow">East Harlem, NYC</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-lg">
                  Where<br />
                  <span className="text-white drop-shadow-lg">Creativity</span><br />
                  Meets<br />
                  Excellence
                </h1>
                <p className="text-xl text-white mb-8 max-w-lg font-medium leading-relaxed drop-shadow">
                  Joseph C. Lanzetta School of the Arts, Collaboration, & Technology — empowering the next generation of innovators and artists.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#visit"
                    className="group inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-gray-900 bg-white hover:bg-gray-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0078D4]"
                  >
                    Schedule a Tour
                    <ArrowRightIcon />
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white bg-gray-900/40 hover:bg-gray-900/60 backdrop-blur-sm border-2 border-white rounded-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-lg"
                  >
                    Our Story
                  </a>
                </div>
              </div>

              {/* Right Content - Floating Stats */}
              <div className="hidden lg:grid grid-cols-2 gap-4" data-temp="true">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-6 hover:bg-white/30 transition-all duration-200 shadow-xl">
                  <div className="text-4xl font-black text-white drop-shadow mb-2">450+</div>
                  <div className="text-white font-semibold drop-shadow">Students</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-6 hover:bg-white/30 transition-all duration-200 mt-8 shadow-xl">
                  <div className="text-4xl font-black text-white drop-shadow mb-2">95%</div>
                  <div className="text-white font-semibold drop-shadow">Attendance</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-6 hover:bg-white/30 transition-all duration-200 shadow-xl">
                  <div className="text-4xl font-black text-white drop-shadow mb-2">30+</div>
                  <div className="text-white font-semibold drop-shadow">Faculty</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-6 hover:bg-white/30 transition-all duration-200 mt-8 shadow-xl">
                  <div className="text-4xl font-black text-white drop-shadow mb-2">100%</div>
                  <div className="text-white font-semibold drop-shadow">Dedicated</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links - Floating Pills */}
        <section className="relative -mt-12 z-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-200">
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { icon: <CalendarIcon />, label: 'Calendar', href: schoolData.quickLinks.calendar },
                  { icon: <UserIcon />, label: 'Parent Portal', href: schoolData.quickLinks.parentPortal, external: true },
                  { icon: <BookIcon />, label: 'Staff Directory', href: schoolData.quickLinks.faculty },
                  { icon: <PhoneIcon />, label: 'Contact Us', href: '#contact' },
                  { icon: <GlobeIcon />, label: 'NYC DOE', href: schoolData.quickLinks.nycdoe, external: true },
                ].map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-[#0078D4] text-gray-900 hover:text-white rounded-full font-semibold text-sm transition-all duration-200 border border-gray-300 hover:border-[#0078D4] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0078D4] focus-visible:ring-offset-2"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Bento Box Grid */}
        <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Large Feature Box */}
              <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-[#0066B8] via-[#0078D4] to-[#0091EA] rounded-3xl p-10 text-white relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="relative z-10">
                  <div className="inline-block mb-6">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                      <BookIcon />
                      <span className="text-sm font-bold">About Us</span>
                    </div>
                  </div>
                  <h2 className="text-4xl font-black mb-6 leading-tight">
                    A Legacy of<br />Excellence in<br />East Harlem
                  </h2>
                  <p className="text-lg text-white mb-6 leading-relaxed max-w-xl font-medium">
                    Named after Joseph C. Lanzetta, PS 96 stands as a beacon of innovative education. We combine rigorous academics with a strong emphasis on the arts, collaborative learning, and technology integration.
                  </p>
                  <p className="text-base text-white/95 leading-relaxed max-w-xl mb-6">
                    Every student deserves access to world-class education that prepares them for success in the 21st century. Through our dual language programs, arts partnerships, and community collaborations, we create an environment where all learners thrive.
                  </p>
                  <div className="inline-flex items-center gap-3 bg-white/25 backdrop-blur-sm px-5 py-3 rounded-full border border-white/40 shadow-lg">
                    <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
                      <UserIcon />
                    </div>
                    <div>
                      <div className="text-xs text-white/80 font-medium">Principal</div>
                      <div className="font-bold">{schoolData.principal}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission Box */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-[#0078D4] hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-[#0078D4]/10 rounded-2xl flex items-center justify-center mb-4 text-[#0078D4] group-hover:scale-110 transition-transform duration-300">
                  <BookIcon />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  Empowering students through arts, collaboration, and technology to become lifelong learners and leaders.
                </p>
              </div>

              {/* Values Box */}
              <div className="bg-gradient-to-br from-[#D4A908] via-[#E8BB09] to-[#F4C430] rounded-3xl p-8 text-gray-900 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <SparklesIcon />
                </div>
                <h3 className="text-xl font-black mb-4">Core Values</h3>
                <ul className="space-y-3 text-sm font-semibold">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    <span>Excellence</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    <span>Creativity</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    <span>Community</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Programs - Enhanced Cards */}
        <section id="programs" className="py-24 bg-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-yellow-50/50 to-transparent pointer-events-none"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-[#0078D4] px-4 py-2 rounded-full mb-4 font-bold text-sm">
                <SparklesIcon />
                Our Programs
              </div>
              <h2 className="text-5xl font-black text-gray-900 mb-4">
                Signature <span className="text-[#0078D4]">Programs</span>
              </h2>
              <p className="text-xl text-gray-700 font-medium">Pathways designed for every learner</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Dual Language */}
              <div className="group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-[#0078D4] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#0078D4]/10 to-transparent rounded-bl-[120px] group-hover:from-[#0078D4]/20 transition-colors duration-300"></div>
                <div className="relative p-8 sm:p-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0066B8] via-[#0078D4] to-[#0091EA] rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white group-hover:scale-110 transition-transform duration-300">
                    <GlobeIcon />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">Dual Language Programs</h3>
                  <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                    Specialized programs for English Language Learners, supporting bilingual development and cultural pride while ensuring academic success.
                  </p>
                  <a
                    href="/dual_language_programs"
                    className="inline-flex items-center gap-2 text-[#0078D4] font-bold group-hover:gap-3 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0078D4] rounded"
                  >
                    Learn More
                    <ArrowRightIcon />
                  </a>
                </div>
              </div>

              {/* Arts & Technology */}
              <div className="group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-[#E8BB09] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#E8BB09]/10 to-transparent rounded-bl-[120px] group-hover:from-[#E8BB09]/20 transition-colors duration-300"></div>
                <div className="relative p-8 sm:p-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4A908] via-[#E8BB09] to-[#F4C430] rounded-2xl flex items-center justify-center mb-6 shadow-lg text-gray-900 group-hover:scale-110 transition-transform duration-300">
                    <SparklesIcon />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">Arts & Technology</h3>
                  <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                    Integrated approach combining visual arts, music, and cutting-edge technology to prepare students for creative careers and innovative thinking.
                  </p>
                  <a
                    href="#programs"
                    className="inline-flex items-center gap-2 text-[#D4A908] font-bold group-hover:gap-3 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8BB09] rounded"
                  >
                    Explore Programs
                    <ArrowRightIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Partners - Compact Grid */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-4">Community <span className="text-[#E8BB09]">Partners</span></h2>
              <p className="text-lg text-gray-600">Collaborating for student success</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Harlem YMCA', url: '/harlem_ymca', color: 'from-blue-500 to-blue-600' },
                { name: 'Global Kids, Inc.', url: '/global_kids_inc', color: 'from-green-500 to-green-600' },
                { name: 'Cool Culture', url: '/cool_culture', color: 'from-purple-500 to-purple-600' },
                { name: 'Union Settlement', url: '/union_settlement', color: 'from-orange-500 to-orange-600' },
              ].map((partner, idx) => (
                <a
                  key={idx}
                  href={partner.url}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-200 overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${partner.color} opacity-10 rounded-bl-[60px] group-hover:opacity-20 transition-opacity duration-200`}></div>
                  <div className="relative">
                    <div className={`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                      <GlobeIcon />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{partner.name}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* News & Events - Side by Side */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* News */}
              <div id="news">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-black text-gray-900">Latest News</h2>
                </div>
                <div className="space-y-4" data-temp="true">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                    <div className="text-sm text-gray-500 mb-2">Coming Soon</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">School Updates</h3>
                    <p className="text-gray-600 text-sm">
                      Check back for important announcements and celebrations from our Lions community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Events */}
              <div id="events">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-black text-gray-900">Upcoming Events</h2>
                  <a href={schoolData.quickLinks.calendar} className="text-[#0078D4] font-bold text-sm hover:underline">
                    View Calendar
                  </a>
                </div>
                <div className="bg-gradient-to-br from-[#0078D4] to-[#0091EA] rounded-2xl p-8 text-white text-center">
                  <CalendarIcon />
                  <div className="w-14 h-14 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <CalendarIcon />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Check Our Calendar</h3>
                  <p className="text-white/90 text-sm mb-6">
                    Visit our full calendar for upcoming events and important dates
                  </p>
                  <a
                    href={schoolData.quickLinks.calendar}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0078D4] font-bold rounded-full hover:bg-gray-50 transition-colors duration-200"
                  >
                    <CalendarIcon />
                    Open Calendar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner - Bold & Modern */}
        <section id="visit" className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-[#E8BB09] px-4 py-2 rounded-full mb-6 text-gray-900 font-bold text-sm">
              <SparklesIcon />
              Join Our Community
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              You Belong<br />
              at <span className="text-[#E8BB09]">PS 96</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Come see what makes our Lions community special. Schedule a tour and discover the PS 96 difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-10 py-5 text-lg font-black text-gray-900 bg-[#E8BB09] hover:bg-[#F4C430] rounded-2xl shadow-2xl hover:shadow-[#E8BB09]/50 transition-all duration-200"
              >
                Schedule a Visit
                <ArrowRightIcon />
              </a>
              <a
                href={schoolData.quickLinks.nycdoe}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 text-lg font-black text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-2xl transition-all duration-200"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </section>

        {/* Footer - Modern & Clean */}
        <footer id="contact" className="bg-gray-900 text-gray-400 pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              {/* Brand */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E8BB09] via-[#D4A908] to-[#0078D4] flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">96</span>
                  </div>
                  <div>
                    <div className="text-white font-black text-xl">PS 96 Lions</div>
                    <div className="text-sm text-gray-500">Lanzetta School</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-6 max-w-md leading-relaxed">
                  {schoolData.name}
                </p>
                <div className="flex gap-3">
                  <a
                    href={schoolData.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E8BB09] flex items-center justify-center transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href={schoolData.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E8BB09] flex items-center justify-center transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#about" className="hover:text-[#E8BB09] transition-colors">About</a></li>
                  <li><a href={schoolData.quickLinks.faculty} className="hover:text-[#E8BB09] transition-colors">Staff Directory</a></li>
                  <li><a href={schoolData.quickLinks.calendar} className="hover:text-[#E8BB09] transition-colors">Calendar</a></li>
                  <li><a href="/uniform_policy" className="hover:text-[#E8BB09] transition-colors">Uniform Policy</a></li>
                  <li><a href={schoolData.quickLinks.parentPortal} target="_blank" rel="noopener noreferrer" className="hover:text-[#E8BB09] transition-colors">Parent Portal</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-white font-bold mb-4">Contact</h3>
                <ul className="space-y-3 text-sm">
                  <li>{schoolData.address}</li>
                  <li>{schoolData.phone}</li>
                  <li className="text-gray-600">Fax: {schoolData.fax}</li>
                </ul>
                <div className="mt-6 p-4 rounded-xl bg-gray-800 border border-gray-700">
                  <div className="text-white text-sm font-bold mb-1">eChalk Notify</div>
                  <div className="text-xs text-gray-500 mb-2">Get instant updates</div>
                  <div className="text-sm font-mono text-[#E8BB09]">Code: {schoolData.echalkCode}</div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-600">
              <p>&copy; {new Date().getFullYear()} {schoolData.name}</p>
              <p className="mt-1">Part of the New York City Department of Education</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
