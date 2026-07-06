export default function GroundLayer() {
  return (
    <div
      className="
        absolute
        bottom-0
        left-0
        w-full
        h-[10px]
        overflow-hidden
        pointer-events-none
        z-[2]

        sm:h-[12px]
        md:h-[14px]
        lg:h-[16px]
        "
    >
      {/* Soil */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#DDD2BB]
          via-[#CDBB9A]
          to-[#B39A73]
        "
      />

      {/* Soft highlight */}

      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[3px]
          bg-white/35
        "
      />

      {/* Shadow */}

      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[10px]
          bg-gradient-to-b
          from-black/10
          to-transparent
        "
      />
    </div>
  );
}