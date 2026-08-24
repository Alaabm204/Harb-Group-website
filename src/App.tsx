"use client"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LanguageProvider } from "@/context/LanguageContext"
import Navbar from "@/components/Navbar"
import FloatingMessageButton from "@/components/FloatingMessageButton"
import ScrollToTop from "@/components/ScrollToTop"
import PageTransition from "@/components/PageTransition"
import HomePage from "@/views/HomePage"
import AboutPage from "@/views/AboutPage"
import ServicesPage from "@/views/ServicesPage"
import ServiceDetailPage from "@/views/ServiceDetailPage"
import ProductsPage from "@/views/ProductsPage"
import ProductDetailPage from "@/views/ProductDetailPage"
import ProjectsPage from "@/views/ProjectsPage"
import ProjectDetailPage from "@/views/ProjectDetailPage"
import ClientsPage from "@/views/ClientsPage"
import ContactPage from "@/views/ContactPage"

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <FloatingMessageButton />
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetailPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </LanguageProvider>
  )
}
