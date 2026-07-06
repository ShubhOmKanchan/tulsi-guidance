import Image from "next/image";

const butterflies = [
  {
    image: "/hero/elements/butterfly.png",
    left: "45%",
    bottom: "70%",
    width: 54,
    duration: "18s",
    delay: "0s",
  },

  {
    image: "/hero/elements/b-1.png",
    left: "88%",
    bottom: "18%",
    width: 42,
    duration: "14s",
    delay: "4s",
  },

  {
    image: "/hero/elements/b2.png",
    left: "6%",
    bottom: "52%",
    width: 48,
    duration: "19s",
    delay: "1s",
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
                className="select-none opacity-80"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}