"use client"

import { useEffect, useState } from "react"
import App from "@/App"

/** BrowserRouter needs the browser history API, so mount it after hydration. */
export default function ClientApp() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? <App /> : null
}
