import { useNavigate } from "react-router-dom"
import { useLang } from "@/context/LanguageContext"
import { t, tx } from "@/i18n/translations"

export default function ContactCTA() {
  const { lang, isRtl } = useLang()
  const navigate = useNavigate()

  return (
    <section
      className="py-20 bg-[#1a5c8a] relative overflow-hidden"
      style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-white/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-8 h-0.5 bg-[#e07840]" />
          <span className="text-[#e07840] text-xs font-bold uppercase tracking-[0.2em]">GET IN TOUCH</span>
          <div className="w-8 h-0.5 bg-[#e07840]" />
        </div>

        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Barlow', 'Inter', sans-serif" }}
        >
          {tx(t.cta.title, lang)}
        </h2>

        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          {tx(t.cta.sub, lang)}
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="group inline-flex items-center gap-2 px-10 py-4 bg-[#e07840] text-white font-semibold rounded hover:bg-[#c4622e] transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95 cursor-pointer"
        >
          <span>{tx(t.cta.btn, lang)}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className={`transition-transform duration-200 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  )
}
