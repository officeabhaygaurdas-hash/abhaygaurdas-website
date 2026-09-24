'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Clock, Users, ArrowRight, CheckCircle2, Sparkles, Mail } from 'lucide-react';
import { UPCOMING_EVENTS } from '@/data/content';

export default function EventsPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Discourse', 'Retreat', 'Patron Gathering', 'Heritage & Project'];

  const filteredEvents = selectedFilter === 'All'
    ? UPCOMING_EVENTS
    : UPCOMING_EVENTS.filter(e => e.category === selectedFilter);

  const cardThemes = [
    {
      outerBg: 'bg-gradient-to-br from-[#FFF9F2] via-[#FFFDF9] to-[#FFF3E0]',
      border: 'border-2 border-[#F97316]/50 hover:border-[#EA580C]',
      innerBorder: 'border border-[#F97316]/30',
      cornerColor: 'text-[#EA580C]',
      badgeBg: 'bg-[#FFEDD5] text-[#C2410C] border border-[#FDBA74]',
      dateChip: 'bg-white/95 border border-[#FED7AA] text-[#9A3412]',
      iconColor: 'text-[#EA580C]',
      headingHover: 'group-hover:text-[#C2410C]',
      btn: 'bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#C2410C] hover:to-[#9A3412] text-white',
      dot: 'bg-[#EA580C]'
    },
    {
      outerBg: 'bg-gradient-to-br from-[#FFF5F5] via-[#FFFDF9] to-[#FEE2E2]',
      border: 'border-2 border-[#EF4444]/50 hover:border-[#DC2626]',
      innerBorder: 'border border-[#EF4444]/30',
      cornerColor: 'text-[#DC2626]',
      badgeBg: 'bg-[#FEE2E2] text-[#B91C1C] border border-[#FCA5A5]',
      dateChip: 'bg-white/95 border border-[#FECACA] text-[#991B1B]',
      iconColor: 'text-[#DC2626]',
      headingHover: 'group-hover:text-[#B91C1C]',
      btn: 'bg-gradient-to-r from-[#DC2626] to-[#991B1B] hover:from-[#991B1B] hover:to-[#7F1D1D] text-white',
      dot: 'bg-[#DC2626]'
    },
    {
      outerBg: 'bg-gradient-to-br from-[#FFFDF0] via-[#FFFDF9] to-[#FEF3C7]',
      border: 'border-2 border-[#F59E0B]/50 hover:border-[#D97706]',
      innerBorder: 'border border-[#F59E0B]/30',
      cornerColor: 'text-[#D97706]',
      badgeBg: 'bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]',
      dateChip: 'bg-white/95 border border-[#FDE68A] text-[#92400E]',
      iconColor: 'text-[#D97706]',
      headingHover: 'group-hover:text-[#B45309]',
      btn: 'bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#78350F] text-white',
      dot: 'bg-[#D97706]'
    },
    {
      outerBg: 'bg-gradient-to-br from-[#FFF1F2] via-[#FFFDF9] to-[#FFE4E6]',
      border: 'border-2 border-[#F43F5E]/50 hover:border-[#E11D48]',
      innerBorder: 'border border-[#F43F5E]/30',
      cornerColor: 'text-[#E11D48]',
      badgeBg: 'bg-[#FFE4E6] text-[#BE123C] border border-[#FECDD3]',
      dateChip: 'bg-white/95 border border-[#FECDD3] text-[#9F1239]',
      iconColor: 'text-[#E11D48]',
      headingHover: 'group-hover:text-[#BE123C]',
      btn: 'bg-gradient-to-r from-[#E11D48] to-[#9F1239] hover:from-[#9F1239] hover:to-[#881337] text-white',
      dot: 'bg-[#E11D48]'
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-sacred-pattern py-16 border-b border-[#F6B91A]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFF1D6] border border-[#F6B91A]/35 text-xs font-bold text-[#C9540B]">
            <Calendar className="w-3.5 h-3.5 text-[#E87516]" />
            <span className="uppercase tracking-widest text-[11px]">Congregational Calendar & Satsang</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#231209]">
            Upcoming Discourses & Events
          </h1>
          <p className="text-base sm:text-lg text-[#5C483B] max-w-2xl mx-auto leading-relaxed">
            Participate in weekly Bhagavad Gita discourses at ISKCON Delhi, youth meditation retreats, and patron gatherings.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-wrap justify-center gap-2 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedFilter === cat
                  ? 'bg-gradient-to-r from-[#E87516] to-[#C9540B] text-white shadow-devotional scale-105'
                  : 'bg-[#FFF4E2] text-[#473429] hover:bg-[#FFEEDD] border border-[#F6B91A]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Grid with Colorful Devotional Frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((ev, idx) => {
            const theme = cardThemes[idx % cardThemes.length];

            return (
              <div
                key={ev.id}
                className={`relative rounded-3xl p-7 ${theme.outerBg} ${theme.border} shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group overflow-hidden`}
              >
                {/* Corner Accents */}
                <span className={`absolute top-2.5 left-3 text-sm font-serif ${theme.cornerColor} select-none opacity-70`}>⌜</span>
                <span className={`absolute top-2.5 right-3 text-sm font-serif ${theme.cornerColor} select-none opacity-70`}>⌝</span>
                <span className={`absolute bottom-2.5 left-3 text-sm font-serif ${theme.cornerColor} select-none opacity-70`}>⌞</span>
                <span className={`absolute bottom-2.5 right-3 text-sm font-serif ${theme.cornerColor} select-none opacity-70`}>⌟</span>

                <div className={`rounded-2xl p-6 ${theme.innerBorder} bg-white/75 backdrop-blur-sm space-y-4 shadow-sm`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${theme.badgeBg} shadow-sm`}>
                      {ev.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${theme.dateChip} shadow-sm flex items-center`}>
                      <Calendar className={`w-3.5 h-3.5 mr-1.5 ${theme.iconColor}`} />
                      {ev.date}
                    </span>
                  </div>

                  <h2 className={`font-serif text-2xl font-bold text-[#231209] leading-snug transition-colors ${theme.headingHover}`}>
                    {ev.title}
                  </h2>

                  <p className="text-sm text-[#5C483B] leading-relaxed">
                    {ev.description}
                  </p>

                  <div className="pt-2 space-y-2 text-xs text-[#786253]">
                    <div className="flex items-start">
                      <MapPin className={`w-4 h-4 ${theme.iconColor} mr-2 shrink-0 mt-0.5`} />
                      <span className="font-medium text-[#321B0F]">{ev.venue}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className={`w-4 h-4 ${theme.iconColor} mr-2 shrink-0`} />
                      <span>Speaker / Facilitator: <strong className="text-[#231209]">{ev.speaker}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center justify-between px-2">
                  <span className="text-xs text-[#786253] font-medium flex items-center">
                    <CheckCircle2 className={`w-3.5 h-3.5 mr-1 ${theme.iconColor}`} />
                    {ev.registrationRequired ? 'Registration Required' : 'Open for All Devotees'}
                  </span>
                  <Link
                    href="/connect"
                    className={`px-5 py-2.5 rounded-full text-xs font-bold ${theme.btn} shadow-sm flex items-center transition-all hover:scale-105`}
                  >
                    Inquire / RSVP <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Secretariat Email Card Banner */}
        <div className="bg-gradient-to-r from-[#FFF9F2] via-[#FFFDF9] to-[#FFF4E8] rounded-3xl p-8 border-2 border-[#E87516]/40 shadow-devotional relative overflow-hidden text-center sm:text-left">
          <span className="absolute top-2.5 left-2.5 text-xs text-[#E87516]/60 font-serif">✥</span>
          <span className="absolute top-2.5 right-2.5 text-xs text-[#E87516]/60 font-serif">✥</span>
          <span className="absolute bottom-2.5 left-2.5 text-xs text-[#E87516]/60 font-serif">✥</span>
          <span className="absolute bottom-2.5 right-2.5 text-xs text-[#E87516]/60 font-serif">✥</span>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E87516] to-[#C9540B] text-white flex items-center justify-center shrink-0 shadow-devotional">
                <Mail className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-[#FFEDD5] text-[#C2410C] text-[11px] font-bold uppercase tracking-wider">
                  <span>Discourse Invitations & Group Bookings</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#231209]">
                  Discourse Coordination Secretariat
                </h3>
                <p className="text-xs sm:text-sm text-[#786253]">
                  Directly email the secretariat for guest reservations, corporate invites, or retreat passes:
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="mailto:office.abhaygaurdas@gmail.com"
                className="inline-flex items-center px-6 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#E87516] to-[#C9540B] hover:opacity-95 shadow-devotional transition-all hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4 mr-2" />
                office.abhaygaurdas@gmail.com
              </a>
              <Link
                href="/connect"
                className="inline-flex items-center px-6 py-3.5 rounded-full text-sm font-bold text-[#321B0F] bg-white border-2 border-[#E87516]/30 hover:bg-[#FFF4E2] transition-colors shadow-sm"
              >
                Submit Form <ArrowRight className="w-4 h-4 ml-1.5 text-[#E87516]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
