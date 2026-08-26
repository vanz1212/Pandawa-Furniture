import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import heroBg from '../assets/2874e70677e9347f1c498bc483444526782683b2.png';

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="bg-cover bg-center w-full h-full" style={{backgroundImage: `url(${heroBg})`}}></div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-dark-earth/40 z-10"></div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-grid-margin text-center text-brand-cream">
          <h1 className="font-display-lg text-display-lg mb-6">{t('home.hero.title')}</h1>
          <p className="font-body-lg text-body-lg mb-10 max-w-2xl mx-auto opacity-90">{t('home.hero.desc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/products" className="inline-flex items-center justify-center bg-brand-terracotta text-white font-label-md text-label-md h-14 px-10 rounded-full hover:bg-[#d6854b] hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-terracotta/40 active:scale-95 transition-all duration-300 shadow-lg">
              {t('home.hero.explore')}
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center border border-brand-cream text-brand-cream font-label-md text-label-md h-14 px-10 rounded-full hover:bg-brand-cream hover:text-brand-dark-earth hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300 backdrop-blur-sm">
              {t('home.hero.chat')}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Brand Values Section */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop bg-brand-cream">
        <div className="max-w-7xl mx-auto px-grid-margin">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-12 rounded-lg shadow-level1 flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 rounded-full bg-brand-deep-olive/10 flex items-center justify-center mb-6 text-brand-deep-olive">
                <span className="material-symbols-outlined text-3xl">nest_eco_leaf</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-brand-dark-earth mb-4 pb-1">{t('home.values.title1')}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{t('home.values.desc1')}</p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-12 rounded-lg shadow-level1 flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 rounded-full bg-brand-cocoa-brown/10 flex items-center justify-center mb-6 text-brand-cocoa-brown">
                <span className="material-symbols-outlined text-3xl">group</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-brand-dark-earth mb-4 pb-1">{t('home.values.title2')}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{t('home.values.desc2')}</p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-12 rounded-lg shadow-level1 flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 rounded-full bg-brand-terracotta/10 flex items-center justify-center mb-6 text-brand-terracotta">
                <span className="material-symbols-outlined text-3xl">auto_awesome</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-brand-dark-earth mb-4 pb-1">{t('home.values.title3')}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{t('home.values.desc3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. All Collection Section */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-high">
        <div className="max-w-7xl mx-auto px-grid-margin">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-dark-earth">{t('home.collection.title')}</h2>
            <Link to="/products" className="hidden md:inline-flex items-center gap-2 font-label-md text-label-md text-brand-cocoa-brown hover:text-brand-terracotta transition-colors group">
              {t('home.collection.viewAll')} 
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* Item 1 */}
            <div className="md:col-span-8 md:row-span-2 rounded-lg overflow-hidden relative group cursor-pointer shadow-level1 bg-white">
              <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtN1RhIbtMCdwlejV1YrJA7ufvcR0haAxAo1v4Mca6lsIcLGHZAE5LC-SZSKjwSQZ-2KO2tKxQ0DzNv7hKi-o_ul-QZIlquzFwxZoH1_pHNVOSYlgrvt9Pswm8ro6-_uVl2NMW9p4Tz0EEhWymihO27J7g5CGDngeQ2HnpwT_R-WhXe6R08SMrdeRK6ChRm7rnQk4_rhtjsOHvOT6cBwQXA8N0zEjVwzfNWL_YZdTsNLVXkt_jtXb-Mg')"}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-earth/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-8 left-8 text-brand-cream">
                <h3 className="font-headline-md text-headline-md mb-2 pb-1">Heritage Dining Table</h3>
                <p className="font-body-md text-body-md">Solid Reclaimed Teak</p>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="md:col-span-4 md:row-span-2 rounded-lg overflow-hidden relative group cursor-pointer shadow-level1 bg-white">
              <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHl52K8OgYNtkt439xcTQGjymV5DNOxA_4cPNLOjM4N-TTZ5oMStVdEYttKgucYnE6d1xK35fn2IftA9csLnqjPRVcztxmTOyN9wXmtmfrcOxEtSs9DunTeK5U4oyyOR7eL_TpkBFwaq9b38x_GBxkTl2CsG-R_PcwwMQaA5DohdRtR-v29rcS8mm3hAe-qJgWO3xWbmt46A8YIUusyjDFKbBsbkXfs4VJalMuWJQbwCFX5HXPybbJCw')"}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-earth/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-8 left-8 text-brand-cream">
                <h3 className="font-headline-md text-headline-md mb-2 pb-1">Lounge Series</h3>
                <p className="font-body-md text-body-md">Ergonomic Comfort</p>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="md:col-span-4 rounded-lg overflow-hidden relative group cursor-pointer shadow-level1 bg-white">
              <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdYUfhQA_B14kFpNWW0-eT7xIFFssAUZtGACQrjIaKcilCUei5OYRFS6yX97iM4djnncwa9uNMv-UL7OCrkAUESwzKaD6Kd3gaJvBYal5vRGR05u2Tv8Q8XK8jMb9kId8uAnOeKl4_vzIzuOLFHExCzfmo_3E075DccXBO_5Zus8wkUjpylMEluOQSnaXKc40oHIntW66LzLY0OPrIpSttPYd06b_i22tIpPsHKZCczfWF9ZkZKMzR6w')"}}></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
            
            {/* Item 4 */}
            <div className="md:col-span-4 rounded-lg overflow-hidden relative group cursor-pointer shadow-level1 bg-white">
              <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKxRORyTe_o3kx0H7z8Q_Xe1gAfZ97mhvusyBcDgJM7ucVQNyJgHtaSaflUxtfKXRluKbRFlXCBazSY5kksiaDyggVXxGphXDTt7GMco1xLRBEgi7_Iz0qieg3eTBoixoVHBbyGGomnX5gSrS7K33-tnzGBi02gWtA0xcDMoXx7zTkC_JkNGEKBQHBYmMTHSXf-qdNtIWUvB9D3MHKu-Lti0PcNA-z6LFQvrgVsHd5voahelO2h0VqTg')"}}></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
            
            {/* Item 5 & 6 (Combined) */}
            <Link to="/products" className="md:col-span-4 rounded-lg overflow-hidden relative flex flex-col justify-center items-center bg-brand-cocoa-brown text-brand-cream p-8 text-center group cursor-pointer hover:bg-brand-dark-earth transition-colors duration-500 shadow-level1">
              <span className="material-symbols-outlined text-4xl mb-4 opacity-70 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              <h3 className="font-headline-md text-headline-md mb-2 pb-1">{t('home.collection.viewAll')}</h3>
              <p className="font-body-md text-body-md opacity-80">Explore over 50 unique pieces</p>
            </Link>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/products" className="inline-flex items-center justify-center bg-brand-cocoa-brown text-white font-label-md text-label-md h-14 px-8 rounded-full w-full hover:bg-brand-dark-earth hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300">
              {t('home.collection.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CTA Banner Section */}
      <section className="bg-brand-deep-olive py-24 relative overflow-hidden">
        {/* Decorative structural elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-grid-margin text-center relative z-10 text-brand-cream">
          <h2 className="font-display-lg text-display-lg mb-6">{t('home.cta.title')}</h2>
          <p className="font-body-lg text-body-lg mb-10 opacity-90 max-w-2xl mx-auto">
            {t('home.cta.desc')}
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-brand-terracotta text-white font-label-md text-label-md h-14 px-10 rounded-full hover:bg-[#d6854b] hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-terracotta/40 active:scale-95 transition-all duration-300 shadow-xl">
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
