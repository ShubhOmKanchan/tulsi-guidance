"use client";

import Image from "next/image";
import { ArrowRight, Clock3, Heart, Sparkles, Compass } from "lucide-react";

interface OfferingCardProps {
  offering: {
    eyebrow: string;
    title: string;
    tagline: string;
    duration: string;
    description: string;
    highlights: string[];
    cta: string;
    icon: string;
    detailsImage: string;
  };
  onKnowMore: (image: string) => void;
}

export default function OfferingCardMobile({
  offering,
  onKnowMore,
}: OfferingCardProps) {

  const icons = {
    heart: Heart,
    sparkles: Sparkles,
    compass: Compass,
  };

  const Icon =
    icons[offering.icon as keyof typeof icons] ?? Heart;

  return (
    <div
      className="
        relative
        mx-auto
        w-full
        max-w-[360px]
        h-[320px]
      "
    >

      {/* Feather */}

      <Image
        src="/hero/elements/Pfbg.png"
        alt=""
        fill
        draggable={false}
        className="
          object-contain
          object-center
          pointer-events-none
          select-none
        "
      />

      {/* Content */}

      <div
        className="
          absolute
          inset-0
          top-[97px]
          flex
          flex-col
          items-center
          text-center
          text-12px

          px-20
          pt-20
          pb-8

          z-10
        "
      >

        {/* Title */}

        <h3
          className="
            mt-6
            font-[var(--font-heading)]
            text-[20px]
            w-40
            text-left
            leading-tight
            text-[#2F2F2F]
          "
          style={{ paddingLeft: "21px"}}
        >
          {offering.title}
        </h3>

        {/* Tagline */}

        <p
          className="
            ml-40
            text-[12px]
            w-48
            leading-4
            text-[#666]
            text-left
          "
          style={{ paddingLeft: "37px",paddingBottom: "2px" }}
        >
          {offering.tagline}
        </p>

        {/* Duration */}

        <div
          className="
            mt-6
            flex
            items-center
            gap-2
            text-[#5A9C74]
            text-[13px]
          "
          style={{ paddingLeft: "27px",paddingBottom: "4px" }}
        >
          <Clock3 size={12} />

          <span className="font-medium">
            {offering.duration}
          </span>
        </div>

        {/* Highlights */}

        <div
          className="
            mt-6
            w-50

            flex
            flex-wrap
            text-left

            gap-2
          "
          style={{ paddingLeft: "99px",paddingBottom: "4px" }}
        >
          {offering.highlights.map((item) => (
            <span
              key={item}
              className="
                rounded-full

                bg-[#FFE8B7]

                border
                border-[#D7B46A]/35

                px-4
                py-2

                text-[9px]
                text-[#C7881A]
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Spacer */}

        {/* CTA */}

        <button
          onClick={() => onKnowMore(offering.detailsImage)}
          className="
            group

            flex
            items-center
            gap-2

            text-[#2E7CC0]
            text-[10px]
            font-semibold

            transition-all
            duration-300
            hover:gap-4
          "
          style={{ paddingLeft: "159px" }}
        >
          {offering.cta}

          <ArrowRight
            size={10}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </button>

      </div>

    </div>
  );
}