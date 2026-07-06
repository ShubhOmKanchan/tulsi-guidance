import Image from "next/image";

export default function EarthenPots() {
  return (
    <div
      className="
        absolute

        left-[-20px]
        bottom-[-12px]

        w-[220px]
        h-[170px]

        pointer-events-none
        z-10

        sm:left-[-15px]
        sm:bottom-[-10px]
        sm:w-[280px]
        sm:h-[210px]

        md:left-[-12px]
        md:bottom-[-8px]
        md:w-[360px]
        md:h-[260px]

        lg:left-[-9px]
        lg:bottom-[-5px]
        lg:w-[470px]
        lg:h-[330px]
        "
    >
      {/* Back Pot */}

      <Image
        src="/hero/elements/ep.png"
        alt=""
        width={100}
        height={100}
        className="
          absolute
          bottom-0

          left-2
            w-[55px]

            sm:left-3
            sm:w-[70px]

            md:left-4
            md:w-[85px]

            lg:left-5
            lg:w-[100px]
          h-auto

          opacity-60

        "
      />

      {/* Main Pot */}

      <Image
        src="/hero/elements/ep.png"
        alt=""
        width={130}
        height={130}
        className="
          absolute
          bottom-0

          left-[28px]
            w-[75px]

            sm:left-[38px]
            sm:w-[95px]

            md:left-[46px]
            md:w-[110px]

            lg:left-[55px]
            lg:w-[130px]
          h-auto

          opacity-60

        "
      />

      {/* Front Pot */}

      <Image
        src="/hero/elements/ep.png"
        alt=""
        width={80}
        height={80}
        className="
          absolute
          bottom-0

          left-[60px]
            w-[48px]

            sm:left-[78px]
            sm:w-[60px]

            md:left-[90px]
            md:w-[70px]

            lg:left-[105px]
            lg:w-[80px]
          h-auto

          opacity-60
        "
      />
    </div>
  );
}