"use client";

import { useState } from "react";
import PhilosophyPopupMobile from "./PhilosophyPopupMobile";
import { philosophyItems } from "./PhilosophyData";

type JourneyStageMobileProps = {
  title: string;
  color: string;
};

export default function JourneyStageMobile({
  title,
  color,
}: JourneyStageMobileProps) {
  const [open, setOpen] = useState(false);

  const item = philosophyItems.find(
    (i) => i.title === title
  );

  return (
    <div className="relative flex flex-col items-center w-full">

      {/* Connector Line */}

      

      {/* Stage */}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          group
          relative
          z-10
          px-8
          py-2
        "
      >
        <h3
          className={`
            font-serif
            text-[54px]
            leading-none
            ${color}
          `}
        >
          {title}
        </h3>

        <div
        className="
            mx-auto
            mt-3
            h-[2px]
            w-24
            overflow-hidden
        "
        >
            <div
                className="
                h-full
                w-0
                rounded-full

                bg-gradient-to-r
                from-[#4F8F5C]
                via-[#4C8CBF]
                to-[#D7B46A]

                transition-all
                duration-500

                group-hover:w-full
                hover:w-full
                "
            />
            </div>
      </button>

      {/* Popup */}

      {open && item && (
        <div className="relative mt-8 mb-10 w-full flex justify-center">
          <PhilosophyPopupMobile
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        </div>
      )}
    </div>
  );
}