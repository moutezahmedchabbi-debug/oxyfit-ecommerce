'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-4">About OxyFit</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium fitness equipment for athletes who demand the best. Train strong, live better.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/shop" className="hover:text-primary">Shop</Link></li>
            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-primary">Shipping Info</a></li>
            <li><a href="#" className="hover:text-primary">Returns</a></li>
            <li><a href="#" className="hover:text-primary">FAQ</a></li>
            <li><a href="#" className="hover:text-primary">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>1-800-OXYFIT-1</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>support@oxyfit.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>123 Fitness Ave, NY 10001</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        <p>&copy; 2024 OxyFit. All rights reserved. | Premium Fitness Equipment</p>
      </div>
    </footer>
  )
}
