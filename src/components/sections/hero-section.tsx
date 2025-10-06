"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Component to inject custom animation keyframes and classes
const AnimationStyles = () => (
  <style>
    {`
      @keyframes float-slow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
      }
      .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }

      @keyframes wiggle {
        0%, 100% { transform: rotate(-5deg); }
        50% { transform: rotate(5deg); }
      }
      .animate-wiggle { animation: wiggle 3.5s ease-in-out infinite; }

      @keyframes draw-path {
        from { stroke-dashoffset: 1000; }
        to { stroke-dashoffset: 0; }
      }
      .animate-draw-path {
        stroke-dasharray: 1000;
        animation: draw-path 1.5s cubic-bezier(0.45, 0, 0.55, 1) 0.5s forwards;
      }

      @keyframes blink {
        50% { opacity: 0; }
      }
      .animate-blink { animation: blink 1s step-end infinite; }
      
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade {
        animation: fade-in 1.2s ease-out forwards;
        opacity: 0;
      }
    `}
  </style>
);

// Client component for the animated typing subheading
const TypingSubheading = () => {
  const [text, setText] = useState("");
  const fullText = "Converting Ideas Into Reality!";
  
  useEffect(() => {
    let isMounted = true;

    const type = () => {
      let currentText = "";
      let i = 0;
      const typingInterval = setInterval(() => {
        if (!isMounted) {
          clearInterval(typingInterval);
          return;
        }
        
        if (i < fullText.length) {
          currentText += fullText.charAt(i);
          setText(currentText);
          i++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            if (isMounted) {
              setText("");
              setTimeout(() => { if (isMounted) type(); }, 500);
            }
          }, 3000);
        }
      }, 100);

      // Return a cleanup function for the interval
      return () => clearInterval(typingInterval);
    };

    const initialDelay = setTimeout(type, 1000);

    return () => {
      isMounted = false;
      clearTimeout(initialDelay);
    };
  }, []);

  return (
    <h2 className="mt-12 text-center text-xl font-semibold text-gray-800 sm:mt-16 sm:text-2xl md:mt-20 md:text-3xl lg:text-4xl min-h-[48px] sm:min-h-[52px] md:min-h-[60px] lg:min-h-[72px]">
      <span>{text}</span>
      <span className="animate-blink relative top-[-0.1em] text-2xl md:text-3xl lg:text-4xl font-light">|</span>
    </h2>
  );
};

// The main hero section component
const HeroSection = () => {
  return (
    <>
      <AnimationStyles />
      <div className="relative flex min-h-[95vh] md:min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-12 md:px-8 md:py-16 lg:px-14">
        <div className="relative w-full max-w-6xl text-center">
          <h1 className="mx-auto max-w-5xl text-5xl font-black text-black sm:text-6xl lg:text-7xl xl:text-8xl leading-tight">
            <span className="block sm:inline">Google</span>{' '}
            <span className="block sm:inline">
              <span className="relative inline-block">
                Developer
                <svg
                  className="absolute top-1/2 left-1/2 h-[140%] w-[120%] -translate-x-1/2 -translate-y-1/2 -z-10"
                >
                  <path
                    d="M-5,5 C5,-10 130,5 160,5 C190,5 210,20 190,40 C170,60 50,70 10,50 C-30,30 -20,20 -5,5"
                    fill="none"
                    stroke="#FBBC04"
                    strokeWidth="6"
                    strokeLinecap="round"
                    className="animate-draw-path"
                  />
                </svg>
              </span>
            </span>{' '}
            <span className="block sm:inline">Groups</span>{' '}
            <span className="block sm:inline">On</span>{' '}
            <span className="block sm:inline">Campus</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">JDCOEM</span>{' '}
            <span className="block sm:inline">Nagpur</span>
          </h1>

          {/* Decorative Elements */}
          <div className="absolute top-[50%] -left-4 -rotate-12 sm:top-[60%] sm:-left-8 md:top-1/2 md:left-4 lg:left-8">
            <Image
              alt="GDG chevrons blue and red"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4a300a22-c0e5-44fb-8935-05822f2c6a09-gdgvitm-tech/assets/images/next-906313-lt.png?"
              width={94}
              height={94}
              className="h-auto w-24 text-6xl sm:w-20 md:w-32 lg:w-40 animate-float-slow"
              unoptimized
            />
          </div>

          <div className="absolute -top-16 -right-4 -rotate-8 sm:-top-8 sm:-right-6 md:top-0 md:right-4 lg:-top-16 lg:right-8 xl:-top-20 xl:-right-2">
            <Image
              alt="GDG chevrons green and yellow"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4a300a22-c0e5-44fb-8935-05822f2c6a09-gdgvitm-tech/assets/images/next-671317-gt.png?"
              width={94}
              height={94}
              className="h-auto w-24 text-6xl sm:w-20 md:w-32 lg:w-40 animate-float-slow"
              unoptimized
            />
          </div>
          
          <div className="absolute top-[1%] left-[5%] animate-float-slow text-yellow-400 text-4xl sm:text-4xl md:text-5xl font-mono opacity-100">
            {'{ }'}
          </div>
          <div className="absolute top-[25%] right-[5%] animate-wiggle text-purple-400 text-3xl sm:text-3xl md:text-4xl font-mono opacity-100">
            {'</>'}
          </div>
          <div className="absolute bottom-[2%] left-[10%] animate-fade text-purple-600 text-base sm:text-lg md:text-xl font-mono leading-tight hidden sm:block" style={{ animationDelay: '0.6s' }}>
            01001<br />11010
          </div>
          <div className="absolute bottom-[2%] right-[10%] animate-fade text-yellow-500 text-base sm:text-lg md:text-xl font-mono leading-tight hidden sm:block" style={{ animationDelay: '0.9s' }}>
            1010<br />0110
          </div>
          <div className="absolute top-[42%] left-[1%] animate-wiggle text-green-300 text-3xl sm:text-3xl md:text-4xl font-mono opacity-100">
            {'()'}
          </div>
          <div className="absolute top-[55%] right-[11%] animate-float-slow text-blue-400 text-4xl sm:text-3xl md:text-4xl font-mono opacity-100">
            @
          </div>
          
          <TypingSubheading />
        </div>
      </div>
    </>
  );
};
export default HeroSection;
