export default function JourneyPath() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1600 900"
      preserveAspectRatio="none"
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
          M120 390

          C260 470,
          360 430,
          520 330

          S720 430,
          920 330

          S1120 430,
          1320 330

          S1460 390,
          1540 450
        "
        fill="none"
        stroke="url(#journeyGradient)"
        strokeWidth="2.4"
        strokeDasharray="9 9"
        strokeLinecap="round"
        opacity=".72"
      />
    </svg>
  );
}