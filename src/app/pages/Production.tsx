import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import productionHeroImg from '../assets/production-hero.jpeg';
import image_08deb210930238d0b61573463464031a301d6be3 from '../assets/08deb210930238d0b61573463464031a301d6be3.png';
import image_f5553a4a208f9b99979e04e8268a24f5a5feabcd from '../assets/f5553a4a208f9b99979e04e8268a24f5a5feabcd.png';
import image_ea4e0d3666996065ddeb190c4028a8c43ca1eab2 from '../assets/ea4e0d3666996065ddeb190c4028a8c43ca1eab2.png';
import image_1aad063b976faef1f4b68af17eca100c145ee9a7 from '../assets/1aad063b976faef1f4b68af17eca100c145ee9a7.png';
import image_e77818745e813bf5ce0d49cc96412216566da6c8 from '../assets/e77818745e813bf5ce0d49cc96412216566da6c8.png';
import image_810c3ec98355f08a9c766659a6ea0cd9314b15ac from '../assets/810c3ec98355f08a9c766659a6ea0cd9314b15ac.png';
import image_ba07c6ac9f6733b987465b474d9baa59a1afefd6 from '../assets/ba07c6ac9f6733b987465b474d9baa59a1afefd6.png';
import image_621d39621b0ef347797640e713ebeb2bd5c51081 from '../assets/621d39621b0ef347797640e713ebeb2bd5c51081.png';
import image_61f250a254b4a06e52d903637392bbace611f978 from '../assets/61f250a254b4a06e52d903637392bbace611f978.png';

export function Production() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-dark-earth/60 z-10"></div>
          <ImageWithFallback src={productionHeroImg} alt="Production & Shipping Hero" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 text-center px-grid-margin max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-display-lg text-display-lg text-white mb-6 drop-shadow-md">Production & Shipping</h1>
          <p className="font-body-lg text-body-lg text-brand-cream/90 max-w-2xl text-center drop-shadow-md">
            From reclaimed wood to your home: a transparent journey of craftsmanship, sustainability, and care.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-section-gap-desktop px-grid-margin max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline-lg text-[32px] md:text-headline-lg text-brand-dark-earth mb-4">Our Transparent Process</h2>
          <p className="font-body-md text-body-md text-brand-dark-earth/70">
            We believe in complete transparency. Here's exactly how your furniture goes from reclaimed wood to a finished masterpiece.
          </p>
        </div>

        {/* Bento Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-grid-gutter relative">
          {/* Decorative Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-brand-cocoa-brown/20 z-0"></div>

          {/* Step 1 */}
          <div className="bg-white rounded-xl p-8 shadow-level1 relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-brand-deep-olive/10 text-brand-deep-olive flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[32px]" style={{fontVariationSettings: "'FILL' 1, 'wght' 300"}}>energy_savings_leaf</span>
            </div>
            <span className="font-label-md text-label-md text-brand-cocoa-brown mb-2">STEP 01</span>
            <h3 className="font-headline-md text-[20px] text-brand-dark-earth mb-3 font-semibold">Sourcing Recycled Teak</h3>
            <p className="font-body-md text-sm text-brand-dark-earth/70">We responsibly source premium recycled teak wood, ensuring sustainability and rich character in every piece.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-8 shadow-level1 relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-brand-terracotta/10 text-brand-terracotta flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[32px]" style={{fontVariationSettings: "'FILL' 1, 'wght' 300"}}>handyman</span>
            </div>
            <span className="font-label-md text-label-md text-brand-cocoa-brown mb-2">STEP 02</span>
            <h3 className="font-headline-md text-[20px] text-brand-dark-earth mb-3 font-semibold">Artisan Crafting</h3>
            <p className="font-body-md text-sm text-brand-dark-earth/70">Master artisans meticulously shape and assemble the wood using traditional, time-honored joinery techniques.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-8 shadow-level1 relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-brand-cocoa-brown text-white flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[32px]" style={{fontVariationSettings: "'FILL' 1, 'wght' 300"}}>shield</span>
            </div>
            <span className="font-label-md text-label-md text-brand-cocoa-brown mb-2">STEP 03</span>
            <h3 className="font-headline-md text-[20px] text-brand-dark-earth mb-3 font-semibold">Quality Finishing</h3>
            <p className="font-body-md text-sm text-brand-dark-earth/70">Each piece undergoes rigorous hand-sanding and finishing to highlight the natural grain and ensure durability.</p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl p-8 shadow-level1 relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-brand-deep-olive/10 text-brand-deep-olive flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[32px]" style={{fontVariationSettings: "'FILL' 1, 'wght' 300"}}>local_shipping</span>
            </div>
            <span className="font-label-md text-label-md text-brand-cocoa-brown mb-2">STEP 04</span>
            <h3 className="font-headline-md text-[20px] text-brand-dark-earth mb-3 font-semibold">Global Shipping</h3>
            <p className="font-body-md text-sm text-brand-dark-earth/70">Carefully packaged and securely shipped globally, delivering artisanal quality directly to your doorstep.</p>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-section-gap-desktop bg-[#fff1e6] px-6 md:px-16 lg:px-24">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center">
            <h2 className="font-headline-lg text-[32px] md:text-headline-lg text-brand-dark-earth mb-6">Craftsmanship in Every Detail</h2>
            <p className="font-body-md text-body-md text-brand-dark-earth/70 mb-8">
              Our commitment to quality goes beyond the surface. We employ techniques passed down through generations to create furniture that lasts lifetimes.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-brand-deep-olive mr-4 mt-1" style={{fontVariationSettings: "'FILL' 1, 'wght' 300"}}>check_circle</span>
                <div>
                  <h4 className="font-label-md text-label-md text-brand-dark-earth mb-1">Traditional Joinery</h4>
                  <p className="font-body-md text-sm text-brand-dark-earth/70">Mortise and tenon joints ensure unmatched structural integrity.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-brand-deep-olive mr-4 mt-1" style={{fontVariationSettings: "'FILL' 1, 'wght' 300"}}>check_circle</span>
                <div>
                  <h4 className="font-label-md text-label-md text-brand-dark-earth mb-1">Meticulous Hand-Sanding</h4>
                  <p className="font-body-md text-sm text-brand-dark-earth/70">Multi-stage sanding reveals the deep, rich texture of reclaimed teak.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-brand-deep-olive mr-4 mt-1" style={{fontVariationSettings: "'FILL' 1, 'wght' 300"}}>check_circle</span>
                <div>
                  <h4 className="font-label-md text-label-md text-brand-dark-earth mb-1">Rigorous Inspection</h4>
                  <p className="font-body-md text-sm text-brand-dark-earth/70">Every millimeter is examined by master craftsmen before approval.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:col-span-7 order-1 md:order-2 mb-10 md:mb-0">
            <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[600px] rounded-xl overflow-hidden shadow-level2 group">
              <ImageWithFallback src={image_08deb210930238d0b61573463464031a301d6be3} alt="Artisan Craftsmanship Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-section-gap-desktop px-grid-margin max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[300px]">
          <div className="md:col-span-1 md:row-span-1 rounded-xl overflow-hidden shadow-level1 group relative">
            <div className="absolute inset-0 bg-brand-dark-earth/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
            <ImageWithFallback src={image_f5553a4a208f9b99979e04e8268a24f5a5feabcd} alt="Artisan Workshop" className="w-full h-[300px] md:h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden shadow-level1 group relative">
            <div className="absolute inset-0 bg-brand-dark-earth/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
            <ImageWithFallback src={image_ea4e0d3666996065ddeb190c4028a8c43ca1eab2} alt="Warehouse Facility" className="w-full h-[300px] md:h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="md:col-span-1 md:row-span-1 rounded-xl overflow-hidden shadow-level1 group relative">
            <div className="absolute inset-0 bg-brand-dark-earth/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
            <ImageWithFallback src={image_1aad063b976faef1f4b68af17eca100c145ee9a7} alt="Furniture Delivery" className="w-full h-[300px] md:h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="md:col-span-2 md:row-span-1 rounded-xl overflow-hidden shadow-level1 group relative">
            <div className="absolute inset-0 bg-brand-dark-earth/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
            <ImageWithFallback src={image_e77818745e813bf5ce0d49cc96412216566da6c8} alt="Happy Customer with Furniture" className="w-full h-[300px] md:h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Global Shipping & Logistics Section */}
      <section className="py-section-gap-desktop bg-[#fff8f4] px-grid-margin">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline-lg text-[32px] md:text-headline-lg text-brand-dark-earth mb-4">Global Shipping</h2>
            <p className="font-body-md text-body-md text-brand-dark-earth/70">
              We ship worldwide, ensuring your furniture arrives in perfect condition.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-level2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-grid-gutter">
              <div className="rounded-xl overflow-hidden aspect-square group">
                <ImageWithFallback src={image_810c3ec98355f08a9c766659a6ea0cd9314b15ac} alt="Furniture Packaging Detail 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square group">
                <ImageWithFallback src={image_ba07c6ac9f6733b987465b474d9baa59a1afefd6} alt="Loading Shipping Truck" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square group">
                <ImageWithFallback src={image_621d39621b0ef347797640e713ebeb2bd5c51081} alt="Furniture Packaging Detail 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square group">
                <ImageWithFallback src={image_61f250a254b4a06e52d903637392bbace611f978} alt="Shipping Container" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
