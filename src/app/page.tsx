"use client"; 

import { useState, useEffect } from 'react';
import Image from 'next/image';

//Pictures 
export default function Home() {
  const images = [
    '/oneDog.jpg', 
    '/dayCare.jpg',
    '/dogWalk.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Switch image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 pb-32 pt-20 flex flex-col ">
      
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
        <div className="absolute inset-0 bg-black/20 flex justify-center pt-18">
          <h1 className="text-white text-6xl font-bold">Välkommen till oss</h1>
        </div>
      </section>

      {/* Sektion 2 - Test av färger */}
      <section className="py-8 flex flex-col gap-8 flex items-center pb-32">
        <h2 className="text-6xl font-extrabold text-nature-900 tracking-tight ">Hundstund</h2>
        <div className="max-w-3xl">
          <p className="text-nature-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
      <section className="py-32 flex flex-col gap-8 flex items-center border border-nature-300">
        <h2 className="text-6xl font-extrabold text-nature-900 tracking-tight ">Våra tjänster</h2>
        <div className="max-w-3xl">
        <p className="text-nature-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
      <section className="py-32 flex flex-col gap-8 flex items-center ">
        <h2 className="text-6xl font-extrabold text-nature-900 tracking-tight ">Om oss</h2>
        <div className="max-w-3xl">
        <p className="text-nature-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
    </div>
  );
}