'use client'

import Navbar from "@/components/landing/Navbar";
import { useState } from "react";
import Link from "next/link";

const ShieldCheckIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const LockIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const MailIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
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

const GoogleColorIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const SSOIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
  </svg>
);

const BadgeShield = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const BadgeLock = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const BadgeCert = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const navLinks = ["Home", "Find Doctors", "Programs", "Institutions", "Security", "About"];

export default function MediLinkLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Navbar */}
    <Navbar/>

      {/* Background gradient strip */}
      <div className="h-48 bg-linear-to-b from-teal-50 to-gray-50" />

      {/* Login Card */}
      <main className="flex-1 flex flex-col items-center -mt-32 px-4 pb-16">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {/* Header */}
          <div className="text-center mb-7">
            <h1 className="text-2xl font-bold text-gray-900 mb-1.5">Welcome Back</h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              Access your healthcare dashboard with
              <br />
              precision and privacy.
            </p>
          </div>

          {/* Medical Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Medical Email</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <MailIcon size={15} />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="dr.smith@medilink.com"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Secure Password */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-sm font-medium text-gray-700">Secure Password</label>
              <a href="#" className="text-xs text-teal-600 hover:underline font-medium">
                Forgot Password?
              </a>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <LockIcon size={15} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" aria-label="Toggle password visibility">
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>

          {/* Remember Device */}
          <label className="flex items-center gap-2.5 mb-5 cursor-pointer">
            <div className="relative">
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="sr-only" />
              <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${remember ? "bg-teal-600 border-teal-600" : "border-gray-300 bg-white"}`}>
                {remember && (
                  <span className="material-symbols-outlined text-white" style={{ fontSize: "11px" }}>
                    check
                  </span>
                )}
              </div>
            </div>
            <span className="text-xs text-gray-500">Remember this device for 30 days</span>
          </label>

          {/* Sign In Button */}
          <button className="w-full py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold tracking-wide transition-colors mb-5">Sign In to Secure Portal</button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-400">or continue with</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-sm text-gray-700 font-medium transition-all">
              <GoogleColorIcon />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-sm text-gray-700 font-medium transition-all">
              <SSOIcon />
              SSO
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-100">
            {[
              { icon: <BadgeShield />, label: "HIPAA COMPLIANT" },
              { icon: <BadgeLock />, label: "256-BIT AES" },
              { icon: <BadgeCert />, label: "ISO 27001" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-1 text-teal-600">
                {icon}
                <span className="text-[9px] font-semibold tracking-widest text-gray-500">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Create Account */}
        <p className="mt-5 text-sm text-gray-500">
          New to the platform?{" "}
          <Link href="/register" className="text-teal-600 font-medium hover:underline">
            Create an account
          </Link>
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 px-8 pt-10 pb-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-1.5 text-teal-700 font-bold text-base tracking-tight mb-2">MediLink</div>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">Delivering precision-based healthcare solutions with a focus on trust, technology, and patient outcomes.</p>
              <div className="flex items-center gap-3 text-gray-400">
                <button className="hover:text-teal-600 transition-colors" aria-label="Language">
                  <GlobeIcon />
                </button>
                <button className="hover:text-teal-600 transition-colors" aria-label="Share">
                  <ShareIcon />
                </button>
                <button className="hover:text-teal-600 transition-colors" aria-label="Security">
                  <ShieldCheckIcon size={16} />
                </button>
              </div>
            </div>

            {[
              { heading: "PLATFORM", links: ["Telehealth", "Patient Portal", "Medical Records", "Pharmacy"] },
              { heading: "RESOURCES", links: ["Help Center", "Guidelines", "API Docs", "Community"] },
              { heading: "LEGAL", links: ["Privacy Policy", "Terms of Use", "Security Ethics", "Data Privacy"] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-3">{heading}</p>
                <ul className="space-y-2">
                  {links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-gray-500 hover:text-teal-600 transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-5">
            <p className="text-center text-xs text-gray-400">© 2024 MediLink Healthcare Platform. Trust and Precision in Care.</p>
          </div>
        </div>
      </footer>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </div>
  );
}
