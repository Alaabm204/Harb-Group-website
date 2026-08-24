import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLang } from "@/context/LanguageContext"
import SectionHeader from "@/components/SectionHeader"
import ContactCTA from "@/components/ContactCTA"
import Footer from "@/components/Footer"
import Skeleton from "@/components/Skeleton"
import ErrorState from "@/components/ErrorState"
import { useServices } from "@/lib/api"

export default function ServicesPage() {
  const { lang, isRtl } = useLang()
  const navigate = useNavigate()
  const { data: services, loading, error } = useServices()

  if (loading) {
    return (
      <main className="pt-20" style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              titleEn="Our Services"
              titleAr="خدماتنا"
              subtitleEn="Comprehensive steel fabrication and engineering services tailored to your industrial needs."
              subtitleAr="خدمات تصنيع صلب وهندسة شاملة مصممة لتلبية احتياجاتك الصناعية."
              center={false}
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Skeleton className="w-full aspect-[4/3] h-auto" count={6} />
            </div>
          </div>
        </section>
        <ContactCTA />
        <Footer />
      </main>
    )
  }

  if (error) {
    return (
      <main className="pt-20" style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
        <ErrorState error={error} onRetry={() => window.location.reload()} />
        <Footer />
      </main>
    )
  }

  return (
    <main className="pt-20" style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            titleEn="Our Services"
            titleAr="خدماتنا"
            subtitleEn="Comprehensive steel fabrication and engineering services tailored to your industrial needs."
            subtitleAr="خدمات تصنيع صلب وهندسة شاملة مصممة لتلبية احتياجاتك الصناعية."
            center={false}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services!.map((s) => {
              const name = lang === "en" ? s.nameEn : s.nameAr
              return (
                <ServiceGridCard key={s.id} name={name} image={s.image} onClick={() => navigate(`/services/${s.id}`, { state: { image: s.image } })} isRtl={isRtl} />
              )
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  )
}

function ServiceGridCard({ name, image, onClick, isRtl }: { name: string; image: string; onClick: () => void; isRtl: boolean }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="relative overflow-hidden rounded-sm cursor-pointer aspect-[4/3] shadow-sm"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {image ? (
        <img src={image} alt={name} className={`w-full h-full object-cover transition-transform duration-500 ${hovered ? "scale-110" : "scale-100"}`} />
      ) : (
        <div className="w-full h-full bg-[#1a5c8a]/90 flex items-end p-5">
          <span className="text-white font-semibold text-base">{name}</span>
        </div>
      )}
      <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`} />
      <div className={`absolute bottom-0 w-full p-5 transition-all duration-300 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${isRtl ? "text-right" : "text-left"}`}>
        <span className="text-white font-semibold text-base">{name}</span>
      </div>
    </div>
  )
}
