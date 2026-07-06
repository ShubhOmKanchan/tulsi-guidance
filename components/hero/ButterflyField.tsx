import Image from "next/image";

const butterflies = [
  {
    image: "/hero/elements/butterfly.png",
    left: "2%",
    bottom: "40%",
    width: 54,
    duration: "28s",
    delay: "0s",
  },

  {
    image: "/hero/elements/b-1.png",
    left: "78%",
    bottom: "18%",
    width: 42,
    duration: "34s",
    delay: "2s",
  },

  {
    image: "/hero/elements/b2.png",
    left: "55%",
    bottom: "12%",
    width: 34,
    duration: "24s",
    delay: "4s",
  },
];

export default function ButterflyField() {
  return (
    <>
      {butterflies.map((b, i) => (
        <div
          key={i}
          className="absolute pointer-events-none z-[15]"
          style={{
            left: b.left,
            bottom: b.bottom,
          }}
        >
          <div
            className="animate-butterfly-flight"
            style={{
              animationDuration: b.duration,
              animationDelay: b.delay,
            }}
          >
            <div className="animate-butterfly-flap">
              <Image
                src={b.image}
                alt=""
                width={b.width}
                height={b.width}
                draggable={false}
                priority={false}
                className="
                select-none
                opacity-80

                w-5
                h-auto

                sm:w-7
                md:w-8

                lg:w-auto
                "
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}