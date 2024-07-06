// app/ui/BeyondCoding.tsx
'use client'
import React from 'react';
import styles from './BeyondCoding.module.css'; // Import your CSS for styling
import { TimelineData } from '../lib/data'; // Assuming you have your data in a separate file

const BeyondCodingPage: React.FC = () => {
  const calculateRotation = (index: number) => {
    const baseRotation = 25; // Starting rotation for the middle card
    const separationAngle = 20; // Angle separation between cards
    const middleIndex = Math.floor(TimelineData.length / 2);

    // Calculate rotation based on the index relative to the middle card
    return (index - middleIndex) * separationAngle + baseRotation;
  };

  return (
    <div className={styles.container}>
      <div className={styles.staticContent}>
        {/* Left static content */}
        <h1>Beyond Coding</h1>
        <p>This is static content on the left side.</p>
      </div>
      {/* <div className={styles.divider}></div> */}
      <div className={styles.timeline}>
  {/* Right scrollable timeline */}
  {TimelineData.map((section, index) => (
    <div key={index} className={styles.timelineSection}>
      <h2 className={`custom-font text-xl  ${styles.timelineTitle}`}>{section.title}</h2>
      <div className={`${styles.cardContainer}`}>
        {section.items.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.glass}`}
            style={{
              '--r': calculateRotation(idx),
              transform: `rotate(${calculateRotation(idx)}deg)`
            }}
            data-text={item}
          >
            <div className={styles.glassContent}>
              <p>{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default BeyondCodingPage;
