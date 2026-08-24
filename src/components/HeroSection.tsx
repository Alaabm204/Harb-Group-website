import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLang } from "@/context/LanguageContext"
import { tx } from "@/i18n/translations"
import type { HeroData } from "@/data/types"

interface Props {
  data: HeroData
}

export default function HeroSection({ data }: Props) {
  const { lang, isRtl } = useLang()
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const title = tx({ en: data.titleEn, ar: data.titleAr }, lang)
  const subtitle = tx({ en: data.subtitleEn, ar: data.subtitleAr }, lang)

  return (
    <section
      className="relative min-h-screen flex items-center bg-fixed bg-cover bg-center bg-no-repeat hero-bg"
      style={{
        backgroundImage: `url(${data.image})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${isRtl ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-black/75 via-black/55 to-black/20`} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className={`${isRtl ? "ml-auto mr-0 text-right" : "ml-0 mr-auto text-left"}`}>
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#e07840] leading-tight mb-6 whitespace-pre-line transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{
              transitionDelay: "100ms",
              fontFamily: isRtl ? "'Cairo', sans-serif" : "'Barlow', 'Inter', sans-serif",
              lineHeight: isRtl ? "1.4" : "1.15",
            }}
          >
            {title}
          </h1>

          <p
            className={`text-white/90 text-base md:text-lg leading-relaxed mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{
              transitionDelay: "200ms",
              fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
            }}
          >
            {subtitle}
          </p>

          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} justify-start`}
            style={{ transitionDelay: "300ms" }}
          >
            <button
              onClick={() => navigate("/services")}
              className="px-8 py-3.5 bg-[#e07840] text-white font-semibold rounded hover:bg-[#c4622e] transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95"
            >
              {lang === "en" ? "Our Services" : "خدماتنا"}
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3.5 border-2 border-white/70 text-white font-semibold rounded hover:bg-white hover:text-[#1a5c8a] transition-all duration-200 active:scale-95"
            >
              {lang === "en" ? "Contact Us" : "اتصل بنا"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
