'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Dumbbell, Zap, Leaf, Flame, Package, Activity } from 'lucide-react'

const categories = [
  { name: 'Strength', icon: Dumbbell, color: 'from-blue-500 to-blue-600' },
  { name: 'Cardio', icon: Activity, color: 'from-red-500 to-red-600' },
  { name: 'Yoga', icon: Leaf, color: 'from-green-500 to-green-600' },
  { name: 'Boxing', icon: Flame, color: 'from-orange-500 to-orange-600' },
  { name: 'Accessories', icon: Package, color: 'from-purple-500 to-purple-600' },
  { name: 'Recovery', icon: Zap, color: 'from-yellow-500 to-yellow-600' },
]

export function Categories() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our complete range of premium fitness equipment
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/shop?category=${cat.name}`}>
                  <div className={`bg-gradient-to-br ${cat.color} p-6 rounded-2xl text-white text-center hover:shadow-lg transition cursor-pointer group`}>
                    <Icon size={32} className="mx-auto mb-3 group-hover:scale-110 transition" />
                    <p className="font-semibold">{cat.name}</p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
