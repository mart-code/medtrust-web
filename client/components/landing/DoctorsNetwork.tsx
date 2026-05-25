
import Image from "next/image";

export default function DoctorNetwork() {
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