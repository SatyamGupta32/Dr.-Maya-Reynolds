export default function FocusAreas() {
  const areas = [
    'Anxiety',
    'Panic Attacks',
    'Trauma',
    'Burnout',
    'Perfectionism',
    'Chronic Stress',
    'Emotional Exhaustion',
    'Overthinking',
    'Difficulty Sleeping',
    'Feeling On Edge',
    'Relationship Difficulties',
    'Disconnection',
  ]

  return (
    <section id="focus" className="py-20 bg-warm-gray px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-charcoal text-center mb-12">
          You might be dealing with...
        </h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full bg-white border border-warm-gray text-charcoal px-5 py-2 text-sm"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
