import { useNavigate } from "react-router-dom"
import { useLang } from "@/context/LanguageContext"
import type { AboutData } from "@/data/types"

interface Props {
  data: AboutData
}

export default function AboutSection({ data }: Props) {
  const { lang, isRtl } = useLang()
  const navigate = useNavigate()

  const overview = lang === "en" ? data.overviewEn : data.overviewAr

  /* Show only a limited amount of text here — the full content lives on /about. */
  const EXCERPT_LIMIT = 220
  const excerpt =
    overview.length > EXCERPT_LIMIT
      ? `${overview.slice(0, EXCERPT_LIMIT).trimEnd()}…`
      : overview

  return (
    <section
      className="py-24 bg-[#1a5c8a] relative overflow-hidden"
      style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#e07840] mb-6 text-center"
          style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Barlow', 'Inter', sans-serif" }}
        >
          {lang === "en" ? "About Us" : "من نحن"}
        </h2>

        {excerpt && (
          <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-10 text-center">
            {excerpt}
          </p>
        )}

        <div className="mt-8 flex justify-end w-full">
          <button
            onClick={() => navigate("/about")}
            className="group inline-flex items-center gap-2 text-[#e07840] font-semibold hover:text-[#c4622e] transition-all cursor-pointer"
          >
            <span>{lang === "en" ? "Read More" : "اقرأ المزيد"}</span>
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
      </div>
    </section>
  )
}
