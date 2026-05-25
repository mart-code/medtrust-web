
import Image from "next/image";

export default function Hero() {
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

        <h1 className={`font-display text-5xl md:text-[48px] font-bold text-[#121c2a] leading-tight tracking-tight`}>Healthcare Without Barriers</h1>

        <p className="text-lg text-[#3d4947] max-w-xl leading-relaxed">Connect with verified doctors anonymously, enroll in healthcare programs, and receive secure prescriptions from anywhere in the world.</p>

        <div className="flex flex-wrap gap-4 pt-4">
          <button className="bg-cyan-700 text-white px-8 py-4 rounded-full text-sm font-semibold">Talk to a Doctor</button>
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
            loading="eager"
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
