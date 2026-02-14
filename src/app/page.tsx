"use client"; 

import { useState, useEffect } from 'react';
import Image from 'next/image';

//Pictures 
export default function Home() {
  const images = [
    '/bild-1.jpg', 
    '/bild-2.jpg',
    '/bild-3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Switch image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 pb-32 pt-20 flex flex-col gap-24 md:gap-32">
      
      {/* Sektion 1 - Hero med bildväxlare */}
      <section className="relative h-[600px] w-full overflow-hidden rounded-2xl border-b border-nature-900">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`Hund bild ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
        
        {/* Overlay för att göra text läsbar (valfritt) */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Välkommen</h1>
        </div>
      </section>

      {/* Sektion 2 - Test av färger */}
      <section className="py-24 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-nature-600">test</h2>
        <div className="space-y-4">
          <p className="text-nature-300">test</p>
          <p className="text-nature-600">test</p>
          <p className="text-nature-900 text-3xl font-bold">test</p>
        </div>
      </section>
    </div>
  );
}