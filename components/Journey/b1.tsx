import Image from "next/image";

const butterflies = [
  {
    image: "/hero/elements/b-1.png",
    left: "12%",
    bottom: "10%",
    width: 42,
    duration: "15s",
    delay: "0s",
  },

  {
    image: "/hero/elements/b2.png",
    left: "55%",
    bottom: "62%",
    width: 34,
    duration: "7s",
    delay: "1s",
  },
];

export default function Bf() {
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