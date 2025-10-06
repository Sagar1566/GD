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
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <Image src="/animated-logo-stroke.svg" alt="Loading..." width={200} height={200} />
    </div>
  );
}
