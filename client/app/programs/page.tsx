"use client";

import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { useState } from "react";



const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);





const programCards = [
  {
    icon: "psychology",
    title: "Mental Wellness",
    desc: "Institutional mental health support programs including stress management...",
    org: "St. Jude Medical Group",
  },
  {
    icon: "vaccines",
    title: "Vaccination Outreach",
    desc: "Mobile vaccination units and clinical immunization scheduling for corporate...",
    org: "Global Health Institute",
  },
  {
    icon: "favorite",
    title: "Cardiac Health",
    desc: "Early detection screenings and lifestyle coaching for cardiovascular health...",
    org: "Heart Care Alliance",
  },
  {
    icon: "elderly",
    title: "Senior Mobility",
    desc: "Physical therapy and independence support for aged populations within...",
    org: "Heritage Care Network",
  },
  {
    icon: "nutrition",
    title: "Nutritional Path",
    desc: "Specialized nutrition plans and dietary education programs for clinical patient...",
    org: "Wellness Partners",
  },
  {
    icon: "emergency",
    title: "Crisis Response",
    desc: "Rapid deployment medical support and emergency preparedness training for...",
    org: "MediLink Core",
  },
];



export default function MediLinkPrograms() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Newest First");
  const [location, setLocation] = useState("All Locations");

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Navbar */}
    <Navbar/>

      {/* Hero Section */}
      <section className="bg-linear-to-b from-slate-100 to-white py-14 px-6 text-center">
        <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">Healthcare Programs</h1>
        <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">Discover specialized health initiatives designed to provide comprehensive care and support for diverse institutional needs, from maternal health to advanced cardiac wellness.</p>
      </section>

      {/* Search & Filters */}
      <div className="max-w-5xl mx-auto w-full px-6 -mt-2 mb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-4 py-3 flex flex-col md:flex-row gap-3 items-center">
          <div className="relative flex-1 w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <SearchIcon />
            </span>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for programs, institutions, or health topics..." className="w-full pl-9 pr-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none" />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative">
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="appearance-none pl-3 pr-8 py-2.5 text-sm text-gray-700 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 cursor-pointer">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>A–Z</option>
              </select>
              <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
                <ChevronDown />
              </span>
            </div>
            <div className="relative">
              <select value={location} onChange={(e) => setLocation(e.target.value)} className="appearance-none pl-3 pr-8 py-2.5 text-sm text-gray-700 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 cursor-pointer">
                <option>All Locations</option>
                <option>North America</option>
                <option>Europe</option>
                <option>Asia</option>
              </select>
              <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
                <ChevronDown />
              </span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto w-full px-6 flex-1">
        {/* Featured Programs */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Card 1 — Maternal Care Plus */}
            <div className="relative rounded-2xl overflow-hidden min-h-56 flex flex-col justify-end bg-teal-800">
              <img src="/Maternal Care.png" alt="Maternal Care Plus" className="absolute inset-0 w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-linear-to-t from-teal-900/90 via-teal-900/30 to-transparent" />
              <div className="relative p-6">
                <span className="inline-block text-[10px] font-semibold tracking-widest uppercase bg-white/20 text-white border border-white/30 px-2.5 py-0.5 rounded-full mb-3">Active Initiative</span>
                <h3 className="text-white text-xl font-bold mb-1.5">Maternal Care Plus</h3>
                <p className="text-white/75 text-xs leading-relaxed mb-4">Comprehensive prenatal and postpartum support program integrated with leading maternity centers.</p>
                <button className="bg-white text-teal-800 text-xs font-semibold px-5 py-2 rounded-full hover:bg-teal-50 transition-colors">Enroll Now</button>
              </div>
            </div>

            {/* Card 2 — Metabolic Wellness 360 */}
            <div className="relative rounded-2xl overflow-hidden min-h-56 flex flex-col justify-end bg-blue-900">
              <img src="/Diabetes Support.png" alt="Metabolic Wellness 360" className="absolute inset-0 w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-linear-to-t from-blue-900/90 via-blue-900/30 to-transparent" />
              <div className="relative p-6">
                <span className="inline-block text-[10px] font-semibold tracking-widest uppercase bg-white/20 text-white border border-white/30 px-2.5 py-0.5 rounded-full mb-3">High Impact</span>
                <h3 className="text-white text-xl font-bold mb-1.5">Metabolic Wellness 360</h3>
                <p className="text-white/75 text-xs leading-relaxed mb-4">A data-driven approach to diabetes management and metabolic health through continuous monitoring.</p>
                <button className="bg-white text-blue-900 text-xs font-semibold px-5 py-2 rounded-full hover:bg-blue-50 transition-colors">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        {/* All Programs */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-5">All Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {programCards.map(({ icon, title, desc, org }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                  <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                    {icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
                <div className="flex items-center gap-2 mt-auto pt-1">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex-shrink-0" />
                  <span className="text-xs text-gray-400">{org}</span>
                </div>
                <button className="w-full py-2 rounded-xl border border-teal-600 text-teal-700 text-sm font-semibold hover:bg-teal-50 transition-colors">Learn More</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
     <Footer/>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </div>
  );
}
