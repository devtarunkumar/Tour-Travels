import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <Link href="/">
              <Image
                src="/logo.jpeg"
                alt="WanderLux Logo"
                width={110}
                height={35}
                className="object-contain mb-4"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting unforgettable luxury travel experiences. Explore the world with elegance and comfort.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/10 hover:bg-yellow-400 hover:text-black transition-all duration-300 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-yellow-400 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Home", "Destinations", "Packages", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href="/"
                    className="hover:text-yellow-400 transition-all duration-300 hover:pl-2"
                  >
                    → {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-yellow-400 mb-5">
              Top Destinations
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Rajasthan", "Goa", "Kashmir", "Kerala", "Bali", "Paris"].map((dest) => (
                <li key={dest}>
                  <Link
                    href="/"
                    className="hover:text-yellow-400 transition-all duration-300 hover:pl-2"
                  >
                    → {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-yellow-400 mb-5">
              Contact Us
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm mb-6">
              <li>📍 New Delhi, India</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ hello@wanderlux.in</li>
              <li>🕐 Mon - Sat: 9AM - 7PM</li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-sm text-gray-300 mb-2">Subscribe Newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-l-md outline-none"
                />
                <button className="bg-yellow-400 text-black px-4 text-sm rounded-r-md hover:bg-yellow-300 transition">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 WanderLux. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/" className="hover:text-yellow-400 transition">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-yellow-400 transition">
              Terms
            </Link>
            <Link href="/" className="hover:text-yellow-400 transition">
              Refund
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}