'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Heart, 
  ShieldCheck, 
  Clock, 
  Compass
} from 'lucide-react';
import { YOUTH_INITIATIVES } from '@/data/content';

export default function YouthPage() {
  return (
    <div className="space-y-24 pb-20">
      {/* 1. Hero Header */}
      <section className="bg-sacred-pattern py-16 border-b border-[#F6B91A]/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF1D6] text-xs font-semibold text-[#C9540B]">
            <Users className="w-3.5 h-3.5 text-[#E87516]" />
            <span>ISKCON Youth Forum (IYF) Delhi</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#231209]">
            Youth Mentorship & The Udgaar Movement
          </h1>
          <p className="text-base sm:text-lg text-[#5C483B] max-w-2xl mx-auto leading-relaxed">
            Channeling the vitality, intelligence, and potential of youth through Vedic value education, digital mindfulness, and de-addiction initiatives.
          </p>
        </div>
      </section>

      {/* 2. Udgaar 2019 Historic Milestone */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#231209] to-[#321B0F] rounded-3xl overflow-hidden text-white shadow-elevated border-2 border-[#E87516]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#E87516]/20 border border-[#E87516]/40 text-xs font-bold text-[#FFD35A]">
                <Award className="w-4 h-4 text-[#F6B91A]" />
                <span>World Book of Records • October 2019</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
                Udgaar: An Expression of Goodness
              </h2>

              <p className="text-sm sm:text-base text-[#D7CFC6] leading-relaxed">
                As lead coordinator and convenor, HG Abhay Gaur Das spearheaded the historic <strong>Udgaar 2019</strong> conclave at the Indira Gandhi Indoor Stadium, New Delhi. Mobilizing over <strong>15,000 university students</strong> from 100+ institutions across North India, the festival became a landmark national statement against substance abuse, pornography, and digital distraction.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-serif text-3xl font-bold text-[#FFD35A]">15,000+</p>
                  <p className="text-xs text-[#BEACA0]">Youth Pledged</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-serif text-3xl font-bold text-[#FFD35A]">100+</p>
                  <p className="text-xs text-[#BEACA0]">Colleges Enrolled</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                  <p className="font-serif text-3xl font-bold text-[#FFD35A]">Union Min.</p>
                  <p className="text-xs text-[#BEACA0]">Dr. Harsh Vardhan Present</p>
                </div>
              </div>

              <div className="pt-2 text-xs text-[#BEACA0] italic border-t border-white/10">
                &ldquo;Udgaar proved that modern youth do not crave superficial entertainment; they crave authentic purpose and pure ideals.&rdquo;
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#E87516]/50 shadow-elevated">
                <Image
                  src="/images/ADA92781-D8DA-4079-954F-468852D4DEF0.JPG"
                  alt="Udgaar festival stage leadership"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Youth Initiatives Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs uppercase tracking-widest text-[#E87516] font-semibold">
            Systematic Training
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231209]">
            The 4 Dimensions of Youth Guidance
          </h2>
          <p className="text-sm text-[#786253]">
            From residential ashrams to high-stakes professional exam stress management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {YOUTH_INITIATIVES.map((init, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] rounded-2xl p-8 border border-[#F6B91A]/20 shadow-subtle hover:shadow-card-hover transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#FFF1D6] text-[#C9540B] text-xs font-bold">
                  {init.metrics}
                </span>
                <span className="text-xs text-[#786253] font-medium">{init.period}</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#231209]">
                {init.title}
              </h3>

              <p className="text-xs text-[#C9540B] font-semibold tracking-wide uppercase">
                {init.tagline}
              </p>

              <p className="text-sm text-[#5C483B] leading-relaxed">
                {init.description}
              </p>

              <div className="pt-4 border-t border-[#F2ECE4] space-y-2">
                <p className="text-xs font-bold text-[#321B0F] uppercase tracking-wider">Key Highlights:</p>
                {init.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-start text-xs text-[#5C483B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E87516] mr-2 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. 'Discover Yourself' (DYS) Course Modules */}
      <section className="bg-[#FFF4E2]/70 py-16 border-y border-[#F6B91A]/20">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#E87516] font-semibold">
              Curriculum Overview
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231209]">
              &lsquo;Discover Yourself&rsquo; 6-Session Foundation Course
            </h2>
            <p className="text-sm text-[#786253] max-w-2xl mx-auto">
              Delivered across college auditoriums and youth hostels to introduce Vedic psychology with scientific rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Can Science Explain Everything?",
                desc: "Exploring the boundary conditions of empiricism and the necessity of Shabda Pramana (Vedic testimony)."
              },
              {
                num: "02",
                title: "The Mechanics of Mind & Senses",
                desc: "Understanding the hierarchy: Senses, Mind, Intelligence, and Soul in Bhagavad Gita 3.42."
              },
              {
                num: "03",
                title: "The Law of Karma & Destiny",
                desc: "Decoding the universal moral feedback loop and overcoming victim mentality."
              },
              {
                num: "04",
                title: "Why Do Bad Things Happen to Good People?",
                desc: "Resolving the classic theological dilemma through the lens of reincarnation and time."
              },
              {
                num: "05",
                title: "Practical Yoga in the Modern Age",
                desc: "Comparing Hatha, Jnana, and Bhakti Yoga; why Mantra Meditation is optimal for Kali Yuga."
              },
              {
                num: "06",
                title: "Substance & Digital De-addiction",
                desc: "Higher taste (param drstva nivartate) as the only sustainable remedy for addictions."
              }
            ].map((mod) => (
              <div key={mod.num} className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#F6B91A]/25 shadow-subtle space-y-2">
                <span className="font-serif text-2xl font-bold text-[#C9540B]">{mod.num}</span>
                <h3 className="font-serif text-lg font-bold text-[#231209]">{mod.title}</h3>
                <p className="text-xs text-[#5C483B] leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-serif text-3xl font-bold text-[#231209]">
          Host a Youth Workshop at Your College or Campus
        </h2>
        <p className="text-sm text-[#5C483B] max-w-xl mx-auto">
          Invite HG Abhay Gaur Das and the IYF Delhi team to conduct interactive stress-management, focus, or anti-addiction workshops.
        </p>
        <div>
          <Link
            href="/connect"
            className="inline-flex items-center px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#E87516] to-[#C9540B] shadow-devotional"
          >
            <span>Request College Seminar</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
