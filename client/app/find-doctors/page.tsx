'use client'

import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { useState } from "react";

const ShieldCheckIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const SearchIcon = ({ size = 16 }) => (
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

const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const BadgeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const SortIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="21" y1="10" x2="7" y2="10" />
    <line x1="21" y1="6" x2="3" y2="6" />
    <line x1="21" y1="14" x2="3" y2="14" />
    <line x1="21" y1="18" x2="7" y2="18" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const navLinks = ["Find Doctors", "Institutions", "Appointments", "Records"];

const doctors = [
  {
    id: 1,
    name: "Dr. Marcus Chen",
    specialty: "Senior Cardiologist",
    experience: "15+ years experience",
    rating: "4.9",
    reviews: "230 reviews",
    availability: "Available Today",
    availColor: "text-teal-700 bg-teal-50 border-teal-200",
    img: "https://placehold.co/80x80/b2d8d8/4a9a9a?text=MC",
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    specialty: "Pediatrician",
    experience: "10+ years experience",
    rating: "4.8",
    reviews: "185 reviews",
    availability: "Available Today",
    availColor: "text-teal-700 bg-teal-50 border-teal-200",
    img: "https://placehold.co/80x80/b2d8d8/4a9a9a?text=SJ",
  },
  {
    id: 3,
    name: "Dr. Michael Vance",
    specialty: "Psychiatrist",
    experience: "20+ years experience",
    rating: "5.0",
    reviews: "112 reviews",
    availability: "Next: This Week",
    availColor: "text-blue-700 bg-blue-50 border-blue-200",
    img: "https://placehold.co/80x80/c7d2fe/5b7dd8?text=MV",
  },
  {
    id: 4,
    name: "Dr. Amara Okoro",
    specialty: "Neurologist",
    experience: "8+ years experience",
    rating: "4.7",
    reviews: "98 reviews",
    availability: "Available Today",
    availColor: "text-teal-700 bg-teal-50 border-teal-200",
    img: "https://placehold.co/80x80/b2d8d8/4a9a9a?text=AO",
  },
];

export default function MediLinkFindDoctors() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All Specialties");
  const [rating, setRating] = useState("Any Rating");
  const [availability, setAvailability] = useState("Any Time");

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="bg-linear-to-br from-slate-100 via-teal-50/40 to-white pt-12 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black text-gray-900 mb-3 leading-tight">
            Find the Right <span className="text-teal-600 italic font-bold">Specialist</span>
          </h1>
          <p className="text-gray-500 text-sm max-w-sm leading-relaxed">Connect with world-class medical professionals who provide personalized care tailored to your unique health journey.</p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 -mt-2 mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Doctors */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">Search Doctors</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <SearchIcon size={14} />
                </span>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Name, specialty..." className="w-full pl-8 pr-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400" />
              </div>
            </div>

            {/* Specialty */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">Specialty</label>
              <div className="relative">
                <select value={specialty} onChange={(e) => setSpecialty(e.target.value)} className="w-full appearance-none pl-3 pr-8 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-700 cursor-pointer">
                  <option>All Specialties</option>
                  <option>Cardiology</option>
                  <option>Pediatrics</option>
                  <option>Neurology</option>
                  <option>Psychiatry</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <ChevronDown />
                </span>
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">Rating</label>
              <div className="relative">
                <select value={rating} onChange={(e) => setRating(e.target.value)} className="w-full appearance-none pl-3 pr-8 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-700 cursor-pointer">
                  <option>Any Rating</option>
                  <option>4.5+</option>
                  <option>4.0+</option>
                  <option>3.5+</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <ChevronDown />
                </span>
              </div>
            </div>

            {/* Availability */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">Availability</label>
              <div className="relative">
                <select value={availability} onChange={(e) => setAvailability(e.target.value)} className="w-full appearance-none pl-3 pr-8 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-700 cursor-pointer">
                  <option>Any Time</option>
                  <option>Available Today</option>
                  <option>This Week</option>
                  <option>This Month</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <ChevronDown />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto w-full px-6 flex-1 pb-16">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-baseline gap-2">
            <h2 className="text-lg font-bold text-gray-900">Available Specialists</h2>
            <span className="text-sm text-gray-400">(124 found)</span>
          </div>
          <button className="flex items-center gap-1.5 text-sm text-teal-600 font-medium hover:text-teal-800 transition-colors">
            <SortIcon />
            Sort by: Recommended
          </button>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {doctors.map((doc) => (
            <div key={doc.id} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col gap-3">
              {/* Top row: avatar + rating */}
              <div className="flex items-start justify-between">
                <div className="relative">
                  <img src={doc.img} alt={doc.name} className="w-16 h-16 rounded-xl object-cover" />
                  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white" />
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <StarIcon />
                    <span className="text-sm font-bold text-gray-800">{doc.rating}</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5">{doc.reviews}</p>
                </div>
              </div>

              {/* Name & specialty */}
              <div>
                <h3 className="text-base font-bold text-gray-900">{doc.name}</h3>
                <p className="text-sm text-teal-600 font-medium">{doc.specialty}</p>
              </div>

              {/* Experience */}
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <BadgeIcon />
                <span>{doc.experience}</span>
              </div>

              {/* Availability badge */}
              <div>
                <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-lg border ${doc.availColor}`}>
                  <CalendarIcon />
                  {doc.availability}
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2 mt-auto">
                <button className="w-full py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold transition-colors">Book Appointment</button>
                <button className="w-full py-2.5 rounded-xl border border-gray-200 hover:border-teal-400 text-gray-700 hover:text-teal-700 text-sm font-medium transition-colors">View Profile</button>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors">
            View More Specialists
            <ChevronDown />
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </div>
  );
}
