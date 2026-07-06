import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  MessageCircle,
  Sparkles,
} from "lucide-react";

interface BookingCardProps {
  title: string;
  description: string;
  button: string;
  icon: "calendar" | "message" | "sparkles";
}

export default function BookingCard({
  title,
  description,
  button,
  icon,
}: BookingCardProps) {

  const icons = {
    calendar: CalendarDays,
    message: MessageCircle,
    sparkles: Sparkles,
  };

  const Icon = icons[icon];

  return (
    <div
      className="
        group
        relative

        overflow-hidden

        rounded-[32px]

        border
        border-[#E8E2D6]

        bg-white

        p-10

        shadow-[0_10px_35px_rgba(0,0,0,0.05)]

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-[#4F8F5C]/40
        hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]
      "
    >

      {/* Decorative Glow */}

      <div
        className="
          absolute
          -right-12
          -top-12

          h-40
          w-40

          rounded-full

          bg-[#4F8F5C]/5

          blur-3xl

          transition-all
          duration-500

          group-hover:scale-125
        "
      />

      {/* Icon */}

      <div
        className="
          relative

          flex
          h-16
          w-16

          items-center
          justify-center

          rounded-full

          bg-gradient-to-br
          from-[#4F8F5C]
          via-[#5F9FC6]
          to-[#D7B46A]

          shadow-lg
        "
      >
        <Icon
          size={28}
          className="text-white"
        />
      </div>

      {/* Title */}

      <h3
        className="
          mt-8

          font-[var(--font-heading)]

          text-[2rem]

          text-[#2E2E2E]
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-4

          leading-8

          text-[#666]
        "
      >
        {description}
      </p>

      {/* Button */}

      <Link
        href="/contact"
        className="
          mt-10

          inline-flex
          items-center
          gap-3

          font-medium

          text-[#4F8F5C]

          transition-all
          duration-300

          group-hover:gap-5
        "
      >
        {button}

        <ArrowRight
          size={18}
          className="
            transition-transform
            duration-300

            group-hover:translate-x-1
          "
        />
      </Link>

    </div>
  );
}