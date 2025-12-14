import React, { useState } from 'react';
import { MOCK_SHOWS } from '../constants';
import { Calendar, MapPin, Instagram, ArrowRight, Loader2 } from 'lucide-react';
import { FormStatus } from '../types';

const MadGigz: React.FC = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(FormStatus.SUBMITTING);
    // Simulate API call
    setTimeout(() => {
      setFormStatus(FormStatus.SUCCESS);
      // Reset after 3 seconds
      setTimeout(() => setFormStatus(FormStatus.IDLE), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-aura-cream mb-4 tracking-tighter uppercase">MadGigz</h1>
          <p className="text-xl text-aura-highlight font-medium">Curated Live Music Experiences</p>
        </div>

        {/* Coming Soon / Instagram Section */}
        <div className="bg-gradient-to-br from-aura-800 to-aura-900 border border-aura-accent/30 rounded-3xl p-8 md:p-12 mb-16 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
              <Instagram className="w-8 h-8 text-aura-cream" />
            </div>
            <h2 className="text-3xl font-extrabold text-aura-cream mb-4">Full Schedule Integration Coming Soon</h2>
            <p className="text-aura-cream/80 max-w-2xl mx-auto mb-8 font-medium">
              We are currently building a direct link to our master schedule. In the meantime, follow us on Instagram for the latest show announcements and behind-the-scenes footage.
            </p>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-aura-accent to-red-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-aura-accent/25 transition-all"
            >
              Follow @MadGigz <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Upcoming Shows List (Preview) */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-extrabold text-aura-cream mb-6 flex items-center">
              <span className="w-2 h-8 bg-aura-highlight mr-3 rounded-full"></span>
              Upcoming Shows Preview
            </h3>
            
            <div className="space-y-4">
              {MOCK_SHOWS.map((show) => (
                <div key={show.id} className="group bg-aura-800/40 border border-aura-cream/5 p-6 rounded-xl hover:bg-aura-800 hover:border-aura-highlight/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center justify-center w-16 h-16 bg-black/20 rounded-lg border border-aura-cream/10 text-center">
                      <span className="text-xs text-aura-highlight uppercase font-extrabold">{new Date(show.date).toLocaleString('default', { month: 'short' })}</span>
                      <span className="text-2xl font-extrabold text-aura-cream">{new Date(show.date).getDate()}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-extrabold text-aura-cream group-hover:text-aura-highlight transition-colors">{show.artist}</h4>
                      <div className="flex items-center text-aura-cream/60 text-sm mt-1 gap-4 font-medium">
                        <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {show.venue}</span>
                        <span className="hidden md:inline text-aura-cream/30">|</span>
                        <span className="hidden md:inline">{show.city}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <button className="w-full md:w-auto px-4 py-2 rounded-lg bg-aura-cream/5 text-sm font-medium text-aura-cream hover:bg-aura-cream/10 border border-aura-cream/10 transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submission Form */}
          <div className="lg:col-span-1">
            <div className="bg-aura-800/20 border border-aura-cream/10 p-6 rounded-2xl sticky top-24 backdrop-blur-sm">
              <h3 className="text-xl font-extrabold text-aura-cream mb-2">Submit a Gig</h3>
              <p className="text-aura-cream/60 text-sm mb-6 font-medium">Are you an artist or promoter? Submit your show to be listed.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-aura-cream/50 uppercase mb-1">Artist Name</label>
                  <input type="text" required className="w-full bg-black/30 border border-aura-cream/10 rounded-lg px-4 py-2 text-aura-cream focus:outline-none focus:border-aura-accent" placeholder="e.g. The Neon Hearts" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-aura-cream/50 uppercase mb-1">Date</label>
                  <input type="date" required className="w-full bg-black/30 border border-aura-cream/10 rounded-lg px-4 py-2 text-aura-cream focus:outline-none focus:border-aura-accent" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-aura-cream/50 uppercase mb-1">Venue & City</label>
                  <input type="text" required className="w-full bg-black/30 border border-aura-cream/10 rounded-lg px-4 py-2 text-aura-cream focus:outline-none focus:border-aura-accent" placeholder="e.g. The Fillmore, SF" />
                </div>
                
                <button 
                  disabled={formStatus === FormStatus.SUBMITTING || formStatus === FormStatus.SUCCESS}
                  className={`w-full py-3 rounded-lg font-bold flex items-center justify-center transition-all ${
                    formStatus === FormStatus.SUCCESS 
                      ? 'bg-green-600 text-white'
                      : 'bg-aura-highlight text-aura-900 hover:bg-aura-highlight/80'
                  }`}
                >
                  {formStatus === FormStatus.SUBMITTING ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : formStatus === FormStatus.SUCCESS ? (
                    "Submitted Successfully"
                  ) : (
                    "Submit Show"
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MadGigz;