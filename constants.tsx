import { Service, Testimonial, Show } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Sound Engineering',
    description: 'Professional live sound mixing and studio recording services ensuring crystal clear audio for any event.',
    iconName: 'Mic2',
    details: [
      'Live Sound Mixing (FOH & Monitor)',
      'Studio Recording & tracking',
      'Mixing & Mastering',
      'Podcast Production',
      'Acoustic Consultation'
    ]
  },
  {
    id: 's2',
    title: 'Lighting Design',
    description: 'Immersive lighting experiences that elevate performances and create unforgettable atmospheres.',
    iconName: 'Zap',
    details: [
      'Stage Lighting Design',
      'DMX Programming',
      'Live Light Operation',
      'Rigging & Setup',
      'Projection Mapping'
    ]
  },
  {
    id: 's3',
    title: 'Production Management',
    description: 'End-to-end technical production management for concerts, festivals, and corporate events.',
    iconName: 'Settings',
    details: [
      'Technical Direction',
      'Stage Management',
      'Equipment Sourcing',
      'Crew Logistics',
      'Event Planning Support'
    ]
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Event Director, CityFest',
    content: 'Aurasonic transformed our annual festival. The sound clarity was unmatched, and the lighting design brought the main stage to life. Truly professional execution.',
    date: '2023-08-15',
    approved: true
  },
  {
    id: 't2',
    name: 'The Midnight Echo',
    role: 'Indie Rock Band',
    content: 'Best monitor mix we have ever had on tour. It makes such a difference when the engineer actually understands the music. Highly recommended!',
    date: '2023-11-02',
    approved: true
  },
  {
    id: 't3',
    name: 'Marc Dubois',
    role: 'Venue Owner',
    content: 'Reliable, punctual, and incredibly talented. Aurasonic is our go-to for all major international acts coming through the venue.',
    date: '2024-01-20',
    approved: true
  }
];

export const MOCK_SHOWS: Show[] = [
  {
    id: 'g1',
    artist: 'Neon Horizon',
    date: '2024-06-12',
    venue: 'The Warehouse',
    city: 'Brooklyn, NY'
  },
  {
    id: 'g2',
    artist: 'Jazz Collective',
    date: '2024-06-18',
    venue: 'Blue Note',
    city: 'New York, NY'
  },
  {
    id: 'g3',
    artist: 'Summer Beats Festival',
    date: '2024-07-04',
    venue: 'Central Park',
    city: 'New York, NY'
  }
];

export const HERO_IMAGES = [
  "https://picsum.photos/1920/1080?grayscale&blur=2",
  "https://picsum.photos/1920/1080?blur=4",
  "https://picsum.photos/1920/1080?grayscale"
];