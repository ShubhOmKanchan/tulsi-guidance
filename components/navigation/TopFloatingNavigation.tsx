"use client";

import { useState, useEffect } from "react";

import NavigationButton from "./NavigationButton";
import CallbackCTA from "./CallbackCTA";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

import CallbackModal from "@/components/callback/CallbackModal";
import CallbackForm from "@/components/callback/CallbackForm";

import {
  navigationConfig,
  type NavigationPage,
} from "./navigationData";

interface FloatingNavigationProps {
  page: NavigationPage;
  isModalOpen?: boolean;
}

export default function FloatingNavigation({
  page,
  isModalOpen = false,
}: FloatingNavigationProps) {

  const config = navigationConfig[page];
  const isTop = config.position === "top";
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  return (
  <>
    <nav
        className="
            hidden
            lg:block
            fixed
            top-8
            left-1/2
            -translate-x-1/2
            z-[9999]
        "
        >
      <div
        className={`
          flex
          ${
            isTop
              ? "flex-row items-center gap-50"
              : "flex-col items-end gap-5"
          }
        `}
      >
        {config.links.map((item) => (
          <NavigationButton
            key={item.label}
            label={item.label}
            href={item.href}
            showLabel={!isTop}
            variant={isTop ? "horizontal" : "vertical"}
          />
        ))}

        <CallbackCTA
          direction={config.callbackDirection}
          onOpen={() => setOpen(true)}
        />
      </div>
    </nav>

    <CallbackModal
      open={open}
      onClose={() => setOpen(false)}
    >
      <CallbackForm />
    </CallbackModal>
  </>
);}