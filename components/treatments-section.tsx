import Image from "next/image"

const treatments = [
  {
    id: 1,
    title: "Dermatología Clínica",
    description:
      "Diagnóstico y tratamiento de enfermedades de la piel, cabello y uñas con un enfoque médico integral y personalizado.",
    image: "/images/treatment-derma.jpg",
    tag: "Salud",
  },
  {
    id: 2,
    title: "Medicina Estética Facial",
    description:
      "Procedimientos mínimamente invasivos para realzar la armonía facial y mejorar la apariencia de forma natural.",
    image: "/images/treatment-facial.jpg",
    tag: "Estética",
  },
  {
    id: 3,
    title: "Rejuvenecimiento",
    description:
      "Tratamientos avanzados para reducir signos de envejecimiento, recuperar la luminosidad y firmeza de la piel.",
    image: "/images/treatment-rejuvenecimiento.jpg",
    tag: "Anti-aging",
  },
  {
    id: 4,
    title: "Recuperación Capilar",
    description:
      "Terapias especializadas para fortalecer el cabello, combatir la caída y estimular el crecimiento natural.",
    image: "/images/treatment-capilar.jpg",
    tag: "Capilar",
  },
  {
    id: 5,
    title: "Medicina Orthomolecular",
    description:
      "Optimización de la salud desde adentro mediante suplementación personalizada y nutrición celular avanzada.",
    image: "/images/treatment-orthomolecular.jpg",
    tag: "Bienestar",
  },
]

export function TreatmentsSection() {
  return (
    <section
      id="tratamientos"
      className="py-24 lg:py-36 bg-muted"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-primary font-sans">
            Lo que ofrecemos
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground text-balance">
            Tratamientos
          </h2>
          <div className="w-12 h-px bg-primary" />
          <p className="font-sans text-base text-muted-foreground max-w-xl leading-relaxed text-balance">
            Cada tratamiento es diseñado de manera personalizada para adaptarse
            a las necesidades únicas de cada paciente.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t) => (
            <div
              key={t.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-[10px] tracking-widest uppercase rounded-full font-sans">
                  {t.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col gap-3">
                <h3 className="font-serif text-xl font-light text-foreground">
                  {t.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {t.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
