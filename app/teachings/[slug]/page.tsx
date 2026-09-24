'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, Share2, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { TEACHINGS_DATA } from '@/data/content';

export default function TeachingDetailPage({ params }: { params: { slug: string } }) {
  const teaching = TEACHINGS_DATA.find((t) => t.slug === params.slug);

  if (!teaching) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="font-serif text-3xl font-bold text-[#231209]">Article Not Found</h1>
        <p className="text-sm text-[#786253]">The requested reflection could not be located in our library.</p>
        <Link
          href="/teachings"
          className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#E87516]"
        >
          Return to Teachings
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Back button */}
      <div>
        <Link
          href="/teachings"
          className="inline-flex items-center text-xs font-semibold text-[#786253] hover:text-[#C9540B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Back to all teachings
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-4 border-b border-[#F2ECE4] pb-8">
        <div className="flex items-center space-x-3 text-xs">
          <span className="px-3 py-1 rounded-full bg-[#FFF1D6] text-[#C9540B] font-bold">
            {teaching.category}
          </span>
          <span className="text-[#786253] flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1" />
            {teaching.readingTime}
          </span>
          <span className="text-[#786253] flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-1" />
            {teaching.publishedDate}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#231209] leading-tight">
          {teaching.title}
        </h1>

        <p className="text-base sm:text-lg text-[#5C483B] italic">
          {teaching.subtitle}
        </p>
      </header>

      {/* Sanskrit Verse Callout (if available) */}
      {teaching.sanskritVerse && (
        <div className="bg-[#FFF4E2] rounded-2xl p-6 sm:p-8 border border-[#F6B91A]/30 space-y-3 shadow-subtle">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#C9540B] font-bold">
            <Sparkles className="w-4 h-4 text-[#F6B91A]" />
            <span>Sacred Shloka</span>
          </div>
          <p className="font-devanagari text-lg sm:text-xl font-bold text-[#321B0F] leading-relaxed">
            {teaching.sanskritVerse}
          </p>
          {teaching.verseTranslation && (
            <p className="text-sm text-[#5C483B] italic border-t border-[#F6B91A]/20 pt-3">
              &ldquo;{teaching.verseTranslation}&rdquo;
            </p>
          )}
        </div>
      )}

      {/* Article Content Paragraphs */}
      <div className="prose prose-lg max-w-none text-[#473429] space-y-6 text-base sm:text-lg leading-relaxed font-sans">
        {teaching.content.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>

      {/* Author Monastic Bio Box */}
      <footer className="pt-10 border-t border-[#F2ECE4]">
        <div className="bg-[#FFF9EF] rounded-2xl p-6 sm:p-8 border border-[#F6B91A]/30 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E87516] to-[#C9540B] p-[2px] shrink-0">
            <div className="w-full h-full rounded-full bg-[#FFF9EF] flex items-center justify-center">
              <span className="font-serif font-bold text-[#C9540B] text-2xl">अ</span>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-[#231209]">
              HG Abhay Gaur Das
            </h3>
            <p className="text-xs text-[#C9540B] font-medium uppercase tracking-wider">
              Monk, CFO & Head of Bhishma Care • ISKCON Delhi
            </p>
            <p className="text-xs sm:text-sm text-[#5C483B] leading-relaxed">
              Serving the mission of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada under the shelter of His Holiness Gopal Krishna Goswami Maharaj. Educated for 9 years at Bhaktivedanta Gurukula, Vrindavan.
            </p>
          </div>
        </div>
      </footer>
    </article>
  );
}
