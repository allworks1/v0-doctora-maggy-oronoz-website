import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Fondo estético dermatología"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Warm white overlay for legibility */}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Heading */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-tight text-foreground text-balance">
          Dermatología y medicina estética para el cuidado integral de tu piel
        </h1>

        {/* Thin divider */}
        <div className="w-16 h-px bg-primary" />

        {/* Sub text */}
        <p className="font-sans text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl text-balance">
          La Dra. Maggy Oronoz ofrece tratamientos dermatológicos y estéticos
          orientados a mejorar la salud, calidad y apariencia de la piel,
          combinando medicina estética moderna con un enfoque integral de
          bienestar.
        </p>

        {/* CTA */}
        <a
          href="https://www.instagram.com/dra.maggy_oronoz?igsh=MXVwcm1iOXRzcWx0ag%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 px-8 py-4 bg-red-400 text-primary-foreground text-xs tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity font-sans"
        >
          Ver Instagram
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="block w-px h-10 bg-primary animate-pulse" />
      </div>
    </section>
  )
}
