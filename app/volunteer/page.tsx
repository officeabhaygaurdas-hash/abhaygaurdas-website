'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  HeartHandshake, 
  Users, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  Send, 
  Calendar, 
  Palette, 
  Video, 
  PenTool, 
  Layers,
  ArrowRight,
  ShieldCheck,
  Mail
} from 'lucide-react';

const VOLUNTEER_WINGS = [
  {
    id: 'events',
    title: 'Youth Events & Mega Festivals',
    tagline: 'Udgaar, Viplav & Campus Conventions',
    icon: Users,
    color: 'from-[#FB923C] to-[#EA580C]',
    border: 'border-[#FDBA74]/70 hover:border-[#EA580C]',
    bg: 'bg-gradient-to-br from-[#FFF8F0] via-white to-[#FFF4E5]/60',
    desc: 'Support on-ground logistics, delegate registrations, stage management, VIP protocol, and crowd coordination for 10,000+ attendee youth conventions.',
    skills: ['Crowd Coordination', 'Stage Production', 'Hospitality', 'Logistics Management']
  },
  {
    id: 'media',
    title: 'Digital Media & Visual Design',
    tagline: 'Graphic Design, Reels & Storytelling',
    icon: Palette,
    color: 'from-[#F87171] to-[#DC2626]',
    border: 'border-[#FCA5A5]/70 hover:border-[#DC2626]',
    bg: 'bg-gradient-to-br from-[#FEF2F2] via-white to-[#FEE2E2]/60',
    desc: 'Craft impactful banners, social media carousels, video shorts/reels, podcast edits, and devotional posters that communicate Vedic wisdom to contemporary youth.',
    skills: ['Graphic Design (Canva/Figma/Photoshop)', 'Video Editing (Premiere/CapCut)', 'Short-form Storytelling']
  },
  {
    id: 'content',
    title: 'Content Writing & Research',
    tagline: 'Scriptural Articles & Press Releases',
    icon: PenTool,
    color: 'from-[#FBBF24] to-[#D97706]',
    border: 'border-[#FCD34D]/70 hover:border-[#D97706]',
    bg: 'bg-gradient-to-br from-[#FFFBEB] via-white to-[#FEF3C7]/60',
    desc: 'Research, transcribe, and write accessible articles, discourse summaries, student study guides, and press communications bridging timeless Gita principles with modern dilemmas.',
    skills: ['Creative & Editorial Writing', 'Transcription', 'Research', 'SEO Fundamentals']
  },
  {
    id: 'patron',
    title: 'Bhishma Pastoral & Donor Care Seva',
    tagline: 'Life Patron Hospitality & Family Satsangs',
    icon: HeartHandshake,
    color: 'from-[#FB7185] to-[#E11D48]',
    border: 'border-[#FDA4AF]/70 hover:border-[#E11D48]',
    bg: 'bg-gradient-to-br from-[#FFF1F2] via-white to-[#FFE4E6]/60',
    desc: 'Assist in coordinating patron gatherings, deepotsava celebrations, personalized spiritual gift distributions, and patron relationship management under Prabhuji’s stewardship.',
    skills: ['Devotee Relations', 'Communication', 'Database Management', 'Event Planning']
  }
];

export default function VolunteerPage() {
  const [selectedWing, setSelectedWing] = useState('events');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    collegeOrOrg: '',
    selectedWing: 'events',
    portfolioLink: '',
    availabilityHours: '5-10 hours / week',
    statement: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 pb-24">
      {/* Header Banner */}
      <section className="bg-sacred-pattern py-16 sm:py-20 border-b border-[#F6B91A]/20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#FED7AA]/30 via-[#FEE2E2]/20 to-[#FEF3C7]/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFF1D6] border border-[#F6B91A]/40 text-xs font-bold text-[#C9540B] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E87516]" />
            <span className="uppercase tracking-widest text-[11px]">Volunteer. Learn. Serve.</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#231209]">
            Volunteer &amp; Seva Opportunities
          </h1>

          <p className="text-base sm:text-lg text-[#5C483B] max-w-2xl mx-auto leading-relaxed">
            Turn your talent into sacred impact while developing real-world leadership skills. Join Prabhuji&apos;s youth &amp; institutional stewardship teams across Delhi-NCR.
          </p>
        </div>
      </section>

      {/* Why Volunteer? 3 Core Value Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-[#FFF9F2] via-white to-[#FFF4E8] rounded-2xl p-7 border-2 border-[#E87516]/30 shadow-subtle hover:shadow-card-hover transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E87516] to-[#C9540B] text-white flex items-center justify-center shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#231209]">Official Certificate &amp; LOR</h3>
            <p className="text-xs sm:text-sm text-[#786253] leading-relaxed">
              Earn an official Certificate of Seva and Letter of Recommendation (LOR) from ISKCON Delhi, recognized across academic institutions and corporate employers.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#FFF5F5] via-white to-[#FEE2E2] rounded-2xl p-7 border-2 border-[#EF4444]/30 shadow-subtle hover:shadow-card-hover transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#DC2626] to-[#991B1B] text-white flex items-center justify-center shadow-md">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#231209]">Personal Mentorship</h3>
            <p className="text-xs sm:text-sm text-[#786253] leading-relaxed">
              Work closely with senior mentors and gain direct spiritual and managerial guidance from HG Abhay Gaur Das on character building and focus.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#FFFDF0] via-white to-[#FEF3C7] rounded-2xl p-7 border-2 border-[#F59E0B]/30 shadow-subtle hover:shadow-card-hover transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D97706] to-[#B45309] text-white flex items-center justify-center shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#231209]">Hands-on Project Leadership</h3>
            <p className="text-xs sm:text-sm text-[#786253] leading-relaxed">
              Gain live experience on state-of-the-art festivals like Udgaar, multimedia design campaigns, and donor stewardship systems.
            </p>
          </div>
        </div>
      </section>

      {/* Available Seva Wings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs uppercase tracking-widest text-[#E87516] font-bold">Open Seva Wings</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231209]">
            Choose Your Field of Contribution
          </h2>
          <p className="text-sm text-[#786253]">
            Whether you are a student, young professional, or creative artist, offer your skills in Lord Krishna&apos;s service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VOLUNTEER_WINGS.map((wing) => {
            const Icon = wing.icon;
            return (
              <div
                key={wing.id}
                className={`relative rounded-3xl p-8 border-2 ${wing.border} ${wing.bg} shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group overflow-hidden`}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${wing.color} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#9A3412]">
                        {wing.tagline}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#231209] leading-snug">
                        {wing.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C483B] leading-relaxed">
                    {wing.desc}
                  </p>

                  <div className="pt-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#786253] mb-2">Key Competencies:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {wing.skills.map((sk) => (
                        <span key={sk} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/80 border border-[#F6B91A]/35 text-[#473429]">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2ECE4] flex items-center justify-between">
                  <span className="text-xs text-[#786253] font-medium flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#E87516]" />
                    Applications Open
                  </span>
                  <a
                    href="#apply-form"
                    onClick={() => {
                      setSelectedWing(wing.id);
                      setFormData(prev => ({ ...prev, selectedWing: wing.id }));
                    }}
                    className="px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#E87516] to-[#C9540B] shadow-sm hover:opacity-95 transition-all"
                  >
                    Select This Wing
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#E87516]/40 shadow-devotional space-y-8 relative overflow-hidden">
          <span className="absolute top-3 left-3 text-sm text-[#E87516]/50 font-serif">✥</span>
          <span className="absolute top-3 right-3 text-sm text-[#E87516]/50 font-serif">✥</span>
          <span className="absolute bottom-3 left-3 text-sm text-[#E87516]/50 font-serif">✥</span>
          <span className="absolute bottom-3 right-3 text-sm text-[#E87516]/50 font-serif">✥</span>

          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFF1D6] text-xs font-bold text-[#C9540B]">
              <Send className="w-3.5 h-3.5 text-[#E87516]" />
              <span>Seva Application Portal</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231209]">
              Apply for Volunteer Seva / Internship
            </h2>
            <p className="text-xs sm:text-sm text-[#786253]">
              Fill out this simple form. Our youth volunteer coordination team will review your application within 48 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-[#FFF8F0] border-2 border-[#E87516]/40 text-center space-y-4 animate-in fade-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E87516] to-[#C9540B] text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#231209]">
                Hare Krishna! Application Received
              </h3>
              <p className="text-sm text-[#5C483B] max-w-md mx-auto leading-relaxed">
                Thank you for offering your talents in devotional service. The secretariat team will contact you via WhatsApp and email (<strong className="text-[#C9540B]">office.abhaygaurdas@gmail.com</strong>) with the next onboarding details.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#E87516] hover:bg-[#C9540B] transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#321B0F] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-[#F6B91A]/40 bg-[#FFFDF9] text-xs sm:text-sm text-[#231209] focus:outline-none focus:border-[#E87516]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#321B0F] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rahul@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#F6B91A]/40 bg-[#FFFDF9] text-xs sm:text-sm text-[#231209] focus:outline-none focus:border-[#E87516]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#321B0F] mb-1.5">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-[#F6B91A]/40 bg-[#FFFDF9] text-xs sm:text-sm text-[#231209] focus:outline-none focus:border-[#E87516]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#321B0F] mb-1.5">
                    College / Organization &amp; City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.collegeOrOrg}
                    onChange={(e) => setFormData({ ...formData, collegeOrOrg: e.target.value })}
                    placeholder="e.g. Hansraj College, DU / Delhi-NCR"
                    className="w-full px-4 py-3 rounded-xl border border-[#F6B91A]/40 bg-[#FFFDF9] text-xs sm:text-sm text-[#231209] focus:outline-none focus:border-[#E87516]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#321B0F] mb-1.5">
                    Select Preferred Seva Wing *
                  </label>
                  <select
                    value={formData.selectedWing}
                    onChange={(e) => setFormData({ ...formData, selectedWing: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#F6B91A]/40 bg-[#FFFDF9] text-xs sm:text-sm text-[#231209] focus:outline-none focus:border-[#E87516]"
                  >
                    <option value="events">Youth Events &amp; Festival Coordination</option>
                    <option value="media">Digital Media &amp; Graphic Design</option>
                    <option value="content">Content Writing &amp; Research</option>
                    <option value="patron">Bhishma Pastoral &amp; Donor Care</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#321B0F] mb-1.5">
                    Weekly Availability
                  </label>
                  <select
                    value={formData.availabilityHours}
                    onChange={(e) => setFormData({ ...formData, availabilityHours: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#F6B91A]/40 bg-[#FFFDF9] text-xs sm:text-sm text-[#231209] focus:outline-none focus:border-[#E87516]"
                  >
                    <option value="3-5 hours / week">3 – 5 hours / week</option>
                    <option value="5-10 hours / week">5 – 10 hours / week (Recommended)</option>
                    <option value="10-15 hours / week">10 – 15 hours / week</option>
                    <option value="Full-time event intern">Full-time event intern (During festivals)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#321B0F] mb-1.5">
                  Portfolio / CV Link (Google Drive / LinkedIn / Behance)
                </label>
                <input
                  type="url"
                  value={formData.portfolioLink}
                  onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
                  placeholder="https://drive.google.com/... or linkedin.com/in/..."
                  className="w-full px-4 py-3 rounded-xl border border-[#F6B91A]/40 bg-[#FFFDF9] text-xs sm:text-sm text-[#231209] focus:outline-none focus:border-[#E87516]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#321B0F] mb-1.5">
                  Why do you wish to volunteer with HG Abhay Gaur Das&apos;s team?
                </label>
                <textarea
                  rows={3}
                  value={formData.statement}
                  onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                  placeholder="Share your interests, devotional background, or specific skills you would like to offer..."
                  className="w-full px-4 py-3 rounded-xl border border-[#F6B91A]/40 bg-[#FFFDF9] text-xs sm:text-sm text-[#231209] focus:outline-none focus:border-[#E87516]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#E87516] via-[#D97706] to-[#C9540B] shadow-devotional hover:opacity-95 transition-opacity"
                >
                  Submit Volunteer Application
                </button>
              </div>

              <p className="text-center text-xs text-[#786253]">
                Direct questions? Email the secretariat at{' '}
                <a href="mailto:office.abhaygaurdas@gmail.com" className="font-bold text-[#C9540B] underline">
                  office.abhaygaurdas@gmail.com
                </a>
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
