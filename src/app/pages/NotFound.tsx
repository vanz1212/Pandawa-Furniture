import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[var(--color-cream)]">
      <div className="text-center px-4">
        <h1 className="mb-4">Page Not Found</h1>
        <p className="text-xl mb-8 opacity-70">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-[var(--color-green-deep)] text-[var(--color-cream)] px-8 py-3 tracking-wide hover:bg-[var(--color-green-medium)] transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
