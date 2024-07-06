'use client'

import { useState } from "react";
import React, { useRef, useEffect } from 'react';



const TogglePlay = () => {
const videoRef = useRef<HTMLVideoElement>(null);
const [isPlaying, setIsPlaying] = useState(false)
   if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }

  useEffect(() => {
    // Auto play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, []); 

  // return (
  //    <div className="relative z-[-1] flex place-items-center before:absolute before:h-[1000px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[300px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[440px] before:lg:h-[460px]">

  //       {/* Video with hover effects */}
  //       <div className="" id="bounce">
  //         <video
  //           ref={videoRef}
  //           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
  //           src="/il.mp4"
  //           alt="Animation Video"
  //           width={224}
  //           height={168}
  //           autoPlay
  //           muted
  //           loop
  //         />
  //         {!isPlaying && (
  //           <button
  //             className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-2xl"
  //             onClick={TogglePlay}
  //           >
  //             Play
  //           </button>
  //         )}
  //       </div>
  //         <div className="relative">
  //         <video
  //           ref={videoRef}
  //           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
  //           src="/coding.mp4"
  //           alt="Animatifon Video"
  //           width={224}
  //           height={126}
  //           autoPlay
  //           muted
  //           loop
  //         />
  //         {!isPlaying && (
  //           <button
  //             className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-2xl"
  //             onClick={TogglePlay}
  //           >
  //             Play
  //           </button>
  //         )}
  //       </div> 
  //       {/* Another Image with hover effects */}
  //       <div className="relative">
  //         <video
  //           ref={videoRef}
  //           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
  //           src="/com.mp4"
  //           alt="Animatifon Video"
  //           width={224}
  //           height={168}
  //           autoPlay
  //           muted
  //           loop
  //         />
  //         {!isPlaying && (
  //           <button
  //             className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-2xl"
  //             onClick={TogglePlay}
  //           >
  //             Play
  //           </button>
  //         )}
  //       </div>

  //     </div>

  // )
}
export default TogglePlay;