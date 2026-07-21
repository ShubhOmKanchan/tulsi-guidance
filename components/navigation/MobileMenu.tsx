"use client";

import Link from "next/link";
import { X, PhoneCall } from "lucide-react";
import Image from "next/image";
import Bf1 from "../Journey/b1";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  onCallback: () => void;
  currentPage?: string;
};

const navItems = [
  { name: "Home", href: "/" },
  { name: "Philosophy", href: "/philosophy" },
  { name: "Offerings", href: "/offerings" },
  { name: "Stories", href: "/stories" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu({
  open,
  onClose,
  onCallback,
  currentPage,
}: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-[90]
          bg-black/40
          backdrop-blur-sm
          transition-opacity duration-300
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* Drawer */}

      <aside
        className={`
          fixed
          top-0
          right-0
          z-[100]
          h-screen
          w-[86%]
          max-w-[360px]
          bg-[#FCFAF6]
          shadow-2xl
          transition-transform
          duration-300
          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <div className="flex h-full flex-col">
            <Image
                src="/images/logos/LogoM.png"
                alt=""
                width={340}
                height={340}
                className="
                    absolute
                    inset-0
                    m-auto

                    opacity-[0.2]

                    pointer-events-none
                    select-none
                "
                style={{paddingTop:"70px"}}
                />

                <Bf1 />

          {/* Header */}

          <div className="flex items-center justify-between px-6 py-6" style={{paddingTop:"15px",paddingLeft:"15px"}}>


            <button
              onClick={onClose}
              className="
                rounded-full
                p-2
                transition
                hover:bg-stone-100
              "
              style={{paddingLeft:"221px"}}
            >
              <X className="h-9 w-9 text-stone-700" />
            </button>

          </div>

          {/* Navigation */}

          <nav
            className="
              flex
              flex-1
              flex-col
              px-8
              pt-12
            "
            style={{paddingTop:"10px"}}
          >
            {navItems
              .filter((item) => item.name !== currentPage)
              .map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="
                    group
                    py-7
                    text-[27px]
                    font-light
                    tracking-wide
                    text-stone-700
                    transition-colors
                    hover:text-[#2E2E2E]
                  "
                >
                  <span className="relative inline-block" style={{paddingTop:"15px",paddingLeft:"15px"}}>

                    {item.name}

                    <span
                      className="
                        absolute
                        left-0
                        -bottom-2
                        h-[2px]
                        w-0

                        bg-gradient-to-r
                        from-[#4F8F5C]
                        via-[#4C8CBF]
                        to-[#D7B46A]

                        transition-all
                        duration-500

                        group-hover:w-full
                      "
                    />

                  </span>

                </Link>
              ))}
          </nav>

          {/* Callback */}

          <div className="pb-10 flex justify-center" style={{paddingBottom:"45px"}}>

            <button
              onClick={() => {
                onClose();
                onCallback();
              }}
              className="
                group
                flex
                flex-col
                items-center
              "
            >

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full

                  bg-gradient-to-br
                  from-[#56B870]
                  via-[#2D8C78]
                  to-[#1E73A5]

                  shadow-xl

                  transition-all
                  duration-300

                  group-hover:scale-110
                "
              >
                <PhoneCall
                  className="h-7 w-7 text-white"
                />
              </div>

              <span
                className="
                  mt-3
                  text-sm
                  font-medium
                  text-stone-700

                  opacity-0
                  translate-y-2

                  transition-all
                  duration-300

                  group-hover:opacity-100
                  group-hover:translate-y-0
                "
              >
                Get a Callback
              </span>

            </button>

          </div>

        </div>
      </aside>
    </>
  );
}