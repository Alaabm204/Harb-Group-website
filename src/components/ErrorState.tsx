import { useLang } from "@/context/LanguageContext"

/**
 * A reusable error state with a message and a retry button.
 */
export default function ErrorState({
  error,
  onRetry,
}: {
  error: string
  onRetry?: () => void
}) {
  const { lang, isRtl } = useLang()
  const retryLabel = lang === "en" ? "Try Again" : "حاول مجدداً"

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-12 h-12 rounded-full bg-[#1a5c8a]/10 flex items-center justify-center mb-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1a5c8a"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <p className={`text-gray-500 mb-4 max-w-md ${isRtl ? "text-right" : "text-left"}`}>{error}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2.5 bg-[#1a5c8a] text-white font-semibold rounded hover:bg-[#2372a8] transition-colors cursor-pointer"
        >
          {retryLabel}
        </button>
      )}
    </div>
  )
}