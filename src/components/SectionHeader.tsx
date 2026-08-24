import { useLang } from "@/context/LanguageContext"

interface Props {
  titleEn: string
  titleAr: string
  subtitleEn?: string
  subtitleAr?: string
  light?: boolean
  center?: boolean
}

export default function SectionHeader({ titleEn, titleAr, subtitleEn, subtitleAr, light = false, center = true }: Props) {
  const { lang, isRtl } = useLang()
  const title = lang === "en" ? titleEn : titleAr
  const subtitle = lang === "en" ? subtitleEn : subtitleAr

  return (
    <div className={`mb-12 ${center ? "text-center" : isRtl ? "text-right" : "text-left"}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold ${light ? "text-white" : "text-[#1a5c8a]"}`}
        style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Barlow', 'Inter', sans-serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base max-w-2xl leading-relaxed ${center ? "mx-auto" : ""} ${light ? "text-white/70" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
