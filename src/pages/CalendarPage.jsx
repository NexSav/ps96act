import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import events from '../data/events';

const CalendarPage = () => {
  const [currentView, setCurrentView] = useState('month');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedFilters, setSelectedFilters] = useState({
    holiday: true,
    academic: true,
    earlyDismissal: true,
    testing: true,
    pta: true,
    afterSchool: true,
    community: true
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [language, setLanguage] = useState('en');
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);

  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    const firstDay = new Date(year, month, 1).getDay();
    for (let i = 0; i < firstDay; i++) days.push(null);
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const getStartOfWeek = (date) => {
    const d = new Date(date);
    const day = d.getDay();
    d.setDate(d.getDate() - day);
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const getWeekDays = () => {
    const base = new Date(currentYear, currentMonth, 1);
    const start = getStartOfWeek(base);
    const weekStart = new Date(start);
    weekStart.setDate(start.getDate() + currentWeekOffset * 7);
    const days = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(weekStart);
      d.setDate(weekStart.getDate() + i);
      days.push(d);
    }
    return { weekStart, days };
  };

  const getFilteredEvents = () => {
    return events.filter((event) => selectedFilters[event.category]);
  };

  const getUpcomingEvents = () => {
    const today = new Date();
    return getFilteredEvents()
      .filter((event) => event.date >= today)
      .sort((a, b) => a.date - b.date)
      .slice(0, 5);
  };

  const prevMonth = () => {
    if (currentView === 'week') {
      setCurrentWeekOffset(currentWeekOffset - 1);
      return;
    }
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentView === 'week') {
      setCurrentWeekOffset(currentWeekOffset + 1);
      return;
    }
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const categoryColors = {
    holiday: 'bg-[#00213a]',
    academic: 'bg-[#fdbb2e]',
    earlyDismissal: 'bg-orange-600',
    testing: 'bg-purple-700',
    pta: 'bg-[#00213a]',
    afterSchool: 'bg-[#fdbb2e]',
    community: 'bg-teal-600'
  };

  const getCategoryName = (category) => {
    switch (category) {
      case 'holiday':
        return 'Holiday';
      case 'academic':
        return 'Academic';
      case 'earlyDismissal':
        return 'Early Dismissal';
      case 'testing':
        return 'Testing';
      case 'pta':
        return 'PTA';
      case 'afterSchool':
        return 'After-School';
      case 'community':
        return 'Community Event';
      default:
        return category;
    }
  };

  const getCategoryNameES = (category) => {
    switch (category) {
      case 'holiday':
        return 'Feriado';
      case 'academic':
        return 'Académico';
      case 'earlyDismissal':
        return 'Salida Temprana';
      case 'testing':
        return 'Exámenes';
      case 'pta':
        return 'PTA';
      case 'afterSchool':
        return 'Programas Después de Clases';
      case 'community':
        return 'Evento Comunitario';
      default:
        return category;
    }
  };

  const formatDate = (dateObj) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateObj).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', options);
  };

  const getEventTitle = (event) => (language === 'es' && event.titleES ? event.titleES : event.title);
  const getEventDescription = (event) => (language === 'es' && event.descriptionES ? event.descriptionES : event.description || '');

  const toggleFilter = (filter) => {
    setSelectedFilters({ ...selectedFilters, [filter]: !selectedFilters[filter] });
  };

  const getEventsForDay = (day) => {
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === day.getDate() &&
        eventDate.getMonth() === day.getMonth() &&
        eventDate.getFullYear() === day.getFullYear() &&
        (selectedFilters[event.category] || false)
      );
    });
  };

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const days = getDaysInMonth(currentMonth, currentYear);
  const upcomingEvents = getUpcomingEvents();

  const closeModal = () => setSelectedEvent(null);

  return (
    <main className="bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20" style={{
        background: 'linear-gradient(to bottom, #00213a 0%, #00213a 70%, rgba(0, 33, 58, 0.7) 80%, rgba(0, 33, 58, 0.3) 90%, rgba(255, 255, 255, 1) 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="inline-flex items-center text-sm font-semibold px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white border border-white/20">
              School Events
            </span>
          </div>
          <h1 className="text-5xl font-semibold text-white mb-4 tracking-tight" style={{letterSpacing: '-0.02em'}}>
            School Calendar
          </h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Stay informed about school events, holidays, and important dates throughout the academic year.
          </p>
        </div>
      </section>

      {/* Main Calendar Section */}
      <section className="py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-fit">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Events</h3>
              <div className="space-y-3">
                {[
                  { key: 'holiday', label: 'Holidays', color: '#00213a' },
                  { key: 'academic', label: 'Academic Events', color: '#fdbb2e' },
                  { key: 'earlyDismissal', label: 'Early Dismissal', color: '#f97316' },
                  { key: 'testing', label: 'Testing', color: '#9333ea' },
                  { key: 'pta', label: 'PTA Events', color: '#00213a' },
                  { key: 'afterSchool', label: 'After-School Programs', color: '#fdbb2e' },
                  { key: 'community', label: 'Community Events', color: '#14b8a6' }
                ].map((f) => (
                  <div key={f.key} className="flex items-center">
                    <input
                      id={`filter-${f.key}`}
                      type="checkbox"
                      checked={selectedFilters[f.key]}
                      onChange={() => toggleFilter(f.key)}
                      className="h-5 w-5 text-[#00213a] rounded border-gray-300 focus:ring-[#00213a]/40"
                    />
                    <label htmlFor={`filter-${f.key}`} className="ml-2 flex items-center text-gray-700">
                      <span className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: f.color }}></span>
                      {f.label}
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Language</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#00213a]/40 ${
                      language === 'en' ? 'bg-[#00213a] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-pressed={language === 'en'}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('es')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#00213a]/40 ${
                      language === 'es' ? 'bg-[#00213a] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-pressed={language === 'es'}
                  >
                    ES
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">View Options</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setCurrentView('month')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#00213a]/40 ${
                      currentView === 'month' ? 'bg-[#00213a] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-pressed={currentView === 'month'}
                  >
                    Month
                  </button>
                  <button
                    onClick={() => {
                      setCurrentView('week');
                      setCurrentWeekOffset(0);
                    }}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#00213a]/40 ${
                      currentView === 'week' ? 'bg-[#00213a] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-pressed={currentView === 'week'}
                  >
                    Week
                  </button>
                  <button
                    onClick={() => setCurrentView('list')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#00213a]/40 ${
                      currentView === 'list' ? 'bg-[#00213a] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-pressed={currentView === 'list'}
                  >
                    List
                  </button>
                </div>
                <button
                  onClick={() => {
                    setCurrentMonth(new Date().getMonth());
                    setCurrentYear(new Date().getFullYear());
                    setCurrentWeekOffset(0);
                  }}
                  className="w-full mt-3 py-2 border border-[#00213a] text-[#00213a] rounded-md hover:bg-[#00213a] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#00213a]/40 text-sm font-medium"
                >
                  Today
                </button>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Upcoming Events</h3>
                <div className="space-y-3">
                  {upcomingEvents.length > 0 ? (
                    upcomingEvents.map((event) => (
                      <div
                        key={event.id}
                        className="border-l-4 pl-3 py-1"
                        style={{
                          borderColor:
                            event.category === 'holiday' ? '#00213a' :
                            event.category === 'academic' ? '#fdbb2e' :
                            event.category === 'earlyDismissal' ? '#f97316' :
                            event.category === 'testing' ? '#9333ea' :
                            event.category === 'pta' ? '#00213a' :
                            event.category === 'community' ? '#14b8a6' :
                            '#fdbb2e'
                        }}
                      >
                        <div className="text-xs text-gray-600">{formatDate(event.date)}</div>
                        <div className="text-sm font-medium text-gray-900">{getEventTitle(event)}</div>
                        <div className="text-xs text-gray-700">
                          {event.allDay ? 'All Day' : `${event.startTime || ''}${event.startTime && event.endTime ? ' - ' : ''}${event.endTime || ''}`}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-gray-500 italic">No upcoming events based on your filters.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Main Calendar */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Calendar Header */}
                <div className="bg-[#00213a] text-white px-6 py-4 flex items-center justify-between">
                  <div>
                    {currentView === 'week' ? (
                      (() => {
                        const { days: wd } = getWeekDays();
                        const startLabel = `${wd[0].toLocaleString('default', { month: 'short' })} ${wd[0].getDate()}`;
                        const endLabel = `${wd[6].toLocaleString('default', { month: 'short' })} ${wd[6].getDate()}, ${wd[6].getFullYear()}`;
                        return <h3 className="text-base font-semibold">Week of {startLabel} – {endLabel}</h3>;
                      })()
                    ) : (
                      <h3 className="text-base font-semibold">{monthNames[currentMonth]} {currentYear}</h3>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={prevMonth}
                      className="p-2 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                      aria-label="Previous"
                    >
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button
                      onClick={nextMonth}
                      className="p-2 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                      aria-label="Next"
                    >
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Weekday Headers */}
                <div className="grid grid-cols-7 text-center bg-gray-50 border-b border-gray-200">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                    <div key={i} className="py-2 text-xs font-medium text-gray-700">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Month View */}
                {currentView === 'month' && (
                  <div className="grid grid-cols-7 auto-rows-fr border-b border-gray-200 min-h-[560px]">
                    {days.map((day, index) => {
                      const dayEvents = day ? getEventsForDay(day) : [];
                      const isToday = day && day.toDateString() === new Date().toDateString();
                      return (
                        <div
                          key={index}
                          className={`border-t border-l p-2 h-32 ${day ? 'bg-white' : 'bg-gray-50 text-gray-400'} ${
                            isToday ? 'bg-[#fdbb2e]/10 ring-2 ring-inset ring-[#fdbb2e]' : ''
                          } ${index % 7 === 6 ? 'border-r' : ''}`}
                        >
                          {day && (
                            <>
                              <div className={`text-right mb-1 text-xs ${isToday ? 'font-semibold text-[#00213a]' : 'text-gray-700'}`}>
                                {day.getDate()}
                              </div>
                              <div className="space-y-1 overflow-y-auto max-h-[80px]">
                                {dayEvents.map((event) => (
                                  <button
                                    key={event.id}
                                    onClick={() => setSelectedEvent(event)}
                                    className={`text-[11px] w-full text-left px-2 py-1 rounded text-white ${categoryColors[event.category]} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00213a] flex items-center justify-between`}
                                    title={getEventTitle(event)}
                                    aria-label={`${getEventTitle(event)} on ${formatDate(event.date)}`}
                                  >
                                    <span className="truncate">{getEventTitle(event)}</span>
                                  </button>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Week View */}
                {currentView === 'week' && (() => {
                  const { days: weekDays } = getWeekDays();
                  return (
                    <div className="border-b border-gray-200 min-h-[360px]">
                      <div className="grid grid-cols-7 text-center bg-gray-50 border-b border-gray-200">
                        {weekDays.map((d, i) => (
                          <div key={i} className="py-2 text-xs font-medium text-gray-700">
                            <div>{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()]}</div>
                            <div className="text-[10px] text-gray-500">{d.toLocaleString('default', { month: 'short' })} {d.getDate()}</div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 auto-rows-fr min-h-[300px]">
                        {weekDays.map((day, index) => {
                          const dayEvents = getEventsForDay(day);
                          const isToday = day.toDateString() === new Date().toDateString();
                          return (
                            <div
                              key={index}
                              className={`border-t border-l p-3 ${index % 7 === 6 ? 'border-r' : ''} ${
                                isToday ? 'bg-[#fdbb2e]/10 ring-2 ring-inset ring-[#fdbb2e]' : 'bg-white'
                              }`}
                            >
                              <div className={`text-right mb-2 text-xs ${isToday ? 'font-semibold text-[#00213a]' : 'text-gray-700'}`}>{day.getDate()}</div>
                              <div className="space-y-2 overflow-y-auto max-h-[240px]">
                                {dayEvents.length === 0 && <div className="text-[11px] text-gray-400 italic">{language === 'es' ? 'Sin eventos' : 'No events'}</div>}
                                {dayEvents.map((event) => (
                                  <button
                                    key={event.id}
                                    onClick={() => setSelectedEvent(event)}
                                    className={`text-[11px] w-full text-left px-2 py-1 rounded text-white ${categoryColors[event.category]} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00213a] flex items-center justify-between`}
                                    title={getEventTitle(event)}
                                    aria-label={`${getEventTitle(event)} on ${formatDate(event.date)}`}
                                  >
                                    <span className="truncate">{getEventTitle(event)}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}

                {/* List View */}
                {currentView === 'list' && (
                  <div className="border-b border-gray-200 min-h-[520px] p-4">
                    <div className="space-y-3">
                      {getFilteredEvents()
                        .filter((event) => event.date.getMonth() === currentMonth && event.date.getFullYear() === currentYear)
                        .sort((a, b) => a.date - b.date)
                        .map((event) => (
                          <div
                            key={event.id}
                            className="flex border-l-4 p-3 bg-gray-50 rounded-r"
                            style={{
                              borderColor:
                                event.category === 'holiday' ? '#00213a' :
                                event.category === 'academic' ? '#fdbb2e' :
                                event.category === 'earlyDismissal' ? '#f97316' :
                                event.category === 'testing' ? '#9333ea' :
                                event.category === 'pta' ? '#00213a' :
                                event.category === 'community' ? '#14b8a6' :
                                '#fdbb2e'
                            }}
                          >
                            <div className="mr-4 text-center">
                              <div className="font-semibold text-sm">{event.date.getDate()}</div>
                              <div className="text-[10px] text-gray-600">{event.date.toLocaleString('default', { month: 'short' })}</div>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{getEventTitle(event)}</div>
                              <div className="text-[11px] text-gray-700">
                                {event.allDay ? 'All Day' : `${event.startTime || ''}${event.startTime && event.endTime ? ' - ' : ''}${event.endTime || ''}`}
                              </div>
                              <div className="mt-1 text-[11px] text-gray-600">{getEventDescription(event)}</div>
                              <div className="mt-2">
                                <span
                                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium ${
                                    event.category === 'holiday' ? 'bg-[#00213a]/10 text-[#00213a]' :
                                    event.category === 'academic' ? 'bg-[#fdbb2e]/20 text-[#00213a]' :
                                    event.category === 'earlyDismissal' ? 'bg-orange-100 text-orange-900' :
                                    event.category === 'testing' ? 'bg-purple-100 text-purple-900' :
                                    event.category === 'pta' ? 'bg-[#00213a]/10 text-[#00213a]' :
                                    event.category === 'community' ? 'bg-teal-100 text-teal-900' :
                                    'bg-[#fdbb2e]/20 text-[#00213a]'
                                  }`}
                                >
                                  {language === 'es' ? getCategoryNameES(event.category) : getCategoryName(event.category)}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true" onClick={closeModal}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className={`${categoryColors[selectedEvent.category]} py-6 px-8`}>
                <h3 className="text-xl font-semibold text-white">{getEventTitle(selectedEvent)}</h3>
                <p className="text-white/90 mt-1 text-sm">{formatDate(selectedEvent.date)}</p>
              </div>
              <div className="bg-white px-8 py-6">
                <div className="text-gray-700 text-sm">
                  <p className="mb-3 leading-relaxed">{getEventDescription(selectedEvent)}</p>
                  {(selectedEvent.time || selectedEvent.startTime || selectedEvent.endTime || selectedEvent.allDay) && (
                    <div className="flex items-center mb-2 text-xs text-gray-600">
                      <svg className="h-4 w-4 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3a.75.75 0 011.5 0v1.5h.75A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25V6.75A2.25 2.25 0 015.25 4.5H6V3a.75.75 0 01.75-.75zM4.5 9h15v8.25a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9z" clipRule="evenodd" />
                      </svg>
                      <span>
                        {selectedEvent.allDay
                          ? language === 'es'
                            ? 'Todo el día'
                            : 'All Day'
                          : selectedEvent.time
                          ? selectedEvent.time
                          : `${selectedEvent.startTime || ''}${selectedEvent.startTime && selectedEvent.endTime ? ' - ' : ''}${selectedEvent.endTime || ''}`}
                      </span>
                    </div>
                  )}
                  {selectedEvent.location && (
                    <div className="flex items-center mb-2 text-xs text-gray-600">
                      <svg className="h-4 w-4 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>{selectedEvent.location}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-gray-50 px-8 py-4 flex justify-end gap-3">
                <button onClick={closeModal} className="px-4 py-2 bg-white border border-gray-300 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#00213a]/40">
                  Close
                </button>
                {selectedEvent.link && (
                  <a
                    href={selectedEvent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md text-xs font-medium text-white bg-[#00213a] hover:bg-[#003a5d] focus:outline-none focus:ring-2 focus:ring-[#00213a]/40"
                  >
                    More Details
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default CalendarPage;
