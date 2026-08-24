import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLang } from "@/context/LanguageContext"
import SectionHeader from "@/components/SectionHeader"
import ContactCTA from "@/components/ContactCTA"
import Footer from "@/components/Footer"
import Skeleton from "@/components/Skeleton"
import ErrorState from "@/components/ErrorState"
import { useProjects } from "@/lib/api"

export default function ProjectsPage() {
  const { lang, isRtl } = useLang()
  const navigate = useNavigate()
  const { data: projects, loading, error } = useProjects()

  if (loading) {
    return (
      <main className="pt-20" style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              titleEn="Our Projects"
              titleAr="مشاريعنا"
              subtitleEn="Landmark industrial projects delivered across the region."
              subtitleAr="مشاريع صناعية بارزة تم تسليمها في المنطقة."
              center={false}
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Skeleton className="aspect-[4/3] w-full h-auto" count={6} />
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
            titleEn="Our Projects"
            titleAr="مشاريعنا"
            subtitleEn="Landmark industrial projects delivered across the region."
            subtitleAr="مشاريع صناعية بارزة تم تسليمها في المنطقة."
            center={false}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects!.map((p) => {
              const name = lang === "en" ? p.nameEn : p.nameAr
              return (
                <ProjectCard key={p.id} name={name} image={p.coverImage} year={p.completionYear} isRtl={isRtl} onClick={() => navigate(`/projects/${p.id}`)} />
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

function ProjectCard({ name, image, year, onClick, isRtl }: { name: string; image: string; year: number; onClick: () => void; isRtl: boolean }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="relative overflow-hidden rounded-sm cursor-pointer aspect-[4/3]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <img src={image} alt={name} className={`w-full h-full object-cover transition-transform duration-500 ${hovered ? "scale-110" : "scale-100"}`} />
      <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`} />
      <div className={`absolute bottom-0 w-full p-5 transition-all duration-300 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${isRtl ? "text-right" : "text-left"}`}>
        <p className="text-white/60 text-xs mb-1">{year}</p>
        <span className="text-white font-semibold text-sm">{name}</span>
      </div>
    </div>
  )
}
