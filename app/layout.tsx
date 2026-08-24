import type { Metadata } from "next"
import "@/index.css"

export const metadata: Metadata = {
  title: "Harb Contracting and General Supplies",
  description: "Harb Contracting and General Supplies services, products, projects, and contact information.",
  icons: {
    icon: "/favicon.jpeg",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
