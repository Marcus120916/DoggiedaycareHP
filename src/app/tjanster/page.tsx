"use client";
import React from 'react';
import { Check, Clock, Sun, Scissors } from "lucide-react";

export default function Tjanster() {
  const services = [
    {
      title: "Hunddagis",
      price: "xxx kr / månad",
      description: "Vår populäraste tjänst. En trygg plats för din hund under arbetsdagen.",
      features: ["Lek i grupper", "Vila i eget rum", "Dagliga promenader", "Uppdateringar i appen"],
      icon: <Sun className="text-nature-500" size={32} />,
      highlight: true
    },
    {
      title: "Hundrastning",
      price: "xxx kr / tillfälle",
      description: "Vi kommer hem till dig och tar ut hunden på en rejäl runda i närområdet.",
      features: ["45 minuters promenad", "Fräscht vatten", "Lättare aktivering", "SMS efteråt"],
      icon: <Clock className="text-nature-500" size={32} />,
      highlight: false
    },
    {
      title: "Klipp & Trim",
      price: "Från xxx kr",
      description: "Ge din vän en lyxig stund. Vi klipper, trimmar och badar hundar av alla raser.",
      features: ["Kloklippning ingår", "Schamponering", "Fön och borstning", "Hundparfym (valfritt)"],
      icon: <Scissors className="text-nature-500" size={32} />,
      highlight: false
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-nature-800 mb-6 italic tracking-tight">
          Våra Tjänster
        </h1>
        <p className="text-nature-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Vi skräddarsyr våra tjänster efter din hunds behov. Oavsett om det gäller heldag på dagis eller en snabb klippning, så står hunden i fokus.
        </p>
      </section>

      {/* Tjänster Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${
              service.highlight 
                ? 'bg-white border-nature-200 shadow-xl scale-105 z-10' 
                : 'bg-nature-50/50 border-nature-100 shadow-sm'
            }`}
          >
            {service.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-nature-800 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                Populärast
              </span>
            )}
            
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold text-nature-800 mb-2">{service.title}</h3>
            <p className="text-nature-500 font-bold text-xl mb-4">{service.price}</p>
            <p className="text-nature-400 text-sm mb-8 leading-relaxed italic border-l-2 border-nature-200 pl-4">
              {service.description}
            </p>
            
            <ul className="space-y-4 mb-8">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-nature-900 font-medium">
                  <Check size={16} className="text-nature-500" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${
              service.highlight 
                ? 'bg-nature-800 text-white hover:bg-nature-700 shadow-lg shadow-nature-800/20' 
                : 'bg-white border border-nature-200 text-nature-800 hover:bg-nature-50'
            }`}>
              Boka {service.title}
            </button>
          </div>
        ))}
      </div>

      {/* Info-sektion nedanför */}
      <section className="bg-nature-100 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-nature-900 mb-4 tracking-tight">Viktig information</h2>
          <p className="text-nature-900/70 mb-6 leading-relaxed">
            För att börja hos oss på dagis behöver hunden vara vaccinerad och försäkrad. Vi tillämpar alltid en inskolningsperiod på två veckor för att säkerställa att din hund trivs i gruppen.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <span className="bg-white/50 px-4 py-2 rounded-full text-xs font-bold text-nature-800 uppercase tracking-tighter border border-white">Vaccination krävs</span>
            <span className="bg-white/50 px-4 py-2 rounded-full text-xs font-bold text-nature-800 uppercase tracking-tighter border border-white">Inskolning ingår</span>
          </div>
        </div>
        <div className="flex-1 h-64 w-full bg-nature-200 rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center italic text-nature-400">
             {/* Här kan du lägga en bild på en hund som sover eller vilar */}
             [Bild på en nöjd hund]
          </div>
        </div>
      </section>
    </div>
  );
}