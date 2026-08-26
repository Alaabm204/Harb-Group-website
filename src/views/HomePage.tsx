import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"
import ProductsSection from "@/components/ProductsSection"
import ProjectsSection from "@/components/ProjectsSection"
import ClientsSection from "@/components/ClientsSection"
import ContactCTA from "@/components/ContactCTA"
import Footer from "@/components/Footer"
import HomePageSkeleton from "@/components/HomePageSkeleton"
import { useAbout, useClients, useHomepage, useServices } from "@/lib/api"

export default function HomePage() {
  const { data: homepageData, loading: heroLoading } = useHomepage()
  const { data: about, loading: aboutLoading } = useAbout()
  const { data: services, loading: servicesLoading } = useServices()
  const { data: clients, loading: clientsLoading } = useClients("active")

  /* Hold back every section until ALL homepage requests have settled,
     showing one coordinated skeleton instead of sections popping in. */
  const isLoading =
    heroLoading ||
    aboutLoading ||
    servicesLoading ||
    clientsLoading

  /* Featured products and projects are curated via the admin app. */
  const featuredProducts = homepageData?.featuredProducts ?? []
  const featuredProjects = homepageData?.featuredProjects ?? []
  const activeClients = clients ?? []

  return (
    <main>
      {isLoading ? (
        <HomePageSkeleton />
      ) : (
        <>
          {homepageData ? <HeroSection data={homepageData.hero} /> : null}
          {about ? <AboutSection data={about} /> : null}
          <ServicesSection services={services ?? []} />
          {featuredProducts.length !== 0 ? (
            <ProductsSection products={featuredProducts} />
          ) : null}
          {featuredProjects.length !== 0 ? (
            <ProjectsSection projects={featuredProjects} />
          ) : null}
          {activeClients.length !== 0 ? (
            <ClientsSection clients={activeClients} />
          ) : null}
        </>
      )}
      <ContactCTA />
      <Footer />
    </main>
  )
}
