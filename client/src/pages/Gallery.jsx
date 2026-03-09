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
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">Gallery</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A glimpse of our work — bridal, party, hair, and more.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-primary-100 to-accent-rose/20 flex items-end p-4 group"
            >
              <div className="w-full text-center">
                <span className="text-4xl opacity-60 group-hover:opacity-80 transition">✨</span>
                <p className="font-display font-medium text-gray-800 mt-2">{item.title}</p>
                <p className="text-sm text-gray-600">{item.placeholder}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">
          Add your own images in <code className="bg-gray-100 px-1 rounded">client/src/pages/Gallery.jsx</code> or use an image folder in <code className="bg-gray-100 px-1 rounded">client/public/images/gallery</code>.
        </p>
      </div>
    </div>
  );
}

export default Gallery;
