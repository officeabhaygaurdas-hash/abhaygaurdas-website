'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Search, X, BookOpen, Video, Users, Calendar, ArrowRight } from 'lucide-react';
import { TEACHINGS_DATA, LECTURES_DATA, TIMELINE_DATA, UPCOMING_EVENTS } from '@/data/content';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const matches: Array<{
      type: 'Teaching' | 'Lecture' | 'Biography' | 'Event';
      title: string;
      desc: string;
      href: string;
      icon: any;
    }> = [];

    // Search Teachings
    TEACHINGS_DATA.forEach((item) => {
      if (
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      ) {
        matches.push({
          type: 'Teaching',
          title: item.title,
          desc: item.excerpt,
          href: `/teachings/${item.slug}`,
          icon: BookOpen,
        });
      }
    });

    // Search Lectures
    LECTURES_DATA.forEach((lec) => {
      if (
        lec.title.toLowerCase().includes(q) ||
        lec.topic.toLowerCase().includes(q) ||
        lec.series.toLowerCase().includes(q) ||
        lec.description.toLowerCase().includes(q)
      ) {
        matches.push({
          type: 'Lecture',
          title: lec.title,
          desc: `${lec.series} • ${lec.duration}`,
          href: '/lectures',
          icon: Video,
        });
      }
    });

    // Search Timeline / Biography
    TIMELINE_DATA.forEach((t) => {
      if (
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.year.includes(q)
      ) {
        matches.push({
          type: 'Biography',
          title: `${t.year}: ${t.title}`,
          desc: t.description,
          href: '/about',
          icon: Users,
        });
      }
    });

    // Search Events
    UPCOMING_EVENTS.forEach((ev) => {
      if (
        ev.title.toLowerCase().includes(q) ||
        ev.description.toLowerCase().includes(q) ||
        ev.venue.toLowerCase().includes(q)
      ) {
        matches.push({
          type: 'Event',
          title: ev.title,
          desc: `${ev.date} • ${ev.venue}`,
          href: '/events',
          icon: Calendar,
        });
      }
    });

    return matches.slice(0, 8);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#321B0F]/60 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-2xl bg-[#FFF9EF] rounded-2xl shadow-elevated border border-[#F6B91A]/30 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#F2ECE4] bg-white">
          <Search className="w-5 h-5 text-[#E87516] mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search teachings, lectures, biography, events..."
            autoFocus
            className="w-full bg-transparent text-[#321B0F] placeholder-[#9B8475] focus:outline-none text-base font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#9B8475] hover:text-[#321B0F] mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-medium text-[#786253] bg-[#FFF4E2] rounded hover:bg-[#FFEEDD]"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {!query.trim() ? (
            <div className="py-8 text-center text-[#786253]">
              <p className="text-sm">Type any keyword to search discourses, philosophy, and service.</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['Mind Control', 'Udgaar', 'Bhishma', 'Gita Wisdom', 'Gurukula', 'Kurukshetra'].map(
                  (sug) => (
                    <button
                      key={sug}
                      onClick={() => setQuery(sug)}
                      className="px-3 py-1 rounded-full text-xs bg-[#FFF1D6] text-[#C9540B] hover:bg-[#FFEEDD] border border-[#F6B91A]/20"
                    >
                      {sug}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-[#786253]">
              <p className="text-sm">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-[#9B8475] mt-1">
                Try searching for &quot;Bhagavad Gita&quot;, &quot;Youth&quot;, or &quot;CFO&quot;.
              </p>
            </div>
          ) : (
            results.map((res, idx) => {
              const Icon = res.icon;
              return (
                <Link
                  key={idx}
                  href={res.href}
                  onClick={onClose}
                  className="flex items-start p-3 rounded-xl hover:bg-[#FFF1D6] transition-colors border border-transparent hover:border-[#F6B91A]/30 group"
                >
                  <div className="p-2 rounded-lg bg-[#FFF4E2] text-[#E87516] mr-3 shrink-0 group-hover:bg-[#E87516] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FFEEDD] text-[#C9540B]">
                        {res.type}
                      </span>
                      <h4 className="text-sm font-semibold text-[#321B0F] truncate group-hover:text-[#C9540B]">
                        {res.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#786253] line-clamp-1 mt-1">{res.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#BEACA0] self-center ml-2 group-hover:text-[#C9540B] group-hover:translate-x-0.5 transition-transform" />
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
