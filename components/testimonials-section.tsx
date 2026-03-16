const testimonials = [
  {
    id: 1,
    name: "María G.",
    text: "Excelente profesional. Me trató el melasma con un resultado increíble. Súper atenta y personalizada en cada consulta.",
    rating: 5,
  },
  {
    id: 2,
    name: "Valentina R.",
    text: "Me hice el relleno de labios y quedé encantada. Resultados naturales, se nota que tiene mucho conocimiento y cuidado.",
    rating: 5,
  },
  {
    id: 3,
    name: "Luciana P.",
    text: "La Dra. Maggy es increíble. El tratamiento capilar cambió mi vida. Mi cabello está más fuerte y abundante que nunca.",
    rating: 5,
  },
  {
    id: 4,
    name: "Carolina M.",
    text: "Me encantó la atención personalizada. La medicina orthomolecular complementó perfecto mi tratamiento de piel.",
    rating: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          className="text-primary"
        >
          <path d="M7 1l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9l-3 1.5.5-3.5L2 4.5 5.5 4z" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-24 lg:py-36 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-primary font-sans">
            Pacientes
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground text-balance">
            Opiniones
          </h2>
          <div className="w-12 h-px bg-primary" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-card rounded-2xl p-6 border border-border flex flex-col gap-4"
            >
              <StarRating count={t.rating} />
              <p className="font-sans text-sm text-muted-foreground leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-xs font-sans text-foreground font-medium">
                    {t.name[0]}
                  </span>
                </div>
                <span className="text-sm font-sans text-foreground">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
