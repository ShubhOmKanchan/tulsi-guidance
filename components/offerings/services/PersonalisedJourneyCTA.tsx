"use client";

import { MessagesSquare, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PersonalisedJourneyCTA() {
  return (
    <Link
      href="https://wa.link/fxk5wj"
      className="
        group
        relative

        mx-auto
        w-full

        overflow-hidden

        rounded-[32px]
        lg:rounded-full
        border
        max-w-[360px]
        lg:max-w-6xl

        px-5
        lg:px-12

        min-h-[70px]
        lg:min-h-[82px]

        py-4
        lg:py-5

        lg:group-hover:min-h-[150px]
        lg:group-hover:py-20

        text-left

        backdrop-blur-xl

        transition-all
        duration-500
        ease-in-out

        border-[#D7B46A]/40

        hover:py-8
        hover:shadow-[0_24px_70px_rgba(76,140,191,.18)]
        hover:brightness-[1.02]
      "
      style={{
        background:
          "linear-gradient(135deg, rgba(79,143,92,.08), rgba(76,140,191,.08), rgba(215,180,106,.10))",


        boxShadow:
          "0 18px 55px rgba(76,140,191,.12)",
      }}
    >
      {/* Glass Sweep */}

      <span className="service-chip-shine absolute inset-y-0 left-[-35%] w-[30%]" />

      {/* Ambient Glow */}

      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(circle at 15% 30%, rgba(79,143,92,.12), transparent 35%), radial-gradient(circle at 80% 40%, rgba(76,140,191,.12), transparent 40%), radial-gradient(circle at 60% 100%, rgba(215,180,106,.12), transparent 45%)",
        }}
      />

      {/* Content */}

        <div
        className="
            relative
            z-10


            grid
            grid-cols-[1fr_42px]
            lg:grid-cols-[56px_1fr_72px]

            px-0
            lg:px-8
            items-center

            h-full

            px-8
        "
        >
        {/* Left Icon */}

        <div className="hidden lg:flex justify-center">
            <Sparkles
            size={22}
            strokeWidth={2}
            className="text-[#4F8F5C]"
            />
        </div>

        {/* Text */}

        <div>
            {/* Heading */}

            <p
            className="
                uppercase
                tracking-[0.12em]
                lg:tracking-[0.35em]

                text-[9px]
                leading-4


                lg:text-sm
                font-semibold

                bg-gradient-to-r
                from-[#4F8F5C]
                via-[#4C8CBF]
                to-[#D7B46A]

                bg-clip-text
                text-transparent
            "
            style={{ paddingLeft: "10px",paddingTop: "10px"}}
            >
            PERSONALISED JOURNEY | NOT SURE WHICH OFFERING IS RIGHT FOR YOU?
            </p>

            {/* Expandable text */}

            <div
            className="
                overflow-hidden
                max-h-full
                opacity-100
                mt-3

                lg:max-h-0
                lg:opacity-0
                lg:mt-0

                lg:group-hover:max-h-28
                lg:group-hover:opacity-100
                

                transition-all
                duration-500
            "
            >
            <p
                className="

                max-w-4xl

                pt-0
                lg:pt-5
                text-[12px]

                lg:text-[13px]
                leading-4

                lg:text-lg
                lg:leading-8

                text-[#2E2E2E]
                "
               style={{ paddingLeft: "10px",paddingBottom: "10px" }}
            >
                Every engagement begins with an initial conversation to understand whether this way of working feels aligned for you.
            </p>
            </div>
        </div>

        {/* Right Icon */}

        <div className="justify-self-end pr-0 lg:pr-[18px] lg:-translate-x-2-translate-x-2">
            <div
            className="
                flex
                h-10
                w-10

                lg:h-16
                lg:w-16

                items-center
                justify-center

                rounded-full

                transition-all
                duration-500

                group-hover:-translate-x-2
                group-hover:scale-105
            "
            style={{
                background:
                "linear-gradient(135deg,#4F8F5C,#4C8CBF,#D7B46A)",
                boxShadow:
                "0 12px 35px rgba(76,140,191,.25)",
            }}
            >
            <MessagesSquare
                size={26}
                strokeWidth={2}
                color="white"
            />
            </div>
        </div>
        </div>

    </Link>
  );
}