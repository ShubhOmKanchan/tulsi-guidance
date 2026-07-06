export default function SacredMandala() {
  return (
    <svg
      className="
        absolute

        left-[88px]
        top-[150px]
        -translate-x-1/2
        -translate-y-1/2

        w-[180px]
        h-[180px]

        opacity-[0.12]

        pointer-events-none
        z-10
        animate-mandala-breath

        sm:top-[220px]
        sm:w-[240px]
        sm:h-[240px]
        sm:opacity-[0.16]

        md:left-auto
        md:right-[520px]
        md:top-[300px]
        md:-translate-x-0
        md:w-[340px]
        md:h-[340px]
        md:opacity-[0.25]

        lg:right-[966px]
        lg:top-[360px]
        lg:-translate-y-1/2
        lg:w-[470px]
        lg:h-[470px]
        lg:opacity-[0.45]
        "
      viewBox="0 0 1000 1000"
      fill="none"
    >
      {/* Outer Rings */}

      <circle
        cx="500"
        cy="500"
        r="430"
        stroke="#C7A45A"
        strokeWidth="1.2"
      />

      <circle
        cx="500"
        cy="500"
        r="380"
        stroke="#C7A45A"
        strokeWidth="2.5"
      />

      <circle
        cx="500"
        cy="500"
        r="330"
        stroke="#C7A45A"
        strokeWidth="2.5"
      />

      <circle
        cx="500"
        cy="500"
        r="280"
        stroke="#C7A45A"
        strokeWidth="0.8"
      />

      {/* Lotus Petals */}

      {Array.from({ length: 24 }).map((_, i) => (
        <g
          key={i}
          transform={`rotate(${i * 15} 500 500)`}
        >
          <path
            d="
              M500 180
              C470 250 470 330 500 370
              C530 330 530 250 500 180
            "
            stroke="#C7A45A"
            strokeWidth="2.5"
            fill="none"
          />
        </g>
      ))}

      {/* Inner Circle */}

      <circle
        cx="500"
        cy="500"
        r="160"
        stroke="#C7A45A"
        strokeWidth="2.5"
      />

      {/* Small Petals */}

      {Array.from({ length: 12 }).map((_, i) => (
        <g
          key={i}
          transform={`rotate(${i * 30} 500 500)`}
        >
          <path
            d="
              M500 340
              C485 380 485 430 500 455
              C515 430 515 380 500 340
            "
            stroke="#C7A45A"
            strokeWidth="0.9"
            fill="none"
          />
        </g>
      ))}

      {/* Centre */}

      <circle
        cx="500"
        cy="500"
        r="50"
        stroke="#C7A45A"
        strokeWidth="1.4"
      />

      <circle
        cx="500"
        cy="500"
        r="12"
        fill="#D9C79A"
      />
    </svg>
  );
}