"use client";

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";
import CallbackFormMobile from "./CallbackFormMobile";
import CallbackForm from "./CallbackForm";

interface CallbackModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function CallbackModal({
  open,
  onClose,
  children,
}: CallbackModalProps) {

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}

      <div
        onClick={onClose}
        className="
          fixed
          inset-0
          z-[99999]
          pb-10

          bg-black/25
          backdrop-blur-md
        "
      />

      {/* Modal */}

      <div
        className="
          fixed

          left-1/2
            top-4
            -translate-x-1/2
            translate-y-0

            lg:left-170
            lg:top-80
            lg:-translate-y-1/2

            lg:left-170
            lg:top-80

          z-[100000]

          w-[92vw]
          max-w-[680px]
          h-[90vh]

          lg:h-[550px]

          -translate-x-1/2

          rounded-3xl

          lg:rounded-[34px]

          border
          border-white/40

          shadow-[0_30px_90px_rgba(0,0,0,.18)]

          backdrop-blur-3xl

          overflow-y-scroll
          overflow-x-hidden
        "
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,.84), rgba(248,245,239,.88))",
        }}
      >

        {/* Decorative Glow */}

        <div
          className="
            absolute
            inset-0

            rounded-[34px]

            pointer-events-none

            opacity-70
          "
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(79,143,92,.10), transparent 32%), radial-gradient(circle at 80% 25%, rgba(76,140,191,.10), transparent 32%), radial-gradient(circle at 50% 100%, rgba(215,180,106,.12), transparent 45%)",
          }}
        />

        {/* Close */}

        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            top-7
            right-7

            z-20

            flex
            items-center
            justify-center

            h-10
            w-10

            rounded-full

            transition-all
            duration-300

            hover:bg-black/5
          "
        >
          <X
            size={28}
            color="#555"
          />
        </button>

        {/* Content */}

        <div
            className="
                relative
                z-10
                px-5
                pt-20
                pb-8
                sm:px-8
                lg:px-12
                lg:pt-8
                lg:pb-8
            "
            >
          <div className="block lg:hidden">
            <CallbackFormMobile />
            </div>

            <div className="hidden lg:block">
            <CallbackForm />
            </div>
        </div>

      </div>
    </>
  );
}