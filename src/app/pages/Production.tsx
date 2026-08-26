import productionHeroImg from '../assets/production-hero.jpeg';
import image_e77818745e813bf5ce0d49cc96412216566da6c8 from '../assets/e77818745e813bf5ce0d49cc96412216566da6c8.png';
import image_1aad063b976faef1f4b68af17eca100c145ee9a7 from '../assets/1aad063b976faef1f4b68af17eca100c145ee9a7.png';
import image_ea4e0d3666996065ddeb190c4028a8c43ca1eab2 from '../assets/ea4e0d3666996065ddeb190c4028a8c43ca1eab2.png';
import image_f5553a4a208f9b99979e04e8268a24f5a5feabcd from '../assets/f5553a4a208f9b99979e04e8268a24f5a5feabcd.png';
import image_61f250a254b4a06e52d903637392bbace611f978 from '../assets/61f250a254b4a06e52d903637392bbace611f978.png';
import image_621d39621b0ef347797640e713ebeb2bd5c51081 from '../assets/621d39621b0ef347797640e713ebeb2bd5c51081.png';
import image_810c3ec98355f08a9c766659a6ea0cd9314b15ac from '../assets/810c3ec98355f08a9c766659a6ea0cd9314b15ac.png';
import image_ba07c6ac9f6733b987465b474d9baa59a1afefd6 from '../assets/ba07c6ac9f6733b987465b474d9baa59a1afefd6.png';
import image_08deb210930238d0b61573463464031a301d6be3 from '../assets/08deb210930238d0b61573463464031a301d6be3.png';
import { Leaf, Hammer, Shield, Truck } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from 'react-i18next';

export function Production() {
  const { t } = useTranslation();

  const processSteps = [
    {
      icon: Leaf,
      title: t('production.process.steps.s1.title'),
      description: t('production.process.steps.s1.desc'),
      color: 'var(--color-green-deep)',
    },
    {
      icon: Hammer,
      title: t('production.process.steps.s2.title'),
      description: t('production.process.steps.s2.desc'),
      color: 'var(--color-wood-medium)',
    },
    {
      icon: Shield,
      title: t('production.process.steps.s3.title'),
      description: t('production.process.steps.s3.desc'),
      color: 'var(--color-wood-dark)',
    },
    {
      icon: Truck,
      title: t('production.process.steps.s4.title'),
      description: t('production.process.steps.s4.desc'),
      color: 'var(--color-green-medium)',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={productionHeroImg}
            alt="Production & Shipping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#fffcf2] drop-shadow-lg">
          <h1 className="mb-6 text-[#fffcf2] font-[Alata] drop-shadow-xl">{t('production.hero.title')}</h1>
          <p className="text-xl text-[#fffcf2]/95 font-medium drop-shadow-md">{t('production.hero.desc')}</p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">{t('production.process.title')}</h2>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              {t('production.process.desc')}
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
              <h2 className="mb-6">{t('production.craft.title')}</h2>
              <p className="text-lg mb-4 opacity-80">{t('production.craft.desc1')}</p>
              <p className="text-lg mb-6 opacity-80">
                {t('production.craft.desc2')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-green-deep)]"></div>
                  <span>{t('production.craft.point1')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-green-deep)]"></div>
                  <span>{t('production.craft.point2')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-green-deep)]"></div>
                  <span>{t('production.craft.point3')}</span>
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
            <h2 className="mb-6">{t('production.shipping.title')}</h2>
            <p className="text-lg opacity-80">
              {t('production.shipping.desc')}
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