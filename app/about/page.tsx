export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About OxyFit</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              OxyFit was founded with a simple mission: to make premium fitness equipment accessible to everyone. We believe that quality fitness equipment shouldn't break the bank, and professional-grade gear should be available to home gym enthusiasts, athletes, and fitness professionals alike.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To empower individuals to achieve their fitness goals by providing high-quality, affordable, and reliable equipment that inspires confidence in every workout.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              A world where fitness is accessible to all, regardless of location or budget. We envision OxyFit as the trusted partner in fitness journeys across the globe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Why Choose OxyFit?</h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-3">
                <span className="text-primary text-xl">✓</span>
                Premium quality equipment at competitive prices
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-xl">✓</span>
                Expert customer support available 24/7
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-xl">✓</span>
                Fast and reliable shipping worldwide
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-xl">✓</span>
                100% satisfaction guarantee on all products
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-xl">✓</span>
                Trusted by fitness professionals and enthusiasts
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
