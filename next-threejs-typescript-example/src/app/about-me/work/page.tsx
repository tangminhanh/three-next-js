'use client';
import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';
import { CardAboutMe } from '../../ui/card'; // Correctly import named export

export default function Page() {
const videoRef = useRef<HTMLVideoElement>(null);
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
        <div className="flex flex-col items-center">
        <h1 className="custom-font mb-2 text-xl md:text-2xl">Work Experience</h1>
        <div className="relative mb-4">
          <video
            ref={videoRef}
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg border-transparent"
            src="/Artist inside.mp4"
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
              
            </button>
          )}
        </div>
        <h2 className="text-2xl font-semibold">Final Year Student @NTU, Singapore</h2>
      
      <div className="grid gap-3 sm:grid-cols-2 pt-4 lg:grid-cols-3">
        <CardAboutMe />
      </div>
      </div>
      
      

    </main>
  );
}


