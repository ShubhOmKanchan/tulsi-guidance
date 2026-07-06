"use client";

import { useState } from "react";

import OfferingsBackground from "./OfferingsBackground";
import OfferingsHeader from "./OfferingsHeader";
import OfferingsShowcase from "./OfferingsShowcase";
import OfferingsShowcaseMobile from "./OfferingsShowcaseMobile";
import ServicesSection from "./services/ServicesSection";


import { offerings } from "./offeringsData";

export default function OfferingsSection() {

  const [selectedOffering, setSelectedOffering] = useState(offerings[0]);

  return (

    <section
      id="offerings"
      className="
        relative
        overflow-hidden

        bg-white

        pt-20
        pb-12

        lg:pt-16
        lg:pb-8
      "
    >

      {/* Background */}

      <OfferingsBackground />

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-7xl

          px-5
          sm:px-6
          lg:px-10
        "
      >

        {/* Heading */}

        <OfferingsHeader />

        {/* Cards */}

        <div
          className="mt-6"
          onClick={(e) => {

            /**
             * Placeholder.
             * Tomorrow we'll connect each card to
             * setSelectedOffering().
             */

          }}
        >

          <div className="mt-8 lg:mt-0">
              <div className="block lg:hidden">
                <OfferingsShowcaseMobile />
              </div>

              <div className="hidden lg:block">
                <OfferingsShowcase />
              </div>
          </div>

          <div className="mt-16 lg:mt-8">
            <ServicesSection />
          </div>

        </div>


      </div>

    </section>

  );

}