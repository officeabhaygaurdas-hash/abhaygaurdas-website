'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Landmark, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, MapPin, Calendar } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="space-y-24 pb-20">
      {/* 1. Header */}
      <section className="bg-sacred-pattern py-16 border-b border-[#F6B91A]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF1D6] text-xs font-semibold text-[#C9540B]">
            <Landmark className="w-3.5 h-3.5 text-[#E87516]" />
            <span>Sacred Architecture & Heritage</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#231209]">
            Monumental Temple Projects
          </h1>
          <p className="text-base sm:text-lg text-[#5C483B] max-w-2xl mx-auto leading-relaxed">
            Overseeing financial stewardship and execution for landmark cultural centers commemorating Lord Krishna&apos;s eternal teachings.
          </p>
        </div>
      </section>

      {/* 2. Main Showcase: Sri Krishna-Arjuna Temple, Kurukshetra */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#F6B91A]/30 shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF1D6] text-[#C9540B] text-xs font-bold">
                <MapPin className="w-3.5 h-3.5 text-[#E87516]" />
                <span>Jyotisar, Kurukshetra, Haryana</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#231209] leading-tight">
                Sri Krishna-Arjuna Temple & Cultural Complex
              </h2>

              <p className="text-sm sm:text-base text-[#5C483B] leading-relaxed">
                Rising at the very battlefield where the Supreme Lord Sri Krishna delivered the immortal <strong>Srimad Bhagavad Gita</strong> to Arjuna, the Kurukshetra temple project is one of ISKCON&apos;s most ambitious international heritage undertakings.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9540B]">
                  Administrative Leadership Role:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#473429]">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#E87516] mr-2 shrink-0 mt-0.5" />
                    <span>Project Financial Coordination: Managing milestone disbursements, audited accounts, and compliance.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#E87516] mr-2 shrink-0 mt-0.5" />
                    <span>Major Donor Liaison: Facilitating transparent brick-by-brick contribution updates for patron families.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#E87516] mr-2 shrink-0 mt-0.5" />
                    <span>Cross-Agency Coordination: Interfacing with Haryana state tourism and heritage authorities.</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#F2ECE4]">
                <div>
                  <p className="font-serif text-2xl font-bold text-[#C9540B]">6 Acres</p>
                  <p className="text-xs text-[#786253]">Heritage Campus</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-[#C9540B]">Jyotisar</p>
                  <p className="text-xs text-[#786253]">Birthplace of Gita</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-[#C9540B]">Global</p>
                  <p className="text-xs text-[#786253]">Cultural Destination</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated border-2 border-[#F6B91A]/30">
                <Image
                  src="/images/3C7D35EC-37E3-4E2E-A02D-C460A56A68C9.PNG"
                  alt="Himalayan pilgrimage and heritage inspiration"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-[#786253] text-center mt-2 italic">
                Drawing inspiration from ancient sacred architecture and pilgrimage traditions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Glory of India Cultural Centre & The Astounding Gita */}
      <section className="bg-[#FFF4E2]/70 py-16 border-y border-[#F6B91A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated border-2 border-[#F6B91A]/30">
                <Image
                  src="/images/1000280433.jpeg"
                  alt="Beside the Astounding Bhagavad Gita at ISKCON Delhi"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-[#786253] text-center mt-2 italic">
                HG Abhay Gaur Das beside the Astounding Bhagavad Gita (world&apos;s largest printed sacred text)
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E87516]">
                East of Kailash, New Delhi
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231209]">
                Glory of India Cultural Centre: Custodians of Heritage
              </h2>

              <p className="text-sm sm:text-base text-[#5C483B] leading-relaxed">
                Inaugurated by the Prime Minister of India, the Glory of India Cultural Centre at ISKCON Delhi houses the <strong>Astounding Bhagavad Gita</strong>—measuring 2.8 by 2.0 meters and weighing 800 kilograms.
              </p>

              <p className="text-sm sm:text-base text-[#5C483B] leading-relaxed">
                In his administrative capacity, HG Abhay Gaur Das regularly hosts national dignitaries, union ministers, and academic delegations, showcasing how ancient philosophy provides actionable solutions for modern environmental, mental, and social dilemmas.
              </p>

              <div className="pt-2">
                <Link
                  href="/connect"
                  className="inline-flex items-center text-xs font-bold text-[#C9540B] hover:text-[#E87516]"
                >
                  <span>Inquire About Cultural Delegations & Guided Visits</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
