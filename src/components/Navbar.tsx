import { Link } from 'react-router-dom';
import { getImagePath } from '@/lib/utils';
import type { NavbarProps } from '@/types';

export default function Navbar({ }: NavbarProps) {
  return (
    <nav className="fixed w-screen bg-white h-[3rem] sm:h-[4.5rem] z-20 flex items-center justify-center">
      <div className="w-2/3 flex items-center h-full flex-col sm:flex-row">
        <Link to="/">
          <img
            src={getImagePath("images/verglas-long-primary-600.gif")}
            alt="Verglas Logo"
            className="brightness-50 hidden sm:block h-[45px] object-contain"
          />
        </Link>
        <div className="flex items-center gap-10 h-full sm:ml-12 text-primary-900 decoration-primary-900 decoration-2 underline-offset-[5px]">
          <Link to="/outreach" className="hover:underline">Outreach</Link>
          <Link to="/products" className="hover:underline">Software</Link>
          <Link to="/people" className="hover:underline">People</Link>
          <Link to="/press" className="hover:underline">News</Link>
        </div>
      </div>
    </nav>
  );
}
