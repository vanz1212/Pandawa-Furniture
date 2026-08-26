import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const links = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/products', label: t('nav.products') },
    { path: '/production', label: t('nav.production') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-cream/95 backdrop-blur-sm shadow-sm">
      <div className="w-full px-6 md:px-12 flex items-center h-20">
        <Link className="font-headline-md text-headline-md font-bold text-brand-terracotta whitespace-nowrap" to="/">
          Pandawa Furniture
        </Link>
        <ul className="hidden md:flex gap-8 items-center font-body-md text-body-md uppercase tracking-wider ml-auto">
          {links.map(link => (
            <li key={link.path}>
              <Link className={`font-semibold transition-colors duration-300 ease-in-out ${location.pathname === link.path ? 'text-brand-terracotta' : 'text-brand-dark-earth hover:text-brand-terracotta'}`} to={link.path}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm tracking-wide text-brand-dark-earth hover:text-brand-terracotta transition-colors rounded px-2 py-1"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>language</span>
              <span className="uppercase">{i18n.language}</span>
            </button>
          </li>
        </ul>
        <div className="md:hidden ml-auto flex items-center gap-6">
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-1 text-sm tracking-wide text-brand-dark-earth hover:text-brand-terracotta transition-colors rounded px-2 py-1"
          >
            <span className="uppercase">{i18n.language}</span>
          </button>
          <button 
            className="text-brand-dark-earth flex items-center justify-center p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-cocoa-brown/10 shadow-lg absolute w-full left-0">
          <ul className="flex flex-col py-4 px-6 gap-4 font-body-md text-body-md uppercase tracking-wider bg-brand-cream">
            {links.map(link => (
              <li key={link.path}>
                <Link 
                  className={`font-semibold block w-full py-2 ${location.pathname === link.path ? 'text-brand-terracotta' : 'text-brand-dark-earth hover:text-brand-terracotta'}`}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
