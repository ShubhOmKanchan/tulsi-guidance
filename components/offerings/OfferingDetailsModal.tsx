"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";

interface OfferingDetailsModalProps {
  open: boolean;
  image: string;
  onClose: () => void;
}

export default function OfferingDetailsModal({
  open,
  image,
  onClose,
}: OfferingDetailsModalProps) {
  useEffect(() => {
    if (open) {
      document.body.classList.add("offering-modal-open");
    } else {
      document.body.classList.remove("offering-modal-open");
    }

    return () => {
      document.body.classList.remove("offering-modal-open");
    };
  }, [open]);
  if (!open) return null;

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className="
          fixed
          inset-0
          z-[9998]
          bg-black/55
          backdrop-blur-sm
        "
      />

      {/* Modal */}

      <div
        className="
          fixed
          inset-0
          z-[9999]

          flex
          items-start
          justify-center

          overflow-y-auto

          pt-8
          pb-8
          px-4
        "
      >
        <div className="relative">

          <button
            onClick={onClose}
            className="
            absolute
            top-2
            right-1

            lg:top-3
            lg:right-2

            flex
            items-center
            justify-center

            h-10
            w-10

            lg:h-12
            lg:w-12
            z-20
            translate-y-8
            lg:translate-y-10
            "
          >
            <X className="h-4 w-4 lg:h-6 lg:w-6" />
          </button>

          <Image
            src={image}
            alt=""
            width={1200}
            height={2200}
            className="
              h-auto
              translate-y-10

              w-[92vw]
              max-w-[420px]

              lg:w-auto
              lg:max-w-[1100px]

              max-h-[90vh]
              object-contain
            "
          />

        </div>
      </div>
    </>
  );
}