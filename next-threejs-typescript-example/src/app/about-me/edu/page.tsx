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
        <h1 className="custom-font mb-2 text-xl md:text-2xl">About Me</h1>
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
      
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
            <h3 className="text-center text-sm pt-4 font-semibold leading-8 text-gray-500 uppercase">Works with different technologies</h3>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-7">
          <img
            className="max-h-12 w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682840456/image_2_misfnu.png"
            alt="Javascript"
            width="158"
            height="48"
          />
          <img
            className="max-h-12 w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682843046/image_14_1_riikm8.png"
            alt="Typescript"
            width="158"
            height="48"
          />
          <img
            className="max-h-12 w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682843188/PHP-logo.svg_1_osg7q3.png"
            alt="PHP"
            width="158"
            height="48"
          />
          <img
            className="max-h-12 w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682845481/image_16_1_nibbjo.png"
            alt="C#"
            width="158"
            height="48"
          />
          <img
            className="max-h-12 w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682841501/image_8_ow9j2c.png"
            alt="Python"
            width="158"
            height="48"
          />
          <img
            className="max-h-12 w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682841282/image_5_zryc0v.png"
            alt="Tailwind"
            width="158"
            height="48"
          />
          <img
            className="max-h-12 w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682840617/image_3_nrk8jx.png"
            alt="VueJs"
            width="158"
            height="48"
          />
        </div>
        <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8">
            <img 
                className="max-h-12 w-full object-contain col-span-1" 
                src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682841142/image_4_vyfc0e.png" 
                alt="NuxtJs" width="158" height="48"/>
            <img className="max-h-12 w-full object-contain col-span-1" src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682841744/image_10_zfv0fz.png" alt="NodeJs" width="158" height="48"/>
            <Image className="max-h-12 w-full object-contain col-span-1" 
            src="/aws.png" alt="AWS" width="158" height="48"/>
            <img className="max-h-12 w-full object-contain col-span-1" src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682843277/image_15_1_mxtpes.png" alt=".NET Core" width="158" height="48"/>
            <img className="max-h-12 w-full object-contain col-span-1" src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682843518/mysql-logo-png-transparent_1_uvb3gb.png" alt="MySQL" width="158" height="48"/>
            <img className="max-h-12 w-full object-contain col-span-1" src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682844385/microsoft-sql-server-logo-svgrepo-com_2_mtucyf.png" alt="MsSQL" width="158" height="48"/>
            <img className="max-h-12 w-full object-contain col-span-1" src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682842207/Microsoft_Azure_Logo.svg_1_pwbd5z.png" alt="Azure" width="158" height="48"/>
            <img className="max-h-12 w-full object-contain col-span-1" src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682843441/Ubuntu-Logo_1_ppdvx1.png" alt="Ubuntu" width="158" height="48"/></div>
      </div>

    </main>
  );
}


