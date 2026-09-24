'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  HeartHandshake, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Home, 
  BookOpen, 
  Calendar 
} from 'lucide-react';

export default function BhishmaPage() {
  return (
    <div className="space-y-24 pb-20">
      {/* 1. Header */}
      <section className="bg-sacred-pattern py-16 border-b border-[#F6B91A]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF1D6] text-xs font-semibold text-[#C9540B]">
            <HeartHandshake className="w-3.5 h-3.5 text-[#E87516]" />
            <span>ISKCON Delhi Life Patron Care</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#231209]">
            The Bhishma Department
          </h1>
          <p className="text-base sm:text-lg text-[#5C483B] max-w-2xl mx-auto leading-relaxed">
            Re-imagining institutional patron engagement into a deeply sacred pastoral relationship of spiritual family, gratitude, and mutual service.
          </p>
        </div>
      </section>

      {/* 2. Core Philosophy Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E87516]">
              A Revolution in Patron Stewardship
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#231209] leading-tight">
              From Transactional Fundraising to Spiritual Kinship
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#5C483B] leading-relaxed">
              <p>
                When HG Abhay Gaur Das was appointed to lead the <strong>Bhishma Department</strong> at ISKCON Delhi, he instituted a decisive cultural shift: donors and Life Patrons must never be viewed as mere financial supporters or database numbers.
              </p>
              <p>
                Named after the great grandfather <strong>Mahajana Bhishma</strong>—the epitome of steadfast righteousness, wisdom, and devotional loyalty—the department is founded on the Vedic principle of <em>sambandha</em> (loving spiritual relationship).
              </p>
              <p>
                &ldquo;Every individual who sacrifices their hard-earned wealth for the service of Sri Sri Radha Parthasarathi is entrusted to our care by Srila Prabhupada. Our duty is not to ask for further donations, but to ensure that their entire household advances happily toward Krishna consciousness.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated border-2 border-[#F6B91A]/30">
              <Image
                src="/images/166FDB66-FA22-42B0-9F49-49B745D9C20F.JPG"
                alt="Hosting patrons and dignitaries at ISKCON Delhi"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-[#786253] text-center mt-2 italic">
              HG Abhay Gaur Das hosting dignitaries and patron families at the Glory of India Cultural Centre
            </p>
          </div>
        </div>
      </section>

      {/* 3. The 4 Pillars of Bhishma Pastoral Care */}
      <section className="bg-[#FFF4E2]/70 py-16 border-y border-[#F6B91A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#E87516] font-semibold">
              Devotional Pastoral Services
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231209]">
              How the Bhishma Department Nurtures Families
            </h2>
            <p className="text-sm text-[#786253]">
              Providing comprehensive spiritual shelter to hundreds of patron households across Delhi-NCR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Home,
                title: "Home Satsang & Kirtan",
                desc: "Monks and senior devotees visit patron residences for intimate kirtans, Bhagavad Gita discourses, and sanctified prasadam blessings."
              },
              {
                icon: HeartHandshake,
                title: "Pastoral Counselling",
                desc: "Standing shoulder-to-shoulder with families during difficult times—illness, grief, career dilemmas, or spiritual doubts."
              },
              {
                icon: Sparkles,
                title: "Vedic Samskaras",
                desc: "Guidance on sacred life milestones: Vivaha (marriage blessings), Griha Pravesh (house sanctification), and Naam-karan ceremonies."
              },
              {
                icon: ShieldCheck,
                title: "Frugal Stewardship",
                desc: "Complete financial transparency with detailed quarterly impact reports demonstrating how every donated rupee serves the Lord."
              }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F6B91A]/25 shadow-subtle hover:shadow-card-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FFF1D6] text-[#C9540B] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#231209] mb-2">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-[#5C483B] leading-relaxed">{pillar.desc}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#F2ECE4] text-[11px] font-bold text-[#C9540B] flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-[#E87516]" />
                    <span>Seva Obligation</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Contact / Connect with Bhishma Care */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-serif text-3xl font-bold text-[#231209]">
          Are You an ISKCON Life Patron Seeking Guidance?
        </h2>
        <p className="text-sm text-[#5C483B] max-w-xl mx-auto">
          Reach out to schedule a home satsang, discuss spiritual queries, or connect with our patron care coordination team.
        </p>
        <div>
          <Link
            href="/connect"
            className="inline-flex items-center px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#E87516] to-[#C9540B] shadow-devotional"
          >
            <span>Connect with Bhishma Care Team</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
