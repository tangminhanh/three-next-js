import React, { useRef } from 'react';
import Home from './about-me/page';
import Edu from './about-me/edu/page';
import Work from './about-me/work/page';
import Community from './about-me/community/page';

interface SwipeContainerProps {
  setScrollToSection: React.Dispatch<React.SetStateAction<(section: string) => void>>;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const SwipeContainer: React.FC<SwipeContainerProps> = ({ setScrollToSection, setActiveSection }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const eduRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    if (!containerRef.current) return;

    let targetRef: React.RefObject<HTMLDivElement> | null = null;

    switch (section) {
      case 'home':
        targetRef = homeRef;
        break;
      case 'edu':
        targetRef = eduRef;
        break;
      case 'work':
        targetRef = workRef;
        break;
      case 'community':
        targetRef = communityRef;
        break;
      default:
        return;
    }

    if (targetRef && targetRef.current) {
      containerRef.current.scrollTo({
        top: targetRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  // Update active section based on scroll position
  const handleScroll = () => {
    if (!containerRef.current) return;

    const scrollTop = containerRef.current.scrollTop;
    const sectionRefs = [homeRef, eduRef, workRef, communityRef];
    const sectionNames = ['home', 'edu', 'work', 'community'];

    for (let i = 0; i < sectionRefs.length; i++) {
      const ref = sectionRefs[i];
      if (ref.current && ref.current.offsetTop <= scrollTop + window.innerHeight / 2) {
        setActiveSection(sectionNames[i]);
      }
    }
  };

  React.useEffect(() => {
    setScrollToSection(() => scrollToSection);
  }, [setScrollToSection]);

  return (
    <div
      ref={containerRef}
      className="swipe-container"
      style={{ overflowY: 'scroll', height: '100vh' }}
      onScroll={handleScroll}
    >
      <div className="slide" style={{ height: '100%' }} ref={homeRef}>
        <Home />
      </div>
      <div className="slide" style={{ height: '100%' }} ref={eduRef}>
        <Edu />
      </div>
      <div className="slide" style={{ height: '100%' }} ref={workRef}>
        <Work />
      </div>
      <div className="slide" style={{ height: '100%' }} ref={communityRef}>
        <Community />
      </div>
    </div>
  );
};

export default SwipeContainer;
