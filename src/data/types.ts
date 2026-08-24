export interface Service {
  id: string
  nameEn: string
  nameAr: string
  descriptionEn: string
  descriptionAr: string
  image: string
  displayOrder: number
}

export interface Product {
  id: string
  nameEn: string
  nameAr: string
  shortDescriptionEn: string
  shortDescriptionAr: string
  descriptionEn: string
  descriptionAr: string
  specificationsEn: string
  specificationsAr: string
  images: string[]
  fileUrl: string
  displayOrder: number
}

export interface Project {
  id: string
  nameEn: string
  nameAr: string
  descriptionEn: string
  descriptionAr: string
  completionYear: number
  clientNameEn: string
  clientNameAr: string
  coverImage: string
  images: string[]
  displayOrder: number
}

export interface Client {
  id: string
  name: string
  nameAr: string
  logo: string
  displayOrder: number
}

export interface CompanyInfo {
  companyNameEn: string
  companyNameAr: string
  descriptionEn: string
  descriptionAr: string
  addressEn: string
  addressAr: string
  phone: string[]
  email: string
  googleMapsUrl: string
  workingHours: { en: string; ar: string }
  socialLinks: { platform: string; url: string; icon: string }[]
}

export interface AboutData {
  overviewEn: string
  overviewAr: string
}

export interface HeroData {
  image: string
  titleEn: string
  titleAr: string
  subtitleEn: string
  subtitleAr: string
}
