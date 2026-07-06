import { offerings } from "./offeringsData";
import OfferingCard from "./OfferingCard";
import { useState } from "react";
import OfferingDetailsModal from "./OfferingDetailsModal";

export default function OfferingsShowcase() {
  const [selectedImage, setSelectedImage] =
  useState<string | null>(null);
  return (
    <div
        className="
          grid

          grid-cols-1
          gap-8

          md:grid-cols-2
          md:gap-10

          xl:grid-cols-3
        "
      >
      {offerings.map((offering) => (
        <OfferingCard
          key={offering.id}
          offering={offering}
          onKnowMore={setSelectedImage}
        />
      ))}
      <OfferingDetailsModal
        open={selectedImage !== null}
        image={selectedImage ?? ""}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}