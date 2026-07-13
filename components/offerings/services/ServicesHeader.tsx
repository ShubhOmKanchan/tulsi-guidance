export default function ServicesHeader() {
  return (
    <div
      className="
        mx-auto
        max-w-8xl
        text-center
      "
    >

      {/* Eyebrow */}

      <p
        className="
          uppercase
          tracking-[0.45em]
          text-[#4F8F5C]
          text-sm
          font-medium
        "
      >
        COMPLETE OFFERINGS
      </p>

      {/* Heading */}

       <h2
        className="
          font-[var(--font-heading)]
          text-5xl
          md:text-4xl
          leading-tight
          text-[#2E2E2E]
        "
      >
        Every Journey Is Personal
      </h2>

      {/* Description */}

      <p
        className="
          mt-8
          text-lg
          leading-9
          text-[#666]
          max-w-8xl
          mx-auto
        "
      >
        Every individual arrives with a unique story, life experience and personal circumstances. These one-to-one engagements support clarity, awareness and inner alignment through thoughtful companioning during important life transitions.
      </p>
      <div className="h-[30px]" />

    </div>
  );
}