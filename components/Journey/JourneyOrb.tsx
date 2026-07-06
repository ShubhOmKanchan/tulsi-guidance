export default function JourneyOrb() {
  return (
    <svg
      className="absolute left-0 top-0 overflow-visible pointer-events-none"
      width="1400"
      height="900"
      viewBox="0 0 1400 900"
    >
      <defs>
        <filter
          id="orbGlow"
          x="-200%"
          y="-200%"
          width="500%"
          height="500%"
        >
          <feGaussianBlur
            stdDeviation="8"
            result="blur"
          />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle
        r="10"
        fill="#F4D26B"
        filter="url(#orbGlow)"
      >
        <animateMotion
          dur="16s"
          repeatCount="indefinite"
        >
          <mpath href="#journeyPath" />
        </animateMotion>
      </circle>
    </svg>
  );
}