'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const reasons = [
  {
    title: 'Premium Quality',
    description: 'Durable, professional-grade equipment built to last for years of intense training.',
  },
  {
    title: 'Fast Shipping',
    description: 'Quick delivery to your doorstep. Most orders shipped within 24 hours.',
  },
  {
    title: 'Secure Payment',
    description: 'Safe, encrypted transactions with multiple payment options available.',
  },
  {
    title: '24/7 Support',
    description: 'Dedicated customer support team ready to help you anytime, anywhere.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose OxyFit</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Trusted by thousands of fitness enthusiasts worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              className="bg-white dark:bg-secondary p-6 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <CheckCircle className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
