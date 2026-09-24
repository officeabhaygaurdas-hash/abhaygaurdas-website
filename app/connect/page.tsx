'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  HeartHandshake, 
  Calendar,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/content';

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    purpose: 'Invite for Discourse',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Save inquiry to localStorage for Admin portal inspection
    try {
      const existing = JSON.parse(localStorage.getItem('inquiries') || '[]');
      const newInquiry = {
        id: Date.now().toString(),
        ...formData,
        submittedAt: new Date().toISOString(),
        status: 'New',
      };
      localStorage.setItem('inquiries', JSON.stringify([newInquiry, ...existing]));
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-sacred-pattern py-16 border-b border-[#F6B91A]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF1D6] text-xs font-semibold text-[#C9540B]">
            <HeartHandshake className="w-3.5 h-3.5 text-[#E87516]" />
            <span>Spiritual Engagement & Inquiries</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#231209]">
            Connect & Invite
          </h1>
          <p className="text-base sm:text-lg text-[#5C483B] max-w-2xl mx-auto leading-relaxed">
            Reach out to invite HG Abhay Gaur Das for corporate or college discourses, schedule a Bhishma patron consultation, or visit ISKCON Delhi.
          </p>
        </div>
      </section>

      {/* Main Form and Info Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#FFFDF9] rounded-3xl p-8 sm:p-10 border border-[#F6B91A]/30 shadow-subtle">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FFF1D6] text-[#E87516] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#231209]">
                  Hare Krishna! Your message has been received.
                </h3>
                <p className="text-sm text-[#5C483B] max-w-md mx-auto">
                  Thank you for reaching out. The sevaks from the secretariat at ISKCON Delhi will review your invitation and respond promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-full text-xs font-semibold text-[#C9540B] bg-[#FFF4E2] hover:bg-[#FFEEDD]"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#231209] mb-1">
                    Send an Inquiry or Invitation
                  </h3>
                  <p className="text-xs text-[#786253]">
                    Please share your details and the nature of your invitation or query.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#321B0F] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FFF9EF] border border-[#F6B91A]/30 focus:outline-none focus:border-[#E87516] text-[#231209]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#321B0F] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramesh@example.com"
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FFF9EF] border border-[#F6B91A]/30 focus:outline-none focus:border-[#E87516] text-[#231209]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#321B0F] mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FFF9EF] border border-[#F6B91A]/30 focus:outline-none focus:border-[#E87516] text-[#231209]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#321B0F] mb-1">
                      Organization / College / Temple
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. IIT Delhi / Life Patron Family"
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FFF9EF] border border-[#F6B91A]/30 focus:outline-none focus:border-[#E87516] text-[#231209]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#321B0F] mb-1">
                      Purpose of Contact
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FFF9EF] border border-[#F6B91A]/30 focus:outline-none focus:border-[#E87516] text-[#231209]"
                    >
                      <option value="Invite for Discourse">Invite for Spiritual Discourse</option>
                      <option value="Youth Seminar / Campus">Youth Workshop / Campus Seminar</option>
                      <option value="Bhishma Patron Care">Bhishma Life Patron Care</option>
                      <option value="Kurukshetra Temple">Kurukshetra Temple Project Seva</option>
                      <option value="Spiritual Guidance">Personal Spiritual Guidance</option>
                      <option value="Other">Other Institutional Matter</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#321B0F] mb-1">
                      Proposed Date / Window (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FFF9EF] border border-[#F6B91A]/30 focus:outline-none focus:border-[#E87516] text-[#231209]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#321B0F] mb-1">
                    Your Message / Invitation Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please mention audience size, preferred topic, venue location, or nature of spiritual guidance needed..."
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FFF9EF] border border-[#F6B91A]/30 focus:outline-none focus:border-[#E87516] text-[#231209]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#E87516] to-[#C9540B] shadow-devotional hover:opacity-95 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to ISKCON Delhi Secretariat</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Institutional Details & Timings */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFF4E2]/80 rounded-3xl p-8 border border-[#F6B91A]/30 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#231209]">
                Sanctuary Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#5C483B]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#E87516] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#231209]">ISKCON Sri Sri Radha Parthasarathi Mandir</p>
                    <p>Glory of India Cultural Centre, Sant Nagar, East of Kailash, New Delhi 110065, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#E87516] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#231209]">Temple Darshan Hours</p>
                    <p>4:30 AM – 1:00 PM | 4:15 PM – 9:00 PM (Daily)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#E87516] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#231209]">Secretariat & Discourse Invites</p>
                    <a
                      href="mailto:office.abhaygaurdas@gmail.com"
                      className="text-[#C9540B] font-semibold hover:underline"
                    >
                      office.abhaygaurdas@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F6B91A]/30">
                <p className="text-xs text-[#786253] italic leading-relaxed">
                  &ldquo;A spiritual master and his disciples exist to serve society. Whenever a soul approaches with genuine submissiveness, the door of the ashram is always open.&rdquo;
                </p>
              </div>
            </div>

            {/* Official Social Media Channels */}
            <div className="bg-white rounded-3xl p-7 border border-[#F6B91A]/30 shadow-subtle space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#231209]">
                    Official Digital Channels
                  </h4>
                  <p className="text-xs text-[#786253]">Follow for daily discourses & updates</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#FFEDD5] text-[#C2410C] font-mono text-xs font-bold">
                  @abhaygaurdas
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 p-3 rounded-2xl bg-[#FFF9EF] hover:bg-[#FFF4E2] border border-[#F6B91A]/30 transition-all hover:scale-105 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shadow-xs">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#231209] group-hover:text-[#DD2A7B] transition-colors">Instagram</p>
                    <p className="text-[10px] text-[#786253]">@abhaygaurdas</p>
                  </div>
                </a>

                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 p-3 rounded-2xl bg-[#FFF9EF] hover:bg-[#FFF4E2] border border-[#F6B91A]/30 transition-all hover:scale-105 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shadow-xs">
                    <Facebook className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#231209] group-hover:text-[#1877F2] transition-colors">Facebook</p>
                    <p className="text-[10px] text-[#786253]">@abhaygaurdas</p>
                  </div>
                </a>

                <a
                  href={SOCIAL_LINKS.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 p-3 rounded-2xl bg-[#FFF9EF] hover:bg-[#FFF4E2] border border-[#F6B91A]/30 transition-all hover:scale-105 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center shadow-xs">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#231209] group-hover:text-black transition-colors">X (Twitter)</p>
                    <p className="text-[10px] text-[#786253]">@abhaygaurdas</p>
                  </div>
                </a>

                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 p-3 rounded-2xl bg-[#FFF9EF] hover:bg-[#FFF4E2] border border-[#F6B91A]/30 transition-all hover:scale-105 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#FF0000] text-white flex items-center justify-center shadow-xs">
                    <Youtube className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#231209] group-hover:text-[#FF0000] transition-colors">YouTube</p>
                    <p className="text-[10px] text-[#786253]">Live Discourses</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
