'use client';
import { useState, useRef } from 'react';

const popularSearches = [
  { icon: '🏔️', label: 'Kashmir' },
  { icon: '🏖️', label: 'Goa' },
  { icon: '🌴', label: 'Kerala' },
  { icon: '🏯', label: 'Rajasthan' },
  { icon: '🌺', label: 'Bali' },
  { icon: '🗼', label: 'Paris' },
];

export default function Hero() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');
  const [activeTab, setActiveTab] = useState('tours'); // tours | hotels | flights
  const inputRef = useRef(null);

  const handleOpen = () => {
    setSearchOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const tabs = [
    { id: 'tours',   label: '🗺️ Tours' },
    { id: 'hotels',  label: '🏨 Hotels' },
    { id: 'flights', label: '✈️ Flights' },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video2.mp4" type="video/mp4" />
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
          alt="Travel Background"
          className="w-full h-full object-cover"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">

        {/* Top Label */}
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-px bg-yellow-400" />
          <p className="uppercase tracking-[0.35em] text-yellow-400 text-xs font-medium">
            Discover the World
          </p>
          <div className="w-8 h-px bg-yellow-400" />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-5 leading-tight tracking-tight">
          Your Dream Journey<br />
          <span className="text-yellow-400">Starts Here</span>
        </h1>

        <p className="text-base text-gray-300 mb-10 max-w-lg tracking-wide">
          Luxury travel experiences crafted for the discerning explorer
        </p>

        {/* ── SEARCH CLOSED STATE ── */}
        {!searchOpen && (
          <button
            onClick={handleOpen}
            className="group relative flex items-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/25 hover:border-yellow-400/60 text-white pl-5 pr-6 py-4 rounded-full transition-all duration-300"
          >
            {/* Animated pulse ring */}
            <span className="relative flex h-8 w-8 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400/40" />
              <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500">
                <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
            </span>

            <div className="text-left">
              <p className="text-xs text-gray-400 uppercase tracking-widest leading-none mb-1">Where to?</p>
              <p className="text-sm font-medium">Search destinations, packages, hotels...</p>
            </div>

            <span className="ml-2 text-yellow-400 text-lg group-hover:translate-x-1 transition-transform">→</span>
          </button>
        )}

        {/* ── SEARCH OPEN STATE ── */}
        {searchOpen && (
          <div className="w-full max-w-4xl">
            <div className="bg-black/50 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl">

              {/* Header Row */}
              <div className="flex items-center justify-between mb-5">

                {/* Tabs */}
                <div className="flex gap-1 bg-white/10 rounded-xl p-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-yellow-500 text-black'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Close */}
                <button
                  onClick={() => setSearchOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition text-sm"
                >
                  ✕
                </button>
              </div>

              {/* Search Fields */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">

                {/* Destination */}
                <div className="md:col-span-1 bg-white/8 border border-white/15 hover:border-yellow-400/50 rounded-2xl px-4 py-3 flex items-center gap-3 transition-colors">
                  <svg className="w-4 h-4 text-yellow-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  <div className="flex flex-col w-full">
                    <span className="text-yellow-400 text-xs uppercase tracking-wider mb-1">Destination</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="Where to go?"
                      className="bg-transparent text-white placeholder-gray-500 outline-none text-sm w-full"
                    />
                  </div>
                </div>

                {/* Check In */}
                <div className="bg-white/8 border border-white/15 hover:border-yellow-400/50 rounded-2xl px-4 py-3 flex items-center gap-3 transition-colors">
                  <svg className="w-4 h-4 text-yellow-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-yellow-400 text-xs uppercase tracking-wider mb-1">Check In</span>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="bg-transparent text-white outline-none text-sm"
                    />
                  </div>
                </div>

                {/* Check Out */}
                <div className="bg-white/8 border border-white/15 hover:border-yellow-400/50 rounded-2xl px-4 py-3 flex items-center gap-3 transition-colors">
                  <svg className="w-4 h-4 text-yellow-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-yellow-400 text-xs uppercase tracking-wider mb-1">Check Out</span>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="bg-transparent text-white outline-none text-sm"
                    />
                  </div>
                </div>

                {/* Guests + Search Button */}
                <div className="flex gap-2">
                  <div className="flex-1 bg-white/8 border border-white/15 hover:border-yellow-400/50 rounded-2xl px-4 py-3 flex items-center gap-2 transition-colors">
                    <svg className="w-4 h-4 text-yellow-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                    <div className="flex flex-col">
                      <span className="text-yellow-400 text-xs uppercase tracking-wider mb-1">Guests</span>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="bg-transparent text-white outline-none text-sm"
                      >
                        <option value="1" className="text-black">1</option>
                        <option value="2" className="text-black">2</option>
                        <option value="3" className="text-black">3</option>
                        <option value="4+" className="text-black">4+</option>
                      </select>
                    </div>
                  </div>

                  {/* Search Button */}
                  <button className="bg-yellow-500 hover:bg-yellow-400 active:scale-95 text-black font-bold px-5 rounded-2xl transition-all duration-200 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Popular Searches */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-gray-500 text-xs uppercase tracking-wider">Popular:</span>
                {popularSearches.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setDestination(item.label)}
                    className="flex items-center gap-1.5 bg-white/8 hover:bg-yellow-500/20 border border-white/10 hover:border-yellow-400/40 text-gray-300 hover:text-yellow-400 text-xs px-3 py-1.5 rounded-full transition-all duration-200"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Bottom Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-white/20 animate-pulse" />
      </div>

    </section>
  );
}