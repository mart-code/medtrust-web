"use client";

import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { useState } from "react";

const ShieldCheckIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const SearchIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ChevronDown = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const LocationPinIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const BadgeCheckIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ShareIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const navLinks = ["Find Doctors", "Institutions", "Appointments", "Records"];

const institutions = [
  {
    id: 1,
    name: "City Health General",
    since: "Partnered Since 2018",
    tags: ["Emergency Care", "Oncology", "Cardiology"],
    accredited: true,
    img: "https://placehold.co/600x260/b2d8d8/4a9a9a?text=City+Health+General",
  },
  {
    id: 2,
    name: "Biolab Research",
    since: "Partnered Since 2020",
    tags: ["Genetics", "Diagnostics", "Research"],
    accredited: true,
    img: "https://placehold.co/600x260/c7e5d8/3a8a6a?text=Biolab+Research",
  },
  {
    id: 3,
    name: "Horizon Wellness",
    since: "Partnered Since 2022",
    tags: ["Pediatrics", "Maternity", "Imaging"],
    accredited: true,
    img: "https://placehold.co/600x260/c7d2fe/5b7dd8?text=Horizon+Wellness",
  },
];

export default function MediLinkInstitutions() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All Types");
  const [location, setLocation] = useState("Any Location");

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="py-14 px-6 text-center bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black text-gray-900 mb-4 leading-tight">World-Class Medical Institutions</h1>
          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">Connecting you with accredited hospitals and specialized clinics at the forefront of medical innovation and patient care excellence.</p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 mb-10">
        <div className="flex flex-col md:flex-row items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
          {/* Search input */}
          <div className="relative flex-1 w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <SearchIcon />
            </span>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search hospital or clinic name..." className="w-full pl-9 pr-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none" />
          </div>

          <div className="w-px h-8 bg-gray-200 hidden md:block" />

          {/* Type */}
          <div className="relative w-full md:w-44">
            <select value={type} onChange={(e) => setType(e.target.value)} className="w-full appearance-none pl-3 pr-8 py-2.5 text-sm text-gray-700 bg-transparent focus:outline-none cursor-pointer">
              <option>All Types</option>
              <option>Hospital</option>
              <option>Clinic</option>
              <option>Research Center</option>
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
              <ChevronDown />
            </span>
          </div>

          <div className="w-px h-8 bg-gray-200 hidden md:block" />

          {/* Location */}
          <div className="relative w-full md:w-48">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
              <LocationPinIcon />
            </span>
            <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full appearance-none pl-7 pr-8 py-2.5 text-sm text-gray-700 bg-transparent focus:outline-none cursor-pointer">
              <option>Any Location</option>
              <option>North America</option>
              <option>Europe</option>
              <option>Asia</option>
              <option>Africa</option>
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
              <ChevronDown />
            </span>
          </div>

          {/* Filter Button */}
          <button className="w-full md:w-auto flex-shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors">Filter Results</button>
        </div>
      </div>

      {/* Institution Cards */}
      <main className="max-w-7xl mx-auto w-full px-6 flex-1 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {institutions.map((inst) => (
            <div key={inst.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              {/* Image */}
              <div className="relative">
                <img src={inst.img} alt={inst.name} className="w-full h-48 object-cover" />
                {inst.accredited && (
                  <span className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-teal-700 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-teal-100 shadow-sm">
                    <BadgeCheckIcon />
                    JCI Accredited
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                {/* Name + since */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">{inst.name}</h3>
                  <span className="text-[11px] text-gray-400 whitespace-nowrap mt-0.5 flex-shrink-0">{inst.since}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {inst.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-2 mt-auto pt-1">
                  <button className="w-full py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold transition-colors">View Facilities</button>
                  <button className="w-full py-2.5 rounded-xl border border-gray-200 hover:border-teal-400 text-gray-700 hover:text-teal-700 text-sm font-medium transition-colors">Contact Institution</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center">
          <button className="px-8 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors">Load More Institutions</button>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </div>
  );
}
