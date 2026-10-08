import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ConferenceThemes } from '../components/ConferenceThemes';
import { ImportantDates } from '../components/ImportantDates';
import { CallForAbstracts } from '../components/CallForAbstracts';
import { Agenda } from '../components/Agenda';
import { Organizer } from '../components/Organizer';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About the Conference (Crisp White) */}
      <About />

      {/* 01 / THEMES: 8 Research Tracks (Soft Slate Neutral) */}
      <ConferenceThemes />

      {/* 02 / DATES: Key Milestones & Timeline (Crisp White) */}
      <ImportantDates />

      {/* 03 / AUTHORS: Call for Abstracts & Guidelines (Deep Emerald Jewel Tone) */}
      <CallForAbstracts />

      {/* 04 / PROGRAM HIGHLIGHTS: 1-Day Scientific Agenda (Soft Slate Neutral) */}
      <Agenda isPreview={true} />

      {/* 05 / HOST & LEADERSHIP: Department of GEB & University of Chittagong (Scholarly Slate) */}
      <Organizer />

      {/* Contact Secretariat & Travel Directions (Crisp White) */}
      <Contact />
    </div>
  );
};
