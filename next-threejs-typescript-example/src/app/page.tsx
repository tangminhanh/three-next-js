'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';
import TypingEffect from './typing';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    // Auto play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <TypingEffect />

        {/* Placeholder for your content */}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[1000px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[300px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[440px] before:lg:h-[460px]">
        
        {/* Image with hover effects */}
        <div className={`relative transition-all duration-300 ${hoveredElement === 'image' ? 'scale-110 filter blur-sm' : ''}`}>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] cursor-pointer hover:blur-lg hover:scale-110"
            src="/girl.png"
            alt="Next.js Logo"
            width={250}
            height={100}
            priority
            onMouseEnter={() => setHoveredElement('image')}
            onMouseLeave={() => setHoveredElement(null)}
          />
        </div>

        {/* Video with hover effects */}
        <div className="relative">
          <video
            ref={videoRef}
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/il.mp4"
            alt="Animation Video"
            width={250}
            height={100}
            autoPlay
            muted
            loop
            onMouseEnter={() => setHoveredElement('video')}
            onMouseLeave={() => setHoveredElement(null)}
          />
          {!isPlaying && (
            <button
              className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-2xl"
              onClick={togglePlay}
            >
              Play
            </button>
          )}
        </div>

        {/* Another Image with hover effects */}
        <div className={`relative transition-all duration-300 ${hoveredElement === 'comm' ? 'scale-110 filter blur-sm' : ''}`}>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] cursor-pointer hover:blur-sm"
            src="/comm.png"
            alt="hehe"
            width={250}
            height={100}
            priority
            onMouseEnter={() => setHoveredElement('comm')}
            onMouseLeave={() => setHoveredElement(null)}
          />
        </div>

      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
          View Resume {" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

      
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            About Me{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
