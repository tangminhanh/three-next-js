'use client';
import Image from 'next/image'
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

  useEffect(() => {
    const scrollFunction = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 10) {
          navbar.style.top = '0';
        } else {
          navbar.style.top = '-50px';
        }
      }
    };

    window.addEventListener('scroll', scrollFunction);

    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  return (
   <main className="flex min-h-screen flex-col items-center justify-between">
  <div className="container  p-4">
    <div className="z-10 w-full max-w-5xl flex items-center justify-between font-mono text-sm">
      <TypingEffect />
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />
      <div className="flex items-center">
        <a
          className="flex place-items-center gap-2"
          href="/hehe"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
          <Image
            src="/resume.png"
            alt="Resume Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
    <SwipeContainer setScrollToSection={setScrollToSection} setActiveSection={setActiveSection} />
  </div>
</main>
  );
}
