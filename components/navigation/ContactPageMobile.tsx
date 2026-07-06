"use client";

import Image from "next/image";
import {
  Phone,
  Mail,
} from "lucide-react";
import EarthenPots from "../hero/EarthenPots";
import TulsiPlant from "../hero/TulsiPlant";
import GroundLayer from "../hero/GroundLayer";
import BackgroundGlow from "../hero/BackgroundGlow";
import MobileMenu from "@/components/navigation/MobileMenu";

export default function ContactPageMobile() {
  return (
    <section
        className="
            relative
            min-h-screen
            px-6
            pt-28
            pb-16
            bg-[#FCFAF6]
            overflow-hidden
        "
        >
            
      {/* Heading */}

      <h1
        className="
          text-center

          font-[var(--font-heading)]
          text-[52px]

          text-[#2E2E2E]
          -translate-y-1
        "
      >
        Contact
      </h1>

      <div className="h-[5px]" />

      <p
        className="
          mt-5

          text-center

          text-[17px]
          leading-8

          text-[#666]
        "
      >
        Stay connected with us through your preferred platform.
      </p>

      <div className="h-[20px]" />

      {/* Contact Cards */}

      <div className="mt-12 space-y-4">

        <ContactRow
          href="tel:+919004900777"
          icon={<Phone size={22} className="text-[#4F8F5C]" />}
          text="+91 9004900777"
          
        />
        <div className="h-[20px]" />

        <ContactRow
          href="mailto:tulsiguidance777@gmail.com"
          icon={<Mail size={22} className="text-[#4C8CBF]" />}
          text="tulsiguidance777@gmail.com"
        />
        <div className="h-[20px]" />

        <ContactRow
          href="https://wa.link/fxk5wj"
          icon={
            <Image
              src="/hero/elements/w.png"
              alt=""
              width={28}
              height={28}
            />
          }
          text="WhatsApp Personal Chat"
        />
        <div className="h-[20px]" />

        <ContactRow
          href="https://chat.whatsapp.com/Ej2by0I0OIy49dsh2arAQd?mode=wwcs"
          icon={
            <Image
              src="/hero/elements/w.png"
              alt=""
              width={28}
              height={28}
            />
          }
          text="WhatsApp Group"
        />
        <div className="h-[20px]" />

        <ContactRow
          href="https://www.instagram.com/tulsiguidance/"
          icon={
            <Image
              src="/hero/elements/i.png"
              alt=""
              width={28}
              height={28}
            />
          }
          text="Instagram"
          blank
        />
        <div className="h-[20px]" />

        <ContactRow
          href="https://www.youtube.com/@tulsiguidance-vrindaspeaks6809"
          icon={
            <Image
              src="/hero/elements/y.png"
              alt=""
              width={28}
              height={28}
            />
          }
          text="YouTube"
          blank
        />
        <div className="h-[20px]" />

        <ContactRow
          href="https://www.facebook.com/tulsiguidance/"
          icon={
            <Image
              src="/hero/elements/f.png"
              alt=""
              width={28}
              height={28}
            />
          }
          text="Facebook"
          blank
        />
        <div className="h-[20px]" />

        <ContactRow
          href="https://www.linkedin.com/in/tulsi-guidance-vrinda-speaks-154102270/"
          icon={
            <Image
              src="/hero/elements/l.png"
              alt=""
              width={28}
              height={28}
            />
          }
          text="LinkedIn"
          blank
        />
        <div className="h-[20px]" />

      </div>

      {/* Peacock */}

      <div className="mt-14 flex justify-center">

        <Image
          src="/hero/elements/p-1.png"
          alt="Peacock"
          width={220}
          height={285}
          className="object-contain translate-y-26"
        />

      </div>
        <div
        className="absolute bottom-4 left-0"
        style={{ transform: "scale(0.55)", transformOrigin: "bottom left" }}
        >
        <EarthenPots />
        </div>

        <div
        className="absolute bottom-4 right-0"
        style={{ transform: "scale(0.65)", transformOrigin: "bottom right" }}
        >
        <TulsiPlant />
        </div>

        <GroundLayer />



    </section>

    



    
  );
}

function ContactRow({
  href,
  icon,
  text,
  blank = false,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  blank?: boolean;
}) {
  return (
    <a
      href={href}
      target={blank ? "_blank" : undefined}
      rel={blank ? "noopener noreferrer" : undefined}
      className="
        flex
        items-center
        gap-5

        rounded-2xl

        border
        border-[#D7B46A]/25

        bg-white/70
        backdrop-blur-xl

        px-5
        py-4

        shadow-md

        transition-all
        duration-300

        hover:shadow-lg
      "
      style={{ paddingLeft: "10px"}}
    >
      {icon}

      <span
        className="
          text-[17px]
          font-medium
          h-[38px]
          translate-y-2

          bg-gradient-to-r
          from-[#4F8F5C]
          via-[#4C8CBF]
          to-[#D7B46A]

          bg-clip-text
          text-transparent
        "
      >
        {text}
      </span>
    </a>
  );
}