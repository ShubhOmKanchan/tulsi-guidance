import Image from "next/image";
import GroundLayer from "@/components/hero/GroundLayer";
import EarthenPots from "@/components/hero/EarthenPots";
import TulsiPlant from "@/components/hero/TulsiPlant";

export default function OfferingsBackground() {
  return (
    <>
      {/* ===================================================== */}
      {/* Healing Green */}
      {/* ===================================================== */}

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
      <GroundLayer />
      {/* Left Peacock */}

      <Image
        src="/hero/elements/p-l.png"
        alt=""
        width={145}
        height={145}
        className="
        hidden sm:block
        absolute
        left-6
        bottom-0
        z-20
        opacity-0
        lg:opacity-90
        animate-peacock-sway
        pointer-events-none
      "
      />

      {/* Right Peacock */}

      <Image
        src="/hero/elements/p-r.png"
        alt=""
        width={190}
        height={190}
        className="
          absolute
          right-8
          bottom-0
          z-20
          opacity-0
          lg:opacity-90
          animate-peacock-sway
          pointer-events-none
        "
      />

      {/* Stones */}

      <Image
        src="/hero/elements/s.png"
        alt=""
        width={155}
        height={155}
        className="
          absolute
          left-[112px]
          bottom-1
          opacity-0
          lg:opacity-90
          z-20
          pointer-events-none
        "
      />

      <Image
        src="/hero/elements/s.png"
        alt=""
        width={155}
        height={155}
        className="
          absolute
          right-[112px]
          bottom-1
          opacity-0
          lg:opacity-90
          z-20
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

      {/* Falling Leaves */}

      {[
      { left: "16%", top: "94%", delay: "0s", duration: "7.2s", rotate: "12deg" },
      { left: "22%", top: "94%", delay: "0.2s", duration: "8s", rotate: "72deg" },
      { left: "28%", top: "95%", delay: "0.3s", duration: "7.4s", rotate: "150deg" },
      { left: "35%", top: "93.5%", delay: "0.8s", duration: "8.3s", rotate: "210deg" },
      { left: "42%", top: "95%", delay: "0.6s", duration: "7.8s", rotate: "285deg" },
      { left: "48%", top: "93.75%", delay: "0.4s", duration: "8.1s", rotate: "40deg" },
      { left: "54%", top: "94%", delay: "0.3s", duration: "7.5s", rotate: "110deg" },
      { left: "60%", top: "93.5%", delay: "0.2s", duration: "8.4s", rotate: "175deg" },
      { left: "66%", top: "94%", delay: "0.8s", duration: "7.9s", rotate: "235deg" },
      { left: "72%", top: "93.5%", delay: "0.4s", duration: "8.2s", rotate: "305deg" },
      { left: "77%", top: "93.5%", delay: "0.3s", duration: "7.7s", rotate: "20deg" },
      { left: "82%", top: "93%", delay: "0.6s", duration: "8.5s", rotate: "95deg" },
      ].map((leaf, i) => (
        <div key={i} className="hidden sm:block">
        <Image
          src="/hero/elements/leaf.png"
          alt=""
          width={18}
          height={18}
          className="
            absolute
            z-20
            pointer-events-none
            animate-offering-leaf
          "
          style={{
            left: leaf.left,
            top: leaf.top,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
            transform: `rotate(${leaf.rotate})`,
          }}
        />
        </div>
      ))}
      <div className="lg:hidden">
      <EarthenPots />
      <TulsiPlant />
      </div>

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