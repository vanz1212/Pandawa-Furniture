import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import contactHeroImg from '../assets/contact-hero.jpeg';
import {
  MessageCircle,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={contactHeroImg}
            alt="Contact Pandawa Furniture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#fffcf2] drop-shadow-lg">
          <h1 className="mb-6 text-[#fffcf2] font-[Alata] drop-shadow-xl">
            {t('contact.hero.title')}
          </h1>
          <p className="text-xl text-[#fffcf2]/95 font-medium drop-shadow-md">
            {t('contact.hero.desc')}
          </p>
        </div>
      </section>

      {/* Contact Methods - Prominent */}
      <section className="py-16 bg-[var(--color-wood-light)] text-[var(--color-wood-dark)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WhatsApp - Primary */}
            <div className="bg-white p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-4">
                <MessageCircle
                  className="text-white"
                  size={32}
                />
              </div>
              <h3 className="mb-3">
                {t('contact.methods.wa.title')}
              </h3>
              <p className="mb-4 opacity-70">
                {t('contact.methods.wa.desc')}
              </p>
              <a
                href="https://wa.me/6285168628421"
                className="inline-block bg-green-500 text-white px-6 py-3 tracking-wide hover:bg-green-600 transition-colors"
              >
                {t('contact.methods.wa.button')}
              </a>
            </div>

            {/* Email - Secondary */}
            <div className="bg-white p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-green-deep)] mb-4">
                <Mail
                  className="text-[var(--color-cream)]"
                  size={32}
                />
              </div>
              <h3 className="mb-3">
                {t('contact.methods.email.title')}
              </h3>
              <p className="mb-4 opacity-70">
                {t('contact.methods.email.desc')}
              </p>
              <a
                href="mailto:alexpandawa@gmail.com"
                className="inline-block bg-[var(--color-green-deep)] text-[var(--color-cream)] px-6 py-3 tracking-wide hover:bg-[var(--color-green-medium)] transition-colors"
              >
                {t('contact.methods.email.button')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-[var(--color-cream)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-wood-light)]/30 mb-4">
                <MapPin
                  className="text-[var(--color-wood-dark)]"
                  size={24}
                />
              </div>
              <h3 className="mb-2">{t('contact.info.location')}</h3>
              <p className="opacity-70 text-sm">
                Jln. Lingkar Selatan Kudus-Jepara km 3,<br />
                Desa Pasuruhan kidul, Kota Kudus
              </p>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-wood-light)]/30 mb-4">
                <Phone
                  className="text-[var(--color-wood-dark)]"
                  size={24}
                />
              </div>
              <h3 className="mb-2">{t('contact.info.phone')}</h3>
              <p className="opacity-70 text-sm">
                +62 851-6862-8421
                <br />
              </p>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-wood-light)]/30 mb-4">
                <Mail
                  className="text-[var(--color-wood-dark)]"
                  size={24}
                />
              </div>
              <h3 className="mb-2">{t('contact.info.email')}</h3>
              <p className="opacity-70 text-sm">
                alexpandawa@gmail.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}