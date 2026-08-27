import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Images
import productsHeroImg from '../assets/products-hero.jpeg';
import dressoirImg from '../assets/15f0a36d33a7c06acb99f1b5cf23860e31c9e229.png';
import waterSinkImg from '../assets/e5cd0fd4255a0e604c6ba1ec1d5873e3d9ebcf66.png';
import chairSeatingImg from '../assets/370b981283bbd2c5a2a73ec4db7335096541114f.png';
import coffeeTableImg from '../assets/ff89027649427a59d1b62a1e882d28aed26cc775.png';
import bedroomFurnitureImg from '../assets/f3c9df50243d7f9e3d03f042f3f6626ec85bbf74.png';
import proofCabinetImg from '../assets/fc5964b3113fde8a49149cd92f85ea4450691c43.png';
import proofTvStandImg from '../assets/bb679ca50af152a8f0faa607e561f4d8254d5707.png';
import proofStoneSinkImg from '../assets/9d2c15d930a9c6e851693b503a7ba6f8be3a7dab.png';
import proofWardrobeImg from '../assets/93fec46fe2c182559cb71aafc651703bd56b2630.png';
import proofModernSinkImg from '../assets/b3f18b3721af140365d532d02c4d8bea34c7615a.png';

export function Products() {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState(6);

  const collectionImages = [
    // CABINET
    { image: proofCabinetImg, alt: 'Teak wood cabinet ready for shipment', title: 'Teak Wood Cabinet' },
    { image: proofWardrobeImg, alt: 'Teak wood wardrobe with storage drawers', title: 'Teak Wood Wardrobe' },
    { image: bedroomFurnitureImg, alt: 'Bedroom Wardrobe', title: 'Bedroom Wardrobe' },
    
    // DRESSOIR
    { image: dressoirImg, alt: 'Vintage Dressoir', title: 'Vintage Dressoir' },
    { image: proofTvStandImg, alt: 'Custom TV stand with storage drawers', title: 'Custom TV Stand' },
    { image: coffeeTableImg, alt: 'Coffee Table Minimalist', title: 'Minimalist Coffee Table' },
    
    // CHAIR
    { image: chairSeatingImg, alt: 'Lounge Teak Chair', title: 'Lounge Teak Chair' },
    { image: chairSeatingImg, alt: 'Lounge Teak Chair Angle 2', title: 'Lounge Teak Chair' },
    { image: chairSeatingImg, alt: 'Lounge Teak Chair Details', title: 'Lounge Teak Chair' },
    
    // WATER SINK STONE
    { image: waterSinkImg, alt: 'Water Sink Stone', title: 'Water Sink Stone' },
    { image: proofStoneSinkImg, alt: 'Hand-carved stone sink basin', title: 'Hand-carved Stone Sink' },
    { image: proofModernSinkImg, alt: 'Modern stone sink with teak vanity', title: 'Modern Stone Sink' },
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
          <h1 className="font-display-lg text-display-lg text-white mb-6">{t('products.hero.title')}</h1>
          <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto">
            {t('products.hero.desc')}
          </p>
        </div>
      </section>

      {/* Bespoke Notice Section */}
      <section className="w-full bg-brand-cream py-section-gap-mobile md:py-24 border-y border-brand-cocoa-brown/10">
        <div className="max-w-4xl mx-auto px-grid-margin text-center">
          <span className="material-symbols-outlined text-4xl text-brand-terracotta mb-4">design_services</span>
          <h2 className="font-headline-md text-headline-md text-brand-dark-earth mb-4">{t('products.notice.title')}</h2>
          <p className="font-body-md text-brand-dark-earth/70 mb-8 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: t('products.notice.desc1') }} />
          <Link to="/contact" className="inline-flex items-center justify-center bg-brand-terracotta text-white px-10 h-14 rounded-full font-label-md text-label-md hover:bg-[#d6854b] hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300 shadow-lg">
            {t('products.notice.button')}
          </Link>
        </div>
      </section>

      {/* Sample Collection Section */}
      <section className="w-full py-section-gap-desktop bg-surface">
        <div className="max-w-7xl mx-auto px-grid-margin">
          <div className="flex flex-col items-center mb-16">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-dark-earth uppercase tracking-wider">{t('home.collection.title')}</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {collectionImages.slice(0, visibleItems).map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="w-full aspect-[4/5] mb-6 overflow-hidden bg-brand-cream/30">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-center text-brand-dark-earth">
                  <h3 className="font-headline-md text-headline-md">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleItems < collectionImages.length && (
            <div className="mt-16 text-center">
              <button 
                onClick={() => setVisibleItems(prev => prev + 3)}
                className="inline-flex items-center justify-center border border-brand-dark-earth text-brand-dark-earth font-label-md text-label-md h-12 px-8 hover:bg-brand-dark-earth hover:text-white transition-colors duration-300 uppercase tracking-wider"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-brand-deep-olive py-32 text-center">
        <div className="max-w-3xl mx-auto px-grid-margin flex flex-col items-center">
          <h2 className="font-display-lg text-display-lg text-brand-cream mb-6">{t('products.cta.title')}</h2>
          <p className="font-body-lg text-brand-cream/80 mb-10 max-w-xl">
            {t('products.cta.desc')}
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-brand-terracotta text-white px-10 h-14 rounded-full font-label-md text-label-md hover:bg-[#d6854b] hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300 shadow-lg gap-2">
            <span className="material-symbols-outlined">forum</span>
            {t('products.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
