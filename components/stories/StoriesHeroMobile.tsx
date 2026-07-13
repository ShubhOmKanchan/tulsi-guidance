"use client";

import StoryCardMobile from "./StoryCardMobile";
import SymbolCarouselMobile from "./SymbolCarouselMobile";
import SymbolCarousel from "./SymbolCarousel";

const stories = [
  {
    title: "Journey",
    images: [
      "/hero/backgrounds/4.png",
      "/hero/backgrounds/2.png",
    ],
  },
  {
    title: "Gratitude",
    images: [
      "/hero/backgrounds/5.png",
    ],
  },
  {
    title: "Tulsi Guidance",
    images: [
      "/hero/backgrounds/4.png",
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
            text-[#2E2E2E]
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
      <h2
        className="
            text-center
            font-[var(--font-heading)]
            text-5xl
            text-[#2E2E2E]
            -translate-y-45
        "
        >
        Nature & Symbolism
        </h2>

        <p
        className="
            mt-5
            text-center
            text-[17px]
            leading-8
            text-[#666]
            -translate-y-45
        "
        >
        Discover the deeper meaning behind the natural symbols that reflect awareness, resilience and inner alignment.
        </p>

        <div className="hidden lg:block">
          <SymbolCarousel />
        </div>

        <div className="block lg:hidden">
          <SymbolCarouselMobile />
        </div>
    </section>
  );
}