export default function MorningLight() {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
        z-0
      "
    >
      {/* Sun Glow */}

      <div
        className="
        absolute

        -top-28
        -left-28

        w-[340px]
        h-[340px]

        rounded-full

        sm:-top-36
        sm:-left-36
        sm:w-[460px]
        sm:h-[460px]

        md:-top-44
        md:-left-44
        md:w-[600px]
        md:h-[600px]

        lg:-top-56
        lg:-left-52
        lg:w-[760px]
        lg:h-[760px]
      "
        style={{
          background:
            "radial-gradient(circle, rgba(255,230,150,0.42) 0%, rgba(255,235,180,0.18) 38%, rgba(255,255,255,0) 75%)",
        }}
      />

      {/* Long Light Rays */}

      {[
        {
          left: -260,
          top: -140,
          rotate: 18,
          width: 180,
          height: 1700,
          opacity: 0.18,
        },
        {
          left: -140,
          top: -160,
          rotate: 25,
          width: 130,
          height: 1650,
          opacity: 0.14,
        },
        {
          left: 20,
          top: -120,
          rotate: 32,
          width: 150,
          height: 1700,
          opacity: 0.13,
        },
        {
          left: 160,
          top: -140,
          rotate: 39,
          width: 170,
          height: 1700,
          opacity: 0.12,
        },
        {
          left: 340,
          top: -120,
          rotate: 46,
          width: 130,
          height: 1650,
          opacity: 0.10,
        },
      ].map((ray, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-[28px]"
          style={{
            left: ray.left,
            top: ray.top,
            width: ray.width,
            height: ray.height,
            opacity: ray.opacity,
            transform: `rotate(${ray.rotate}deg)`,
            background:
              "linear-gradient(to bottom, rgba(255,242,185,1), rgba(255,245,205,0.75), rgba(255,255,255,0))",
          }}
        />
      ))}
    </div>
  );
}