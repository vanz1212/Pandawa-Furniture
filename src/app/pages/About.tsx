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

      {/* 3 Pillars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">Our Foundation</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-80">
              Pandawa Furniture is built upon three main pillars that define who we are and what we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Pillar 1: Bisnis Keluarga */}
            <div className="bg-[var(--color-cream)] p-8 text-center shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-wood-light)]/20 mb-6">
                <Users className="text-[var(--color-wood-dark)]" size={32} />
              </div>
              <h3 className="mb-4">Bisnis Keluarga</h3>
              <p className="opacity-80">
                A family-owned legacy rooted in Indonesian woodworking traditions. We collaborate with local artisans to preserve craftsmanship passed down through generations.
              </p>
            </div>

            {/* Pillar 2: 100% Kayu Daur Ulang */}
            <div className="bg-[var(--color-green-light)]/10 p-8 text-center shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-green-deep)] mb-6">
                <TreePine className="text-[var(--color-cream)]" size={32} />
              </div>
              <h3 className="mb-4">100% Kayu Daur Ulang</h3>
              <p className="opacity-80">
                We are committed to sustainability by exclusively using reclaimed and recycled teak wood, protecting Indonesia's rainforests and reducing our environmental impact.
              </p>
            </div>

            {/* Pillar 3: Info Kayu Jati Lama */}
            <div className="bg-[var(--color-wood-light)]/10 p-8 text-center shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-wood-medium)] mb-6">
                <Sparkles className="text-[var(--color-cream)]" size={32} />
              </div>
              <h3 className="mb-4">Keistimewaan Kayu Jati Lama</h3>
              <p className="opacity-80">
                Aged recycled teak possesses unique textures and exceptional durability. The marks of history and weather make every piece stronger, more beautiful, and truly one-of-a-kind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-20 bg-[var(--color-cream-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src={image_d455cb17ae1190210b91ca432cd6a6d574f3963a}
                alt="Indonesian artisan craftsmanship"
                className="w-full h-[400px] object-cover shadow-xl"
              />
            </div>
            <div>
              <ImageWithFallback
                src={image_1b6ab2dd5700691fc625338f6c671348c61cf7b8}
                alt="Detailed wood texture"
                className="w-full h-[400px] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
