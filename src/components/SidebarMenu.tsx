import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useLang } from "@/context/LanguageContext"
import { t, tx } from "@/i18n/translations"
import Logo from "./Logo"

interface Props {
  open: boolean
  onClose: () => void
}

const navItems = [
  { label: t.nav.home, to: "/" },
  { label: t.nav.about, to: "/about" },
  { label: t.nav.services, to: "/services" },
  { label: t.nav.products, to: "/products" },
  { label: t.nav.projects, to: "/projects" },
  { label: t.nav.clients, to: "/clients" },
  { label: t.nav.contact, to: "/contact" },
]

export default function SidebarMenu({ open, onClose }: Props) {
  const { lang, isRtl } = useLang()
  const [noTransition, setNoTransition] = useState(false)
  const prevIsRtl = useRef(isRtl)

  // Suppress sidebar transition when language direction flips to prevent flash
  useEffect(() => {
    if (prevIsRtl.current !== isRtl) {
      setNoTransition(true)
      prevIsRtl.current = isRtl
      const timer = setTimeout(() => setNoTransition(false), 80)
      return () => clearTimeout(timer)
    }
  }, [isRtl])

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const side = isRtl ? "right-0" : "left-0"
  const hiddenTranslate = isRtl ? "translate-x-full" : "-translate-x-full"

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Sidebar — transition suppressed during language flip */}
      <aside
        className={`fixed top-0 z-[70] h-full w-72 bg-[#1a5c8a] flex flex-col shadow-2xl ${side} ${open ? "translate-x-0" : hiddenTranslate}`}
        style={{
          fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
          transition: noTransition ? "none" : "transform 0.3s ease-in-out",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Logo height={44} />
          <button
            onClick={onClose}
            className="text-white hover:text-[#e07840] transition-colors p-1 rounded"
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={`block px-4 py-3 rounded-lg text-white/90 font-semibold text-base transition-all hover:bg-white/10 hover:text-[#e07840] ${isRtl ? "text-right" : "text-left"}`}
            >
              {tx(item.label, lang)}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-white/10">
          <p className="text-white/40 text-xs text-center">
            {lang === "en" ? "© 2025 HARB Group" : "© 2025 مجموعة حرب"}
          </p>
        </div>
      </aside>
    </>
  )
}
