import logoSrc from "@/imports/WhatsApp_Image_2026-08-01_at_3.38.48_PM.jpeg"

interface LogoProps {
  className?: string
  height?: number
}

export default function Logo({ className = "", height = 52 }: LogoProps) {
  return (
    <img
      src={logoSrc.src}
      alt="HARB Group Logo"
      style={{ height, width: "auto", objectFit: "contain" }}
      className={className}
    />
  )
}
