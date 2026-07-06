export default function PeacockWisps() {
  const particles = [
    { x: 110, y: 85, r: 2.2, d: "0s" },
    { x: 180, y: 60, r: 1.8, d: "1.5s" },
    { x: 260, y: 95, r: 2.5, d: "3s" },
    { x: 340, y: 72, r: 2, d: "0.8s" },
    { x: 430, y: 120, r: 2.4, d: "2.4s" },
    { x: 560, y: 90, r: 2.2, d: "4s" },
    { x: 670, y: 65, r: 1.8, d: "5.2s" },
    { x: 780, y: 105, r: 2.3, d: "2s" },
    { x: 930, y: 75, r: 2.1, d: "3.8s" },
    { x: 1080, y: 100, r: 2.5, d: "1.2s" },

    { x: 150, y: 180, r: 2.8, d: "4.8s" },
    { x: 310, y: 170, r: 2.1, d: "2.6s" },
    { x: 490, y: 160, r: 2.6, d: "1s" },
    { x: 720, y: 185, r: 2.2, d: "5.5s" },
    { x: 980, y: 165, r: 2.5, d: "3.4s" },

    { x: 230, y: 250, r: 2.3, d: "2.8s" },
    { x: 610, y: 240, r: 2.8, d: "0.5s" },
    { x: 930, y: 260, r: 2.4, d: "4.2s" },
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
    >
      {particles.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={p.r}
          fill="#F6E6A8"
          opacity="0.45"
          style={{
            animation: `dustFloat 18s ease-in-out infinite`,
            animationDelay: p.d,
          }}
        />
      ))}
    </svg>
  );
}