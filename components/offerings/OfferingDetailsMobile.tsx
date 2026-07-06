"use client";

interface OfferingDetailsProps {
  title: string;
  purpose: string;
  process: string[];
  inclusions: string[];
  duration: string;
  investment: string;
}

export default function OfferingDetailsMobile({
  title,
  purpose,
  process,
  inclusions,
  duration,
  investment,
}: OfferingDetailsProps) {
  return (
    <div
      className="
        mt-10
        rounded-[28px]
        border
        border-[#E7DFD2]
        bg-white
        px-5
        py-6
        shadow-[0_10px_30px_rgba(0,0,0,.05)]
      "
    >
      {/* Title */}

      <h3
        className="
          font-[var(--font-heading)]
          text-[34px]
          leading-[1.15]
          max-w-[260px]
          mx-auto
          text-[#2E2E2E]
          text-center
        "
      >
        {title}
      </h3>

      {/* Purpose */}

      <div className="mt-8">

        <h4
          className="
            text-xs
            uppercase
            tracking-[0.30em]
            text-[#4F8F5C]
          "
        >
          Purpose
        </h4>

        <p
          className="
            mt-4
            text-[15px]
            leading-8
            text-justify
            text-[#555]
          "
        >
          {purpose}
        </p>

      </div>

      {/* Process */}

      <div className="mt-8">

        <h4
          className="
            text-xs
            uppercase
            tracking-[0.30em]
            text-[#4F8F5C]
          "
        >
          Process
        </h4>

        <ul className="mt-5 space-y-5">

          {process.map((step) => (

            <li
              key={step}
              className="flex items-start gap-3"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-[#4F8F5C]" />

              <span
                className="
                  flex-1
                  text-[15px]
                  leading-8
                  text-[#555]
                "
              >
                {step}
              </span>

            </li>

          ))}

        </ul>

      </div>

      {/* Included */}

      <div className="mt-8">

        <h4
          className="
            text-xs
            uppercase
            tracking-[0.30em]
            text-[#4F8F5C]
          "
        >
          What's Included
        </h4>

        <div
          className="
            mt-5
            flex
            flex-wrap
            justify-center
            gap-3
          "
        >
          {inclusions.map((item) => (

            <span
              key={item}
              className="
                rounded-full
                bg-[#F7FBF7]
                border
                border-[#DDEBDF]
                px-4
                py-2.5
                text-[13px]
                font-medium
                text-[#4F8F5C]
              "
            >
              {item}
            </span>

          ))}
        </div>

      </div>

      {/* Bottom */}

      <div
        className="
          mt-10
          border-t
          border-[#EFE9DD]
          pt-6

          flex
          flex-col
          items-center
          gap-8
          text-center
        "
      >
        <div>

          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.25em]
              text-[#888]
            "
          >
            Duration
          </p>

          <p
            className="
              mt-2
              text-[22px]
              font-semibold
              text-[#2E2E2E]
            "
          >
            {duration}
          </p>

        </div>

        <div>

          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.25em]
              text-[#888]
            "
          >
            Investment
          </p>

          <p
            className="
              mt-2
              text-[22px]
              font-semibold
              text-[#2E2E2E]
            "
          >
            {investment}
          </p>

          <div className="mt-10">
            <button
              className="
                w-full
                h-14
                rounded-full
                bg-gradient-to-r
                from-[#4F8F5C]
                via-[#4C8CBF]
                to-[#D7B46A]
                text-white
                text-[17px]
                font-semibold
              "
            >
              Book This Session
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}