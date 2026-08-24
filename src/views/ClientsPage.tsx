import { useState } from "react"
import { useLang } from "@/context/LanguageContext"
import SectionHeader from "@/components/SectionHeader"
import Footer from "@/components/Footer"
import Skeleton from "@/components/Skeleton"
import ErrorState from "@/components/ErrorState"
import { useClients } from "@/lib/api"

export default function ClientsPage() {
  const { lang, isRtl } = useLang()
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const active = useClients("active")
  const inactive = useClients("inactive")

  const loading = active.loading || inactive.loading
  const error = active.error || inactive.error

  if (loading) {
    return (
      <main className="pt-20" style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader titleEn="Our Clients" titleAr="عملاؤنا" center={false} />
            <Skeleton className="h-32 w-full rounded mb-16" count={1} />
            <Skeleton className="h-32 w-full rounded" count={1} />
          </div>
        </section>
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

  const currentClients = active.data ?? []
  const previousClients = inactive.data ?? []

  return (
    <main className="pt-20" style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader titleEn="Our Clients" titleAr="عملاؤنا" center={false} />

          {/* Current Collaborations */}
          {currentClients.length > 0 && (
            <div className="mb-16">
              <h3 className={`text-2xl font-bold text-[#1a5c8a] mb-8 ${isRtl ? "text-right" : "text-left"}`}>
                {lang === "en" ? "Current Collaborations" : "التعاونات الحالية"}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {currentClients.map((client) => {
                  const name = lang === "en" ? client.name : client.nameAr
                  const isHovered = hoveredId === client.id
                  return (
                    <div
                      key={client.id}
                      className="relative bg-white border border-gray-100 rounded shadow-sm overflow-hidden group aspect-[4/3] flex items-center justify-center p-4"
                      style={{ boxShadow: isHovered ? "0 8px 24px rgba(0,0,0,0.12)" : "0 1px 3px rgba(0,0,0,0.08)" }}
                      onMouseEnter={() => setHoveredId(client.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <img
                        src={client.logo}
                        alt={name}
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`} />
                      <div className={`absolute bottom-0 w-full p-2 transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${isRtl ? "text-right" : "text-left"}`}>
                        <span className="text-white font-semibold text-sm drop-shadow">{name}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Previous Collaborations */}
          {previousClients.length > 0 && (
            <div>
              <h3 className={`text-2xl font-bold text-[#1a5c8a] mb-8 ${isRtl ? "text-right" : "text-left"}`}>
                {lang === "en" ? "Previous Collaborations" : "التعاونات السابقة"}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {previousClients.map((client) => {
                  const name = lang === "en" ? client.name : client.nameAr
                  const isHovered = hoveredId === client.id
                  return (
                    <div
                      key={client.id}
                      className="relative bg-white border border-gray-100 rounded shadow-sm overflow-hidden group aspect-[4/3] flex items-center justify-center p-4"
                      style={{ boxShadow: isHovered ? "0 8px 24px rgba(0,0,0,0.12)" : "0 1px 3px rgba(0,0,0,0.08)" }}
                      onMouseEnter={() => setHoveredId(client.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <img
                        src={client.logo}
                        alt={name}
                        className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-105 opacity-75 group-hover:opacity-100"
                      />
                      <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`} />
                      <div className={`absolute bottom-0 w-full p-2 transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${isRtl ? "text-right" : "text-left"}`}>
                        <span className="text-white font-semibold text-sm drop-shadow">{name}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {currentClients.length === 0 && previousClients.length === 0 && (
            <p className={`text-gray-500 py-12 ${isRtl ? "text-right" : "text-left"}`}>
              {lang === "en" ? "No clients available." : "لا يوجد عملاء متاحون."}
            </p>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
