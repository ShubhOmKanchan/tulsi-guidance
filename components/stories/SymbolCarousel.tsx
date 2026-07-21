"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { symbols } from "./SymbolData";

export default function SymbolCarousel() {

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

    <section className="relative max-w-[1600px] mx-auto">

      <div className="flex items-left justify-between" style={{paddingRight: "10px"}}>

        {/* Main Card */}

        <div
            className="
                relative

                flex
                items-center

                w-[1070px]
                h-[330px]


                rounded-[38px]

                border
                border-[#D7B46A]/25

                backdrop-blur-xl

                shadow-2xl

                overflow-hidden
            "
            style={{
                background:
                "radial-gradient(circle at center, rgba(255,255,255,.96) 0%, rgba(246,250,247,.94) 35%, rgba(241,247,252,.95) 62%, rgba(251,241,220,.95) 100%)"
            }}
            >
                {/* Left Pillar */}

                <Image
                src="/hero/elements/pillar-left.png"
                alt=""
                width={120}
                height={430}
                className="
                    absolute
                    bottom-0
                    left-6
                    opacity-35
                    pointer-events-none
                "
                />

                {/* Right Pillar */}

                <Image
                src="/hero/elements/pillar-right.png"
                alt=""
                width={120}
                height={430}
                className="
                    absolute
                    bottom-0
                    right-6
                    opacity-35
                    pointer-events-none
                "
                />

          {/* Image */}

          <div
                key={symbol.image}
                className="
                    w-[400px]
                    flex
                    justify-center
                    items-center
                    symbolFade
                "
            >

            <Image
              src={symbol.image}
              alt={symbol.title}
              width={500}
              height={600}
              className="object-contain animate-lotus-float opacity-90"
              style={{paddingLeft: "180px"}}
            />

          </div>

          {/* Text */}

          <div
                key={symbol.id}
                className="
                    symbolFade

                    w-[450px]
              

                    flex
                    flex-col
                    justify-center
                "
            >

            <h2
              className="
                font-serif
                text-5xl
                bg-gradient-to-r
                from-[#5BAF7B]
                to-[#4C93D1]
                bg-clip-text
                text-transparent
              "
              style={{paddingLeft: "90px"}}
            >
              {symbol.title}
            </h2>

            <p
              className="
                mt-14

                text-[16px]
                leading-10
                bg-gradient-to-r
                from-[#5BAF7B]
                to-[#4C93D1]
                bg-clip-text
                text-transparent
              "
              style={{paddingLeft: "90px",paddingTop: "9px"}}
            >
              {symbol.meaning}
            </p>

            <div className="mt-14 flex gap-8" style={{paddingLeft: "90px", paddingTop: "9px"}}>

              <button
                onClick={previous}
                className="
                  h-8
                  w-8

                  rounded-full

                  bg-[#4F8F5C]/[0.4]

                  text-white
                "
              >
                <ChevronLeft />
              </button>

              <button
                onClick={next}
                className="
                  h-8
                  w-8

                  rounded-full

                  bg-[#4C8CBF]/[0.4]

                  text-white
                "
                style={{paddingLeft: "8px"}}
              >
                <ChevronRight />
              </button>

            </div>

          </div>

        </div>
      </div>

    </section>

  );

}