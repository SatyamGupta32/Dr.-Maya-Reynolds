import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapist in Santa Monica',
  description: 'Warm, collaborative therapy for adults navigating anxiety, trauma, burnout and stress. Dr. Maya Reynolds offers in-person therapy in Santa Monica and secure telehealth across California.',
  keywords: ['therapist santa monica', 'anxiety therapy', 'trauma therapy', 'burnout therapy', 'psychologist santa monica', 'telehealth california'],
  openGraph: {
    title: 'Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapist in Santa Monica',
    description: 'Warm, collaborative therapy for adults navigating anxiety, trauma, burnout and stress. In-person therapy in Santa Monica and secure telehealth across California.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
