import aboutHeroImg from '../assets/about-hero.jpeg';
import image_d455cb17ae1190210b91ca432cd6a6d574f3963a from '../assets/d455cb17ae1190210b91ca432cd6a6d574f3963a.png';
import image_1b6ab2dd5700691fc625338f6c671348c61cf7b8 from '../assets/1b6ab2dd5700691fc625338f6c671348c61cf7b8.png';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { TreePine, Sparkles, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={aboutHeroImg}
            alt="About Pandawa Furniture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#fffcf2] drop-shadow-lg">
          <h1 className="mb-6 text-[#fffcf2] font-[Alata] drop-shadow-xl">{t('about.hero.title')}</h1>
          <p className="text-xl text-[#fffcf2]/95 font-medium drop-shadow-md">{t('about.hero.desc')}</p>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">{t('about.foundation.title')}</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-80">
              {t('about.foundation.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Pillar 1: Bisnis Keluarga */}
            <div className="bg-[var(--color-cream)] p-8 text-center shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-wood-light)]/20 mb-6">
                <Users className="text-[var(--color-wood-dark)]" size={32} />
              </div>
              <h3 className="mb-4">{t('about.pillar1.title')}</h3>
              <p className="opacity-80">
                {t('about.pillar1.desc')}
              </p>
            </div>

            {/* Pillar 2: 100% Kayu Daur Ulang */}
            <div className="bg-[var(--color-green-light)]/10 p-8 text-center shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-green-deep)] mb-6">
                <TreePine className="text-[var(--color-cream)]" size={32} />
              </div>
              <h3 className="mb-4">{t('about.pillar2.title')}</h3>
              <p className="opacity-80">
                {t('about.pillar2.desc')}
              </p>
            </div>

            {/* Pillar 3: Info Kayu Jati Lama */}
            <div className="bg-[var(--color-wood-light)]/10 p-8 text-center shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-wood-medium)] mb-6">
                <Sparkles className="text-[var(--color-cream)]" size={32} />
              </div>
              <h3 className="mb-4">{t('about.pillar3.title')}</h3>
              <p className="opacity-80">
                {t('about.pillar3.desc')}
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
