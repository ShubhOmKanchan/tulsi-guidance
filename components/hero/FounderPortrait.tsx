"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/Vrinda/Founder_1.png",
  "/Vrinda/f1.png",
  "/Vrinda/f.png",
  "/Vrinda/Founder_2.png",
];

export default function FounderPortrait() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
  className="relative flex items-center justify-center pb-10 lg:pb-[72px]"
>

      {/* Ambient Glow */}

      <div
        className="
        absolute
        h-[320px]
        w-[320px]
        rounded-full
        bg-gradient-to-br
        from-emerald-100/45
        via-sky-100/20
        to-yellow-100/30
        blur-[70px]
        animate-pulse
        sm:h-[420px]
        sm:w-[420px]
        sm:blur-[90px]
        md:h-[520px]
        md:w-[520px]
        md:blur-[110px]
        lg:h-[680px]
        lg:w-[680px]
        lg:blur-[130px]
        "
      />

      {/* Decorative Gradient Ring */}

      <div
        className="
        relative
        h-[280px]
        w-[280px]
        rounded-full
        bg-gradient-to-br
        from-[#7DB89C]
        via-[#F4E8B2]
        to-[#86A9D6]
        p-[2px]
        shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        sm:h-[360px]
        sm:w-[360px]
        md:h-[450px]
        md:w-[450px]
        lg:h-[560px]
        lg:w-[560px]
        lg:p-[3px]
        lg:shadow-[0_30px_90px_rgba(0,0,0,0.08)]
        "
      >

        {/* Glass Ring */}

        <div
          className="
          flex
          h-full
          w-full
          items-center
          justify-center
          rounded-full
          bg-white/35
          backdrop-blur-xl
        "
        >

          {/* Portrait */}

          <div
            className="
            relative
            h-[250px]
            w-[250px]
            overflow-hidden
            rounded-full
            bg-[#FCFAF6]
            shadow-[0_16px_35px_rgba(0,0,0,0.10)]
            sm:h-[320px]
            sm:w-[320px]
            md:h-[400px]
            md:w-[400px]
            lg:h-[500px]
            lg:w-[500px]
            lg:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
            "
          >

            {images.map((image, index) => (
              <Image
                key={image}
                src={image}
                alt="Founder"
                fill
                priority={index === 0}
                className={`
                  object-cover
                  object-center
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

        </div>

      </div>

    </div>
  );
}