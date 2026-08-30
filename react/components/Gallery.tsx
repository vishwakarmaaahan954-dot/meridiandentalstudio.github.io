import React from 'react';
import { GalleryItem } from '../types';

/**
 * ==============================================================================
 * GALLERY COMPONENT (react/components/Gallery.tsx)
 * ==============================================================================
 * Displays a horizontally scrollable strip of treatment outcomes and clinic space.
 */
export const Gallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      imageUrl: './assets/images/gallery-veneers.jpg',
      tag: 'Veneers · 6 visits',
      altText: 'Smile result after veneers treatment'
    },
    {
      imageUrl: './assets/images/gallery-whitening.jpg',
      tag: 'Whitening · 2 visits',
      altText: 'Smile result after whitening treatment'
    },
    {
      imageUrl: './assets/images/gallery-invisalign.jpg',
      tag: 'Invisalign · 11 months',
      altText: 'Smile result after Invisalign treatment'
    },
    {
      imageUrl: './assets/images/gallery-implant.jpg',
      tag: 'Implant · 1 tooth',
      altText: 'Single tooth implant result'
    },
    {
      imageUrl: './assets/images/gallery-sterilization.jpg',
      tag: 'Our sterilization room',
      altText: 'Sterilization and dental hygiene equipment'
    }
  ];

  return (
    <section id="gallery">
      <div className="section-head reveal">
        <span className="eyebrow">Smile Gallery</span>
        <h2>A few results, with consent to share.</h2>
        <p>Every case here is a real patient who agreed to let us show their journey.</p>
      </div>

      <div className="gallery-strip">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item reveal">
            <img src={item.imageUrl} alt={item.altText} />
            <span className="tag">{item.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
