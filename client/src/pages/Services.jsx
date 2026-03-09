import { Link } from 'react-router-dom';
import { SERVICES } from '../constants/services';

function Services() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">Our Services</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          From bridal makeup to everyday grooming, we offer a range of services to suit your needs.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition"
            >
              <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-rose/30 flex items-center justify-center">
                <span className="text-6xl opacity-50">✨</span>
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl font-semibold text-gray-900 mb-2">{service.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex justify-between text-sm text-primary-700 font-medium">
                  <span>{service.price}</span>
                  <span>{service.duration}</span>
                </div>
                <Link
                  to="/booking"
                  className="mt-4 inline-block text-primary-600 font-medium hover:underline"
                >
                  Book now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
