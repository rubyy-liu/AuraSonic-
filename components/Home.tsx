import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Speaker } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-aura-900 via-aura-900/60 to-aura-900/30 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop" 
            alt="Concert Crowd" 
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-aura-cream via-aura-highlight to-aura-accent mb-6 tracking-tight drop-shadow-2xl">
              AURASONIC
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-aura-cream/90 max-w-2xl mx-auto mb-10 font-medium"
          >
            Elevating live performance through precision audio engineering and immersive lighting design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/services" className="px-8 py-3 bg-aura-accent hover:bg-orange-500 text-white font-extrabold rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(215,102,22,0.5)]">
              Our Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/shows" className="px-8 py-3 bg-aura-cream/10 hover:bg-aura-cream/20 text-aura-cream border border-aura-cream/20 font-extrabold rounded-full transition-all flex items-center justify-center">
              Upcoming Shows
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bio / About Section */}
      <section className="py-24 bg-aura-900 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 md:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden relative shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-2 border-aura-800">
                <div className="absolute inset-0 bg-aura-accent/20 mix-blend-overlay z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" 
                  alt="Sound Console" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-2 mb-4 text-aura-highlight">
                <Activity className="w-5 h-5" />
                <span className="font-extrabold uppercase tracking-wider text-sm">Who We Are</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-aura-cream mb-6">
                Sonic Precision & Visual Impact
              </h2>
              <div className="space-y-4 text-aura-cream/70 leading-relaxed font-medium">
                <p>
                  Aurasonic was founded on a simple principle: the audience deserves to hear and see the artist exactly as intended. With over a decade of experience in the music production industry, we bridge the gap between technical complexity and artistic vision.
                </p>
                <p>
                  Whether it is an intimate jazz club or a sprawling outdoor festival, our approach remains the same—meticulous attention to detail, top-tier equipment, and a passion for the live experience.
                </p>
                <p>
                  We don't just set up gear; we craft environments where music thrives.
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-aura-cream/10 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-extrabold text-aura-accent mb-1">500+</h4>
                  <p className="text-sm text-aura-cream/50">Live Shows</p>
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold text-aura-accent mb-1">10+</h4>
                  <p className="text-sm text-aura-cream/50">Years Active</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="fixed top-20 right-0 w-64 h-64 bg-aura-accent/20 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-aura-highlight/10 rounded-full blur-[120px] pointer-events-none z-0" />
    </div>
  );
};

export default Home;