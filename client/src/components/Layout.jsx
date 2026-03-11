import { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { label: 'Home', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Book Appointment', to: '/booking' },
      { label: 'Contact', to: '/contact' },
    ],
    []
  );

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-accent-gold/20">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="group inline-flex items-center"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full 
              bg-gradient-to-br from-accent-gold/25 to-accent-gold/5 ring-1 ring-accent-gold/30">
                <img
                  src="/images/favicon/favicon_manju_makeover.png"
                  alt="Manju's Makeover icon"
                  className="h-6 w-6 object-contain"
                />
              </span>
              <span className="sr-only">Manju&apos;s Makeover</span>
            </NavLink>

            <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      [
                        'transition',
                        isActive
                          ? 'text-accent-gold'
                          : 'text-gray-200 hover:text-accent-gold',
                      ].join(' ')
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-200 hover:text-accent-gold hover:bg-white/5 ring-1 ring-white/10 transition"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>

          <div
            id="mobile-menu"
            className={[
              'md:hidden overflow-hidden transition-[max-height,opacity] duration-300',
              isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0',
            ].join(' ')}
          >
            <div className="pt-2 rounded-xl bg-white/5 ring-1 ring-white/10">
              <ul className="flex flex-col py-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        [
                          'block px-4 py-3 text-sm font-medium transition',
                          isActive
                            ? 'text-accent-gold bg-white/5'
                            : 'text-gray-200 hover:text-accent-gold hover:bg-white/5',
                        ].join(' ')
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-black text-gray-300 border-t border-accent-gold/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <p className="font-display text-xl text-white">Manju&apos;s Makeover</p>
              <p className="text-sm text-gray-400">
                Luxury beauty services with a personal touch. Bridal makeup, party glam, hair styling, and skin care.
              </p>
              <div className="h-px w-20 bg-accent-gold/40" />
              <p className="text-sm text-gray-400">
                Call: <a className="text-accent-gold hover:text-white transition" href="tel:+918895429300">+91 88954 29300</a>
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-display text-white">Quick Links</p>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        isActive ? 'text-accent-gold' : 'text-gray-300 hover:text-accent-gold transition'
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <p className="font-display text-white">Visit</p>
              <p className="text-sm text-gray-400">
                Ananta Nagar 5th lane<br />
                Berhampur, Odisha
              </p>
              <p className="text-sm text-gray-400">
                Hours: <br/>
                10:00 AM – 2:00 PM <br/>
                5:00 PM – 9:00 PM
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-display text-white">Book</p>
              <p className="text-sm text-gray-400">Prefer WhatsApp? Confirm your appointment instantly.</p>
              <a
                href="https://wa.me/918895429300"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 bg-accent-gold text-black font-medium hover:brightness-110 transition ring-1 ring-accent-gold/40"
              >
                <span>Book on WhatsApp</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} Manju&apos;s Makeover. All rights reserved.</p>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
