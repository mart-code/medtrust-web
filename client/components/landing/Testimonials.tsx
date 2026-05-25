export default function Testimonials() {
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