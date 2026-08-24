import { useCallback, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLang } from "@/context/LanguageContext"
import SectionHeader from "./SectionHeader"
import type { Project } from "@/data/types"

interface Props {
  projects: Project[]
}

const CARD_WIDTH = 320
const GAP = 24
const STEP = CARD_WIDTH + GAP
const VISIBLE_EACH_SIDE = 2

/**
 * Infinite projects carousel.
 * Center card is emphasized; sides are dimmed/blurred.
 * Left arrow = previous, right arrow = next in BOTH LTR and RTL.
 */
export default function ProjectsSection({ projects }: Props) {
  const { lang, isRtl } = useLang()
  const navigate = useNavigate()

  const looped = [...projects, ...projects]
  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)
  const [centered, setCentered] = useState(false)
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  )

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth)
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    setCentered(false)
  }, [lang])

  useEffect(() => {
    if (!centered && projects.length > 0) {
      setCentered(true)
      setAnimate(false)
      setIndex(projects.length)
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimate(true)
        })
      )
    }
  }, [centered, projects.length])

  /* Seamless wrap-around: snap back one set-width without animating. */
  useEffect(() => {
    if (index > looped.length - VISIBLE_EACH_SIDE - 1 && animate) {
      setAnimate(false)
      const newIndex = index - projects.length
      setIndex(newIndex)
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimate(true)
        })
      )
    }
  }, [index, looped.length, projects.length, animate])

  const goPrev = useCallback(() => {
    /* Seamless BACKWARD wrap: when near the start of the doubled list,
        teleport forward one full set (unanimated), then step back animated. */
    if (animate && projects.length > 0 && index <= VISIBLE_EACH_SIDE) {
      setAnimate(false)
      setIndex(index + projects.length)
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimate(true)
          setIndex((i) => i - 1)
        })
      )
      return
    }
    setIndex((i) => Math.max(i - 1, 0))
  }, [animate, index, projects.length])

  const goNext = useCallback(() => {
    setIndex((i) => i + 1)
  }, [])

  /* Centering transform: place card `index` in the horizontal center. */
  const centerX = viewportWidth / 2 - CARD_WIDTH / 2
  const translateX = centerX - index * STEP

  return (
    <section
      className="py-24 bg-white overflow-hidden"
      style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleEn="Our Projects"
          titleAr="مشاريعنا"
          subtitleEn="Delivering landmark industrial projects across the region with precision and excellence."
          subtitleAr="تنفيذ مشاريع صناعية بارزة في المنطقة بدقة وتميز."
        />
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="w-full overflow-hidden py-6" dir="ltr">
          <div
            className="flex items-center"
            style={{
              gap: GAP,
              transform: `translateX(${translateX}px)`,
              transition: animate ? "transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)" : "none",
            }}
          >
            {looped.map((p, i) => {
              const distance = Math.abs(i - index)
              const isCenter = distance === 0
              const isNear = distance <= VISIBLE_EACH_SIDE
              return (
                <ProjectSlide
                  key={`${p.id}-${i}`}
                  name={lang === "en" ? p.nameEn : p.nameAr}
                  client={lang === "en" ? p.clientNameEn : p.clientNameAr}
                  year={p.completionYear}
                  image={p.coverImage}
                  isCenter={isCenter}
                  hidden={!isNear}
                  isRtl={isRtl}
                  onClick={() => navigate(`/projects/${p.id}`)}
                />
              )
            })}
          </div>
        </div>

        {/* Navigation arrows — same meaning in LTR & RTL (left=prev, right=next) */}
        <button
          onClick={goPrev}
          aria-label="Previous project"
          className="absolute top-1/2 -translate-y-1/2 left-6 md:left-16 w-11 h-11 rounded-full bg-[#1a5c8a] text-white shadow-lg flex items-center justify-center hover:bg-[#e07840] transition-colors z-20 cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={goNext}
          aria-label="Next project"
          className="absolute top-1/2 -translate-y-1/2 right-6 md:right-16 w-11 h-11 rounded-full bg-[#1a5c8a] text-white shadow-lg flex items-center justify-center hover:bg-[#e07840] transition-colors z-20 cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* View All Projects — right-aligned, same style as View All Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex justify-end">
        <button
          onClick={() => navigate("/projects")}
          className="group inline-flex items-center gap-2 text-[#e07840] font-semibold hover:text-[#c4622e] transition-all cursor-pointer"
        >
          <span>{lang === "en" ? "View All Projects" : "عرض جميع المشاريع"}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className={`transition-transform duration-200 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  )
}

function ProjectSlide({
  name,
  client,
  year,
  image,
  isCenter,
  hidden,
  isRtl,
  onClick,
}: {
  name: string
  client: string
  year?: number
  image: string
  isCenter: boolean
  hidden: boolean
  isRtl: boolean
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex-shrink-0 rounded-sm cursor-pointer overflow-hidden bg-gray-200 shadow-sm transition-all duration-500 ${
        isCenter ? "shadow-xl" : ""
      }`}
      style={{
        width: CARD_WIDTH,
        height: 240,
        transform: isCenter ? "scale(1.08)" : "scale(0.92)",
        opacity: hidden ? 0 : isCenter ? 1 : 0.55,
        filter: !isCenter ? "blur(1.5px)" : hovered ? "brightness(1)" : "brightness(0.96)",
      }}
    >
      {image && (
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 ${hovered && isCenter ? "scale-105" : "scale-100"}`}
          draggable={false}
        />
      )}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-300 ${
          hovered ? "opacity-95" : isCenter ? "opacity-80" : "opacity-60"
        }`}
      />
      <div className={`absolute bottom-0 w-full p-5 ${isRtl ? "text-right" : "text-left"}`}>
        <p className="text-white font-semibold text-sm drop-shadow mb-1">{name}</p>
        <div className="flex items-center gap-2 text-white/70 text-xs font-medium">
          {client && <span>{client}</span>}
          {client && year !== undefined && year > 0 && <span>•</span>}
          {year !== undefined && year > 0 && <span>{year}</span>}
        </div>
      </div>
    </div>
  )
}
