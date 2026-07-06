"use client";

import { useState } from "react";

import PhilosophyPopup from "./PhilosophyPopup";
import { philosophyItems } from "./PhilosophyData";

type JourneyStageProps = {
  title: string;
  color: string;
  x: number;
  y: number;
};

export default function JourneyStage({
  title,
  color,
  x,
  y,
}: JourneyStageProps) {

  const [hover, setHover] = useState(false);

  const item = philosophyItems.find(
    (i) => i.title === title
  );

  return (
    <div
      className="absolute group w-[270px]"
      style={{
        left: x,
        top: y,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

      <h3
        className={`
          group
          relative
          inline-block

          font-serif
          text-[56px]
          leading-tight

          mb-4

          cursor-pointer

          ${color}
        `}
      >
        {title}

      </h3>

      <div
        className="
            h-[2px]
            rounded-full
            bg-[#BFA36A]

            mb-2

            transition-all
            duration-300

            w-20
            group-hover:w-40
        "
        />

      {hover && item && (

        <PhilosophyPopup
            title={item.title}
            description={item.description}
            icon={item.icon}
            position={item.position}
            />

      )}

    </div>
  );
}