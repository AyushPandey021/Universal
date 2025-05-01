import React from 'react';

const images = [
  { src: '/assets/gallery1.jpg', alt: 'Event 1', orientation: 'landscape' },
  { src: '/assets/gallery2.jpg', alt: 'Student 2', orientation: 'portrait' },
  { src: '/assets/gallery3.jpg', alt: 'Event 3', orientation: 'landscape' },
  { src: '/assets/gallery4.jpg', alt: 'Activity 4', orientation: 'portrait' },
  { src: '/assets/gallery5.jpg', alt: 'Celebration 5', orientation: 'landscape' },
];

const Gallery = () => {
  return (
    <section className="bg-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">College Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className={`${
              img.orientation === 'portrait' ? 'row-span-2' : ''
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-60 md:h-72 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
