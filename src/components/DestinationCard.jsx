'use client';
import { useState } from 'react';
import { destinations } from '@/data/destinations'; // ← data yahan se aayega

const tagColors = {
  Heritage:      "bg-amber-500/20 text-amber-300 border-amber-400/30",
  Beach:         "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
  Adventure:     "bg-green-500/20 text-green-300 border-green-400/30",
  Nature:        "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  International: "bg-purple-500/20 text-purple-300 border-purple-400/30",
};

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className={`w-3 h-3 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function DestinationCard({ destination }) {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-3xl cursor-pointer bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden h-72">
        <img src={destination.image} alt={destination.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm ${tagColors[destination.tag]}`}>{destination.tag}</span>
          <button onClick={(e) => { e.stopPropagation(); setLiked(!liked); }} className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-black/60 transition">
            <svg className={`w-4 h-4 transition-colors ${liked ? 'text-red-500 fill-red-500' : 'text-white'}`} fill={liked ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        <div className="absolute top-4 left-1/2 -translate-x-1/2">
          <span className="text-xs bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/20">⏱ {destination.duration}</span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className={`flex gap-2 mb-3 flex-wrap transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            {destination.highlights.map((h) => (
              <span key={h} className="text-xs bg-white/15 backdrop-blur-sm text-white px-2 py-0.5 rounded-full border border-white/20">📍 {h}</span>
            ))}
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white leading-tight">{destination.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-400 text-sm">🌐 {destination.country}</span>
                <span className="text-gray-600">•</span>
                <StarRating rating={destination.rating} />
                <span className="text-gray-400 text-xs">({destination.reviews})</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 uppercase tracking-wider">From</p>
              <p className="text-xl font-bold text-yellow-400">{destination.price}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-full'}`}>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 flex items-center justify-between px-5 py-3">
          <span className="text-black font-semibold text-sm uppercase tracking-wider">Explore Package</span>
          <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function DestinationsSection() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Beach', 'Heritage', 'Adventure', 'Nature', 'International'];
  const filtered = filter === 'All' ? destinations : destinations.filter((d) => d.tag === filter);

  return (
    <section className="py-24 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-yellow-400" />
              <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs font-medium">Explore</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Popular<br /><span className="text-yellow-400">Destinations</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-200 border ${filter === f ? 'bg-yellow-500 text-black border-yellow-500' : 'bg-transparent text-gray-400 border-gray-700 hover:border-yellow-400/50 hover:text-yellow-400'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>

        <div className="text-center mt-14">
          <button className="group inline-flex items-center gap-3 border border-yellow-400/50 hover:border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300">
            View All Destinations
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}