import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Icon Components - Inline SVG with proper stroke weights
const SparklesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const AcademicCapIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const ClusterTeamPage = () => {
  // Team Data from the slideshow
  const departments = [
    {
      category: 'Arts Department',
      accentColor: 'border-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      members: [
        {
          name: 'Ms. Wysong',
          gradesServed: 'K-8',
          role: 'Art & Maker Space Teacher',
          bio: 'My family is me, Mr. Wysong and my son, Calder. I have a dog named Little. I love to work in my garden.',
          artExcitement: 'In Art and Maker Space, I\'m most excited for you to learn about creating shapes, using colors, working on design and engineering.',
          makerSpaceInfo: 'In MakerSpace we will grow using hydroponics and learn about sustainability practices and climate justice.'
        },
        {
          name: 'Ms. Heller',
          gradesServed: 'K-8',
          role: 'Music Teacher',
          bio: 'I was once a ski instructor. I play over 7 instruments.',
          musicExcitement: 'In Music, I\'m most excited for you to practice learning new ways of expression. Playing music, singing, dancing and performing.'
        }
      ]
    },
    {
      category: 'Science Department',
      accentColor: 'border-emerald-500',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      members: [
        {
          name: 'Mr. Okon',
          gradesServed: '3-5',
          role: 'Elementary Science Teacher',
          funFact: 'I love caring for the sick.',
          elementaryExcitement: 'In Elementary science, I\'m excited about taking you through a world of discovery through observation, experimentation, and exploration. The ability to ask "Why?" and find answers through hands-on activities and experiments.'
        },
        {
          name: 'Mrs. Galvan',
          gradesServed: '7 and 8',
          role: 'Middle School Science Teacher',
          funFact1: 'This is my first year at P.S. 96!',
          middleSchoolExcitement: 'In middle school science, I am most excited for you to learn about science in a hands-on way through rigorous and fascinating laboratory experiments!'
        }
      ]
    },
    {
      category: 'Physical Education & Technology',
      accentColor: 'border-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      members: [
        {
          name: 'Mr. Goldberg',
          gradesServed: '3K-8th',
          role: 'Physical Education Teacher',
          funFact1: 'I love pizza',
          funFact2: 'I\'ve gone to Disney World 7 times',
          peExcitement: 'In Physical Education, I\'m most excited for you to focus on your health and wellbeing. You will be taking the NYC Fitnessgram. This is the city\'s annual health-related fitness assessment. We will also learn sport specific skills, play various sports and games. Most importantly, we will have fun!',
          signOff: 'Have a great summer and be active!'
        },
        {
          name: 'Dr. Mittoo',
          gradesServed: '4 - 8',
          role: 'Technology Teacher',
          funFact1: 'I enjoy watching documentaries.',
          funFact2: 'I love going on trips.',
          techExcitement: 'I\'m most excited for you to learn how to use computers to do research for new knowledge, to be creative, and share ideas or information using text, pictures/graphics, and video clips in microsoft words program or slides presentations. The curriculum is Digital Citizenship: Media-knowledge and safe use, and Scratch Coding (block based programming language).'
        }
      ]
    },
    {
      category: 'Instructional Coaches',
      accentColor: 'border-amber-500',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700',
      members: [
        {
          name: 'Ms. Braun',
          gradesServed: '3K-2',
          role: 'Speech & Language Coach',
          funFact1: 'I love dogs!',
          funFact2: 'I take many photos in nature.',
          roleDescription: 'At P.S. 96, I support the whole child in acquiring and improving their language skills. This takes place in an environment that fosters hard work and kindness.'
        },
        {
          name: 'Dr. Sookdeo',
          gradesServed: '3K-8',
          role: 'Instructional Coach',
          funFact1: 'I love animals.',
          funFact2: 'I enjoy traveling.',
          roleDescription: 'At P.S. 96, I support all teachers from 3K-8th grade with new skills and fun activities for students to enjoy learning.'
        }
      ]
    },
    {
      category: 'ENL Department',
      accentColor: 'border-rose-500',
      bgColor: 'bg-rose-50',
      textColor: 'text-rose-700',
      description: 'At PS 96, our ENL team is here to help our multilingual learners grow and shine. We support students as they build their English skills in fun and engaging ways—through reading, writing, speaking, and listening activities. We celebrate every child\'s culture and language while helping them feel confident and excited about learning. With lots of encouragement, creativity, and care, we make sure our students feel right at home and ready to succeed.',
      members: [
        {
          name: 'Ms. Nikas',
          gradesServed: 'K-4th',
          role: 'ENL Teacher',
          bio1: 'I love to eat steak & fries',
          bio2: 'I\'m a Greek Dance Advisor'
        },
        {
          name: 'Ms. Garcia',
          gradesServed: '7th & 8th',
          role: 'ENL Teacher',
          bio1: 'I love my dog.',
          bio2: 'My favorite color is black.'
        },
        {
          name: 'Ms. Johnson',
          gradesServed: '5th-7th',
          role: 'ENL Teacher',
          bio1: 'I have a cat named Sparkles.',
          bio2: 'I love to crochet.'
        }
      ]
    },
    {
      category: 'Counseling Department',
      accentColor: 'border-teal-500',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-700',
      members: [
        {
          name: 'Ms. Desroches',
          role: 'School Counselor'
        },
        {
          name: 'Ms. Gonzalez-Soto',
          role: 'Social Worker'
        },
        {
          name: 'Mr. Alvarez',
          role: 'School Counselor'
        }
      ]
    },
    {
      category: 'Related Services',
      accentColor: 'border-indigo-500',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700',
      members: [
        {
          name: 'Ms. Paskoff',
          role: 'Related Services Provider'
        },
        {
          name: 'Ms. Fisher',
          role: 'Related Services Provider'
        },
        {
          name: 'Ms. Gita',
          role: 'Related Services Provider'
        }
      ]
    },
    {
      category: 'IEP Team',
      accentColor: 'border-violet-500',
      bgColor: 'bg-violet-50',
      textColor: 'text-violet-700',
      members: [
        {
          name: 'Ms. Danielson',
          role: 'IEP Coordinator'
        },
        {
          name: 'Ms. Horel',
          role: 'School Psychologist'
        },
        {
          name: 'Ms. Kati',
          role: 'IEP Teacher'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 mb-20" style={{
          background: 'linear-gradient(to bottom, #00213a 0%, #00213a 70%, rgba(0, 33, 58, 0.7) 80%, rgba(0, 33, 58, 0.3) 90%, rgba(255, 255, 255, 1) 100%)'
        }}>
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <AcademicCapIcon />
                <span className="text-sm font-semibold text-white tracking-tight">Cluster Classes</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight" style={{letterSpacing: '-0.02em'}}>
              Meet Our Specialists
            </h1>

            <p className="text-xl text-white/90 font-normal max-w-2xl leading-relaxed">
              Welcome to Specials at P.S. 96 for the 2025-2026 school year
            </p>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24 mt-12">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 lg:p-12">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#fdbb2e] to-[#fdc951] flex items-center justify-center flex-shrink-0 shadow-sm">
                <UserIcon />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-1 tracking-tight" style={{letterSpacing: '-0.02em'}}>
                  Principal's Message
                </h2>
                <p className="text-sm text-gray-600 font-medium">Mr. Konstantinakos</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="font-medium">Dear PS 96 Lions,</p>
              <p>
                I am excited to welcome you back to P.S. 96 for another wonderful school year! Enjoy your summer by playing and exploring, and get ready to return in September with a curious mind and a dedicated heart. Go lions!
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-900 font-medium">Sincerely,</p>
                <p className="text-lg font-semibold text-[#00213a] tracking-tight">Mr. Konstantinakos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Sections */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {departments.map((dept, deptIdx) => (
            <section key={deptIdx} className="relative">
              {/* Department Header */}
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 mb-4">
                  <SparklesIcon />
                  <span className="text-sm font-semibold text-gray-700 tracking-tight">{dept.category}</span>
                </div>

                <h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight" style={{letterSpacing: '-0.02em'}}>
                  {dept.category}
                </h2>

                {/* Department Description (for ENL) */}
                {dept.description && (
                  <div className="max-w-4xl">
                    <div className={`${dept.bgColor} border-l-4 ${dept.accentColor} rounded-lg p-6`}>
                      <p className="text-gray-700 leading-relaxed">{dept.description}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Team Members Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dept.members.map((member, memberIdx) => (
                  <article
                    key={memberIdx}
                    className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200"
                  >
                    {/* Member Image Placeholder */}
                    <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-gray-300 text-center">
                          <UserIcon />
                          <p className="text-xs mt-2">Photo placeholder</p>
                        </div>
                      </div>
                      {/* Accent corner */}
                      <div className={`absolute top-0 right-0 w-20 h-20 ${dept.bgColor} opacity-60 rounded-bl-full`}></div>
                    </div>

                    {/* Member Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 tracking-tight" style={{letterSpacing: '-0.02em'}}>
                        {member.name}
                      </h3>

                      {member.role && (
                        <p className="text-sm text-gray-600 font-medium mb-4">{member.role}</p>
                      )}

                      {member.gradesServed && (
                        <div className="inline-block mb-4">
                          <span className={`${dept.bgColor} ${dept.textColor} px-3 py-1 rounded-lg text-sm font-medium`}>
                            Grades: {member.gradesServed}
                          </span>
                        </div>
                      )}

                      <div className="space-y-3 mt-4">
                        {/* Bio */}
                        {member.bio && (
                          <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                        )}

                        {/* Individual bio items */}
                        {member.bio1 && (
                          <div className="bg-gray-50 rounded-lg p-3 border-l-2 border-gray-300">
                            <p className="text-sm text-gray-700">{member.bio1}</p>
                          </div>
                        )}
                        {member.bio2 && (
                          <div className="bg-gray-50 rounded-lg p-3 border-l-2 border-gray-300">
                            <p className="text-sm text-gray-700">{member.bio2}</p>
                          </div>
                        )}

                        {/* Fun Facts */}
                        {member.funFact && (
                          <div className={`${dept.bgColor} rounded-lg p-3 border-l-2 ${dept.accentColor}`}>
                            <p className="text-sm text-gray-800">{member.funFact}</p>
                          </div>
                        )}
                        {member.funFact1 && (
                          <div className={`${dept.bgColor} rounded-lg p-3 border-l-2 ${dept.accentColor}`}>
                            <p className="text-sm text-gray-800">{member.funFact1}</p>
                          </div>
                        )}
                        {member.funFact2 && (
                          <div className={`${dept.bgColor} rounded-lg p-3 border-l-2 ${dept.accentColor}`}>
                            <p className="text-sm text-gray-800">{member.funFact2}</p>
                          </div>
                        )}

                        {/* Subject-specific excitement/descriptions */}
                        {member.artExcitement && (
                          <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
                            <p className="text-sm text-gray-700 leading-relaxed">{member.artExcitement}</p>
                          </div>
                        )}
                        {member.makerSpaceInfo && (
                          <div className="bg-white border border-gray-200 rounded-lg p-4">
                            <p className="text-sm text-gray-700 leading-relaxed">{member.makerSpaceInfo}</p>
                          </div>
                        )}
                        {member.musicExcitement && (
                          <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
                            <p className="text-sm text-gray-700 leading-relaxed">{member.musicExcitement}</p>
                          </div>
                        )}
                        {member.elementaryExcitement && (
                          <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
                            <p className="text-sm text-gray-700 leading-relaxed">{member.elementaryExcitement}</p>
                          </div>
                        )}
                        {member.middleSchoolExcitement && (
                          <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
                            <p className="text-sm text-gray-700 leading-relaxed">{member.middleSchoolExcitement}</p>
                          </div>
                        )}
                        {member.peExcitement && (
                          <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
                            <p className="text-sm text-gray-700 leading-relaxed">{member.peExcitement}</p>
                          </div>
                        )}
                        {member.techExcitement && (
                          <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
                            <p className="text-sm text-gray-700 leading-relaxed">{member.techExcitement}</p>
                          </div>
                        )}
                        {member.roleDescription && (
                          <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
                            <p className="text-sm text-gray-700 leading-relaxed">{member.roleDescription}</p>
                          </div>
                        )}
                        {member.signOff && (
                          <div className={`${dept.bgColor} rounded-lg p-4 mt-4`}>
                            <p className="text-sm font-medium text-gray-800">{member.signOff}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="relative mt-24 py-20 bg-[#00213a]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 mb-6">
              <SparklesIcon />
              <span className="text-sm font-semibold text-white tracking-tight">2025-2026 School Year</span>
            </div>

            <h2 className="text-4xl font-semibold text-white mb-6 tracking-tight" style={{letterSpacing: '-0.02em'}}>
              Ready for an Amazing School Year
            </h2>

            <p className="text-lg text-gray-300 font-normal leading-relaxed">
              Our specialists are excited to work with you and help you grow in all areas
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ClusterTeamPage;
