import { useParams, useNavigate, useLocation } from "react-router-dom"
import { useLang } from "@/context/LanguageContext"
import Footer from "@/components/Footer"
import ContactCTA from "@/components/ContactCTA"
import Skeleton from "@/components/Skeleton"
import { useService } from "@/lib/api"

export default function ServiceDetailPage() {
  const { id } = useParams()
  const { lang, isRtl } = useLang()
  const navigate = useNavigate()
  const location = useLocation()
  const { data: service, loading, error } = useService(id)
  const navImage = (location.state as { image?: string } | null)?.image

  if (loading) {
    return (
      <main className="pt-20 min-h-screen" style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Skeleton className="h-6 mb-8 w-40" />
            <div className="grid lg:grid-cols-2 gap-12">
              <Skeleton className="h-72 md:h-96 rounded" />
              <div>
                <Skeleton className="h-8 mb-4 w-2/3" />
                <Skeleton className="h-5 mb-2 w-full" />
                <Skeleton className="h-5 mb-2 w-full" />
                <Skeleton className="h-5 mb-8 w-3/4" />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  if (error || !service) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center" style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
        <div className="text-center">
          <p className="text-gray-500">{lang === "en" ? "Service not found." : "الخدمة غير موجودة."}</p>
          <button onClick={() => navigate("/services")} className="mt-4 text-[#1a5c8a] hover:underline">
            {lang === "en" ? "Back to Services" : "العودة إلى الخدمات"}
          </button>
        </div>
        <Footer />
      </main>
    )
  }

  const name = lang === "en" ? service.nameEn : service.nameAr
  const desc = lang === "en" ? service.descriptionEn : service.descriptionAr
  const imageSrc = navImage || service.image

  return (
    <main className="pt-20" style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate("/services")} className="inline-flex items-center gap-2 text-[#1a5c8a] hover:text-[#e07840] text-sm mb-8 transition-colors cursor-pointer font-medium">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points={isRtl ? "9 18 15 12 9 6" : "15 18 9 12 15 6"} />
            </svg>
            <span>{lang === "en" ? "Back to Services" : "العودة إلى الخدمات"}</span>
          </button>

          <div className="grid lg:grid-cols-2 gap-12" dir={isRtl ? "rtl" : "ltr"}>
            <div className="rounded overflow-hidden h-72 md:h-96 bg-gray-100">
              {imageSrc ? (
                <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-[#1a5c8a]/90 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{name}</span>
                </div>
              )}
            </div>

            <div className={isRtl ? "text-right" : "text-left"}>
              <h1 className="text-2xl md:text-3xl font-bold text-[#1a5c8a] mb-4">{name}</h1>
              {desc && <p className="text-gray-600 leading-relaxed mb-8">{desc}</p>}
              <button onClick={() => navigate("/contact")} className="mt-8 px-8 py-3.5 bg-[#e07840] text-white font-semibold rounded hover:bg-[#c4622e] transition-colors">
                {lang === "en" ? "Request a Quote" : "للاستفسار اضغط هنا"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  )
}
