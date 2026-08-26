import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AlertCircle } from 'lucide-react';

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
  const { t } = useTranslation();
  const [activeCollectionTab, setActiveCollectionTab] = useState('ALL');
  
  const collectionTabs = ['ALL', 'CABINET', 'DRESSOIR', 'CHAIR', 'WATER SINK STONE'];

  const collectionImages = [
    // CABINET
    { image: proofCabinetImg, alt: 'Teak wood cabinet ready for shipment', category: 'CABINET' },
    { image: proofWardrobeImg, alt: 'Teak wood wardrobe with storage drawers', category: 'CABINET' },
    { image: bedroomFurnitureImg, alt: 'Bedroom Wardrobe', category: 'CABINET' },
    
    // DRESSOIR
    { image: dressoirImg, alt: 'Vintage Dressoir', category: 'DRESSOIR' },
    { image: proofTvStandImg, alt: 'Custom TV stand with storage drawers', category: 'DRESSOIR' },
    { image: coffeeTableImg, alt: 'Coffee Table Minimalist', category: 'DRESSOIR' },
    
    // CHAIR
    { image: chairSeatingImg, alt: 'Lounge Teak Chair', category: 'CHAIR' },
    { image: chairSeatingImg, alt: 'Lounge Teak Chair Angle 2', category: 'CHAIR' },
    { image: chairSeatingImg, alt: 'Lounge Teak Chair Details', category: 'CHAIR' },
    
    // WATER SINK STONE
    { image: waterSinkImg, alt: 'Water Sink Stone', category: 'WATER SINK STONE' },
    { image: proofStoneSinkImg, alt: 'Hand-carved stone sink basin', category: 'WATER SINK STONE' },
    { image: proofModernSinkImg, alt: 'Modern stone sink with teak vanity', category: 'WATER SINK STONE' },
  ];

  const filteredCollection = activeCollectionTab === 'ALL'
    ? collectionImages
    : collectionImages.filter(img => img.category === activeCollectionTab);

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
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-brand-dark-earth mb-4">{t('home.collection.title')}</h2>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {collectionTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCollectionTab(tab)}
                className={`px-6 h-10 rounded-full font-label-md text-label-md transition-all duration-300 ${
                  activeCollectionTab === tab
                    ? 'bg-brand-deep-olive text-white shadow-md'
                    : 'bg-brand-deep-olive/10 text-brand-dark-earth hover:bg-brand-deep-olive hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-grid-gutter">
            {filteredCollection.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-level1 overflow-hidden group">
                <div className="aspect-[4/5] relative overflow-hidden bg-brand-cream/50">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
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
