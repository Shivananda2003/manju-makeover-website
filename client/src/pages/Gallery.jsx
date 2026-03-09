const GALLERY_ITEMS = [
  { id: 1, title: 'Bridal Look', category: 'bridal', placeholder: 'Bridal makeup and styling' },
  { id: 2, title: 'Party Glam', category: 'party', placeholder: 'Party makeup' },
  { id: 3, title: 'Hair Styling', category: 'hair', placeholder: 'Hair styling' },
  { id: 4, title: 'Natural Look', category: 'makeup', placeholder: 'Natural makeup' },
  { id: 5, title: 'Festival Ready', category: 'party', placeholder: 'Festival look' },
  { id: 6, title: 'Elegant Updo', category: 'hair', placeholder: 'Updo hairstyle' },
  { id: 7, title: 'Soft Glam', category: 'makeup', placeholder: 'Soft glam makeup' },
  { id: 8, title: 'Mehendi Look', category: 'bridal', placeholder: 'Mehendi ceremony look' },
  { id: 9, title: 'Nail Art', category: 'mani-pedi', placeholder: 'Nail art' },
];

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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="relative h-full w-full flex flex-col items-center justify-end p-4">
                <div className="mb-auto pt-6">
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-accent-gold/40 to-accent-gold/10 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                    <span className="text-3xl">✨</span>
                  </div>
                </div>
                <div className="w-full text-center">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-accent-gold/80 mb-1">
                    {item.category}
                  </p>
                  <p className="font-display text-sm sm:text-base">{item.title}</p>
                  <p className="text-[11px] text-gray-300 mt-1">{item.placeholder}</p>
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
