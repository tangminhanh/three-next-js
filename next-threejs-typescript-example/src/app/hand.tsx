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
        <div ref={handImageRef} className={`${styles.handImage} ${styles.hidden} pt-5`} id="hand-image">
          <div className="group px-5 py-4 transition-colors flex flex-col items-center">
          <div className={`mb-3 text-l font-semibold ${styles.jump} group-hover:translate-x-1 motion-reduce:transform-none flex items-center`}>
            <h2 className="mr-2">Swipe to know About Me</h2>
            <Image
              src="/hand.png"
              alt="hand Logo"
              className="dark:invert"
              width={60}
              height={12}
              priority
            />
          </div>
        </div>
        </div>
    );
}

export default Hand;

