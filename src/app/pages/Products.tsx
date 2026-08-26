import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { useState } from 'react';

// Images
import productsHeroImg from '../assets/products-hero.jpeg';
import diningTableImg from '../assets/747c9eacd41d3030f053560c4665dad6782f4c12.png';
import dressoirImg from '../assets/15f0a36d33a7c06acb99f1b5cf23860e31c9e229.png';
import waterSinkImg from '../assets/e5cd0fd4255a0e604c6ba1ec1d5873e3d9ebcf66.png';
import chairSeatingImg from '../assets/370b981283bbd2c5a2a73ec4db7335096541114f.png';
import coffeeTableImg from '../assets/ff89027649427a59d1b62a1e882d28aed26cc775.png';
import bedroomFurnitureImg from '../assets/f3c9df50243d7f9e3d03f042f3f6626ec85bbf74.png';
import proofCabinetImg from '../assets/fc5964b3113fde8a49149cd92f85ea4450691c43.png';
import proofTvStandImg from '../assets/bb679ca50af152a8f0faa607e561f4d8254d5707.png';
import proofStoneSinkImg from '../assets/9d2c15d930a9c6e851693b503a7ba6f8be3a7dab.png';
import proofWardrobeImg from '../assets/93fec46fe2c182559cb71aafc651703bd56b2630.png';
import proofRawSinksImg from '../assets/fbd705d2638d0d483e883fa699ac22047d0b7b86.png';
import proofModernSinkImg from '../assets/b3f18b3721af140365d532d02c4d8bea34c7615a.png';

export function Products() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Tables', 'Chairs', 'Cabinets', 'Accessories'];

  const products = [
    { name: 'Rustic Dining Table', category: 'Tables', description: 'Reclaimed Teak', image: diningTableImg },
    { name: 'Lounge Teak Chair', category: 'Chairs', description: 'Solid Wood & Rattan', image: chairSeatingImg },
    { name: 'Water Sink Stone', category: 'Accessories', description: 'Hand-carved River Stone', image: waterSinkImg },
    { name: 'Coffee Table Minimalist', category: 'Tables', description: 'Solid Oak', image: coffeeTableImg },
    { name: 'Vintage Dressoir', category: 'Cabinets', description: 'Aged Mahogany', image: dressoirImg },
    { name: 'Bedroom Wardrobe', category: 'Cabinets', description: 'Slatted Ash Wood', image: bedroomFurnitureImg },
  ];

  const filteredProducts = activeTab === 'All' 
    ? products 
    : products.filter(p => p.category === activeTab);

  const proofImages = [
    proofCabinetImg,
    proofTvStandImg,
    proofStoneSinkImg,
    proofWardrobeImg,
    proofRawSinksImg,
    proofModernSinkImg
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <ImageWithFallback src={productsHeroImg} alt="Our Collection" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-display-lg text-display-lg text-white mb-6">Our Collection</h1>
          <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto">
            Discover furniture that blends Indonesian heritage with contemporary design.
          </p>
        </div>
      </section>

      {/* Bespoke Notice Section */}
      <section className="w-full bg-brand-cream py-section-gap-mobile md:py-24 border-y border-brand-cocoa-brown/10">
        <div className="max-w-4xl mx-auto px-grid-margin text-center">
          <span className="material-symbols-outlined text-4xl text-brand-terracotta mb-4">design_services</span>
          <h2 className="font-headline-md text-headline-md text-brand-dark-earth mb-4">A Note on Our Pieces</h2>
          <p className="font-body-md text-brand-dark-earth/70 mb-8 max-w-2xl mx-auto">
            While we showcase specific designs to inspire you, Artisan Earth & Timber specializes in bespoke, made-to-order creations. Every piece can be customized to fit your exact specifications and space requirements.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-brand-terracotta text-white px-10 h-14 rounded-full font-label-md text-label-md hover:bg-[#d6854b] hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300 shadow-lg">
            Start Your Custom Design
          </Link>
        </div>
      </section>

      {/* Product Display */}
      <section className="w-full py-section-gap-desktop bg-surface">
        <div className="max-w-7xl mx-auto px-grid-margin">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tabs.map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 h-10 rounded-full font-label-md text-label-md transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-brand-deep-olive text-white shadow-md' 
                    : 'bg-brand-deep-olive/10 text-brand-dark-earth hover:bg-brand-deep-olive hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid-gutter">
            {filteredProducts.map((product, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-level1 overflow-hidden group">
                <div className="aspect-[4/5] relative overflow-hidden bg-brand-cream/50">
                  <ImageWithFallback 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-headline-md text-headline-md text-brand-dark-earth mb-2 text-xl">{product.name}</h3>
                  <p className="font-body-md text-brand-dark-earth/70">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full bg-white py-section-gap-desktop border-t border-brand-cocoa-brown/10">
        <div className="max-w-7xl mx-auto px-grid-margin">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-brand-dark-earth">The Artisan Difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-5xl text-brand-terracotta mb-4" style={{fontVariationSettings: "'wght' 300"}}>workspace_premium</span>
              <h3 className="font-headline-md text-headline-md text-brand-dark-earth mb-2 text-xl">10 Years Mastery</h3>
              <p className="font-body-md text-brand-dark-earth/70">A decade of perfecting traditional techniques.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-5xl text-brand-terracotta mb-4" style={{fontVariationSettings: "'wght' 300"}}>public</span>
              <h3 className="font-headline-md text-headline-md text-brand-dark-earth mb-2 text-xl">Global Standards</h3>
              <p className="font-body-md text-brand-dark-earth/70">Export-quality finishes and durability.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-5xl text-brand-terracotta mb-4" style={{fontVariationSettings: "'wght' 300"}}>handyman</span>
              <h3 className="font-headline-md text-headline-md text-brand-dark-earth mb-2 text-xl">Bespoke Solutions</h3>
              <p className="font-body-md text-brand-dark-earth/70">Tailored entirely to your vision.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-5xl text-brand-terracotta mb-4" style={{fontVariationSettings: "'wght' 300"}}>groups</span>
              <h3 className="font-headline-md text-headline-md text-brand-dark-earth mb-2 text-xl">Local Artisans</h3>
              <p className="font-body-md text-brand-dark-earth/70">Empowering Javanese craftsmen directly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Gallery */}
      <section className="w-full py-section-gap-desktop bg-brand-cream/30">
        <div className="max-w-7xl mx-auto px-grid-margin">
          <div className="mb-12 flex justify-between items-end text-center md:text-left">
            <div className="w-full">
              <h2 className="font-headline-lg text-headline-lg text-brand-dark-earth mb-4">Behind the Craft</h2>
              <p className="font-body-lg text-brand-dark-earth/70 max-w-xl mx-auto md:mx-0">A glimpse into our workshop and the journey of our pieces.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {proofImages.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden relative shadow-level1 aspect-square">
                <ImageWithFallback src={img} alt="Workshop Proof" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-brand-deep-olive py-32 text-center">
        <div className="max-w-3xl mx-auto px-grid-margin flex flex-col items-center">
          <h2 className="font-display-lg text-display-lg text-brand-cream mb-6">Ready to Create Something Unique?</h2>
          <p className="font-body-lg text-brand-cream/80 mb-10 max-w-xl">
            Let's discuss your space, your vision, and how we can bring it to life with sustainable, masterful craftsmanship.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-brand-terracotta text-white px-10 h-14 rounded-full font-label-md text-label-md hover:bg-[#d6854b] hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300 shadow-lg gap-2">
            <span className="material-symbols-outlined">forum</span>
            Chat with us
          </Link>
        </div>
      </section>
    </div>
  );
}
