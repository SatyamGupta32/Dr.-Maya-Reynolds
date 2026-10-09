import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-sage px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">
          Therapy can be a place to slow down, reconnect, and move forward.
        </h2>
        <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
          Therapy offers a space to understand yourself more clearly, develop insight, and build more sustainable ways of living and working — with support, not pressure.
        </p>
        <div className="pt-6">
          <Link
            href="/contact"
            className="inline-block bg-white text-sage rounded-full px-10 py-4 text-lg font-medium hover:bg-cream transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
