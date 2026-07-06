import Image from "next/image";

export default function OfferingsHeader() {
  return (
    <div
      className="
        mx-auto
        max-w-8xl
        text-center
      "
    >

      {/* Logo with Parallel Colour Lines */}
      <div className="h-6 lg:h-[12px]" />
      <div
        className="
          mt-10
          mb-4
          flex
          items-center
          justify-center
          gap-3

          lg:mt-16
          lg:gap-8
        "
      >

        {/* Left */}

        <div className="flex flex-col gap-1 w-20 lg:w-198">

          <div className="h-[5px] w-full bg-[#4F8F5C]" />

          <div className="h-[5px] w-full bg-[#4C8CBF]" />

          <div className="h-[5px] w-full bg-[#D8B56A]" />

        </div>

        <Image
          src="/images/logos/LogoM.png"
          alt="Tulsi Guidance"
          width={90}
          height={90}
          priority
          className="lg:w-32 lg:h-32"
        />

        {/* Right */}

        <div className="flex flex-col gap-1 w-20 lg:w-198">

          <div className="h-[5px] w-full bg-[#4F8F5C]" />

          <div className="h-[5px] w-full bg-[#4C8CBF]" />

          <div className="h-[5px] w-full bg-[#D8B56A]" />

        </div>

      </div>

      {/* Transformative Offerings */}

      <div className="h-[25px]" />

      <p
        className="
          uppercase
          tracking-[0.22em]
          text-[12px]
          lg:tracking-[0.45em]
          lg:text-sm
          text-[#4F8F5C]
          font-medium
          mb-6
        "
      >
        Transformative Offerings
      </p>

      {/* Heading */}

      <h2
        className="
          font-[var(--font-heading)]
          text-4xl
          md:text-5xl
          lg:text-5xl
          leading-tight
          text-[#2E2E2E]
        "
      >
        A Journey Designed Around Where You Are
      </h2>

      {/* Subtitle */}

      <p
        className="
          mt-6
          px-3
          text-base
          leading-8

          lg:mt-8
          lg:px-0
          lg:text-lg
          lg:leading-9
          text-[#666]
          max-w-8xl
          mx-auto
        "
      >
        Every offering has been thoughtfully created to
        meet you at a different stage of your inner
        journey—from gaining clarity in the present
        moment to embracing profound and lasting
        transformation.
      </p>

      {/* Bottom Divider */}

      <div
        className="
          mt-12
          flex
          items-center
          justify-center
          gap-6 lg:gap-171
        "
      >

        <div
          className="
            h-px
            w-16 lg:w-52
            bg-gradient-to-r
            from-transparent
            via-[#D8B56A]
            to-[#D8B56A]
          "
        />

        <div
          className="
            h-px
            w-16 lg:w-52
            bg-gradient-to-l
            from-transparent
            via-[#D8B56A]
            to-[#D8B56A]
          "
        />

      </div>

      <div className="h-[8px]" />

    </div>
  );
}