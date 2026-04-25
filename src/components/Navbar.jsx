'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Destinations',
    href: '/destinations',
    dropdown: [
      { label: '🏔️ Hill Stations', href: '/destinations/hills' },
      { label: '🏖️ Beaches', href: '/destinations/beaches' },
      { label: '🏛️ Heritage', href: '/destinations/heritage' },
      { label: '🌍 International', href: '/destinations/international' },
    ],
  },
  {
    label: 'Hotels',
    href: '/hotels',
    dropdown: [
      { label: '⭐ Luxury Hotels', href: '/hotels/luxury' },
      { label: '🏡 Resorts', href: '/hotels/resorts' },
      { label: '🛖 Boutique Stays', href: '/hotels/boutique' },
      { label: '⛺ Camps & Glamping', href: '/hotels/camps' },
    ],
  },
  {
    label: 'Experiences',
    href: '/experiences',
    dropdown: [
      { label: '🧗 Adventure', href: '/experiences/adventure' },
      { label: '🧘 Wellness & Spa', href: '/experiences/wellness' },
      { label: '🍽️ Food & Culture', href: '/experiences/food' },
      { label: '👨‍👩‍👧 Family Tours', href: '/experiences/family' },
    ],
  },
  {
    label: 'Offers',
    href: '/offers',
    dropdown: [
      { label: '🔥 Hot Deals', href: '/offers/hot-deals' },
      { label: '🌙 Honeymoon Special', href: '/offers/honeymoon' },
      { label: '👥 Group Discounts', href: '/offers/group' },
      { label: '🎒 Budget Packages', href: '/offers/budget' },
    ],
  },
  {
    label: 'Membership',
    href: '/membership',
    dropdown: [
      { label: '🥈 Silver Plan', href: '/membership/silver' },
      { label: '🥇 Gold Plan', href: '/membership/gold' },
      { label: '💎 Platinum Plan', href: '/membership/platinum' },
      { label: '🎁 Member Benefits', href: '/membership/benefits' },
    ],
  },
  {
    label: 'More ▾',
    href: '#',
    dropdown: [
      { label: '📖 About Us', href: '/about' },
      { label: '📞 Contact', href: '/contact' },
      { label: '📝 Blog', href: '/blog' },
      { label: '❓ FAQ', href: '/faq' },
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.jpeg"
            alt="WanderLux Logo"
            width={100}
            height={30}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-sm uppercase tracking-wider items-center">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {/* Nav Link */}
              <Link
                href={item.href}
                className="flex items-center gap-1 hover:text-yellow-400 transition py-2"
              >
                {item.label}
                {item.dropdown && (
                  <span
                    className={`text-xs transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`}
                  >
                    ▾
                  </span>
                )}
              </Link>

              {/* Dropdown */}
              {item.dropdown && activeDropdown === item.label && (
                <div className="absolute top-full left-0 bg-black/95 backdrop-blur-md rounded-xl shadow-2xl py-2 min-w-[200px] border border-white/10 animate-fadeIn">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="flex items-center gap-2 px-5 py-3 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition normal-case tracking-normal"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm uppercase tracking-wider hover:text-yellow-400 transition border border-white/30 px-4 py-2 rounded-full hover:border-yellow-400"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-sm uppercase tracking-wider bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full transition"
          >
            Join
          </Link>
          <button className="bg-white text-black hover:bg-yellow-500 font-semibold px-5 py-2 rounded-full transition text-sm uppercase tracking-wider">
            Book Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md px-6 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              {/* Mobile Item */}
              <button
                onClick={() =>
                  setActiveMobileMenu(
                    activeMobileMenu === item.label ? null : item.label
                  )
                }
                className="w-full flex justify-between items-center py-3 text-sm uppercase tracking-wider border-b border-white/10 hover:text-yellow-400 transition"
              >
                <span>{item.label}</span>
                {item.dropdown && (
                  <span
                    className={`transition-transform duration-200 ${
                      activeMobileMenu === item.label ? 'rotate-180' : ''
                    }`}
                  >
                    ▾
                  </span>
                )}
              </button>

              {/* Mobile Dropdown */}
              {item.dropdown && activeMobileMenu === item.label && (
                <div className="bg-white/5 rounded-xl my-1 overflow-hidden">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="flex items-center gap-2 px-6 py-3 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition normal-case tracking-normal"
                      onClick={() => setMenuOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Login/Join */}
          <div className="flex gap-3 mt-4 pt-4 border-t border-white/10">
            <Link
              href="/login"
              className="flex-1 text-center border border-white/30 py-2 rounded-full text-sm uppercase hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="flex-1 text-center bg-yellow-500 text-black font-semibold py-2 rounded-full text-sm uppercase hover:bg-yellow-400 transition"
            >
              Join
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}