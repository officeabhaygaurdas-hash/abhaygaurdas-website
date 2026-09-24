'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Video, 
  Users, 
  ShieldCheck, 
  HeartHandshake, 
  Landmark, 
  Calendar, 
  MapPin, 
  Play, 
  CheckCircle2, 
  Quote, 
  Clock, 
  Award,
  ChevronRight,
  Mail,
  Heart,
  MessageCircle,
  Copy,
  Check,
  Download,
  Share2,
  TrendingUp,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';
import { 
  BIOGRAPHY_DATA, 
  SERVICE_AREAS, 
  TEACHINGS_DATA, 
  LECTURES_DATA, 
  GALLERY_DATA, 
  UPCOMING_EVENTS, 
  YOUTH_INITIATIVES,
  SOCIAL_LINKS 
} from '@/data/content';

export default function HomePage() {
  const [selectedLecture, setSelectedLecture] = useState(LECTURES_DATA[0]);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [copiedQuoteId, setCopiedQuoteId] = useState<string | null>(null);

  const handleCopyQuote = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedQuoteId(id);
    setTimeout(() => setCopiedQuoteId(null), 2500);
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 overflow-hidden bg-sacred-pattern">
        {/* Divine Ambient Atmospheric Auras */}
        <div className="absolute top-12 left-1/4 -translate-x-1/2 w-[650px] h-[550px] bg-gradient-to-br from-[#FED7B0]/30 via-[#FFF1D6]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#F6B91A]/25 via-[#E87516]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[250px] bg-gradient-to-t from-[#FFFDF9] to-transparent pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFF1D6] border border-[#F6B91A]/30 text-xs font-semibold text-[#C9540B] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#E87516] animate-pulse" />
                <span>Monk & Spiritual Administrator • ISKCON Delhi</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#231209] leading-[1.1]">
                Spirituality with <span className="text-gold-gradient">Responsibility</span>, <br className="hidden sm:inline" />
                Devotion with <span className="italic font-normal">Discipline.</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-[#5C483B] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Dedicated disciple of <strong>HH Gopal Krishna Goswami Maharaj</strong>, rooted in 9 years of Vrindavan Gurukula training. Guiding modern youth, managing sacred institutional finances, and nurturing spiritual communities at ISKCON Sri Sri Radha Parthasarathi Mandir, New Delhi.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/about"
                  className="px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#E87516] to-[#C9540B] shadow-devotional hover:shadow-card-hover hover:scale-[1.02] transition-all duration-200 flex items-center space-x-2"
                >
                  <span>Explore Spiritual Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/lectures"
                  className="px-6 py-3.5 rounded-full text-sm font-semibold text-[#321B0F] bg-[#FFF4E2] hover:bg-[#FFEEDD] border border-[#F6B91A]/30 transition-all duration-200 flex items-center space-x-2"
                >
                  <Video className="w-4 h-4 text-[#E87516]" />
                  <span>Watch Discourses</span>
                </Link>
              </div>


            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Decorative border frame */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#F6B91A]/40 via-[#E87516]/20 to-transparent -rotate-1 blur-xs" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-elevated border-2 border-white/80 aspect-[4/5] bg-[#FFF4E2]">
                  <Image
                    src="/images/abhay_gaur_prabhuji_hero.jpg"
                    alt="HG Abhay Gaur Das at ISKCON Delhi"
                    fill
                    className="object-cover object-[53%_18%] transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#231209]/85 via-transparent to-transparent" />
                  
                  {/* Overlay Monastic Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FFF9EF]/95 backdrop-blur-md border border-[#F6B91A]/30 text-left">
                    <p className="font-serif text-base font-bold text-[#231209]">HG Abhay Gaur Das</p>
                    <p className="text-xs text-[#C9540B] font-medium">CFO & Head of Bhishma Care, ISKCON Delhi</p>
                    <p className="text-[11px] text-[#786253] mt-1 italic">
                      &ldquo;Every resource in the temple is sacred Lakshmi; service must be rendered with meticulous purity.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DYNAMIC IMPACT METRICS STRIP (Gaur Gopal Das Inspired Live Metrics Counter) */}
      <section className="relative -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-[#F6B91A]/35 shadow-[0_16px_40px_rgba(50,27,15,0.08)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#F2ECE4]">
            
            <div className="pt-4 sm:pt-0 sm:px-4 text-center group">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-[#FFF1D6] text-[#E87516] mb-3 group-hover:scale-110 transition-transform shadow-xs">
                <Users className="w-5 h-5" />
              </div>
              <p className="font-serif text-3xl sm:text-4xl font-extrabold text-[#231209] group-hover:text-[#E87516] transition-colors">
                15,000+
              </p>
              <p className="text-xs font-bold text-[#C9540B] uppercase tracking-wider mt-1">
                Youth Mentored
              </p>
              <p className="text-[11px] text-[#786253] mt-0.5">
                Udgaar & College BASE Hostels
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4 text-center group">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-[#FEF3C7] text-[#D97706] mb-3 group-hover:scale-110 transition-transform shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <p className="font-serif text-3xl sm:text-4xl font-extrabold text-[#231209] group-hover:text-[#D97706] transition-colors">
                9+ Years
              </p>
              <p className="text-xs font-bold text-[#D97706] uppercase tracking-wider mt-1">
                Gurukula Sadhana
              </p>
              <p className="text-[11px] text-[#786253] mt-0.5">
                Bhaktivedanta Gurukula Vrindavan
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4 text-center group">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-[#FFEDD5] text-[#C2410C] mb-3 group-hover:scale-110 transition-transform shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="font-serif text-3xl sm:text-4xl font-extrabold text-[#231209] group-hover:text-[#C2410C] transition-colors">
                100%
              </p>
              <p className="text-xs font-bold text-[#C2410C] uppercase tracking-wider mt-1">
                Audited Financials
              </p>
              <p className="text-[11px] text-[#786253] mt-0.5">
                CFO Stewardship & Integrity
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4 text-center group">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-[#FEE2E2] text-[#DC2626] mb-3 group-hover:scale-110 transition-transform shadow-xs">
                <Video className="w-5 h-5" />
              </div>
              <p className="font-serif text-3xl sm:text-4xl font-extrabold text-[#231209] group-hover:text-[#DC2626] transition-colors">
                500+
              </p>
              <p className="text-xs font-bold text-[#DC2626] uppercase tracking-wider mt-1">
                Sacred Discourses
              </p>
              <p className="text-[11px] text-[#786253] mt-0.5">
                Gita & Bhagavatam Archives
              </p>
            </div>

          </div>

          {/* Social Channels Strip (@abhaygaurdas) */}
          <div className="mt-6 pt-5 border-t border-[#F2ECE4] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2 text-[#786253]">
              <span className="w-2 h-2 rounded-full bg-[#E87516] animate-pulse" />
              <span className="font-semibold text-[#231209]">Official Channels:</span>
              <span className="font-mono text-[#C9540B] font-bold">@abhayagaurdas</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#FFF4E2] hover:bg-[#E1306C] text-[#473429] hover:text-white border border-[#F6B91A]/30 transition-all font-semibold hover:scale-105 group"
              >
                <Instagram className="w-3.5 h-3.5 text-[#E1306C] group-hover:text-white transition-colors" />
                <span>Instagram</span>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#FFF4E2] hover:bg-[#1877F2] text-[#473429] hover:text-white border border-[#F6B91A]/30 transition-all font-semibold hover:scale-105 group"
              >
                <Facebook className="w-3.5 h-3.5 text-[#1877F2] group-hover:text-white transition-colors" />
                <span>Facebook</span>
              </a>
              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#FFF4E2] hover:bg-black text-[#473429] hover:text-white border border-[#F6B91A]/30 transition-all font-semibold hover:scale-105 group"
              >
                <svg className="w-3 h-3 fill-current text-black group-hover:text-white transition-colors" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>X (Twitter)</span>
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#FFF4E2] hover:bg-[#FF0000] text-[#473429] hover:text-white border border-[#F6B91A]/30 transition-all font-semibold hover:scale-105 group"
              >
                <Youtube className="w-3.5 h-3.5 text-[#FF0000] group-hover:text-white transition-colors" />
                <span>YouTube Talk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SACRED SHLOKA BANNER (Illuminated Temple Manuscript with Background Architecture & Ambient Animations) */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        {/* Divine Background Ambient Halo & Slow Animated Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#FED7AA]/30 via-[#FEE2E2]/20 to-[#FEF3C7]/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        
        {/* Sacred Dharmachakra / Mandala Vector (Slow Ambient Rotation) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] pointer-events-none opacity-[0.06] animate-spin-slow">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#E87516]">
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="1" />
            <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="16" stroke="currentColor" strokeWidth="2" />
            {Array.from({ length: 16 }).map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={100 + 82 * Math.cos((i * 22.5 * Math.PI) / 180)}
                y2={100 + 82 * Math.sin((i * 22.5 * Math.PI) / 180)}
                stroke="currentColor"
                strokeWidth="0.75"
              />
            ))}
          </svg>
        </div>

        {/* Floating Sacred Sparks */}
        <div className="absolute top-8 left-1/5 w-3 h-3 rounded-full bg-[#E87516]/30 blur-xs animate-float-slow pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-4 h-4 rounded-full bg-[#F6B91A]/35 blur-xs animate-float-slow pointer-events-none [animation-delay:3s]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="group relative rounded-3xl p-8 sm:p-14 md:p-16 border-2 border-[#E87516]/45 shadow-[0_20px_50px_rgba(201,84,11,0.12)] text-center overflow-hidden transition-all duration-500 hover:shadow-[0_25px_65px_rgba(201,84,11,0.18)] hover:border-[#E87516]/70">
            
            {/* Sacred Temple Backdrop Image with Luminous Blend */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                src="/images/3C7D35EC-37E3-4E2E-A02D-C460A56A68C9.PNG"
                alt="Sacred Mandir Architecture"
                fill
                className="object-cover object-center opacity-[0.11] filter saturate-150 contrast-125 scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/95 via-[#FFFBF5]/90 to-[#FFF4E5]/95" />
            </div>

            {/* Multi-Layered Illuminated Ornamental Frames */}
            <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-[#F6B91A]/40 pointer-events-none" />
            <div className="absolute inset-5 sm:inset-6 rounded-xl border border-dashed border-[#E87516]/30 pointer-events-none" />

            {/* Ornate Vedic Corner Mandalas (4 Corners) */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 text-[#E87516] flex items-center space-x-1 select-none pointer-events-none opacity-85">
              <span className="text-base sm:text-xl font-serif leading-none">╔</span>
              <span className="text-xs sm:text-sm">✥</span>
            </div>
            <div className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[#E87516] flex items-center space-x-1 select-none pointer-events-none opacity-85">
              <span className="text-xs sm:text-sm">✥</span>
              <span className="text-base sm:text-xl font-serif leading-none">╗</span>
            </div>
            <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 text-[#E87516] flex items-center space-x-1 select-none pointer-events-none opacity-85">
              <span className="text-base sm:text-xl font-serif leading-none">╚</span>
              <span className="text-xs sm:text-sm">✥</span>
            </div>
            <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 text-[#E87516] flex items-center space-x-1 select-none pointer-events-none opacity-85">
              <span className="text-xs sm:text-sm">✥</span>
              <span className="text-base sm:text-xl font-serif leading-none">╝</span>
            </div>

            <div className="relative z-10 space-y-6">
              {/* Sanskrit Verse */}
              <div className="py-2">
                <p className="font-devanagari text-2xl sm:text-3xl md:text-4xl text-[#231209] font-bold leading-relaxed tracking-wide drop-shadow-xs">
                  यत्करोषि यदश्नासि यज्जुहोषि ददासि यत् ।<br />
                  यत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम् ॥
                </p>
              </div>

              {/* Ornamental Lotus Divider */}
              <div className="flex items-center justify-center space-x-3 text-[#E87516]/70 py-1">
                <span className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#E87516]" />
                <span className="text-sm">❖</span>
                <span className="text-xs">✦</span>
                <span className="text-sm">❖</span>
                <span className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#E87516]" />
              </div>

              {/* Translation */}
              <p className="font-serif text-base sm:text-xl md:text-2xl text-[#4A3223] italic max-w-2xl mx-auto leading-relaxed">
                &ldquo;Whatever you do, whatever you eat, whatever you offer or give away, and whatever austerities you perform—do that, O son of Kunti, as an offering unto Me.&rdquo;
              </p>

              {/* Attribution */}
              <div className="pt-2">
                <span className="inline-block px-4 py-1 rounded-full bg-white/70 border border-[#F6B91A]/35 text-xs sm:text-sm uppercase tracking-widest text-[#9A3412] font-bold shadow-2xs">
                  — Srimad Bhagavad Gita 9.27
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE PILLARS OF SERVICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#E87516] font-bold">
            <span className="w-8 h-[1px] bg-[#E87516]" />
            <span>Core Anchors</span>
            <span className="w-8 h-[1px] bg-[#E87516]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#231209] leading-tight">
            The Four Pillars of Devotional Leadership
          </h2>
          <p className="text-sm sm:text-base text-[#786253] max-w-xl mx-auto">
            Balancing internal spiritual sadhana with external institutional excellence in the service of Lord Krishna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BIOGRAPHY_DATA.corePillars.map((pillar, idx) => {
            const icons = [BookOpen, Users, ShieldCheck, HeartHandshake];
            const Icon = icons[idx] || Sparkles;

            const THEMES = [
              {
                // Pillar 1: Vibrant Saffron Orange
                cardBg: "bg-gradient-to-b from-[#FFF8F0] via-white to-[#FFF4E5]/50",
                borderStyle: "border-[#FDBA74]/70 hover:border-[#EA580C]",
                topGradient: "bg-gradient-to-r from-[#FB923C] via-[#EA580C] to-[#C2410C]",
                iconStyle: "bg-gradient-to-br from-[#FB923C] to-[#EA580C] text-white shadow-lg shadow-orange-500/25",
                badgeStyle: "bg-[#FFEDD5] text-[#9A3412] border border-[#FDBA74]/60",
                numberStyle: "text-[#F97316]",
                titleHover: "group-hover:text-[#EA580C]",
                checkStyle: "text-[#EA580C]",
                glowDot: "bg-[#EA580C]",
              },
              {
                // Pillar 2: Dynamic Vermilion Crimson Red
                cardBg: "bg-gradient-to-b from-[#FEF2F2] via-white to-[#FEE2E2]/50",
                borderStyle: "border-[#FCA5A5]/70 hover:border-[#DC2626]",
                topGradient: "bg-gradient-to-r from-[#F87171] via-[#DC2626] to-[#B91C1C]",
                iconStyle: "bg-gradient-to-br from-[#F87171] to-[#DC2626] text-white shadow-lg shadow-red-500/25",
                badgeStyle: "bg-[#FEE2E2] text-[#991B1B] border border-[#FCA5A5]/60",
                numberStyle: "text-[#EF4444]",
                titleHover: "group-hover:text-[#DC2626]",
                checkStyle: "text-[#DC2626]",
                glowDot: "bg-[#DC2626]",
              },
              {
                // Pillar 3: Sacred Marigold Amber Gold
                cardBg: "bg-gradient-to-b from-[#FFFBEB] via-white to-[#FEF3C7]/50",
                borderStyle: "border-[#FCD34D]/70 hover:border-[#D97706]",
                topGradient: "bg-gradient-to-r from-[#FBBF24] via-[#D97706] to-[#B45309]",
                iconStyle: "bg-gradient-to-br from-[#FBBF24] to-[#D97706] text-white shadow-lg shadow-amber-500/25",
                badgeStyle: "bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]/60",
                numberStyle: "text-[#F59E0B]",
                titleHover: "group-hover:text-[#D97706]",
                checkStyle: "text-[#D97706]",
                glowDot: "bg-[#D97706]",
              },
              {
                // Pillar 4: Devotional Lotus Crimson Rose
                cardBg: "bg-gradient-to-b from-[#FFF1F2] via-white to-[#FFE4E6]/50",
                borderStyle: "border-[#FDA4AF]/70 hover:border-[#E11D48]",
                topGradient: "bg-gradient-to-r from-[#FB7185] via-[#E11D48] to-[#BE123C]",
                iconStyle: "bg-gradient-to-br from-[#FB7185] to-[#E11D48] text-white shadow-lg shadow-rose-500/25",
                badgeStyle: "bg-[#FFE4E6] text-[#9F1239] border border-[#FDA4AF]/60",
                numberStyle: "text-[#F43F5E]",
                titleHover: "group-hover:text-[#E11D48]",
                checkStyle: "text-[#E11D48]",
                glowDot: "bg-[#E11D48]",
              },
            ];

            const theme = THEMES[idx % THEMES.length];

            return (
              <div
                key={pillar.title}
                className={`relative ${theme.cardBg} rounded-2xl p-7 border-2 ${theme.borderStyle} shadow-elevated hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group overflow-hidden`}
              >
                {/* Colorful Top Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${theme.topGradient}`} />

                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-13 h-13 p-3 rounded-2xl ${theme.iconStyle} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className={`font-serif text-lg font-bold ${theme.numberStyle}`}>
                      {pillar.number || `0${idx + 1}`}
                    </span>
                  </div>

                  {/* Colored Badge */}
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${theme.badgeStyle} px-3 py-1 rounded-full inline-block mb-3 shadow-xs`}>
                    {pillar.tag}
                  </span>

                  <h3 className={`font-serif text-2xl font-bold text-[#231209] mb-3 ${theme.titleHover} transition-colors leading-snug`}>
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#5C483B] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2ECE4] flex items-center justify-between text-xs text-[#786253]">
                  <span className="font-semibold text-[#473429]">{pillar.highlight}</span>
                  <CheckCircle2 className={`w-4 h-4 ${theme.checkStyle} shrink-0 ml-1.5`} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. EXECUTIVE MONASTIC BIOGRAPHY PREVIEW */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F2] to-[#FFF4E5] border-y border-[#F6B91A]/30">
        {/* Soft Ambient Radiance in Background */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-br from-[#FED7B0]/25 via-[#F6B91A]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Visual: Illuminated Portrait with Guru Maharaj */}
            <div className="lg:col-span-5 relative">
              {/* Outer Golden/Saffron Halo Frame */}
              <div className="relative rounded-3xl p-2.5 bg-gradient-to-tr from-[#E87516]/40 via-[#F6B91A]/30 to-[#DC2626]/20 shadow-devotional group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated bg-[#231209]">
                  <Image
                    src="/images/bb9bc1cb-f9da-4784-954d-9df4a8a1bf82.jpg"
                    alt="Serving Sri Sri Gaura-Nitai alongside Guru Maharaj HH Gopal Krishna Goswami Maharaj"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#231209]/90 via-[#231209]/20 to-transparent" />
                  
                  {/* Floating Top Badge */}
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#231209]/85 backdrop-blur-md border border-[#F6B91A]/40 text-xs font-bold text-[#FFD35A] flex items-center space-x-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-[#F6B91A]" />
                    <span>Parampara & Guru-Seva</span>
                  </div>

                  {/* Frosted Glass Caption Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl bg-[#231209]/90 backdrop-blur-md border border-[#F6B91A]/30 text-white shadow-xl space-y-1">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-[#FFD35A]">
                      Spiritual Shelter & Diksha Guru
                    </p>
                    <h4 className="font-serif text-lg font-bold text-white">
                      Serving with HH Gopal Krishna Goswami Maharaj
                    </h4>
                    <p className="text-xs text-[#D7CFC6] leading-relaxed">
                      Dressing Sri Sri Gaura-Nitai deities together at ISKCON Delhi, learning the sacred standard of unalloyed devotional service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Editorial Column: Structured Narrative with Milestone Cards */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFF1D6] border border-[#E87516]/30 text-xs font-bold text-[#C9540B] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#E87516]" />
                <span>The Story of Dedication</span>
              </div>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#231209] leading-[1.15]">
                From Vrindavan Gurukula to <br className="hidden sm:inline" />
                <span className="text-gold-gradient">Institutional Stewardship</span>
              </h2>

              {/* Inspirational Pull-Quote */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#FFF1D6]/80 via-[#FFF9EF] to-[#FFEEDD]/40 border-l-4 border-[#E87516] text-xs sm:text-sm italic text-[#5C483B] leading-relaxed shadow-xs">
                &ldquo;True renunciation (<span className="text-[#C9540B] font-semibold not-italic">Yukta Vairagya</span>) is not abandoning worldly duty, but sanctifying every administrative skill, rupee, and minute in the loving service of Sri Sri Radha Parthasarathi.&rdquo;
              </div>

              {/* 3 Chronological Milestones Cards */}
              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-xl bg-white/80 border border-[#FDBA74]/50 shadow-xs flex items-start space-x-3.5 hover:bg-white transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-[#FFEDD5] text-[#C2410C] flex items-center justify-center font-serif font-bold text-sm shrink-0 border border-[#FDBA74]/60">
                    I
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-serif font-bold text-base text-[#231209]">9 Years in Vrindavan Gurukula</h4>
                      <span className="text-[10px] font-bold text-[#C9540B] bg-[#FFF1D6] px-2 py-0.5 rounded-full">2003 – 2012</span>
                    </div>
                    <p className="text-xs text-[#5C483B] mt-1 leading-relaxed">
                      Entered Bhaktivedanta Gurukula in Class III. Sculpted by 4:00 AM Mangala Arati, Sanskrit verses memorization, and ICSE academic training.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/80 border border-[#FCA5A5]/50 shadow-xs flex items-start space-x-3.5 hover:bg-white transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-[#FEE2E2] text-[#991B1B] flex items-center justify-center font-serif font-bold text-sm shrink-0 border border-[#FCA5A5]/60">
                    II
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-serif font-bold text-base text-[#231209]">Delhi University, CS & BASE Ashram</h4>
                      <span className="text-[10px] font-bold text-[#991B1B] bg-[#FEE2E2] px-2 py-0.5 rounded-full">2012 – 2015</span>
                    </div>
                    <p className="text-xs text-[#5C483B] mt-1 leading-relaxed">
                      Earned B.Com and pursued professional Company Secretary credentials while living in Laxmi Nagar BASE, mentoring college peers.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/80 border border-[#FCD34D]/50 shadow-xs flex items-start space-x-3.5 hover:bg-white transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-[#FEF3C7] text-[#92400E] flex items-center justify-center font-serif font-bold text-sm shrink-0 border border-[#FCD34D]/60">
                    III
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-serif font-bold text-base text-[#231209]">Monastic Surrender & CFO Leadership</h4>
                      <span className="text-[10px] font-bold text-[#92400E] bg-[#FEF3C7] px-2 py-0.5 rounded-full">2015 – Present</span>
                    </div>
                    <p className="text-xs text-[#5C483B] mt-1 leading-relaxed">
                      Entrusted by HH Gopal Krishna Goswami Maharaj as Chief Financial Officer (CFO), Head of Bhishma Care, and Kurukshetra Temple project lead.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#E87516] to-[#C9540B] shadow-devotional hover:shadow-card-hover hover:scale-[1.02] transition-all flex items-center space-x-2"
                >
                  <span>Read Full 14-Chapter Biography & Timeline</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/gallery"
                  className="px-5 py-3 rounded-full text-xs font-bold text-[#321B0F] bg-white border border-[#F6B91A]/30 hover:bg-[#FFF4E2] transition-colors"
                >
                  View Archival Photographs
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. SIX COMPREHENSIVE SERVICE AREAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs uppercase tracking-widest text-[#E87516] font-semibold">
            Institutional Portfolio
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#231209]">
            Active Fields of Devotional Service
          </h2>
          <p className="text-sm sm:text-base text-[#786253]">
            Leading key initiatives in youth leadership, temple governance, patron care, and heritage construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.id}
              href={area.link}
              className="bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#F6B91A]/20 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FFF4E2]">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#231209]/80 backdrop-blur-sm text-[11px] font-semibold text-[#FFD35A]">
                  {area.stats}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs font-semibold text-[#E87516] tracking-wider uppercase mb-1">
                    {area.tagline}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-[#231209] group-hover:text-[#C9540B] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#786253] mt-2 line-clamp-3 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center text-xs font-bold text-[#C9540B] group-hover:text-[#E87516]">
                  <span>Explore Initiative</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. YOUTH LEADERSHIP HIGHLIGHT (UDGAAR 2019) */}
      <section className="bg-gradient-to-br from-[#231209] to-[#321B0F] text-white py-20 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E87516]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E87516]/20 border border-[#E87516]/40 text-xs font-semibold text-[#FFD35A]">
                <Award className="w-3.5 h-3.5 text-[#F6B91A]" />
                <span>World Book of Records Milestone</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Udgaar: India&apos;s Largest Youth Anti-Addiction Festival
              </h2>

              <p className="text-sm sm:text-base text-[#D7CFC6] leading-relaxed">
                In October 2019, under the banner of ISKCON Youth Forum, HG Abhay Gaur Das served as core convenor for &ldquo;Udgaar: An Expression of Goodness&rdquo; at the Indira Gandhi Indoor Stadium, New Delhi. Over <strong>15,000 college students</strong> gathered to pledge against substance abuse, pornography, and digital addiction.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-serif text-2xl font-bold text-[#FFD35A]">15,000+</p>
                  <p className="text-xs text-[#BEACA0]">Youth in Attendance</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-serif text-2xl font-bold text-[#FFD35A]">100+</p>
                  <p className="text-xs text-[#BEACA0]">Colleges Participated</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                  <p className="font-serif text-2xl font-bold text-[#FFD35A]">Union Min.</p>
                  <p className="text-xs text-[#BEACA0]">Dr. Harsh Vardhan Present</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/youth"
                  className="inline-flex items-center px-6 py-3 rounded-full text-xs font-bold text-[#231209] bg-[#FFD35A] hover:bg-[#F6B91A] transition-colors space-x-2"
                >
                  <span>Discover Youth Outreach Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated border-2 border-[#E87516]/40">
                <Image
                  src="/images/ADA92781-D8DA-4079-954F-468852D4DEF0.JPG"
                  alt="Udgaar Youth Festival Leadership at IG Stadium"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-[#A08E80] text-center mt-2 italic">
                HG Abhay Gaur Das orchestrating event leadership with dignitaries at Udgaar 2019
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FEATURED TEACHINGS & EDITORIAL ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#E87516] font-semibold">
              Scriptural Wisdom
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231209] mt-1">
              Teachings & Reflections
            </h2>
          </div>
          <Link
            href="/teachings"
            className="mt-4 md:mt-0 inline-flex items-center space-x-1 text-xs font-bold text-[#C9540B] hover:text-[#E87516]"
          >
            <span>Browse All Reflections</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEACHINGS_DATA.slice(0, 3).map((item) => (
            <article
              key={item.id}
              className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F6B91A]/20 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#786253]">
                  <span className="px-2.5 py-1 rounded-full bg-[#FFF1D6] text-[#C9540B] font-semibold">
                    {item.category}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {item.readingTime}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#231209] hover:text-[#C9540B] transition-colors leading-snug">
                  <Link href={`/teachings/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>

                <p className="text-sm text-[#786253] line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2ECE4]">
                <Link
                  href={`/teachings/${item.slug}`}
                  className="text-xs font-bold text-[#C9540B] hover:underline flex items-center"
                >
                  Read Full Reflection <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 8. LECTURES & VIDEO LIBRARY PREVIEW */}
      <section className="bg-[#FFF4E2]/70 py-20 border-y border-[#F6B91A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <p className="text-xs uppercase tracking-widest text-[#E87516] font-semibold">
              Audio & Video Library
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231209]">
              Discourses on Gita, Mind & Devotion
            </h2>
            <p className="text-sm text-[#786253]">
              Delivered across ISKCON Delhi, university auditoriums, and youth festivals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Active Video Player Mockup with Interactive YouTube Embed */}
            <div className="lg:col-span-7 bg-[#231209] rounded-2xl overflow-hidden shadow-elevated p-1 border border-[#F6B91A]/30">
              {isPlayingVideo ? (
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${selectedLecture.youtubeId}?autoplay=1`}
                    title={selectedLecture.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div 
                  className="relative aspect-video rounded-xl overflow-hidden bg-black flex items-center justify-center group cursor-pointer"
                  onClick={() => setIsPlayingVideo(true)}
                >
                  <Image
                    src={selectedLecture.thumbnail || "/images/featured_youtube_talk.jpg"}
                    alt={selectedLecture.title}
                    fill
                    className="object-cover opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Play Button Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#E87516] flex items-center justify-center text-white shadow-devotional group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 ml-1 fill-white" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E87516]">
                      {selectedLecture.topic}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold mt-1 text-white line-clamp-2">
                      {selectedLecture.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-[#BEACA0] mt-1">
                      <span>{selectedLecture.location} • {selectedLecture.duration}</span>
                      <span className="text-[#FFD35A] font-semibold flex items-center">
                        Click to Play Video ▶
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* YouTube Channel Banner */}
              <div className="p-3 bg-[#1A0C06] flex flex-wrap items-center justify-between gap-2 text-xs text-[#BEACA0]">
                <span className="flex items-center text-[#FFD35A] font-medium">
                  <Youtube className="w-4 h-4 mr-1.5 text-[#FF0000]" />
                  Official Discourse & Interview
                </span>
                <a
                  href={selectedLecture.videoUrl || `https://www.youtube.com/watch?v=${selectedLecture.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-[#FF0000] text-white transition-colors font-semibold"
                >
                  <Youtube className="w-3.5 h-3.5" />
                  <span>Watch on YouTube</span>
                </a>
              </div>
            </div>

            {/* Playlist Sidebar */}
            <div className="lg:col-span-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#786253] mb-2">
                Featured Discourses
              </h4>

              {LECTURES_DATA.map((lec) => {
                const isSelected = selectedLecture.id === lec.id;
                return (
                  <button
                    key={lec.id}
                    onClick={() => {
                      setSelectedLecture(lec);
                      setIsPlayingVideo(false);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start space-x-3 ${
                      isSelected
                        ? 'bg-white border-[#E87516] shadow-devotional'
                        : 'bg-[#FFF9EF] border-[#F6B91A]/20 hover:bg-white'
                    }`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                      isSelected ? 'bg-[#E87516] text-white' : 'bg-[#FFF4E2] text-[#E87516]'
                    }`}>
                      <Play className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#C9540B]">{lec.topic}</p>
                      <h5 className="font-serif text-base font-bold text-[#231209] leading-snug">
                        {lec.title}
                      </h5>
                      <p className="text-[11px] text-[#786253] mt-0.5">{lec.duration} • {lec.series}</p>
                    </div>
                  </button>
                );
              })}

              <div className="pt-2 text-center">
                <Link
                  href="/lectures"
                  className="inline-flex items-center text-xs font-bold text-[#C9540B] hover:text-[#E87516]"
                >
                  <span>Explore Complete Lecture Archive</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PHOTO GALLERY MOSAIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#E87516] font-semibold">
              Archival Moments
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231209] mt-1">
              Devotional Service & Dignitary Visits
            </h2>
          </div>
          <Link
            href="/gallery"
            className="mt-4 md:mt-0 inline-flex items-center space-x-1 text-xs font-bold text-[#C9540B] hover:text-[#E87516]"
          >
            <span>View All 70+ Photographs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_DATA.slice(0, 8).map((img, idx) => (
            <Link
              key={img.id}
              href="/gallery"
              className={`group relative rounded-xl overflow-hidden bg-[#FFF4E2] border border-[#F6B91A]/20 shadow-subtle ${
                idx === 0 || idx === 7 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'
              }`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-bold text-[#FFD35A]">{img.category}</span>
                <p className="font-serif text-sm font-bold line-clamp-1">{img.title}</p>
                <p className="text-[11px] text-[#D7CFC6] line-clamp-1">{img.caption}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 10. UPCOMING EVENTS & SATSANG */}
      <section className="bg-[#FFFDF9] py-16 sm:py-20 border-y border-[#F6B91A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFF1D6] border border-[#F6B91A]/40 text-xs font-bold text-[#C9540B] shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-[#E87516]" />
              <span className="uppercase tracking-widest text-[11px]">Congregational Calendar</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#231209]">
              Upcoming Discourses & Gatherings
            </h2>
            <p className="text-sm sm:text-base text-[#786253]">
              Join the satsang at ISKCON Delhi or participate in scheduled youth retreats & patron assemblies.
            </p>
          </div>

          {/* 4 Colorful Devotional Framed Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {UPCOMING_EVENTS.slice(0, 4).map((ev, idx) => {
              const cardThemes = [
                {
                  themeName: 'Sacred Saffron',
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
                  themeName: 'Royal Vermilion',
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
                  themeName: 'Temple Amber Gold',
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
                  themeName: 'Devotional Lotus Ruby',
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
              const theme = cardThemes[idx % cardThemes.length];

              return (
                <div
                  key={ev.id}
                  className={`relative rounded-3xl p-6 sm:p-7 ${theme.outerBg} ${theme.border} shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group overflow-hidden`}
                >
                  {/* Ornamental Corner Brackets */}
                  <span className={`absolute top-2.5 left-3 text-sm font-serif ${theme.cornerColor} select-none opacity-70`}>⌜</span>
                  <span className={`absolute top-2.5 right-3 text-sm font-serif ${theme.cornerColor} select-none opacity-70`}>⌝</span>
                  <span className={`absolute bottom-2.5 left-3 text-sm font-serif ${theme.cornerColor} select-none opacity-70`}>⌞</span>
                  <span className={`absolute bottom-2.5 right-3 text-sm font-serif ${theme.cornerColor} select-none opacity-70`}>⌟</span>

                  {/* Inner Decorative Framing Panel */}
                  <div className={`rounded-2xl p-5 sm:p-6 ${theme.innerBorder} bg-white/75 backdrop-blur-sm space-y-4 shadow-sm`}>
                    {/* Header: Category Badge + Date Chip */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${theme.badgeBg} shadow-sm`}>
                        {ev.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${theme.dateChip} shadow-sm flex items-center`}>
                        <Calendar className={`w-3.5 h-3.5 mr-1.5 ${theme.iconColor}`} />
                        {ev.date}
                      </span>
                    </div>

                    {/* Discourse Title */}
                    <h3 className={`font-serif text-xl sm:text-2xl font-bold text-[#231209] leading-snug transition-colors ${theme.headingHover}`}>
                      {ev.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#5C483B] leading-relaxed">
                      {ev.description}
                    </p>

                    {/* Venue & Logistics */}
                    <div className="pt-2 space-y-1.5 text-xs text-[#786253]">
                      <div className="flex items-start space-x-2">
                        <MapPin className={`w-4 h-4 ${theme.iconColor} shrink-0 mt-0.5`} />
                        <span className="font-medium text-[#473429]">{ev.venue}</span>
                      </div>
                      <div className="flex items-center space-x-2 pl-0.5">
                        <span className={`w-2 h-2 rounded-full ${theme.dot}`} />
                        <span>Speaker: <strong className="text-[#231209]">{ev.speaker}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Action Bar */}
                  <div className="mt-5 pt-3 flex items-center justify-between px-2">
                    <span className="text-xs text-[#786253] font-medium flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-[#E87516]" />
                      Registration Open
                    </span>
                    <Link
                      href="/connect"
                      className={`px-4 py-2 rounded-full text-xs font-bold ${theme.btn} shadow-sm flex items-center transition-all hover:scale-105`}
                    >
                      Inquire / RSVP <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Official Email & Discourse Desk Banner */}
          <div className="mt-12 bg-gradient-to-r from-[#FFF9F2] via-[#FFFDF9] to-[#FFF4E8] rounded-3xl p-6 sm:p-8 border-2 border-[#E87516]/40 shadow-devotional relative overflow-hidden">
            <span className="absolute top-2.5 left-2.5 text-xs text-[#E87516]/60 font-serif">✥</span>
            <span className="absolute top-2.5 right-2.5 text-xs text-[#E87516]/60 font-serif">✥</span>
            <span className="absolute bottom-2.5 left-2.5 text-xs text-[#E87516]/60 font-serif">✥</span>
            <span className="absolute bottom-2.5 right-2.5 text-xs text-[#E87516]/60 font-serif">✥</span>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E87516] via-[#D97706] to-[#C9540B] text-white flex items-center justify-center shrink-0 shadow-devotional">
                  <Mail className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#FFEDD5] text-[#C2410C] text-[11px] font-bold uppercase tracking-wider">
                    <span>Direct Satsang & Event Inquiries</span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#231209]">
                    Official Secretariat & Discourse Desk
                  </h4>
                  <p className="text-xs sm:text-sm text-[#786253]">
                    To reserve seats for upcoming discourses or invite Prabhuji for youth seminars:
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <a
                  href="mailto:office.abhaygaurdas@gmail.com"
                  className="inline-flex items-center px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E87516] via-[#D97706] to-[#C9540B] hover:opacity-95 shadow-devotional transition-all hover:scale-[1.02]"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  office.abhaygaurdas@gmail.com
                </a>
                <Link
                  href="/connect"
                  className="inline-flex items-center px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#321B0F] bg-white border-2 border-[#E87516]/35 hover:bg-[#FFF4E2] transition-colors shadow-sm"
                >
                  Online Inquiry Form <ArrowRight className="w-4 h-4 ml-1.5 text-[#E87516]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. VOLUNTEER FOR A CAUSE (Gaur Gopal Das inspired "Volunteer. Learn. Serve.") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#FFF9F2] via-white to-[#FFF4E5] border-2 border-[#E87516]/40 shadow-devotional relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-radial from-[#F6B91A]/15 to-transparent blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFEDD5] border border-[#FDBA74]/50 text-xs font-bold text-[#C2410C]">
                <Heart className="w-3.5 h-3.5 text-[#E87516]" />
                <span>Volunteer • Learn • Serve</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#231209] leading-tight">
                Transform Your Talents into <br className="hidden sm:inline" />
                <span className="text-gold-gradient">Sacred Devotional Impact</span>
              </h2>

              <p className="text-sm sm:text-base text-[#5C483B] leading-relaxed">
                Join hundreds of college students and working professionals dedicating their weekends and spare hours in graphic design, video editing, youth festivals, and community research under the direct mentorship of HG Abhay Gaur Das.
              </p>

              {/* 4 Seva Wings tags */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-white border border-[#F6B91A]/30 text-center shadow-xs">
                  <p className="text-xs font-bold text-[#231209]">Mega Festivals</p>
                  <p className="text-[10px] text-[#786253]">Udgaar & Youth</p>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-[#F6B91A]/30 text-center shadow-xs">
                  <p className="text-xs font-bold text-[#231209]">Digital Media</p>
                  <p className="text-[10px] text-[#786253]">Video & Design</p>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-[#F6B91A]/30 text-center shadow-xs">
                  <p className="text-xs font-bold text-[#231209]">Vedic Research</p>
                  <p className="text-[10px] text-[#786253]">Articles & Sutras</p>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-[#F6B91A]/30 text-center shadow-xs">
                  <p className="text-xs font-bold text-[#231209]">Bhishma Care</p>
                  <p className="text-[10px] text-[#786253]">Donor Support</p>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  href="/volunteer"
                  className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E87516] via-[#D97706] to-[#C9540B] shadow-devotional hover:scale-[1.02] transition-all flex items-center space-x-2"
                >
                  <Heart className="w-4 h-4" />
                  <span>Explore Seva Wings & Apply</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/resources"
                  className="px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#473429] bg-white border border-[#F6B91A]/40 hover:bg-[#FFF4E2] transition-colors"
                >
                  Browse Free Study Guides
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-elevated border-2 border-white aspect-[4/5] bg-[#FFF4E2]">
                <Image
                  src="/images/gallery_youth_seminar.jpg"
                  alt="Youth Volunteers serving at ISKCON Delhi"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#231209]/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#F6B91A]/30">
                  <p className="font-serif text-sm font-bold text-[#231209]">Seva Certificate & Mentorship</p>
                  <p className="text-[11px] text-[#786253] mt-0.5">
                    Letters of recommendation, leadership skills, and spiritual camaraderie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. SHARABLE DAILY WISDOM & STUDY RESOURCES (Gaur Gopal Das inspired WhatsApp Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#E87516] font-bold mb-2">
              <Quote className="w-4 h-4 text-[#E87516]" />
              <span>Daily Wisdom & Publications</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231209]">
              Nourish Your Mind & Share the Light
            </h2>
            <p className="text-sm text-[#786253] mt-1">
              One-click shareable quote cards for WhatsApp and free downloadable study booklets.
            </p>
          </div>

          <Link
            href="/resources"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#C9540B] hover:text-[#E87516] transition-colors"
          >
            <span>View All Wisdom Guides & Wallpapers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-[#FFF7ED] via-white to-[#FFEDD5]/30 rounded-3xl p-6 sm:p-7 border border-[#FDBA74]/50 shadow-subtle hover:shadow-card hover:border-[#E87516] transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FFEDD5] text-[#C2410C]">
                  Mind Mastery
                </span>
                <Quote className="w-5 h-5 text-[#E87516]/40 group-hover:text-[#E87516] transition-colors" />
              </div>
              <p className="font-serif text-base sm:text-lg text-[#231209] font-medium leading-relaxed italic">
                &ldquo;The mind is like a wild chariot. If the intellect is asleep, the senses will drive you off the cliff. Train the intellect with sacred wisdom daily.&rdquo;
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F2ECE4] space-y-3">
              <p className="text-[11px] font-semibold text-[#786253]">
                HG Abhay Gaur Das • Gita 6.6
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const text = encodeURIComponent(
                      `*Daily Wisdom from HG Abhay Gaur Das*\n\n"The mind is like a wild chariot. If the intellect is asleep, the senses will drive you off the cliff. Train the intellect with sacred wisdom daily."\n\n— _HG Abhay Gaur Das_\nhttps://abhaygaurdas-website.vercel.app/resources`
                    );
                    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
                  }}
                  className="flex-1 py-2 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] flex items-center justify-center space-x-1.5 shadow-sm transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={() => handleCopyQuote('"The mind is like a wild chariot. If the intellect is asleep, the senses will drive you off the cliff. Train the intellect with sacred wisdom daily." — HG Abhay Gaur Das', 'home-q1')}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-[#473429] bg-white border border-[#F6B91A]/30 hover:bg-[#FFF4E2] transition-colors"
                >
                  {copiedQuoteId === 'home-q1' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#E87516]" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-[#FEFCE8] via-white to-[#FEF08A]/20 rounded-3xl p-6 sm:p-7 border border-[#FCD34D]/50 shadow-subtle hover:shadow-card hover:border-[#D97706] transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FEF3C7] text-[#92400E]">
                  Dharmic Wealth
                </span>
                <Quote className="w-5 h-5 text-[#D97706]/40 group-hover:text-[#D97706] transition-colors" />
              </div>
              <p className="font-serif text-base sm:text-lg text-[#231209] font-medium leading-relaxed italic">
                &ldquo;Wealth is not evil; it is Lakshmi. But Lakshmi must never be divorced from Narayana. When money serves devotion, it transforms into spiritual grace.&rdquo;
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F2ECE4] space-y-3">
              <p className="text-[11px] font-semibold text-[#786253]">
                HG Abhay Gaur Das • Bhishma Pastoral Care
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const text = encodeURIComponent(
                      `*Daily Wisdom from HG Abhay Gaur Das*\n\n"Wealth is not evil; it is Lakshmi. But Lakshmi must never be divorced from Narayana. When money serves devotion, it transforms into spiritual grace."\n\n— _HG Abhay Gaur Das_\nhttps://abhaygaurdas-website.vercel.app/resources`
                    );
                    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
                  }}
                  className="flex-1 py-2 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] flex items-center justify-center space-x-1.5 shadow-sm transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={() => handleCopyQuote('"Wealth is not evil; it is Lakshmi. But Lakshmi must never be divorced from Narayana. When money serves devotion, it transforms into spiritual grace." — HG Abhay Gaur Das', 'home-q2')}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-[#473429] bg-white border border-[#F6B91A]/30 hover:bg-[#FFF4E2] transition-colors"
                >
                  {copiedQuoteId === 'home-q2' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#E87516]" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Free Study Booklet Teaser */}
          <div className="bg-gradient-to-br from-[#231209] via-[#321B0F] to-[#1A0C06] text-white rounded-3xl p-6 sm:p-7 border border-[#E87516]/40 shadow-card flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#E87516] text-white">
                  Free PDF Guide
                </span>
                <BookOpen className="w-5 h-5 text-[#FFD35A]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#FFD35A] transition-colors">
                The Architecture of Focus
              </h3>
              <p className="text-xs text-[#BEACA0] leading-relaxed">
                A monk's practical blueprint for conquering digital distraction and cultivating deep japa meditation.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
              <span className="text-[11px] text-[#FFD35A] font-semibold block">
                28 Pages • Comprehensive E-Booklet
              </span>
              <Link
                href="/resources#study-guides"
                className="w-full py-2.5 rounded-xl text-xs font-bold text-[#231209] bg-gradient-to-r from-[#FFD35A] to-[#F6B91A] flex items-center justify-center space-x-1.5 shadow-md hover:brightness-105 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Free Booklet</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 13. INVITATION & CONNECT CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="bg-gradient-to-tr from-[#FFF1D6] via-[#FFF9EF] to-[#FFEEDD] rounded-3xl p-8 sm:p-14 border-2 border-[#F6B91A]/40 shadow-devotional space-y-6 relative overflow-hidden">
          <span className="absolute top-3 left-3 text-sm text-[#E87516]/50 font-serif">✥</span>
          <span className="absolute top-3 right-3 text-sm text-[#E87516]/50 font-serif">✥</span>
          <span className="absolute bottom-3 left-3 text-sm text-[#E87516]/50 font-serif">✥</span>
          <span className="absolute bottom-3 right-3 text-sm text-[#E87516]/50 font-serif">✥</span>

          <div className="w-14 h-14 rounded-full bg-[#E87516] text-white mx-auto flex items-center justify-center shadow-devotional">
            <Sparkles className="w-7 h-7" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231209]">
            Invite for Spiritual Discourse or Youth Seminar
          </h2>

          <p className="text-sm sm:text-base text-[#5C483B] max-w-2xl mx-auto leading-relaxed">
            Available for corporate Bhagavad Gita workshops, university value education seminars, and patron family satsangs in Delhi-NCR and across India.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/connect"
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#E87516] to-[#C9540B] shadow-devotional hover:opacity-95 transition-opacity"
            >
              Submit Invitation / Inquiry
            </Link>
            <Link
              href="/bhishma"
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-[#321B0F] bg-white border border-[#F6B91A]/30 hover:bg-[#FFF4E2] transition-colors"
            >
              Bhishma Patron Support
            </Link>
          </div>

          {/* Official Email Direct Channel */}
          <div className="pt-4 border-t border-[#F6B91A]/30 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-[#786253]">
            <span>Official Inquiries & Coordination:</span>
            <a
              href="mailto:office.abhaygaurdas@gmail.com"
              className="inline-flex items-center font-bold text-[#C9540B] hover:text-[#E87516] underline underline-offset-4 decoration-[#E87516]/50 hover:decoration-[#E87516]"
            >
              <Mail className="w-4 h-4 mr-1.5 text-[#E87516]" />
              office.abhaygaurdas@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
