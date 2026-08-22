import { Link } from 'react-router';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-wood-dark)] text-[var(--color-cream)] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="text-2xl tracking-wider mb-2">PANDAWA</div>
            <div className="text-xs uppercase tracking-widest opacity-70 mb-4">Furniture</div>
            <p className="text-sm opacity-80 leading-relaxed">
              Timeless elegance from Indonesian recycled teak.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/products" className="hover:opacity-100 transition-opacity">Products</Link></li>
              <li><Link to="/production" className="hover:opacity-100 transition-opacity">Production</Link></li>
            </ul>
          </div>

          {/* Sustainability */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Our Commitment</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>100% Recycled Teak</li>
              <li>Sustainable Practices</li>
              <li>Local Artisan Support</li>
              <li>Eco-Friendly Finishes</li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Connect & Visit</h4>
            <div className="space-y-3 mb-6">
              <a 
                href="https://wa.me/" 
                className="flex items-center space-x-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <MessageCircle size={18} />
                <span>WhatsApp: [NOMOR TELEPON]</span>
              </a>
              <a 
                href="mailto:info@pandawafurniture.com" 
                className="flex items-center space-x-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Mail size={18} />
                <span>Email Us</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <h4 className="text-sm uppercase tracking-wider mb-2">Location</h4>
            <p className="text-sm opacity-80 leading-relaxed">
              [ALAMAT LENGKAP TOKO/WORKSHOP]
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--color-wood-medium)] mt-8 pt-8 text-center text-sm opacity-70">
          <p>2026 Pandawa Furniture. Crafted with care in Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}