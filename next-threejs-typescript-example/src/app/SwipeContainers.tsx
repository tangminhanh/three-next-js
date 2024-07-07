import React, { createContext, useContext, useRef } from 'react';
import Home from './about-me/page';
import Edu from './about-me/edu/page';
import Work from './about-me/work/page';
import Community from './about-me/community/page';

const ScrollContext = createContext();

export const useScrollContext = () => {
  return useContext(ScrollContext);
};

const SwipeContainer = () => {
  const containerRef = useRef(null);
  const workSectionRef = useRef(null);
  const eduSectionRef = useRef(null);
  const homeSectionRef = useRef(null);

  const handleScroll = () => {
    if (!containerRef.current) return;

    const { scrollTop, clientHeight } = containerRef.current;
    const scrollThreshold = clientHeight / 2; // Adjust this threshold as needed

    if (scrollTop < scrollThreshold) {
      console.log('Scroll Up');
      // Handle scrolling up
    } else if (scrollTop > scrollThreshold) {
      console.log('Scroll Down');
      // Handle scrolling down
    }
  };

  const scrollToWorkSection = () => {
    if (workSectionRef.current) {
      workSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

const scrollToEduSection = () => {
    if (workSectionRef.current) {
      workSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToWorkSection }}>
      <div
        ref={containerRef}
        className="swipe-container"
        style={{ overflowY: 'scroll', height: '100vh' }}
        onScroll={handleScroll}
      >
        <div className="slide" style={{ height: '100%' }}>
          <Home />
        </div>
        <div className="slide" style={{ height: '100%' }}>
          <Edu />
        </div>
        <div className="slide" style={{ height: '100%' }} ref={workSectionRef}>
          <Work />
        </div>
        <div className="slide" style={{ height: '100%' }}>
          <Community />
        </div>
      </div>
    </ScrollContext.Provider>
  );
};

export default SwipeContainer;
