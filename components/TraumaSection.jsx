import Image from 'next/image'

export default function TraumaSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-gray px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl text-charcoal">
              Making Space for Healing
            </h2>
            <div className="space-y-4 text-charcoal-light leading-relaxed">
              <p>
                Trauma work is a significant part of the practice. Whether the experience was a single incident, a long-standing pattern, or something that developed over years of chronic stress, the work begins with safety.
              </p>
              <p>
                Some people come to therapy after a specific event. Others are navigating complex trauma, childhood experiences, relationship-related patterns, or the lingering effects of chronic stress.
              </p>
              <p>
                Trauma therapy is carefully paced. It&apos;s about safety, stabilization, and regulation. It&apos;s about understanding how past experiences affect present life — in your body, your emotions, and your relationships — and developing a stronger sense of safety and connection.
              </p>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80"
              alt="Calm water and natural light"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
