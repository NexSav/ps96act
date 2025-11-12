import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Icon Components - Inline SVG with proper stroke weights
const HeartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
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

const DocumentIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
);

const UnionSettlementPage = () => {
  const programs = [
    { name: 'Education Programs', icon: <AcademicCapIcon /> },
    { name: 'Health Services', icon: <HeartIcon /> },
    { name: 'Senior Services', icon: <UsersIcon /> },
    { name: 'Youth Development', icon: <SparklesIcon /> },
    { name: 'Childcare', icon: <HeartIcon /> },
    { name: 'Counseling', icon: <UsersIcon /> },
    { name: 'Economic Development', icon: <BuildingIcon /> }
  ];

  const activities = [
    { name: 'Leadership Development', icon: <UsersIcon /> },
    { name: 'Dance', icon: <SparklesIcon /> },
    { name: 'Improv', icon: <SparklesIcon /> },
    { name: 'Photography', icon: <SparklesIcon /> },
    { name: 'Visual Arts', icon: <SparklesIcon /> },
    { name: 'Health and Wellness', icon: <HeartIcon /> },
    { name: 'Graphic Design', icon: <SparklesIcon /> },
    { name: 'Academic Assistance', icon: <AcademicCapIcon /> },
    { name: 'High School Prep', icon: <AcademicCapIcon /> },
    { name: 'Career Development', icon: <UsersIcon /> }
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
                <BuildingIcon />
                <span className="text-sm font-semibold text-white tracking-tight">Community Partnership</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-semibold text-white mb-6 tracking-tight" style={{letterSpacing: '-0.02em'}}>
              Union Settlement
            </h1>

            <p className="text-2xl text-white/90 font-normal max-w-3xl leading-relaxed mb-8">
              Serving East Harlem since 1895, empowering our community through comprehensive programs and services
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://unionsettlement.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#00213a] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-sm"
              >
                Visit Union Settlement Website
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </section>

        {/* About Union Settlement Section */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24 mt-12">
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8 lg:p-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight flex items-center gap-3" style={{letterSpacing: '-0.02em'}}>
              <div className="w-12 h-12 rounded-lg bg-[#fdbb2e]/10 flex items-center justify-center text-[#00213a]">
                <BuildingIcon />
              </div>
              About Union Settlement
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-900">Union Settlement</strong> has served the people in East Harlem since <strong className="text-[#00213a]">1895</strong>. One of the largest settlement houses in New York, Union Settlement serves more than <strong className="text-[#00213a]">10,000 East Harlem residents</strong> of all ages each year.
              </p>
              <p>
                Our comprehensive programs span education, health, senior services, youth development, childcare, counseling, and economic development initiatives.
              </p>
              <p>
                Union Settlement's Youth Services division provides children, adolescents and young adults with programs that foster <strong className="text-gray-900">creativity, curiosity, resilience and problem solving</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 mb-4">
                <HeartIcon />
                <span className="text-sm font-semibold text-gray-700 tracking-tight">Community Services</span>
              </div>
              <h2 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight" style={{letterSpacing: '-0.02em'}}>
                Our Programs
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive services designed to support East Harlem residents of all ages.
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
          </div>
        </section>

        {/* Afterschool Program Details */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fdbb2e]/5 rounded-lg border border-[#fdbb2e]/20 mb-4">
              <AcademicCapIcon />
              <span className="text-sm font-semibold text-[#00213a] tracking-tight">Afterschool Program</span>
            </div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight" style={{letterSpacing: '-0.02em'}}>
              Union Settlement Afterschool at PS 96
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              A comprehensive middle school afterschool program designed for students in grades 6-8.
            </p>
          </div>

          {/* Schedule Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-[#fdbb2e]/10 flex items-center justify-center text-[#00213a] mb-4">
                <UsersIcon />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Who We Serve</h3>
              <p className="text-gray-700">Grades 6-8<br />Middle School Students</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-[#fdbb2e]/10 flex items-center justify-center text-[#00213a] mb-4">
                <ClockIcon />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Program Hours</h3>
              <p className="text-gray-700">Monday - Friday<br />2:20pm - 5:00pm</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-[#fdbb2e]/10 flex items-center justify-center text-[#00213a] mb-4">
                <HeartIcon />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Focus</h3>
              <p className="text-gray-700">Social & Emotional Learning (SEL)</p>
            </div>
          </div>

          {/* Activities Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight" style={{letterSpacing: '-0.02em'}}>
              Activities & Enrichment
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-[#fdbb2e]/20 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#fdbb2e]/10 flex items-center justify-center text-[#00213a] flex-shrink-0 group-hover:bg-[#fdbb2e]/20 transition-colors duration-200">
                      {activity.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                        {activity.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 lg:p-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight" style={{letterSpacing: '-0.02em'}}>
                Our Mission at PS 96
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our goal is to offer a <strong className="text-[#00213a]">fun, safe, and exciting learning environment</strong> that also caters to each child's social and emotional development during their extended hours in the school building.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Each activity has a strong and meaningful <strong className="text-gray-900">SEL (Social, Emotional Learning)</strong> component. We have caring and qualified staff who dedicate their time and talent to each student.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Section */}
        <section className="bg-[#00213a] py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold text-white mb-6 tracking-tight" style={{letterSpacing: '-0.02em'}}>
                Ready to Enroll?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Contact our director or download the application to get started.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white">
                    <MailIcon />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Contact the Director</h3>
                </div>
                <p className="text-white/90 mb-2">Cristy Gonzalez, Program Director</p>
                <a
                  href="mailto:crgonzalez@unionsettlement.org"
                  className="text-white font-medium hover:underline"
                >
                  crgonzalez@unionsettlement.org
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white">
                    <DocumentIcon />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Download Application</h3>
                </div>
                <div className="space-y-2">
                  <a
                    href="https://resource.echalk.com/fl/uX0HtqFZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white font-medium hover:underline"
                  >
                    Application (English)
                  </a>
                  <a
                    href="https://resource.echalk.com/fl/t00237MW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white font-medium hover:underline"
                  >
                    Application (Spanish)
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://unionsettlement.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#00213a] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-sm"
              >
                Learn More About Union Settlement
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

export default UnionSettlementPage;
