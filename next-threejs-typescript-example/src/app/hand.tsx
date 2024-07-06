'use client'
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import styles from './Hand.module.css'; // Import the CSS module


const Hand: React.FC = () => {
    const handImageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        console.log('3s');
        if (handImageRef.current) {
            (handImageRef.current as HTMLElement).classList.remove(styles.hidden);
            (handImageRef.current as HTMLElement).classList.add(styles.visible); // Add the visible class after the delay
        }
    }, []);

    return (
        <div ref={handImageRef} className={`${styles.handImage} ${styles.hidden}`} id="hand-image">
          <a href="/about-me/edu" className="group px-5 py-4 transition-colors">
            <h2 className={`mb-3 text-l font-semibold ${styles.jump}`}>
              Swipe to know About Me
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                <Image
                  src="/hand.png"
                  alt="hand Logo"
                  className="dark:invert"
                  width={60}
                  height={12}
                  priority
                />
              </span>
            </h2>
          </a>
        </div>
    );
}

export default Hand;

