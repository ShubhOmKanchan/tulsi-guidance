"use client";

import { X } from "lucide-react";
import { ReactNode, useEffect } from "react";

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
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handler);

    return () =>
      window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!open) return null;

  return (
    <>
      {/* Background */}

      <div
        onClick={onClose}
        className="
          fixed
          inset-0
          z-[9998]

          bg-black/30
          backdrop-blur-md

          animate-in
          fade-in
          duration-300
        "
      />

      {/* Modal */}

      <div
        className="
          fixed

          left-1/2
          top-1/2

          z-[9999]

          w-[92vw]
          max-w-[560px]

          -translate-x-1/2
          -translate-y-1/2

          overflow-hidden

          rounded-[34px]

          border
          border-white/35

          backdrop-blur-2xl

          shadow-[0_35px_90px_rgba(0,0,0,.18)]
        "
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,.72), rgba(248,245,239,.82))",
        }}
      >
        {/* Glow */}

        <div
          className="
            absolute
            inset-0
            opacity-60
            pointer-events-none
          "
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(79,143,92,.12), transparent 35%), radial-gradient(circle at 80% 25%, rgba(76,140,191,.12), transparent 35%), radial-gradient(circle at 50% 100%, rgba(215,180,106,.12), transparent 45%)",
          }}
        />

        {/* Close */}

        <button
          onClick={onClose}
          className="
            absolute
            right-6
            top-6

            flex
            h-10
            w-10

            items-center
            justify-center

            rounded-full

            transition-all
            duration-300

            hover:bg-black/5
          "
        >
          <X
            size={22}
            color="#555"
          />
        </button>

        {/* Content */}

        <div className="relative z-10 p-10">
          {children}
        </div>
      </div>
    </>
  );
}