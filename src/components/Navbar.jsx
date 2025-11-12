import React, { useState, useEffect, useRef } from 'react';

const ChevronDownIcon = () => (
  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [mobileOpenSubDropdown, setMobileOpenSubDropdown] = useState(null);
  const dropdownRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutside = Object.values(dropdownRefs.current).every(
        (ref) => ref && !ref.contains(event.target)
      );
      if (isOutside) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    {
      label: 'About Us',
      dropdown: [
        { label: 'Frequently Asked Questions', href: '/faq' }
      ]
    },
    {
      label: 'Academics',
      dropdown: [
        { label: 'Elementary School Information', href: '/elementary' },
        { label: 'Middle School Information', href: '/middle-school' },
        {
          label: 'Cluster Classes',
          subDropdown: [
            { label: 'Meet The Team', href: '/cluster-classes/team' }
          ]
        },
        { label: 'iReady Family Center', href: 'https://i-readycentral.com/familycenter/' }
      ]
    },
    {
      label: 'Partnerships',
      dropdown: [
        { label: 'Global Kids, Inc.', href: '/global_kids_inc' },
        { label: 'Harlem YMCA', href: '/harlem_ymca' },
        { label: 'Union Settlement', href: '/union_settlement' },
        { label: 'Cool Culture', href: '/cool_culture' }
      ]
    },
    {
      label: 'Student Life',
      dropdown: [
        { label: 'Green Team', href: '/green-team' },
        { label: 'Girls Inc.', href: '/girls-inc' },
        { label: 'Sports @ 96', href: '/sports' }
      ]
    },
    { label: 'Calendar', href: '/calendar' },
    {
      label: 'Contact Us',
      dropdown: [
        { label: 'Directions', href: '/directions' },
        { label: 'Faculty and Staff Directory', href: '/directory/faculty' }
      ]
    }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Skip to content - visible on focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#00213a] focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`relative mt-6 rounded-2xl transition-all duration-200 overflow-visible ${
            isScrolled
              ? 'bg-white shadow-md'
              : 'bg-white/80 backdrop-blur-lg shadow-sm'
          }`}
          aria-label="Primary navigation"
        >
          <div className="flex items-center justify-between h-16 px-6">
            {/* Logo and School Name */}
            <a href="/" className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <img
                  src="/assets/images/ps96act_logo.png"
                  alt="PS 96 Joseph C. Lanzetta School Logo"
                  className="h-12 w-auto"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-base font-semibold text-gray-900 leading-none tracking-tight">
                  PS 96
                </span>
                <span className="hidden lg:block text-xs text-gray-600 leading-none mt-0.5 font-medium">
                  Lanzetta School
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => {
                const hasDropdown = item.dropdown && item.dropdown.length > 0;

                if (!hasDropdown) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#00213a] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00213a] focus-visible:ring-offset-2 rounded-lg"
                    >
                      {item.label}
                    </a>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="relative"
                    ref={(el) => (dropdownRefs.current[index] = el)}
                    onMouseEnter={() => setOpenDropdown(index)}
                    onMouseLeave={() => {
                      setOpenDropdown(null);
                      setOpenSubDropdown(null);
                    }}
                  >
                    <button
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#00213a] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00213a] focus-visible:ring-offset-2 rounded-lg"
                      aria-expanded={openDropdown === index}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDownIcon />
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdown === index && (
                      <div className="absolute left-0 top-full pt-2 w-64 z-50">
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => {
                          const hasSubDropdown = dropdownItem.subDropdown && dropdownItem.subDropdown.length > 0;

                          if (!hasSubDropdown) {
                            return (
                              <a
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#00213a] transition-colors duration-150"
                              >
                                {dropdownItem.label}
                              </a>
                            );
                          }

                          return (
                            <div
                              key={dropdownItem.label}
                              className="relative"
                              onMouseEnter={() => setOpenSubDropdown(`${index}-${dropdownIndex}`)}
                              onMouseLeave={() => setOpenSubDropdown(null)}
                            >
                              <button
                                className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#00213a] transition-colors duration-150 text-left"
                                aria-expanded={openSubDropdown === `${index}-${dropdownIndex}`}
                                aria-haspopup="true"
                              >
                                {dropdownItem.label}
                                <ChevronRightIcon />
                              </button>

                              {/* Sub-dropdown Menu */}
                              {openSubDropdown === `${index}-${dropdownIndex}` && (
                                <div className="absolute left-full top-0 pl-2 w-56 z-50">
                                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                                    {dropdownItem.subDropdown.map((subItem) => (
                                      <a
                                        key={subItem.label}
                                        href={subItem.href}
                                        className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#00213a] transition-colors duration-150"
                                      >
                                        {subItem.label}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <a
                href="#visit"
                className="ml-3 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#00213a] to-[#003a5d] hover:from-[#002844] hover:to-[#001f33] rounded-lg shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00213a] focus-visible:ring-offset-2"
              >
                Visit
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00213a] focus-visible:ring-offset-2"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 px-4 py-4 space-y-1 bg-white max-h-[calc(100vh-100px)] overflow-y-auto">
              {navItems.map((item, index) => {
                const hasDropdown = item.dropdown && item.dropdown.length > 0;

                if (!hasDropdown) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:text-[#00213a] hover:bg-gray-50 rounded-lg transition-colors duration-150"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  );
                }

                return (
                  <div key={item.label} className="space-y-1">
                    <button
                      onClick={() => setMobileOpenDropdown(mobileOpenDropdown === index ? null : index)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-base font-medium text-gray-700 hover:text-[#00213a] hover:bg-gray-50 rounded-lg transition-colors duration-150"
                      aria-expanded={mobileOpenDropdown === index}
                    >
                      {item.label}
                      <ChevronDownIcon />
                    </button>

                    {/* Mobile Dropdown */}
                    {mobileOpenDropdown === index && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => {
                          const hasSubDropdown = dropdownItem.subDropdown && dropdownItem.subDropdown.length > 0;

                          if (!hasSubDropdown) {
                            return (
                              <a
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#00213a] hover:bg-gray-50 rounded-lg transition-colors duration-150"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {dropdownItem.label}
                              </a>
                            );
                          }

                          return (
                            <div key={dropdownItem.label} className="space-y-1">
                              <button
                                onClick={() => {
                                  const key = `${index}-${dropdownIndex}`;
                                  setMobileOpenSubDropdown(mobileOpenSubDropdown === key ? null : key);
                                }}
                                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#00213a] hover:bg-gray-50 rounded-lg transition-colors duration-150"
                                aria-expanded={mobileOpenSubDropdown === `${index}-${dropdownIndex}`}
                              >
                                {dropdownItem.label}
                                <ChevronDownIcon />
                              </button>

                              {/* Mobile Sub-dropdown */}
                              {mobileOpenSubDropdown === `${index}-${dropdownIndex}` && (
                                <div className="pl-4 space-y-1">
                                  {dropdownItem.subDropdown.map((subItem) => (
                                    <a
                                      key={subItem.label}
                                      href={subItem.href}
                                      className="block px-3 py-2 text-sm font-medium text-gray-500 hover:text-[#00213a] hover:bg-gray-50 rounded-lg transition-colors duration-150"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              <a
                href="#visit"
                className="block text-center px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#00213a] to-[#003a5d] rounded-lg shadow-sm mt-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule a Visit
              </a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
