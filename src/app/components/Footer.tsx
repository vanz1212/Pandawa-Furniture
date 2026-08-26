import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-surface-container-high dark:bg-surface-container-lowest w-full pt-section-gap-desktop pb-12">
      <div className="max-w-7xl mx-auto px-grid-margin grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-grid-gutter">
        <div className="col-span-1 lg:col-span-2">
          <h3 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim mb-4">Artisan Earth & Timber</h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-6">
            © 2024 Artisan Earth & Timber. Sustainable Indonesian Craftsmanship.
          </p>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-primary dark:text-primary-fixed-dim font-bold mb-4 uppercase tracking-wider">Legal</h4>
          <ul className="space-y-3 font-body-md text-body-md">
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out" to="#">Privacy Policy</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out" to="#">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-primary dark:text-primary-fixed-dim font-bold mb-4 uppercase tracking-wider">Support</h4>
          <ul className="space-y-3 font-body-md text-body-md">
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out" to="#">Shipping & Returns</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out" to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
