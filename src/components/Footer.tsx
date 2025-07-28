import { Link } from 'react-router-dom';
import { getImagePath } from '@/lib/utils';
import type { FooterProps } from '@/types';

export default function Footer({ }: FooterProps) {
  return (
    <footer className="bg-gradient-to-b from-primary-800 to-primary-900 flex flex-col items-center py-16 overflow-hidden px-5 sm:px-0 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-700/20 to-transparent"></div>
      
      <div className="relative z-10 w-full max-w-6xl">
        {/* Logo section */}
        <div className="flex justify-center mb-12">
          <img
            src={getImagePath("images/verglas-long-primary-600.gif")}
            alt="Verglas Logo"
            className="brightness-[4] h-[50px] object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-primary-100 mb-16 justify-items-center">
          <div className="flex flex-col gap-4 text-center sm:text-start w-full max-w-[200px]">
            <span className="font-bold text-lg text-white mb-2">Verglas</span>
            <Link to="/about" className="text-primary-100/80 hover:text-white hover:translate-x-1 transition-all duration-200 font-light">About Verglas</Link>
            <Link to="/press" className="text-primary-100/80 hover:text-white hover:translate-x-1 transition-all duration-200 font-light">Press centre</Link>
            <Link to="/people" className="text-primary-100/80 hover:text-white hover:translate-x-1 transition-all duration-200 font-light">Key people</Link>
            <Link to="/outreach" className="text-primary-100/80 hover:text-white hover:translate-x-1 transition-all duration-200 font-light">Outreach</Link>
            <Link to="/products" className="text-primary-100/80 hover:text-white hover:translate-x-1 transition-all duration-200 font-light">Software</Link>
          </div>
          <div className="flex flex-col gap-4 text-center sm:text-start w-full max-w-[200px]">
            <span className="font-bold text-lg text-white mb-2">IglooCode™</span>
            <a href="https://iglooco.de/about" className="text-primary-100/80 hover:text-white hover:translate-x-1 transition-all duration-200 font-light">About IglooCode™</a>
            <a href="https://iglooco.de/competition" className="text-primary-100/80 hover:text-white hover:translate-x-1 transition-all duration-200 font-light">How it works</a>
            <a href="https://iglooco.de/team" className="text-primary-100/80 hover:text-white hover:translate-x-1 transition-all duration-200 font-light">Meet the team</a>
            <a href="https://iglooco.de/getinvolved" className="text-primary-100/80 hover:text-white hover:translate-x-1 transition-all duration-200 font-light">Get involved</a>
          </div>
          <div className="flex flex-col gap-4 text-center sm:text-start w-full max-w-[200px]">
            <span className="font-bold text-lg text-white mb-2">Educatr™</span>
            <a href="https://educatr.app" className="text-primary-100/80 hover:text-white hover:translate-x-1 transition-all duration-200 font-light">Launch Educatr™</a>
            <a href="https://educatr.app/beta" className="text-primary-100/80 hover:text-white hover:translate-x-1 transition-all duration-200 font-light">Beta programme</a>
          </div>
        </div>

        {/* Contact section */}
        <div className="text-center text-primary-100/90 mb-12 py-8 border-t border-b border-primary-700/50">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">T:</span>
              <a href="tel:+442896943669" className="hover:text-white transition-colors font-light">+44 (0) 28 9694 3669</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">E:</span>
              <a href="mailto:hello@verglas.io" className="hover:text-white transition-colors font-light">hello@verglas.io</a>
            </div>
          </div>
        </div>

        {/* Legal text */}
        <div className="text-center text-primary-100/60 text-sm max-w-4xl mx-auto mb-8 leading-relaxed">
          <p className="mb-4 font-light">
            Verglas (NI) Limited is a company registered in Northern Ireland (no. NI716105). 
            Registered office: Office 218, 92 Castle Street, Belfast, BT1 1HE.
          </p>
          <p className="mb-4 font-light">
            Verglas, IglooCode™ and/or Educatr™ are not associated with Slemish College or Strathearn School, 
            and any publications from us do not represent their views.
          </p>
          <p className="font-light">
            IglooCode™ and Educatr™ are trademarks of Verglas (NI) Limited.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-primary-100/70 text-sm border-t border-primary-700/30 pt-8">
          <p className="font-light">
            © 2025 Verglas (NI) Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
