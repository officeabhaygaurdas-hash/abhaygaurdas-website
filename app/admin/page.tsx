'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Users, 
  BookOpen, 
  Video, 
  Mail, 
  Calendar, 
  CheckCircle2, 
  Trash2, 
  Plus, 
  Download, 
  ArrowLeft 
} from 'lucide-react';
import { TEACHINGS_DATA, LECTURES_DATA, UPCOMING_EVENTS, GALLERY_DATA } from '@/data/content';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'inquiries' | 'teachings' | 'lectures' | 'events'>('inquiries');
  const [inquiries, setInquiries] = useState<any[]>([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('inquiries') || '[]');
      if (stored.length === 0) {
        // Mock sample inquiries if none yet
        const sample = [
          {
            id: '1',
            name: 'Dr. Vivek Sharma',
            email: 'v.sharma@du.ac.in',
            phone: '+91 98112 34567',
            organization: 'Delhi University Commerce Association',
            purpose: 'Youth Seminar / Campus',
            preferredDate: '2024-11-20',
            message: 'We would be honored to host HG Abhay Gaur Das for an interactive session on "Mindfulness and Ethics in Finance" for 300 final year students.',
            submittedAt: '2024-10-18T10:30:00Z',
            status: 'New'
          },
          {
            id: '2',
            name: 'Rajesh & Sunita Aggarwal',
            email: 'rajesh.aggarwal@patron.com',
            phone: '+91 99100 88221',
            organization: 'ISKCON Delhi Life Patron #4821',
            purpose: 'Bhishma Patron Care',
            preferredDate: '2024-11-05',
            message: 'Requesting home satsang and prasadam blessings for our son\'s upcoming wedding. Seeking guidance from Prabhuji.',
            submittedAt: '2024-10-19T14:15:00Z',
            status: 'In Review'
          }
        ];
        localStorage.setItem('inquiries', JSON.stringify(sample));
        setInquiries(sample);
      } else {
        setInquiries(stored);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleUpdateStatus = (id: string, newStatus: string) => {
    const updated = inquiries.map((inq) =>
      inq.id === id ? { ...inq, status: newStatus } : inq
    );
    setInquiries(updated);
    localStorage.setItem('inquiries', JSON.stringify(updated));
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    setInquiries(updated);
    localStorage.setItem('inquiries', JSON.stringify(updated));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#F2ECE4] gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#C9540B] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Administrative Secretariat</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#231209]">
            Temple CMS & Engagement Portal
          </h1>
        </div>

        <Link
          href="/"
          className="inline-flex items-center text-xs font-semibold text-[#786253] hover:text-[#C9540B]"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Back to Live Website
        </Link>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#F6B91A]/30 shadow-subtle">
          <p className="text-xs uppercase tracking-wider text-[#786253]">Pending Inquiries</p>
          <p className="font-serif text-3xl font-bold text-[#C9540B] mt-1">{inquiries.length}</p>
        </div>
        <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#F6B91A]/30 shadow-subtle">
          <p className="text-xs uppercase tracking-wider text-[#786253]">Published Teachings</p>
          <p className="font-serif text-3xl font-bold text-[#231209] mt-1">{TEACHINGS_DATA.length}</p>
        </div>
        <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#F6B91A]/30 shadow-subtle">
          <p className="text-xs uppercase tracking-wider text-[#786253]">Recorded Lectures</p>
          <p className="font-serif text-3xl font-bold text-[#231209] mt-1">{LECTURES_DATA.length}</p>
        </div>
        <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#F6B91A]/30 shadow-subtle">
          <p className="text-xs uppercase tracking-wider text-[#786253]">Archival Photos</p>
          <p className="font-serif text-3xl font-bold text-[#231209] mt-1">{GALLERY_DATA.length}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#F2ECE4] space-x-6 text-sm font-semibold">
        {[
          { key: 'inquiries', label: 'Inquiries & Invitations', icon: Mail },
          { key: 'teachings', label: 'Teachings & Essays', icon: BookOpen },
          { key: 'lectures', label: 'Lecture Library', icon: Video },
          { key: 'events', label: 'Events Calendar', icon: Calendar },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`pb-3 flex items-center space-x-2 border-b-2 transition-colors ${
                isActive
                  ? 'border-[#E87516] text-[#C9540B]'
                  : 'border-transparent text-[#786253] hover:text-[#231209]'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeTab === 'inquiries' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-serif text-xl font-bold text-[#231209]">
              Received Enquiries & Satsang Requests ({inquiries.length})
            </h2>
          </div>

          {inquiries.length === 0 ? (
            <div className="p-8 text-center bg-[#FFFDF9] rounded-2xl border border-[#F6B91A]/20 text-[#786253]">
              No inquiries logged yet.
            </div>
          ) : (
            inquiries.map((inq) => (
              <div
                key={inq.id}
                className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#F6B91A]/25 shadow-subtle space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-serif font-bold text-lg text-[#231209]">{inq.name}</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#FFF1D6] text-[#C9540B] font-bold">
                      {inq.purpose}
                    </span>
                    <span className={`text-[11px] px-2 py-0.5 rounded font-semibold ${
                      inq.status === 'New' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {inq.status}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <select
                      value={inq.status}
                      onChange={(e) => handleUpdateStatus(inq.id, e.target.value)}
                      className="text-xs px-2 py-1 rounded bg-[#FFF9EF] border border-[#D7CFC6] text-[#321B0F]"
                    >
                      <option value="New">Status: New</option>
                      <option value="In Review">Status: In Review</option>
                      <option value="Confirmed">Status: Confirmed</option>
                      <option value="Archived">Status: Archived</option>
                    </select>

                    <button
                      onClick={() => handleDeleteInquiry(inq.id)}
                      className="p-1.5 rounded text-red-500 hover:bg-red-50"
                      title="Delete entry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="text-xs text-[#786253] space-x-4">
                  <span><strong>Email:</strong> {inq.email}</span>
                  {inq.phone && <span><strong>Phone:</strong> {inq.phone}</span>}
                  {inq.organization && <span><strong>Org:</strong> {inq.organization}</span>}
                  {inq.preferredDate && <span><strong>Date:</strong> {inq.preferredDate}</span>}
                </div>

                <p className="text-xs sm:text-sm text-[#473429] bg-[#FFF9EF] p-4 rounded-xl border border-[#F2ECE4]">
                  {inq.message}
                </p>
              </div>
            ))
          )}
        </div>
      )}

      {activeTab === 'teachings' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-serif text-xl font-bold text-[#231209]">
              Scriptural Teachings Library ({TEACHINGS_DATA.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TEACHINGS_DATA.map((t) => (
              <div key={t.id} className="bg-[#FFFDF9] p-5 rounded-2xl border border-[#F6B91A]/20 shadow-subtle space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9540B] bg-[#FFF1D6] px-2 py-0.5 rounded">
                  {t.category}
                </span>
                <h3 className="font-serif text-base font-bold text-[#231209]">{t.title}</h3>
                <p className="text-xs text-[#786253] line-clamp-2">{t.excerpt}</p>
                <div className="text-[11px] text-[#9B8475] pt-2">
                  Published: {t.publishedDate} • {t.readingTime}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'lectures' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-serif text-xl font-bold text-[#231209]">
              Lecture & Discourse Catalog ({LECTURES_DATA.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LECTURES_DATA.map((l) => (
              <div key={l.id} className="bg-[#FFFDF9] p-5 rounded-2xl border border-[#F6B91A]/20 shadow-subtle space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-[#C9540B]">{l.topic}</span>
                  <span className="text-[#786253]">{l.duration}</span>
                </div>
                <h3 className="font-serif text-base font-bold text-[#231209]">{l.title}</h3>
                <p className="text-xs text-[#786253]">{l.location} • {l.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'events' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-serif text-xl font-bold text-[#231209]">
              Congregational Calendar ({UPCOMING_EVENTS.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {UPCOMING_EVENTS.map((e) => (
              <div key={e.id} className="bg-[#FFFDF9] p-5 rounded-2xl border border-[#F6B91A]/20 shadow-subtle space-y-2">
                <span className="text-[10px] font-bold uppercase text-[#C9540B] bg-[#FFF1D6] px-2 py-0.5 rounded">
                  {e.category}
                </span>
                <h3 className="font-serif text-base font-bold text-[#231209]">{e.title}</h3>
                <p className="text-xs text-[#5C483B]">{e.date}</p>
                <p className="text-xs text-[#786253]">{e.venue}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
