/**
 * Adapter functions that convert raw API objects into the component-friendly
 * types defined in `src/data/types.ts`.
 *
 * The API returns flat English-only fields with `_id`. The component types
 * expect `id`, bilingual (`En`/`Ar`) fields, and specific image array shapes.
 * Since the API does not provide Arabic translations, the same value is used
 * for both `*En` and `*Ar` fields as a graceful fallback.
 */

import type {
  ApiService, ApiServiceFull, ApiProduct, ApiProductFull,
  ApiProject, ApiProjectFull, ApiClient, ApiCompanyInfo,
  ApiHomepageHero, ApiHomepageProduct, ApiHomepageProject,
} from "./api"
import type {
  Service, Product, Project, Client, CompanyInfo, AboutData, HeroData,
} from "@/data/types"

function toBilingual(value: string | undefined): { en: string; ar: string } {
  const v = value ?? ""
  return { en: v, ar: v }
}

/* Service */

export function adaptService(src: ApiService): Service {
  const image = typeof src.image === "object" ? src.image?.url : undefined
  const name = toBilingual(src.name)
  return {
    id: src._id,
    nameEn: name.en,
    nameAr: name.ar,
    descriptionEn: name.en,
    descriptionAr: name.ar,
    image: image ?? "",
    displayOrder: src.displayOrder ?? 0,
  }
}

export function adaptServiceFull(src: ApiServiceFull): Service {
  const name = toBilingual(src.name)
  const desc = toBilingual(src.description)
  return {
    id: src._id,
    nameEn: name.en,
    nameAr: name.ar,
    descriptionEn: desc.en,
    descriptionAr: desc.ar,
    image: "",
    displayOrder: 0,
  }
}

/* Product */

export function adaptProduct(src: ApiProduct): Product {
  const name = toBilingual(src.name)
  const desc = toBilingual(src.description)
  const image = src.image ?? ""
  return {
    id: src._id,
    nameEn: name.en,
    nameAr: name.ar,
    shortDescriptionEn: desc.en,
    shortDescriptionAr: desc.ar,
    descriptionEn: desc.en,
    descriptionAr: desc.ar,
    specificationsEn: "",
    specificationsAr: "",
    images: image ? [image] : [],
    fileUrl: "",
    displayOrder: src.displayOrder ?? 0,
  }
}

export function adaptProductFull(src: ApiProductFull): Product {
  const name = toBilingual(src.name)
  const desc = toBilingual(src.description)
  return {
    id: src._id,
    nameEn: name.en,
    nameAr: name.ar,
    shortDescriptionEn: desc.en,
    shortDescriptionAr: desc.ar,
    descriptionEn: desc.en,
    descriptionAr: desc.ar,
    specificationsEn: "",
    specificationsAr: "",
    images: src.images ?? [],
    fileUrl: src.productPdf ?? "",
    displayOrder: 0,
  }
}

/* Project */

export function adaptProject(src: ApiProject): Project {
  const name = toBilingual(src.name)
  const image = src.image ?? ""
  return {
    id: src._id,
    nameEn: name.en,
    nameAr: name.ar,
    descriptionEn: name.en,
    descriptionAr: name.ar,
    completionYear: src.completionYear ?? 0,
    clientNameEn: "",
    clientNameAr: "",
    coverImage: image,
    images: image ? [image] : [],
    displayOrder: src.displayOrder ?? 0,
  }
}

export function adaptProjectFull(src: ApiProjectFull): Project {
  const name = toBilingual(src.name)
  const desc = toBilingual(src.description)
  const client = toBilingual(src.clientName)
  return {
    id: src._id,
    nameEn: name.en,
    nameAr: name.ar,
    descriptionEn: desc.en,
    descriptionAr: desc.ar,
    completionYear: src.completionYear ?? 0,
    clientNameEn: client.en,
    clientNameAr: client.ar,
    coverImage: src.images?.[0] ?? "",
    images: src.images ?? [],
    displayOrder: 0,
  }
}

/* Client */

export function adaptClient(src: ApiClient): Client {
  const name = toBilingual(src.name)
  return {
    id: src._id,
    name: name.en,
    nameAr: name.ar,
    logo: src.logo ?? "",
    displayOrder: src.isActive ? 0 : 1000,
  }
}

/* Company Info */

export function adaptCompanyInfo(src: ApiCompanyInfo): CompanyInfo {
  return {
    companyNameEn: src.name ?? "",
    companyNameAr: src.name ?? "",
    descriptionEn: src.description ?? "",
    descriptionAr: src.description ?? "",
    addressEn: src.adress ?? "",
    addressAr: src.adress ?? "",
    phone: (src.phoneNumbers ?? []).map((p) => p.number),
    email: src.email ?? "",
    googleMapsUrl: src.googleMapsUrl ?? "",
    workingHours: { en: "", ar: "" },
    socialLinks: Object.entries(src.socialMediaLinks ?? {}).map(
      ([platform, url]) => ({
        platform,
        url,
        icon: platform.toLowerCase(),
      })
    ),
  }
}

/* About (the About Us overview comes from the company info description) */

export function adaptAbout(src: ApiCompanyInfo): AboutData {
  const overview = toBilingual(src.description)
  return {
    overviewEn: overview.en,
    overviewAr: overview.ar,
  }
}

/* Homepage hero */

export function adaptHeroData(src: ApiHomepageHero): HeroData {
  const title = toBilingual(src.title)
  const subtitle = toBilingual(src.subtitle)
  return {
    image: src.imageUrl ?? "",
    titleEn: title.en,
    titleAr: title.ar,
    subtitleEn: subtitle.en,
    subtitleAr: subtitle.ar,
  }
}

/* Featured product (homepage — uses the list-style adapter) */

export function adaptFeaturedProduct(src: ApiHomepageProduct): Product {
  return adaptProduct({
    _id: src._id,
    name: src.name,
    description: src.description,
    image: src.image,
    displayOrder: src.displayOrder ?? 0,
  })
}

/* Featured project (homepage — list-style, has clientName) */

export function adaptFeaturedProject(src: ApiHomepageProject): Project {
  const name = toBilingual(src.name)
  const client = toBilingual(src.clientName)
  const image = src.image ?? ""
  return {
    id: src._id,
    nameEn: name.en,
    nameAr: name.ar,
    descriptionEn: name.en,
    descriptionAr: name.ar,
    completionYear: src.completionYear ?? 0,
    clientNameEn: client.en,
    clientNameAr: client.ar,
    coverImage: image,
    images: image ? [image] : [],
    displayOrder: src.displayOrder ?? 0,
  }
}