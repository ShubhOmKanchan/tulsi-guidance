import Image from "next/image";

import {
  ArrowRight,
  Clock3,
  Heart,
  Sparkles,
  Compass,
} from "lucide-react";

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

export default function OfferingCard({
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


        lg:w-[430px]
        lg:h-[445px]

        transition-all
        duration-500

        hover:-translate-y-2
      "
    >

      {/* ===================================== */}
      {/* Feather Background */}
      {/* ===================================== */}

      <Image
          src="/hero/elements/Pfbg.png"
          alt=""

          fill

          draggable={false}

          className="
              object-contain
              object-top-left

              pointer-events-none
              select-none
          "
      />

      {/* ===================================== */}
      {/* Content */}
      {/* ===================================== */}

      <div
        className="
          absolute

          left-[122px]
          top-[108px]

          w-[280px]

          z-20

          flex
          flex-col
        "
      >

        {/* Title */}

        <h3
          className="
            mt-0
            -ml-2

            font-[var(--font-heading)]

            text-[1.75rem]

            leading-tight
            max-w-[120px]

            text-[#2F2F2F]
          "
        >
          {offering.title}
        </h3>

        {/* Tagline */}

        <p
          className="
            mt-4
            -ml-2

            max-w-[250px]

            text-[14px]

            leading-7

            text-[#666]
          "
        >
          {offering.tagline}
        </p>

        <div className="h-[10px]" />

        {/* Duration */}

          <div
            className="
              mt-[70px]
              ml-[1300px]
              translate-x-[15px]

              flex
              items-center

              gap-1.5

              text-[#5A9C74]
            "
          >
            <Clock3 size={24} />

            <span
              className="
                text-lg
                font-medium
              "
            >
              {offering.duration}
            </span>

          </div>

        {/* Highlights */}
        <div className="h-[15px]" />
        <div
          className="
            mt-[105px]
            ml-[10px]
            translate-x-[64px]

            flex
            flex-wrap

            gap-2
          "
        >
          {offering.highlights.map((item) => (

            <span
              key={item}

              className="
                inline-flex
                items-center
                justify-center
                rounded-full

                bg-[#ffdea7]

                border-2
                border-[#C9A45C]/45

                px-[58px]
                py-[14px]

                text-[16px]
                leading-[1.5]

                text-[#f0a425]
              "
            >
              {item}
            </span>

          ))}
        </div>

        <div className="h-[12px]" />


        <button
          onClick={() => onKnowMore(offering.detailsImage)}
          className="
            mt-[180px]
            -ml-2
            translate-x-[117px]

            group

            flex

            items-center

            gap-1.5

            font-semibold

            text-[22px]
            text-[#2E7CC0]

            transition-all
            duration-300

            hover:gap-8
          "
        >

          {offering.cta}

          <ArrowRight
            size={28}
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