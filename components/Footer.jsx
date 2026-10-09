import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Practice Info */}
          <div>
            <h3 className="font-display text-white text-lg mb-4">
              Dr. Maya Reynolds, PsyD
            </h3>
            <p className="text-sm mb-2">Licensed Clinical Psychologist</p>
            <p className="text-sm">
              123th Street 45 W<br />
              Santa Monica, CA 90401
            </p>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="font-display text-white text-lg mb-4">
              Services
            </h3>
            <ul className="text-sm space-y-2">
              <li>In-Person Therapy in Santa Monica</li>
              <li>Secure Telehealth Across California</li>
            </ul>
          </div>

          {/* Column 3 - Navigation */}
          <div>
            <h3 className="font-display text-white text-lg mb-4">
              Navigation
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/areas-of-focus" className="hover:text-white transition-colors">
                  Areas of Focus
                </Link>
              </li>
              <li>
                <Link href="/office" className="hover:text-white transition-colors">
                  Our Office
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-sm text-center">
          <p>
            This website is for informational purposes only and does not constitute a therapist-client relationship.
          </p>
        </div>
      </div>
    </footer>
  )
}
