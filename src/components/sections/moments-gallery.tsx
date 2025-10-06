"use client";

import { useState } from "react";
import Image from "next/image";

// Asset provided for the section. This will be reused to demonstrate the layout.
const imageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4a300a22-c0e5-44fb-8935-05822f2c6a09-gdgvitm-tech/assets/images/next-259706-solutionchallenge.png?";

const CATEGORIES = [
  "Solutions Challenge",
  "Flutter Roadshow",
  "Shape The Web",
  "Beyond The Browser",
];

// Data to replicate the scattered desktop gallery layout with aspect ratios.
const GALLERY_ITEMS = [
  { src: imageUrl, alt: "A collage of event moments", className: "absolute left-[5%] top-[10%] w-[30%] md:w-[28%] lg:w-[22%] aspect-[3/4] -rotate-3" },
  { src: imageUrl, alt: "A team presenting their project", className: "absolute left-[30%] top-[0%] w-[20%] md:w-[15%] lg:w-[12%] aspect-square rotate-3" },
  { src: imageUrl, alt: "Students receiving certificates", className: "absolute left-[58%] top-[5%] w-[25%] md:w-[20%] lg:w-[15%] aspect-[3/4] rotate-6" },
  { src: imageUrl, alt: "A group of event participants", className: "absolute left-[78%] top-[25%] w-[20%] md:w-[18%] lg:w-[14%] aspect-[3/4] -rotate-3" },
  { src: imageUrl, alt: "Main event showcase photo", className: "absolute left-[35%] top-[30%] w-[50%] md:w-[45%] lg:w-[40%] aspect-video rotate-2 z-10" },
  { src: imageUrl, alt: "Team collaboration during a workshop", className: "absolute left-[15%] bottom-[5%] w-[30%] md:w-[25%] lg:w-[20%] aspect-video rotate-2" },
  { src: imageUrl, alt: "A snapshot from a tech talk", className: "absolute left-[50%] bottom-[10%] w-[25%] md:w-[22%] lg:w-[18%] aspect-video -rotate-6" },
  { src: imageUrl, alt: "Moments from a coding competition", className: "absolute right-[5%] bottom-[5%] w-[22%] md:w-[18%] lg:w-[15%] aspect-[4/3] rotate-3" },
];

export default function MomentsGallery() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  return (
    <section className="py-20 md:py-24 bg-black overflow-hidden relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#fbbf24] mb-12">
          Moments ✨
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-2 md:space-x-4 overflow-x-auto pb-4 -mx-4 px-4">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-6 py-3 border-2 rounded-full text-white text-sm font-semibold transition-all duration-300
                  ${activeCategory === category
                    ? "bg-white/10 border-white"
                    : "bg-transparent border-white hover:bg-white/10"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Gallery (2-column grid) */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
            {GALLERY_ITEMS.slice(0, 8).map((item, index) => (
              <div
                key={index}
                className={`p-2 bg-white rounded-lg shadow-lg transform cursor-pointer transition-transform hover:scale-105
                  ${index % 3 === 0 ? '-rotate-3' : 'rotate-2'}
                `}
              >
                <div className="relative w-full pb-[100%] rounded-sm overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
        </div>

        {/* Desktop Gallery (Absolute positioning collage) */}
        <div className="hidden md:block relative w-full h-[500px] md:h-[700px] lg:h-[900px]">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`${item.className} transform transition-transform duration-300 hover:scale-105 cursor-pointer group`}
            >
              <div className="p-3 bg-white shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-lg w-full h-full">
                <div className="relative w-full h-full rounded-md overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
           ))}
        </div>
      </div>
    </section>
  );
}