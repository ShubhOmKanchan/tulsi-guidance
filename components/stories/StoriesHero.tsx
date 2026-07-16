"use client";

import FloatingNavigation from "@/components/navigation/FloatingNavigation";
import GroundLayer from "@/components/hero/GroundLayer";
import Bamboo from "@/components/hero/BambooCluster";
import StoryCard from "./StoryCard";
import SymbolCarousel from "./SymbolCarousel";
import EarthenPots from "@/components/hero/EarthenPots";
import TulsiPlant from "@/components/hero/TulsiPlant";
import ButterflyField from "./bf1";
import StoriesHeroMobile from "./StoriesHeroMobile";

const stories = [
  {
    title: "Journey",
    images: [
      "/hero/backgrounds/j1.png",
      "/hero/backgrounds/j2.png",
    ],
  },
  {
    title: "Gratitude",
    images: [
      "/hero/backgrounds/4.png",
    ],
  },
  {
    title: "Tulsi Guidance",
    images: [
      "/hero/backgrounds/3.png",
      "/hero/backgrounds/4.png",
      "/hero/backgrounds/6.png",
      "/hero/backgrounds/7.png",
      "/hero/backgrounds/8.png",
      "/hero/backgrounds/9.png",
      "/hero/backgrounds/10.png",
      "/hero/backgrounds/5.png",
    ],
  },
];
export default function StoriesHero() {
  return (
    
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#F8F5EF]
      "
    >
      {/* Navbar */}
      <FloatingNavigation page="stories"/>
      <div className="h-14" />
      <div className="absolute inset-0 z-0 pointer-events-none">

      {/* Background */}
      <Bamboo />
      <GroundLayer />
      <EarthenPots />
      <TulsiPlant />
      <ButterflyField />

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
          bottom-[-260px]

          -translate-x-1/2

          h-[620px]
          w-[760px]

          rounded-full

          bg-[#D7B46A]/[0.19]

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
          bottom-[8%]

          h-[420px]
          w-[500px]

          rounded-full

          bg-[#4F8F5C]/[0.19]

          blur-[180px]

          animate-glow-five

          pointer-events-none
        "
      />

      {/* Soft Background Glow */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-40
        "
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(79,143,92,.12), transparent 35%), radial-gradient(circle at 80% 30%, rgba(76,140,191,.10), transparent 35%), radial-gradient(circle at 50% 80%, rgba(215,180,106,.10), transparent 40%)",
        }}
      />

      </div>
      <div className="relative z-20">


        {/* Three Story Cards */}
        <div className="flex justify-center gap-14">
        {stories.map((story) => (
            <StoryCard
            key={story.title}
            title={story.title}
            images={story.images}
            />
        ))}
        </div>

        {/* Space */}
        <div className="h-14" />

        {/* Desktop Heading */}
        <div className="hidden lg:block text-center">
        <h2
            className="
            font-[var(--font-heading)]
            text-5xl
            text-[#2E2E2E]
            "
        >
            Nature & Symbolism
        </h2>

        <p
            className="
            mt-5
            text-[17px]
            leading-8
            text-[#666]
            "
        >
            Discover the deeper meaning behind the natural symbols that reflect awareness, resilience and inner alignment.
        </p>

        </div>

        <div className="block lg:hidden">
            <StoriesHeroMobile />
        </div>
        <div className="hidden lg:block">
        <SymbolCarousel />
        </div>

      </div>
    </section>
  );
}