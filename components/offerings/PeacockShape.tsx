interface PeacockShapeProps {
  children?: React.ReactNode;
}

export default function PeacockShape({
  children,
}: PeacockShapeProps) {
  return (
    <div className="relative w-full h-full">

      {/* ====================================== */}
      {/* Layer 1 */}
      {/* ====================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[#2E7CC0]
        "
        style={{
          clipPath:
            "path('M20 20 L20 470 C20 520 55 540 120 540 L185 540 C285 540 300 455 300 325 L300 165 C300 70 240 30 150 20 Z')",
        }}
      />

      {/* ====================================== */}
      {/* Layer 2 */}
      {/* ====================================== */}

      <div
        className="
          absolute
          inset-[10px]
          bg-[#86B768]
        "
        style={{
          clipPath:
            "path('M20 20 L20 470 C20 520 55 540 120 540 L185 540 C285 540 300 455 300 325 L300 165 C300 70 240 30 150 20 Z')",
        }}
      />

      {/* ====================================== */}
      {/* Layer 3 */}
      {/* ====================================== */}

      <div
        className="
          absolute
          inset-[22px]
          bg-[#2E7CC0]
        "
        style={{
          clipPath:
            "path('M20 20 L20 470 C20 520 55 540 120 540 L185 540 C285 540 300 455 300 325 L300 165 C300 70 240 30 150 20 Z')",
        }}
      />

      {/* ====================================== */}
      {/* Layer 4 */}
      {/* ====================================== */}

      <div
        className="
          absolute
          inset-[34px]
          bg-[#FFFDF9]
        "
        style={{
          clipPath:
            "path('M20 20 L20 470 C20 520 55 540 120 540 L185 540 C285 540 300 455 300 325 L300 165 C300 70 240 30 150 20 Z')",
        }}
      />

      {/* ====================================== */}
      {/* Content */}
      {/* ====================================== */}

      <div
        className="
          absolute
          inset-[48px]
          z-20
          flex
          flex-col
          h-[calc(100%-96px)]
        "
      >
        {children}
      </div>

    </div>
  );
}