export default function Canvas() {
  return (
    <>
      {/* Base Background */}

      <div className="absolute inset-0 bg-[#FCFAF6]" />

      {/* Warm Ivory Glow */}

      <div
        className="
          absolute
          -top-40
          -left-40
          h-[900px]
          w-[900px]
          rounded-full
          blur-[180px]
          opacity-70
        "
        style={{
          background:
            "radial-gradient(circle, rgba(248,241,220,0.75) 0%, transparent 72%)",
        }}
      />

      {/* Soft Peacock Glow */}

      <div
        className="
          absolute
          top-[5%]
          right-[-180px]
          h-[850px]
          w-[850px]
          rounded-full
          blur-[170px]
          opacity-55
        "
        style={{
          background:
            "radial-gradient(circle, rgba(168,216,208,0.45) 0%, transparent 75%)",
        }}
      />

      {/* Golden Morning Tint */}

      <div
        className="
          absolute
          bottom-[-250px]
          left-[18%]
          h-[700px]
          w-[700px]
          rounded-full
          blur-[190px]
          opacity-45
        "
        style={{
          background:
            "radial-gradient(circle, rgba(241,220,164,0.35) 0%, transparent 72%)",
        }}
      />
    </>
  );
}