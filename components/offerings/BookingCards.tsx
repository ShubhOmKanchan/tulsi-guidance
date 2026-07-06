import BookingCard from "./BookingCard";

export default function BookingCards() {
  return (
    <section className="mt-32">

      {/* Section Header */}

      <div className="mb-16 text-center">

        <p
          className="
            text-sm
            uppercase
            tracking-[0.45em]
            text-[#4F8F5C]
          "
        >
          Begin Your Journey
        </p>

        <h2
          className="
            mt-5

            font-[var(--font-heading)]

            text-5xl
            md:text-6xl

            leading-tight

            text-[#2E2E2E]
          "
        >
          How Would You Like
          <br />
          To Connect?
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl

            text-lg
            leading-8

            text-[#666]
          "
        >
          Whether you're ready to begin, have a few questions,
          or wish to explore a personalised journey, choose the
          path that feels right for you.
        </p>

      </div>

      {/* Cards */}

      <div
        className="
          grid
          gap-8

          lg:grid-cols-3
        "
      >

        <BookingCard
          icon="calendar"
          title="Book an Individual Session"
          description="Reserve a one-to-one session and begin your journey toward greater clarity and emotional wellbeing."
          button="Book Session"
        />

        <BookingCard
          icon="message"
          title="Enquire About Sessions"
          description="Have questions before committing? Reach out and we'll help you understand which offering is right for you."
          button="Send an Enquiry"
        />

        <BookingCard
          icon="sparkles"
          title="Create a Personalised Journey"
          description="Looking for something tailored? Let's design a transformative journey around your unique needs."
          button="Let's Talk"
        />

      </div>

    </section>
  );
}