import Skeleton from "./Skeleton"
import SectionHeader from "./SectionHeader"

/**
 * Full-page skeleton for the home route, shown while every homepage API
 * request settles. Matches the loader style used by the internal pages
 * (ProductsPage, ServicesPage, detail pages): plain white sections,
 * real section headings, and the shared light-gray pulsing blocks.
 */
export default function HomePageSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading content" className="pt-20">
      {/* Hero */}
      <section className="bg-white">
        <div className="min-h-[calc(100vh-5rem)] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
            <div className="max-w-3xl space-y-6">
              <Skeleton className="h-12 md:h-16 w-11/12" />
              <Skeleton className="h-5 w-2/3" />
              <Skeleton className="h-5 w-1/2" />
              <div className="flex flex-wrap gap-4 pt-4">
                <Skeleton className="h-12 w-44 rounded" />
                <Skeleton className="h-12 w-44 rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <SectionHeader titleEn="About Us" titleAr="من نحن" />
          <Skeleton className="h-5 w-full max-w-2xl" />
          <Skeleton className="h-5 w-full max-w-xl mt-3" />
          <Skeleton className="h-5 w-2/3 max-w-lg mt-3" />
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            titleEn="Our Services"
            titleAr="خدماتنا"
            subtitleEn="Comprehensive steel fabrication and engineering services tailored to your industrial needs."
            subtitleAr="خدمات تصنيع صلب وهندسة شاملة مصممة لتلبية احتياجاتك الصناعية."
            center={false}
          />
          <div className="flex gap-6 overflow-hidden pb-4">
            {[0, 1, 2, 3].map((i) => (
              <Skeleton key={i} className="w-72 sm:w-80 aspect-[4/3] flex-shrink-0" />
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            titleEn="Our Products"
            titleAr="منتجاتنا"
            subtitleEn="Engineered steel products built to international standards for industrial and commercial applications."
            subtitleAr="منتجات فولاذية مهندسة وفق المعايير الدولية للتطبيقات الصناعية والتجارية."
            center={false}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Skeleton className="h-48 w-full" count={8} />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            titleEn="Our Projects"
            titleAr="مشاريعنا"
            subtitleEn="Delivering landmark industrial projects across the region with precision and excellence."
            subtitleAr="تنفيذ مشاريع صناعية بارزة في المنطقة بدقة وتميز."
            center={false}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Skeleton className="w-full aspect-[4/3] h-auto" count={6} />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <SectionHeader
            titleEn="Our Clients"
            titleAr="عملاؤنا"
            subtitleEn="Trusted by leading organizations across the region."
            subtitleAr="موثوق به من قبل المؤسسات الرائدة في المنطقة."
            center={false}
          />
        </div>
        <div className="flex gap-6 overflow-hidden justify-center">
          {[0, 1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="w-52 h-36 sm:w-60 sm:h-40 flex-shrink-0" />
          ))}
        </div>
      </section>
    </div>
  )
}