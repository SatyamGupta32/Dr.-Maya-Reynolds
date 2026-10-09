import Hero from '@/components/Hero'
import IntroSection from '@/components/IntroSection'
import FocusAreas from '@/components/FocusAreas'
import Services from '@/components/Services'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <IntroSection />
      <FocusAreas />
      <Services />
      <FinalCTA />
    </main>
  )
}
