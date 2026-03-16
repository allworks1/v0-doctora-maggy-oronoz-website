import Image from "next/image"

const credentials = [
  "Especialista en Dermatología",
  "Medicina Estética",
  "Medicina Orthomolecular",
]

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="py-24 lg:py-36 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-JD6R6sBTtNHYp37bonzrBerQ5iSv7D.png"
              alt="Dra. Maggy Oronoz, especialista en dermatología y medicina estética"
              fill
              className="object-cover object-top"
            />
          </div>
          {/* Decorative rose square */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary rounded-2xl -z-10" />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-xl -z-10" />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-[0.35em] uppercase text-primary font-sans">
              Sobre la doctora
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground text-balance">
              Dra. Maggy Oronoz
            </h2>
            <div className="w-12 h-px bg-primary" />
          </div>

          <p className="font-sans text-base text-muted-foreground leading-relaxed">
            Especialista en dermatología, medicina estética y medicina
            orthomolecular, enfocada en tratamientos personalizados que buscan
            mejorar la salud de la piel, el bienestar y la armonía estética de
            cada paciente.
          </p>

          <p className="font-sans text-base text-muted-foreground leading-relaxed">
            Su enfoque combina ciencia, estética y cuidado integral para
            ofrecer resultados naturales y seguros.
          </p>

          {/* Credentials */}
          <div className="flex flex-col gap-3">
            {credentials.map((cred) => (
              <div key={cred} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="font-sans text-sm text-foreground tracking-wide">
                  {cred}
                </span>
              </div>
            ))}
          </div>

          <a
            href="https://www.instagram.com/dra.maggy_oronoz?igsh=MXVwcm1iOXRzcWx0ag%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-flex items-center gap-2 px-7 py-3.5 border border-primary text-primary text-xs tracking-widest uppercase rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 font-sans"
          >
            Seguir en Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
