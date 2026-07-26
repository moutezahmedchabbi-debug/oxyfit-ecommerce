'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    id: '1',
    title: 'Complete Guide to Home Gym Setup',
    excerpt: 'Learn how to set up a complete home gym from scratch with our comprehensive guide.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400',
    category: 'Fitness Tips',
    author: 'John Fitness',
    date: '2024-01-15',
    readTime: 8,
  },
  {
    id: '2',
    title: 'Benefits of Strength Training for Everyone',
    excerpt: 'Discover the incredible health benefits of incorporating strength training into your routine.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
    category: 'Workout Guides',
    author: 'Sarah Coach',
    date: '2024-01-12',
    readTime: 6,
  },
  {
    id: '3',
    title: 'Nutrition for Muscle Recovery',
    excerpt: 'Optimize your recovery with the right nutrition. Get science-backed tips and recipes.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
    category: 'Nutrition',
    author: 'Mike Nutrition',
    date: '2024-01-10',
    readTime: 7,
  },
  {
    id: '4',
    title: 'Cardio vs Strength Training: Which is Better?',
    excerpt: 'Explore the differences and benefits of cardio and strength training for your fitness goals.',
    image: 'https://images.unsplash.com/photo-1595524772250-603b2f4df269?w=400',
    category: 'Fitness Tips',
    author: 'Emma Trainer',
    date: '2024-01-08',
    readTime: 5,
  },
  {
    id: '5',
    title: 'Yoga for Flexibility and Mental Health',
    excerpt: 'Transform your body and mind with these powerful yoga practices.',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400',
    category: 'Workout Guides',
    author: 'Lisa Yoga',
    date: '2024-01-05',
    readTime: 6,
  },
  {
    id: '6',
    title: 'Boxing Workouts for Beginners',
    excerpt: 'Start your boxing journey with our beginner-friendly workout routines.',
    image: 'https://images.unsplash.com/photo-1518611505868-48510c2e00f7?w=400',
    category: 'Workout Guides',
    author: 'Alex Boxer',
    date: '2024-01-02',
    readTime: 7,
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filtered = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts

  const categories = Array.from(new Set(blogPosts.map(p => p.category)))

  return (
    <div className="min-h-screen bg-white dark:bg-secondary pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold mb-4">Fitness Blog</h1>
          <p className="text-gray-600 dark:text-gray-400">Tips, guides, and insights for your fitness journey</p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              selectedCategory === null
                ? 'bg-primary text-white'
                : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
            }`}
          >
            All Posts
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-primary text-white'
                  : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, idx) => (
            <motion.article
              key={post.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-800">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime} min read</span>
                </div>
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
