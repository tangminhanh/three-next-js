'use client';
import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';
import { CardAboutMe } from '../../ui/card'; // Correctly import named export
import Loading from '../loading'
export default function Edu() {
const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
const [viewportHeight, setViewportHeight] = useState(0);
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
  function handleResize() {
      setViewportHeight(window.innerHeight);
    }
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  
  return (
    <main className="flex flex-wrap min-h-screen flex-col items-center overflow-hidden ">
        <div className="flex flex-wrap flex-col items-center">
        <h1 className="custom-font text-[1em] md:text-[1.5em]">About Me</h1>
        <div className="relative mb-[0.5em]">
          <video
            ref={videoRef}
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg border-transparent w-full max-w-[6em] md:max-w-[10em]"
            src="/Artist inside.mp4"
            autoPlay
            muted
            loop
          />
          {!isPlaying && (
            <button
              className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-[1.5em]"
              onClick={togglePlay}
            >
              
            </button>
          )}
        </div>
        <h2 className="text-[0.5em] md:text-[1.25em] font-semibold mb-[0.25em]">Final Year Student @NTU, Singapore</h2>
      
        <CardAboutMe />
        {viewportHeight > 600 && (
      <div className="mx-auto max-w-[30em] mt-[0.25em] px-[1.5em] sm:max-w-[30em] md:max-w-[34em] md:px-[2em] lg:px-[1em] sm:py-[1em] md:py-[0.5em]">
            <h3 className="text-center text-[0.5em] md:text-[0.75em] font-semibold text-gray-500 uppercase">Works with different technologies</h3>
             <div className="mx-auto mt-[1em] grid max-w-[20em] items-center gap-x-[1em] gap-y-[1em] sm:max-w-[24em] sm:gap-x-[1.5em] lg:mx-0 lg:max-w-none sm:grid-cols-8 grid-cols-4 sm:justify-center">

          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682840456/image_2_misfnu.png"
            alt="Javascript"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682843046/image_14_1_riikm8.png"
            alt="Typescript"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682843188/PHP-logo.svg_1_osg7q3.png"
            alt="PHP"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682845481/image_16_1_nibbjo.png"
            alt="C#"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682841501/image_8_ow9j2c.png"
            alt="Python"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682841282/image_5_zryc0v.png"
            alt="Tailwind"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682840617/image_3_nrk8jx.png"
            alt="VueJs"
          />
          <Image
            className="max-h-[3em] w-full object-contain col-span-1 dark:invert"
            src="/docker.jpeg"
            alt="AWS"
            width="158" height="48"
          />
        </div>
        <div className="mx-auto mt-[2em] grid max-w-[20em] grid-cols-4 items-center gap-x-[1em] gap-y-[1em] sm:max-w-[24em]  sm:gap-x-[1.5em] lg:mx-0 lg:max-w-none sm:grid-cols-8">
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682841142/image_4_vyfc0e.png"
            alt="NuxtJs"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682841744/image_10_zfv0fz.png"
            alt="NodeJs"
          />
          <Image
            className="max-h-[3em] w-full object-contain col-span-1"
            src="/aws.png"
            alt="AWS"
            width="158" height="48"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682843277/image_15_1_mxtpes.png"
            alt=".NET Core"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682843518/mysql-logo-png-transparent_1_uvb3gb.png"
            alt="MySQL"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682844385/microsoft-sql-server-logo-svgrepo-com_2_mtucyf.png"
            alt="MsSQL"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682842207/Microsoft_Azure_Logo.svg_1_pwbd5z.png"
            alt="Azure"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682843441/Ubuntu-Logo_1_ppdvx1.png"
            alt="Ubuntu"
          />
        </div>
      </div>)}
      </div>
      
    </main>
  );
}


