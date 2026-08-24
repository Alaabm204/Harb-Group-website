import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useLang } from "@/context/LanguageContext"
import SectionHeader from "./SectionHeader"
import ProductCard from "./ProductCard"
import type { Product } from "@/data/types"

interface Props {
  products: Product[]
}

export default function ProductsSection({ products }: Props) {
  const { lang, isRtl } = useLang()
  const navigate = useNavigate()
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" })
  }

  return (
    <section className="py-24 bg-[#f5f7fa]" style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleEn="Our Products"
          titleAr="منتجاتنا"
          subtitleEn="Engineered steel products built to international standards for industrial and commercial applications."
          subtitleAr="منتجات فولاذية مهندسة وفق المعايير الدولية للتطبيقات الصناعية والتجارية."
        />

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 items-stretch"
            style={{ scrollSnapType: "x mandatory", msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            {products.map((p) => (
              <div key={p.id} style={{ scrollSnapAlign: "start" }}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute top-24 -translate-y-1/2 -left-4 w-10 h-10 rounded-full bg-[#1a5c8a] text-white shadow-md flex items-center justify-center hover:bg-[#e07840] transition-colors hidden md:flex z-10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute top-24 -translate-y-1/2 -right-4 w-10 h-10 rounded-full bg-[#1a5c8a] text-white shadow-md flex items-center justify-center hover:bg-[#e07840] transition-colors hidden md:flex z-10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={() => navigate("/products")}
            className="group inline-flex items-center gap-2 text-[#e07840] font-semibold hover:text-[#c4622e] transition-all cursor-pointer"
          >
            <span>{lang === "en" ? "View All Products" : "عرض جميع المنتجات"}</span>
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
