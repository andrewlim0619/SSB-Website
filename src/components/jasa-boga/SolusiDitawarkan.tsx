import FadeUp from "@/components/ui/FadeUp";

const solusi = [
  {
    title: "Produk Existing",
    subtitle: "Pilih dari berbagai produk siap jual yang telah tersedia.",
    items: ["Frozen Dimsum", "Sauce & Condiments", "Snacks", "Ready-to-Cook Products"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    accent: "bg-teal/10 text-teal border-teal/20",
    badge: "bg-teal",
  },
  {
    title: "Custom Product Development",
    subtitle: "Pengembangan produk sesuai kebutuhan bisnis Anda.",
    items: ["Custom Menu", "Custom Flavor", "Product Reformulation", "New Product Development"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    accent: "bg-navy/10 text-navy border-navy/15",
    badge: "bg-navy",
  },
  {
    title: "Private Label / OEM",
    subtitle: "Jual produk dengan merek Anda sendiri.",
    items: ["Custom Label", "OEM Manufacturing", "Retail Ready", "Custom Packaging"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    accent: "bg-amber-50 text-amber-600 border-amber-100",
    badge: "bg-amber-500",
  },
  {
    title: "Foodservice Solutions",
    subtitle: "Solusi produk untuk optimisasi bisnis makanan.",
    items: ["Hotel & Resort", "Restoran & Kafe", "Catering Services", "Cloud Kitchen"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    accent: "bg-green-50 text-green-600 border-green-100",
    badge: "bg-green-500",
  },
];

export default function SolusiDitawarkan() {
  return (
    <section className="py-16 bg-white">
      <div className="container-pad">
        <FadeUp className="text-center mb-10">
          <span className="text-xs font-bold text-teal uppercase tracking-widest block mb-2">Layanan Kami</span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy">Solusi Yang Kami Tawarkan</h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solusi.map((s, i) => (
            <FadeUp key={s.title} delay={i * 80}>
              <div className={`rounded-2xl border p-6 h-full flex flex-col ${s.accent}`}>
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-sm font-bold text-navy mb-1">{s.title}</h3>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">{s.subtitle}</p>
                <ul className="space-y-2 mt-auto">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.badge}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
