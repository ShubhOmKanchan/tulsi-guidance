"use client";

import Link from "next/link";
import Image from "next/image";
import { PhoneCall, Menu } from "lucide-react";
import Container from "@/components/layout/Container";
import MobileMenu from "@/components/navigation/MobileMenu";
import { useState } from "react";
import CallbackModal from "@/components/callback/CallbackModal";
import CallbackForm from "@/components/callback/CallbackForm";
import NavbarContactPopover from "@/components/layout/NavbarContactPopover";
import FloatingNavigation from "@/components/navigation/FloatingNavigation";

const navItems = [
  { name: "Philosophy", href: "/philosophy" },
  { name: "Offerings", href: "/offerings" },
  { name: "Reflections", href: "/stories" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [pinContact, setPinContact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header
        className="
            hidden
            lg:block
            fixed
            inset-x-0
            top-0
            h-25
            z-50

            bg-[#FCFAF6]/75
            backdrop-blur-xl
            border-b
            border-stone-200/40


            lg:bg-transparent
            lg:backdrop-blur-none
            lg:border-b-0
            "
        >
      <Container>
        <nav className="flex h-28 items-center justify-between pt-4 px-4 sm:px-8 md:px-12">

            <div className="lg:hidden">
            <FloatingNavigation page="home" />
            </div>

          {/* Logo */}

          {/* Logo */}

            <Link
                href="/"
                className="
                group
                flex
                items-center

                translate-x-0

                sm:translate-x-4
                md:translate-x-8
                lg:translate-x-20
                "
            >
            <Image
              src="/images/logos/LogoM.png"
              alt="Tulsi Guidance"
              width={180}
              height={180}
              priority
              className="
                h-16
                w-auto

                object-contain

                transition-all
                duration-500

                group-hover:scale-105

                sm:h-20
                md:h-24
                lg:h-28
                "
            />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="
                flex
                lg:hidden
                items-center
                justify-center
                h-12
                w-12
                rounded-full
                bg-white/80
                backdrop-blur-md
                shadow-md
            "
            >
            <Menu className="h-6 w-6 text-stone-700" />
            </button>

          {/* Navigation */}

          <div className="hidden lg:flex items-center gap-14">

            {navItems.map((item) =>

                item.name === "Contact" ? (

                <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setShowContact(true)}
                    onMouseLeave={() => !pinContact && setShowContact(false)}
                >
                    <button
                    type="button"
                    onClick={() => setPinContact(!pinContact)}
                    className="
                        relative
                        text-[27px]
                        font-light
                        tracking-[0.04em]
                        text-stone-700
                        transition-all
                        duration-300
                        hover:text-[var(--primary)]
                        after:absolute
                        after:left-0
                        after:-bottom-2
                        after:h-[1.5px]
                        after:w-0
                        after:bg-[var(--primary)]
                        after:transition-all
                        after:duration-300
                        hover:after:w-full
                    "
                    >
                    Contact
                    </button>

                    {(showContact || pinContact) && (
                    <NavbarContactPopover direction="horizontal" />
                    )}

                </div>

                ) : (

                <Link
                    key={item.name}
                    href={item.href}
                    className="
                    relative
                    text-[27px]
                    font-light
                    tracking-[0.04em]
                    text-stone-700
                    transition-all
                    duration-300
                    hover:text-[var(--primary)]
                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[1.5px]
                    after:w-0
                    after:bg-[var(--primary)]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                    "
                >
                    {item.name}
                </Link>

                )

            )}

            </div>

          {/* CTA */}

            <button
            type="button"
            onClick={() => setOpen(true)}
            className="
                group
                hidden
                lg:flex
                relative
                h-20
                w-20
                hover:w-60
                items-center
                justify-center
                rounded-full
                overflow-hidden
                transition-all
                duration-500
                ease-out
                bg-gradient-to-br
                from-[#56B870]
                via-[#2D8C78]
                to-[#1E73A5]
                shadow-lg
                shadow-emerald-300/30
                hover:shadow-[0_0_35px_rgba(70,170,140,0.45)]
            "
            >

            {/* Glow */}

            <div
                className="
                absolute
                inset-0
                bg-gradient-to-br
                from-white/20
                via-transparent
                to-transparent
                rounded-full
                "
            />

            {/* Ripple */}

            <div
                className="
                absolute
                inset-0
                rounded-full
                border
                border-white/20
                transition-all
                duration-500
                group-hover:scale-125
                group-hover:opacity-0
                "
            />

            {/* Icon */}

            <div
                className="
                absolute
                left-5
                flex
                items-center
                justify-center
                h-10
                w-10
                text-white
                text-xl
                transition-transform
                duration-300
                group-hover:rotate-12
                "
            >
                ✦
            </div>

            {/* Text */}

            <span
                className="
                absolute
                left-14
                whitespace-nowrap
                opacity-0
                translate-x-3
                transition-all
                duration-300
                delay-100
                group-hover:opacity-100
                group-hover:translate-x-0
                text-white
                font-medium
                tracking-wide
                text-[18px]
                "
            >
                Get a Callback
            </span>

            {/* Arrow */}

            <PhoneCall
                className="
                    phone-ring
                    absolute
                    right-6
                    h-5
                    w-5
                    text-white
                    opacity-0
                    scale-75
                    transition-all
                    duration-300
                    delay-150
                    group-hover:opacity-100
                    group-hover:scale-100
                    group-hover:translate-x-1
                "
            />

            </button>
            <CallbackModal
            open={open}
            onClose={() => setOpen(false)}
            >
            <CallbackForm />
            </CallbackModal>
        </nav>
      </Container>
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onCallback={() => setOpen(true)}
        currentPage="Home"
        />
    </header>
  );
}