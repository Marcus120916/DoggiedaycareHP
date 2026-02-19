"use client";
import React, { useState } from 'react';
import { Send, Dog, Calendar, MessageSquare, User } from "lucide-react";

export default function Boka() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Här skulle du normalt skicka data till en API-route
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="bg-nature-50 border border-nature-200 rounded-[3rem] p-12 md:p-20 shadow-xl">
          <div className="w-20 h-20 bg-nature-500 rounded-full flex items-center justify-center mx-auto mb-8 text-white">
            <Send size={40} />
          </div>
          <h1 className="text-4xl font-bold text-nature-900 mb-4 tracking-tight">Tack för din intresseanmälan!</h1>
          <p className="text-nature-400 text-lg mb-8">Vi har tagit emot ditt meddelande och återkommer till dig inom 24 timmar för att boka in ett första möte.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-nature-800 font-bold underline hover:text-nature-500 transition-colors"
          >
            Skicka en till anmälan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold text-nature-800 mb-6 italic tracking-tight">
          Boka här
        </h1>
        <p className="text-nature-400 text-lg max-w-xl mx-auto leading-relaxed">
          Fyll i formuläret nedan så kontaktar vi dig för en visning av våra lokaler och ett första möte med din hund.
        </p>
      </section>

      <div className="grid md:grid-cols-5 gap-16 items-start">
        {/* Formuläret */}
        <div className="md:col-span-3 bg-white border border-nature-100 p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-nature-900/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-nature-900 flex items-center gap-2">
                  <User size={16} className="text-nature-300" /> Ditt Namn
                </label>
                <input 
                  required
                  type="text" 
                  placeholder="För- och efternamn"
                  className="w-full px-5 py-4 rounded-2xl bg-nature-50 border border-nature-100 focus:outline-none focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-all text-nature-900 placeholder:text-nature-800"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-nature-900 flex items-center gap-2">
                  <Dog size={16} className="text-nature-400" /> Hundens Namn & Ras
                </label>
                <input 
                  required
                  type="text" 
                  placeholder="T.ex. Buster, Golden Retriever"
                  className="w-full px-5 py-4 rounded-2xl bg-nature-50 border border-nature-100 focus:outline-none focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-all text-nature-900 placeholder:text-nature-800"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-nature-900 flex items-center gap-2">
                <Calendar size={16} className="text-nature-300" /> Vilken tjänst är du intresserad av?
              </label>
              <select className="w-full px-5 py-4 rounded-2xl bg-nature-50 border border-nature-100 focus:outline-none focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-all text-nature-900 appearance-none">
                <option>Hunddagis (Heltid)</option>
                <option>Hunddagis (Deltid)</option>
                <option>Hundrastning</option>
                <option>Klipp & Trim</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-nature-900 flex items-center gap-2">
                <MessageSquare size={16} className="text-nature-300" /> Övrig information
              </label>
              <textarea 
                rows={4}
                placeholder="Berätta gärna lite om din hunds personlighet..."
                className="w-full px-5 py-4 rounded-2xl bg-nature-50 border border-nature-100 focus:outline-none focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-all text-nature-900 placeholder:text-nature-800"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-nature-800 text-white rounded-2xl font-bold text-lg hover:bg-nature-700 transition-all shadow-lg shadow-nature-800/20 active:scale-[0.98]"
            >
              Skicka förfrågan
            </button>
          </form>
        </div>

        {/* FAQ / Info vid sidan */}
        <div className="md:col-span-2 space-y-10">
          <div>
            <h3 className="text-2xl font-bold text-nature-900 mb-6 italic">Vanliga frågor</h3>
            <div className="space-y-6">
              {[
                { q: "Hur lång är väntetiden?", a: "Det varierar, men vi har oftast möjlighet att erbjuda visning inom en vecka." },
                { q: "Krävs det provspel?", a: "Vi kör alltid en provdag för att se hur din hund trivs i gruppen innan vi skriver avtal." },
                { q: "Är ni försäkrade?", a: "Självklart! Vi har full ansvarsförsäkring via Länsförsäkringar." }
              ].map((faq, i) => (
                <div key={i} className="border-b border-nature-100 pb-4">
                  <p className="font-bold text-nature-900 text-sm mb-1">{faq.q}</p>
                  <p className="text-nature-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-nature-500/10 p-8 rounded-3xl border border-nature-500/20">
            <p className="text-nature-800 text-sm font-medium italic leading-relaxed">
              "Vi vet hur viktigt det är att hitta rätt plats för sin bästa vän. Vi svarar alltid personligt på alla förfrågningar."
            </p>
            <p className="text-nature-500 text-xs font-bold uppercase tracking-widest mt-4">— xxx, Grundare</p>
          </div>
        </div>
      </div>
    </div>
  );
}