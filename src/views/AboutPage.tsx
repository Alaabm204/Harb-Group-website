import { useLang } from "@/context/LanguageContext"
import SectionHeader from "@/components/SectionHeader"
import ContactCTA from "@/components/ContactCTA"
import Footer from "@/components/Footer"
import Skeleton from "@/components/Skeleton"
import { useAbout } from "@/lib/api"

export default function AboutPage() {
  const { lang, isRtl } = useLang()
  const { data: about, loading, error } = useAbout()
  const overview = about ? (lang === "en" ? about.overviewEn : about.overviewAr) : ""

  return (
    <main className="pt-20" style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            titleEn="About Us"
            titleAr="من نحن"
            subtitleEn="Decades of experience in steel fabrication and engineering excellence."
            subtitleAr="عقود من الخبرة في تصنيع الصلب والتميز الهندسي."
            center={false}
          />
          <div className={`max-w-3xl ${isRtl ? "mr-0 ml-auto text-right" : ""}`}>
            {loading ? (
              <div>
                <Skeleton className="h-5 mb-3 w-full" />
                <Skeleton className="h-5 mb-3 w-full" />
                <Skeleton className="h-5 w-2/3" />
              </div>
            ) : error ? (
              <p className="text-red-500">
                {lang === "en" ? "Something went wrong. Please try again." : "حدث خطأ ما. يرجى المحاولة مرة أخرى."}
              </p>
            ) : (
              <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">{overview}</p>
            )}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  )
}
