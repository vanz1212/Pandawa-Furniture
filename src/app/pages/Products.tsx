import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { AlertCircle } from 'lucide-react';
import diningTableImg from 'figma:asset/747c9eacd41d3030f053560c4665dad6782f4c12.png';
import dressoirImg from 'figma:asset/15f0a36d33a7c06acb99f1b5cf23860e31c9e229.png';
import waterSinkImg from 'figma:asset/e5cd0fd4255a0e604c6ba1ec1d5873e3d9ebcf66.png';
import chairSeatingImg from 'figma:asset/370b981283bbd2c5a2a73ec4db7335096541114f.png';
import coffeeTableImg from 'figma:asset/ff89027649427a59d1b62a1e882d28aed26cc775.png';
import bedroomFurnitureImg from 'figma:asset/f3c9df50243d7f9e3d03f042f3f6626ec85bbf74.png';
import proofCabinetImg from 'figma:asset/fc5964b3113fde8a49149cd92f85ea4450691c43.png';
import proofTvStandImg from 'figma:asset/bb679ca50af152a8f0faa607e561f4d8254d5707.png';
import proofStoneSinkImg from 'figma:asset/9d2c15d930a9c6e851693b503a7ba6f8be3a7dab.png';
import proofWardrobeImg from 'figma:asset/93fec46fe2c182559cb71aafc651703bd56b2630.png';
import proofRawSinksImg from 'figma:asset/fbd705d2638d0d483e883fa699ac22047d0b7b86.png';
import proofModernSinkImg from 'figma:asset/b3f18b3721af140365d532d02c4d8bea34c7615a.png';

export function Products() {
  const categories = [
    {
      name: 'Dining Tables',
      description: 'Gather around the warmth of reclaimed teak',
      image: diningTableImg,
    },
    {
      name: 'Cabinet & storage',
      description: 'Comfort meets artisan craftsmanship',
      image: chairSeatingImg,
    },
    {
      name: 'Water Sink Stone',
      description: 'Hand-carved elegance for your sanctuary',
      image: waterSinkImg,
    },
    {
      name: 'Coffee Tables',
      description: 'Centerpieces that spark conversation',
      image: coffeeTableImg,
    },
    {
      name: 'Dressoir',
      description: 'Elegant solutions for organized living',
      image: dressoirImg,
    },
    {
      name: 'Tv Tables',
      description: 'Rest in sustainable elegance',
      image: bedroomFurnitureImg,
    },
  ];

  const proofImages = [
    {
      image: proofCabinetImg,
      alt: 'Teak wood cabinet ready for shipment'
    },
    {
      image: proofTvStandImg,
      alt: 'Custom TV stand with storage drawers'
    },
    {
      image: proofStoneSinkImg,
      alt: 'Hand-carved stone sink basin'
    },
    {
      image: proofWardrobeImg,
      alt: 'Teak wood wardrobe with storage drawers'
    },
    {
      image: proofRawSinksImg,
      alt: 'Raw petrified wood sink basins'
    },
    {
      image: proofModernSinkImg,
      alt: 'Modern stone sink with teak vanity'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-[var(--color-green-deep)] text-[var(--color-cream)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6 text-[var(--color-cream)] font-[Alata] text-[#ffffff]">Our Collection</h1>
          <p className="text-xl opacity-90">
            Discover furniture that blends Indonesian heritage with contemporary design.
          </p>
        </div>
      </section>

      {/* Important Notice - Bespoke Design */}
      <section className="py-12 bg-[var(--color-wood-light)] text-[var(--color-wood-dark)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="flex-shrink-0 mt-1" size={32} />
            <div>
              <h3 className="mb-3">We Specialize in Bespoke & Custom Designs</h3>
              <p className="text-lg mb-3">
                The catalog below represents a curated selection of our capabilities and furniture categories. However, our true passion lies in creating <strong>custom, made-to-order pieces</strong> tailored specifically to your vision, space, and lifestyle.
              </p>
              <p className="text-lg mb-4">
                We invite you to <strong>discuss your specific needs with us</strong> to create a truly unique piece that reflects your personal style and honors the artisan tradition of Indonesian woodworking.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-[var(--color-green-deep)] text-[var(--color-cream)] px-6 py-3 tracking-wide hover:bg-[var(--color-green-medium)] transition-colors"
              >
                Start Your Custom Design
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">and more</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Pandawa Furniture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose Pandawa Furniture?</h2>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              At Pandawa Furniture, we don't just build furniture; we preserve history and nature through every piece we create. Here is why we are the trusted partner for your interior needs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-[var(--color-cream)] shadow-md">
              <h3 className="mb-3">A Decade of Mastery</h3>
              <p className="opacity-70 leading-relaxed">
                With over 10 years of dedicated experience, we have mastered the art of working with recycled teak wood, transforming reclaimed timber into timeless masterpieces.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-cream)] shadow-md">
              <h3 className="mb-3">Global Quality Standards</h3>
              <p className="opacity-70 leading-relaxed">
                Our craftsmanship has crossed borders, earning trust and recognition in various countries worldwide. We maintain a consistent export-quality standard that meets the demands of international markets.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-cream)] shadow-md">
              <h3 className="mb-3">Bespoke & Custom Solutions</h3>
              <p className="opacity-70 leading-relaxed">
                We believe every space is unique. We offer personalized consultations and custom order services, allowing you to tailor designs that perfectly suit your specific needs and aesthetic vision.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-cream)] shadow-md">
              <h3 className="mb-3">Empowering Local Artisans</h3>
              <p className="opacity-70 leading-relaxed">
                Every piece is handcrafted by local Indonesian artisans whose skills have been passed down through generations. Their unparalleled expertise ensures that every joint, texture, and finish is of the highest possible quality.
              </p>
            </div>
          </div>

          {/* Photo Gallery - Proof Images Placeholder */}
          <div className="mt-12">
            <h3 className="text-center mb-8">Real Photos & Proof</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {proofImages.map((item, index) => (
                <div key={index} className="relative aspect-square bg-[var(--color-cream)] overflow-hidden shadow-md">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-green-deep)] text-[var(--color-cream)] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-[var(--color-cream)] text-[#ffffff]">Ready to Create Something Unique?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's collaborate on a custom piece that perfectly fits your space and tells your story.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[var(--color-wood-light)] text-[var(--color-wood-dark)] px-8 py-4 text-lg tracking-wide hover:bg-[var(--color-cream)] transition-colors"
          >
            Discuss Your Custom Design
          </Link>
        </div>
      </section>
    </div>
  );
}