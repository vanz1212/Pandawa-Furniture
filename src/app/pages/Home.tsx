import heroBg from 'figma:asset/2874e70677e9347f1c498bc483444526782683b2.png'
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Leaf, Users, Sparkles } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroBg}
            alt="Teak furniture in modern living room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-[var(--color-cream)] px-4 max-w-4xl mx-auto">
          <h1 className="mb-6 text-[var(--color-cream)] font-[Alata] text-[#ffffff]">Timeless Craft, Naturally Involved</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-center">
            Where heritage craftsmanship meets sustainable luxury. Each piece tells a story of nature, tradition, and modern living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-[var(--color-wood-light)] text-[var(--color-wood-dark)] px-8 py-4 text-lg tracking-wide hover:bg-[var(--color-cream)] transition-colors"
            >
              Explore Collection
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[var(--color-cream)] text-[var(--color-cream)] px-8 py-4 text-lg tracking-wide hover:bg-[var(--color-cream)] hover:text-[var(--color-wood-dark)] transition-colors"
            >
              Chat with us
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-green-light)]/20 mb-6">
                <Leaf className="text-[var(--color-green-deep)]" size={32} />
              </div>
              <h3 className="mb-3">Source from Nature</h3>
              <p className="opacity-70">
                Honoring the beauty of Indonesian resources through responsible craftsmanship.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-wood-light)]/20 mb-6">
                <Users className="text-[var(--color-wood-dark)]" size={32} />
              </div>
              <h3 className="mb-3">Artisan Crafted</h3>
              <p className="opacity-70">
                Collaborating with local Indonesian artisans, empowering communities and preserving traditional skills.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-wood-light)]/20 mb-6">
                <Sparkles className="text-[var(--color-wood-medium)]" size={32} />
              </div>
              <h3 className="mb-3">Bespoke Design</h3>
              <p className="opacity-70">
                Every piece can be customized to your vision, creating furniture that is uniquely yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Collection Section */}
      <section className="py-20 bg-[var(--color-cream-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-12">All Collection</h2>
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square bg-gray-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1604597935770-440bc0f73c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xlZCUyMHdvb2QlMjB0ZXh0dXJlJTIwbmF0dXJhbHxlbnwxfHx8fDE3NzA3MjQ1MzF8MA&ixlib=rb-4.1.0&q=80&w=500&utm_source=figma&utm_medium=referral"
                alt="Collection item 1"
                className="w-full h-full object-cover shadow-md"
              />
            </div>
            {/* TODO: Add more gallery items here */}
            <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-500 shadow-md">
              <span className="opacity-70">Gallery Image 2</span>
            </div>
            <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-500 shadow-md">
              <span className="opacity-70">Gallery Image 3</span>
            </div>
            <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-500 shadow-md">
              <span className="opacity-70">Gallery Image 4</span>
            </div>
            <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-500 shadow-md">
              <span className="opacity-70">Gallery Image 5</span>
            </div>
            <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-500 shadow-md">
              <span className="opacity-70">Gallery Image 6</span>
            </div>
          </div>
          <div className="mt-12">
            <Link
              to="/products"
              className="inline-block bg-[var(--color-green-deep)] text-[var(--color-cream)] px-8 py-4 tracking-wide hover:bg-[var(--color-green-medium)] transition-colors"
            >
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-green-deep)] text-[var(--color-cream)] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-[var(--color-cream)] text-[#ffffff]">Create your own detail</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your vision and craft furniture that perfectly fits your space and style.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[var(--color-wood-light)] text-[var(--color-wood-dark)] px-8 py-4 text-lg tracking-wide hover:bg-[var(--color-cream)] transition-colors"
          >
            Start Your Custom Order
          </Link>
        </div>
      </section>
    </div>
  );
}