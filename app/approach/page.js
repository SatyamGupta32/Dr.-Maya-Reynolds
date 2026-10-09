import Navbar from '@/components/Navbar'
import HowIWork from '@/components/HowIWork'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'My Approach | Collaborative, Evidence-Based Therapy in Santa Monica',
  description: 'Dr. Maya Reynolds offers a warm, collaborative approach combining CBT, EMDR, mindfulness-based practices, and body-oriented techniques tailored to each person\'s needs.',
}

export default function ApproachPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Page Header */}
        <section className="bg-cream py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl text-charcoal mb-6">
              How I Work
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
              Therapy that is collaborative, grounded, and practical. Structured enough to feel supportive while allowing space for reflection and deeper understanding.
            </p>
          </div>
        </section>

        <HowIWork />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
