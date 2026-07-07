import FadeUp from "@/components/ui/FadeUp";

const segments = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 19v-8a2 2 0 012-2h14a2 2 0 012 2v8M3 19h18M3 15h18M8 9V7a1 1 0 011-1h6a1 1 0 011 1v2" />
      </svg>
    ),
    label: "Hotel",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M6 2v5a2 2 0 004 0V2M8 7v15" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 2c-.6 2-1.5 4-1.5 7h3C17.5 6 16.6 4 16 2zM16.5 9v13" />
      </svg>
    ),
    label: "Restoran",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M6 2v2M10 2v2M14 2v2" />
      </svg>
    ),
    label: "Kafe",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 15h18M12 5v2M6.5 13A5.5 5.5 0 0117.5 13H6.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M5 15v1a2 2 0 002 2h10a2 2 0 002-2v-1" />
      </svg>
    ),
    label: "Katering",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    label: "Retail",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    label: "Distributor",
  },
];

export default function IndustrySegments() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-pad">

        <FadeUp className="text-center mb-10">
          <p className="text-teal text-xs font-bold uppercase tracking-widest mb-1">
            Layanan SSB
          </p>
          <h2 className="section-title">
            Kami Melayani Berbagai Segmen Industri
          </h2>
        </FadeUp>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {segments.map((seg, i) => (
            <FadeUp key={seg.label} delay={i * 80}>
              <div className="flex flex-col items-center gap-2 group cursor-default w-20 sm:w-24">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-sm flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-colors duration-200">
                  {seg.icon}
                </div>
                <span className="text-xs font-semibold text-gray-700 text-center leading-snug">
                  {seg.label}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
