'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown,
  Sparkles,
  Users,
  HeartHandshake,
  Landmark,
  ArrowRight
} from 'lucide-react';
import SearchModal from './SearchModal';

const INITIATIVES_LINKS = [
  {
    name: 'Youth Outreach & Udgaar',
    desc: 'De-addiction festivals, BASE hostels, DYS courses',
    href: '/youth',
    icon: Users,
  },
  {
    name: 'Bhishma Donor Care',
    desc: 'Pastoral family care, home satsangs, Vedic guidance',
    href: '/bhishma',
    icon: HeartHandshake,
  },
  {
    name: 'Kurukshetra Temple Project',
    desc: 'Sri Krishna-Arjuna Mandir at Jyotisar',
    href: '/projects',
    icon: Landmark,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [initiativesOpen, setInitiativesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setInitiativesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setInitiativesOpen(false);
    setIsOpen(false);
  }, [pathname]);

  // Keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isInitiativeActive = ['/youth', '/bhishma', '/projects'].includes(pathname);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FFF9EF]/95 backdrop-blur-md shadow-subtle border-b border-[#F6B91A]/20 py-2.5'
            : 'bg-[#FFF9EF]/85 backdrop-blur-sm border-b border-[#F6B91A]/10 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo / Monogram Avatar (strictly single line, no wrapping) */}
            <Link href="/" className="group flex items-center space-x-3 shrink-0">
              <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-br from-[#E87516] via-[#F6B91A] to-[#C9540B] shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#FFF9EF]">
                  <Image
                    src="/images/logo_avatar.jpg"
                    alt="HG Abhay Gaur Das Logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#231209] group-hover:text-[#E87516] transition-colors leading-tight">
                  HG Abhay Gaur Das
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#786253] font-medium leading-none mt-0.5">
                  ISKCON Delhi • Monk & Preacher
                </span>
              </div>
            </Link>

            {/* Desktop Navigation: Ultra-Modern Floating Island Capsule */}
            <nav className="hidden lg:flex items-center p-1 rounded-full bg-white/85 backdrop-blur-md border border-[#F6B91A]/35 shadow-[0_2px_12px_rgba(50,27,15,0.05)] space-x-0.5">
              <Link
                href="/about"
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  pathname === '/about'
                    ? 'bg-gradient-to-b from-[#FFF5E6] to-[#FFEEDB] text-[#C9540B] shadow-sm border border-[#F6B91A]/40'
                    : 'text-[#473429] hover:text-[#C9540B] hover:bg-[#FFF4E2]/70'
                }`}
              >
                {pathname === '/about' && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E87516] mr-1.5 align-middle" />
                )}
                About
              </Link>

              <Link
                href="/teachings"
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  pathname.startsWith('/teachings')
                    ? 'bg-gradient-to-b from-[#FFF5E6] to-[#FFEEDB] text-[#C9540B] shadow-sm border border-[#F6B91A]/40'
                    : 'text-[#473429] hover:text-[#C9540B] hover:bg-[#FFF4E2]/70'
                }`}
              >
                {pathname.startsWith('/teachings') && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E87516] mr-1.5 align-middle" />
                )}
                Teachings
              </Link>

              <Link
                href="/lectures"
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  pathname === '/lectures'
                    ? 'bg-gradient-to-b from-[#FFF5E6] to-[#FFEEDB] text-[#C9540B] shadow-sm border border-[#F6B91A]/40'
                    : 'text-[#473429] hover:text-[#C9540B] hover:bg-[#FFF4E2]/70'
                }`}
              >
                {pathname === '/lectures' && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E87516] mr-1.5 align-middle" />
                )}
                Lectures
              </Link>

              {/* Initiatives Dropdown with Modern Floating Trigger */}
              <div 
                className="relative" 
                ref={dropdownRef}
                onMouseEnter={() => setInitiativesOpen(true)}
                onMouseLeave={() => setInitiativesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setInitiativesOpen(!initiativesOpen)}
                  className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    isInitiativeActive
                      ? 'bg-gradient-to-b from-[#FFF5E6] to-[#FFEEDB] text-[#C9540B] shadow-sm border border-[#F6B91A]/40'
                      : initiativesOpen
                      ? 'bg-[#FFF4E2] text-[#C9540B]'
                      : 'text-[#473429] hover:text-[#C9540B] hover:bg-[#FFF4E2]/70'
                  }`}
                >
                  {isInitiativeActive && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E87516] mr-1 align-middle" />
                  )}
                  <span>Initiatives</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-250 ${initiativesOpen ? 'rotate-180 text-[#C9540B]' : 'text-[#786253]'}`} />
                </button>

                {initiativesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_16px_36px_rgba(50,27,15,0.12)] border border-[#F6B91A]/35 p-2 py-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 pb-2 mb-1.5 border-b border-[#F2ECE4] flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#9B8475]">
                        Active Fields of Stewardship
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E87516]" />
                    </div>
                    {INITIATIVES_LINKS.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-start space-x-3 p-2.5 rounded-xl transition-all duration-150 group/item ${
                            isActive
                              ? 'bg-[#FFF1D6] text-[#C9540B]'
                              : 'hover:bg-[#FFF4E2] text-[#321B0F]'
                          }`}
                        >
                          <div className={`p-2 rounded-lg shrink-0 mt-0.5 transition-transform group-hover/item:scale-110 ${
                            isActive 
                              ? 'bg-[#E87516] text-white shadow-sm'
                              : 'bg-[#FFF4E2] text-[#E87516]'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold leading-snug group-hover/item:text-[#C9540B] transition-colors">
                              {item.name}
                            </p>
                            <p className="text-[11px] text-[#786253] leading-tight mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/gallery"
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  pathname === '/gallery'
                    ? 'bg-gradient-to-b from-[#FFF5E6] to-[#FFEEDB] text-[#C9540B] shadow-sm border border-[#F6B91A]/40'
                    : 'text-[#473429] hover:text-[#C9540B] hover:bg-[#FFF4E2]/70'
                }`}
              >
                {pathname === '/gallery' && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E87516] mr-1.5 align-middle" />
                )}
                Gallery
              </Link>

              <Link
                href="/events"
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  pathname === '/events'
                    ? 'bg-gradient-to-b from-[#FFF5E6] to-[#FFEEDB] text-[#C9540B] shadow-sm border border-[#F6B91A]/40'
                    : 'text-[#473429] hover:text-[#C9540B] hover:bg-[#FFF4E2]/70'
                }`}
              >
                {pathname === '/events' && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E87516] mr-1.5 align-middle" />
                )}
                Events
              </Link>
            </nav>

            {/* Actions: Search & CTA (Guaranteed single line, elegant breathing space & luxury finish) */}
            <div className="hidden sm:flex items-center space-x-3 shrink-0">
              <button
                onClick={() => setSearchOpen(true)}
                className="group flex items-center space-x-2.5 px-3.5 py-2 rounded-full text-xs font-medium text-[#6B5647] bg-white/90 hover:bg-white hover:text-[#231209] border border-[#E87516]/25 hover:border-[#E87516]/50 shadow-[0_2px_8px_rgba(50,27,15,0.04)] hover:shadow-[0_4px_12px_rgba(232,117,22,0.09)] transition-all duration-200 whitespace-nowrap"
                title="Search Teachings & Discourses (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-[#E87516] group-hover:scale-110 transition-transform duration-200" />
                <span className="hidden md:inline font-sans text-xs">Search</span>
                <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-semibold bg-[#FFF7ED] text-[#C2410C] border border-[#FDBA74]/50 rounded shadow-xs">
                  ⌘K
                </kbd>
              </button>

              <Link
                href="/connect"
                className="group relative inline-flex items-center justify-center px-5 py-2 rounded-full text-xs sm:text-[13px] font-bold text-white bg-gradient-to-r from-[#E87516] via-[#D97706] to-[#C9540B] shadow-[0_4px_14px_rgba(201,84,11,0.28)] hover:shadow-[0_6px_20px_rgba(201,84,11,0.4)] border border-white/25 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 whitespace-nowrap overflow-hidden"
              >
                {/* Subtle Luxury Shimmer Sweep */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
                
                <span className="relative z-10 flex items-center space-x-1.5">
                  <span>Connect & Invite</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/90 group-hover:translate-x-0.5 transition-transform duration-200" />
                </span>
              </Link>
            </div>

            {/* Mobile Menu & Search Button */}
            <div className="flex items-center space-x-1 lg:hidden shrink-0">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full text-[#473429] hover:bg-[#FFF4E2] transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-[#E87516]" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-[#321B0F] hover:bg-[#FFF4E2] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#FFF9EF] border-b border-[#F6B91A]/30 px-6 pt-4 pb-6 space-y-4 shadow-elevated">
            <div className="space-y-1">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-semibold ${
                  pathname === '/' ? 'bg-[#FFF1D6] text-[#C9540B]' : 'text-[#321B0F]'
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-semibold ${
                  pathname === '/about' ? 'bg-[#FFF1D6] text-[#C9540B]' : 'text-[#321B0F]'
                }`}
              >
                About & Journey
              </Link>
              <Link
                href="/teachings"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-semibold ${
                  pathname.startsWith('/teachings') ? 'bg-[#FFF1D6] text-[#C9540B]' : 'text-[#321B0F]'
                }`}
              >
                Teachings & Reflections
              </Link>
              <Link
                href="/lectures"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-semibold ${
                  pathname === '/lectures' ? 'bg-[#FFF1D6] text-[#C9540B]' : 'text-[#321B0F]'
                }`}
              >
                Discourses & Video Library
              </Link>
            </div>

            {/* Initiatives in Mobile */}
            <div className="pt-2 border-t border-[#F2ECE4]">
              <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-[#9B8475] mb-1">
                Initiatives
              </p>
              {INITIATIVES_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    pathname === item.href ? 'text-[#C9540B] bg-[#FFF1D6]' : 'text-[#5C483B]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-[#F2ECE4] space-y-1">
              <Link
                href="/gallery"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-semibold ${
                  pathname === '/gallery' ? 'bg-[#FFF1D6] text-[#C9540B]' : 'text-[#321B0F]'
                }`}
              >
                Photo Gallery
              </Link>
              <Link
                href="/events"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-semibold ${
                  pathname === '/events' ? 'bg-[#FFF1D6] text-[#C9540B]' : 'text-[#321B0F]'
                }`}
              >
                Events & Satsang
              </Link>
            </div>

            <div className="pt-3 border-t border-[#F2ECE4]">
              <Link
                href="/connect"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#E87516] to-[#C9540B] shadow-devotional block"
              >
                Connect & Invite for Discourse
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
