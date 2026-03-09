import { Link } from 'react-router-dom';

function Home() {
  const services = [
    {
      title: 'Bridal Makeup',
      description:
        'Tailor-made bridal looks with flawless, photo-ready makeup and elegant styling for your big day.',
      tag: 'Bridal',
    },
    {
      title: 'Party Makeup',
      description:
        'Soft glam to full drama for sangeet, receptions, parties, and special evenings out.',
      tag: 'Party',
    },
    {
      title: 'Hair Styling',
      description:
        'Nourishing facials, indulgent hair spa, and treatments that leave you glowing.',
      tag: 'Care',
    },
  ];

  const galleryPreview = [
    'Bridal glow',
    'Soft glam',
    'Elegant updo',
    'Festive look',
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,169,98,0.35),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(201,169,98,0.12),_transparent_55%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent-gold/80 mb-4">
              Luxury Beauty Studio
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-5">
              Manju&apos;s{' '}
              <span className="text-accent-gold">Makeover</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-xl">
              An intimate, luxury beauty parlour where every detail is curated for you —
              from bridal transformations to effortless everyday elegance.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent-gold text-black font-medium shadow-[0_0_0_1px_rgba(201,169,98,0.4)] hover:brightness-110 transition"
              >
                Book your appointment
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-accent-gold/60 text-accent-gold text-sm font-medium hover:bg-white/5 transition"
              >
                Explore services
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-xs text-gray-400">
              <div>
                <p className="font-semibold text-accent-gold text-sm">Bridal & Occasion</p>
                <p>Soft glam, HD makeup, long-wear looks</p>
              </div>
              <div>
                <p className="font-semibold text-accent-gold text-sm">Hair & Skin</p>
                <p>Hair styling, facials, rituals & care</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-tr from-accent-gold/10 via-transparent to-accent-gold/5 rounded-3xl blur-2xl pointer-events-none" />
            <div className="relative grid grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-4 sm:space-y-5">
                <div className="h-40 sm:h-48 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-end p-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                      Signature
                    </p>
                    <p className="font-display text-lg">Bridal glow</p>
                  </div>
                </div>
                <div className="h-32 sm:h-40 rounded-3xl bg-gradient-to-br from-accent-gold/20 to-accent-gold/5 border border-accent-gold/30 flex items-end p-4">
                  <p className="text-sm text-black font-medium">
                    Curated luxury in every detail.
                  </p>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-5 translate-y-6 sm:translate-y-10">
                <div className="h-32 sm:h-40 rounded-3xl bg-gradient-to-br from-white/15 to-white/5 border border-white/10 flex items-end p-4">
                  <p className="text-sm">
                    Soft glam, luminous skin, and polished hairstyles — crafted just for you.
                  </p>
                </div>
                <div className="h-40 sm:h-48 rounded-3xl bg-gradient-to-tr from-black to-neutral-900 border border-white/10 flex items-center justify-center">
                  <div className="text-center space-y-1">
                    <p className="text-xs uppercase tracking-[0.25em] text-accent-gold/80">
                      Since
                    </p>
                    <p className="font-display text-2xl text-accent-gold">
                      MM
                    </p>
                    <p className="text-[11px] text-gray-400">
                      Manju&apos;s Makeover Studio
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-y border-white/5 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid md:grid-cols-[1.2fr,1fr] gap-10">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl mb-4">
              A luxury beauty parlour with a personal touch.
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              At Manju&apos;s Makeover, we believe beauty should feel effortless yet
              unforgettable. Every session is one-on-one, customised, and designed to
              flatter your unique features, outfits, and occasion.
            </p>
            <p className="text-sm sm:text-base text-gray-300 mb-6">
              Whether it&apos;s your wedding day, a family celebration, or a quiet
              self-care ritual, we bring together premium products, expert artistry,
              and a calm, intimate space.
            </p>
            <div className="flex flex-wrap gap-6 text-xs text-gray-300">
              <div>
                <p className="font-semibold text-accent-gold text-sm">Specialities</p>
                <p>Bridal makeup • HD & airbrush • Occasion glam</p>
              </div>
              <div>
                <p className="font-semibold text-accent-gold text-sm">Location</p>
                <p>Update your studio address here.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-accent-gold/25 bg-gradient-to-br from-neutral-900 to-black p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-accent-gold/80 mb-2">
                Studio Notes
              </p>
              <p className="text-sm text-gray-200">
                Soft lighting, comfortable seating, and curated music — the studio is
                designed to make you feel calm, cared for, and camera-ready.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-white">
                  Prefer WhatsApp for bookings?
                </p>
                <p className="text-xs text-gray-300">
                  Quick confirmations, time slots, and look discussions.
                </p>
              </div>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 bg-accent-gold text-black text-xs font-semibold hover:brightness-110 transition"
              >
                Chat now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent-gold/80 mb-2">
                Our Services
              </p>
              <h2 className="font-display text-2xl sm:text-3xl">
                Curated treatments & signature looks.
              </h2>
            </div>
            <Link
              to="/services"
              className="text-sm text-accent-gold hover:text-white transition underline underline-offset-4 decoration-accent-gold/70"
            >
              View full services menu
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.title} to="/booking" state={{ selectedService: service.title }}>
                <article
                  className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-black/80 p-5 flex flex-col justify-between cursor-pointer transform transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(212,175,55,0.35)]"
                >
                  <div>
                    <span className="inline-flex items-center rounded-full border border-accent-gold/50 bg-black/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-accent-gold mb-4">
                      {service.tag}
                    </span>

                    <h3 className="font-display text-lg mb-2 group-hover:text-accent-gold transition">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-300">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between text-xs text-gray-400">
                   <span>By appointment only</span>
                   <span className="text-accent-gold/80">Tap to book →</span>
                  </div>
                </article>
              </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="border-y border-white/5 bg-gradient-to-b from-black via-neutral-950 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent-gold/80 mb-2">
                Gallery
              </p>
              <h2 className="font-display text-2xl sm:text-3xl">
                A glimpse of our work.
              </h2>
              <p className="text-sm text-gray-300 max-w-md mt-2">
                Bridal transformations, party-ready looks, and everyday elegance — update
                these tiles with your own photos.
              </p>
            </div>
            <Link
              to="/gallery"
              className="text-sm text-accent-gold hover:text-white transition underline underline-offset-4 decoration-accent-gold/70"
            >
              View full gallery
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {galleryPreview.map((label) => (
              <div
                key={label}
                className="relative h-32 sm:h-40 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-t from-black via-neutral-900 to-accent-gold/20"
              >
                <div className="relative h-full w-full flex items-end p-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-gray-300">
                      Look
                    </p>
                    <p className="font-display text-sm text-white">{label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <div className="rounded-3xl border border-accent-gold/40 bg-gradient-to-r from-accent-gold/15 via-black to-black px-6 py-8 sm:px-10 sm:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent-gold/80 mb-2">
                Ready when you are
              </p>
              <h2 className="font-display text-2xl sm:text-3xl mb-2">
                Reserve your slot at Manju&apos;s Makeover.
              </h2>
              <p className="text-sm text-gray-200 max-w-xl">
                Share your date, time, and occasion details — we&apos;ll help you choose the
                perfect look and finalise everything over call or WhatsApp.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-accent-gold text-black text-sm font-semibold shadow-[0_0_0_1px_rgba(201,169,98,0.4)] hover:brightness-110 transition w-full sm:w-auto"
              >
                Book online
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-accent-gold/60 text-accent-gold text-sm font-semibold hover:bg-white/5 transition w-full sm:w-auto"
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
