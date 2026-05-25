export default function CoreFeatures() {
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