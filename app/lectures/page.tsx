'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Video, Play, Search, Clock, Calendar, MapPin, CheckCircle2, X } from 'lucide-react';
import { LECTURES_DATA, LectureItem } from '@/data/content';

export default function LecturesPage() {
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalLecture, setActiveModalLecture] = useState<LectureItem | null>(null);

  const topics = ['All', 'Mind Control', 'Youth & Focus', 'Bhagavad Gita', 'Devotional Service'];

  const filteredLectures = LECTURES_DATA.filter((lec) => {
    const matchesTopic = selectedTopic === 'All' || lec.topic === selectedTopic;
    const matchesQuery = !searchQuery || 
      lec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lec.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lec.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesQuery;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-sacred-pattern py-16 border-b border-[#F6B91A]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF1D6] text-xs font-semibold text-[#C9540B]">
            <Video className="w-3.5 h-3.5 text-[#E87516]" />
            <span>Spiritual Discourses & Seminars</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#231209]">
            Discourses & Video Library
          </h1>
          <p className="text-base sm:text-lg text-[#5C483B] max-w-2xl mx-auto leading-relaxed">
            Expositions on Bhagavad Gita, mind mastery, modern youth challenges, and devotional service recorded across temples and universities.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Topic Pills */}
          <div className="flex flex-wrap gap-2">
            {topics.map((top) => (
              <button
                key={top}
                onClick={() => setSelectedTopic(top)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedTopic === top
                    ? 'bg-[#E87516] text-white shadow-devotional'
                    : 'bg-[#FFF4E2] text-[#473429] hover:bg-[#FFEEDD] border border-[#F6B91A]/20'
                }`}
              >
                {top}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#9B8475] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search lectures..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full text-xs bg-[#FFFDF9] border border-[#F6B91A]/30 text-[#321B0F] placeholder-[#9B8475] focus:outline-none focus:border-[#E87516]"
            />
          </div>
        </div>

        {/* Lectures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLectures.map((lec) => (
            <div
              key={lec.id}
              className="bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#F6B91A]/20 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Video Preview Card */}
                <div 
                  className="relative aspect-video bg-black cursor-pointer overflow-hidden"
                  onClick={() => setActiveModalLecture(lec)}
                >
                  <Image
                    src="/images/1000170724.jpeg"
                    alt={lec.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#E87516] text-white flex items-center justify-center shadow-devotional group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-0.5 fill-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 text-[10px] font-semibold text-white">
                    {lec.duration}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#786253]">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FFF1D6] text-[#C9540B] font-bold">
                      {lec.topic}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {lec.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#231209] group-hover:text-[#C9540B] transition-colors leading-snug">
                    {lec.title}
                  </h3>

                  <p className="text-xs text-[#786253] line-clamp-2">
                    {lec.description}
                  </p>

                  <div className="pt-2 flex items-center text-xs text-[#9B8475]">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-[#C9540B]" />
                    <span className="truncate">{lec.location}</span>
                  </div>
                </div>
              </div>

              {/* Key takeaways bullet points */}
              <div className="p-6 pt-0 mt-auto border-t border-[#F2ECE4]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#8E7A6B] mt-4 mb-2">Key Themes:</p>
                <ul className="space-y-1.5 text-xs text-[#5C483B]">
                  {lec.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E87516] mr-1.5 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeModalLecture && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-[#231209] rounded-2xl overflow-hidden shadow-elevated border border-[#F6B91A]/30">
            <button
              onClick={() => setActiveModalLecture(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video bg-black">
              {/* Replace with YouTube iframe or video player */}
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeModalLecture.youtubeId}?autoplay=1`}
                title={activeModalLecture.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-6 text-white space-y-2">
              <span className="text-xs px-2.5 py-0.5 rounded bg-[#E87516] font-bold">
                {activeModalLecture.topic}
              </span>
              <h2 className="font-serif text-2xl font-bold">{activeModalLecture.title}</h2>
              <p className="text-sm text-[#D7CFC6]">{activeModalLecture.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
