'use client';
import { useState } from 'react';

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    trip: "Kashmir Honeymoon",
    rating: 5,
    review: "Vinayak Tour & Travels ne humara honeymoon trip itna amazing bana diya! Kashmir ki trip ek sapne jaisi thi. Sab kuch perfectly organized tha — hotel se lekar shikara ride tak!",
    avatar: "PS",
    color: "bg-pink-500",
    date: "March 2025",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Mumbai",
    trip: "Bali Paradise Tour",
    rating: 5,
    review: "Bali trip ke liye bahut shukriya! Hotels, transfers, sightseeing — sab top-notch tha. Guide bahut helpful tha. Definitely recommend karunga dosto ko!",
    avatar: "RM",
    color: "bg-blue-500",
    date: "February 2025",
  },
  {
    id: 3,
    name: "Anjali Singh",
    location: "Bangalore",
    trip: "Kerala Backwaters",
    rating: 5,
    review: "Kerala backwaters trip life-changing experience thi. Team ka support 24/7 mila. Houseboat experience zabardast tha. Next trip bhi inke saath hi karungi!",
    avatar: "AS",
    color: "bg-emerald-500",
    date: "January 2025",
  },
  {
    id: 4,
    name: "Vikram Patel",
    location: "Ahmedabad",
    trip: "Golden Triangle Tour",
    rating: 5,
    review: "Delhi, Agra, Jaipur — teeno jagah ka experience ekdum premium tha. Taj Mahal ke time pe private guide mila. Poora itinerary perfect tha. 10/10!",
    avatar: "VP",
    color: "bg-orange-500",
    date: "December 2024",
  },
  {
    id: 5,
    name: "Sneha Kapoor",
    location: "Pune",
    trip: "Goa Beach Holiday",
    rating: 5,
    review: "Family ke saath Goa trip plan karna itna aasaan ho gaya inki wajah se! Bachche bahut khush the. Resort selection aur transfers sab flawless tha.",
    avatar: "SK",
    color: "bg-cyan-500",
    date: "November 2024",
  },
  {
    id: 6,
    name: "Arjun Nair",
    location: "Hyderabad",
    trip: "Rajasthan Heritage Tour",
    rating: 5,
    review: "Rajasthan ki royal feel ko inhone bilkul sahi capture kiya. Palace hotels, camel safari, folk music — sab kuch unbelievable tha. Best travel company!",
    avatar: "AN",
    color: "bg-purple-500",
    date: "October 2024",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const visible = 3; // ek baar mein 3 cards
  const total = reviews.length;

  const prev = () => setActive((p) => (p - 1 + total) % total);
  const next = () => setActive((p) => (p + 1) % total);

  // Active se 3 reviews slice karo (circular)
  const shown = [0, 1, 2].map((i) => reviews[(active + i) % total]);

  return (
    <section className="py-24 px-6 bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-yellow-400" />
              <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs font-medium">
                Testimonials
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              What Travelers<br />
              <span className="text-yellow-400">Say About Us</span>
            </h2>
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400">4.9</p>
              <StarRating rating={5} />
              <p className="text-gray-500 text-xs mt-1">Average Rating</p>
            </div>
            <div className="w-px bg-gray-800" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white">2,400+</p>
              <p className="text-gray-500 text-xs mt-2">Happy Travelers</p>
            </div>
          </div>
        </div>

        {/* ── CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {shown.map((review, i) => (
            <div
              key={review.id}
              className={`relative bg-gray-900 border rounded-3xl p-7 flex flex-col transition-all duration-500 ${
                i === 0
                  ? 'border-yellow-400/50 shadow-xl shadow-yellow-400/5'
                  : 'border-gray-800'
              }`}
            >
              {/* Quote Icon */}
              <div className="text-yellow-400/20 text-8xl font-serif absolute top-4 right-6 leading-none select-none">
                "
              </div>

              {/* Trip Badge */}
              <span className="inline-flex items-center gap-1 bg-yellow-500/10 border border-yellow-400/20 text-yellow-400 text-xs px-3 py-1 rounded-full mb-4 w-fit">
                ✈️ {review.trip}
              </span>

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Review */}
              <p className="text-gray-300 leading-relaxed mt-4 mb-6 text-sm flex-1 italic">
                "{review.review}"
              </p>

              {/* Divider */}
              <div className="border-t border-gray-800 pt-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className={`w-11 h-11 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{review.name}</p>
                      <p className="text-gray-500 text-xs">📍 {review.location}</p>
                    </div>
                  </div>
                  <span className="text-gray-600 text-xs">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── NAVIGATION ── */}
        <div className="flex items-center justify-between">

          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? 'bg-yellow-400 w-8 h-2'
                    : 'bg-gray-700 hover:bg-gray-500 w-2 h-2'
                }`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-gray-700 hover:border-yellow-400 hover:bg-yellow-400/10 flex items-center justify-center text-gray-400 hover:text-yellow-400 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-gray-700 hover:border-yellow-400 hover:bg-yellow-400/10 flex items-center justify-center text-gray-400 hover:text-yellow-400 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── GOOGLE REVIEW BADGE ── */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="flex items-center gap-3 bg-gray-900 border border-gray-800 px-6 py-4 rounded-2xl">
            <div className="text-3xl">⭐</div>
            <div>
              <p className="text-white font-bold text-lg leading-none">4.9 / 5.0</p>
              <p className="text-gray-500 text-xs mt-1">Based on 2,400+ Google Reviews</p>
            </div>
            <div className="w-px h-10 bg-gray-800 mx-2" />
            <div className="text-3xl">🏆</div>
            <div>
              <p className="text-white font-bold text-lg leading-none">#1 Rated</p>
              <p className="text-gray-500 text-xs mt-1">Travel Agency in North India</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}