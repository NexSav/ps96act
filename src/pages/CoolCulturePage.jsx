import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Icon Components - Inline SVG with proper stroke weights
const TicketIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3v.75m-9-6h.008v.008H7.5V11.25zm0 3h.008v.008H7.5v-.008zm0 3h.008v.008H7.5v-.008zm0 3h.008v.008H7.5v-.008zm6.75-13.5h-9a2.25 2.25 0 00-2.25 2.25v13.5a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
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

const CoolCulturePage = () => {
  const programs = [
    {
      name: 'Citywide Cultural Access Program',
      icon: <TicketIcon />,
      description: 'Free admission to 90+ museums and cultural institutions across NYC for income-eligible families'
    },
    {
      name: 'We Are All Curators',
      icon: <SparklesIcon />,
      description: 'Empowering families to become curators of their own cultural experiences'
    },
    {
      name: 'Neighborhood-based Initiatives',
      icon: <UsersIcon />,
      description: 'Community-focused programs bringing art and culture directly to neighborhoods'
    },
    {
      name: 'Health + Wellbeing Initiative',
      icon: <HeartIcon />,
      description: 'Connecting families through creativity to inspire collective wellbeing and healing'
    }
  ];

  const partners = [
    'Cultural Institutions',
    'Community Leaders & Influencers',
    'Government Agencies',
    'ECCs & Schools',
    'Community Based Organizations'
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
                <TicketIcon />
                <span className="text-sm font-semibold text-white tracking-tight">Community Partnership</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-semibold text-white mb-6 tracking-tight" style={{letterSpacing: '-0.02em'}}>
              Cool Culture
            </h1>

            <p className="text-2xl text-white/90 font-normal max-w-3xl leading-relaxed mb-8">
              Connecting families to NYC art and culture — A family's first ticket to a lifetime of learning
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.coolculture.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#00213a] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-sm"
              >
                Visit Cool Culture Website
                <ArrowRightIcon />
              </a>
              <a
                href="https://www.coolculture.org/cool-culture-enrollment/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                Enrollment Information
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </section>

        {/* About Cool Culture Section */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24 mt-12">
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8 lg:p-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight flex items-center gap-3" style={{letterSpacing: '-0.02em'}}>
              <div className="w-12 h-12 rounded-lg bg-[#fdbb2e]/10 flex items-center justify-center text-[#00213a]">
                <TicketIcon />
              </div>
              About Cool Culture
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-900">Cool Culture</strong> believes that art is a human right, a powerful means of self-expression, and a bridge that allows us to transcend boundaries between and across cultures to build community and increase our capacity for dialogue and understanding.
              </p>
              <p>
                Since <strong className="text-[#00213a]">1999</strong>, Cool Culture has empowered over <strong className="text-[#00213a]">one million families</strong> by making art, culture, and creativity accessible to all. The organization helps over 50,000 income-eligible families access and enjoy <strong className="text-[#00213a]">90+ of NYC's world-class cultural institutions</strong> for free.
              </p>
              <p>
                Cool Culture collaborates with families and educators to advocate for cultural equity and social change, using art and culture as vehicles for transformation that engage our emotional, intellectual, and political imaginations.
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 mb-4">
                <SparklesIcon />
                <span className="text-sm font-semibold text-gray-700 tracking-tight">About Cool Culture</span>
              </div>
              <h2 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight" style={{letterSpacing: '-0.02em'}}>
                Connecting Families to NYC Art & Culture
              </h2>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/64vpfpFMsfA"
                  title="About Cool Culture"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fdbb2e]/5 rounded-lg border border-[#fdbb2e]/20 mb-4">
              <SparklesIcon />
              <span className="text-sm font-semibold text-[#00213a] tracking-tight">Our Programs</span>
            </div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight" style={{letterSpacing: '-0.02em'}}>
              Programs & Initiatives
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              At the core of Cool Culture's work is the use of art and culture as a vehicle for transformation that engages our emotional, intellectual and political imaginations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight mb-2">
                      {program.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Family Pass Benefits Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 lg:p-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight" style={{letterSpacing: '-0.02em'}}>
                Cool Culture Family Pass
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Enrollment for the <strong className="text-[#00213a]">2025–2026 Cultural Access Program</strong> is now open to all partners! The Cool Culture Family Pass provides families with children in Pre-K through 3rd grade free admission to 90+ museums and cultural institutions across NYC.
                </p>

                <div className="bg-[#fdbb2e]/10 border-l-4 border-[#fdbb2e] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits Include:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#fdbb2e] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Free admission to 90+ cultural institutions across all five boroughs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#fdbb2e] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Access for families with children in Pre-K through 3rd grade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#fdbb2e] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Year-long cultural adventures and learning experiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#fdbb2e] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Opportunities for family bonding through art and culture</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Connections Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 mb-4">
              <UsersIcon />
              <span className="text-sm font-semibold text-gray-700 tracking-tight">Community Impact</span>
            </div>
            <h2 className="text-4xl font-semibold text-gray-900 tracking-tight" style={{letterSpacing: '-0.02em'}}>
              Strengthening Cross-Cultural Connections
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-[#fdbb2e]/10 flex items-center justify-center text-[#00213a] mb-4">
                <UsersIcon />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Diverse Families</h3>
              <p className="text-gray-700">Families from diverse backgrounds across all five boroughs of New York City</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-[#fdbb2e]/10 flex items-center justify-center text-[#00213a] mb-4">
                <SparklesIcon />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multiple Languages</h3>
              <p className="text-gray-700">Nearly half of Cool Culture families speak a language other than English at home</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-[#fdbb2e]/10 flex items-center justify-center text-[#00213a] mb-4">
                <BuildingIcon />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1M+ Families</h3>
              <p className="text-gray-700">Over one million families positively impacted since 1999</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight" style={{letterSpacing: '-0.02em'}}>
              Our Partnership Network
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-[#fdbb2e]/10 rounded-lg p-4 text-center"
                >
                  <p className="text-sm font-medium text-gray-900">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#00213a] py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-semibold text-white mb-6 tracking-tight" style={{letterSpacing: '-0.02em'}}>
              Join the Cool Culture Community
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Unlock a year of cultural adventures for your family. Enrollment for the 2025–2026 program is now open.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.coolculture.org/cool-culture-enrollment/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#00213a] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-sm"
              >
                Enroll Now
                <ArrowRightIcon />
              </a>
              <a
                href="https://www.coolculture.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                Learn More
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

export default CoolCulturePage;
