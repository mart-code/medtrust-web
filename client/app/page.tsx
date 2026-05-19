// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Badge } from '@/components/ui/badge';
// import { Search, Stethoscope, Brain, Map, BookOpen, Shield, ChevronRight } from 'lucide-react';

// const EXAMPLE_CONDITIONS = [
//   'Diabetes management',
//   'Back pain',
//   'Skin rash',
//   'Mental health support',
//   'Hypertension',
//   'Eye care',
// ];

// const FEATURES = [
//   {
//     icon: Stethoscope,
//     title: 'Find the Right Doctor',
//     description:
//       'Search doctors by health condition, specialisation, or expertise. Connect anonymously and securely.',
//   },
//   {
//     icon: Brain,
//     title: 'AI Health Analysis',
//     description:
//       'Describe your symptoms or upload an image for instant AI-powered health insights — powered by Claude.',
//   },
//   {
//     icon: BookOpen,
//     title: 'Health Programmes',
//     description:
//       'Join organisation-run programmes tailored to specific conditions. Get structured support and guidance.',
//   },
//   {
//     icon: Map,
//     title: 'Nearby Medical Centres',
//     description:
//       'Discover approved clinics, hospitals, and labs near you on an interactive map.',
//   },
//   {
//     icon: Shield,
//     title: 'Patient Privacy First',
//     description:
//       'Your full identity is never shared. Doctors and programmes only see your initials.',
//   },
// ];

// export default function LandingPage() {
//   const [query, setQuery] = useState('');
//   const router = useRouter();

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (query.trim()) {
//       router.push(`/search/doctors?q=${encodeURIComponent(query.trim())}`);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-10">
//         <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-sm">M</span>
//             </div>
//             <span className="font-bold text-lg">MedTrust</span>
//           </div>
//           <nav className="flex items-center gap-3">
//             <Link href="/programmes" className="text-sm text-muted-foreground hover:text-foreground hidden sm:block">
//               Programmes
//             </Link>
//             <Link href="/institutions" className="text-sm text-muted-foreground hover:text-foreground hidden sm:block">
//               Institutions
//             </Link>
//             <Button asChild variant="ghost" size="sm">
//               <Link href="/login">Sign in</Link>
//             </Button>
//             <Button asChild size="sm">
//               <Link href="/register">Get started</Link>
//             </Button>
//           </nav>
//         </div>
//       </header>

//       <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-primary/5 to-background">
//         <Badge variant="secondary" className="mb-4">Trusted healthcare connections</Badge>
//         <h1 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
//           Your health,{' '}
//           <span className="text-primary">connected</span>
//         </h1>
//         <p className="mt-4 text-muted-foreground max-w-xl text-lg">
//           Find the right doctor, join health programmes, and get AI-powered insights — all in one private, secure platform.
//         </p>

//         <form onSubmit={handleSearch} className="flex gap-2 mt-8 w-full max-w-lg">
//           <div className="relative flex-1">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//             <Input
//               placeholder="Search by health condition, e.g. diabetes, back pain…"
//               className="pl-10 h-12 text-sm"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//           </div>
//           <Button type="submit" size="lg" className="h-12 px-6">
//             Find Doctors
//           </Button>
//         </form>

//         <div className="flex flex-wrap justify-center gap-2 mt-4 max-w-lg">
//           {EXAMPLE_CONDITIONS.map((c) => (
//             <button
//               key={c}
//               type="button"
//               onClick={() => {
//                 setQuery(c);
//                 router.push(`/search/doctors?q=${encodeURIComponent(c)}`);
//               }}
//               className="text-xs px-3 py-1 rounded-full border bg-background hover:border-primary hover:text-primary transition-colors"
//             >
//               {c}
//             </button>
//           ))}
//         </div>

//         <div className="flex gap-3 mt-8">
//           <Button asChild size="lg">
//             <Link href="/register">
//               Create free account <ChevronRight className="h-4 w-4 ml-1" />
//             </Link>
//           </Button>
//           <Button asChild variant="outline" size="lg">
//             <Link href="/institutions">Explore Centres</Link>
//           </Button>
//         </div>
//       </section>

//       <section className="py-20 px-4 bg-background">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl font-bold text-center mb-12">Everything you need</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {FEATURES.map((f) => (
//               <div key={f.title} className="rounded-xl border p-6 hover:border-primary/40 transition-colors">
//                 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                   <f.icon className="h-5 w-5 text-primary" />
//                 </div>
//                 <h3 className="font-semibold mb-2">{f.title}</h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 px-4 bg-primary text-primary-foreground text-center">
//         <h2 className="text-2xl font-bold mb-3">Ready to take control of your health?</h2>
//         <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
//           Join thousands of patients and doctors already using MedTrust.
//         </p>
//         <Button asChild variant="secondary" size="lg">
//           <Link href="/register">Get started for free</Link>
//         </Button>
//       </section>

//       <footer className="border-t py-8 text-center text-sm text-muted-foreground">
//         <p>© {new Date().getFullYear()} MedTrust. Built for better healthcare connections.</p>
//       </footer>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

// ─── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (!header) return;
      if (window.scrollY > 50) {
        header.classList.add("py-3");
        header.classList.remove("py-4");
      } else {
        header.classList.add("py-4");
        header.classList.remove("py-3");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-[#bcc9c7]/20 shadow-[0_10px_30px_rgba(15,157,148,0.05)] py-4 transition-all duration-200">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-10">
        <div className="flex items-center gap-8">
          <Link href="#" className="font-display text-2xl font-bold text-[#006761]">
            MediLink
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-[#006761] font-bold border-b-2 border-[#006761] pb-1 text-sm hover:text-[#006761] transition-all duration-300">
              Home
            </Link>
            {["Find Doctors", "Programs", "Institutions", "Security"].map((item) => (
              <Link key={item} href="#" className="text-[#3d4947] text-sm hover:text-[#006761] transition-all duration-300">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden lg:block text-[#3d4947] text-sm hover:text-[#006761] transition-colors duration-200">Sign In</button>
          <button className=" bg-cyan-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold active:scale-90 transition-transform">Get Started</button>
        </div>
      </nav>
    </header>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-10 py-16 md:py-24 grid md:grid-cols-2 gap-16 items-center">
      {/* Left copy */}
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006761]/10 text-[#006761] border border-[#006761]/20">
          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            verified_user
          </span>
          <span className="text-sm font-semibold">Secure. Anonymous. Trusted.</span>
        </div>

        <h1 className={`font-display text-5xl md:text-[48px] font-bold text-[#121c2a] leading-tight tracking-tight ${playfairDisplay.className}`}>Healthcare Without Barriers</h1>

        <p className="text-lg text-[#3d4947] max-w-xl leading-relaxed">Connect with verified doctors anonymously, enroll in healthcare programs, and receive secure prescriptions from anywhere in the world.</p>

        <div className="flex flex-wrap gap-4 pt-4">
          <button className="btn-gradient text-white px-8 py-4 rounded-full text-sm font-semibold">Talk to a Doctor</button>
          <button className="border border-[#006761] text-[#006761] px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#006761]/5 transition-colors">Explore Programs</button>
        </div>

        <div className="flex items-center gap-8 pt-6">
          {[
            { icon: "lock", label: "AES-256 Encrypted" },
            { icon: "medical_services", label: "Licensed MDs" },
            { icon: "privacy_tip", label: "HIPAA Compliant" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="material-symbols-outlined text-[#00837b]">{icon}</span>
              <span className="text-xs font-medium text-[#3d4947]">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right image + floating cards */}
      <div className="relative">
        <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-square">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpKZ0m8ShYNUs33vdJrYRn18uY64SGn5chlZOx8qcu8PV3lLqFBo_DkhlNWBbGIG-ZQpPsfOP9RrUAS5W7MqEMxDSvjXhD12i7uadKlNJNMfDGuHXS5h6z8tgDOp69jWpbVL9z78pWdW0aOJ6FX3AD5OCWscR_Izu1eSfguNR2SJZUv_41XhI_xfY3aVbfJniYwbspHXTgR8WoqMgvVYHtBY0xsFcQpEm8Ucr64yH3QfY4wK9jw_pgTtKPOkrE_ecLZEyGihIIQPxU"
            alt="Professional female doctor conducting a telehealth video consultation"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Floating card 1 */}
        <div className="absolute -top-6 -left-6 animate-floating glass-card p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/50 z-10">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Dr. Sarah A.</span>
            <span className="text-[11px] text-[#3d4947]">Online Now</span>
          </div>
        </div>

        {/* Floating card 2 */}
        <div className="absolute bottom-12 -right-8 animate-floating-delay-1 glass-card p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/50 z-10">
          <span className="material-symbols-outlined text-[#005cba]" style={{ fontVariationSettings: "'FILL' 1" }}>
            prescriptions
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Prescription Sent</span>
            <span className="text-[11px] text-[#3d4947]">To local pharmacy</span>
          </div>
        </div>

        {/* Floating card 3 */}
        <div className="absolute top-1/2 -right-12 animate-floating-delay-05 glass-card p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/50 z-10">
          <span className="material-symbols-outlined text-[#006761]">security</span>
          <span className="text-sm font-semibold">256-bit Encryption Active</span>
        </div>
      </div>
    </section>
  );
}

// ─── Trusted By ─────────────────────────────────────────────────────────────────
function TrustedBy() {
  const partners = [
    { icon: "apartment", name: "CITY HEALTH" },
    { icon: "health_metrics", name: "NEXUS CARE" },
    { icon: "microbiology", name: "BIOLAB" },
    { icon: "emergency", name: "RED CROSS" },
    { icon: "domain", name: "METRO CLINIC" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-10 py-12 border-y border-[#bcc9c7]/20">
      <p className="text-center text-sm font-semibold text-[#3d4947] mb-8 uppercase tracking-widest">Partnered with leading institutions</p>
      <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {partners.map(({ icon, name }) => (
          <div key={name} className="flex items-center gap-2 font-bold text-xl">
            <span className="material-symbols-outlined text-[#006761]">{icon}</span>
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Core Features ──────────────────────────────────────────────────────────────
function CoreFeatures() {
  const features = [
    {
      icon: "person_off",
      color: "text-[#006761]",
      bg: "bg-[#006761]/10",
      title: "Anonymous Consultations",
      desc: "Seek medical advice without revealing your identity. Perfect for sensitive health concerns.",
    },
    {
      icon: "encrypted",
      color: "text-[#005cba]",
      bg: "bg-[#005cba]/10",
      title: "Secure Messaging",
      desc: "Direct, encrypted communication with specialists. Share records and images safely.",
    },
    {
      icon: "videocam",
      color: "text-[#006762]",
      bg: "bg-[#006762]/10",
      title: "HD Teleconferencing",
      desc: "Face-to-face virtual visits with zero latency and studio-grade security protocols.",
    },
    {
      icon: "description",
      color: "text-[#006761]",
      bg: "bg-[#006761]/10",
      title: "Digital Prescriptions",
      desc: "Validated digital scripts sent instantly to your preferred local or mail-order pharmacy.",
    },
    {
      icon: "clinical_notes",
      color: "text-[#005cba]",
      bg: "bg-[#005cba]/10",
      title: "Program Registration",
      desc: "One-click enrollment in specialized healthcare campaigns and clinical support programs.",
    },
    {
      icon: "handshake",
      color: "text-[#006762]",
      bg: "bg-[#006762]/10",
      title: "Institutional Sync",
      desc: "Seamlessly share your health history with partner hospitals during referrals.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-10 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-display text-3xl font-bold text-[#121c2a] mb-4">Precision Care Built on Privacy</h2>
        <p className="text-base text-[#3d4947] leading-relaxed">We&apos;ve reimagined healthcare delivery with a focus on ease of use and uncompromising security standards.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map(({ icon, color, bg, title, desc }) => (
          <div key={title} className="bg-white p-8 rounded-2xl border border-[#bcc9c7]/30 shadow-[0_10px_30px_rgba(15,157,148,0.05)] hover:-translate-y-2 transition-transform duration-300">
            <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-6`}>
              <span className={`material-symbols-outlined ${color}`}>{icon}</span>
            </div>
            <h3 className="font-display text-xl font-semibold text-[#121c2a] mb-3">{title}</h3>
            <p className="text-base text-[#3d4947] leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── How It Works ───────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      icon: "person_add",
      title: "Create Account",
      desc: "Set up your secure profile in under 2 minutes.",
    },
    {
      icon: "search_check",
      title: "Choose Expert",
      desc: "Select from verified specialists or programs.",
    },
    {
      icon: "forum",
      title: "Consult",
      desc: "Engage in secure video or message session.",
    },
    {
      icon: "medication",
      title: "Receive Treatment",
      desc: "Get digital scripts and care summaries.",
    },
  ];

  return (
    <section className="bg-[#eff4ff] py-20">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-3xl font-bold text-[#121c2a] mb-4">Your Path to Care</h2>
          <p className="text-base text-[#3d4947]">Four simple steps to premium, secure healthcare.</p>
        </div>
        <div className="relative flex flex-col md:flex-row justify-between gap-12">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-[#bcc9c7]/40 z-0" />
          {steps.map(({ icon, title, desc }) => (
            <div key={title} className="relative z-10 flex flex-col items-center text-center max-w-[200px] mx-auto">
              <div className="w-24 h-24 rounded-full bg-[#006761] flex items-center justify-center text-white mb-6 border-8 border-white">
                <span className="material-symbols-outlined outline-white text-3xl">{icon}</span>
              </div>
              <h4 className="font-display text-xl font-semibold text-[#121c2a] mb-2">{title}</h4>
              <p className="text-xs font-medium text-[#3d4947]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Programs ───────────────────────────────────────────────────────────────────
function Programs() {
  const programs = [
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5MEoHwRks8pWVzH9nAbQ9Tk7yPChQ_P5JBDNbtW1Sjre8iAYxh-AgnmwhsXrBoUqepIzbKzZi7cShCyXJ9zLsrWnxW4YRFvX0TC29B-SOsfBS90qjgEelb_9PD23DXtiKnJwvQIpROaNw0BwiqsmIYHfqSNacSebbo604ZDlGKTvKFeYqFM2AVICP22plaptVgZ1XD5xIK9EK-Z_KZODyM_X_STudts9F3moHeklRnZxMNyz_LO27p3YxZHbxosiSStPnGifRK2_I",
      badge: "Enrollment Open",
      institution: "St. Mary's General Hospital",
      title: "Maternal Care Initiative",
      desc: "Comprehensive pre- and post-natal support including 24/7 nursing access.",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6gUBbBmocczyEpkVFx1Nnv1wpATp-XURV4CfxX15GN6PVcznltXwFRYls4v-AnEAY6w2_IgnZdLJXcrOI4kbX8LAJpHHop7wq1W_7GQgZfMN1uuzKINFNrUR6U_skvJetUaKUcE7Y0nYpp2v78DWNjgdJoz87vDDqNSE2trqZNNa1xVWmyNz1jtY3NKas2snDRaoqWIbCzHK9ZZELguB5U7IrjO-GkSg81eLCmRDnZ_85snejGL4YFCQg4JYqjgLVXIolPa_XSQH8",
      badge: "Active Community",
      institution: "Diabetes Research Center",
      title: "Diabetes Support Program",
      desc: "Personalized meal planning and glucose monitoring via encrypted data sync.",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKNKe_NnZqwA_ysV6CTqmnKY4hZ0kNo1H9iZeyHYTK4ZTILm4QJuunWz_bVhshp_aUS3BMik0Yls1CbuGlUF51hjH0O-RF2VS27gdkdw7qVlaJwiUWFTAI2QPu-qVFHAJPU0jnQ7-iyrUt8-Mk0Jv8RZqNcxTsqZEqGcN-A36DH9cpTl8XUJL-6n6pu2mz4I9Bx6OHIx1BmCkNd_tBLo-jwc_WqHk32OCpBS7p6CI58bzQzTI4DVr8LyxVqMVu3lkH1Qt19LuMXtAn",
      badge: "Anonymous Entry",
      institution: "MindCare Foundation",
      title: "Mental Wellness Campaign",
      desc: "Confidential therapy sessions and daily mindfulness resources for all members.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-10 py-20">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-display text-3xl font-bold text-[#121c2a] mb-4">Specialized Care Programs</h2>
          <p className="text-base text-[#3d4947]">Targeted health initiatives managed by world-class institutions.</p>
        </div>
        <button className="text-[#006761] font-bold hover:underline">View All Programs →</button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {programs.map(({ img, badge, institution, title, desc }) => (
          <div key={title} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-[#bcc9c7]/30">
            <div className="h-48 relative overflow-hidden">
              <Image src={img} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[12px] font-bold text-[#006761] uppercase">{badge}</div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-sm text-[#3d4947]">apartment</span>
                <span className="text-xs font-medium text-[#3d4947]">{institution}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-[#121c2a] mb-4">{title}</h3>
              <p className="text-base text-[#3d4947] mb-6">{desc}</p>
              <button className="w-full py-3 rounded-full border border-[#006761] text-[#006761] font-bold hover:bg-[#006761] hover:text-white transition-colors">Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Doctor Network ─────────────────────────────────────────────────────────────
function DoctorNetwork() {
  const doctors = [
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4Jdh9NPYPp7p6ERL0fNHuMWfcK5-BxAKNxPejJXCYGLSfE28WPkO-G-KnWvF2CvZMlSFusDQ4qnSoFPce_r1opYn_REUAGx2Dv8QPVCRhmXVQ_hryuyIOEoi7nVqg4Ogfwwv497JNVtEfWvZLIpFPHrNfM6dNZBpP4c-WRd3qB1OF_4JE44_yxtFREk8N852LwV396o6_Rc6Xu4mIl-Q0jHzUJ0qRtFkqHfUk9mgrXsE-SFKhQHs25AOW4cZ3vDsNDT5hGttbl60h",
      name: "Dr. Marcus Chen",
      specialty: "Cardiologist",
      rating: "4.9",
      reviews: "230",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWqRyUtTxlFrYf4LEKMhIj34MXVH2ltoVKA74ui1RpT5CZT6V0CZol4a1zNjGn7dzU3eTlfwx8dm7zJ1qS--hNnc7DPP8LRj2csaBC0hLBGD0PpRTMpf-UKoVe0LB-IGuzdE9H_3xzhefKjnQP_aDQpZay8k8YgbUertXy86MfPHX3RuvJdJKXqxV51Ik-EJW_ukDWfGxEi53yq2TX1Ry3bVmHuIZvCDa3Sonp5vUJDf7IAQaB_ftCNo2DnBjro5sRkzrsiiJytV54",
      name: "Dr. Elena Rodriguez",
      specialty: "Psychiatrist",
      rating: "5.0",
      reviews: "180",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4N8U-qGuX4MBq2ZREEgOeIisDQfQ3Dae5xxh27dqRcmePkBTr3BtlQrUilkCxMo4b0uMDUsybDSxPCaIqLVM3QKESHymuhdD22fTTL4os8G-WzXXgKfq_3XKUr_Qz7evsFqZwgeFZrnERqNw4cFL9q6Ul5nlTtNRcJx28Udt2rzq0W7qV5xv357l4PVxxVtn6nyBg1BbkEF23a-TJEDrbRIFFWzesXALe5TRimuFmswjB6r_V76uAtLYSra3Dzg3JVC2hOmkN-PGR",
      name: "Dr. James Wilson",
      specialty: "Dermatologist",
      rating: "4.8",
      reviews: "315",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiwRd21uOq2V42ptUkF_NKon9nRv0xqqdzAWBY7fhM7xvFeiuSsIx3gJPKccG1Uh5ISvJWW_1XBntBmcZ1HyaEM3wMmMyNg94RZBBoIRzOiRoDtIpxUSFg5U1iaxp0Zm0FalCdOzk2UMV8MzX5nkMN8Bn_Oha-gYOOcN0XawWySnrEZ5kurl6e6eyv9MKfGRZ8WjLGW7qAPvJu6fHnJuKANqh5iQvzUu3dBuqROtrqcBHDf41pIzwj5QJyWwdmRJaoqozBoVQaTqUQ",
      name: "Dr. Sarah Adams",
      specialty: "Pediatrician",
      rating: "4.9",
      reviews: "410",
    },
  ];

  return (
    <section className="bg-[#006761]/5 py-20">
      <div className="max-w-7xl mx-auto px-10">
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold text-[#121c2a] mb-2">Our Network of Specialists</h2>
          <p className="text-base text-[#3d4947]">Vetted experts available for on-demand consultations.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map(({ img, name, specialty, rating, reviews }) => (
            <div key={name} className="bg-white p-6 rounded-2xl border border-[#bcc9c7]/20 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#006761]/20 relative">
                <Image src={img} alt={name} fill className="object-cover" sizes="96px" />
              </div>
              <h5 className="font-bold text-lg text-[#121c2a]">{name}</h5>
              <p className="text-[#006761] text-sm font-semibold mb-3">{specialty}</p>
              <div className="flex items-center gap-1 mb-4">
                <span className="material-symbols-outlined text-yellow-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span className="font-bold text-[#121c2a]">{rating}</span>
                <span className="text-[#3d4947] text-sm">({reviews} reviews)</span>
              </div>
              <button className="w-full py-2 bg-[#006761]/10 text-[#006761] rounded-lg font-bold hover:bg-[#006761] hover:text-white transition-all">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Security ───────────────────────────────────────────────────────────────────
function Security() {
  const points = [
    {
      title: "End-to-End Encryption",
      desc: "Messages and video calls are encrypted on your device and only decrypted by the doctor.",
    },
    {
      title: "Zero-Trace Browsing",
      desc: "Optional incognito mode ensures no session history is saved on your local device.",
    },
    {
      title: "Institutional Firewall",
      desc: "Independent security audits conducted monthly by 3rd party cybersecurity firms.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-10 py-20 grid md:grid-cols-2 gap-24 items-center">
      {/* Left visual */}
      <div className="order-2 md:order-1 relative">
        <div className="bg-[#27313f] rounded-2xl p-8 aspect-square flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#006761,_transparent)]" />
          <div className="relative z-10 flex flex-col items-center">
            <span className="material-symbols-outlined text-[120px] text-[#65d9ce] mb-8">verified_user</span>
            <div className="space-y-4 w-full">
              <div className="h-10 bg-white/10 rounded flex items-center px-4 font-mono text-[10px] text-[#65d9ce] border border-[#006761]/20">$ encrypt --protocol aes-256 --target data_block_7</div>
              <div className="h-10 bg-white/10 rounded flex items-center px-4 font-mono text-[10px] text-green-400/70 border border-green-400/20">SESSION SECURED: END-TO-END ENCRYPTION ACTIVE</div>
              <div className="h-10 bg-white/10 rounded flex items-center px-4 font-mono text-[10px] text-[#65d9ce] border border-[#006761]/20">$ status --check-privacy-gate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right copy */}
      <div className="order-1 md:order-2 space-y-6">
        <h2 className="font-display text-3xl font-bold text-[#121c2a]">Your Privacy is Non-Negotiable</h2>
        <p className="text-lg text-[#3d4947] leading-relaxed">We utilize military-grade encryption and zero-knowledge architecture to ensure that even we can&apos;t see your personal medical interactions.</p>
        <ul className="space-y-4">
          {points.map(({ title, desc }) => (
            <li key={title} className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-[#006761]/10 flex items-center justify-center mt-1 shrink-0">
                <span className="material-symbols-outlined text-[16px] text-[#006761]">check</span>
              </div>
              <div>
                <p className="font-bold text-[#121c2a]">{title}</p>
                <p className="text-sm text-[#3d4947]">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── Testimonials ───────────────────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      quote: "MediLink allowed me to discuss a very sensitive medical issue without the fear of judgment. The doctor was professional, and the prescription was ready at my local chemist within hours.",
      author: "Verified Patient",
      role: "Mental Health Program",
    },
    {
      quote: "As a specialist, the MediLink platform is superior for documentation and secure file sharing. It allows me to reach patients who would otherwise never seek help.",
      author: "Dr. Elena Rodriguez",
      role: "Chief Psychiatrist",
    },
  ];

  return (
    <section className="bg-[#005cba] py-20 text-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid md:grid-cols-3 gap-12 text-center mb-20">
          {[
            { value: "10k+", label: "Satisfied Patients" },
            { value: "500+", label: "Certified Doctors" },
            { value: "120+", label: "Global Programs" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-[56px] font-bold mb-2">{value}</div>
              <div className="text-sm font-semibold opacity-80">{label}</div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map(({ quote, author, role }) => (
            <div key={author} className="bg-white/10 backdrop-blur p-10 rounded-2xl border border-white/20">
              <span className="material-symbols-outlined text-4xl mb-6 opacity-40 block">format_quote</span>
              <p className="text-lg italic mb-6 leading-relaxed">&ldquo;{quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20" />
                <div>
                  <p className="font-bold">{author}</p>
                  <p className="text-xs opacity-70">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ──────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="max-w-7xl mx-auto px-10 py-32 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-5xl font-bold text-[#121c2a] mb-8 tracking-tight leading-tight">Your Health, Securely Connected</h2>
        <p className="text-lg text-[#3d4947] mb-12 leading-relaxed">Join thousands who have already taken control of their health through our secure platform.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-cyan-700 text-white px-10 py-5 rounded-full text-lg font-semibold">Book a Consultation</button>
          <button className="border border-[#006761] text-[#006761] px-10 py-5 rounded-full text-lg font-semibold hover:bg-[#006761]/5 transition-colors">Contact Support</button>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────────
function Footer() {
  const platformLinks = ["How it Works", "Doctor Network", "Programs", "Security"];
  const resourceLinks = ["Blog", "Help Center", "API Access", "Partners"];
  const companyLinks = ["About Us", "Careers", "Privacy Policy", "Contact"];

  return (
    <footer className="w-full bg-[#f8f9ff] border-t border-[#bcc9c7]/30">
      <div className="max-w-7xl mx-auto px-10 py-20 grid grid-cols-2 md:grid-cols-5 gap-6">
        <div className="col-span-2 space-y-6">
          <Link href="#" className="font-display text-2xl font-bold text-[#006761] block">
            MediLink
          </Link>
          <p className="text-base text-[#3d4947] max-w-sm leading-relaxed">Trust and Precision in Care. MediLink is the world&apos;s leading anonymous health network connecting people with certified medical professionals.</p>
          <div className="flex gap-4">
            {["public", "share", "verified_user"].map((icon) => (
              <span key={icon} className="material-symbols-outlined text-[#006761] cursor-pointer hover:scale-110 transition-transform">
                {icon}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="text-sm font-semibold text-[#006761] mb-6">Platform</h6>
          <ul className="space-y-4">
            {platformLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="text-[#3d4947] hover:text-[#006761] transition-colors duration-200 text-sm font-semibold">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="text-sm font-semibold text-[#006761] mb-6">Resources</h6>
          <ul className="space-y-4">
            {resourceLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="text-[#3d4947] hover:text-[#006761] transition-colors duration-200 text-sm font-semibold">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="text-sm font-semibold text-[#006761] mb-6">Company</h6>
          <ul className="space-y-4">
            {companyLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="text-[#3d4947] hover:text-[#006761] transition-colors duration-200 text-sm font-semibold">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-10 py-8 border-t border-[#bcc9c7]/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-xs font-medium text-[#3d4947] opacity-80">© 2024 MediLink Healthcare Platform. Trust and Precision in Care.</span>
        <div className="flex gap-8 text-xs text-[#3d4947] font-semibold">
          {["Terms of Service", "HIPAA Compliance", "Cookie Policy"].map((item) => (
            <Link key={item} href="#" className="hover:text-[#006761]">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────────
export default function MediLinkPage() {
  return (
    <div className="bg-[#f8f9ff] text-[#121c2a] overflow-x-hidden">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <TrustedBy />
        <CoreFeatures />
        <HowItWorks />
        <Programs />
        <DoctorNetwork />
        <Security />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
