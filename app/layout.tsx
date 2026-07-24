import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'OxyFit - Premium Fitness Equipment | Train Strong. Live Better.',
  description: 'Shop premium gym equipment for home and professional athletes. Dumbbells, barbells, treadmills, and more at OxyFit.',
  keywords: 'gym equipment, fitness, dumbbells, barbells, home gym, sports equipment',
  openGraph: {
    title: 'OxyFit - Premium Fitness Equipment',
    description: 'Premium gym equipment for home and professional athletes.',
    url: 'https://oxyfit.com',
    type: 'website',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#16A34A" />
      </head>
      <body className="bg-white dark:bg-secondary text-black dark:text-white">
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
