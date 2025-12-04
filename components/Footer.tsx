import React from 'react';
import { Instagram, Mail, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">AURASONIC</h3>
            <p className="text-slate-400 text-sm max-w-xs">
              Professional Audio & Visual Solutions. <br />
              Creating immersive experiences through sound and light.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-aura-accent transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-aura-accent transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="mailto:contact@aurasonic.com" className="text-slate-400 hover:text-aura-accent transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-white/10 pt-8 text-center md:text-left">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Aurasonic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;