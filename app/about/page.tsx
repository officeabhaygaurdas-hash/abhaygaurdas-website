'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Scroll, 
  Users, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  BookOpen, 
  Quote, 
  Filter
} from 'lucide-react';
import { BIOGRAPHY_DATA, TIMELINE_DATA } from '@/data/content';

export default function AboutPage() {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Foundation', 'Gurukula', 'Education', 'Youth', 'Leadership', 'Projects'];

  const filteredTimeline = filterCategory === 'All' 
    ? TIMELINE_DATA 
    : TIMELINE_DATA.filter(item => item.category === filterCategory);

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Header Banner */}
      <section className="bg-sacred-pattern py-16 border-b border-[#F6B91A]/20">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF1D6] border border-[#F6B91A]/30 text-xs font-semibold text-[#C9540B]">
            <span>Monastic Biography & Sacred Journey</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#231209]">
            HG Abhay Gaur Das
          </h1>
          <p className="text-base sm:text-lg text-[#5C483B] max-w-2xl mx-auto leading-relaxed">
            A comprehensive chronicling of early life, nine years in Vrindavan Gurukula, Delhi University education, youth preaching, and leadership at ISKCON Delhi.
          </p>
        </div>
      </section>

      {/* 2. Editorial Portrait & Executive Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated border-2 border-[#F6B91A]/30 bg-[#FFF4E2]">
              <Image
                src="/images/1000170724.jpeg"
                alt="HG Abhay Gaur Das portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-3 p-4 rounded-xl bg-[#FFF9EF] border border-[#F6B91A]/20 text-xs text-[#786253]">
              <p className="font-serif font-bold text-sm text-[#231209]">HG Abhay Gaur Das</p>
              <p className="text-[#C9540B] font-medium">Born 1994, Khatauli, UP • Dedicated Monk & CFO</p>
              <p className="mt-1 italic">ISKCON Sri Sri Radha Parthasarathi Mandir, New Delhi</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231209]">
              The Consecration of Skill & Spirit
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#5C483B] leading-relaxed">
              <p>
                In the Gaudiya Vaishnava tradition, spiritual life is not an abdication of responsibility, but its highest sanctification. The life of <strong>HG Abhay Gaur Das</strong> reflects the harmonious meeting point between ancient Vedic discipline and modern administrative excellence.
              </p>
              <p>
                Having spent nine formative years from Class III to XII in the austere, prayer-filled atmosphere of the <strong>Bhaktivedanta Gurukula in Vrindavan</strong>, his foundational instincts were sculpted by early morning Mangala Arati, Sanskrit recitations, Vaishnava etiquette, and cow protection.
              </p>
              <p>
                When he transitioned to Delhi for higher education—earning his B.Com and pursuing professional Company Secretary (CS) credentials—he lived not in secular student accommodation, but at the ISKCON Youth Forum BASE in Laxmi Nagar. There, his natural acumen for systems, financial stewardship, and student mentoring flourished.
              </p>
              <p>
                Under the loving guidance and direct instructions of <strong>His Holiness Gopal Krishna Goswami Maharaj (1944–2024)</strong>, he accepted the vows of monastic celibacy (brahmacharya) at ISKCON Delhi. Today, he steers three critical institutional pillars: the Chief Financial Officer (CFO) portfolio of ISKCON Delhi, the Bhishma Donor Care department, and the monumental Sri Krishna-Arjuna Temple development at Kurukshetra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep-Dive 14-Part Narrative */}
      <section className="bg-[#FFFDF9] py-16 border-y border-[#F6B91A]/20">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#E87516] font-semibold">
              The Living Narrative
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231209]">
              Chapters of a Dedicated Life
            </h2>
          </div>

          {/* Chapter 1 & 2 */}
          <div className="bg-[#FFF9EF] p-8 rounded-2xl border border-[#F6B91A]/20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C9540B]">Chapters 1 & 2</span>
            <h3 className="font-serif text-2xl font-bold text-[#231209]">
              Vaishnava Roots in Khatauli & The Seed of Prabhupada&apos;s Books (1994–1999)
            </h3>
            <p className="text-sm text-[#5C483B] leading-relaxed">
              Born in 1994 in Khatauli, Muzaffarnagar district, Uttar Pradesh, Abhay Gaur Das grew up in a pious Hindu household where the worship of Sri Sri Radha-Madhava and hospitality toward visiting sadhus were ingrained customs. In 1999, his father visited the holy town of Vrindavan and enrolled as a Life Patron at ISKCON Sri Sri Krishna Balarama Mandir. Through the monthly copies of <em>Back to Godhead</em> magazine delivered to their home, the profound philosophy of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada entered his childhood consciousness.
            </p>
          </div>

          {/* Chapter 3 & 4 */}
          <div className="bg-[#FFF9EF] p-8 rounded-2xl border border-[#F6B91A]/20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C9540B]">Chapters 3 & 4</span>
            <h3 className="font-serif text-2xl font-bold text-[#231209]">
              Nine Formative Years in Vrindavan Gurukula (2003–2012)
            </h3>
            <p className="text-sm text-[#5C483B] leading-relaxed">
              Recognizing their young son&apos;s spiritual inclination, his parents enrolled him at the <strong>Bhaktivedanta Gurukula and International School (BGIS)</strong> in Raman Reti, Vrindavan, starting in Class III. For nine uninterrupted years until Class XII, he lived under strict monastic student discipline. Daily life began at 4:00 AM with Mangala Arati, followed by japa chanting of the Hare Krishna Mahamantra, temple parikrama, and memorization of Bhagavad Gita and Srimad Bhagavatam shlokas. This rigorous spiritual culture was seamlessly integrated with the demanding ICSE and ISC curriculum, debates, athletics, and cultural arts.
            </p>
          </div>

          {/* Chapter 5 & 6 */}
          <div className="bg-[#FFF9EF] p-8 rounded-2xl border border-[#F6B91A]/20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C9540B]">Chapters 5 & 6</span>
            <h3 className="font-serif text-2xl font-bold text-[#231209]">
              Higher Education in Delhi & The Laxmi Nagar BASE (2012–2015)
            </h3>
            <p className="text-sm text-[#5C483B] leading-relaxed">
              Following completion of his schooling in Vrindavan, he relocated to the national capital to pursue a Bachelor of Commerce (B.Com) at Delhi University while simultaneously preparing for the rigorous examinations of the Institute of Company Secretaries of India (ICSI). During these university years, he chose to live at the <strong>Laxmi Nagar BASE (Bhaktivedanta Academy for Science and Education)</strong>—a student ashram run by the ISKCON Youth Forum. There, amidst study schedules, he helped organize weekly student satsangs, cooked sanctified prasadam for hostellers, and guided collegiate peers through life decisions.
            </p>
          </div>

          {/* Chapter 7 & 8 */}
          <div className="bg-[#FFF9EF] p-8 rounded-2xl border border-[#F6B91A]/20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C9540B]">Chapters 7 & 8</span>
            <h3 className="font-serif text-2xl font-bold text-[#231209]">
              Full-Time Surrender & &lsquo;Shreshtha&rsquo; Mentorship for CA/CS Students (2015–2018)
            </h3>
            <p className="text-sm text-[#5C483B] leading-relaxed">
              Upon graduating, when lucrative corporate career pathways opened, Abhay Gaur Das felt the clear inner calling to dedicate his entire youth and administrative faculties to the mission of Lord Chaitanya Mahaprabhu. With the blessings of his family and spiritual master, he moved into ISKCON Sri Sri Radha Parthasarathi Mandir at Sant Nagar, East of Kailash, as a resident brahmachari monk. Identifying the severe stress and existential isolation faced by commerce and finance students in Delhi, he founded <em>&lsquo;Shreshtha&rsquo;</em>—a specialized value education forum providing CA and CS aspirants with mental clarity, ethical frameworks, and peer brotherhood.
            </p>
          </div>

          {/* Chapter 9 & 10 */}
          <div className="bg-[#FFF9EF] p-8 rounded-2xl border border-[#F6B91A]/20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C9540B]">Chapters 9 & 10</span>
            <h3 className="font-serif text-2xl font-bold text-[#231209]">
              The Historic Youth Festivals & Udgaar 2019 World Record
            </h3>
            <p className="text-sm text-[#5C483B] leading-relaxed">
              Recognizing his organizational mastery, the temple leadership entrusted him with key roles in large-scale youth conclaves. In 2017, he led the organizing team for the Siri Fort Youth Festival (2,000+ students), followed by the 2018 IG Stadium convention (5,000+ students). In October 2019, he served as lead coordinator for <strong>&ldquo;Udgaar: An Expression of Goodness&rdquo;</strong> at the Indira Gandhi Indoor Stadium. Attended by over 15,000 students from more than 100 colleges and addressed by Union Cabinet Minister Dr. Harsh Vardhan, Udgaar earned recognition in the <em>World Book of Records</em> as one of the largest youth gatherings for anti-addiction and moral revival in Indian history.
            </p>
          </div>

          {/* Chapter 11 & 12 */}
          <div className="bg-[#FFF9EF] p-8 rounded-2xl border border-[#F6B91A]/20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C9540B]">Chapters 11 & 12</span>
            <h3 className="font-serif text-2xl font-bold text-[#231209]">
              Sacred Financial Stewardship (CFO) & Bhishma Donor Care (2020–Present)
            </h3>
            <p className="text-sm text-[#5C483B] leading-relaxed">
              During the unprecedented challenges of the 2020 Covid-19 pandemic, His Holiness Gopal Krishna Goswami Maharaj formally appointed HG Abhay Gaur Das as Chief Financial Officer (CFO) of ISKCON Delhi. Embracing his Guru&apos;s timeless principle that temple funds represent consecrated Lakshmi, he modernized internal accounting systems, established multi-tier audit protocols, and safeguarded complete transparency. Simultaneously, he took charge of the <strong>Bhishma Donor Care Department</strong>, completely revitalizing donor engagement from transactional fund-raising to profound devotional family care through home satsangs, scriptural counseling, and life-cycle samskaras.
            </p>
          </div>

          {/* Chapter 13 & 14 */}
          <div className="bg-[#FFF9EF] p-8 rounded-2xl border border-[#F6B91A]/20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C9540B]">Chapters 13 & 14</span>
            <h3 className="font-serif text-2xl font-bold text-[#231209]">
              Kurukshetra Temple Vision & Guru Maharaj&apos;s Eternal Shelter
            </h3>
            <p className="text-sm text-[#5C483B] leading-relaxed">
              Presently, he also leads project finance and key donor coordination for the monumental <strong>Sri Krishna-Arjuna Temple and Cultural Complex</strong> being constructed at Jyotisar, Kurukshetra—the sacred ground where Lord Krishna spoke the Bhagavad Gita. Following the sacred departure of his spiritual master, HH Gopal Krishna Goswami Maharaj, in May 2024, HG Abhay Gaur Das remains resolutely dedicated to fulfilling his Guru&apos;s visionary legacy: expanding book distribution, training youth, stewarding temple resources with integrity, and serving the Vaishnava assembly with unalloyed humility.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Interactive Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <p className="text-xs uppercase tracking-widest text-[#E87516] font-semibold">
            Chronological Journey
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231209]">
            Milestones of Devotional Service (1994 – Present)
          </h2>
          <p className="text-sm text-[#786253]">
            Filter through the major epochs of his spiritual education, youth movement, and institutional leadership.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  filterCategory === cat
                    ? 'bg-[#E87516] text-white shadow-sm'
                    : 'bg-[#FFF4E2] text-[#473429] hover:bg-[#FFEEDD] border border-[#F6B91A]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-[#E87516]/40 ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-10">
          {filteredTimeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Year marker on left */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
                <span className="font-serif font-bold text-sm text-[#C9540B]">{item.year}</span>
              </div>

              {/* Dot on timeline */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#FFF9EF] border-2 border-[#E87516] group-hover:bg-[#E87516] transition-colors" />

              <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#F6B91A]/20 shadow-subtle hover:shadow-card-hover transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="sm:hidden font-serif font-bold text-sm text-[#C9540B]">{item.year}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FFF1D6] text-[#C9540B]">
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold text-[#786253]">{item.role}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#231209] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5C483B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Guru-Parampara Devotion Section */}
      <section className="bg-gradient-to-br from-[#231209] to-[#321B0F] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#E87516] mx-auto flex items-center justify-center text-white">
            <Quote className="w-6 h-6" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Under the Divine Shelter of Guru Maharaj
          </h2>

          <p className="text-base text-[#D7CFC6] max-w-3xl mx-auto leading-relaxed italic">
            &ldquo;Whatever small capacity for organization, clarity of accounting, or love for the youth exists within me is entirely the mercy of my spiritual master, His Holiness Gopal Krishna Goswami Maharaj, and Srila Prabhupada. My only aspiration is to remain an obedient instrument in their hands.&rdquo;
          </p>

          <p className="text-xs uppercase tracking-widest text-[#FFD35A] font-bold">
            — HG Abhay Gaur Das
          </p>
        </div>
      </section>
    </div>
  );
}
