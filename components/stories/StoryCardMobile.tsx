"use client";

interface StoryCardMobileProps {
  title: string;
}

export default function StoryCardMobile({
  title,
}: StoryCardMobileProps) {
  return (
    <div
        className="
            block
            lg:hidden

            service-card
            relative

            mx-auto
            w-full
            max-w-[360px]

            rounded-[28px]

            overflow-hidden

            border
            border-[#D7B46A]/30

            bg-white/75
            backdrop-blur-xl

            shadow-xl
        "
        >
      {/* Reel */}

      <div
        className="
          h-[430px]

          bg-gradient-to-br
          from-[#F7F3EC]
          via-[#EEF7F3]
          to-[#EAF3FA]

          flex
          items-center
          justify-center
        "
      >
        <span
          className="
            text-[#9A9A9A]
            text-xl
            tracking-[0.08em]
          "
        >
          Reel
        </span>
      </div>

      {/* Footer */}

      <div
        className="
          py-6
          px-6
          text-center
        "
      >
        <h3
          className="
            font-serif
            text-[30px]
            leading-tight
            text-[#2F2A27]
          "
        >
          {title}
        </h3>
      </div>

      {/* Shine */}

      <div className="service-chip-shine" />
    </div>
  );
}