"use client";

import StoryCardMobile from "./StoryCardMobile";
import SymbolCarouselMobile from "./SymbolCarouselMobile";
import SymbolCarousel from "./SymbolCarousel";

const stories = [
  {
    title: "Horizons",
    images: [
      "/hero/backgrounds/h1.png",
      "/hero/backgrounds/h2.png",
      "/hero/backgrounds/h3.png",
      "/hero/backgrounds/h4.png",
      "/hero/backgrounds/h5.png",
      "/hero/backgrounds/h6.png",
      "/hero/backgrounds/h7.png",
      "/hero/backgrounds/h8.png",
      "/hero/backgrounds/h9.png",
      "/hero/backgrounds/h10.png",
      "/hero/backgrounds/h11.png",
      "/hero/backgrounds/h12.png",
      "/hero/backgrounds/h13.png",
      "/hero/backgrounds/h14.png",
      "/hero/backgrounds/h15.png",
      "/hero/backgrounds/h16.png",
      "/hero/backgrounds/h17.png",
      "/hero/backgrounds/h18.png",
      "/hero/backgrounds/h19.png",
      "/hero/backgrounds/h20.png",
      "/hero/backgrounds/h21.png",
      "/hero/backgrounds/h22.png",
      "/hero/backgrounds/h23.png",
      "/hero/backgrounds/h24.png",
      "/hero/backgrounds/h25.png",
      "/hero/backgrounds/h26.png",
      "/hero/backgrounds/h27.png",
      "/hero/backgrounds/h28.png",
    ],
    interval: 6000,
  },
  {
    title: "Gratitude",
    images: [
      "/hero/backgrounds/g1.png",
      "/hero/backgrounds/g2.png",
      "/hero/backgrounds/g3.png",
      "/hero/backgrounds/g4.png",
      "/hero/backgrounds/g5.png",
      "/hero/backgrounds/g6.png",
      "/hero/backgrounds/g7.png",
      "/hero/backgrounds/g8.png",
      "/hero/backgrounds/g9.png",
      "/hero/backgrounds/g10.png",
    ],
    interval: 10000,
  },
  {
    title: "Evolution",
    images: [
      "/hero/backgrounds/e1.png",
      "/hero/backgrounds/e2.png",
      "/hero/backgrounds/e3.png",
      "/hero/backgrounds/e4.png",
      "/hero/backgrounds/e5.png",
      "/hero/backgrounds/e6.png",
      "/hero/backgrounds/e7.png",
      "/hero/backgrounds/e8.png",
      "/hero/backgrounds/e9.png",
      "/hero/backgrounds/e10.png",
    ],
    interval: 6000,
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

      <div className="mt-12">
        <div className="mt-12 -translate-y-52 flex flex-col gap-8">
          {stories.map((story) => (
            <StoryCardMobile
              key={story.title}
              title={story.title}
              images={story.images}
              interval={story.interval}
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
          The Essence of Tulsi Guidance
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
          Every symbol tells a story. Together, they reflect the philosophy,
          presence and purpose behind this work.
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