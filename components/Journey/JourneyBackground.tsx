import Image from "next/image";
import JB from "../hero/Jb";

export default function OfferingsBackground() {
  return (
    <>
      {/* ===================================================== */}
      {/* Healing Green */}
      {/* ===================================================== */}

      <JB />

      <div
        className="
          absolute
          -left-44
          -top-28

          h-[620px]
          w-[520px]

          rounded-full

          bg-[#4F8F5C]/[0.19]

          blur-[190px]

          animate-glow-one

          pointer-events-none
        "
      />

      

      {/* ===================================================== */}
      {/* Peacock Blue */}
      {/* ===================================================== */}

      <div
        className="
          absolute

          right-[-180px]
          top-[100px]

          h-[520px]
          w-[620px]

          rounded-full

          bg-[#4C8CBF]/[0.19]

          blur-[180px]

          animate-glow-two

          pointer-events-none
        "
      />

      {/* ===================================================== */}
      {/* Sacred Gold */}
      {/* ===================================================== */}

      <div
        className="
          absolute

          left-1/2
          bottom-[-260px]

          -translate-x-1/2

          h-[620px]
          w-[760px]

          rounded-full

          bg-[#D7B46A]/[0.19]

          blur-[220px]

          animate-glow-three

          pointer-events-none
        "
      />

      {/* ===================================================== */}
      {/* Ambient White */}
      {/* ===================================================== */}

      <div
        className="
          absolute

          left-[22%]
          top-[46%]

          h-[700px]
          w-[700px]

          rounded-full

          bg-white/50

          blur-[240px]

          animate-glow-four

          pointer-events-none
        "
      />

      {/* ===================================================== */}
      {/* Secondary Green */}
      {/* ===================================================== */}

      <div
        className="
          absolute

          right-[18%]
          bottom-[8%]

          h-[420px]
          w-[500px]

          rounded-full

          bg-[#4F8F5C]/[0.19]

          blur-[180px]

          animate-glow-five

          pointer-events-none
        "
      />

      {/* Butterfly */}

      <div
        className="
          absolute
          left-[-60px]
          top-[18%]
          z-20
          pointer-events-none
          animate-offering-butterfly
        "
      >
          <Image
              src="/hero/elements/butterfly.png"
              alt=""
              width={42}
              height={42}
              draggable={false}
              className="
                  animate-butterfly-flap
                  select-none
              "
          />
      </div>
    </>
  );
}