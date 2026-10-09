'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Where is Dr. Reynolds\' office located?',
      answer: 'The office is at 123th Street 45 W, Santa Monica, CA 90401.',
    },
    {
      question: 'Does she offer in-person therapy?',
      answer: 'Yes, in-person sessions are available at the Santa Monica office.',
    },
    {
      question: 'Does she offer telehealth?',
      answer: 'Yes, secure telehealth is available for clients located in California.',
    },
    {
      question: 'Who does she work with?',
      answer: 'Adults — often high-achieving, thoughtful, and self-aware people including professionals, entrepreneurs, and creatives.',
    },
    {
      question: 'What can therapy help with?',
      answer: 'Anxiety, panic, trauma, burnout, chronic stress, perfectionism, emotional exhaustion, relationship difficulties, and difficulty feeling present or settled.',
    },
    {
      question: 'What therapeutic approaches does she use?',
      answer: 'CBT, EMDR, mindfulness-based practices, and body-oriented techniques, tailored to each person\'s needs.',
    },
    {
      question: 'Does she work with trauma?',
      answer: 'Yes. Trauma work — whether from a single incident, complex history, or chronic stress — is an important part of the practice, approached at a careful and collaborative pace.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-28 bg-warm-gray px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-charcoal text-center mb-12">
          Common Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-warm-gray overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-cream transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-charcoal pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-sage flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-4 text-charcoal-light leading-relaxed"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
