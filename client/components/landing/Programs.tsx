import Image from "next/image";

export default function Programs() {
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