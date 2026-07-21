"use client";

import StoryCardMobile from "./StoryCardMobile";
import SymbolCarouselMobile from "./SymbolCarouselMobile";
import SymbolCarousel from "./SymbolCarousel";

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
      "/hero/backgrounds/s1.png",
      "/hero/backgrounds/s2.png",
      "/hero/backgrounds/s3.png",
      "/hero/backgrounds/s4.png",
      "/hero/backgrounds/s5.png",
      "/hero/backgrounds/s6.png",
      "/hero/backgrounds/s7.png",
      "/hero/backgrounds/s8.png",
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

export default function StoriesHeroMobile() {
  return (
    <section
      className="
        relative
        min-h-screen
      "
    >
        <h2
          className="
            mt-4
            text-center
            font-[var(--font-heading)]
            text-[52px]
            leading-none
            bg-gradient-to-r
            from-[#5BAF7B]
            to-[#4C93D1]
            bg-clip-text
            text-transparent
             -translate-y-61
          "
        >
          Stories
        </h2>

        <div className="mt-12 ">
        <div className="mt-12 -translate-y-52 flex flex-col gap-8">
        {stories.map((story) => (
            <StoryCardMobile
              key={story.title}
              title={story.title}
              images={story.images}
            />
        ))}
        </div>
        </div>
        <div className="mt-12 -translate-y-47">
      <h2
        className="
            text-center
            font-[var(--font-heading)]
            text-5xl
            bg-gradient-to-r
            from-[#5BAF7B]
            to-[#4C93D1]
            bg-clip-text
            text-transparent
        "
        >
        Nature & Symbolism
        </h2>
        </div>

        <div className="mt-12 -translate-y-43">

        <p
          className="
            mt-5
            text-center
            text-[17px]
            leading-8
            bg-gradient-to-r
            from-[#5BAF7B]
            to-[#4C93D1]
            bg-clip-text
            text-transparent
          "
        >
        Discover the deeper meaning behind the natural symbols that reflect awareness, resilience and inner alignment.
        </p>
        </div>

        <div className="hidden lg:block">
          <SymbolCarousel />
        </div>

        <div className="block lg:hidden">
          <SymbolCarouselMobile />
        </div>
    </section>
  );
}