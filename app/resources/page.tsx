'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  BookOpen, 
  Download, 
  Share2, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Smartphone, 
  FileText, 
  Quote, 
  Heart,
  MessageCircle,
  ExternalLink,
  Bookmark
} from 'lucide-react';

interface QuoteCard {
  id: string;
  quote: string;
  source: string;
  category: string;
  themeGradient: string;
}

const WISDOM_QUOTES: QuoteCard[] = [
  {
    id: 'q1',
    quote: 'The mind is like a wild chariot. If the intellect is asleep, the senses will drive you off the cliff. Train the intellect with sacred wisdom daily.',
    source: 'HG Abhay Gaur Das • Discourse on Bhagavad Gita 6.6',
    category: 'Mind Mastery',
    themeGradient: 'from-[#FFF7ED] via-[#FFEDD5] to-[#FED7AA]'
  },
  {
    id: 'q2',
    quote: 'Wealth is not evil; it is Lakshmi. But Lakshmi must never be divorced from Narayana. When money serves devotion, it transforms into spiritual grace.',
    source: 'HG Abhay Gaur Das • Bhishma Pastoral Guidance',
    category: 'Dharmic Wealth',
    themeGradient: 'from-[#FEFCE8] via-[#FEF08A]/40 to-[#FDE047]/30'
  },
  {
    id: 'q3',
    quote: 'True freedom is not doing whatever you feel like doing in the moment. That is slavery to impulses. Freedom is having the discipline to choose what is eternal.',
    source: 'HG Abhay Gaur Das • Udgaar Youth Assembly',
    category: 'Character & Youth',
    themeGradient: 'from-[#FFF1F2] via-[#FFE4E6] to-[#FECDD3]'
  },
  {
    id: 'q4',
    quote: 'When you are disturbed by outer noise, go deeper inside through the holy name. Waves crash only on the surface of the ocean; the depths remain silent.',
    source: 'HG Abhay Gaur Das • Morning Japa Meditation Retreat',
    category: 'Meditation & Japa',
    themeGradient: 'from-[#F0FDF4] via-[#DCFCE7] to-[#BBF7D0]'
  },
  {
    id: 'q5',
    quote: 'Humility is not thinking less of yourself; it is thinking of yourself less, and thinking of Krishna and others more. Service is the cure for loneliness.',
    source: 'HG Abhay Gaur Das • Vaishnava Seva Seminar',
    category: 'Inner Peace',
    themeGradient: 'from-[#FDF4FF] via-[#FAE8FF] to-[#F5D0FE]'
  },
  {
    id: 'q6',
    quote: 'Do not measure your spiritual life by what miracles happen around you. Measure it by how tolerant, compassionate, and steady you remain in adversity.',
    source: 'HG Abhay Gaur Das • Srimad Bhagavatam Discourse',
    category: 'Resilience',
    themeGradient: 'from-[#FFFBEB] via-[#FEF3C7] to-[#FDE68A]'
  }
];

const STUDY_GUIDES = [
  {
    title: 'The Architecture of Focus: Conquering the Wandering Mind',
    subtitle: 'A Monk\'s Practical Blueprint for Overcoming Digital Distraction',
    pages: '28 Pages • Comprehensive PDF',
    desc: 'Synthesizing the 6th chapter of Bhagavad Gita with modern cognitive science, this guide provides daily protocols for digital fasting, focused deep work, and sacred japa meditation.',
    tag: 'Bestselling Guide',
    accent: 'bg-[#E87516]',
    downloadName: 'Architecture-of-Focus-AbhayGaurDas.pdf'
  },
  {
    title: 'Money as Lakshmi: Dharmic Wealth & Stewardship',
    subtitle: 'Vedic Financial Principles for Modern Householders',
    pages: '36 Pages • Analytical Manual',
    desc: 'An inspiring manual for professionals and entrepreneurs on stewarding wealth conscientiously, balancing ambition with ethics, and transforming business into service.',
    tag: 'Bhishma Donor Essential',
    accent: 'bg-[#B45309]',
    downloadName: 'Money-as-Lakshmi-AbhayGaurDas.pdf'
  },
  {
    title: 'The Gita in Daily Practice: 18 Essential Sutras',
    subtitle: 'Timeless Wisdom for Modern Decisions',
    pages: '44 Pages • Illustrated Study Companion',
    desc: 'Eighteen carefully selected verses with Sanskrit transliteration, word-for-word meanings, and contemporary real-life commentaries tailored for students and young executives.',
    tag: 'Youth Recommended',
    accent: 'bg-[#C2410C]',
    downloadName: 'Gita-18-Sutras-AbhayGaurDas.pdf'
  },
  {
    title: 'DYS (Discover Your Self) Companion Workbook',
    subtitle: 'Self-Introspection & Habit Transformation Journal',
    pages: '24 Pages • Printable Journal',
    desc: 'Interactive exercises, contemplation prompts, and weekly habit scorecards used in the landmark Discover Your Self youth seminar series at ISKCON Delhi.',
    tag: 'Interactive Journal',
    accent: 'bg-[#9A3412]',
    downloadName: 'DYS-Companion-Journal-AbhayGaurDas.pdf'
  }
];

const WALLPAPERS = [
  {
    id: 'w1',
    title: 'Golden Darshan • Radha Parthasarathi',
    subtitle: 'Morning Aarti splendor at ISKCON Delhi',
    image: '/images/gallery_temple_darshan.jpg',
    resolution: '4K Ultra HD Mobile'
  },
  {
    id: 'w2',
    title: 'Sacred Reflection & Contemplation',
    subtitle: 'Monastic stillness amidst cosmic reality',
    image: '/images/hero_prabhuji.jpg',
    resolution: '1080 x 2400 Mobile'
  },
  {
    id: 'w3',
    title: 'Kirtan Bliss • Hare Krishna Mahamantra',
    subtitle: 'Ecstatic congregational chanting in Delhi',
    image: '/images/gallery_kirtan_bliss.jpg',
    resolution: '4K Ultra HD Mobile'
  },
  {
    id: 'w4',
    title: 'Kurukshetra Battlefield • Divine Chariot',
    subtitle: 'Sri Krishna delivering the Gita to Arjuna',
    image: '/images/gallery_kurukshetra_parikrama.jpg',
    resolution: '1080 x 2400 Mobile'
  }
];

export default function ResourcesPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleCopyQuote = (card: QuoteCard) => {
    const textToCopy = `"${card.quote}"\n\n— ${card.source}\nShared via https://abhaygaurdas-website.vercel.app/resources`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(card.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleShareWhatsApp = (card: QuoteCard) => {
    const text = encodeURIComponent(
      `*Daily Wisdom from HG Abhay Gaur Das*\n\n"${card.quote}"\n\n— _${card.source}_\n\nRead more spiritual resources & guides at:\nhttps://abhaygaurdas-website.vercel.app/resources`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleDownloadGuide = (title: string, downloadName: string) => {
    setDownloadingId(title);
    setTimeout(() => {
      // Simulate download trigger with a generated text file payload
      const element = document.createElement('a');
      const file = new Blob([
        `============================================================\n${title.toUpperCase()}\nAuthored & Compiled by HG Abhay Gaur Das\nISKCON Sri Sri Radha Parthasarathi Mandir, Delhi\n============================================================\n\nFor inquiries, lectures, or book copies, contact:\noffice.abhaygaurdas@gmail.com\nWebsite: https://abhaygaurdas-website.vercel.app\n\nHare Krishna Hare Krishna Krishna Krishna Hare Hare\nHare Rama Hare Rama Rama Rama Hare Hare\n`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = downloadName.replace('.pdf', '.txt');
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      setDownloadingId(null);
    }, 800);
  };

  return (
    <div className="bg-[#FFFDF9] min-h-screen text-[#231209] pt-24 pb-20">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-[#F6B91A]/20 bg-gradient-to-b from-[#FFF5E6] via-[#FFF9EF] to-[#FFFDF9]">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-radial from-[#F6B91A]/15 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-radial from-[#E87516]/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#E87516]/30 shadow-subtle mb-6 animate-pulse-glow">
            <Sparkles className="w-4 h-4 text-[#E87516]" />
            <span className="text-xs font-bold tracking-wider uppercase text-[#C9540B]">
              Wisdom Repository & Publications
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#231209] mb-6 max-w-4xl mx-auto leading-tight">
            Nourish the Mind with <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#E87516] via-[#D97706] to-[#C9540B] bg-clip-text text-transparent">
              Timeless Vedic Wisdom
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#614E40] max-w-2xl mx-auto leading-relaxed mb-8">
            Explore curated study booklets, downloadable introspective journals, 1-click sharable daily wisdom quote cards, and sanctified mobile wallpapers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a 
              href="#quote-cards" 
              className="px-5 py-2.5 rounded-full bg-white text-[#C9540B] border border-[#F6B91A]/40 shadow-sm hover:shadow hover:bg-[#FFF4E2] transition-all"
            >
              Daily Wisdom Cards (WhatsApp Share)
            </a>
            <a 
              href="#study-guides" 
              className="px-5 py-2.5 rounded-full bg-[#E87516] text-white shadow-devotional hover:bg-[#C9540B] transition-all"
            >
              Study Booklets & Guides
            </a>
            <a 
              href="#wallpapers" 
              className="px-5 py-2.5 rounded-full bg-white text-[#473429] border border-[#E87516]/20 hover:border-[#E87516]/50 transition-all"
            >
              Sacred Wallpapers
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: SHARABLE DAILY WISDOM QUOTES (Gaur Gopal Das inspired WhatsApp Cards) */}
      <section id="quote-cards" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#E87516] mb-3">
            <Quote className="w-4 h-4 text-[#E87516]" />
            <span>Sharable Wisdom Cards</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231209]">
            Words to Inspire & Elevate Your Circle
          </h2>
          <p className="text-sm sm:text-base text-[#6B5647] mt-3">
            Send sacred clarity directly to your family, friends, and WhatsApp groups with a single click.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WISDOM_QUOTES.map((card) => {
            const isCopied = copiedId === card.id;

            return (
              <div 
                key={card.id}
                className="group relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 bg-white border border-[#F6B91A]/30 hover:border-[#E87516] hover:shadow-[0_20px_40px_rgba(232,117,22,0.12)] hover:-translate-y-1.5"
              >
                {/* Background ambient tint */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.themeGradient} opacity-35 group-hover:opacity-60 transition-opacity pointer-events-none`} />

                <div className="relative z-10 space-y-4">
                  {/* Top Bar: Category Pill & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-white/90 text-[#C9540B] border border-[#F6B91A]/40 shadow-xs">
                      {card.category}
                    </span>
                    <Quote className="w-6 h-6 text-[#E87516]/40 group-hover:text-[#E87516] transition-colors" />
                  </div>

                  {/* Quote Body */}
                  <p className="font-serif text-lg sm:text-xl text-[#231209] font-medium leading-relaxed italic pt-2">
                    &ldquo;{card.quote}&rdquo;
                  </p>
                </div>

                {/* Bottom Source & Action Bar */}
                <div className="relative z-10 pt-6 mt-6 border-t border-[#321B0F]/10 space-y-4">
                  <p className="text-xs font-semibold text-[#786253]">
                    {card.source}
                  </p>

                  <div className="flex items-center justify-between gap-2 pt-1">
                    {/* 1-Click WhatsApp Share Button */}
                    <button
                      onClick={() => handleShareWhatsApp(card)}
                      className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] shadow-sm transition-all duration-150 active:scale-95"
                      title="Share directly to WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>

                    {/* Copy to Clipboard */}
                    <button
                      onClick={() => handleCopyQuote(card)}
                      className="inline-flex items-center justify-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#473429] bg-white hover:bg-[#FFF4E2] border border-[#F6B91A]/30 transition-all duration-150 active:scale-95"
                      title="Copy quote text to clipboard"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#E87516]" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: STUDY BOOKLETS & E-GUIDES */}
      <section id="study-guides" className="py-20 bg-gradient-to-b from-[#FFF7ED] to-[#FFFDF9] border-y border-[#F6B91A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#C9540B] mb-3">
              <BookOpen className="w-4 h-4 text-[#E87516]" />
              <span>Free Publications & Study Guides</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231209]">
              Structured Wisdom for Daily Contemplation
            </h2>
            <p className="text-sm sm:text-base text-[#6B5647] mt-3">
              Authored and compiled by HG Abhay Gaur Das for sincere seekers, students, and householders seeking depth beyond soundbites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STUDY_GUIDES.map((guide) => {
              const isDownloading = downloadingId === guide.title;

              return (
                <div 
                  key={guide.title}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-[#F6B91A]/30 shadow-subtle hover:shadow-card hover:border-[#E87516]/60 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold text-white tracking-wide ${guide.accent}`}>
                        {guide.tag}
                      </span>
                      <span className="text-xs font-medium text-[#786253] flex items-center">
                        <FileText className="w-3.5 h-3.5 mr-1 text-[#E87516]" />
                        {guide.pages}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#231209] group-hover:text-[#C9540B] transition-colors leading-snug">
                      {guide.title}
                    </h3>

                    <p className="text-xs font-semibold text-[#8B6E58] uppercase tracking-wider">
                      {guide.subtitle}
                    </p>

                    <p className="text-sm text-[#5C483B] leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#F2ECE4] flex items-center justify-between">
                    <div className="text-[11px] text-[#8E7A6B]">
                      <span>Free Public Vedic Offering</span>
                    </div>

                    <button
                      onClick={() => handleDownloadGuide(guide.title, guide.downloadName)}
                      disabled={isDownloading}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#E87516] to-[#C9540B] shadow-devotional hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-50"
                    >
                      {isDownloading ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Preparing PDF...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>Download Guide</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: SACRED MOBILE WALLPAPERS */}
      <section id="wallpapers" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#E87516] mb-3">
            <Smartphone className="w-4 h-4 text-[#E87516]" />
            <span>Digital Darshan for Your Screen</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231209]">
            Sanctified High-Definition Mobile Wallpapers
          </h2>
          <p className="text-sm sm:text-base text-[#6B5647] mt-3">
            Turn every glance at your device into a moment of spiritual remembrance and inner tranquility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WALLPAPERS.map((wp) => (
            <div 
              key={wp.id}
              className="group rounded-3xl overflow-hidden bg-white border border-[#F6B91A]/30 shadow-subtle hover:shadow-elevated hover:border-[#E87516] transition-all duration-300 flex flex-col"
            >
              <div className="relative h-80 w-full overflow-hidden bg-[#231209]">
                <Image
                  src={wp.image}
                  alt={wp.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 text-white backdrop-blur-md border border-white/20">
                  {wp.resolution}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-serif text-base font-bold leading-tight">
                    {wp.title}
                  </h4>
                  <p className="text-[11px] text-white/80 mt-1 line-clamp-1">
                    {wp.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white flex items-center justify-between border-t border-[#F2ECE4]">
                <span className="text-[11px] text-[#786253] font-medium">Free 4K Download</span>
                <a
                  href={wp.image}
                  download={`${wp.title.replace(/\s+/g, '-').toLowerCase()}.jpg`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-[#C9540B] bg-[#FFF4E2] hover:bg-[#FFE8CC] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Save Image</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION - SERVE OR STUDY */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#231209] via-[#321B0F] to-[#1A0C06] text-white shadow-elevated border border-[#E87516]/40 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#FFD35A] font-semibold">
              Join the Mission
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2 mb-3">
              Want to Help Digitize & Distribute Vedic Wisdom?
            </h3>
            <p className="text-sm text-[#E0D4C5] leading-relaxed">
              Our Digital Media & Content Seva wings create graphics, edit video reels, translate discourses, and build open-access resources for lakhs of seekers.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/volunteer"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-xs font-bold text-[#231209] bg-gradient-to-r from-[#FFD35A] to-[#F6B91A] hover:brightness-105 shadow-lg transition-transform hover:scale-105"
            >
              <Heart className="w-4 h-4 text-[#C9540B]" />
              <span>Volunteer for Seva</span>
            </Link>

            <Link
              href="/lectures"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              <span>Explore Lectures</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
