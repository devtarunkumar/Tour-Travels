'use client';
import { useState } from 'react';

const includeIcons = {
  Hotel:      '🏨',
  Flights:    '✈️',
  Meals:      '🍽️',
  Guide:      '🧭',
  Houseboat:  '🛶',
  Breakfast:  '☕',
  Tours:      '🗺️',
  Shikara:    '⛵',
};

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3 h-3 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function PackageCard({ pkg }) {
  const [wished, setWished] = useState(false);

  // Discount % calculate karo
  const original = parseInt(pkg.originalPrice.replace(/[₹,]/g, ''));
  const current  = parseInt(pkg.price.replace(/[₹,]/g, ''));
  const discount = Math.round(((original - current) / original) * 100);

  return (
    <div className="group relative bg-gray-900 border border-gray-800 hover:border-yellow-400/40 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col">

      {/* ── IMAGE ── */}
      <div className="relative overflow-hidden h-56">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

        {/* Tag */}
        <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${pkg.tagColor}`}>
          {pkg.tag}
        </span>

        {/* Discount Badge */}
        <span className="absolute top-3 right-12 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          -{discount}%
        </span>

        {/* Wishlist */}
        <button
          onClick={() => setWished(!wished)}
          className="absolute top-2.5 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-black/70 transition"
        >
          <svg
            className={`w-4 h-4 transition-colors ${wished ? 'text-red-500' : 'text-white'}`}
            fill={wished ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Duration — bottom left of image */}
        <div className="absolute bottom-3 left-3">
          <span className="text-xs bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/20">
            🕐 {pkg.duration}
          </span>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="p-5 flex flex-col flex-1">

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={pkg.rating} />
          <span className="text-yellow-400 text-xs font-semibold">{pkg.rating}</span>
          <span className="text-gray-500 text-xs">({pkg.reviews} reviews)</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
          {pkg.title}
        </h3>

        {/* Destinations */}
        <p className="text-gray-400 text-sm mb-4 flex items-center gap-1">
          <span>📍</span> {pkg.destinations}
        </p>

        {/* Includes */}
        <div className="flex flex-wrap gap-2 mb-5">
          {pkg.includes.map((item) => (
            <span
              key={item}
              className="flex items-center gap-1 bg-gray-800 border border-gray-700 text-gray-300 text-xs px-2.5 py-1 rounded-full"
            >
              <span>{includeIcons[item] || '✓'}</span>
              {item}
            </span>
          ))}
        </div>

        {/* Spacer push price to bottom */}
        <div className="flex-1" />

        {/* Divider */}
        <div className="border-t border-gray-800 pt-4 mt-2">
          <div className="flex items-center justify-between">

            {/* Price */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-xs line-through">{pkg.originalPrice}</span>
                <span className="text-green-400 text-xs font-semibold">{discount}% off</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xs text-gray-400">from</span>
                <span className="text-2xl font-bold text-yellow-400">{pkg.price}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="group/btn flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 active:scale-95 text-black font-bold px-4 py-2.5 rounded-xl transition-all duration-200 text-sm">
              Book Now
              <svg
                className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}