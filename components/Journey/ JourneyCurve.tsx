export default function JourneyCurve() {
  return (
    <svg
      className="absolute left-0 top-0"
      width="1400"
      height="900"
      viewBox="0 0 1400 900"
      fill="none"
    >
      <defs>
        <linearGradient
          id="journeyGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#4F8F5C" />
          <stop offset="50%" stopColor="#4C8CBF" />
          <stop offset="100%" stopColor="#D7B46A" />
        </linearGradient>
      </defs>

      <path
        id="journeyPath"
        d="
        M100 80

        C-150 80,
        120 -80,
        625 290

        C1130 660,
        1400 500,
        1150 500
        "
        fill="none"
        stroke="url(#journeyGradient)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.72"
      />
    </svg>
  );
}