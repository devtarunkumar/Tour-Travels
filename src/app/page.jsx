import Hero from '@/components/Hero';
import DestinationsSection from '@/components/DestinationCard';
import PackageCard from '@/components/PackageCard';
import Testimonials from '@/components/Testimonials';
import { packages } from '@/data/packages';

export default function Home() {
  return (
    <main className="bg-gray-950">

      {/* 1. Hero */}
      <Hero />

      {/* 2. Destinations — DestinationsSection andar hi data fetch karta hai */}
      <DestinationsSection />

      {/* 3. Packages */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-px bg-yellow-400" />
              <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs font-medium">Packages</p>
              <div className="w-8 h-px bg-yellow-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Handpicked <span className="text-yellow-400">Packages</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-yellow-400" />
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs font-medium">Why Us</p>
            <div className="w-8 h-px bg-yellow-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-14">
            Why Choose <span className="text-yellow-400">Vinayak Tour & Travels?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "✈️",
                title: "Handpicked Destinations",
                desc: "Every destination is carefully curated by our travel experts for an unforgettable experience.",
              },
              {
                icon: "🏨",
                title: "Luxury Stays",
                desc: "5-star hotels, private villas, and boutique resorts — only the finest accommodations.",
              },
              {
                icon: "🎯",
                title: "24/7 Support",
                desc: "Our dedicated team is with you every step of the journey, day or night.",
              },
              {
                icon: "💰",
                title: "Best Price Guarantee",
                desc: "We match any lower price you find. Your dream trip at the best possible value.",
              },
              {
                icon: "🛡️",
                title: "Safe & Secure",
                desc: "Fully insured trips with trusted partners. Travel with complete peace of mind.",
              },
              {
                icon: "🎨",
                title: "Custom Itineraries",
                desc: "Every trip tailored to your preferences, pace, and budget. Truly your journey.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-gray-900 border border-gray-800 hover:border-yellow-400/40 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left"
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                <div className="mt-6 w-8 h-0.5 bg-yellow-400/40 group-hover:w-16 group-hover:bg-yellow-400 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Stats Banner */}
      <section className="py-16 px-6 bg-yellow-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10,000+", label: "Happy Travelers" },
              { number: "150+",    label: "Destinations" },
              { number: "500+",    label: "Tour Packages" },
              { number: "15+",     label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl md:text-5xl font-bold text-black">{stat.number}</p>
                <p className="text-black/70 uppercase tracking-widest text-xs mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <Testimonials />

    </main>
  );
}