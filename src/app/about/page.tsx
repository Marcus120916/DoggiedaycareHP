"use client";
import React from 'react';
import Image from 'next/image';
import { Heart, ShieldCheck, Star, Award } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      title: "Trygghet först",
      desc: "Vi är utbildade hundinstruktörer och ser till att varje hund känner sig säker i gruppen.",
      icon: <ShieldCheck className="text-nature-500" size={24} />
    },
    {
      title: "Personligt fokus",
      desc: "Vi håller grupperna små för att kunna ge varje individ den uppmärksamhet de förtjänar.",
      icon: <Heart className="text-nature-500" size={24} />
    },
    {
      title: "Lång erfarenhet",
      desc: "Med över 10 år i branschen har vi hanterat alla typer av raser och personligheter.",
      icon: <Award className="text-nature-500" size={24} />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      
      {/* Hero-sektion för Om oss */}
      <section className="flex flex-col md:flex-row gap-16 items-center mb-32">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-nature-800 italic tracking-tight">
            Vår historia
          </h1>
          <p className="text-nature-500 text-lg leading-relaxed">
            Hundstund startades 2014 med en enkel vision: att skapa ett dagis där vi själva skulle vilja lämna våra egna hundar. 
          </p>
          <p className="text-nature-400 leading-relaxed">
            Det som började som en liten lokal i utkanten av staden har idag vuxit till en modern anläggning med stora lekytor, lugna vilorum och ett team av dedikerade hundälskare. Vi tror på en balans mellan aktivitet och vila, och vi arbetar uteslutande med mjuka metoder och positiv förstärkning.
          </p>
          <div className="pt-4">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-nature-100 rounded-full text-nature-800 font-bold text-sm">
               <Star size={16} className="fill-nature-500 text-nature-500" />
               Certifierade hundpedagoger
             </div>
          </div>
        </div>
        
        <div className="flex-1 relative w-full aspect-square">
          <div className="absolute inset-0 bg-nature-200 rounded-[4rem] -rotate-3 transition-transform hover:rotate-0 duration-500"></div>
          <div className="absolute inset-0 bg-nature-100 rounded-[4rem] overflow-hidden shadow-xl">
             {/* Här lägger du in en bild på grundaren eller teamet */}
             <div className="w-full h-full flex items-center justify-center text-nature-400 italic">
               [Bild på teamet / grundaren]
             </div>
          </div>
        </div>
      </section>

      {/* Våra Värderingar */}
      <section className="bg-nature-50 rounded-[3rem] p-10 md:p-20 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-nature-800 mb-4">Varför välja oss?</h2>
          <div className="w-20 h-1.5 bg-nature-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-2">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-nature-500">{value.title}</h3>
              <p className="text-nature-400 text-sm leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team-sektion (Placeholder) */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-nature-800 mb-12 italic">Människorna bakom tassen</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((member) => (
            <div key={member} className="group">
              <div className="aspect-[4/5] bg-nature-100 rounded-2xl mb-4 overflow-hidden relative border border-nature-200">
                {/* Här lägger du personalbilder */}
                <div className="absolute inset-0 flex items-center justify-center text-nature-300 text-xs">Personalbild</div>
              </div>
              <h4 className="font-bold text-nature-900">Namn Efternamn</h4>
              <p className="text-nature-400 text-xs uppercase tracking-widest mt-1">Hundskötare</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}