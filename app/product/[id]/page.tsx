'use client'

import { useState } from 'react'
import { products } from '@/data/products'
import { reviews } from '@/data/reviews'
import { ProductGallery } from '@/components/product-gallery'
import { ProductInfo } from '@/components/product-info'
import { ReviewsSection } from '@/components/reviews-section'
import { RelatedProducts } from '@/components/related-products'
import { motion } from 'framer-motion'
import { notFound } from 'next/navigation'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id)

  if (!product) {
    notFound()
  }

  const productReviews = reviews.filter(r => r.productId === product.id)
  const relatedProducts = products.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4)

  return (
    <div className="min-h-screen bg-white dark:bg-secondary pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <a href="/" className="hover:text-primary">Home</a>
          <span>/</span>
          <a href="/shop" className="hover:text-primary">Shop</a>
          <span>/</span>
          <a href={`/shop?category=${product.category}`} className="hover:text-primary">{product.category}</a>
          <span>/</span>
          <span className="text-primary">{product.name}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          <ProductGallery images={product.images} />
          <ProductInfo product={product} />
        </motion.div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold mb-6">Specifications</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.specifications.map((spec, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ReviewsSection product={product} reviews={productReviews} />
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <RelatedProducts products={relatedProducts} />
          </motion.div>
        )}
      </div>
    </div>
  )
}
