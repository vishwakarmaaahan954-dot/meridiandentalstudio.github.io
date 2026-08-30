/**
 * ==============================================================================
 * MERIDIAN DENTAL STUDIO — TYPES & INTERFACES (react/types.ts)
 * ==============================================================================
 * This file defines TypeScript type contracts for all data structures used
 * across the Meridian Dental Studio React application components.
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  iconSvgPath: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface GalleryItem {
  imageUrl: string;
  tag: string;
  altText: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface BookingFormData {
  fname: string;
  lname: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}
