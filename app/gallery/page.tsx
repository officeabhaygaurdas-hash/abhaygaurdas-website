'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { GALLERY_DATA, GalleryImage } from '@/data/content';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Guru & Parampara',
    'Youth Festivals',
    'Temple Service',
    'Dignitaries',
    'Pilgrimage',
    'Spiritual Life'
  ];

  const filteredImages = selectedCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(img => img.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, filteredImages.length]);

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-sacred-pattern py-16 border-b border-[#F6B91A]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF1D6] text-xs font-semibold text-[#C9540B]">
            <Sparkles className="w-3.5 h-3.5 text-[#F6B91A]" />
            <span>Archival Photographic Records</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#231209]">
            Moments of Devotional Service
          </h1>
          <p className="text-base sm:text-lg text-[#5C483B] max-w-2xl mx-auto leading-relaxed">
            Visual chronicle of youth conventions, deity seva, pilgrimage in sacred dhams, and moments with spiritual master HH Gopal Krishna Goswami Maharaj.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-wrap justify-center gap-2 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#E87516] text-white shadow-devotional'
                  : 'bg-[#FFF4E2] text-[#473429] hover:bg-[#FFEEDD] border border-[#F6B91A]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setActiveImageIndex(idx)}
              className="group relative rounded-2xl overflow-hidden bg-[#FFF4E2] border border-[#F6B91A]/20 shadow-subtle hover:shadow-card-hover cursor-pointer transition-all duration-300 aspect-[4/3] flex flex-col justify-end"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                <div className="flex items-center justify-between text-[10px] text-[#FFD35A] uppercase font-bold mb-1">
                  <span>{img.category}</span>
                  <span>{img.year}</span>
                </div>
                <h3 className="font-serif text-sm font-bold line-clamp-1">{img.title}</h3>
                <p className="text-[11px] text-[#D7CFC6] line-clamp-2 mt-0.5">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && filteredImages[activeImageIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation arrows */}
          <button
            onClick={() =>
              setActiveImageIndex((prev) =>
                prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hidden sm:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setActiveImageIndex((prev) =>
                prev !== null ? (prev + 1) % filteredImages.length : null
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hidden sm:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Container */}
          <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] max-h-[70vh] rounded-xl overflow-hidden">
              <Image
                src={filteredImages[activeImageIndex].src}
                alt={filteredImages[activeImageIndex].title}
                fill
                className="object-contain"
              />
            </div>
            
            {/* Caption bar */}
            <div className="w-full mt-4 text-center text-white space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#FFD35A] font-bold">
                {filteredImages[activeImageIndex].category} • {filteredImages[activeImageIndex].year}
              </span>
              <h3 className="font-serif text-xl font-bold">
                {filteredImages[activeImageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#D7CFC6] max-w-2xl mx-auto">
                {filteredImages[activeImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
