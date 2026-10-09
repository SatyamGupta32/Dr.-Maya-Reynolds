import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Schedule a Consultation | Dr. Maya Reynolds Therapy in Santa Monica',
  description: 'Take the first step. Schedule a consultation with Dr. Maya Reynolds for anxiety, trauma, or burnout therapy in Santa Monica or via telehealth across California.',
}

export default function ContactPage() {
  return (
    <>
       <main className="pt-20">
        {/* Contact Hero */}
        <section className="bg-sage text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl mb-6">
              Schedule a Consultation
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-white/90">
              Taking the first step can feel hard. If you are ready to explore whether therapy might help, I would be glad to talk.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-cream py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Office Location */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="font-display text-2xl text-charcoal mb-4">
                  Office Location
                </h2>
                <address className="not-italic text-charcoal-light leading-relaxed">
                  <strong className="text-charcoal">Dr. Maya Reynolds, PsyD</strong><br />
                  Licensed Clinical Psychologist<br /><br />
                  123th Street 45 W<br />
                  Santa Monica, CA 90401
                </address>
              </div>

              {/* Services Offered */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="font-display text-2xl text-charcoal mb-4">
                  Services Offered
                </h2>
                <ul className="space-y-3 text-charcoal-light">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sage mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>In-person therapy at the Santa Monica office</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sage mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Secure telehealth for clients located in California</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Note */}
            <div className="mt-12 bg-warm-gray rounded-2xl p-8 text-center">
              <p className="text-charcoal-light leading-relaxed max-w-2xl mx-auto">
                <strong className="text-charcoal">Note:</strong> This website is for informational purposes only and does not constitute a therapist-client relationship. To schedule a consultation or inquire about availability, please contact the office directly.
              </p>
            </div>
          </div>
        </section>
      </main>
     </>
  )
}
