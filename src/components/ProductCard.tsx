import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLang } from "@/context/LanguageContext"
import type { Product } from "@/data/types"

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { lang, isRtl } = useLang()
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)

  const name = lang === "en" ? product.nameEn : product.nameAr
  const desc = lang === "en" ? product.shortDescriptionEn : product.shortDescriptionAr

  return (
    <div
      className="flex-shrink-0 cursor-pointer group rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white border border-gray-100 flex flex-col h-full"
      style={{ width: 280 }}
      onClick={() => navigate(`/products/${product.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-48 overflow-hidden bg-gray-100 flex-shrink-0">
        {product.images[0] ? (
          <img
            src={product.images[0]}
            alt={name}
            className={`w-full h-full object-cover transition-transform duration-500 ${hovered ? "scale-105" : "scale-100"}`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            {lang === "en" ? "No image" : "لا توجد صورة"}
          </div>
        )}
      </div>
      <div className={`p-4 flex flex-col flex-1 ${isRtl ? "text-right" : "text-left"}`}>
        <h3 className="font-semibold text-[#1a5c8a] text-base mb-1">{name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{desc}</p>
      </div>
    </div>
  )
}
