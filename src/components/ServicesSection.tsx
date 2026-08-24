import { useRef } from "react"
import { useLang } from "@/context/LanguageContext"
import SectionHeader from "./SectionHeader"
import ServiceCard from "./ServiceCard"
import type { Service } from "@/data/types"

interface Props {
  services: Service[]
}

export default function ServicesSection({ services }: Props) {
  const { isRtl } = useLang()
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" })
  }

  return (
    <section className="py-24 bg-white" style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleEn="Our Services"
          titleAr="خدماتنا"
          subtitleEn="Comprehensive steel fabrication and engineering services tailored to your industrial needs."
          subtitleAr="خدمات تصنيع صلب وهندسة شاملة مصممة لتلبية احتياجاتك الصناعية."
        />

        {/* Services Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4"
            style={{ scrollSnapType: "x mandatory", msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            {services.map((s) => (
              <div key={s.id} className="flex-shrink-0 w-72 sm:w-80" style={{ scrollSnapAlign: "start" }}>
                <ServiceCard service={s} />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute top-1/2 -translate-y-1/2 -left-4 w-10 h-10 rounded-full bg-[#1a5c8a] text-white shadow-md flex items-center justify-center hover:bg-[#e07840] transition-colors hidden md:flex z-10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute top-1/2 -translate-y-1/2 -right-4 w-10 h-10 rounded-full bg-[#1a5c8a] text-white shadow-md flex items-center justify-center hover:bg-[#e07840] transition-colors hidden md:flex z-10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
