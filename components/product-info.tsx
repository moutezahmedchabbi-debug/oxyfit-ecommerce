'use client'

import { Product } from '@/types'
import { Heart, Share2, ShoppingCart, Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart (x${quantity})`)
    setQuantity(1)
  }

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      {/* Title and Rating */}
      <div>
        <h1 className="text-4xl font-bold mb-3">{product.name}</h1>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-xl ${i < Math.round(product.rating) ? '⭐' : '☆'}`}
              >
              </span>
            ))}
          </div>
          <span className="text-gray-600 dark:text-gray-400">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
      </div>

      {/* Price */}
      <div>
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-bold text-primary">${product.price}</span>
          {product.originalPrice && (
            <>
              <span className="text-2xl text-gray-500 line-through">${product.originalPrice}</span>
              <span className="text-lg font-semibold text-red-600">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Stock */}
      <div>
        <p className={`text-lg font-semibold ${
          product.stock > 0 ? 'text-green-600' : 'text-red-600'
        }`}>
          {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
        </p>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {product.description}
      </p>

      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <span className="font-semibold">Quantity:</span>
        <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Minus size={18} />
          </button>
          <span className="px-6 py-2 font-semibold">{quantity}</span>
          <button
            onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <ShoppingCart size={20} />
          Add to Cart
        </button>
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition font-semibold flex items-center gap-2"
        >
          <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Share */}
      <div className="flex items-center gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
        <span className="text-gray-600 dark:text-gray-400">Share:</span>
        <button className="p-2 hover:text-primary transition">
          <Share2 size={20} />
        </button>
      </div>
    </motion.div>
  )
}
