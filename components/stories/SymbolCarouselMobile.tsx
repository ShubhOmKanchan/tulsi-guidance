"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { symbols } from "./SymbolData";

export default function SymbolCarouselMobile() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % symbols.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  function previous() {
    setCurrent((prev) => (prev - 1 + symbols.length) % symbols.length);
  }

  function next() {
    setCurrent((prev) => (prev + 1) % symbols.length);
  }

  const symbol = symbols[current];

  return (
  <section
    className="
      w-full
      px-3
      -translate-y-45
    "
    style={{marginLeft: "-40px",marginRight: "-40px"}}
  >

    <div
      className="
        w-[275px]
        mx-auto
        overflow-hidden
        rounded-[30px]
        border
        border-[#D7B46A]/25
        bg-white/75
        backdrop-blur-xl
        shadow-xl
      "
      style={{
        background:
          "radial-gradient(circle at center, rgba(255,255,255,.96) 0%, rgba(246,250,247,.94) 40%, rgba(241,247,252,.95) 100%)",
      }}
    >

        {/* Title */}

        <div className="pt-8 text-center">

          <h2
            className="
              font-serif
              text-[34px]
              bg-gradient-to-r
              from-[#5BAF7B]
              to-[#4C93D1]
              bg-clip-text
              text-transparent
            "
            style={{paddingBottom:"10px"}}
          >
            {symbol.title}
          </h2>

          <div
            className="
              mx-auto
              mt-5
              h-px
              w-20
              bg-[#D7B46A]/40
            "
          />

        </div>

        {/* Symbol */}

        <div
          key={symbol.image}
          className="
            symbolFade
            flex
            justify-center
            py-8
          "
          style={{paddingBottom:"10px"}}
        >
          <Image
            src={symbol.image}
            alt={symbol.title}
            width={146}
            height={146}
            className="
              object-contain
              animate-lotus-float
            "
          />
        </div>

        {/* Divider */}

        <div
          className="
            mx-auto
            h-px
            w-20
            bg-[#D7B46A]/40
          "
        />

        {/* Meaning */}

        <div
          key={symbol.id}
          className="
            symbolFade
            px-7
            pt-7
          "
        >
          <p
            className="
              text-center
              text-[15px]
              leading-8
              bg-gradient-to-r
              from-[#5BAF7B]
              to-[#4C93D1]
              bg-clip-text
              text-transparent
            "
            style={{paddingTop:"10px"}}
          >
            {symbol.meaning}
          </p>
        </div>

        {/* Navigation */}

        <div
          className="
            flex
            justify-center
            gap-8
            py-8
          "
          style={{paddingTop:"10px",paddingBottom: "10px"}}
        >
          <button
            onClick={previous}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-[#4F8F5C]/40
              text-white
            "
            style={{paddingTop:"10px",paddingBottom: "10px"}}
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            className="
              flex
               h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-[#4C8CBF]/40
              text-white
            "
            style={{paddingTop:"10px",paddingBottom: "10px"}}
          >
            <ChevronRight size={22} />
          </button>
        </div>

      </div>

    </section>
  );
}