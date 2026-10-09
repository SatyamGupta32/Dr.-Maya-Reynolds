import Navbar from '@/components/Navbar'
import AboutMaya from '@/components/AboutMaya'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Dr. Maya Reynolds | Licensed Clinical Psychologist in Santa Monica',
  description: 'Learn about Dr. Maya Reynolds, PsyD - a licensed clinical psychologist providing warm, collaborative therapy for adults in Santa Monica, California.',
}

export default function AboutPage() {
  return (
    <> 
      <main className="pt-20">
        <AboutMaya />
        <FinalCTA />
      </main> 
    </>
  )
}
