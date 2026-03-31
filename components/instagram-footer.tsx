import Image from "next/image"

const INSTAGRAM_URL =
  "https://www.instagram.com/dra.maggy_oronoz?igsh=MXVwcm1iOXRzcWx0ag%3D%3D"

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function InstagramSection() {
  return (
    <section
      id="instagram"
      className="py-24 lg:py-36 bg-primary text-primary-foreground"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center gap-6">
        <InstagramIcon />
        <h2 className="font-serif text-4xl lg:text-5xl font-light text-balance">
          Seguinos en Instagram
        </h2>
        <div className="w-12 h-px bg-primary-foreground/60" />
        <p className="font-sans text-base leading-relaxed text-primary-foreground/80 max-w-md text-balance">
          En nuestro Instagram compartimos resultados reales, información sobre
          tratamientos y novedades.
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary text-xs tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity font-sans"
        >
          <InstagramIcon />
          Ir al Instagram
        </a>
      </div>
    </section>
  )
}

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#tratamientos", label: "Tratamientos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#testimonios", label: "Testimonios" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid sm:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Image
            src="/images/logo.png"
            alt="Dra. Maggy Oronoz"
            width={160}
            height={72}
            className="w-32 h-auto object-contain invert brightness-0 invert"
          />
          <p className="font-sans text-sm text-primary-foreground/60 leading-relaxed">
            Especialista en dermatología, medicina estética y medicina
            orthomolecular.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/40 mb-5">
            Navegación
          </p>
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Instagram */}
        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/40 mb-5">
            Redes sociales
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <InstagramIcon />
            @dra.maggy_oronoz
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-14 pt-6 border-t border-primary-foreground/10">
        <p className="font-sans text-xs text-primary-foreground/40 text-center tracking-wide">
          © {new Date().getFullYear()} Dra. Maggy Oronoz — Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}
