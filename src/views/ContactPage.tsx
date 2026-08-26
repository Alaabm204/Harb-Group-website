import { useState } from "react"
import { useLang } from "@/context/LanguageContext"
import { t, tx } from "@/i18n/translations"
import SectionHeader from "@/components/SectionHeader"
import Footer from "@/components/Footer"
import Skeleton from "@/components/Skeleton"
import { useCompanyInfo, submitContact } from "@/lib/api"

type FormState = "idle" | "loading" | "success" | "error"
/**
* Converts any admin-entered Google Maps link into an iframe-safe embed URL (normal map pages are blocked by Google and render as refused-to-connect).
*/
function toMapsEmbedUrl(raw: string, fallbackQuery?: string): string {
  const enc = encodeURIComponent
  const fq = (fallbackQuery ?? "").trim()
  
  const search = (q: string) =>
    "https://www.google.com/maps?q=" + enc(q) + "&output=embed"
  
  const value = (raw ?? "").trim()
  if (!value) return ""
  try {
    const url = new URL(value)
    if (url.protocol !== "http:" && url.protocol !== "https:") return ""
    /* Already embeddable links pass through untouched */
    if (url.pathname.includes("/maps/embed")) return url.toString()
    if (url.searchParams.get("output") === "embed") return url.toString()
    /* Short goo.gl links cannot be resolved in the browser */
    if (url.hostname.includes("goo.gl")) return fq ? search(fq) : ""
    /* Reuse an explicit search term when present */
    const q = url.searchParams.get("query") ?? url.searchParams.get("q")
    if (q) return "https://www.google.com/maps?q=" + enc(q) + "&output=embed"
    /* Coordinates from the @lat,lng fragment of place links */
    const at = value.indexOf("@")
    if (at !== -1) {
      const pair = value.slice(at + 1).split(",")
      const lat = Number(pair[0])
      const lng = Number(pair[1])
      if (Number.isFinite(lat) && Number.isFinite(lng)) {
        return "https://www.google.com/maps?q=" + lat + "," + lng + "&output=embed"
      }
    }
    /* Place name links under maps/place */
    const parts = url.pathname.split("/")
    const pi = parts.indexOf("place")
    if (pi !== -1 && parts[pi + 1]) {
      return search(decodeURIComponent(parts[pi + 1].split("+").join(" ")))
    }
    return fq ? search(fq) : ""
  } catch {
    /* Plain text or bare coordinates are used as the search term */
    return search(value)
  }  }


const SocialIcon = ({ platform }: { platform: string }) => {
  const p = platform.toLowerCase()
  if (p === "linkedin") return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
  if (p === "facebook") return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
  if (p === "instagram") return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
  if (p === "youtube") return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
  )
  if (p === "whatsapp") return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  )
  return null
}

export default function ContactPage() {
  const { lang, isRtl } = useLang()
  const { data: companyInfo, loading } = useCompanyInfo()
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [status, setStatus] = useState<FormState>("idle")
  const [errors, setErrors] = useState<Partial<typeof form>>({})

  const validate = () => {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = lang === "en" ? "Name is required" : "الاسم مطلوب"
    if (!form.email.trim()) e.email = lang === "en" ? "Email is required" : "البريد الإلكتروني مطلوب"
    if (!form.message.trim()) e.message = lang === "en" ? "Message is required" : "الرسالة مطلوبة"
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStatus("loading")
    try {
      await submitContact({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      })
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  const inputCls = (field: keyof typeof form) =>
    `w-full px-4 py-3 border rounded text-sm outline-none transition-colors focus:border-[#1a5c8a] focus:ring-2 focus:ring-[#1a5c8a]/10 bg-white ${errors[field] ? "border-red-400" : "border-gray-200"} ${isRtl ? "text-right" : "text-left"}`

  const labelCls = `block text-sm font-medium text-gray-700 mb-1.5 ${isRtl ? "text-right" : "text-left"}`

  // Social links come from the company-info API
  const socialLinks = companyInfo?.socialLinks ?? []

  //   // Build an embeddable maps URL
  const mapsEmbedUrl = toMapsEmbedUrl(
    companyInfo?.googleMapsUrl ?? "",
    companyInfo?.addressEn,
  )

  return (
    <main className="pt-20" style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader titleEn="Contact Us" titleAr="اتصل بنا" center={false} />

          {loading && (
            <div className="grid lg:grid-cols-2 gap-14 mb-10">
              <Skeleton className="h-96 w-full rounded" />
              <div className="space-y-5">
                <Skeleton className="h-12 w-full rounded" />
                <Skeleton className="h-12 w-full rounded" />
                <Skeleton className="h-12 w-full rounded" />
                <Skeleton className="h-12 w-2/3 rounded" />
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-14">
            {/* Form */}
            <div className={isRtl ? "order-2" : "order-1"}>
              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded p-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <p className="text-green-800 font-medium">{tx(t.contact.success, lang)}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>{tx(t.contact.name, lang)}</label>
                      <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls("name")} dir={isRtl ? "rtl" : "ltr"} />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className={labelCls}>{tx(t.contact.email, lang)}</label>
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls("email")} dir="ltr" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>{tx(t.contact.phone, lang)}</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls("phone")} dir="ltr" />
                    </div>
                    <div>
                      <label className={labelCls}>{tx(t.contact.subject, lang)}</label>
                      <input type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputCls("subject")} dir={isRtl ? "rtl" : "ltr"} />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>{tx(t.contact.message, lang)}</label>
                    <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls("message")} dir={isRtl ? "rtl" : "ltr"} />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  {status === "error" && <p className="text-red-500 text-sm">{tx(t.contact.error, lang)}</p>}
                  <button type="submit" disabled={status === "loading"} className="w-full py-3.5 bg-[#1a5c8a] text-white font-semibold rounded hover:bg-[#124069] transition-colors disabled:opacity-60">
                    {status === "loading" ? tx(t.contact.sending, lang) : tx(t.contact.send, lang)}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className={`space-y-5 ${isRtl ? "order-1 text-right" : "order-2 text-left"}`}>
              <InfoBlock icon="map" label={tx(t.contact.address, lang)} value={(isRtl ? companyInfo?.addressAr : companyInfo?.addressEn) ?? ""} isRtl={isRtl} />
              <InfoBlock icon="phone" label={lang === "en" ? "Phone" : "الهاتف"} value={(companyInfo?.phone ?? []).join(" | ")} isRtl={isRtl} />
              <InfoBlock icon="mail" label={lang === "en" ? "Email" : "البريد"} value={companyInfo?.email ?? ""} isRtl={isRtl} />

              {/* Map — uses the googleMapsUrl from the company-info API */}
              {mapsEmbedUrl && (
                <div className="rounded overflow-hidden border border-gray-100 h-52 bg-gray-100">
                  <iframe
                    title="HARB Group Location"
                    src={mapsEmbedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              )}

              {/* Social */}
              <div>
                <p className={`text-sm font-semibold text-gray-500 mb-3 ${isRtl ? "text-right" : "text-left"}`}>{tx(t.contact.follow, lang)}</p>
                <div className={`flex gap-3 ${isRtl ? "justify-end" : "justify-start"}`}>
                  {socialLinks.map((s) => (
                    <a key={s.platform} href={s.url} aria-label={s.platform}
                      className="w-9 h-9 rounded-full bg-[#1a5c8a] text-white flex items-center justify-center hover:bg-[#e07840] transition-colors">
                      <SocialIcon platform={s.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function InfoBlock({ icon, label, value, isRtl }: { icon: string; label: string; value: string; isRtl: boolean }) {
  return (
    <div className={`flex gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
      <div className="w-10 h-10 rounded-full bg-[#1a5c8a]/10 flex items-center justify-center flex-shrink-0">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a5c8a" strokeWidth="2" strokeLinecap="round">
          {icon === "map" && <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>}
          {icon === "phone" && <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.41 2 2 0 0 1 3 1.07h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/>}
          {icon === "mail" && <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>}
          {icon === "clock" && <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>}
        </svg>
      </div>
      <div className={isRtl ? "text-right" : "text-left"}>
        <p className="text-xs text-gray-400 mb-0.5">{label}</p>
        <p className="text-gray-700 text-sm font-medium">{value}</p>
      </div>
    </div>
  )
}
