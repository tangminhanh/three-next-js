'use client'
import Image from "next/image";
import { useState, useEffect, useRef, Suspense } from 'react';
import TypingEffect from '../typing';
import TogglePlay from "../video";
import { PageSkeleton } from "../ui/skeletons";
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
    <Suspense fallback={<PageSkeleton />}>
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
          > View
            My Resume{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            <Image
              src="/resume.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <h1 className="custom-font mb-3 text-3xl px-4 font-semibold box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">MY ASPIRATION</h1>
      <h1 className="custom-font mb-3 py-5 text-3xl font-semibold">Creator - Coding - Community</h1>
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[1000px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[300px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[440px] before:lg:h-[460px]">
        {/* Video with hover effects */}
        <div className="relative px-5">
          <video
            ref={videoRef}
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg border-transparent"
            src="/il.mp4"
            alt="Animation Video"
            width={224}
            height={168}
            autoPlay
            muted
            loop
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
        <div className="relative px-5">
            <video
            ref={videoRef}
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg border-transparent"
            src="/coding.mp4"
            alt="Animatifon Video"
            width={224}
            height={126}
            autoPlay
            muted
            loop
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
        <div className="relative px-5">
          <video
            ref={videoRef}
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg border-transparent"
            src="/com.mp4"
            alt="Animatifon Video"
            width={224}
            height={168}
            autoPlay
            muted
            loop
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
      </div>
    <div className= " pt-5 grid text-center lg:mb-0 lg:w-full lg:text-center transition-colors">
            <h1 className="group text-2xl grid text-center pt-8 font-semibold">
                Final Year Student @NTU, Singapore. 
            </h1>
    </div>
      <div className=" grid jump text-center lg:mb-0 lg:w-full lg:max-w-sm lg:text-center">
        <a
  href="/about-me/edu"
  className="group px-5 py-4 transition-colors jump">
  <h2 className="mb-3 text-l font-semibold">
    Swipe to know About Me{" "}
    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none jump">
      <Image
              src="/hand.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={50}
              height={12}
              priority
            />
    </span>
  </h2>
</a>
      </div>

   





      <style jsx>{`
  @keyframes jump {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .jump {
    animation: jump 1s infinite;
  }
`}</style>


    </main>
    </Suspense>
    // </SwipeableContainer>
  );
}
