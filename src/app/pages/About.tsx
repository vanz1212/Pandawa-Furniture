import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from 'react-i18next';
import artisanImg from '../assets/d455cb17ae1190210b91ca432cd6a6d574f3963a.png';
import woodTextureImg from '../assets/1b6ab2dd5700691fc625338f6c671348c61cf7b8.png';
import aboutWorkshopImg from '../assets/about-hero.jpeg';
import { WoodShaderBackground } from '../components/WoodShaderBackground';

export function About() {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <WoodShaderBackground />
        <div className="max-w-7xl mx-auto px-grid-margin py-section-gap-desktop grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-center relative z-10">
          <div className="md:col-span-6 md:pr-12 flex flex-col justify-center text-center md:text-left relative z-10">
            <h1 className="font-display-lg text-display-lg text-brand-dark-earth mb-8">{t('about.hero.title')}</h1>
            <p className="font-body-lg text-body-lg text-brand-dark-earth/70 mb-10 max-w-lg mx-auto md:mx-0">
              {t('about.hero.desc')}
            </p>
            <div>
              <button className="inline-flex items-center justify-center bg-brand-terracotta text-white h-14 px-10 rounded-full font-label-md text-label-md hover:bg-[#d6854b] hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300 shadow-lg uppercase tracking-wider">
                Discover Our Roots
              </button>
            </div>
          </div>
          <div className="md:col-span-6 h-[600px] relative rounded-lg overflow-hidden shadow-level1 mt-12 md:mt-0 group z-10">
            <ImageWithFallback src={artisanImg} alt="Master craftsman" className="object-cover w-full h-full absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Our Foundation */}
      <section className="max-w-7xl mx-auto px-grid-margin py-section-gap-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-brand-dark-earth mb-4">{t('about.foundation.title')}</h2>
          <div className="w-16 h-1 bg-brand-terracotta mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter">
          <div className="bg-white p-8 rounded-lg shadow-level1 text-center group hover:bg-brand-cream transition-colors duration-300">
            <span className="material-symbols-outlined text-4xl text-brand-terracotta mb-6 block" style={{fontVariationSettings: "'wght' 300"}}>family_history</span>
            <h3 className="font-headline-md text-headline-md text-brand-dark-earth mb-4">{t('about.pillar1.title')}</h3>
            <p className="font-body-md text-brand-dark-earth/70 mt-4">{t('about.pillar1.desc')}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-level1 text-center group hover:bg-brand-cream transition-colors duration-300">
            <span className="material-symbols-outlined text-4xl text-brand-terracotta mb-6 block" style={{fontVariationSettings: "'wght' 300"}}>forest</span>
            <h3 className="font-headline-md text-headline-md text-brand-dark-earth mb-4">{t('about.pillar2.title')}</h3>
            <p className="font-body-md text-brand-dark-earth/70 mt-4">{t('about.pillar2.desc')}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-level1 text-center group hover:bg-brand-cream transition-colors duration-300">
            <span className="material-symbols-outlined text-4xl text-brand-terracotta mb-6 block" style={{fontVariationSettings: "'wght' 300"}}>architecture</span>
            <h3 className="font-headline-md text-headline-md text-brand-dark-earth mb-4">{t('about.pillar3.title')}</h3>
            <p className="font-body-md text-brand-dark-earth/70 mt-4">{t('about.pillar3.desc')}</p>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="max-w-7xl mx-auto px-grid-margin py-section-gap-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter h-auto md:h-[700px]">
          <div className="relative rounded-lg overflow-hidden shadow-level1 h-[400px] md:h-full group">
            <ImageWithFallback src={woodTextureImg} alt="Wood texture detail" className="object-cover w-full h-full absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-level1 h-[400px] md:h-full md:mt-16 group">
            <ImageWithFallback src={aboutWorkshopImg} alt="Artisan workshop" className="object-cover w-full h-full absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-brand-deep-olive py-section-gap-desktop px-grid-margin mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="material-symbols-outlined text-4xl text-brand-cream mb-8 opacity-50 block" style={{fontVariationSettings: "'wght' 300"}}>format_quote</span>
          <p className="font-headline-lg text-headline-lg font-bold text-brand-cream mb-8 leading-relaxed">
            Our mission is to bridge the gap between ancient Indonesian woodworking <span className="font-bold text-brand-terracotta">heritage</span> and <span className="font-bold text-brand-terracotta">modern</span>, conscious living. We craft heirloom pieces not just for today, but for generations, ensuring every cut <span className="font-bold text-brand-terracotta">respects the earth</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
