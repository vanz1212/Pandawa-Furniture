import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[var(--color-cream)]">
      <div className="text-center px-4">
        <h1 className="mb-4">{t('notFound.title')}</h1>
        <p className="text-xl mb-8 opacity-70">
          {t('notFound.desc')}
        </p>
        <Link
          to="/"
          className="inline-block bg-[var(--color-green-deep)] text-[var(--color-cream)] px-8 py-3 tracking-wide hover:bg-[var(--color-green-medium)] transition-colors"
        >
          {t('notFound.button')}
        </Link>
      </div>
    </div>
  );
}
