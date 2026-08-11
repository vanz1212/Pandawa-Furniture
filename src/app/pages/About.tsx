import image_d455cb17ae1190210b91ca432cd6a6d574f3963a from 'figma:asset/d455cb17ae1190210b91ca432cd6a6d574f3963a.png'
import image_1b6ab2dd5700691fc625338f6c671348c61cf7b8 from 'figma:asset/1b6ab2dd5700691fc625338f6c671348c61cf7b8.png'
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Heart, TreePine, Sparkles, Users } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-[var(--color-green-deep)] text-[var(--color-cream)] bg-[#4a3e2d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6 text-[var(--color-cream)] text-[#ffffff] font-[Alata]">About Pandawa Furniture</h1>
          <p className="text-xl opacity-90">A family legacy rooted in Indonesian craftsmanship, sustainability, and the timeless beauty of teak furniture</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">About US</h2>
              <p className="text-lg mb-4 opacity-80">Pandawa Furniture is a family-owned business with deep roots in Indonesian woodworking tradition. For generations, our family has been experienced more than 10 years in furniture company, within collaboration with local artist that brings them togetherness.</p>
              <p className="text-lg mb-4 opacity-80">
                What began as a small workshop in Java has grown into a respected name in sustainable luxury furniture. Yet, we remain true to our origins: family values, respect for nature, and dedication to exceptional craftsmanship.
              </p>
              <p className="text-lg opacity-80">
                Every piece we create carries our family's signature—a commitment to quality, authenticity, and the belief that furniture should be more than functional. It should be meaningful.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src={image_d455cb17ae1190210b91ca432cd6a6d574f3963a}
                alt="Indonesian artisan craftsmanship"
                className="w-full h-[500px] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-[var(--color-cream-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-wood-light)]/30 mb-6">
            <Heart className="text-[var(--color-wood-dark)]" size={40} />
          </div>
          <h2 className="mb-6">Our Philosophy</h2>
          <p className="text-2xl mb-6 italic opacity-80">
            "Bringing the soul of nature into the modern world."
          </p>
          <p className="text-lg opacity-80">
            We believe that furniture should connect us to nature, not distance us from it. Every scratch, every texture, every unique grain in our recycled teak wood tells a story—of rain and sun, of time and transformation. We don't hide these marks; we celebrate them. They are proof that our materials have lived, and now they continue their journey in your home.
          </p>
        </div>
      </section>

      {/* Sustainability & Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">Sustainability & Social Impact</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-80">
              Our commitment extends beyond beautiful furniture. We are dedicated to protecting Indonesian rainforests and empowering local communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Environmental Impact */}
            <div className="bg-[var(--color-green-light)]/10 p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-green-deep)] flex items-center justify-center">
                    <TreePine className="text-[var(--color-cream)]" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3">100% Recycled Teak Wood</h3>
                  <p className="opacity-80 mb-4">
                    We exclusively use reclaimed and recycled teak, giving new life to wood from old buildings, boats, and structures. This approach preserves Indonesia's precious rainforests—no new trees are cut for our furniture.
                  </p>
                  <p className="opacity-80">
                    By choosing recycled materials, we reduce environmental impact while showcasing the natural character and weathered beauty that only aged teak can provide.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Impact */}
            <div className="bg-[var(--color-wood-light)]/10 p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-wood-medium)] flex items-center justify-center">
                    <Users className="text-[var(--color-cream)]" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3">Empowering Local Artisans</h3>
                  <p className="opacity-80 mb-4">
                    We collaborate closely with skilled Indonesian artisans, many from small villages where woodworking traditions have been passed down through generations.
                  </p>
                  <p className="opacity-80">
                    By providing fair wages and consistent work, we support local economies and help preserve traditional woodworking techniques that are at risk of being lost in the modern world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-20 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src={image_1b6ab2dd5700691fc625338f6c671348c61cf7b8}
                alt="Detailed wood texture"
                className="w-full h-[400px] object-cover shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-wood-light)]/20 mb-6">
                <Sparkles className="text-[var(--color-wood-dark)]" size={32} />
              </div>
              <h2 className="mb-6">Every Piece Tells a Story</h2>
              <p className="text-lg mb-4 opacity-80">The beauty of recycled teak lies in its imperfections. Each piece of wood has weathered decades sometimes centuries exposed to the elements, bearing the marks of its history.</p>
              <p className="text-lg opacity-80">These natural variations the rich patina, the subtle color shifts, the organic textures make every piece of furniture truly one-of-a-kind. When you choose Pandawa, you're not just buying furniture; you're becoming part of a continuing story.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
