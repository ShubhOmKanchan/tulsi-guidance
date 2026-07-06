"use client";

interface StoryCardProps {
  title: string;
}

export default function StoryCard({
  title,
}: StoryCardProps) {
  return (
    <div
      className="
        service-card
        hidden
        lg:block

        relative

        w-[420px]
        h-[570px]

        rounded-[34px]

        border
        border-[#D7B46A]/30

        bg-white/75
        backdrop-blur-xl

        overflow-hidden

        shadow-xl

        transition-all
        duration-500

        hover:-translate-y-2
      "
    >
      {/* Placeholder Reel */}

      <div
        className="
          h-[470px]

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
            text-[22px]
            tracking-[0.08em]
          "
        >
          Reel
        </span>
      </div>

      {/* Footer */}

      <div
        className="
          h-[100px]

          flex
          flex-col
          items-center
          justify-center
        "
      >
        <h3
          className="
            font-serif
            text-[34px]
            text-[#2F2A27]
          "
        >
          {title}
        </h3>
      </div>

      {/* Glass Shine */}

      <div className="service-chip-shine" />
    </div>
  );
}