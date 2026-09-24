'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { TEACHINGS_DATA } from '@/data/content';

export default function TeachingsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Financial Stewardship',
    'Youth Guidance',
    'Bhakti & Seva',
    'Spiritual Leadership'
  ];

  const filteredTeachings = selectedCategory === 'All'
    ? TEACHINGS_DATA
    : TEACHINGS_DATA.filter(t => t.category === selectedCategory);

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-sacred-pattern py-16 border-b border-[#F6B91A]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF1D6] text-xs font-semibold text-[#C9540B]">
            <Sparkles className="w-3.5 h-3.5 text-[#F6B91A]" />
            <span>Scriptural Wisdom for Contemporary Life</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#231209]">
            Teachings & Reflections
          </h1>
          <p className="text-base sm:text-lg text-[#5C483B] max-w-2xl mx-auto leading-relaxed">
            Essays, commentaries, and philosophical perspectives grounded in Bhagavad Gita As It Is, Vedic psychology, and devotional discipline.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 pb-8 border-b border-[#F2ECE4]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#E87516] text-white shadow-devotional'
                  : 'bg-[#FFF4E2] text-[#473429] hover:bg-[#FFEEDD] border border-[#F6B91A]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Teachings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {filteredTeachings.map((item) => (
            <article
              key={item.id}
              className="bg-[#FFFDF9] rounded-2xl p-8 border border-[#F6B91A]/20 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#786253]">
                  <span className="px-3 py-1 rounded-full bg-[#FFF1D6] text-[#C9540B] font-bold">
                    {item.category}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {item.readingTime}
                  </span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-[#231209] group-hover:text-[#C9540B] transition-colors leading-snug">
                  <Link href={`/teachings/${item.slug}`}>
                    {item.title}
                  </Link>
                </h2>

                <p className="text-xs text-[#8E7A6B] italic">
                  {item.subtitle}
                </p>

                {item.sanskritVerse && (
                  <div className="p-4 rounded-xl bg-[#FFF9EF] border-l-2 border-[#E87516] text-xs font-devanagari text-[#321B0F] leading-relaxed">
                    {item.sanskritVerse}
                  </div>
                )}

                <p className="text-sm text-[#5C483B] leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F2ECE4] flex items-center justify-between">
                <span className="text-xs text-[#9B8475]">{item.publishedDate}</span>
                <Link
                  href={`/teachings/${item.slug}`}
                  className="inline-flex items-center text-xs font-bold text-[#C9540B] group-hover:text-[#E87516]"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
