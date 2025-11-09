import React from 'react';
import Navbar from '../components/Navbar';

// Icon Components
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const InfoIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const FAQPage = () => {
  const staffContacts = [
    { name: 'James Konstantinakos', title: 'Principal', email: 'JKonstantinakos@schools.nyc.gov' },
    { name: 'Mallory Locke', title: 'Elementary Assistant Principal', email: 'mlocke4@schools.nyc.gov' },
    { name: 'David Ledesma', title: 'Middle School Assistant Principal', email: 'dledesma@schools.nyc.gov' },
    { name: 'Janet Cruz', title: 'School Secretary', email: 'JCruz28@schools.nyc.gov' },
    { name: 'Arlette Martinez M', title: 'Parent Coordinator', email: 'Amartinezmedrano2@schools.nyc.gov' },
    { name: 'Jacqueline Espinal', title: 'Attendance Teacher', email: 'jespinal18@schools.nyc.gov' },
    { name: 'Ivonne Gonzalez-Soto', title: 'Social Worker', email: 'IGonzalezsoto@schools.nyc.gov' },
    { name: 'Susan Danielson', title: 'IEP Teacher', email: 'sdanielson@schools.nyc.gov' },
    { name: 'Jada Jackson', title: 'Community School Director', email: 'jada.jackson@globalkids.org' }
  ];

  const afterschoolPrograms = [
    {
      name: 'HARLEM YMCA',
      grades: 'K-5',
      schedule: 'Monday - Friday from dismissal until 5:15PM',
      contact: 'Shanna Crowder',
      email: 'scrowder@ymcanyc.org',
      phone: '347-504-5917',
      application: 'DYCD applications available in main office'
    },
    {
      name: 'Union Settlement',
      grades: 'Middle School',
      schedule: 'Monday - Friday from dismissal until 5:15PM',
      contact: 'Anais Rodriguez',
      email: 'anrodriguez@unionsettlement.org',
      phone: null,
      application: 'DYCD applications available in main office'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0066B8] via-[#0078D4] to-[#0091EA] py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <InfoIcon />
              <span className="text-sm font-bold text-white">Help & Support</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-lg">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white font-medium mb-6 max-w-3xl mx-auto drop-shadow">
              Find answers to common questions about PS 96. This document is updated regularly with new information.
            </p>

            {/* Contact Alert */}
            <div className="inline-flex items-center gap-3 bg-white/25 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/40 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0">
                <PhoneIcon />
              </div>
              <div className="text-left">
                <div className="text-sm text-white/90 font-medium">Need immediate assistance?</div>
                <a href="tel:212-860-5851" className="text-lg font-bold text-white hover:underline">
                  Call 212-860-5851
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Contact Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0078D4]/10 flex items-center justify-center text-[#0078D4]">
                <PhoneIcon />
              </div>
              How can I contact PS 96 staff?
            </h2>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
              <p className="text-lg text-gray-700 font-medium mb-6">
                Dial <a href="tel:212-860-5851" className="text-[#0078D4] font-bold hover:underline">212-860-5851</a> to reach our main office.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Most Frequently Requested Email Addresses:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {staffContacts.map((staff, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#0078D4] hover:shadow-md transition-all duration-200">
                    <div className="font-bold text-gray-900 mb-1">{staff.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{staff.title}</div>
                    <a
                      href={`mailto:${staff.email}`}
                      className="inline-flex items-center gap-1 text-sm text-[#0078D4] hover:underline font-medium"
                    >
                      <MailIcon />
                      {staff.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Update Contact Info */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8BB09]/10 flex items-center justify-center text-[#D4A908]">
                <InfoIcon />
              </div>
              How can I update my contact information?
            </h2>
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                All families must complete a <span className="font-bold">Blue Card</span> at the start of every academic year to provide emergency contact information. Please see a staff member in our main office to request a new Blue Card.
              </p>
            </div>
          </div>

          {/* Arrival/Dismissal */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0078D4]/10 flex items-center justify-center text-[#0078D4]">
                <ClockIcon />
              </div>
              Arrival/Dismissal
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#0078D4] to-[#0091EA] rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Grades 3K-5</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Location:</div>
                      <div className="text-white/95">Schoolyard on E 119th Street</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Arrival:</div>
                      <div className="text-white/95">8:00 AM</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Dismissal:</div>
                      <div className="text-white/95">2:10 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#D4A908] via-[#E8BB09] to-[#F4C430] rounded-3xl p-8 text-gray-900 shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Middle School (6-8)</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Location:</div>
                      <div>E 120th Street (closest to 2nd Avenue)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Arrival:</div>
                      <div>8:00 AM</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Dismissal:</div>
                      <div>2:10 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
              <p className="text-gray-800 font-medium">
                <span className="font-bold text-yellow-900">Important:</span> Due to transitions between classrooms, parents who arrive in the main lobby between 1:55pm-2:05pm will be directed to the school yard or middle school doors.
              </p>
            </div>
          </div>

          {/* Attendance */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0078D4]/10 flex items-center justify-center text-[#0078D4]">
                <ClockIcon />
              </div>
              Attendance
            </h2>
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                If your student will be absent or late to school, it is your responsibility to contact the main office directly by <span className="font-bold">9:00am</span> the morning of (the latest) by calling <a href="tel:212-860-5851" className="text-[#0078D4] font-bold hover:underline">212-860-5851</a>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You can also send an email to Ms. Jackie at <a href="mailto:jespinal18@schools.nyc.gov" className="text-[#0078D4] font-medium hover:underline">jespinal18@schools.nyc.gov</a> or to the Parent Coordinator, Ms. Arlette at <a href="mailto:Amartinezmedrano2@schools.nyc.gov" className="text-[#0078D4] font-medium hover:underline">Amartinezmedrano2@schools.nyc.gov</a>.
              </p>
            </div>
          </div>

          {/* School Hours */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8BB09]/10 flex items-center justify-center text-[#D4A908]">
                <ClockIcon />
              </div>
              What are the school hours?
            </h2>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">School Day</div>
                  <div className="text-3xl font-black text-gray-900">Monday - Friday</div>
                  <div className="text-2xl font-bold text-[#0078D4] mt-2">8:00 AM - 2:10 PM</div>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4 font-medium">This schedule applies to all students.</p>
            </div>
          </div>

          {/* Student ID & NYCSA */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Where can I find my child's student ID (OSIS) and Account Creation Code?
            </h2>
            <div className="bg-white rounded-3xl p-8 border-2 border-[#0078D4]">
              <p className="text-gray-700 leading-relaxed mb-6">
                To have access to all student information including report cards (K-12), attendance, and academic progress, sign up for a <span className="font-bold">New York City Schools Account (NYCSA)</span>. The expectation is that all families have signed up for NYCSA. This account is critical in staying up to date with important announcements from the DOE.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                You will need your child's account creation code to sign up. Please contact PS 96 staff if you do not have this information. If you need any assistance creating this account please contact Ms. Arlette the Parent Coordinator.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.schools.nyc.gov/learning/student-journey/nyc-schools-account"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0078D4] text-white font-bold rounded-full hover:bg-[#006ABC] transition-colors duration-200 shadow-md"
                >
                  Create an Account
                  <ExternalLinkIcon />
                </a>
                <a
                  href="https://www.schools.nyc.gov/learning/student-journey/nyc-schools-account"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 font-bold rounded-full hover:bg-gray-200 transition-colors duration-200 border-2 border-gray-300"
                >
                  Forgot Password?
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>

          {/* School Letter */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Where can I request a school letter?
            </h2>
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                Please call the main office at <a href="tel:212-860-5851" className="text-[#0078D4] font-bold hover:underline">212-860-5851</a> to request a school letter or sign up for the school letter request form in the school main lobby.
                <span className="block mt-2 font-bold text-gray-900">Please allow 24 hours to process your request.</span>
              </p>
            </div>
          </div>

          {/* Uniforms */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Does my child have to wear uniforms?
            </h2>
            <div className="bg-gradient-to-br from-[#0078D4] to-[#0091EA] rounded-3xl p-8 text-white shadow-xl">
              <p className="text-lg font-semibold mb-4">
                Yes. The expectation for all students is that they are dressed appropriately in full uniform.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <div className="text-sm text-white/90 mb-2">Order uniforms online:</div>
                <a
                  href="http://www.Smooth.com/PS96ACT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-white hover:underline break-all"
                >
                  www.Smooth.com/PS96ACT
                </a>
              </div>
              <p className="mt-4 text-white/95">
                Please contact Ms. Arlette at <a href="mailto:Amartinezmedrano2@schools.nyc.gov" className="font-bold hover:underline">Amartinezmedrano2@schools.nyc.gov</a> for more information.
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Social Media
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="https://www.instagram.com/ps96act/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 text-white text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">📸</div>
                <div className="font-bold text-xl mb-2">Instagram</div>
                <div className="text-white/90">@PS96ACT</div>
              </a>
              <a
                href="http://www.facebook.com/PS96Lions"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 text-white text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">📘</div>
                <div className="font-bold text-xl mb-2">Facebook</div>
                <div className="text-white/90">@PS96lions</div>
              </a>
              <a
                href="http://www.PS96ACT.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-[#D4A908] to-[#E8BB09] rounded-3xl p-6 text-gray-900 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">🌐</div>
                <div className="font-bold text-xl mb-2">Website</div>
                <div className="text-gray-800">www.PS96ACT.com</div>
              </a>
            </div>
          </div>

          {/* Transportation */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Transportation (OPT)
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bus Eligibility</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Students with IEP's may be eligible for a bus if it is stated on their most recent IEP. Consult with:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#0078D4] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      School Psychologist Ms. Horel: <a href="mailto:khorel@schools.nyc.gov" className="text-[#0078D4] font-medium hover:underline">khorel@schools.nyc.gov</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#0078D4] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      IEP Coordinator Ms. Danielson: <a href="mailto:sdanielson@schools.nyc.gov" className="text-[#0078D4] font-medium hover:underline">sdanielson@schools.nyc.gov</a>
                    </div>
                  </li>
                </ul>

                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 mb-4">
                  <p className="text-gray-800 font-medium">
                    <span className="font-bold text-blue-900">Note:</span> PS 96 is not a bussing school, so not all students are eligible. Students must be eligible for specialized transportation on their IEP or be in temporary housing (i.e. shelter) or other listed exceptions.
                  </p>
                </div>

                <h4 className="font-bold text-gray-900 mb-3">MetroCard Eligibility:</h4>
                <p className="text-gray-700 leading-relaxed">
                  Students are eligible to receive a MetroCard twice a year (September and January) according to distance eligibility.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Important Deadline</h3>
                <p className="text-gray-700 leading-relaxed">
                  Request to receive bus services for the next school year must be requested by <span className="font-bold text-gray-900">June 1</span> to avoid interruption to services.
                </p>
              </div>
            </div>
          </div>

          {/* Afterschool Programs */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Will there be afterschool programs offered this year?
            </h2>
            <p className="text-xl text-gray-700 font-bold mb-8">
              We offer FREE application-based afterschool programming for students in grades K-8
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {afterschoolPrograms.map((program, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-[#0078D4] hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-[#0078D4] to-[#0091EA] text-white px-4 py-2 rounded-full inline-block mb-4 font-bold">
                    {program.grades}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{program.name}</h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <ClockIcon />
                      <div>
                        <div className="font-semibold text-gray-900">Schedule:</div>
                        <div className="text-gray-700">{program.schedule}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <PhoneIcon />
                      <div>
                        <div className="font-semibold text-gray-900">Contact:</div>
                        <div className="text-gray-700">{program.contact}</div>
                        <a href={`mailto:${program.email}`} className="text-[#0078D4] hover:underline text-sm">
                          {program.email}
                        </a>
                        {program.phone && (
                          <a href={`tel:${program.phone}`} className="block text-[#0078D4] hover:underline text-sm">
                            {program.phone}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-200">
                    <div className="font-bold text-gray-900 mb-2">Application:</div>
                    <p className="text-sm text-gray-700">{program.application}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* School Pictures */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              School Pictures - Lifetouch, Inc.
            </h2>
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                For questions about school pictures, contact Lifetouch Customer Service:
              </p>
              <a href="tel:1-866-955-8342" className="text-2xl font-bold text-[#0078D4] hover:underline mt-3 inline-block">
                1-866-955-8342
              </a>
            </div>
          </div>

          {/* School Food */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              School Food - Family Income Inquiry Form
            </h2>
            <div className="bg-gradient-to-br from-[#E8BB09] to-[#F4C430] rounded-3xl p-8 text-gray-900 shadow-xl">
              <p className="text-lg font-bold mb-6">
                We ask you to take a few moments to complete the FAMILY INCOME INQUIRY FORM to help us receive funding to ensure our students continue to receive free meals as a Title 1 school.
              </p>

              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-xl mb-4">You will need:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <div>Zip code <span className="font-bold">10035</span></div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <div>Choose your district: <span className="font-bold">New York City Public Schools</span></div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <div>The names and incomes of every member of your household</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <div>The school, grade, birthdate of every student in your household (Optional)</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <div>The last 4 digits of your social security number and electronic signature</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <div>A valid email address or phone number for the Office of School Food to communicate about the status of the application (Optional)</div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 text-white">
                <p className="font-bold mb-2">⏱️ Time to complete: ~20 minutes</p>
                <p className="text-white/90 text-sm">This form is required each year from every NYCDOE family.</p>
              </div>
            </div>
          </div>

        </section>
      </main>

      {/* Footer - Same as HomePage */}
      <footer className="bg-gray-900 text-gray-400 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E8BB09] via-[#D4A908] to-[#0078D4] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">96</span>
              </div>
              <div>
                <div className="text-white font-black text-xl">PS 96 Lions</div>
                <div className="text-sm text-gray-500">Lanzetta School</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-8">
              216 E 120th St, New York, NY 10035 | (212) 860-5851
            </p>
            <div className="pt-8 border-t border-gray-800 text-sm text-gray-600">
              <p>&copy; {new Date().getFullYear()} Joseph C. Lanzetta School of the Arts, Collaboration, & Technology</p>
              <p className="mt-1">Part of the New York City Department of Education</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQPage;
