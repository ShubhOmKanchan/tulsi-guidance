import Image from "next/image";

export default function HeroDecor() {
  return (
    <>
      {/* ========================= */}
      {/* LEFT BOTANICAL */}
      {/* ========================= */}

      <Image
        src="/hero/elements/banana-leaf.png"
        alt=""
        width={260}
        height={260}
        className="
          pointer-events-none
          absolute
          -left-20
          bottom-0
          opacity-[0.10]
          select-none
          rotate-[-8deg]
        "
      />

      {/* ========================= */}
      {/* RIGHT BOTANICAL */}
      {/* ========================= */}

      <Image
        src="/hero/elements/floral-right.png"
        alt=""
        width={210}
        height={210}
        className="
          pointer-events-none
          absolute
          right-0
          top-40
          opacity-[0.12]
          select-none
        "
      />

      {/* ========================= */}
      {/* TULSI PLANT */}
      {/* ========================= */}

      <Image
        src="/hero/elements/tulsi-plant.png"
        alt=""
        width={150}
        height={150}
        className="
          pointer-events-none
          absolute
          left-16
          bottom-14
          opacity-80
        "
      />

      {/* ========================= */}
      {/* TERRACOTTA POT */}
      {/* ========================= */}

      <Image
        src="/hero/elements/kulhad.png"
        alt=""
        width={70}
        height={70}
        className="
          pointer-events-none
          absolute
          right-36
          bottom-20
          opacity-40
        "
      />

      {/* ========================= */}
      {/* STONE */}
      {/* ========================= */}

      <Image
        src="/hero/elements/stone.png"
        alt=""
        width={90}
        height={90}
        className="
          pointer-events-none
          absolute
          left-[43%]
          bottom-12
          opacity-20
        "
      />

      {/* ========================= */}
      {/* HANGING LAMP */}
      {/* ========================= */}

      <Image
        src="/hero/elements/hanging-lamp.png"
        alt=""
        width={120}
        height={320}
        className="
          pointer-events-none
          absolute
          right-32
          -top-10
          opacity-[0.16]
        "
      />

      {/* ========================= */}
      {/* FLOATING GLOW */}
      {/* ========================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-emerald-100/30
          blur-[140px]
        "
      />

      {/* ========================= */}
      {/* LIGHT ORB */}
      {/* ========================= */}

      <div
        className="
          absolute
          right-1/3
          top-40
          h-4
          w-4
          rounded-full
          bg-yellow-100
          opacity-70
          blur-sm
        "
      />

      <div
        className="
          absolute
          left-1/3
          bottom-40
          h-5
          w-5
          rounded-full
          bg-sky-100
          opacity-60
          blur-sm
        "
      />
    </>
  );
}