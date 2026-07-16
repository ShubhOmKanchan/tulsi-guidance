"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface StoryCardProps {
  title: string;
  images: string[];
}

export default function StoryCard({
  title,
  images,
}: StoryCardProps) {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 12000);

    return () => clearInterval(interval);
  }, [images]);
  return (
    <div
        className="
            block
            lg:hidden

            service-card
            relative

            mx-auto
            w-full
            max-w-[430px]

            rounded-[28px]

            overflow-hidden

            border
            border-[#D7B46A]/30

            bg-white/75
            backdrop-blur-xl

            shadow-xl
        "
        >
      {/* Reel */}

      <div
        className="
            relative
            h-[470px]
            overflow-hidden
        "
        >
        {images.map((image, index) => (
            <Image
            key={image}
            src={image}
            alt={title}
            fill
            priority={index === 0}
            className={`
                object-cover
                transition-opacity
                duration-[1800ms]
                ${
                current === index
                    ? "opacity-100"
                    : "opacity-0"
                }
            `}
            />
        ))}
        </div>

      {/* Footer */}

      <div
        className="
          py-6
          px-6
          text-center
        "
      >
        <h3
          className="
            font-serif
            text-[30px]
            leading-tight
            text-[#2F2A27]
          "
        >
          {title}
        </h3>
      </div>

      {/* Shine */}

      <div className="service-chip-shine" />
    </div>
  );
}