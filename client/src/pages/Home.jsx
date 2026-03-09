import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-rose/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23c9a962\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-primary-600">Manju's Makeover</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Where beauty meets care. Experience expert makeup, hair, and skin treatments in a relaxing environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition"
            >
              Book an Appointment
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-center text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We bring years of experience and a passion for making you look and feel your best.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Expert Stylists', desc: 'Trained professionals with expertise in bridal, party, and everyday looks.' },
              { title: 'Quality Products', desc: 'We use trusted, skin-friendly products for lasting results.' },
              { title: 'Relaxing Ambience', desc: 'A clean, comfortable space so you can unwind while we pamper you.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-primary-50/50 border border-primary-100 text-center">
                <h3 className="font-display text-xl font-semibold text-primary-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">Book on WhatsApp</h2>
          <p className="text-gray-600 mb-6">Quick and easy — message us to confirm your slot.</p>
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Manju's%20Makeover."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
