import React from 'react';
import { SERVICES } from '../constants';
import { Mic2, Zap, Settings, CheckCircle } from 'lucide-react';

const iconMap = {
  Mic2: Mic2,
  Zap: Zap,
  Settings: Settings,
  Music: Mic2
};

const Services: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-base font-extrabold text-aura-highlight uppercase tracking-wider mb-2">What We Do</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-aura-cream mb-6">Expert Production Services</h1>
          <p className="max-w-2xl mx-auto text-xl text-aura-cream/70 font-medium">
            From studio to stage, we provide comprehensive technical solutions tailored to your unique requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.iconName] || Settings;
            
            return (
              <div 
                key={service.id}
                className="bg-aura-800/80 backdrop-blur-sm border border-aura-cream/5 rounded-2xl p-8 hover:bg-aura-800 transition-all duration-300 hover:border-aura-accent/30 group shadow-lg"
              >
                <div className="w-14 h-14 bg-aura-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-aura-cream/10">
                  <Icon className="w-7 h-7 text-aura-accent" />
                </div>
                
                <h3 className="text-2xl font-extrabold text-aura-cream mb-4">{service.title}</h3>
                <p className="text-aura-cream/70 mb-8 leading-relaxed font-medium">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-aura-cream/60">
                      <CheckCircle className="w-5 h-5 text-aura-highlight mr-3 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-24 bg-gradient-to-r from-aura-accent to-aura-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h3 className="text-3xl font-extrabold text-white mb-4">Ready to elevate your sound?</h3>
            <p className="text-aura-cream/90 mb-8 max-w-xl mx-auto font-medium">
              Contact us today to discuss your upcoming project or event requirements.
            </p>
            <a 
              href="mailto:contact@aurasonic.com" 
              className="inline-block bg-aura-cream text-aura-800 font-extrabold px-8 py-3 rounded-full hover:bg-white transition-colors"
            >
              Get a Quote
            </a>
          </div>
          
          {/* Abstract pattern background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;