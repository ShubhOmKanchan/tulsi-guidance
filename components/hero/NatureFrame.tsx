export default function NatureFrame() {
  return (
    <>
      {/* ========================================== */}
      {/* LEFT BAMBOO SILHOUETTE */}
      {/* ========================================== */}

      <svg
        className="
          absolute
          left-[-80px]
          top-[120px]
          h-[760px]
          w-[220px]
          opacity-[0.045]
        "
        viewBox="0 0 220 760"
      >
        {/* Stem */}

        <rect
          x="95"
          y="0"
          width="8"
          height="760"
          rx="4"
          fill="#5C7D52"
        />

        {/* Nodes */}

        {[80, 170, 260, 350, 440, 530, 620].map((y) => (
          <rect
            key={y}
            x="90"
            y={y}
            width="18"
            height="5"
            rx="2"
            fill="#5C7D52"
          />
        ))}

        {/* Leaves */}

        {[90, 180, 270, 360, 450, 540].map((y, i) => (
          <ellipse
            key={i}
            cx={60}
            cy={y}
            rx="28"
            ry="8"
            transform={`rotate(-35 60 ${y})`}
            fill="#6F8D63"
          />
        ))}

        {[130, 220, 310, 400, 490, 580].map((y, i) => (
          <ellipse
            key={i}
            cx={145}
            cy={y}
            rx="28"
            ry="8"
            transform={`rotate(35 145 ${y})`}
            fill="#6F8D63"
          />
        ))}
      </svg>

      {/* ========================================== */}
      {/* RIGHT FOLIAGE SHADOW */}
      {/* ========================================== */}

      <div
        className="
          absolute
          right-[-120px]
          top-[100px]
          h-[720px]
          w-[260px]
          rounded-full
          blur-[4px]
          opacity-[0.04]
        "
        style={{
          background:
            "radial-gradient(circle at left, rgba(78,120,76,.45), transparent 72%)",
        }}
      />
    </>
  );
}