import { useEffect, useRef, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useLang } from "@/context/LanguageContext"
import Footer from "@/components/Footer"
import ContactCTA from "@/components/ContactCTA"
import Skeleton from "@/components/Skeleton"
import { useProject } from "@/lib/api"

export default function ProjectDetailPage() {
  const { id } = useParams()
  const { lang, isRtl } = useLang()
  const navigate = useNavigate()
  const [activeImg, setActiveImg] = useState(0)
  const { data: project, loading } = useProject(id)

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
            <Skeleton className="h-8 mb-8 w-2/3" />
            <Skeleton className="h-72 md:h-[28rem] rounded mb-3" />
            <div className="flex gap-3 mb-10 overflow-x-auto pb-1 -mb-1">
              <Skeleton className="h-16 w-24 rounded" />
              <Skeleton className="h-16 w-24 rounded" />
            </div>
            <Skeleton className="h-5 mb-2 w-full" />
            <Skeleton className="h-5 mb-2 w-3/4" />
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">{lang === "en" ? "Project not found." : "المشروع غير موجود."}</p>
      </div>
    )
  }

  const name = lang === "en" ? project.nameEn : project.nameAr
  const desc = lang === "en" ? project.descriptionEn : project.descriptionAr
  const clientName = lang === "en" ? project.clientNameEn : project.clientNameAr
  const allImages = [project.coverImage, ...project.images.filter(i => i !== project.coverImage)].filter(Boolean)
  const safeActiveImg = Math.min(activeImg, Math.max(allImages.length - 1, 0))

  return (
    <main className="pt-20" style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate("/projects")} className="inline-flex items-center gap-2 text-[#1a5c8a] hover:text-[#e07840] text-sm mb-8 transition-colors cursor-pointer font-medium">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points={isRtl ? "9 18 15 12 9 6" : "15 18 9 12 15 6"} />
            </svg>
            <span>{lang === "en" ? "Back to Projects" : "العودة إلى المشاريع"}</span>
          </button>

          <h1 className={`text-2xl md:text-3xl font-bold text-[#1a5c8a] mb-8 ${isRtl ? "text-right" : "text-left"}`}>{name}</h1>

          {/* Gallery */}
          {allImages.length > 0 && (
            <>
              <div className="mb-3 rounded overflow-hidden h-72 md:h-[28rem] bg-gray-100">
                <img src={allImages[safeActiveImg]} alt={name} className="w-full h-full object-cover" />
              </div>
              {allImages.length > 1 && (
                <div ref={thumbsRef} className="flex gap-3 mb-10 overflow-x-auto pb-1 -mb-1">
                  {allImages.map((img, i) => (
                    <button key={i} onClick={() => setActiveImg(i)} className={`h-16 w-24 flex-shrink-0 rounded overflow-hidden border-2 transition-colors ${i === safeActiveImg ? "border-[#e07840]" : "border-transparent"}`}>
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Meta */}
          {(clientName || project.completionYear) && (
            <div className={`grid sm:grid-cols-2 gap-6 mb-10 ${isRtl ? "text-right" : "text-left"}`}>
              {clientName && (
                <div className="bg-[#f5f7fa] rounded p-5 border border-gray-100">
                  <p className="text-xs text-gray-400 mb-1">{lang === "en" ? "Client" : "العميل"}</p>
                  <p className="font-semibold text-[#1a5c8a]">{clientName}</p>
                </div>
              )}
              {project.completionYear !== undefined && project.completionYear !== null && project.completionYear > 0 && (
                <div className="bg-[#f5f7fa] rounded p-5 border border-gray-100">
                  <p className="text-xs text-gray-400 mb-1">{lang === "en" ? "Completion Year" : "سنة الإنجاز"}</p>
                  <p className="font-semibold text-[#1a5c8a]">{project.completionYear}</p>
                </div>
              )}
            </div>
          )}

          {desc && desc !== name && (
            <p className={`text-gray-600 leading-relaxed text-lg max-w-3xl ${isRtl ? "text-right mr-auto" : "text-left"}`}>{desc}</p>
          )}
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  )
}
