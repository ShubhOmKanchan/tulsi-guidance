"use client";

import Image from "next/image";
import JourneyCurve from "./ JourneyCurve";
import JourneyOrb from "./JourneyOrb";
import JourneyStage from "./JourneyStage";
import JourneyStageMobile from "./JourneyStageMobile";
import JourneyTimelineMobile from "./JourneyTimelineMobile";
import { journey } from "./journeyData";
import FloatingNavigation from "@/components/navigation/FloatingNavigation";
import EarthenPots from "@/components/hero/EarthenPots";
import Bamboo from "@/components/hero/BambooCluster";
import TulsiPlant from "@/components/hero/TulsiPlant";
import GroundLayer from "@/components/hero/GroundLayer";
import Bf from "@/components/Journey/b";
import JB from "../hero/Jb";


export default function Journey() {
  return (
    
    <section
        className="
        relative
        overflow-hidden
        bg-[#F8F5EF]
        backdrop-blur-xl
        min-h-screen
        pt-20
        pb-20

        lg:min-h-[1080px]
        lg:pt-24
        lg:pb-32
        pt-24
        pb-32
        "
    >
        
        <FloatingNavigation page="philosophy" />

      {/* Background */}

      <JB />

      <EarthenPots />
    <Bamboo />
    <TulsiPlant />
    <Bf />
    <GroundLayer />

    <div
        className="
          absolute
          -left-44
          -top-28

          h-[620px]
          w-[520px]

          rounded-full

          bg-[#4F8F5C]/[0.19]

          blur-[190px]

          animate-glow-one

          pointer-events-none
        "
      />

      {/* ===================================================== */}
      {/* Peacock Blue */}
      {/* ===================================================== */}

      <div
        className="
          absolute

          right-[-180px]
          top-[100px]

          h-[520px]
          w-[620px]

          rounded-full

          bg-[#4C8CBF]/[0.19]

          blur-[180px]

          animate-glow-two

          pointer-events-none
        "
      />

      {/* ===================================================== */}
      {/* Sacred Gold */}
      {/* ===================================================== */}

      <div
        className="
          absolute

          left-1/2
          bottom-[-560px]

          -translate-x-1/2

          h-[620px]
          w-[760px]

          rounded-full

          bg-[#D7B46A]/[0.8]

          blur-[220px]

          animate-glow-three

          pointer-events-none
        "
      />

      {/* ===================================================== */}
      {/* Ambient White */}
      {/* ===================================================== */}

      <div
        className="
          absolute

          left-[22%]
          top-[46%]

          h-[700px]
          w-[700px]

          rounded-full

          bg-white/50

          blur-[240px]

          animate-glow-four

          pointer-events-none
        "
      />

      {/* ===================================================== */}
      {/* Secondary Green */}
      {/* ===================================================== */}

      <div
        className="
          absolute

          right-[18%]
          bottom-[48%]

          h-[420px]
          w-[500px]

          rounded-full

          bg-[#4F8F5C]/[0.19]

          blur-[100px]

          animate-glow-five

          pointer-events-none
        "
      />

    

    

    <div
    className="
        absolute
        -left-32
        -top-20

        w-[520px]
        h-[520px]

        rounded-full
        pointer-events-none

        blur-[10px]
        opacity-10
    "
    style={{
        background:
        "radial-gradient(circle, rgba(76,140,191,.20) 0%, rgba(79,143,92,.16) 38%, rgba(215,180,106,.12) 65%, transparent 100%)",
    }}
    />

    <div
        className="
            absolute
            -right-24
            top-[42%]

            w-[620px]
            h-[620px]

            rounded-full
            pointer-events-none

            blur-[170px]
            opacity-35
        "
        style={{
            background:
            "radial-gradient(circle, rgba(79,143,92,.18) 0%, rgba(76,140,191,.18) 40%, rgba(215,180,106,.14) 72%, transparent 100%)",
        }}
        />

        <div
        className="
        absolute
        inset-0
        bg-[#F8F5EF]/72
        "
        />

            <div
            className="
                absolute
                inset-0
            "
            />


      {/* Content */}
      <div className="h-[40px]" />
      <div
        className="
            relative
            h-auto
            min-h-[900px]

            lg:h-[900px]
            overflow-visible
            flex
            flex-col
            items-center
            pt-16
        "
        >

        {/* Heading */}

        <div
            className="
                text-center
                max-w-8xl
                mx-auto
                flex
                flex-col
                items-center
            "
        >

            <h2
                className="
                mt-6
                font-serif
                text-5xl
                leading-tight
                md:text-6xl
                lg:text-7xl
                leading-[1.05]
                bg-gradient-to-r
                from-[#5BAF7B]
                to-[#4C93D1]
                bg-clip-text
                text-transparent
                "
            >
                The Inner Journey
            </h2>

            <p
                className="
                mt-8
                max-w-8xl
                mx-auto
                text-lg
                leading-9
                px-6
                bg-gradient-to-r
                from-[#5BAF7B]
                to-[#4C93D1]
                bg-clip-text
                text-transparent

                lg:px-0
                lg:text-[18px]
                lg:leading-10
                text-stone-600
                "
            >
                Every meaningful change begins with awareness. Through reflection, clarity, alignment and integration, a deeper connection with yourself naturally unfolds.
            </p>

        </div>

        <div className="h-8" />

        {/* Journey Area */}

        <div
            className="
                relative
                w-full

                mt-12
                px-6

                lg:max-w-[1700px]
                lg:mx-auto
                lg:-mt-4
                lg:-translate-x-8
            "
            >

            {/* Mobile */}

            <div
                className="
                    relative
                    flex
                    flex-col
                    items-center
                    gap-28
                    lg:hidden
                "
                >
                <JourneyTimelineMobile />


            {journey.map((step) => (
                <JourneyStageMobile
                key={step.id}
                title={step.title}
                color={step.color}
                />
            ))}

            </div>

            {/* Desktop */}

            <div className="hidden lg:block">

            <JourneyCurve />

            <div
                className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_30%_30%,rgba(255,248,230,.35),transparent_55%)]
                pointer-events-none
                "
            />

            <JourneyOrb />

            {journey.map((step) => (
                <JourneyStage
                key={step.id}
                title={step.title}
                color={step.color}
                x={step.x}
                y={step.y}
                />
            ))}

            </div>

        </div>

      </div>

    </section>
  );
}