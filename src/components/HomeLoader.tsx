import { createPortal } from "react-dom"

export default function HomeLoader({ exiting = false }: { exiting?: boolean }) {
  return createPortal(
    <div className={`home-loader ${exiting ? "home-loader-exiting" : ""}`}>
      <div className="home-loader-spinner" role="status" aria-label="Loading" />
    </div>,
    document.body,
  )
}