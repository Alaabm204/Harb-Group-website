import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Lang } from "@/i18n/translations"

interface LanguageContextType {
  lang: Lang
  setLang: (l: Lang) => void
  isRtl: boolean
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  isRtl: false,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  const setLang = (l: Lang) => setLangState(l)

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, isRtl: lang === "ar" }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
