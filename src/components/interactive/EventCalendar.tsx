"use client";

import React, { useState } from 'react';

interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
  description: string;
  category: 'workshop' | 'training' | 'community' | 'school';
  imageUrl?: string;
}

interface EventCalendarProps {
  events: Event[];
}

const EventCalendar: React.FC<EventCalendarProps> = ({ events }) => {
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Get all dates in the selected month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
  const firstDayOfMonth = getFirstDayOfMonth(selectedYear, selectedMonth);

  // Filter events for the selected month and category
  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const isInSelectedMonth = eventDate.getMonth() === selectedMonth && eventDate.getFullYear() === selectedYear;
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return isInSelectedMonth && matchesCategory;
  });

  // Group events by day
  const eventsByDay: { [key: number]: Event[] } = {};
  filteredEvents.forEach(event => {
    const day = new Date(event.date).getDate();
    if (!eventsByDay[day]) {
      eventsByDay[day] = [];
    }
    eventsByDay[day].push(event);
  });

  // Month navigation
  const prevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const nextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const categoryColors = {
    workshop: 'bg-sunset-orange',
    training: 'bg-earth-green',
    community: 'bg-sky-blue',
    school: 'bg-leaf-green',
  };

  return (
    <div className="event-calendar">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">{monthNames[selectedMonth]} {selectedYear}</h2>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Previous month"
          >
            &lt;
          </button>
          <button 
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Next month"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 rounded-full text-sm ${selectedCategory === 'all' ? 'bg-night-black text-white' : 'bg-gray-200'}`}
          >
            All
          </button>
          <button 
            onClick={() => setSelectedCategory('workshop')}
            className={`px-3 py-1 rounded-full text-sm ${selectedCategory === 'workshop' ? 'bg-sunset-orange text-white' : 'bg-gray-200'}`}
          >
            Workshops
          </button>
          <button 
            onClick={() => setSelectedCategory('training')}
            className={`px-3 py-1 rounded-full text-sm ${selectedCategory === 'training' ? 'bg-earth-green text-white' : 'bg-gray-200'}`}
          >
            Training
          </button>
          <button 
            onClick={() => setSelectedCategory('community')}
            className={`px-3 py-1 rounded-full text-sm ${selectedCategory === 'community' ? 'bg-sky-blue text-white' : 'bg-gray-200'}`}
          >
            Community
          </button>
          <button 
            onClick={() => setSelectedCategory('school')}
            className={`px-3 py-1 rounded-full text-sm ${selectedCategory === 'school' ? 'bg-leaf-green text-white' : 'bg-gray-200'}`}
          >
            School
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Day headers */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-semibold p-2">
            {day}
          </div>
        ))}

        {/* Empty cells for days before the first day of the month */}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="p-2 bg-gray-100 h-24"></div>
        ))}

        {/* Calendar days */}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          const dayEvents = eventsByDay[day] || [];
          const isToday = 
            new Date().getDate() === day && 
            new Date().getMonth() === selectedMonth && 
            new Date().getFullYear() === selectedYear;

          return (
            <div 
              key={`day-${day}`} 
              className={`p-2 border ${isToday ? 'bg-leaf-green/10 border-leaf-green' : 'bg-white'} h-24 overflow-y-auto`}
            >
              <div className="font-semibold mb-1">{day}</div>
              {dayEvents.map(event => (
                <div 
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className={`text-xs p-1 mb-1 rounded cursor-pointer ${categoryColors[event.category]} text-white truncate`}
                >
                  {event.title}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{selectedEvent.title}</h3>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="text-2xl"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            
            {selectedEvent.imageUrl && (
              <div 
                className="h-48 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: `url(${selectedEvent.imageUrl})` }}
              ></div>
            )}
            
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="mr-2">📅</span>
                <span>{new Date(selectedEvent.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="mr-2">⏰</span>
                <span>{selectedEvent.time}</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="mr-2">📍</span>
                <span>{selectedEvent.location}</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="mr-2">🏷️</span>
                <span className={`px-2 py-1 rounded-full text-xs text-white ${categoryColors[selectedEvent.category]}`}>
                  {selectedEvent.category.charAt(0).toUpperCase() + selectedEvent.category.slice(1)}
                </span>
              </div>
            </div>
            
            <p className="mb-4">{selectedEvent.description}</p>
            
            <div className="flex justify-end">
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCalendar;
