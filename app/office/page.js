import Navbar from '@/components/Navbar'
import OurOffice from '@/components/OurOffice'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Our Office | Therapy Location in Santa Monica, CA',
  description: 'Visit our Santa Monica office at 123th Street 45 W, Santa Monica, CA 90401. In-person therapy and secure telehealth available throughout California.',
}

export default function OfficePage() {
  return (
    <>
       <main className="pt-20">
        {/* Page Header */}
        <section className="bg-cream py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl text-charcoal mb-6">
              Our Office
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
              A quiet, private space in Santa Monica designed to feel comfortable enough to begin the work.
            </p>
          </div>
        </section>

        <OurOffice />
        <FinalCTA />
      </main>
     </>
  )
}
