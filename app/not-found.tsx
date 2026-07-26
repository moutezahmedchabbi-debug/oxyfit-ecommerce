'use client'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary pt-24 pb-12 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl font-semibold mb-2">Page Not Found</p>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Sorry, we couldn't find what you're looking for.</p>
        <a href="/" className="btn-primary inline-block">
          Back to Home
        </a>
      </div>
    </div>
  )
}
