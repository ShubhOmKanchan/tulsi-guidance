"use client";

import Image from "next/image";

type Props = {
  title: string;
  description: string;
  icon: string;
};

export default function PhilosophyPopupMobile({
  title,
  description,
  icon,
}: Props) {
  return (
    <div
      className="
        mt-6
        w-full
        max-w-[340px]

        rounded-[28px]

        border
        border-[#D7B46A]/25

        bg-white/80
        backdrop-blur-xl

        shadow-[0_20px_60px_rgba(0,0,0,.12)]

        px-6
        py-6
      "
    >
      <div className="flex flex-col items-center text-center">

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center

            rounded-full

            bg-gradient-to-br
            from-[#4F8F5C]/10
            via-[#4C8CBF]/10
            to-[#D7B46A]/10
          "
        >
          <Image
            src={icon}
            alt={title}
            width={34}
            height={34}
            className="object-contain"
          />
        </div>

        <h4
          className="
            mt-5
            font-serif
            text-[30px]
            leading-tight
            text-[#2F2A27]
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-4
            text-[16px]
            leading-8
            text-[#666]
          "
        >
          {description}
        </p>

      </div>
    </div>
  );
}