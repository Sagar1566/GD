"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Animation sequence: logo appears, animates, then fades out
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    const timer2 = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes logo-bounce-in {
            0% {
              transform: scale(0) rotate(-180deg);
              opacity: 0;
            }
            50% {
              transform: scale(1.1) rotate(10deg);
            }
            100% {
              transform: scale(1) rotate(0deg);
              opacity: 1;
            }
          }

          @keyframes logo-pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }

          @keyframes segment-rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes fade-out-overlay {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }

          @keyframes text-fade-in {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }

          .loading-overlay {
            animation: ${fadeOut ? "fade-out-overlay 0.5s ease-out forwards" : "none"};
          }

          .logo-container {
            animation: logo-bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          }

          .logo-image {
            animation: logo-pulse 1.5s ease-in-out infinite;
            animation-delay: 0.8s;
          }

          .rotating-circle {
            animation: segment-rotate 2s linear infinite;
          }

          .gdg-text {
            animation: text-fade-in 0.5s ease-out 0.8s forwards;
          }
        `
      }} />

      <div className="loading-overlay fixed top-0 left-0 w-screen h-screen bg-[#FEF9EF] flex items-center justify-center z-[9999]">
        <div className="logo-container relative">
          <div className="rotating-circle absolute top-1/2 left-1/2 w-[280px] h-[280px] -ml-[140px] -mt-[140px] border-[3px] border-transparent border-t-[#EA4335] border-r-[#4285F4] border-b-[#34A853] border-l-[#FBBC04] rounded-full" />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/WhatsApp-Image-2025-10-06-at-6.14.19-PM-1759754696962.jpeg"
            alt="GDG VIT Mumbai Logo"
            width={200}
            height={200}
            className="logo-image relative z-10"
            priority
            unoptimized
          />
          <div className="gdg-text absolute -bottom-[60px] left-1/2 -translate-x-1/2 text-2xl font-bold text-black opacity-0">
            GDG VIT Mumbai
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingAnimation;