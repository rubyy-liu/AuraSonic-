import React, { useState } from 'react';
import { INITIAL_TESTIMONIALS } from '../constants';
import { Quote, MessageSquare, Loader2, Star } from 'lucide-react';
import { FormStatus } from '../types';

const Testimonials: React.FC = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(FormStatus.SUBMITTING);
    // Simulate API submission
    setTimeout(() => {
      setFormStatus(FormStatus.SUCCESS);
      setTimeout(() => {
        setFormStatus(FormStatus.IDLE);
        setShowForm(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-aura-800/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-base font-extrabold text-aura-highlight uppercase tracking-wider mb-2">Community</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-aura-cream">Client Stories</h1>
          </div>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 bg-aura-cream/10 hover:bg-aura-cream/20 border border-aura-cream/20 text-aura-cream rounded-full font-bold transition-all flex items-center"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Write a Review
          </button>
        </div>

        {/* Submission Form (Collapsible) */}
        {showForm && (
          <div className="mb-16 bg-aura-800/90 border border-aura-accent/30 rounded-2xl p-8 max-w-2xl mx-auto animate-fade-in shadow-2xl shadow-aura-accent/10">
            <h3 className="text-2xl font-extrabold text-aura-cream mb-6">Share your experience</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-aura-cream/70 mb-1 font-medium">Your Name</label>
                  <input required type="text" className="w-full bg-black/40 border border-aura-cream/10 rounded-lg px-4 py-3 text-aura-cream focus:border-aura-accent focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-aura-cream/70 mb-1 font-medium">Role / Company (Optional)</label>
                  <input type="text" className="w-full bg-black/40 border border-aura-cream/10 rounded-lg px-4 py-3 text-aura-cream focus:border-aura-accent focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-aura-cream/70 mb-1 font-medium">Review</label>
                <textarea required rows={4} className="w-full bg-black/40 border border-aura-cream/10 rounded-lg px-4 py-3 text-aura-cream focus:border-aura-accent focus:outline-none"></textarea>
              </div>
              <div className="flex justify-end">
                <button 
                  type="submit"
                  disabled={formStatus === FormStatus.SUBMITTING || formStatus === FormStatus.SUCCESS}
                  className={`px-8 py-3 rounded-full font-bold transition-all ${
                    formStatus === FormStatus.SUCCESS ? 'bg-green-600 text-white' : 'bg-aura-accent text-white hover:bg-orange-600'
                  }`}
                >
                   {formStatus === FormStatus.SUBMITTING ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : formStatus === FormStatus.SUCCESS ? (
                    "Submitted!"
                  ) : (
                    "Submit Review"
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIAL_TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-aura-800/60 border border-aura-cream/5 p-8 rounded-2xl relative hover:bg-aura-800 transition-colors shadow-lg">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-aura-cream/10" />
              
              <div className="flex gap-1 mb-4 text-aura-accent">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>

              <p className="text-aura-cream/90 mb-6 italic leading-relaxed font-medium">"{t.content}"</p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-aura-accent to-aura-highlight flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="text-aura-cream font-bold text-sm">{t.name}</h4>
                  <p className="text-aura-cream/50 text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;