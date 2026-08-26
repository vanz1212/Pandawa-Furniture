import { Link } from 'react-router';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-cream/95 backdrop-blur-sm shadow-sm">
      <div className="w-full px-6 md:px-12 flex items-center h-20">
        <Link className="font-headline-md text-headline-md font-bold text-brand-terracotta whitespace-nowrap" to="/">
          Pandawa Furniture
        </Link>
        <ul className="hidden md:flex gap-8 items-center font-body-md text-body-md uppercase tracking-wider ml-auto">
          <li><Link className="text-brand-dark-earth font-semibold hover:text-brand-terracotta transition-colors duration-300 ease-in-out" to="/products">Products</Link></li>
          <li><Link className="text-brand-dark-earth font-semibold hover:text-brand-terracotta transition-colors duration-300 ease-in-out" to="/about">About Us</Link></li>
          <li><Link className="text-brand-dark-earth font-semibold hover:text-brand-terracotta transition-colors duration-300 ease-in-out" to="/production">Production</Link></li>
          <li><Link className="text-brand-dark-earth font-semibold hover:text-brand-terracotta transition-colors duration-300 ease-in-out" to="/contact">Chat with us</Link></li>
        </ul>
        <div className="md:hidden ml-auto flex items-center gap-6">
          <button className="text-brand-dark-earth flex items-center justify-center">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
