'use client'
import Image from "next/image";
import { useState, useEffect, useRef, Suspense } from 'react';
import TypingEffect from '../typing';
import TogglePlay from "../video";
// import { PageSkeleton } from "../ui/skeletons";
import Hand from '../hand'; 
// import { useScrollContext } from "../SwipeContainers";
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
    const timer = setTimeout(() => {
      const handImage = document.getElementById('hand-image');
      if (handImage) {
        handImage.classList.add('visible');
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    } 
  }, []);

  return (
    // <Suspense fallback={<PageSkeleton />}>
    <main className="flex min-h-screen flex-col items-center p-20">
      <h1 className="custom-font mb-3 text-3xl px-4 font-semibold box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">MY ASPIRATION</h1>
      <h1 className="custom-font mb-3 text-3xl font-semibold">Creator - Coding - Community</h1>
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[1000px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[300px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[440px] before:lg:h-[460px]">
        {/* Video with hover effects */}
        <div className="relative px-5">
          <video
            ref={videoRef}
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg border-transparent"
            src="/il.mp4"
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
              
            </button>
          )}
        </div>
        <div className="relative px-5">
            <video
            ref={videoRef}
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg border-transparent"
            src="/coding.mp4"
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
                
            </button>
            )}
        </div> 
        {/* Another Image with hover effects */}
        <div className="relative px-5">
          <video
            ref={videoRef}
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg border-transparent"
            src="/com.mp4"
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
              
            </button>
          )}
        </div>
      </div>
    <div className= " pt-5 grid text-center lg:mb-0 lg:w-full lg:text-center transition-colors">
            
             {/* <div className="max-w-3xl mx-auto target target-show"> */}
              <p className=" text-center max-w-3xl mx-auto leading-8 text-gray-400">Crafting beautiful and functional web applications is my passion. As a full-stack developer, I bring together my skills in front-end and back-end development to create seamless user experiences.</p>
              {/* </div> */}
              <Hand/>
    </div>
          
   

    </main>

  );
}
