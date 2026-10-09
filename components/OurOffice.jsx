import Image from 'next/image'

export default function OurOffice() {
  return (
    <section id="office" className="py-20 md:py-28 bg-cream px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sage text-sm font-medium tracking-widest uppercase mb-4">
            Our Office
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-6">
            A Quiet Space to Begin
          </h2>
          <p className="text-lg text-charcoal-light leading-relaxed max-w-3xl mx-auto">
            The office is located in Santa Monica, designed to be quiet, private, and comfortable. Natural light, calm surroundings. A place where you can feel settled enough to actually say what&apos;s on your mind.
          </p>
        </div>

        {/* Address */}
        <div className="text-center mb-12">
          <p className="font-display text-xl text-charcoal mb-2">
            123th Street 45 W
          </p>
          <p className="font-display text-xl text-charcoal">
            Santa Monica, CA 90401
          </p>
        </div>

        {/* Service Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white border border-warm-gray rounded-xl p-6 text-center">
            <h3 className="font-display text-lg text-charcoal mb-2">
              In-Person Therapy
            </h3>
            <p className="text-charcoal-light text-sm">
              Santa Monica Office
            </p>
          </div>
          <div className="bg-white border border-warm-gray rounded-xl p-6 text-center">
            <h3 className="font-display text-lg text-charcoal mb-2">
              Secure Telehealth
            </h3>
            <p className="text-charcoal-light text-sm">
              Available Across California
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/office1.jpeg"
              alt="Dr. Maya Reynolds therapy office in Santa Monica - comfortable therapy space with natural lighting"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/office2.jpeg"
              alt="Warm and calm therapy room at Dr. Maya Reynolds office in Santa Monica"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
