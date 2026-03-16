import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TreatmentsSection } from "@/components/treatments-section"
import { ResultsSection } from "@/components/results-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InstagramSection, Footer } from "@/components/instagram-footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
      <ResultsSection />
      <PhilosophySection />
      <TestimonialsSection />
      <InstagramSection />
      <Footer />
    </main>
  )
}
