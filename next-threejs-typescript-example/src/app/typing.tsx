// TypingEffect.tsx
'use client'
// typing.tsx

import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const TypingEffect = () => {
  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: ["Xin Chào! Welcome to Lynn's corner"],
        typeSpeed: 50,
        // backDelay: 1000, // Delay before typing starts again after backspacing
        loop: true, // Loop through strings infinitely
        loopCount: 2, // Optional: number of loops, default is infinite
      });

      return () => {
        typed.destroy(); // Cleanup: Destroy Typed instance to prevent memory leaks
      };
    }
  }, []);

  return (
    <div className="flex w-full items-center justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <span ref={el}></span>
    </div>
  );
};

export default TypingEffect;
