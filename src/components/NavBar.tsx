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

  const navLinks = [
    { name: 'Start', href: '/' },
    { name: 'Våra Tjänster', href: '/tjanster' },
    { name: 'Om oss', href: '/about' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-nature-50/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        <Link href="/" className="flex items-center gap-2 text-nature-900 group">
          <Dog size={32} className="text-nature-800 group-hover:rotate-12 transition-transform" />
          <span className={`font-bold text-xl tracking-tight ${!isScrolled && pathname === '/' ? 'text-white md:text-nature-800' : 'text-nature-800'}`}>
            Hundstund - din hunds andra hem
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className={`text-sm font-bold transition-colors ${
                pathname === link.href ? 'text-nature-500' : 'text-nature-900 hover:text-nature-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/boka"
            className="bg-nature-800 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-nature-700 transition-all shadow-lg active:scale-95"
          >
            Boka nu
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-nature-900 bg-nature-100 p-2 rounded-full" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`absolute top-full left-0 w-full bg-nature-50 p-8 flex flex-col gap-6 md:hidden shadow-2xl transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            onClick={() => setMobileMenuOpen(false)} 
            className={`text-2xl font-bold ${pathname === link.href ? 'text-nature-500' : 'text-nature-900'}`}
          >
            {link.name}
          </Link>
        ))}
        <Link 
          href="/boka"
          className="bg-nature-800 text-white text-center py-4 rounded-2xl font-bold text-lg"
        >
          Boka nu
        </Link>
      </div>
    </nav>
  );
}