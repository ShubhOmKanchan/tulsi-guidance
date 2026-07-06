function Leaf({
  x,
  y,
  rotate = 0,
  scale = 1,
}: {
  x: number;
  y: number;
  rotate?: number;
  scale?: number;
}) {
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    >
      <path
        d="
        M0 0
        C10 -3 18 -12 22 -22
        C24 -30 18 -38 8 -42
        C2 -44 -4 -40 -7 -32
        C-10 -22 -8 -10 0 0
        Z
        "
        fill="#91BE73"
        stroke="#6F8F63"
        strokeWidth="0.45"
      />

      <path
        d="
        M0 0
        L9 -37
        "
        stroke="#6F8F63"
        strokeWidth="0.4"
      />
    </g>
  );
}
function LeafPair(
  x: number,
  y: number,
  angle: number,
  scale = 1
) {
  return (
    <>
      <Leaf
        x={x}
        y={y}
        rotate={angle - 55}
        scale={scale}
      />

      <Leaf
        x={x}
        y={y}
        rotate={angle + 55}
        scale={scale}
      />
    </>
  );
}
export default function TulsiPlant() {
  return (
    <svg
      className="
      absolute

      right-[-15px]
      bottom-[-55px]

      w-[120px]
      h-[170px]

      opacity-[0.14]

      pointer-events-none
      z-[3]

      sm:right-[-10px]
      sm:bottom-[-70px]
      sm:w-[160px]
      sm:h-[220px]

      md:right-[5px]
      md:bottom-[-90px]
      md:w-[210px]
      md:h-[290px]

      lg:right-[35px]
      lg:bottom-[-110px]
      lg:w-[260px]
      lg:h-[360px]
      lg:opacity-[0.22]
    "
      viewBox="0 0 260 360"
      fill="none"
    >
        {/* MAIN STEM */}

        {LeafPair(128,300,0,.62)}
        {LeafPair(127,265,0,.64)}
        {LeafPair(126,228,0,.68)}
        {LeafPair(126,192,0,.70)}
        {LeafPair(128,155,0,.72)}
        {LeafPair(130,118,0,.74)}
        {LeafPair(130,80,0,.76)}

        {/* LOWER LEFT */}

        {LeafPair(115,223,-45,.66)}
        {LeafPair(103,203,-45,.72)}
        {LeafPair(92,182,-42,.76)}
        {LeafPair(82,160,-38,.82)}

        {/* LOWER RIGHT */}

        {LeafPair(145,196,42,.66)}
        {LeafPair(159,176,40,.72)}
        {LeafPair(173,154,38,.78)}
        {LeafPair(186,130,34,.84)}

        {/* UPPER LEFT */}

        {LeafPair(118,135,-48,.62)}
        {LeafPair(108,116,-48,.68)}
        {LeafPair(98,95,-46,.74)}
        {LeafPair(90,72,-42,.82)}

        {/* UPPER RIGHT */}

        {LeafPair(144,110,40,.62)}
        {LeafPair(155,90,40,.68)}
        {LeafPair(166,68,38,.74)}
        {LeafPair(176,40,34,.82)}

      {/* Main Stem */}

      <path
        d="M130 360
            C124 315 138 265 126 215
            C118 165 140 105 130 30"
        stroke="#b67515"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Left Branch */}

      <path
        d="M128 240
           C108 220 90 180 82 160"
        stroke="#6F8F63"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Right Branch */}

      <path
        d="M130 205
           C154 188 174 162 186 128"
        stroke="#6F8F63"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Upper Left */}

      <path
        d="M130 145
           C112 120 98 102 90 72"
        stroke="#6F8F63"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Upper Right */}

      <path
        d="M130 120
           C148 98 166 70 176 38"
        stroke="#6F8F63"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}