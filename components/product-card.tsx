'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'
import { Heart, Eye, ShoppingCart, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import toast from 'react-hot-toast'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <motion.div
      className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full flex flex-col"
      whileHover={{ y: -5 }}
    >
      {/* Image Container */}
      <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden group">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {product.featured && (
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              Featured
            </span>
          )}
          {product.new && (
            <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
              New
            </span>
          )}
        </div>

        {discountPercent > 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white font-bold px-2 py-1 rounded-lg text-sm">
            -{discountPercent}%
          </div>
        )}

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="bg-white p-3 rounded-full hover:bg-primary hover:text-white transition"
          >
            <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
          <Link
            href={`/product/${product.id}`}
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition flex items-center gap-2"
          >
            <Eye size={18} />
            View
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-sm hover:text-primary transition line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{product.category}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.round(product.rating) ? 'fill-accent text-accent' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-primary">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* Stock Status */}
        <p className={`text-xs font-semibold mb-4 ${
          product.stock > 0 ? 'text-green-600' : 'text-red-600'
        }`}>
          {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={() => toast.success('Added to cart!')}
          disabled={product.stock === 0}
          className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}
