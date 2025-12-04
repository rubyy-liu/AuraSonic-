export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'Mic2' | 'Zap' | 'Music' | 'Settings'; 
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  date: string;
  approved: boolean;
}

export interface Show {
  id: string;
  artist: string;
  date: string;
  venue: string;
  city: string;
  link?: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}