import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import contactHeroImg from '../assets/contact-hero.jpeg';

export function Contact() {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[614px] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full" 
          style={{ backgroundImage: `url(${contactHeroImg})` }}
        />
        <div className="absolute inset-0 bg-brand-dark-earth/40 mix-blend-multiply"></div>
        <div className="relative z-10 text-center px-grid-margin max-w-4xl mx-auto">
          <h1 className="font-display-lg text-display-lg text-white mb-6 drop-shadow-md">{t('contact.hero.title')}</h1>
          <p className="font-body-lg text-body-lg text-brand-cream max-w-2xl mx-auto drop-shadow">
            {t('contact.hero.desc')}
          </p>
        </div>
      </section>

      {/* Primary Contact Methods */}
      <section className="max-w-7xl mx-auto px-grid-margin py-section-gap-desktop relative z-20 -mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-xl p-10 shadow-level1 flex flex-col items-start border border-brand-cocoa-brown/10 transition-transform hover:-translate-y-1 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-[32px] text-[#25D366]" style={{fontVariationSettings: "'wght' 300"}}>chat</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-brand-dark-earth mb-4">{t('contact.methods.wa.title')}</h2>
            <p className="font-body-md text-body-md text-brand-dark-earth/70 mb-10 flex-grow">
              {t('contact.methods.wa.desc')}
            </p>
            <a href="https://wa.me/6285168628421" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] text-white font-label-md text-label-md h-14 px-10 rounded-full hover:bg-[#20bd5a] hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300 w-full sm:w-auto shadow-md">
              {t('contact.methods.wa.button')}
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-xl p-10 shadow-level1 flex flex-col items-start border border-brand-cocoa-brown/10 transition-transform hover:-translate-y-1 duration-300">
            <div className="w-16 h-16 rounded-full bg-brand-deep-olive/10 flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-[32px] text-brand-deep-olive" style={{fontVariationSettings: "'wght' 300"}}>mail</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-brand-dark-earth mb-4">{t('contact.methods.email.title')}</h2>
            <p className="font-body-md text-body-md text-brand-dark-earth/70 mb-10 flex-grow">
              {t('contact.methods.email.desc')}
            </p>
            <a href="mailto:alexpandawa@gmail.com" className="inline-flex items-center justify-center bg-brand-deep-olive text-white font-label-md text-label-md h-14 px-10 rounded-full hover:bg-opacity-90 hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300 w-full sm:w-auto shadow-md">
              {t('contact.methods.email.button')}
            </a>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-brand-cream/30 py-section-gap-desktop">
        <div className="max-w-7xl mx-auto px-grid-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter text-center max-w-4xl mx-auto">
            {/* Location */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full bg-white shadow-level1 flex items-center justify-center mb-6 text-brand-terracotta group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[32px]" style={{fontVariationSettings: "'wght' 300"}}>location_on</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-brand-dark-earth mb-2 font-semibold">{t('contact.info.location')}</h3>
              <p className="font-body-md text-body-md text-brand-dark-earth/70">
                Jln. Lingkar Selatan Kudus-Jepara km 3,<br />
                Desa Pasuruhan kidul, Kota Kudus
              </p>
            </div>
            {/* Email */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full bg-white shadow-level1 flex items-center justify-center mb-6 text-brand-terracotta group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[32px]" style={{fontVariationSettings: "'wght' 300"}}>alternate_email</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-brand-dark-earth mb-2 font-semibold">{t('contact.info.email')}</h3>
              <p className="font-body-md text-body-md text-brand-dark-earth/70">alexpandawa@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Olive Banner */}
      <section className="bg-brand-deep-olive py-24 px-grid-margin text-center">
        <h2 className="font-display-lg text-[48px] text-brand-cream mb-6 max-w-3xl mx-auto leading-tight">Ready to craft your legacy?</h2>
        <p className="font-body-lg text-body-lg text-brand-cream/80 max-w-2xl mx-auto mb-10">Every piece tells a story. Let us help you tell yours with sustainable, handcrafted precision.</p>
        <Link to="/products" className="inline-flex items-center justify-center bg-brand-terracotta text-white font-label-md text-label-md px-10 h-14 rounded-full hover:bg-[#d6854b] hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300 shadow-lg">
          Start a Project
        </Link>
      </section>
    </div>
  );
}
