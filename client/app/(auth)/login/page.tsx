"use client";

import Navbar from "@/components/landing/Navbar";
import { useState } from "react";
import Link from "next/link";
import { ShieldCheckIcon, LockIcon, MailIcon, BadgeShield, BadgeLock, BadgeCert, GlobeIcon, ShareIcon, GoogleColorIcon, SSOIcon } from "@/components/ui/MultiIcons";
import { useAuthStore } from "@/store/store";

export default function MediLinkLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    const { login } = useAuthStore.getState();
    login(email, password).catch(() => {
      alert("Login failed. Please check your credentials and try again.");
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Navbar */}
      <Navbar />

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
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="dr.smith@medilink.com" className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition" />
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
              <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••••••" className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition" />
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
          <button onClick={handleLoginSubmit} className="w-full py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold tracking-wide transition-colors mb-5">
            Sign In to Secure Portal
          </button>

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
