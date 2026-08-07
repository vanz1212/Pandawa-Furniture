import image_e77818745e813bf5ce0d49cc96412216566da6c8 from 'figma:asset/e77818745e813bf5ce0d49cc96412216566da6c8.png'
import image_1aad063b976faef1f4b68af17eca100c145ee9a7 from 'figma:asset/1aad063b976faef1f4b68af17eca100c145ee9a7.png'
import image_ea4e0d3666996065ddeb190c4028a8c43ca1eab2 from 'figma:asset/ea4e0d3666996065ddeb190c4028a8c43ca1eab2.png'
import image_f5553a4a208f9b99979e04e8268a24f5a5feabcd from 'figma:asset/f5553a4a208f9b99979e04e8268a24f5a5feabcd.png'
import image_61f250a254b4a06e52d903637392bbace611f978 from 'figma:asset/61f250a254b4a06e52d903637392bbace611f978.png'
import image_621d39621b0ef347797640e713ebeb2bd5c51081 from 'figma:asset/621d39621b0ef347797640e713ebeb2bd5c51081.png'
import image_810c3ec98355f08a9c766659a6ea0cd9314b15ac from 'figma:asset/810c3ec98355f08a9c766659a6ea0cd9314b15ac.png'
import image_ba07c6ac9f6733b987465b474d9baa59a1afefd6 from 'figma:asset/ba07c6ac9f6733b987465b474d9baa59a1afefd6.png'
import image_08deb210930238d0b61573463464031a301d6be3 from 'figma:asset/08deb210930238d0b61573463464031a301d6be3.png'
import { Leaf, Hammer, Shield, Truck } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Production() {
  const processSteps = [
    {
      icon: Leaf,
      title: 'Sourcing Recycled Teak',
      description: 'We carefully source reclaimed teak from old buildings, boats, and structures across Indonesia. Each piece of wood is inspected for quality and character, ensuring it meets our high standards while honoring its past life.',
      color: 'var(--color-green-deep)',
    },
    {
      icon: Hammer,
      title: 'Artisan Crafting',
      description: 'Our skilled Indonesian artisans using traditional techniques passed down through generations. Each joint, curve, and surface is carefully shaped by hand, bringing modern designs to life while preserving time-honored craftsmanship.',
      color: 'var(--color-wood-medium)',
    },
    {
      icon: Shield,
      title: 'Quality Finishing',
      description: 'Every piece undergoes meticulous finishing using eco-friendly treatments that protect the wood while enhancing its natural beauty. We use sustainable oils and sealants that are safe for your home and the environment.',
      color: 'var(--color-wood-dark)',
    },
    {
      icon: Truck,
      title: 'Global Shipping',
      description: 'We deliver our products across the worldwide with trusted logistic providers to ensure your furniture arrives safely, no matter where you are. We delivered across nation such as UK, Spain, Portugal, Taiwan, Netherland, etc. Each piece is carefully packaged with protective materials and tracking is provided for complete peace of mind.',
      color: 'var(--color-green-medium)',
    },
  ];

  const values = [
    {
      icon: '🌿',
      title: 'Eco-Friendly',
      description: 'Zero new trees cut. 100% recycled materials. Sustainable finishes and eco-conscious production methods.',
    },
    {
      icon: '✋',
      title: 'Handmade',
      description: 'Crafted entirely by hand using traditional Indonesian woodworking techniques. No mass production.',
    },
    {
      icon: '📦',
      title: 'Safe Delivery',
      description: 'Professional packaging, international shipping partners, full insurance, and tracking for every order.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-[var(--color-green-deep)] text-[var(--color-cream)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6 text-[var(--color-cream)] font-[Alata] text-[#ffffff]">Production & Shipping</h1>
          <p className="text-xl opacity-90">From reclaimed wood to your home a transparent journey of craftsmanship, sustainability, and care.</p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Transparent Process</h2>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              We believe in complete transparency. Here's exactly how your furniture goes from reclaimed wood to a finished masterpiece.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connector Line - Desktop */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-[var(--color-cream-dark)]"></div>
                  )}
                  
                  <div className="relative z-10 text-center">
                    <div
                      className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 shadow-lg"
                      style={{ backgroundColor: step.color }}
                    >
                      <IconComponent className="text-[var(--color-cream)]" size={40} />
                    </div>
                    <div className="mb-2 text-sm uppercase tracking-wider opacity-50">
                      Step {index + 1}
                    </div>
                    <h3 className="mb-3">{step.title}</h3>
                    <p className="opacity-70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-20 bg-[var(--color-cream-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Craftsmanship in Every Detail</h2>
              <p className="text-lg mb-4 opacity-80">Our artisans don't just build furniture they honor the wood's history and create pieces that will be cherished for generations.</p>
              <p className="text-lg mb-6 opacity-80">
                From selecting the perfect piece of reclaimed teak to the final hand-rubbed finish, every step is performed with care, skill, and respect for both the material and the craft.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-green-deep)]"></div>
                  <span>Traditional joinery techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-green-deep)]"></div>
                  <span>Hand-sanding and finishing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-green-deep)]"></div>
                  <span>Quality inspection at every stage</span>
                </div>
                
              </div>
            </div>
            <div>
              <ImageWithFallback
                src={image_08deb210930238d0b61573463464031a301d6be3}
                alt="Artisan craftsmanship"
                className="w-full h-[500px] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Icons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ImageWithFallback
              src={image_f5553a4a208f9b99979e04e8268a24f5a5feabcd}
              alt="Happy customer"
              className="w-full h-[280px] object-cover shadow-lg"
            />
            <ImageWithFallback
              src={image_ea4e0d3666996065ddeb190c4028a8c43ca1eab2}
              alt="Warehouse facility"
              className="w-full h-[280px] object-cover shadow-lg"
            />
            <ImageWithFallback
              src={image_1aad063b976faef1f4b68af17eca100c145ee9a7}
              alt="Customer receiving delivery"
              className="w-full h-[280px] object-cover shadow-lg"
            />
            <ImageWithFallback
              src={image_e77818745e813bf5ce0d49cc96412216566da6c8}
              alt="Workshop facility"
              className="w-full h-[280px] object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Shipping Details */}
      <section className="py-20 bg-[var(--color-cream)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-6">Global Shipping </h2>
            <p className="text-lg opacity-80">
              We ship worldwide, ensuring your furniture arrives in perfect condition.
            </p>
          </div>

          <div className="bg-white p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageWithFallback
                src={image_810c3ec98355f08a9c766659a6ea0cd9314b15ac}
                alt="Furniture packaging"
                className="w-full h-[300px] object-cover"
              />
              <ImageWithFallback
                src={image_ba07c6ac9f6733b987465b474d9baa59a1afefd6}
                alt="Loading truck"
                className="w-full h-[300px] object-cover"
              />
              <ImageWithFallback
                src={image_621d39621b0ef347797640e713ebeb2bd5c51081}
                alt="Protective packaging"
                className="w-full h-[300px] object-cover"
              />
              <ImageWithFallback
                src={image_61f250a254b4a06e52d903637392bbace611f978}
                alt="Container loading"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}