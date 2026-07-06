"use client";

import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";
import PersonalisedJourneyCTA from "./PersonalisedJourneyCTA";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden

        pt-4
        pb-12

      "
    >
      <div
        className="
          relative
          z-10

          mx-auto
          max-w-7xl

          px-6
          lg:px-10
        "
      >
        <ServicesHeader />

        {/* Services Grid */}

        <ServicesGrid />

        <div className="h-[30px]" />

        <div className="mt-14 flex justify-center">
        <PersonalisedJourneyCTA />
        </div>
      </div>
    </section>
  );
}