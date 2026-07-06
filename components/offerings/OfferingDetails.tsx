interface OfferingDetailsProps {
  title: string;
  purpose: string;
  process: string[];
  inclusions: string[];
  duration: string;
  investment: string;
}

export default function OfferingDetails({
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
        mt-14

        rounded-[36px]

        border
        border-[#E7DFD2]

        bg-white

        p-10
        md:p-14

        shadow-[0_12px_40px_rgba(0,0,0,0.05)]
      "
    >
      {/* Title */}

      <h3
        className="
          font-[var(--font-heading)]
          text-4xl
          text-[#2E2E2E]
        "
      >
        {title}
      </h3>

      {/* Purpose */}

      <div className="mt-10">

        <h4
          className="
            text-sm
            uppercase
            tracking-[0.35em]
            text-[#4F8F5C]
          "
        >
          Purpose
        </h4>

        <p
          className="
            mt-4
            leading-8
            text-[#555]
          "
        >
          {purpose}
        </p>

      </div>

      {/* Process */}

      <div className="mt-12">

        <h4
          className="
            text-sm
            uppercase
            tracking-[0.35em]
            text-[#4F8F5C]
          "
        >
          Process
        </h4>

        <ul className="mt-5 space-y-4">

          {process.map((step) => (

            <li
              key={step}
              className="
                flex
                gap-4
              "
            >
              <span className="mt-[8px] h-2 w-2 rounded-full bg-[#4F8F5C]" />

              <span className="leading-7 text-[#555]">
                {step}
              </span>

            </li>

          ))}

        </ul>

      </div>

      {/* Inclusions */}

      <div className="mt-12">

        <h4
          className="
            text-sm
            uppercase
            tracking-[0.35em]
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

                px-5
                py-2

                text-sm

                text-[#4F8F5C]
              "
            >
              {item}
            </span>

          ))}
        </div>

      </div>

      {/* Bottom Summary */}

      <div
        className="
          mt-14

          flex
          flex-wrap
          justify-between

          gap-8

          border-t
          border-[#EFE9DD]

          pt-8
        "
      >
        <div>

          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#888]
            "
          >
            Duration
          </p>

          <p
            className="
              mt-2
              text-xl
              font-semibold
            "
          >
            {duration}
          </p>

        </div>

        <div>

          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#888]
            "
          >
            Investment
          </p>

          <p
            className="
              mt-2
              text-xl
              font-semibold
            "
          >
            {investment}
          </p>

        </div>

      </div>
    </div>
  );
}
