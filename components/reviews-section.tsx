'use client'

import { Product, Review } from '@/types'
import { Star, ThumbsUp } from 'lucide-react'
import { motion } from 'framer-motion'

interface ReviewsSectionProps {
  product: Product
  reviews: Review[]
}

export function ReviewsSection({ product, reviews }: ReviewsSectionProps) {
  const avgRating = product.rating
  const ratingDistribution = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length,
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Customer Reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Rating Summary */}
        <motion.div
          className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">{avgRating.toFixed(1)}</div>
            <div className="flex justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.round(avgRating) ? 'fill-accent text-accent' : 'text-gray-300'}
                />
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400">{reviews.length} reviews</p>
          </div>
        </motion.div>

        {/* Rating Distribution */}
        <motion.div
          className="md:col-span-2 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {[5, 4, 3, 2, 1].map(rating => (
            <div key={rating} className="flex items-center gap-3">
              <span className="text-sm font-medium w-12">{rating} ★</span>
              <div className="flex-1 h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent transition-all"
                  style={{
                    width: `${reviews.length > 0 ? (ratingDistribution[rating as keyof typeof ratingDistribution] / reviews.length) * 100 : 0}%`,
                  }}
                />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 w-12 text-right">
                {ratingDistribution[rating as keyof typeof ratingDistribution]}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review, idx) => (
          <motion.div
            key={review.id}
            className="border-t border-gray-200 dark:border-gray-700 pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold">{review.author}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < review.rating ? 'fill-accent text-accent' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
              {review.verified && (
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">✓ Verified</span>
              )}
            </div>
            <h4 className="font-semibold mb-2">{review.title}</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{review.content}</p>
            <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition text-sm">
              <ThumbsUp size={16} />
              Helpful
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
