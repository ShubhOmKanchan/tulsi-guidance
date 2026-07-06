"use client";

import { offerings } from "./offeringsData";
import OfferingCardMobile from "./OfferingCardMobile";
import { useState } from "react";
import OfferingDetailsModal from "./OfferingDetailsModal";

export default function OfferingsShowcaseMobile() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <>
        <div className="space-y-10">
        {offerings.map((offering) => (
            <OfferingCardMobile
            key={offering.id}
            offering={offering}
            onKnowMore={setSelectedImage}
            />
        ))}
        </div>

        <OfferingDetailsModal
        open={selectedImage !== null}
        image={selectedImage ?? ""}
        onClose={() => setSelectedImage(null)}
        />
    </>
    );
}