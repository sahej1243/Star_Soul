import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

interface DateFact {
  title: string;
  description: string;
  category: 'historical' | 'astronomical' | 'cultural';
}

export const StarDate = (): JSX.Element => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [facts, setFacts] = useState<DateFact[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    generateFacts();
  }, [selectedDay, selectedMonth, selectedYear]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatDay = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long'
    });
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const generateYears = () => {
    const years = [];
    for (let year = 1900; year <= 2100; year++) {
      years.push(year);
    }
    return years;
  };

  const generateFacts = () => {
    const newFacts: DateFact[] = [];

    // Month-based facts
    const monthFacts: { [key: number]: DateFact[] } = {
      1: [
        { title: "New Year's Astronomical Significance", description: "January marks the time when Earth is closest to the Sun (perihelion), occurring around January 3rd each year.", category: 'astronomical' },
        { title: "Capricorn Season", description: "The Sun is in Capricorn during early January, making it a time associated with ambition and new beginnings.", category: 'astronomical' }
      ],
      2: [
        { title: "Aquarius Season", description: "February is dominated by Aquarius, the water bearer constellation, associated with innovation and humanitarian ideals.", category: 'astronomical' },
        { title: "Shortest Month", description: "February is the only month that can have exactly 4 weeks (28 days), making it unique in our calendar system.", category: 'cultural' }
      ],
      3: [
        { title: "Spring Equinox", description: "March contains the vernal equinox around the 20th, when day and night are equal in length worldwide.", category: 'astronomical' },
        { title: "Mars Month", description: "March is named after Mars, the Roman god of war, and the planet Mars is often visible in March skies.", category: 'cultural' }
      ],
      4: [
        { title: "Aries Season", description: "April begins with Aries, the first sign of the zodiac, symbolizing new beginnings and fresh energy.", category: 'astronomical' },
        { title: "Lyrid Meteor Shower", description: "The annual Lyrid meteor shower peaks in late April, producing up to 20 meteors per hour.", category: 'astronomical' }
      ],
      5: [
        { title: "Eta Aquariids Meteor Shower", description: "May features the Eta Aquariids meteor shower, debris from Halley's Comet, best viewed from southern latitudes.", category: 'astronomical' },
        { title: "Taurus Season", description: "Early May is ruled by Taurus, associated with stability, beauty, and connection to nature.", category: 'astronomical' }
      ],
      6: [
        { title: "Summer Solstice", description: "June contains the summer solstice around the 21st, the longest day of the year in the Northern Hemisphere.", category: 'astronomical' },
        { title: "Gemini Season", description: "June begins with Gemini, the twins constellation, associated with communication and duality.", category: 'astronomical' }
      ],
      7: [
        { title: "Cancer Season", description: "July is dominated by Cancer, the crab constellation, associated with home, family, and emotional depth.", category: 'astronomical' },
        { title: "Aphelion", description: "Earth reaches its farthest point from the Sun (aphelion) in early July, despite it being summer in the north.", category: 'astronomical' }
      ],
      8: [
        { title: "Perseid Meteor Shower", description: "August features the spectacular Perseid meteor shower, one of the best meteor showers of the year with up to 60 meteors per hour.", category: 'astronomical' },
        { title: "Leo Season", description: "August is ruled by Leo, the lion constellation, associated with creativity, leadership, and self-expression.", category: 'astronomical' }
      ],
      9: [
        { title: "Autumnal Equinox", description: "September contains the autumnal equinox around the 22nd, marking the beginning of fall in the Northern Hemisphere.", category: 'astronomical' },
        { title: "Virgo Season", description: "September begins with Virgo, associated with precision, service, and attention to detail.", category: 'astronomical' }
      ],
      10: [
        { title: "Orionid Meteor Shower", description: "October features the Orionid meteor shower, another gift from Halley's Comet, producing fast and bright meteors.", category: 'astronomical' },
        { title: "Libra Season", description: "October begins with Libra, the scales constellation, associated with balance, harmony, and justice.", category: 'astronomical' }
      ],
      11: [
        { title: "Leonid Meteor Shower", description: "November hosts the Leonid meteor shower, which can occasionally produce spectacular meteor storms.", category: 'astronomical' },
        { title: "Scorpio Season", description: "November begins with Scorpio, associated with transformation, intensity, and deep mysteries.", category: 'astronomical' }
      ],
      12: [
        { title: "Geminid Meteor Shower", description: "December features the Geminid meteor shower, often considered the best meteor shower of the year with up to 120 meteors per hour.", category: 'astronomical' },
        { title: "Winter Solstice", description: "December contains the winter solstice around the 21st, the shortest day of the year in the Northern Hemisphere.", category: 'astronomical' }
      ]
    };

    // Day-based facts (some special days)
    const dayFacts: { [key: number]: DateFact[] } = {
      1: [{ title: "New Moon Energy", description: "The 1st of any month often aligns with new moon energy, perfect for setting intentions and new beginnings.", category: 'astronomical' }],
      7: [{ title: "Lucky Seven", description: "The number 7 has been considered mystical across cultures, representing spiritual awakening and inner wisdom.", category: 'cultural' }],
      11: [{ title: "Master Number", description: "The 11th is considered a master number in numerology, associated with intuition and spiritual insight.", category: 'cultural' }],
      15: [{ title: "Full Moon Frequency", description: "The 15th often coincides with full moons, times of heightened energy and completion of cycles.", category: 'astronomical' }],
      21: [{ title: "Solstice and Equinox", description: "The 21st is when most solstices and equinoxes occur, marking significant astronomical transitions.", category: 'astronomical' }],
      22: [{ title: "Master Builder", description: "The 22nd is another master number, known as the 'Master Builder' for its potential to manifest dreams into reality.", category: 'cultural' }]
    };

    // Year-based facts
    const yearFacts: DateFact[] = [];
    
    if (selectedYear % 4 === 0) {
      yearFacts.push({
        title: "Leap Year Magic",
        description: `${selectedYear} is a leap year! This extra day helps keep our calendar aligned with Earth's orbit around the Sun.`,
        category: 'astronomical'
      });
    }

    if (selectedYear >= 2020 && selectedYear <= 2030) {
      yearFacts.push({
        title: "Space Exploration Era",
        description: `${selectedYear} is part of a golden age of space exploration, with missions to Mars, the Moon, and beyond.`,
        category: 'astronomical'
      });
    }

    if (selectedYear % 100 === 0) {
      yearFacts.push({
        title: "Century Marker",
        description: `${selectedYear} marks a significant century milestone in human history and astronomical observations.`,
        category: 'historical'
      });
    }

    // Add facts based on selections
    if (monthFacts[selectedMonth]) {
      newFacts.push(...monthFacts[selectedMonth]);
    }

    if (dayFacts[selectedDay]) {
      newFacts.push(...dayFacts[selectedDay]);
    }

    newFacts.push(...yearFacts);

    // Add a general fact about the selected date
    const selectedDate = new Date(selectedYear, selectedMonth - 1, selectedDay);
    const dayOfYear = Math.floor((selectedDate.getTime() - new Date(selectedYear, 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    
    newFacts.push({
      title: "Your Cosmic Position",
      description: `${months[selectedMonth - 1]} ${selectedDay}, ${selectedYear} is the ${dayOfYear}${getDayOrdinal(dayOfYear)} day of the year. On this date, Earth will have traveled approximately ${Math.round(dayOfYear * 2.5)} million kilometers in its orbit around the Sun.`,
      category: 'astronomical'
    });

    setFacts(newFacts);
  };

  const getDayOrdinal = (day: number) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'astronomical': return '🌟';
      case 'historical': return '📜';
      case 'cultural': return '🎭';
      default: return '✨';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'astronomical': return 'from-blue-500 to-purple-500';
      case 'historical': return 'from-amber-500 to-orange-500';
      case 'cultural': return 'from-green-500 to-teal-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-2 h-2 bg-white rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-60 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-30"></div>
      </div>

      {/* Geometric background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/10 rounded-full transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/6 w-32 h-32 border border-white/10 transform rotate-12"></div>
      </div>

      {/* Home button */}
      <div className="absolute top-8 right-8 z-20">
        <Button
          onClick={() => navigate('/')}
          className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full backdrop-blur-xl border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
        >
          Home
        </Button>
      </div>

      <div className="relative z-10 min-h-screen pt-24 px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-8xl font-bold text-white mb-8 leading-tight">
            Star Date
          </h1>
          <p className="text-3xl text-white/70 font-light">
            Discover Your Cosmic Connection
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Left side - Date Selector */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
            {/* Current time display */}
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/20">
              <div className="text-white">
                <div className="text-2xl font-medium">
                  {formatTime(currentTime)}
                </div>
              </div>
              <div className="text-white text-right">
                <div className="text-xl font-medium">
                  {formatDate(currentTime)}
                </div>
                <div className="text-lg text-white/70">
                  {formatDay(currentTime)}
                </div>
              </div>
            </div>

            {/* Date Selection */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Select Your Date</h3>
              
              {/* Month Dropdown */}
              <div>
                <label className="block text-white/80 text-lg mb-3">Month</label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                  className="w-full p-4 bg-white/10 border border-white/30 rounded-xl text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-lg"
                >
                  {months.map((month, index) => (
                    <option key={index} value={index + 1} className="bg-slate-800 text-white">
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              {/* Day Dropdown */}
              <div>
                <label className="block text-white/80 text-lg mb-3">Day</label>
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(parseInt(e.target.value))}
                  className="w-full p-4 bg-white/10 border border-white/30 rounded-xl text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-lg"
                >
                  {Array.from({ length: getDaysInMonth(selectedMonth, selectedYear) }, (_, i) => i + 1).map((day) => (
                    <option key={day} value={day} className="bg-slate-800 text-white">
                      {day}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Dropdown */}
              <div>
                <label className="block text-white/80 text-lg mb-3">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                  className="w-full p-4 bg-white/10 border border-white/30 rounded-xl text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-lg"
                >
                  {generateYears().map((year) => (
                    <option key={year} value={year} className="bg-slate-800 text-white">
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Selected Date Display */}
              <div className="mt-8 p-6 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl border border-orange-400/30">
                <h4 className="text-white font-semibold text-xl mb-2">Selected Date</h4>
                <p className="text-white/90 text-2xl font-medium">
                  {months[selectedMonth - 1]} {selectedDay}, {selectedYear}
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Facts */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">Cosmic Facts for Your Date</h3>
            
            {facts.length > 0 ? (
              <div className="space-y-6 max-h-[800px] overflow-y-auto pr-4">
                {facts.map((fact, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getCategoryColor(fact.category)} flex items-center justify-center text-2xl flex-shrink-0`}>
                        {getCategoryIcon(fact.category)}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-xl mb-3">
                          {fact.title}
                        </h4>
                        <p className="text-white/80 leading-relaxed text-lg">
                          {fact.description}
                        </p>
                        <div className="mt-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(fact.category)} text-white`}>
                            {fact.category.charAt(0).toUpperCase() + fact.category.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-12 border border-white/20 shadow-xl text-center">
                <div className="text-6xl mb-6">🌟</div>
                <p className="text-white/80 text-xl">
                  Select a date to discover amazing cosmic facts!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};