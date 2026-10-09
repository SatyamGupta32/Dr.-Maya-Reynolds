import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen bg-cream pt-20 lg:pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
              Trauma & Anxiety Therapist in Santa Monica
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed max-w-prose">
              If you are feeling overwhelmed by anxiety, trauma, burnout, or constant stress, you do not have to navigate it alone. Dr. Maya Reynolds offers warm, collaborative therapy for adults in Santa Monica, with in-person sessions and secure telehealth across California.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-sage text-white rounded-full px-8 py-3 text-center hover:bg-sage-dark transition-colors"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/approach"
                className="inline-block border border-sage text-sage rounded-full px-8 py-3 text-center hover:bg-sage hover:text-white transition-colors"
              >
                Learn About My Approach
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80"
              alt="Calm therapy office with natural light and comfortable seating"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
