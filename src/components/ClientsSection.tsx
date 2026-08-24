import { useLang } from "@/context/LanguageContext"
import SectionHeader from "./SectionHeader"
import type { Client } from "@/data/types"
import { useState } from "react"

interface Props {
  clients: Client[]
}

export default function ClientsSection({ clients }: Props) {
  const { lang, isRtl } = useLang()
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  if (!clients) return null
  if (clients.length === 0) return null

  const repeatedClients = [...clients, ...clients, ...clients, ...clients]

  return (
    <section className="py-24 bg-[#f5f7fa] overflow-hidden" style={{ fontFamily: isRtl ? "Cairo, sans-serif" : "Inter, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeader
          titleEn="Our Clients"
          titleAr="عملاؤنا"
          subtitleEn="Trusted by leading organizations across the region."
          subtitleAr="موثوق به من قبل المؤسسات الرائدة في المنطقة."
        />
      </div>
      <div className="relative w-full overflow-hidden" dir="ltr">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#f5f7fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#f5f7fa] to-transparent z-10 pointer-events-none" />

        <div className="clients-track">
          {repeatedClients.map(function (client, index) {
            const name = lang === "en" ? client.name : client.nameAr
            const isHovered = hoveredId === client.id
            return (
                <div
                  key={`${client.id}-${index}`}
                  className="relative overflow-hidden rounded-sm flex-shrink-0 bg-white border border-gray-100 shadow-sm transition-all duration-300 w-52 h-36 sm:w-60 sm:h-40 mx-3"
                  style={{ boxShadow: isHovered ? "0 8px 24px rgba(0,0,0,0.12)" : "0 1px 3px rgba(0,0,0,0.08)" }}
                  onMouseEnter={() => setHoveredId(client.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                <div className="w-full h-full flex items-center justify-center p-3 bg-white">
                  <img src={client.logo} alt={name} className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105" />
                </div>
                <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`} />
                <div className={`absolute bottom-0 w-full p-2 transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${isRtl ? "text-right" : "text-left"}`}>
                  <span className="text-white font-semibold text-sm drop-shadow">{name}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
