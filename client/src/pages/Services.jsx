import { Link } from 'react-router-dom';
import { SERVICES } from '../constants/services';

function Services() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          Our Services
        </h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          From bridal makeup to everyday grooming, each service at Manju&apos;s Makeover is
          designed to feel luxurious, personalised, and photo-ready.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-black/80 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-40 sm:h-44 bg-gradient-to-br from-accent-gold/25 via-black to-black flex items-center justify-center">
                <span className="text-5xl opacity-70 group-hover:scale-110 transform transition-transform duration-300">
                  ✨
                </span>
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl font-semibold mb-2 group-hover:text-accent-gold transition-colors">
                  {service.name}
                </h2>
                <p className="text-gray-300 text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex justify-between text-xs sm:text-sm text-accent-gold font-medium mb-3">
                  <span>{service.price}</span>
                  <span>{service.duration}</span>
                </div>
                <Link
                  to="/booking"
                  className="inline-flex items-center text-sm text-accent-gold hover:text-white transition"
                >
                  Book now
                  <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
