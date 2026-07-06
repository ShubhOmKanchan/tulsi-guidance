"use client";

import {
  ArrowRight,
  Sparkles,
  Heart,
  Compass,
  Briefcase,
  Sun,
  Flower2,
  Stars,
} from "lucide-react";

interface ServiceChipProps {
  title: string;
  category: string;
  theme: {
    border: string;
    glow: string;
    icon: string;
    bg: string;
  };
}
const iconMap = {
  Guidance: Compass,
  Healing: Heart,
  Relationships: Heart,
  Life: Briefcase,
  Energy: Sparkles,
  Growth: Flower2,
  Custom: Stars,
};

export default function ServiceChip({
  title,
  category,
  theme,
}: ServiceChipProps) {

   const Icon =
    iconMap[category as keyof typeof iconMap] ?? Sun;
  return (
    <button
      className="
        relative
        group
        service-card
        w-full
        h-[58px]
        lg:h-[56px]
        overflow-hidden
        rounded-[30px]
        border
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:scale-[1.015]
      "
      style={{
        borderColor: theme.border,
        background: theme.bg,
        boxShadow: `0 10px 35px ${theme.glow}`,
      }}
    >
      {/* Glass Sweep */}

      <span
        className="absolute inset-y-0 left-[-40%] w-[35%] service-chip-shine"
      />

      {/* Feather Watermark */}

      <div
        className="
          absolute
          right-0
          top-0
          bottom-0
          w-40
          opacity-[0.045]
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle at right, white, transparent 70%)",
        }}
      />

      {/* Content */}

      <div
        className="
            relative
            z-10
            h-full

            grid
            grid-cols-[40px_1fr_34px]
            lg:grid-cols-[52px_1fr_44px]
            items-center

            gap-3
            lg:gap-5

            px-3
            lg:px-5
        "
        >
        {/* Left */}

        <div className="contents">

          {/* Circle */}

          <div
            className="
                h-8
                w-8
                lg:h-11
                lg:w-11
                rounded-full
                border

                flex
                items-center
                justify-center

                backdrop-blur-xl

                translate-x-1
                lg:translate-x-3
            "
            style={{
                background: theme.bg,
                borderColor: theme.border,
            }}
            >
            <Icon
                size={24}
                strokeWidth={2}
                color={theme.border}
            />
            </div>

          {/* Text */}

          <div className="text-left">

                <p
                    className="
                        uppercase
                        text-[10px]
                        lg:text-[13px]
                        tracking-[0.12em]
                        lg:tracking-[0.18em]
                        font-semibold
                    "
                    style={{
                        color: theme.border,
                    }}
                >
                    {category}
                </p>

                <h3
                    className="
                        mt-1
                        text-[18px]
                        leading-none
                        font-[var(--font-heading)]
                        text-[#2E2E2E]
                    "
                >
                    {title}
                </h3>

            </div>

        </div>

        {/* Arrow */}

        <div
            className="
                h-7
                w-7
                lg:h-9
                lg:w-9

                rounded-full

                flex
                items-center
                justify-center

                transition-all
                duration-300

                group-hover:translate-x-1
            "
            style={{
                background: theme.icon,
            }}
        >
            <ArrowRight
                size={18}
                color="white"
            />
        </div>
      </div>
    </button>
  );
}