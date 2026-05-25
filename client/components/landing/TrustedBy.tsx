export default function TrustedBy() {
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