import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import productsHeroImg from '../assets/products-hero.jpeg';
import { Link } from 'react-router';
import { AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
    <div>
      {/* Hero Section */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={productsHeroImg}
            alt="Our Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#fffcf2] drop-shadow-lg">
          <h1 className="mb-6 text-[#fffcf2] font-[Alata] drop-shadow-xl">{t('products.hero.title')}</h1>
          <p className="text-xl text-[#fffcf2]/95 font-medium drop-shadow-md">
            {t('products.hero.desc')}
          </p>
        </div>
      </section>

      {/* Important Notice - Bespoke Design */}
      <section className="py-12 bg-[var(--color-wood-light)] text-[var(--color-wood-dark)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="flex-shrink-0 mt-1" size={32} />
            <div>
              <h3 className="mb-3">{t('products.notice.title')}</h3>
              <p className="text-lg mb-3" dangerouslySetInnerHTML={{ __html: t('products.notice.desc1') }} />
              <p className="text-lg mb-4" dangerouslySetInnerHTML={{ __html: t('products.notice.desc2') }} />
              <Link
                to="/contact"
                className="inline-block bg-[var(--color-green-deep)] text-[var(--color-cream)] px-6 py-3 tracking-wide hover:bg-[var(--color-green-medium)] transition-colors"
              >
                {t('products.notice.button')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Collection Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('home.collection.title')}</h2>
          </div>
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-gray-300 pb-4">
            {collectionTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCollectionTab(tab)}
                className={`px-6 py-2 text-lg font-medium transition-colors ${
                  activeCollectionTab === tab
                    ? 'text-[var(--color-green-deep)] border-b-2 border-[var(--color-green-deep)]'
                    : 'text-gray-500 hover:text-[var(--color-wood-dark)]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredCollection.map((item, index) => (
              <div key={index} className="relative aspect-square bg-[var(--color-cream)] overflow-hidden shadow-md group">
                <ImageWithFallback
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-green-deep)] text-[var(--color-cream)] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-[var(--color-cream)] text-[#ffffff]">{t('products.cta.title')}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t('products.cta.desc')}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[var(--color-wood-light)] text-[var(--color-wood-dark)] px-8 py-4 text-lg tracking-wide hover:bg-[var(--color-cream)] transition-colors"
          >
            {t('products.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}