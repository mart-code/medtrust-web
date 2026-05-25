export default function Security() {
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