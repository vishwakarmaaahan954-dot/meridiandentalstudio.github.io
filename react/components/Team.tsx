import React from 'react';
import { TeamMember } from '../types';

/**
 * ==============================================================================
 * TEAM COMPONENT (react/components/Team.tsx)
 * ==============================================================================
 * Showcases the dental specialists, their roles, and professional backgrounds.
 */
export const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Dr. Aanya Sharma',
      role: 'Founder · Cosmetic & Restorative',
      bio: '18 years in practice, trained in full-mouth rehabilitation and digital smile design.',
      imageUrl: './assets/images/team-dr-aanya.jpg'
    },
    {
      name: 'Dr. Rohan Verma',
      role: 'Orthodontics',
      bio: 'Leads our Invisalign program with over 900 aligner cases completed.',
      imageUrl: './assets/images/team-dr-rohan.jpg'
    },
    {
      name: 'Dr. Kavya Iyer',
      role: 'Pediatric Dentistry',
      bio: 'Specializes in first visits and helping nervous young patients feel at ease.',
      imageUrl: './assets/images/team-dr-kavya.jpg'
    }
  ];

  return (
    <section id="team">
      <div className="section-head reveal">
        <span className="eyebrow">Meet the Team</span>
        <h2>Three specialists, one shared chart.</h2>
        <p>
          We consult on complex cases together, so your treatment plan reflects the
          whole team's thinking.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card reveal">
            <div className="team-photo">
              <img src={member.imageUrl} alt={`${member.name}, ${member.role}`} />
            </div>
            <div className="team-info">
              <span className="role">{member.role}</span>
              <h3>{member.name}</h3>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
