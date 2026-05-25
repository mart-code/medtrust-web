"use client";
import router from "next/router";

// Importing components
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import CoreFeatures from "@/components/landing/CoreFeatures";
import HowItWorks from "@/components/landing/HowItWorks";
import Programs from "@/components/landing/Programs";
import DoctorNetwork from "@/components/landing/DoctorsNetwork";
import Security from "@/components/landing/Security";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";


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
  <Footer/>
    </div>
  );
}
