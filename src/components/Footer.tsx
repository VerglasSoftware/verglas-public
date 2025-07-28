import { Link } from 'react-router-dom';
import { getImagePath } from '@/lib/utils';
import type { FooterProps } from '@/types';

export default function Footer({ }: FooterProps) {
  return (
    <footer className="bg-primary-800 flex flex-col items-center py-6 overflow-hidden px-5 sm:px-0">
      <img
        src={getImagePath("images/verglas-long-primary-600.gif")}
        alt="Verglas Logo"
        className="brightness-[4] h-[45px] object-contain"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-32 text-primary-100 mt-4 mb-8">
        <div className="flex flex-col gap-2 text-center sm:text-start">
          <span className="font-bold">Verglas</span>
          <Link to="/about" className="text-primary-100/90 hover:underline">About Verglas</Link>
          <Link to="/press" className="text-primary-100/90 hover:underline">Press centre</Link>
          <Link to="/people" className="text-primary-100/90 hover:underline">Key people</Link>
          <Link to="/outreach" className="text-primary-100/90 hover:underline">Outreach</Link>
          <Link to="/products" className="text-primary-100/90 hover:underline">Software</Link>
        </div>
        <div className="flex flex-col gap-2 text-center sm:text-start">
          <span className="font-bold">IglooCode™</span>
          <a href="https://iglooco.de/about" className="text-primary-100/90 hover:underline">About IglooCode™</a>
          <a href="https://iglooco.de/competition" className="text-primary-100/90 hover:underline">How it works</a>
          <a href="https://iglooco.de/team" className="text-primary-100/90 hover:underline">Meet the team</a>
          <a href="https://iglooco.de/getinvolved" className="text-primary-100/90 hover:underline">Get involved</a>
        </div>
        <div className="flex flex-col gap-2 text-center sm:text-start">
          <span className="font-bold">Educatr™</span>
          <a href="https://educatr.app" className="text-primary-100/90 hover:underline">Launch Educatr™</a>
          <a href="https://educatr.app/beta" className="text-primary-100/90 hover:underline">Beta programme</a>
        </div>
      </div>

      <p className="text-center text-primary-100/70 text-sm max-w-2xl">
        © 2024 Verglas Software Limited. All rights reserved. Verglas Software Limited is a private limited company incorporated in Northern Ireland with company number NI691988 and registered office at 15 The Square, Comber, BT23 5DX.
      </p>
    </footer>
  );
}
