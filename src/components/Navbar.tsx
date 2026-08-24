import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { useLang } from "@/context/LanguageContext"
import { t, tx } from "@/i18n/translations"
import Logo from "./Logo"
import SidebarMenu from "./SidebarMenu"

export default function Navbar() {
  const { lang, setLang, isRtl } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const switchingLang = useRef(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setSidebarOpen(false)
  }, [location])

  const handleLangSwitch = () => {
    switchingLang.current = true
    setSidebarOpen(false)
    setTimeout(() => {
      setLang(lang === "en" ? "ar" : "en")
      switchingLang.current = false
    }, 10)
  }

  const navBg = scrolled ? "bg-white shadow-md" : "bg-[#1a5c8a]"
  const textColor = scrolled ? "text-[#1a5c8a]" : "text-white"

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
        style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <Logo height={44} />
              <span
                className={`hidden sm:block font-bold text-sm tracking-widest ${scrolled ? "text-[#1a5c8a]" : "text-white"}`}
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.15em" }}
              >
                H.C.A.G.S
              </span>
            </Link>

            {/* Desktop center nav */}
            <div className={`hidden md:flex items-center gap-7 ${textColor}`}>
              <Link
                to="/"
                className={`font-semibold text-base tracking-wide transition-colors hover:text-[#e07840] ${location.pathname === "/" ? "text-[#e07840]" : ""}`}
              >
                {tx(t.nav.home, lang)}
              </Link>
              <Link
                to="/services"
                className={`font-semibold text-base tracking-wide transition-colors hover:text-[#e07840] ${location.pathname.startsWith("/services") ? "text-[#e07840]" : ""}`}
              >
                {tx(t.nav.services, lang)}
              </Link>
              <Link
                to="/contact"
                className={`font-semibold text-base tracking-wide transition-colors hover:text-[#e07840] ${location.pathname === "/contact" ? "text-[#e07840]" : ""}`}
              >
                {tx(t.nav.contact, lang)}
              </Link>
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              {/* Language switcher */}
              <button
                onClick={handleLangSwitch}
                className="text-[#e07840] font-bold text-sm tracking-widest hover:opacity-80 transition-opacity px-2 py-1 rounded"
                aria-label="Switch language"
              >
                {lang === "en" ? "ARB" : "ENG"}
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-[#e07840] p-2 rounded hover:bg-black/10 transition-colors"
                aria-label="Open menu"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <SidebarMenu open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  )
}
