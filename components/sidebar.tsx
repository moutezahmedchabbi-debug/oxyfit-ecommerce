'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const categories = ['Strength', 'Cardio', 'Yoga', 'Boxing', 'Accessories', 'Recovery']

interface SidebarProps {
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
  priceRange: [number, number]
  onPriceChange: (range: [number, number]) => void
}

export function Sidebar({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
}: SidebarProps) {
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      {/* Category Filter */}
      <div>
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full font-semibold text-lg mb-4"
        >
          Category
          <ChevronDown
            size={20}
            className={`transition-transform ${openSections.category ? 'rotate-180' : ''}`}
          />
        </button>
        {openSections.category && (
          <div className="space-y-3">
            <button
              onClick={() => onCategoryChange(null)}
              className={`block text-left text-sm hover:text-primary transition ${
                selectedCategory === null ? 'text-primary font-semibold' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              All Products
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`block text-left text-sm hover:text-primary transition ${
                  selectedCategory === cat ? 'text-primary font-semibold' : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div>
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full font-semibold text-lg mb-4"
        >
          Price Range
          <ChevronDown
            size={20}
            className={`transition-transform ${openSections.price ? 'rotate-180' : ''}`}
          />
        </button>
        {openSections.price && (
          <div className="space-y-4">
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={priceRange[1]}
              onChange={(e) => onPriceChange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
