/**
 * API client layer for HARB Group website.
 *
 * All endpoints are GET requests against the HARB Group REST API.
 * The API returns responses wrapped in `{ success, message, data, errors, timestamp }`
 * and uses `_id` instead of `id`. Fields are flat values localized via the
 * `Accept-Language` header.
 *
 * Adapter functions in `adapters.ts` map raw API objects to the component-friendly
 * types defined in `src/data/types.ts`.
 */

import {
  adaptService,
  adaptServiceFull,
  adaptProduct,
  adaptProductFull,
  adaptProject,
  adaptProjectFull,
  adaptClient,
  adaptCompanyInfo,
  adaptAbout,
  adaptHeroData,
  adaptFeaturedProduct,
  adaptFeaturedProject,
} from "./adapters"
import type {
  Service,
  Product,
  Project,
  Client,
  CompanyInfo,
  AboutData,
  HeroData,
} from "@/data/types"
import type { Lang } from "@/i18n/translations"
import { useLang } from "@/context/LanguageContext"

export const API_URL = "https://harb-group.vercel.app/api/v1"

/* Generic response wrapper types */

export interface ApiSuccessResponse<T> {
  success: boolean
  message: string
  data: T
  errors: string[]
  timestamp: string
}

export class ApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ApiError"
  }
}

/* Raw API data types (matching the live API response shapes) */

export interface ApiService {
  _id: string
  name: string
  image?: { url: string } | null
  displayOrder?: number
}

export interface ApiServiceFull {
  _id: string
  name: string
  description?: string
}

export interface ApiProduct {
  _id: string
  name: string
  description?: string
  image?: string | null
  displayOrder?: number
}

export interface ApiProductFull {
  _id: string
  name: string
  description?: string
  images?: string[]
  productPdf?: string | null
}

export interface ApiProject {
  _id: string
  name: string
  image?: string | null
  displayOrder?: number
  completionYear?: number
}

export interface ApiProjectFull {
  _id: string
  name: string
  description?: string
  images?: string[]
  completionYear?: number
  clientName?: string
}

export interface ApiClient {
  _id: string
  name: string
  logo?: string | null
  isActive: boolean
}

export interface ApiCompanyInfo {
  _id: string
  name: string
  description?: string
  adress?: string
  email?: string
  phoneNumbers?: { number: string; label?: string }[]
  googleMapsUrl?: string
  socialMediaLinks?: Record<string, string>
  logo?: string | null
}

export interface ApiHomepageHero {
  title: string
  subtitle: string
  imageUrl: string
  imageResponsiveVariants?: Record<string, string>
}

export interface ApiHomepageProduct {
  _id: string
  name: string
  description?: string
  image?: string | null
  displayOrder?: number
}

export interface ApiHomepageProject {
  _id: string
  name: string
  clientName?: string
  completionYear?: number
  image?: string | null
  displayOrder?: number
}

export interface ApiHomepage {
  hero: ApiHomepageHero
  featuredProducts?: ApiHomepageProduct[]
  featuredProjects?: ApiHomepageProject[]
}

/* Internal fetch helper */

async function request<T>(path: string, lang: Lang = "en"): Promise<T> {
  const url = `${API_URL}${path}`
  const res = await fetch(url, {
    headers: {
      "Accept-Language": lang,
    },
  })

  if (!res.ok) {
    throw new ApiError(`Request to ${url} failed with status ${res.status}`)
  }

  const json: unknown = await res.json()

  if (
    typeof json === "object" &&
    json !== null &&
    "success" in json &&
    (json as { success: unknown }).success === false
  ) {
    const err = json as { message?: string; errors?: string[] }
    throw new ApiError(err.message || "API request failed")
  }

  const data = json as ApiSuccessResponse<T>
  return data.data
}

/* Fetch functions (pure — no React) */

export function fetchServices(lang: Lang = "en"): Promise<Service[]> {
  return request<{ services: ApiService[] }>("/services/", lang).then((d) =>
    d.services
      .map(adaptService)
      .sort((a, b) => a.displayOrder - b.displayOrder),
  )
}

export function fetchService(id: string, lang: Lang = "en"): Promise<Service> {
  return request<{ service: ApiServiceFull }>(`/services/${id}`, lang).then(
    (d) => adaptServiceFull(d.service),
  )
}

export function fetchProducts(lang: Lang = "en"): Promise<Product[]> {
  return request<{ products: ApiProduct[] }>("/products/", lang).then((d) =>
    d.products
      .map(adaptProduct)
      .sort((a, b) => a.displayOrder - b.displayOrder),
  )
}

export function fetchProduct(id: string, lang: Lang = "en"): Promise<Product> {
  return request<{ product: ApiProductFull }>(`/products/${id}`, lang).then(
    (d) => adaptProductFull(d.product),
  )
}

export function fetchProjects(lang: Lang = "en"): Promise<Project[]> {
  return request<{ projects: ApiProject[] }>("/projects", lang).then((d) =>
    d.projects
      .map(adaptProject)
      .sort((a, b) => a.displayOrder - b.displayOrder),
  )
}

export function fetchProject(id: string, lang: Lang = "en"): Promise<Project> {
  return request<{ project: ApiProjectFull }>(`/projects/${id}`, lang).then(
    (d) => adaptProjectFull(d.project),
  )
}

export function fetchClients(
  status?: "active" | "inactive",
  lang: Lang = "en",
): Promise<Client[]> {
  const qs = status ? `?status=${status}` : "?status=active"
  return request<{ clients: ApiClient[] }>(`/clients${qs}`, lang).then((d) =>
    d.clients.map(adaptClient).sort((a, b) => a.displayOrder - b.displayOrder),
  )
}

export function fetchCompanyInfo(lang: Lang = "en"): Promise<CompanyInfo> {
  return request<ApiCompanyInfo[]>("/company-info", lang).then((d) =>
    adaptCompanyInfo(d[0]),
  )
}

/* About Us (content sourced from the company info endpoint) */

export function fetchAbout(lang: Lang = "en"): Promise<AboutData> {
  return request<ApiCompanyInfo[]>("/company-info", lang).then((d) => {
    if (!d || d.length === 0) {
      throw new ApiError("No company information available")
    }
    return adaptAbout(d[0])
  })
}

export function fetchHomepage(
  lang: Lang = "en",
): Promise<{
  hero: HeroData
  featuredProducts: Product[]
  featuredProjects: Project[]
}> {
  return request<ApiHomepage>("/homepage", lang).then((d) => ({
    hero: adaptHeroData(d.hero),
    featuredProducts: (d.featuredProducts ?? []).map(adaptFeaturedProduct),
    featuredProjects: (d.featuredProjects ?? []).map(adaptFeaturedProject),
  }))
}

export interface ContactSubmitResponse {
  success: boolean
  message: string
  data: {
    messageId: string
    submittedAt: string
    expectedResponseTime: string
  }
  errors: string[]
  timestamp: string
}

export async function submitContact(payload: {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}): Promise<ContactSubmitResponse> {
  const url = `${API_URL}/contact/submit`
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    throw new ApiError(`Request to ${url} failed with status ${res.status}`)
  }

  const json: unknown = await res.json()
  if (
    typeof json === "object" &&
    json !== null &&
    "success" in json &&
    (json as { success: unknown }).success === false
  ) {
    const err = json as { message?: string; errors?: string[] }
    throw new ApiError(err.message || "Contact submit failed")
  }

  return json as ContactSubmitResponse
}

/* ------------------------------------------------------------------ *
 * React hooks — shared useApi + public hooks
 * ------------------------------------------------------------------ */

import { useEffect, useState } from "react"

export interface UseApiState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

function useApi<T>(fn: () => Promise<T>, deps: unknown[] = []): UseApiState<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    fn()
      .then((result) => {
        if (!cancelled) {
          setData(result)
          setLoading(false)
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : String(err))
          setLoading(false)
        }
      })
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { data, loading, error }
}

/* Public hooks */

export function useServices() {
  const { lang } = useLang()
  return useApi(() => fetchServices(lang), [lang])
}

export function useService(id: string | undefined) {
  const { lang } = useLang()
  return useApi(() => fetchService(id!, lang), [id, lang])
}

export function useProducts() {
  const { lang } = useLang()
  return useApi(() => fetchProducts(lang), [lang])
}

export function useProduct(id: string | undefined) {
  const { lang } = useLang()
  return useApi(() => fetchProduct(id!, lang), [id, lang])
}

export function useProjects() {
  const { lang } = useLang()
  return useApi(() => fetchProjects(lang), [lang])
}

export function useProject(id: string | undefined) {
  const { lang } = useLang()
  return useApi(() => fetchProject(id!, lang), [id, lang])
}

export function useClients(status: "active" | "inactive") {
  const { lang } = useLang()
  return useApi(() => fetchClients(status, lang), [status, lang])
}

export function useCompanyInfo() {
  const { lang } = useLang()
  return useApi(() => fetchCompanyInfo(lang), [lang])
}

export function useAbout() {
  const { lang } = useLang()
  return useApi(() => fetchAbout(lang), [lang])
}

export function useHomepage() {
  const { lang } = useLang()
  return useApi(() => fetchHomepage(lang), [lang])
}
