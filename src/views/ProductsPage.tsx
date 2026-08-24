import { useNavigate } from "react-router-dom"
import { useLang } from "@/context/LanguageContext"
import SectionHeader from "@/components/SectionHeader"
import ContactCTA from "@/components/ContactCTA"
import Footer from "@/components/Footer"
import Skeleton from "@/components/Skeleton"
import ErrorState from "@/components/ErrorState"
import { useProducts } from "@/lib/api"

export default function ProductsPage() {
  const { lang, isRtl } = useLang()
  const navigate = useNavigate()
  const { data: products, loading, error } = useProducts()

  if (loading) {
    return (
      <main className="pt-20" style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              titleEn="Our Products"
              titleAr="منتجاتنا"
              subtitleEn="Engineered steel products built to international standards."
              subtitleAr="منتجات فولاذية مهندسة وفق المعايير الدولية."
              center={false}
            />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
              <Skeleton className="h-48 w-full" count={8} />
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
            titleEn="Our Products"
            titleAr="منتجاتنا"
            subtitleEn="Engineered steel products built to international standards."
            subtitleAr="منتجات فولاذية مهندسة وفق المعايير الدولية."
            center={false}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products!.map((p) => {
              const name = lang === "en" ? p.nameEn : p.nameAr
              const desc = lang === "en" ? p.shortDescriptionEn : p.shortDescriptionAr
              return (
                 <div
                   key={p.id}
                   onClick={() => navigate(`/products/${p.id}`)}
                   className={`group cursor-pointer bg-white border border-gray-100 rounded shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full ${isRtl ? "text-right" : "text-left"}`}
                 >
                   <div className="overflow-hidden h-48 bg-gray-100 flex-shrink-0">
                     {p.images[0] ? (
                       <img src={p.images[0]} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                     ) : (
                       <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                         {lang === "en" ? "No image" : "لا توجد صورة"}
                       </div>
                     )}
                   </div>
                   <div className="p-4 flex flex-col flex-1">
                     <h3 className="font-semibold text-[#1a5c8a] mb-1">{name}</h3>
                     <p className="text-gray-500 text-sm line-clamp-2">{desc}</p>
                   </div>
                 </div>
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
