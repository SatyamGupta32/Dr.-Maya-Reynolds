import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import TraumaSection from '@/components/TraumaSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Areas of Focus | Anxiety, Trauma & Burnout Therapy in Santa Monica',
  description: 'Dr. Maya Reynolds specializes in therapy for anxiety, trauma, burnout, perfectionism, and chronic stress. Serving adults in Santa Monica and throughout California via telehealth.',
}

export default function AreasOfFocusPage() {
  return (
    <>
       <main className="pt-20">
        {/* Page Header */}
        <section className="bg-cream py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl text-charcoal mb-6">
              Areas of Focus
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
              Specialized therapy for adults navigating anxiety, trauma, burnout, and the complex patterns that develop when we push through stress for too long.
            </p>
          </div>
        </section>

        <Services />
        <TraumaSection />
        <FinalCTA />
      </main>
     </>
  )
}
