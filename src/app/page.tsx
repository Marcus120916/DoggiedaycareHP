"use client"; 
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const images = ['/oneDog.jpg', '/dayCare.jpg', '/dogWalk.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 pb-32">
      
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden rounded-3xl mt-8 shadow-2xl">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt="Hunddagis miljö"
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/30 flex pt-25 justify-center text-center p-4">
          <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg transition-transform duration-700">
            Välkommen till Hundstund
          </h1>
        </div>
      </section>

      {/* Introduktion */}
      <section className="py-24 flex flex-col items-center text-center gap-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-nature-800 tracking-tight italic">
          En trygg paus i vardagen
        </h2>
        <div className="max-w-2xl">
          <p className="text-nature-400 text-lg leading-relaxed">
            Vi erbjuder en harmonisk miljö där din hund får leka, vila och utvecklas tillsammans med erfarna hundpedagoger. Hos oss är varje hund unik.
          </p>
        </div>
      </section>

      {/* Tjänster Grid */}
      <section className="py-12 grid md:grid-cols-3 gap-8">
        {[
          { title: "Hunddagis", price: "Från xxxkr/mån", color: "bg-nature-100" },
          { title: "Hundrastning", price: "Från xxxkr/promenad", color: "bg-nature-100" },
          { title: "Hundtrim", price: "Enligt tidsbokning", color: "bg-nature-100" },
        ].map((item) => (
          <div key={item.title} className={`${item.color} p-8 rounded-2xl border border-nature-200 flex flex-col gap-4 shadow-sm`}>
            <h3 className="text-2xl font-bold text-nature-800">{item.title}</h3>
            <p className="text-nature-900/70">Lorem ipsum dolor sit amet, consectetur adipiscing elit för din hunds bästa.</p>
            <span className="font-semibold text-nature-500 mt-auto">{item.price}</span>
          </div>
        ))}
      </section>
    </div>
  );
}