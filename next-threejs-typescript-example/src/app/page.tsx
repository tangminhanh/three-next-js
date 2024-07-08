'use client';
import Navbar from './ui/navbar';
import SwipeContainer from './SwipeContainers';
import { useState, useEffect } from 'react';
import TypingEffect from './typing';
export default function Page() {
  const [scrollToSection, setScrollToSection] = useState<(section: string) => void>(() => () => {});
  const [activeSection, setActiveSection] = useState<string>('home');

  // Update the active section whenever scrolling to a new section
  const handleNavigate = (section: string) => {
    setActiveSection(section);
    scrollToSection(section);
  };

  return (
   <main className="flex min-h-screen flex-col items-center justify-between w-full">
  <div className="container items-center p-4">
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />
    <SwipeContainer setScrollToSection={setScrollToSection} setActiveSection={setActiveSection} />
  </div>
</main>
  );
}
