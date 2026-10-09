import Image from 'next/image'

export default function HowIWork() {
  const features = [
    {
      label: 'Collaborative',
      description: 'You&apos;re the expert on your own life — I bring tools, perspective, and support',
    },
    {
      label: 'Evidence-based',
      description: 'Drawing on CBT, EMDR, mindfulness, and body-oriented approaches',
    },
    {
      label: 'Depth-oriented',
      description: 'Going beyond symptom relief to understand patterns and build lasting change',
    },
    {
      label: 'Practical',
      description: 'Each session leaves you with something concrete',
    },
  ]

  return (
    <section id="approach" className="py-20 md:py-28 bg-warm-gray px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
              alt="Calm natural environment"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="font-display text-3xl md:text-4xl text-charcoal">
              How I Work
            </h2>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Therapy with me is collaborative, grounded, and practical. It&apos;s structured enough to feel supportive while allowing space for reflection and deeper understanding. You&apos;re actively involved at every stage.
            </p>
            <div className="space-y-4 pt-4">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-sage rounded-full mt-2"></div>
                  <div>
                    <span className="font-semibold text-charcoal">{feature.label}:</span>
                    <span className="text-charcoal-light"> {feature.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
