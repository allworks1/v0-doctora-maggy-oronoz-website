"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"

const cases = [
  {
    id: 1,
    label: "Aumento de labios",
    before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-ako8vXTU0bmi4eaHCW2yJ24VKUS6mM.png",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-ako8vXTU0bmi4eaHCW2yJ24VKUS6mM.png",
    // same image used as both but we split it — top half / bottom half using object-position
    isSingleSplitVertical: true, // top = before, bottom = after
  },
  {
    id: 2,
    label: "Tratamiento de melasma",
    before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-XGoBw61vAFcde90f2Mg59hWSvKYpjO.png",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-XGoBw61vAFcde90f2Mg59hWSvKYpjO.png",
    isSingleSplitHorizontal: true,
  },
  {
    id: 3,
    label: "Rejuvenecimiento facial",
    before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-8iIA4EMIAIHgEulPPGsMbD1S8b4mYz.png",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-8iIA4EMIAIHgEulPPGsMbD1S8b4mYz.png",
    isSingleSplitVertical: true,
  },
  {
    id: 4,
    label: "Recuperación capilar",
    before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-UzRnrnvX15OGs8W082EjlcKOnY0fYE.png",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-UzRnrnvX15OGs8W082EjlcKOnY0fYE.png",
    isSingleSplitVertical: true,
  },
]

/**
 * Interactive left/right drag slider comparing before & after.
 * For images that ARE already a combined before/after (top+bottom or left+right),
 * we show them directly as a full result card without a slider.
 */
function ResultCard({ item }: { item: (typeof cases)[0] }) {
  // These user images are already combined before/after in a single photo.
  // We show them as elegant full cards.
  return (
    <div className="relative rounded-2xl overflow-hidden border border-border group">
      <div className="relative w-full aspect-square sm:aspect-[3/4]">
        <Image
          src={item.before}
          alt={`Resultado: ${item.label}`}
          fill
          className="object-cover object-center"
        />
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-foreground/60 to-transparent" />
        <span className="absolute bottom-4 left-4 text-sm font-sans tracking-wide text-primary-foreground">
          {item.label}
        </span>
      </div>
    </div>
  )
}

/**
 * An interactive before/after slider for two distinct images.
 */
function BeforeAfterSlider({
  before,
  after,
  label,
}: {
  before: string
  after: string
  label: string
}) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.min(Math.max((x / rect.width) * 100, 2), 98)
    setPosition(pct)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden select-none border border-border cursor-ew-resize"
      onMouseDown={(e) => {
        dragging.current = true
        updatePosition(e.clientX)
      }}
      onMouseMove={(e) => {
        if (dragging.current) updatePosition(e.clientX)
      }}
      onMouseUp={() => { dragging.current = false }}
      onMouseLeave={() => { dragging.current = false }}
      onTouchStart={(e) => {
        dragging.current = true
        updatePosition(e.touches[0].clientX)
      }}
      onTouchMove={(e) => {
        if (dragging.current) updatePosition(e.touches[0].clientX)
      }}
      onTouchEnd={() => { dragging.current = false }}
    >
      {/* After (full) */}
      <div className="relative w-full aspect-square sm:aspect-[3/4]">
        <Image src={after} alt={`Después — ${label}`} fill className="object-cover" />
      </div>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <div className="relative w-full h-full" style={{ width: `${100 / (position / 100)}%` }}>
          <Image src={before} alt={`Antes — ${label}`} fill className="object-cover" />
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-primary-foreground shadow-lg"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary-foreground border-2 border-primary flex items-center justify-center shadow-md">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 8H1M11 8h4M5 8l2-2M5 8l2 2M11 8l-2-2M11 8l-2 2" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 px-2.5 py-1 bg-foreground/70 text-primary-foreground text-[10px] tracking-widest uppercase rounded-full font-sans">
        Antes
      </span>
      <span className="absolute top-4 right-4 px-2.5 py-1 bg-primary/90 text-primary-foreground text-[10px] tracking-widest uppercase rounded-full font-sans">
        Después
      </span>

      {/* Treatment label */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-foreground/60 to-transparent flex items-end px-4 pb-3">
        <span className="text-sm font-sans tracking-wide text-primary-foreground">{label}</span>
      </div>
    </div>
  )
}

export function ResultsSection() {
  return (
    <section id="resultados" className="py-24 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-primary font-sans">
            Galería
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground text-balance">
            Resultados reales
          </h2>
          <div className="w-12 h-px bg-primary" />
          <p className="font-sans text-base text-muted-foreground max-w-xl leading-relaxed text-balance">
            Resultados obtenidos en pacientes reales mediante tratamientos
            dermatológicos y estéticos personalizados.
          </p>
        </div>

        {/* Grid of result cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item) => (
            <ResultCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
