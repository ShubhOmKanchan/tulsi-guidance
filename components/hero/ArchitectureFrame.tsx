export default function ArchitectureFrame() {
  return (
    <>
      {/* ===================================== */}
      {/* TOP WOODEN BEAM */}
      {/* ===================================== */}

      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-24
          opacity-[0.06]
        "
        style={{
          background:
            "linear-gradient(to bottom, rgba(94,71,47,.35), transparent)",
        }}
      />

      {/* ===================================== */}
      {/* LEFT VERANDAH SHADOW */}
      {/* ===================================== */}

      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-40
          opacity-[0.045]
        "
        style={{
          background:
            "linear-gradient(to right, rgba(88,67,42,.45), transparent)",
        }}
      />

      {/* ===================================== */}
      {/* RIGHT VERANDAH SHADOW */}
      {/* ===================================== */}

      <div
        className="
          absolute
          right-0
          top-0
          h-full
          w-40
          opacity-[0.04]
        "
        style={{
          background:
            "linear-gradient(to left, rgba(88,67,42,.38), transparent)",
        }}
      />
    </>
  );
}