export default function JourneyTimelineMobile() {
  return (
    <>
    <div
      className="
        absolute
        left-1/2
        top-28
        -translate-x-1/2

        w-[3px]
        h-[620px]

        bg-gradient-to-b
        from-[#4F8F5C]
        via-[#4C8CBF]
        to-[#D7B46A]

        opacity-18
      "
    >
    </div>
    <svg
    className="
        absolute
        left-1/2
        top-28
        -translate-x-1/2
        pointer-events-none
        overflow-visible
    "
    width="30"
    height="620"
    viewBox="0 0 30 620"
    >
    <defs>
        <filter id="mobileOrbGlow">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
        </feMerge>
        </filter>
    </defs>

    <path
        id="mobileJourneyPath"
        d="M15 0 L15 620"
        fill="none"
        stroke="none"
    />

    <circle
        r="8"
        fill="#F4D26B"
        filter="url(#mobileOrbGlow)"
    >
        <animateMotion
        dur="12s"
        repeatCount="indefinite"
        >
        <mpath href="#mobileJourneyPath" />
        </animateMotion>
    </circle>
    </svg>
    </>

  );
}