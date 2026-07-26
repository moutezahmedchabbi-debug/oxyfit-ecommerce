# OxyFit - Premium Fitness Equipment E-Commerce Store

**Tagline:** Train Strong. Live Better.

## Overview

OxyFit is a modern, premium e-commerce platform selling high-quality fitness and sports equipment. Built with Next.js 15, React 19, and TypeScript, it features a clean, athletic design with green and dark navy branding.

## Features

### 🏋️ Product Catalog
- **50+ Premium Products** across 6 categories:
  - Strength (Dumbbells, Barbells, Kettlebells, etc.)
  - Cardio (Treadmills, Bikes, Rowing Machines)
  - Yoga (Mats, Blocks, Straps)
  - Boxing (Heavy Bags, Gloves, Speed Bags)
  - Accessories (Gloves, Shakers, Bags)
  - Recovery (Foam Rollers, Massage Guns, Sleeves)

### 🎨 Design & UX
- Responsive design (mobile, tablet, desktop)
- Dark/Light mode support
- Smooth animations with Framer Motion
- Modern card-based layouts
- Glassmorphism effects
- Professional typography

### 🛍️ Shopping Experience
- Advanced product filtering (category, price, rating)
- Multiple sorting options (newest, price, popularity)
- Detailed product pages with image galleries
- Customer reviews and ratings
- Add to cart and wishlist functionality
- Quick view modals
- Search functionality

### 📱 Key Pages
- **Homepage** - Hero section, categories, featured products, testimonials
- **Shop** - Filtered product grid with sorting and pagination
- **Product Detail** - Gallery, specs, reviews, related products
- **About** - Company story, mission, vision
- **Blog** - Fitness tips, workout guides, nutrition articles
- **Contact** - Contact form and business information

### ✨ Additional Features
- Toast notifications for user actions
- Loading states and skeletons
- Empty states
- 404 page
- SEO optimization
- Sitemap and robots.txt
- Accessibility features (ARIA labels, keyboard navigation)

## Tech Stack

- **Frontend:** Next.js 15, React 19, TypeScript
- **Styling:** Tailwind CSS, custom CSS animations
- **UI Components:** shadcn/ui, Lucide Icons
- **Animations:** Framer Motion
- **State Management:** Zustand, React Hooks
- **Notifications:** React Hot Toast
- **Theme:** next-themes for dark/light mode

## Project Structure

```
oxyfit-ecommerce/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   ├── shop/
│   ├── product/[id]/
│   ├── about/
│   ├── contact/
│   ├── blog/
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── categories.tsx
│   ├── featured-products.tsx
│   ├── product-card.tsx
│   ├── product-gallery.tsx
│   ├── product-info.tsx
│   ├── reviews-section.tsx
│   ├── related-products.tsx
│   ├── sidebar.tsx
│   ├── search-bar.tsx
│   ├── newsletter.tsx
│   ├── testimonials.tsx
│   ├── why-choose-us.tsx
│   └── providers.tsx
├── data/
│   ├── products.ts (50+ products)
│   ├── testimonials.ts (12+ testimonials)
│   └── reviews.ts (20+ reviews)
├── hooks/
│   ├── useCart.ts
│   └── useWishlist.ts
├── lib/
│   └── utils.ts
├── styles/
│   └── globals.css
├── types/
│   └── index.ts
└── public/
```

## Color Scheme

- **Primary:** #16A34A (Green)
- **Secondary:** #0F172A (Dark Navy)
- **Accent:** #F97316 (Orange)
- **White** for backgrounds and text
- **Gray** for secondary content

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build

```bash
npm run build
npm run start
```

## Product Data

The project includes comprehensive mock data:
- **50+ realistic fitness products** with prices, ratings, and descriptions
- **12+ customer testimonials**
- **20+ product reviews**
- **Product images** from Unsplash (placeholder URLs)

## Performance

- Image optimization with Next.js Image component
- Code splitting and dynamic imports
- Server Components where possible
- Lazy loading for images
- Suspense boundaries
- Optimized bundle size

## SEO

- Metadata configuration
- Open Graph tags
- Twitter cards support
- Structured data ready
- Sitemap and robots.txt
- Canonical URLs
- Mobile-friendly design

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance
- Focus indicators
- Semantic HTML

## Future Enhancements

- Real authentication system (NextAuth.js)
- Database integration (PostgreSQL/MongoDB)
- Payment processing (Stripe/PayPal)
- User accounts and order history
- Admin dashboard
- Real-time inventory management
- Email notifications
- Analytics integration
- Wishlist persistence
- Product recommendations
- Advanced search with AI

## License

MIT

## Support

For questions or support, visit [support@oxyfit.com](mailto:support@oxyfit.com)
