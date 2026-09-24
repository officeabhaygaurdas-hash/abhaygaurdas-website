'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles,
  ArrowUpRight,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-[#231209] text-[#E0D4C5] border-t-2 border-[#E87516] relative overflow-hidden">
      {/* Devotional watermarked shloka banner */}
      <div className="bg-[#1A0C06] py-3 px-4 border-b border-[#3D2517] text-center">
        <p className="text-xs sm:text-sm font-devanagari text-[#FFD35A] tracking-wider">
          हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे । हरे राम हरे राम राम राम हरे हरे ॥
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Monastic Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-br from-[#E87516] to-[#C9540B] shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#231209]">
                  <Image
                    src="/images/logo_avatar.jpg"
                    alt="HG Abhay Gaur Das"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                  HG Abhay Gaur Das
                </h3>
                <p className="text-xs text-[#FDB675] tracking-widest uppercase">
                  Monk, Preacher & Administrator
                </p>
              </div>
            </div>

            <p className="text-sm text-[#BEACA0] leading-relaxed pr-4">
              Dedicated servant at ISKCON Sri Sri Radha Parthasarathi Mandir, Delhi. Living by the sacred principle of <span className="text-[#FFD35A] italic">devotion with discipline</span>, guiding modern youth, stewarding donor care, and serving the mission of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada under the shelter of HH Gopal Krishna Goswami Maharaj.
            </p>

            <div className="pt-2 flex items-center space-x-4 text-xs text-[#9B8475]">
              <span className="flex items-center">
                <ShieldCheck className="w-4 h-4 text-[#F6B91A] mr-1" />
                Vedic Non-Profit Trust
              </span>
              <span>•</span>
              <span>Gaudiya Vaishnava Sampradaya</span>
            </div>

            {/* Social Media Follow Buttons */}
            <div className="pt-3">
              <p className="text-xs uppercase tracking-wider text-[#FDB675] font-semibold mb-2">
                Connect on Social Media <span className="text-[#FFD35A] font-bold">(@abhayagaurdas)</span>
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#321B0F] hover:bg-[#E1306C] text-xs text-[#E0D4C5] hover:text-white border border-[#472715] transition-all hover:scale-105 group"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#E1306C] group-hover:text-white transition-colors" />
                  <span>Instagram</span>
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#321B0F] hover:bg-[#1877F2] text-xs text-[#E0D4C5] hover:text-white border border-[#472715] transition-all hover:scale-105 group"
                >
                  <Facebook className="w-3.5 h-3.5 text-[#1877F2] group-hover:text-white transition-colors" />
                  <span>Facebook</span>
                </a>
                <a
                  href={SOCIAL_LINKS.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#321B0F] hover:bg-black text-xs text-[#E0D4C5] hover:text-white border border-[#472715] transition-all hover:scale-105 group"
                >
                  <svg className="w-3 h-3 fill-current text-white/80 group-hover:text-white transition-colors" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>X (Twitter)</span>
                </a>
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#321B0F] hover:bg-[#FF0000] text-xs text-[#E0D4C5] hover:text-white border border-[#472715] transition-all hover:scale-105 group"
                >
                  <Youtube className="w-3.5 h-3.5 text-[#FF0000] group-hover:text-white transition-colors" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Key Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-b border-[#3D2517] pb-2 font-sans">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#FFD35A] transition-colors">
                  Biography & Journey
                </Link>
              </li>
              <li>
                <Link href="/teachings" className="hover:text-[#FFD35A] transition-colors">
                  Teachings & Reflections
                </Link>
              </li>
              <li>
                <Link href="/lectures" className="hover:text-[#FFD35A] transition-colors">
                  Video & Audio Discourses
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#FFD35A] transition-colors">
                  Wisdom Resources & Guides
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-[#FDB675] hover:underline flex items-center">
                  Volunteer for Seva <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </li>
              <li>
                <Link href="/youth" className="hover:text-[#FFD35A] transition-colors">
                  Youth & Udgaar Movement
                </Link>
              </li>
              <li>
                <Link href="/bhishma" className="hover:text-[#FFD35A] transition-colors">
                  Bhishma Donor Care
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#FFD35A] transition-colors">
                  Kurukshetra Temple
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Affiliation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-b border-[#3D2517] pb-2 font-sans">
              Sanctuary
            </h4>
            <div className="space-y-3 text-sm text-[#BEACA0]">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#E87516] shrink-0 mt-0.5" />
                <span>
                  ISKCON Glory of India Cultural Centre,<br />
                  Sant Nagar, East of Kailash,<br />
                  New Delhi 110065, India
                </span>
              </div>
              <div className="pt-2">
                <p className="text-xs text-[#FDB675] font-semibold">Under the Guidance of:</p>
                <p className="text-xs text-[#BEACA0] mt-0.5">
                  His Holiness Gopal Krishna Goswami Maharaj (1944–2024)
                </p>
              </div>
              <div>
                <p className="text-xs text-[#FDB675] font-semibold">Founder-Acharya:</p>
                <p className="text-xs text-[#BEACA0] mt-0.5">
                  A.C. Bhaktivedanta Swami Prabhupada
                </p>
              </div>

              <div className="pt-3 border-t border-[#3D2517] flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#F6B91A] shrink-0" />
                <a
                  href="mailto:office.abhaygaurdas@gmail.com"
                  className="text-xs text-[#FFD35A] font-semibold hover:underline"
                >
                  office.abhaygaurdas@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Reflections & Admin */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-b border-[#3D2517] pb-2 font-sans">
              Connect & Portal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/connect" className="text-[#FDB675] hover:underline flex items-center">
                  Invite for Discourse <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#FFD35A] transition-colors">
                  Upcoming Satsang & Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#FFD35A] transition-colors">
                  Archival Photo Gallery
                </Link>
              </li>
              <li className="pt-4 border-t border-[#3D2517]">
                <Link
                  href="/admin"
                  className="inline-flex items-center text-xs px-3 py-1.5 rounded bg-[#321B0F] text-[#FDB675] hover:bg-[#472715] transition-colors border border-[#61381E]"
                >
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#E87516]" />
                  Internal Portal / CMS
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#3D2517] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E7A6B] space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} HG Abhay Gaur Das • Devotional Service Portfolio. All rights offered unto Sri Sri Radha Parthasarathi.</p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-[#BEACA0] transition-colors">ISKCON Delhi Official</span>
            <span>•</span>
            <span className="hover:text-[#BEACA0] transition-colors">Sri Krishna-Arjuna Mandir Kurukshetra</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
