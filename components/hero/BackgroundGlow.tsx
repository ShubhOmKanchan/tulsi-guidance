export default function BackgroundGlow() {
  return (
    <>
      {/* Left warm glow */}

      <div
        className="
            absolute

            -left-24
            top-6

            h-[320px]
            w-[320px]

            rounded-full
            blur-[70px]
            opacity-45

            sm:h-[450px]
            sm:w-[450px]
            sm:blur-[90px]

            md:h-[560px]
            md:w-[560px]
            md:blur-[110px]

            lg:-left-48
            lg:top-12
            lg:h-[720px]
            lg:w-[720px]
            lg:blur-[130px]
            lg:opacity-55
            "
        style={{
          background:
            "radial-gradient(circle,#F7E7B5 0%,#F7E7B533 45%,transparent 80%)",
        }}
      />

      {/* Right teal glow */}

      <div
        className="
            absolute

            right-[-120px]
            top-[-60px]

            h-[420px]
            w-[420px]

            rounded-full
            blur-[80px]
            opacity-35

            sm:h-[560px]
            sm:w-[560px]
            sm:blur-[110px]

            md:h-[700px]
            md:w-[700px]
            md:blur-[130px]

            lg:right-[-220px]
            lg:top-[-120px]
            lg:h-[900px]
            lg:w-[900px]
            lg:blur-[160px]
            lg:opacity-45
            "
        style={{
          background:
            "radial-gradient(circle,#BFEFE7 0%,#BFEFE722 50%,transparent 82%)",
        }}
      />

      {/* Bottom gold */}

      <div
        className="
            absolute

            bottom-[-120px]
            left-1/2
            -translate-x-1/2

            h-[260px]
            w-[420px]

            rounded-full
            blur-[90px]
            opacity-28

            sm:h-[360px]
            sm:w-[560px]

            md:h-[500px]
            md:w-[720px]

            lg:bottom-[-260px]
            lg:h-[620px]
            lg:w-[900px]
            lg:blur-[170px]
            lg:opacity-35
            "
        style={{
          background:
            "radial-gradient(circle,#F5E7C7 0%,transparent 80%)",
        }}
      />
    </>
  );
}