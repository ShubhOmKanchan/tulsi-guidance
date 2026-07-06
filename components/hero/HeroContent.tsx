import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="relative z-30 mx-auto max-w-[620px] px-6 lg:mx-0 lg:px-0">

      {/* Welcome */}



      {/* Heading */}

      <h1
        className="
        font-serif
        text-5xl
        leading-[0.9]
        tracking-[-0.04em]
        text-stone-900
        sm:text-6xl
        md:text-7xl
        lg:text-[72px]
        xl:text-[96px]
        "
      >
        Tulsi
        <br />
        Guidance
      </h1>

      {/* Tagline */}

      <p
        className="
        mt-6
        max-w-[520px]
        text-lg
        leading-8
        text-stone-600
        font-light
        sm:text-xl
        lg:mt-8
        lg:text-[22px]
        lg:leading-10
        "
      >
        Compassionate guidance rooted in emotional healing,
        conscious awareness and inner transformation.
      </p>

      {/* Divider */}

      <div className="my-8 h-px w-24 bg-gradient-to-r from-[var(--primary)] to-transparent lg:my-10 lg:w-32" />

      {/* Statistics */}

      <div className="mb-12 flex flex-wrap gap-x-10 gap-y-6 lg:mb-24 lg:flex-nowrap lg:gap-16">

        <div>
          <h3 className="font-serif text-4xl text-[var(--primary)]">
            25+
          </h3>

          <p className="mt-2 text-xs uppercase tracking-[0.2em] lg:tracking-[0.35em] text-stone-500">
            Years of Experience
          </p>
        </div>

        <div>
          <h3 className="font-serif text-4xl text-[var(--primary)]">
            100+
          </h3>

          <p className="mt-2 text-xs uppercase tracking-[0.2em] lg:tracking-[0.35em] text-stone-500">
            Lives Guided
          </p>
        </div>

        <div>
          <h3 className="font-serif text-4xl text-[var(--primary)]">
            1 on 1
          </h3>

          <p className="mt-2 text-xs uppercase tracking-[0.2em] lg:tracking-[0.35em] text-stone-500">
            Sessions
          </p>
        </div>

      </div>

      <div className="h-4 lg:h-10" />

      {/* Buttons */}

      <div className="flex flex-col items-start gap-5 pt-6 sm:pt-8 lg:flex-row lg:items-center lg:gap-8 lg:pt-12">

        <Link
            href="/offerings"
            className="
                group
                relative
                inline-flex
                items-center
                justify-start
                overflow-hidden
                rounded-full
                bg-gradient-to-r
                from-[#5BAF7B]
                via-[#3D9D83]
                to-[#4C93D1]
                h-[54px]
                w-[220px]
                justify-center
                sm:w-auto
                sm:min-w-[210px]
                px-10
                lg:px-12
                font-medium
                tracking-[0.02em]
                text-[18px]
                font-semibold
                tracking-[0.01em]
                shadow-[0_18px_40px_rgba(56,133,103,0.22)]
                transition-all
                duration-500
                hover:-translate-y-[3px]
                hover:scale-[1.02]
                hover:shadow-[0_24px_55px_rgba(56,133,103,0.30)]
                hover:scale-[1.03]
                active:scale-[0.98]
            "
            style={{paddingLeft: "10px"}}
            >

            {/* Moving Light */}

            <span
                className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/25
                to-transparent
                transition-transform
                duration-1000
                group-hover:translate-x-full
                "
            />

            <span className="relative flex gap-3 items-center text-white font-semibold tracking-[0.01em]">

                Begin Your Journey

                <Sparkles
                    className="
                        h-5
                        w-5
                        transition-all
                        duration-500
                        group-hover:rotate-12
                        group-hover:scale-110
                    "
                />

            </span>

            </Link>

        <Link
            href="/journey"
            className="
                group
                relative
                inline-flex
                items-center
                text-base lg:text-[18px]
                font-medium
                text-stone-700
                transition-colors
                duration-300
                hover:text-[#2E6F58]
            "
            style={{paddingLeft: "10px"}}
            >

            <span className="relative">

                Explore Philosophy

                <span
                className="
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    w-0
                    bg-[#2E6F58]
                    transition-all
                    duration-500
                    group-hover:w-full
                "
                />

            </span>

            <span
                className="
                ml-3
                transition-transform
                duration-300
                group-hover:translate-x-2
                "
            >
                →
            </span>

            </Link>

      </div>

    </div>
  );
}