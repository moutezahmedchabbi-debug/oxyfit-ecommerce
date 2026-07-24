'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [zoomed, setZoomed] = useState(false)

  const next = () => setSelectedIndex((prev) => (prev + 1) % images.length)
  const prev = () => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <motion.div
        className="relative w-full h-96 bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden group cursor-zoom-in"
        onClick={() => setZoomed(!zoomed)}
        whileHover={{ scale: zoomed ? 1 : 1.02 }}
      >
        <Image
          src={images[selectedIndex]}
          alt="Product"
          fill
          className={`object-cover transition-transform ${zoomed ? 'scale-150' : 'scale-100'}`}
        />
        <button className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition">
          <ZoomIn size={20} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition"
        >
          <ChevronRight size={20} />
        </button>
      </motion.div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-auto">
        {images.map((image, idx) => (
          <motion.button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
              selectedIndex === idx
                ? 'border-primary'
                : 'border-gray-300 dark:border-gray-600 hover:border-primary'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <Image src={image} alt={`Thumbnail ${idx}`} fill className="object-cover" />
          </motion.button>
        ))}
      </div>
    </div>
  )
}
