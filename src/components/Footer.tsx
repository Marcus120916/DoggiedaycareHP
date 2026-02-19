import Link from 'next/link';
import { Dog, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-nature-50 border-t border-nature-100 py-16 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.05)]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-nature-800">
        
        {/* Kolumn 1: Om oss / Logo */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Dog size={32} className="text-nature-700" />
            <span className="font-bold text-xl tracking-tight">Hundstund</span>
          </div>
          <p className="text-nature-400 text-sm leading-relaxed">
            Ett personligt hunddagis med fokus på trygghet, lek och stimulans. Vi tar hand om din bästa vän som om den vore vår egen.
          </p>
        </div>

        {/* Kolumn 2: Snabblänkar */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-nature-800">Meny</h4>
          <ul className="flex flex-col gap-3 text-nature-900/70 text-sm">
            <li><Link href="/" className="hover:text-nature-500 transition-colors font-medium">Start</Link></li>
            <li><Link href="/tjanster" className="hover:text-nature-500 transition-colors font-medium">Våra Tjänster</Link></li>
            <li><Link href="/aboutus" className="hover:text-nature-500 transition-colors font-medium">Om oss</Link></li>
            <li><Link href="/boka" className="hover:text-nature-500 transition-colors font-medium">Boka plats</Link></li>
          </ul>
        </div>

        {/* Kolumn 3: Kontakt */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-nature-800">Hitta oss</h4>
          <ul className="flex flex-col gap-4 text-nature-900/70 text-sm font-medium">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-nature-500" />
              <span>08-123 45 67</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-nature-500" />
              <span>info@hundstund.se</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-nature-500" />
              <span>Hundvägen 1, Stockholm</span>
            </li>
          </ul>
        </div>

        {/* Kolumn 4: Öppettider */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-nature-900">Öppettider</h4>
          <ul className="text-sm text-nature-900 flex flex-col gap-3">
            <li className="flex justify-between font-medium">
              <span>Mån - Fre:</span>
              <span className="text-nature-900">07:00 - 18:00</span>
            </li>
            <li className="flex justify-between border-t border-nature-900 pt-3">
              <span>Lör - Sön:</span>
              <span>Stängt</span>
            </li>
          </ul>
          <div className="flex gap-4 mt-6">
            <Link href="#" className="p-2.5 bg-white border border-nature-200 rounded-full text-nature-700 hover:text-nature-500 hover:shadow-sm transition-all">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="p-2.5 bg-white border border-nature-200 rounded-full text-nature-700 hover:text-nature-500 hover:shadow-sm transition-all">
              <Facebook size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Underdel */}
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-nature-500 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-nature-900 uppercase tracking-[0.2em]">
        <p>© 2026 Hundstund AB</p>
        <p className="font-semibold italic">Din hunds andra hem</p>
      </div>
    </footer>
  );
}