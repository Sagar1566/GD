"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function LoadingAnimation() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="text-4xl font-bold mb-4 animate-in fade-in slide-in-from-top-10 duration-1000">
        <span className="text-blue-500">Google </span>
        <span className="text-red-600">Developer </span>
        <span className="text-yellow-500">Group </span>
        <span className="text-green-600">Jdcoem</span>
      </div>
      <Image src="/animated-logo-stroke.svg" alt="Loading..." width={200} height={200} />
    </div>
  );
}
