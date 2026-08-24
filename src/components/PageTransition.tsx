import { useEffect, useState, type ReactNode } from "react"
import { useLocation } from "react-router-dom"

export default function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)
  // An ancestor transform disables CSS background-attachment: fixed on the hero,
  // so remove the transform once the entrance animation settles.
  const [settled, setSettled] = useState(false)

  useEffect(() => {
    setVisible(false)
    setSettled(false)
    const t = setTimeout(() => setVisible(true), 30)
    return () => clearTimeout(t)
  }, [pathname])

  useEffect(() => {
    if (!visible) return
    // 450ms entrance transition plus a small buffer
    const t = setTimeout(() => setSettled(true), 500)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: settled ? "none" : visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.45s ease, transform 0.45s ease",
      }}
    >
      {children}
    </div>
  )
}
