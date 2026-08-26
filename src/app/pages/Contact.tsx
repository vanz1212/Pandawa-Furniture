import { Link } from 'react-router';
import contactHeroImg from '../assets/contact-hero.jpeg';

export function Contact() {
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
          <h1 className="font-display-lg text-display-lg text-white mb-6 drop-shadow-md">Get in Touch</h1>
          <p className="font-body-lg text-body-lg text-brand-cream max-w-2xl mx-auto drop-shadow">
            Let's discuss your custom furniture project. We're here to bring your vision to life.
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
            <h2 className="font-headline-md text-headline-md text-brand-dark-earth mb-4">WhatsApp for Fast Response</h2>
            <p className="font-body-md text-body-md text-brand-dark-earth/70 mb-10 flex-grow">
              The quickest way to reach us for custom design discussions, questions, or urgent inquiries.
            </p>
            <a href="https://wa.me/6285168628421" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] text-white font-label-md text-label-md h-14 px-10 rounded-full hover:bg-[#20bd5a] hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300 w-full sm:w-auto shadow-md">
              Chat on WhatsApp
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-xl p-10 shadow-level1 flex flex-col items-start border border-brand-cocoa-brown/10 transition-transform hover:-translate-y-1 duration-300">
            <div className="w-16 h-16 rounded-full bg-brand-deep-olive/10 flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-[32px] text-brand-deep-olive" style={{fontVariationSettings: "'wght' 300"}}>mail</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-brand-dark-earth mb-4">Email for Official Inquiries</h2>
            <p className="font-body-md text-body-md text-brand-dark-earth/70 mb-10 flex-grow">
              For detailed project proposals, quotes, and formal correspondence.
            </p>
            <a href="mailto:yusavitocompanies@gmail.com" className="inline-flex items-center justify-center bg-brand-deep-olive text-white font-label-md text-label-md h-14 px-10 rounded-full hover:bg-opacity-90 hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300 w-full sm:w-auto shadow-md">
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-brand-cream/30 py-section-gap-desktop">
        <div className="max-w-7xl mx-auto px-grid-margin">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter text-center">
            {/* Location */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full bg-white shadow-level1 flex items-center justify-center mb-6 text-brand-terracotta group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[32px]" style={{fontVariationSettings: "'wght' 300"}}>location_on</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-brand-dark-earth mb-2 font-semibold">Location</h3>
              <p className="font-body-md text-body-md text-brand-dark-earth/70">Kudus, Central Java<br/>Indonesia</p>
            </div>
            {/* Phone */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full bg-white shadow-level1 flex items-center justify-center mb-6 text-brand-terracotta group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[32px]" style={{fontVariationSettings: "'wght' 300"}}>call</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-brand-dark-earth mb-2 font-semibold">Phone</h3>
              <p className="font-body-md text-body-md text-brand-dark-earth/70">+62 851-6862-8421</p>
            </div>
            {/* Email */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full bg-white shadow-level1 flex items-center justify-center mb-6 text-brand-terracotta group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[32px]" style={{fontVariationSettings: "'wght' 300"}}>alternate_email</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-brand-dark-earth mb-2 font-semibold">Email</h3>
              <p className="font-body-md text-body-md text-brand-dark-earth/70">yusavitocompanies@gmail.com</p>
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
