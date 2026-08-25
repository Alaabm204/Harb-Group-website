import { useEffect, useRef, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useLang } from "@/context/LanguageContext"
import Footer from "@/components/Footer"
import ContactCTA from "@/components/ContactCTA"
import Skeleton from "@/components/Skeleton"
import { useProduct } from "@/lib/api"

export default function ProductDetailPage() {
  const { id } = useParams()
  const { lang, isRtl } = useLang()
  const navigate = useNavigate()
  const [activeImg, setActiveImg] = useState(0)
  const { data: product, loading } = useProduct(id)

  const thumbsRef = useRef<HTMLDivElement>(null)

  useEffect(function () {
    const el = thumbsRef.current ? thumbsRef.current.children[activeImg] : null
    if (el) el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
  }, [activeImg])

  if (loading) {
    return (
      <main className="pt-20 min-h-screen" style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Skeleton className="h-6 mb-8 w-40" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Skeleton className="h-72 md:h-96 rounded" />
              <div>
                <Skeleton className="h-8 mb-4 w-2/3" />
                <Skeleton className="h-5 mb-2 w-full" />
                <Skeleton className="h-5 mb-2 w-full" />
                <Skeleton className="h-5 mb-8 w-3/4" />
                <Skeleton className="h-24 rounded" />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">{lang === "en" ? "Product not found." : "المنتج غير موجود."}</p>
      </div>
    )
  }

  const name = lang === "en" ? product.nameEn : product.nameAr
  const desc = lang === "en" ? product.descriptionEn : product.descriptionAr
  const specs = lang === "en" ? product.specificationsEn : product.specificationsAr

  return (
    <main className="pt-20" style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate("/products")} className="inline-flex items-center gap-2 text-[#1a5c8a] hover:text-[#e07840] text-sm mb-8 transition-colors cursor-pointer font-medium">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points={isRtl ? "9 18 15 12 9 6" : "15 18 9 12 15 6"} />
            </svg>
            <span>{lang === "en" ? "Back to Products" : "العودة إلى المنتجات"}</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" dir={isRtl ? "rtl" : "ltr"}>
            {/* Images */}
            <div className="min-w-0">
              {product.images.length > 0 && (
                <>
                  <div className="rounded overflow-hidden h-72 md:h-96 bg-gray-100 mb-3">
                    <img src={product.images[Math.min(activeImg, product.images.length - 1)]} alt={name} className="w-full h-full object-cover" />
                  </div>
                  {product.images.length > 1 && (
                    <div ref={thumbsRef} className="flex w-full max-w-full gap-3 overflow-x-auto pb-1 -mb-1">
                      {product.images.map((img, i) => (
                        <button key={i} onClick={() => setActiveImg(i)} className={`h-16 w-24 flex-shrink-0 rounded overflow-hidden border-2 transition-colors ${i === activeImg ? "border-[#e07840]" : "border-transparent"}`}>
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
              {product.images.length === 0 && (
                <div className="rounded h-72 md:h-96 bg-gray-100 mb-3 flex items-center justify-center text-gray-400">
                  {lang === "en" ? "No image available" : "لا توجد صورة"}
                </div>
              )}
            </div>

            {/* Info */}
            <div className={"min-w-0 " + (isRtl ? "text-right" : "text-left")}>
              <h1 className="text-2xl md:text-3xl font-bold text-[#1a5c8a] mb-4">{name}</h1>
              {desc && <p className="text-gray-600 leading-relaxed mb-8">{desc}</p>}
              {specs && (
                <div className="bg-[#f5f7fa] rounded p-5 border border-gray-100">
                  <h3 className="font-semibold text-[#1a5c8a] mb-3">{lang === "en" ? "Specifications" : "المواصفات"}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{specs}</p>
                </div>
              )}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button onClick={() => navigate("/contact")} className="px-8 py-3.5 bg-[#e07840] text-white font-semibold rounded hover:bg-[#c4622e] transition-colors cursor-pointer">
                  {lang === "en" ? "Request a Quote" : "للاستفسار اضغط هنا"}
                </button>
                {product.fileUrl ? (
                  <a
                    href={product.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#1a5c8a] text-[#1a5c8a] font-semibold rounded hover:bg-[#1a5c8a] hover:text-white transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span>{lang === "en" ? "Open Product File" : "فتح ملف المنتج"}</span>
                  </a>
                ) : (
                  <button
                    disabled
                    aria-disabled="true"
                    title={lang === "en" ? "No product file available" : "لا يوجد ملف للمنتج"}
                    className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-300 text-gray-400 font-semibold rounded cursor-not-allowed"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span>{lang === "en" ? "Open Product File" : "فتح ملف المنتج"}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  )
}
