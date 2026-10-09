import Navbar from '@/components/Navbar'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'FAQ | Common Questions About Therapy with Dr. Maya Reynolds',
  description: 'Frequently asked questions about therapy services, location, telehealth, therapeutic approach, and what to expect when working with Dr. Maya Reynolds.',
}

export default function FAQPage() {
  return (
    <>
       <main className="pt-20">
        {/* Page Header */}
        <section className="bg-cream py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl text-charcoal mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
              Common questions about therapy, my approach, and what to expect when we work together.
            </p>
          </div>
        </section>

        <FAQ />
        <FinalCTA />
      </main>
     </>
  )
}
