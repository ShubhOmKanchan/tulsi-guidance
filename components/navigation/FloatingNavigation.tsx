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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);

    useEffect(() => {
    const interval = setInterval(() => {
        setHideMenu(
        document.body.classList.contains("offering-modal-open")
        );
    }, 100);

    return () => clearInterval(interval);
    }, []);

  return (
  <>
    {!mobileOpen && !hideMenu && (
      <div
        className="
          fixed
          top-5
          right-5
          z-[999]
          lg:hidden
        "
      >
        <button
          onClick={() => setMobileOpen(true)}
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            shadow-xl
          "
          style={{
            background:
              "linear-gradient(135deg,#4F8F5C,#4C8CBF)",
          }}
        >
          <Menu className="h-7 w-7 text-white" />
        </button>
      </div>
    )}

    <nav
      className={`
        hidden
        lg:block
        fixed
        z-[999]
        ${
          isTop
            ? "top-8 left-1/2 -translate-x-1/2"
            : "top-1/2 left-3 -translate-y-1/2"
        }
      `}
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

    <MobileMenu
      open={mobileOpen}
      onClose={() => setMobileOpen(false)}
      onCallback={() => setOpen(true)}
      currentPage={
        page === "philosophy"
          ? "Philosophy"
          : page === "offerings"
          ? "Offerings"
          : page === "stories"
          ? "Stories"
          : page === "contact"
          ? "Contact"
          : page === "home"
          ? "Home"
          : ""
      }
    />

    <CallbackModal
      open={open}
      onClose={() => setOpen(false)}
    >
      <CallbackForm />
    </CallbackModal>
  </>
);}