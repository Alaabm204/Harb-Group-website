import { useNavigate } from "react-router-dom"
import { useLang } from "@/context/LanguageContext"

export default function FloatingMessageButton() {
  const navigate = useNavigate()
  const { isRtl } = useLang()

  return (
    <button
      onClick={() => navigate("/contact")}
      aria-label="Contact Us"
      className={`fixed bottom-6 z-40 w-14 h-14 rounded-full bg-[#e07840] text-white shadow-lg hover:bg-[#c4622e] hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center ${isRtl ? "left-6" : "right-6"}`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    </button>
  )
}
