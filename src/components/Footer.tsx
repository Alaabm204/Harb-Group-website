import { Link } from "react-router-dom"
import { useLang } from "@/context/LanguageContext"
import { t, tx } from "@/i18n/translations"
import { useCompanyInfo } from "@/lib/api"
import Logo from "./Logo"

const navLinks = [
  { label: t.nav.home, to: "/" },
  { label: t.nav.about, to: "/about" },
  { label: t.nav.services, to: "/services" },
  { label: t.nav.products, to: "/products" },
  { label: t.nav.projects, to: "/projects" },
  { label: t.nav.clients, to: "/clients" },
  { label: t.nav.contact, to: "/contact" },
]

const SocialIcon = ({ icon }: { icon: string }) => {
  if (icon === "facebook") return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  if (icon === "instagram") return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  if (icon === "linkedin") return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
  if (icon === "youtube") return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
  return null
}

export default function Footer() {
  const { lang, isRtl } = useLang()
  const { data: companyInfo, loading } = useCompanyInfo()

  return (
    <footer
      className="bg-[#1a5c8a] text-white"
      style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-4 hover:opacity-90 transition-opacity">
              <Logo height={48} />
              <span
                className="font-bold text-base tracking-widest text-white"
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.15em" }}
              >
                H.C.A.G.S
              </span>
            </Link>
            <p className={`text-white/65 text-sm leading-relaxed mb-4 ${isRtl ? "text-right" : "text-left"}`}>
              {tx(t.footer.desc, lang)}
            </p>
            <div className={`flex gap-2 ${isRtl ? "justify-end" : "justify-start"}`}>
              {(companyInfo?.socialLinks ?? []).map((s) => (
                <a key={s.platform} href={s.url} aria-label={s.platform}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#e07840] text-white flex items-center justify-center transition-colors">
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
              {loading && (
                <>
                  <div className="w-8 h-8 rounded-full bg-white/20 animate-pulse" />
                  <div className="w-8 h-8 rounded-full bg-white/20 animate-pulse" />
                </>
              )}
            </div>
          </div>

          {/* Quick Links — split into two columns */}
          <div>
            <h3 className={`text-xs font-bold uppercase tracking-widest text-white/40 mb-3 ${isRtl ? "text-right" : "text-left"}`}>
              {tx(t.footer.links, lang)}
            </h3>
            <ul className="space-y-1.5">
              {navLinks.slice(0, 4).map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={`text-white/65 hover:text-[#e07840] text-sm transition-colors block ${isRtl ? "text-right" : "text-left"}`}>
                    {tx(item.label, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 lg:pt-0">
            <ul className="space-y-1.5 mt-0 lg:mt-6">
              {navLinks.slice(4).map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={`text-white/65 hover:text-[#e07840] text-sm transition-colors block ${isRtl ? "text-right" : "text-left"}`}>
                    {tx(item.label, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={`text-xs font-bold uppercase tracking-widest text-white/40 mb-3 ${isRtl ? "text-right" : "text-left"}`}>
              {tx(t.nav.contact, lang)}
            </h3>
            <ul className={`space-y-2 text-sm text-white/65 ${isRtl ? "text-right" : "text-left"}`}>
              {loading ? (
                <li>
                  <span className="block w-48 h-4 skeleton bg-white/10 rounded" />
                </li>
              ) : (
                <li>{isRtl ? companyInfo?.addressAr : companyInfo?.addressEn}</li>
              )}
              {(companyInfo?.phone ?? []).map((p) => (
                <li key={p}>
                  <a href={`tel:${p}`} className="hover:text-[#e07840] transition-colors">{p}</a>
                </li>
              ))}
              {companyInfo?.email && (
                <li>
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-[#e07840] transition-colors">
                    {companyInfo.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-white/10 text-center">
          <p className="text-white/35 text-xs">{tx(t.footer.copyright, lang)}</p>
        </div>
      </div>
    </footer>
  )
}

