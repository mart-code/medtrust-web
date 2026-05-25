export default function HowItWorks() {
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
