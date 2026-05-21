'use client'

import Link from "next/link";
import { useState } from "react";

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export default function MediLinkSignup() {
  const [role, setRole] = useState("patient");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Main Layout */}
      <div className="flex min-h-screen">
        {/* Left Panel — Hero Image */}
        <div className="relative hidden lg:flex lg:w-1/2 bg-teal-800 overflow-hidden">
          <img src="/Modern Medical Center.png" alt="Hospital corridor" className="absolute inset-0 w-full h-full object-cover opacity-60" />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-b from-teal-900/60 via-transparent to-teal-900/80" />

          {/* Logo */}
          <div className="absolute top-8 left-8 flex items-center gap-2 text-white">
            <ShieldIcon />
            <span className="text-lg font-semibold tracking-tight">MediLink</span>
          </div>

          {/* Bottom Card */}
          <div className="absolute bottom-12 left-8 right-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h2 className="text-white text-2xl font-bold leading-snug mb-3">
                Precision in Care,
                <br />
                Privacy in Data.
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">Join a network of over 15,000 certified healthcare professionals and millions of patients finding trust in modern medicine.</p>
            </div>
          </div>
        </div>

        {/* Right Panel — Form */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 xl:px-24 bg-white">
          {/* Mobile Logo */}
          <div className="flex items-center gap-2 text-teal-700 mb-10 lg:hidden">
            <ShieldIcon />
            <span className="text-lg font-semibold tracking-tight">MediLink</span>
          </div>

          <div className="max-w-md w-full mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Create Account</h1>
            <p className="text-gray-500 text-sm mb-8">Join the future of healthcare technology.</p>

            {/* Role Toggle */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              <button onClick={() => setRole("patient")} className={`flex flex-col items-center gap-1.5 py-4 rounded-xl border text-sm font-medium transition-all ${role === "patient" ? "border-teal-600 bg-teal-50 text-teal-700" : "border-gray-200 text-gray-500 hover:border-gray-300"}`}>
                <span className="material-symbols-outlined text-xl">person</span>
                Patient
              </button>
              <button onClick={() => setRole("doctor")} className={`flex flex-col items-center gap-1.5 py-4 rounded-xl border text-sm font-medium transition-all ${role === "doctor" ? "border-teal-600 bg-teal-50 text-teal-700" : "border-gray-200 text-gray-500 hover:border-gray-300"}`}>
                <span className="material-symbols-outlined text-xl">medical_services</span>
                Doctor
              </button>
            </div>

            {/* Full Name */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Dr. Jane Smith"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@medilink.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" aria-label={showPassword ? "Hide password" : "Show password"}>
                  <span className="material-symbols-outlined text-xl">{showPassword ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <label className="flex items-start gap-3 mb-6 cursor-pointer">
              <div className="relative mt-0.5">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="sr-only" />
                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${agreed ? "bg-teal-600 border-teal-600" : "border-gray-300 bg-white"}`}>
                  {agreed && (
                    <span className="material-symbols-outlined text-white" style={{ fontSize: "12px" }}>
                      check
                    </span>
                  )}
                </div>
              </div>
              <span className="text-xs text-gray-500 leading-relaxed">
                I agree to the{" "}
                <a href="#" className="text-teal-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-teal-600 hover:underline">
                  Privacy Policy
                </a>
                , including data processing for HIPAA compliance.
              </span>
            </label>

            {/* Submit Button */}
            <button type="button" className="w-full py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold tracking-wide transition-colors shadow-sm">
              Create Secure Account
            </button>

            {/* Sign In Link */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-teal-600 font-medium hover:underline">
                Sign In
              </Link>
            </p>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <ShieldIcon />
                <span className="uppercase tracking-widest font-medium text-[10px]">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <LockIcon />
                <span className="uppercase tracking-widest font-medium text-[10px]">256-Bit Encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 text-teal-700 mb-3">
                <ShieldIcon />
                <span className="font-semibold text-sm tracking-tight">MediLink</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">Trust and Precision in Care for the modern medical age.</p>
            </div>

            {/* Links */}
            {[
              { heading: "Platform", links: ["Find Doctors", "Institutions", "Programs"] },
              { heading: "Resources", links: ["Help Center", "Whitepapers", "Privacy"] },
              { heading: "Security", links: ["Encryption", "HIPAA", "Uptime"] },
              { heading: "Contact", links: ["Support", "Partners", "Legal"] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p className="text-xs font-semibold text-gray-700 mb-3">{heading}</p>
                <ul className="space-y-2">
                  {links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-xs text-gray-400 hover:text-teal-600 transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-6 gap-4">
            <p className="text-xs text-gray-400">© 2024 MediLink Healthcare Platform. Trust and Precision in Care.</p>
            <div className="flex items-center gap-4 text-gray-400">
              <button aria-label="Share" className="hover:text-teal-600 transition-colors">
                <span className="material-symbols-outlined text-lg">share</span>
              </button>
              <button aria-label="Language" className="hover:text-teal-600 transition-colors">
                <span className="material-symbols-outlined text-lg">language</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Google Material Symbols */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </div>
  );
}
