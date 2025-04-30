import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import '../controller/'; // optional custom CSS

const testimonials = [
  {
    id: 1,
    name: 'Kumkum Maurya',
    quote: 'My experience at Medicaps University has been truly amazing. The supportive faculty, quality education...',
    image: '/images/kumkum.jpg'
  },
  {
    id: 2,
    name: 'Raj Patel',
    quote: 'Medicaps helped me grow personally and professionally. Grateful for the environment and mentors.',
    image: '/images/raj.jpg'
  },
  {
    id: 3,
    name: 'Sneha Singh',
    quote: 'The labs, faculty, and opportunities are truly unmatched. Proud to be part of this university.',
    image: '/images/sneha.jpg'
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-12 px-4 text-center">
      <h2 className="text-2xl font-bold mb-10">
        <span className="bg-blue-500 px-3 py-1 rounded">Testimonials</span>
      </h2>
      
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 4000 }}
        navigation
        loop
        spaceBetween={50}
        slidesPerView={1}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4">
              <div className="md:w-1/2 text-xl font-semibold leading-snug">
                “{t.quote}”
                <div className="mt-4 text-sm font-light">— {t.name}</div>
              </div>
              <div className="md:w-1/4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="rounded-full w-48 h-48 object-cover border-4 border-white"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8 underline cursor-pointer hover:text-blue-300">
        View All →
      </div>
    </div>
  );
};

export default Testimonials;
