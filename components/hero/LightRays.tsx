export default function LightRays() {
  return (
    <>
      <div
        className="
            absolute
            right-0
            top-0

            h-full
            w-[220px]

            opacity-18
            blur-[1px]

            sm:w-[320px]
            sm:opacity-22

            md:w-[460px]
            md:opacity-26

            lg:w-[650px]
            lg:opacity-30
            lg:blur-[2px]
            "
        style={{
          background:
            "linear-gradient(110deg,transparent 5%,rgba(255,255,255,.55) 35%,transparent 65%)",
        }}
      />

      <div
        className="
            absolute
            right-[40px]
            top-0

            h-full
            w-[140px]

            opacity-12

            sm:right-[80px]
            sm:w-[220px]

            md:right-[140px]
            md:w-[300px]

            lg:right-[220px]
            lg:w-[400px]
            lg:opacity-20
            "
        style={{
          background:
            "linear-gradient(118deg,transparent 20%,rgba(255,255,255,.45) 45%,transparent 72%)",
        }}
      />
    </>
  );
}