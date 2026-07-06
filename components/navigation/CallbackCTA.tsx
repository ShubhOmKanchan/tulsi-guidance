"use client";

import { PhoneCall } from "lucide-react";

interface CallbackCTAProps {
  direction?: "horizontal" | "vertical";
  onOpen: () => void;
}

export default function CallbackCTA({
  direction = "horizontal",
  onOpen,
}: CallbackCTAProps) {
  return (
    <>
      {direction === "horizontal" ? (
        <button
          onClick={onOpen}
          className="
            group
            flex
            items-center

            w-14
            hover:w-64

            rounded-full
            overflow-hidden

            transition-all
            duration-500
          "
          style={{
            background:
              "linear-gradient(135deg,#4F8F5C,#4C8CBF,#D7B46A)",
          }}
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center">
            <PhoneCall
              size={22}
              color="white"
            />
          </div>

          <span
            className="
              whitespace-nowrap
              text-white
              font-medium
              text-[18px]

              opacity-0
              transition-all
              duration-300

              group-hover:opacity-100
            "
          >
            Request a Callback
          </span>
        </button>
      ) : (
        <div
          className="
            group
            flex
            flex-col
            items-center
            cursor-pointer
          "
          onClick={onOpen}
        >
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full

              transition-all
              duration-300

              group-hover:scale-105
            "
            style={{
              background:
                "linear-gradient(135deg,#4F8F5C,#4C8CBF,#D7B46A)",
            }}
          >
            <PhoneCall
              size={22}
              color="white"
            />
          </div>

          <span
            className="
              mt-3

              text-center

              text-[12px]
              font-medium
              tracking-[0.12em]

              text-[#2E2E2E]

              whitespace-nowrap

              opacity-0
              translate-y-2

              transition-all
              duration-300

              group-hover:opacity-100
              group-hover:translate-y-0
            "
          >
            Request a
            <br />
            Callback
          </span>
        </div>
      )}
    </>
  );
}