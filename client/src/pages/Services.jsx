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
            <Link
              key={service.id}
              to="/booking"
              state={{ selectedService: service.name }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-black/80   flex flex-col justify-between cursor-pointer transform transition duration-300  hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(212,175,55,0.35)] overflow-hidden"
            >
            <article className="h-full">
              <div className="h-72 overflow-hidden">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
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

                <div className="inline-flex items-center text-sm text-accent-gold group-hover:text-white transition">
                  Book now
                  <span className="ml-1 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
