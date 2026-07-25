"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface StoryCardProps {
  title: string;
  images: string[];
  interval?: number;
}

export default function StoryCard({
  title,
  images,
  interval = 10000,
}: StoryCardProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div
      className="
        service-card
        hidden
        lg:block

        relative

        w-[420px]
        h-[570px]

        rounded-[34px]

        border
        border-[#D7B46A]/30

        bg-white/75
        backdrop-blur-xl

        overflow-hidden

        shadow-xl

        transition-all
        duration-500

        hover:-translate-y-2
      "
    >
      <div
        className="
          relative
          h-[520px]
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
              ${current === index ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>

      {/* Footer */}

      <div
        className="
          h-[40px]

          flex
          flex-col
          items-center
          justify-center
        "
      >
        <h3
          className="
            font-serif
            text-[34px]
            bg-gradient-to-r
            from-[#5BAF7B]
            to-[#4C93D1]
            bg-clip-text
            text-transparent
          "
        >
          {title}
        </h3>
      </div>

      {/* Glass Shine */}

      <div className="service-chip-shine" />
    </div>
  );
}