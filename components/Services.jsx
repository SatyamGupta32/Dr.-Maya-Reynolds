import Image from 'next/image'

export default function Services() {
  const services = [
    {
      title: 'Anxiety Therapy in Santa Monica',
      description: 'For adults experiencing worry, panic, perfectionism, chronic stress, and difficulty feeling calm or settled. We work together to understand the patterns beneath the anxiety and build practical tools for regulation.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      alt: 'Peaceful natural landscape with calm water',
    },
    {
      title: 'Trauma Therapy in Santa Monica',
      description: 'A safe, carefully paced approach for single-incident or long-standing trauma, childhood experiences, or relationship-related patterns. Trauma work begins with safety, stabilization, and understanding how the past shapes the present.',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80',
      alt: 'Serene natural environment with soft lighting',
    },
    {
      title: 'Burnout Therapy in Santa Monica',
      description: 'For professionals and entrepreneurs stepping back from constant pressure, reconnecting with themselves, and creating more sustainable ways of living and working. Therapy offers space to slow down and rebuild.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
      alt: 'Calm forest path with natural light',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-cream px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-charcoal text-center mb-16">
          How I Can Help
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-warm-gray"
            >
              <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-xl text-charcoal mb-4">
                {service.title}
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
