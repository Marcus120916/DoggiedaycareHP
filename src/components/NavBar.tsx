"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Menu, X, Dog, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified links for a Dog Daycare
  const navLinks = [
    { name: 'Start', href: '/' },
    { name: 'Våra Tjänster', href: '/tjanster' },
    { name: 'Priser', href: '/priser' },
    { name: 'Om oss', href: '/aboutus' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-nature-50/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO: Dog icon + Name */}
        <Link href="/" className="flex items-center gap-2 text-nature-900 focus-visible:ring-2 focus-visible:ring-nature-900 rounded-lg outline-none">
          <Dog size={32} className="text-nature-700" />
          <span className="font-bold text-xl tracking-tight">Hundstund</span>
        </Link>

        {/* DESKTOP NAV: Clean and simple */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-nature-900 hover:opacity-70 transition-opacity"
            >
                {link.name}
            </Link>
          ))}
          
          {/* CALL TO ACTION: Booking button */}
          <Link 
            href="/boka"
            className="bg-nature-900 text-nature-50 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-nature-800 transition-transform active:scale-95 shadow-md"
          >
            Boka plats
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden text-nature-900 p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Öppna meny"
        >
          {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div 
        className={`absolute top-full left-0 w-full bg-nature-50 border-t border-nature-200 p-8 flex flex-col gap-6 md:hidden shadow-2xl transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            onClick={() => setMobileMenuOpen(false)} 
            className={`text-xl font-semibold ${
              pathname === link.href ? 'text-nature-900' : 'text-nature-600'
            }`}
          >
            {link.name}
          </Link>
        ))}
        
        <div className="pt-6 border-t border-nature-200 flex flex-col gap-4">
          <Link 
            href="/boka"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-nature-900 text-nature-50 text-center py-4 rounded-xl font-bold text-lg"
          >
            Boka plats nu
          </Link>
          <div className="flex justify-center gap-6 text-nature-600">
            <Link href="tel:0701234567"><Phone size={24} /></Link>
            <Link href="/contact"><Mail size={24} /></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}