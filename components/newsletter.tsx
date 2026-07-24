'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
    }, 2000)
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Mail className="mx-auto mb-4" size={40} />
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8 text-green-100">
            Subscribe to get exclusive deals, fitness tips, and new product announcements.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="flex gap-2 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="bg-accent hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition"
          >
            {submitted ? '✓' : <ArrowRight size={20} />}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
