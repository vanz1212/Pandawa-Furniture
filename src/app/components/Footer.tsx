import { Link } from 'react-router';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[var(--color-wood-dark)] text-[var(--color-cream)] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="text-2xl tracking-wider mb-2">PANDAWA</div>
            <div className="text-xs uppercase tracking-widest opacity-70 mb-4">Furniture</div>
            <p className="text-sm opacity-80 leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">{t('footer.quickLinks.title')}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/" className="hover:opacity-100 transition-opacity">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">{t('nav.about')}</Link></li>
              <li><Link to="/products" className="hover:opacity-100 transition-opacity">{t('nav.products')}</Link></li>
              <li><Link to="/production" className="hover:opacity-100 transition-opacity">{t('nav.production')}</Link></li>
            </ul>
          </div>

          {/* Sustainability */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">{t('footer.commitment.title')}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>{t('footer.commitment.item1')}</li>
              <li>{t('footer.commitment.item2')}</li>
              <li>{t('footer.commitment.item3')}</li>
              <li>{t('footer.commitment.item4')}</li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">{t('footer.connect.title')}</h4>
            <div className="space-y-3 mb-2">
              <a 
                href="https://wa.me/" 
                className="flex items-center space-x-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <MessageCircle size={18} />
                <span>{t('footer.connect.whatsapp')}</span>
              </a>
              <a 
                href="mailto:info@pandawafurniture.com" 
                className="flex items-center space-x-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Mail size={18} />
                <span>{t('footer.connect.email')}</span>
              </a>
              <div className="flex space-x-4">
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-wood-medium)] mt-8 pt-8 text-center text-sm opacity-70">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}