import React, { useRef } from 'react';
import Home from './about-me/page';
import Edu from './about-me/edu/page';
import Work from './about-me/work/page';
import Community from './about-me/community/page';

const SwipeContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
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
      <div className="slide" style={{ height: '100%' }}>
        <Work />
      </div>
      <div className="slide" style={{ height: '100%' }}>
        <Community />
      </div>
    </div>
  );
};

export default SwipeContainer;
