"use client";

import Link from "next/link";
import { useState } from "react";
import ContactPopover from "./ContactPopover";
import {
  House,
  Sparkles,
  Layers3,
  BookOpen,
  Mail,
} from "lucide-react";

interface NavigationButtonProps {
  label: string;
  href: string;
  showLabel?: boolean;
  variant?: "horizontal" | "vertical";
}

const iconMap = {
  Home: House,
  Philosophy: Sparkles,
  Offerings: Layers3,
  Reflections: BookOpen,
  Contact: Mail,
};

export default function NavigationButton({
  label,
  href,
  showLabel = true,
  variant = "vertical",
}: NavigationButtonProps) {
  const Icon =
    iconMap[label as keyof typeof iconMap] ?? Sparkles;

  const [showContact, setShowContact] = useState(false);

  const isContact = label === "Contact";

  /* ---------------- HORIZONTAL ---------------- */

  if (variant === "horizontal") {

    // Normal navigation buttons
    if (!isContact) {
      return (
        <Link
          href={href}
          className="
            group
            flex
            items-center
            h-14
            w-14
            overflow-hidden
            rounded-full
            transition-all
            duration-500
            hover:w-[170px]
          "
          style={{
            background:
              "linear-gradient(135deg,#4F8F5C,#4C8CBF,#D7B46A)",
            boxShadow:
              "0 12px 30px rgba(76,140,191,.18)",
          }}
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center">
            <Icon size={22} color="white" />
          </div>

          <span
            className="
              whitespace-nowrap
              text-white
              text-[20px]
              font-medium
              opacity-0
              transition-all
              duration-300
              group-hover:opacity-100
            "
          >
            {label}
          </span>
        </Link>
      );
    }

    // Contact button
    return (
      <div
        className="relative"
        onMouseEnter={() => setShowContact(true)}
        onMouseLeave={() => setShowContact(false)}
      >
        <button
          type="button"
          className="
            group
            flex
            items-center
            h-14
            w-14
            overflow-hidden
            rounded-full
            transition-all
            duration-500
            hover:w-[170px]
          "
          style={{
            background:
              "linear-gradient(135deg,#4F8F5C,#4C8CBF,#D7B46A)",
            boxShadow:
              "0 12px 30px rgba(76,140,191,.18)",
          }}
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center">
            <Icon size={22} color="white" />
          </div>

          <span
            className="
              whitespace-nowrap
              text-white
              text-[20px]
              font-medium
              opacity-0
              transition-all
              duration-300
              group-hover:opacity-100
            "
          >
            Contact
          </span>
        </button>

        {showContact && (
          <ContactPopover direction="horizontal" />
        )}
      </div>
    );
  }

  /* ---------------- VERTICAL ---------------- */

  return (
    <Link
      href={href}
      className="
        group
        flex
        flex-col
        items-center
        w-[64px]
        transition-all
        duration-500
      "
    >
      <div
        className="
          relative
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-white/25
          backdrop-blur-xl
          transition-all
          duration-500
          group-hover:scale-110
        "
        style={{
          background:
            "linear-gradient(135deg,#4F8F5C,#4C8CBF,#D7B46A)",
          boxShadow:
            "0 12px 30px rgba(76,140,191,.18)",
        }}
      >
        <span className="absolute inset-0 rounded-full bg-white/10" />

        <Icon
          size={22}
          color="white"
          className="relative z-10"
        />
      </div>

      {showLabel && (
        <span
          className="
            mt-3
            text-[12px]
            font-medium
            tracking-[0.12em]
            text-[#2E2E2E]
            whitespace-nowrap
            opacity-0
            translate-y-2
            transition-all
            duration-300
            group-hover:opacity-100
            group-hover:translate-y-0
          "
        >
          {label}
        </span>
      )}
    </Link>
  );
}