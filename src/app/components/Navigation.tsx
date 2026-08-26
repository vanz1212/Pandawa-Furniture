import { Link, useLocation } from 'react-router';
import { Menu, X, Globe } from 'lucide-react';
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

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="bg-[var(--color-green-deep)] text-[var(--color-cream)] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl tracking-wider font-[Alata]">PANDAWA</div>
            <div className="text-xs uppercase tracking-widest opacity-80 font-[Aboreto]">Furniture</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide transition-colors ${
                  isActive(link.path)
                    ? 'text-[var(--color-wood-light)]'
                    : 'text-[var(--color-cream)] hover:text-[var(--color-wood-light)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm tracking-wide hover:text-[var(--color-wood-light)] transition-colors border border-[var(--color-cream)]/30 rounded px-2 py-1"
            >
              <Globe size={16} />
              <span className="uppercase">{i18n.language}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm tracking-wide hover:text-[var(--color-wood-light)] transition-colors border border-[var(--color-cream)]/30 rounded px-2 py-1"
            >
              <span className="uppercase">{i18n.language}</span>
            </button>
            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-sm tracking-wide ${
                  isActive(link.path)
                    ? 'text-[var(--color-wood-light)]'
                    : 'text-[var(--color-cream)]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
