const philosophyPoints = [
  {
    title: "Evaluación personalizada",
    desc: "Cada paciente recibe una consulta médica completa antes de cualquier tratamiento.",
  },
  {
    title: "Resultados naturales",
    desc: "El objetivo es siempre realzar tu belleza natural sin perder autenticidad.",
  },
  {
    title: "Cuidado integral",
    desc: "Combinamos dermatología, estética y medicina orthomolecular para resultados duraderos.",
  },
]

export function PhilosophySection() {
  return (
    <section className="py-24 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-[0.35em] uppercase text-primary font-sans">
              Nuestra filosofía
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground text-balance">
              Enfoque personalizado
            </h2>
            <div className="w-12 h-px bg-primary" />
          </div>
          <p className="font-sans text-base text-muted-foreground leading-relaxed">
            Cada paciente es único. Por eso los tratamientos se realizan luego de
            una evaluación médica personalizada, buscando siempre resultados
            naturales y el cuidado integral de la piel.
          </p>
          <div className="flex flex-col gap-6">
            {philosophyPoints.map((p, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-primary font-serif text-lg">{i + 1}</span>
                </div>
                <div>
                  <h4 className="font-sans text-sm font-medium text-foreground tracking-wide">
                    {p.title}
                  </h4>
                  <p className="font-sans text-sm text-muted-foreground mt-1 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative quote panel */}
        <div className="relative flex items-center justify-center">
          <div className="bg-secondary rounded-2xl p-10 lg:p-14 text-center flex flex-col gap-6">
            <span className="font-serif text-7xl text-primary leading-none">&ldquo;</span>
            <p className="font-serif text-xl lg:text-2xl font-light text-foreground leading-relaxed italic text-balance">
              La piel sana es el reflejo de un bienestar integral. Cada tratamiento
              es un paso hacia tu mejor versión.
            </p>
            <div className="w-10 h-px bg-primary mx-auto" />
            <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground">
              Dra. Maggy Oronoz
            </span>
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent rounded-2xl -z-10" />
        </div>
      </div>
    </section>
  )
}
