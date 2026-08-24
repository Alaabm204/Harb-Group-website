import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLang } from "@/context/LanguageContext"
import type { Service } from "@/data/types"

interface Props {
  service: Service
}

export default function ServiceCard({ service }: Props) {
  const { lang, isRtl } = useLang()
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)

  const name = lang === "en" ? service.nameEn : service.nameAr

  return (
    <div
      className="relative overflow-hidden rounded-sm cursor-pointer group w-full h-64 sm:h-72 shadow-sm hover:shadow-lg transition-all duration-300 bg-gray-100"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/services/${service.id}`, { state: { image: service.image } })}
    >
      {service.image ? (
        <img
          src={service.image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 ${hovered ? "scale-110" : "scale-100"}`}
        />
      ) : (
        <div className="w-full h-full bg-[#1a5c8a]/90 flex items-center justify-center px-4">
          <span className="text-white font-semibold text-base text-center">{name}</span>
        </div>
      )}
      {/* Overlay */}
      <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`} />
      {/* Name */}
      <div
        className={`absolute bottom-0 ${isRtl ? "right-0 text-right" : "left-0 text-left"} p-5 w-full transition-all duration-300 ${hovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
      >
        <span className="text-white font-bold text-lg drop-shadow">{name}</span>
      </div>
    </div>
  )
}

