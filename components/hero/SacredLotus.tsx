import Image from "next/image";

export default function SacredLotus() {
  return (
    <div
      className="
        absolute
        right-[50px]
        bottom-[40px]
        w-[300px]
        h-auto
        opacity-100
        z-[999]
        "
    >
      <Image
        src="/hero/elements/lotus-flower.png"
        alt=""
        width={900}
        height={900}
        priority={false}
        draggable={false}
        className="
          absolute

          right-[140px]
          bottom-[-360px]

          w-[780px]
          h-auto

          opacity-[0.9]

          select-none


          animate-lotus-float
        "
      />
    </div>
  );
}