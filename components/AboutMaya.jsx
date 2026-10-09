import Image from 'next/image'

export default function AboutMaya() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/Dr. Maya Reynolds.png"
              alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl text-charcoal">
              About Dr. Maya Reynolds
            </h2>
            <div className="space-y-4 text-charcoal-light leading-relaxed">
              <p>
                Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist based in Santa Monica, California. She works with adults who are thoughtful, self-aware, and often carrying more than people around them realize.
              </p>
              <p>
                Her approach combines practical tools with space for deeper reflection. She draws on Cognitive Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques — choosing the approach based on what each person needs.
              </p>
              <p>
                Many of her clients are professionals, entrepreneurs, and creatives dealing with anxiety, trauma, burnout, perfectionism, and chronic stress. They may look like they are functioning well externally while internally feeling exhausted, anxious, or overwhelmed.
              </p>
              <p>
                Therapy with Dr. Reynolds is warm, collaborative, grounded, and supportive. It&apos;s a place where you can finally exhale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
