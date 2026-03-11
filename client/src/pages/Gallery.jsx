import { GALLERY_ITEMS } from "../constants/gallery";

function Gallery() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          Gallery
        </h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          A curated glimpse of bridal looks, soft glam, and hair styling from Manju&apos;s Makeover.
          Replace these tiles with your own studio images.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-black via-neutral-900 to-accent-gold/25"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="relative h-full w-full flex flex-col justify-end p-4 text-shadow">
                
                <div className="w-full text-center">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-accent-gold/80 mb-1">
                    {item.category}
                  </p>
                  <p className="font-display text-sm sm:text-base">{item.title}</p>
                  <p className="text-[11px] text-gray-200 mt-1">{item.placeholder}</p>
                </div>
              </div>
              <div className="absolute inset-0 scale-100 group-hover:scale-110 transition-transform duration-500 origin-center pointer-events-none" />
            </div>
          ))}
        </div>
        <p className="text-center text-xs sm:text-sm text-gray-400 mt-8">
          Add your own images in <code className="bg-white/10 px-1 rounded">client/public/images/gallery</code>{' '}
          and update this page to use real photos.
        </p>
      </div>
    </div>
  );
}

export default Gallery;
