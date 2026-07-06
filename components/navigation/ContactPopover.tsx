"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";

interface ContactPopoverProps {
  direction?: "horizontal" | "vertical";
}

export default function ContactPopover({
  direction = "horizontal",
}: ContactPopoverProps) {
  return (
    <div
      className={`
        absolute
        ${direction === "horizontal" ? "top-16 right-0" : "left-16 top-0"}

        w-[660px]
        h-[410px]

        rounded-[28px]

        border
        border-[#D7B46A]/30

        backdrop-blur-xl
        p-6
      `}
      style={{
        background:
          "linear-gradient(145deg,#FFFDFC 0%, #FDF5EA 40%, #F8E7C7 75%, #F2D8A3 100%)",
        boxShadow: "0 28px 70px rgba(110,90,45,.15)",
      }}
    >
      <div
        className="flex justify-between items-center"
        style={{ paddingLeft: "30px", paddingTop: "20px" }}
      >
        <div className="space-y-5">

          <ContactRow
            href="tel:+919004900777"
            icon={
                <div className="iconPulse" style={{ animationDelay: "0s" }}>
                    <Phone size={25} className="text-[#4F8F5C]" />
                </div>
                }
            text="+91 9004900777"
          />

          <div className="h-[12px]" />

          

          <ContactRow
            href="mailto:tulsiguidance777@gmail.com"
            icon={
                <div className="iconPulse" style={{ animationDelay: "3s" }}>
                    <Mail size={25} className="text-[#4C8CBF]" />
                </div>
                }
            text="tulsiguidance777@gmail.com"
          />

          <div className="h-[12px]" />

          <ContactRow
            href="https://wa.link/fxk5wj"
            icon={
                <div className="iconPulse" style={{ animationDelay: "6s" }}>
                    <Image
                    src="/hero/elements/w.png"
                    alt=""
                    width={34}
                    height={34}
                    />
                </div>
                }
            text="WhatsApp Personel Chat"
          />

          <div className="h-[12px]" />

          <ContactRow
            href="https://chat.whatsapp.com/Ej2by0I0OIy49dsh2arAQd?mode=wwcs"
            icon={
                <div className="iconPulse" style={{ animationDelay: "9s" }}>
                    <Image
                    src="/hero/elements/w.png"
                    alt=""
                    width={34}
                    height={34}
                    />
                </div>
                }
            text="WhatsApp Group"
          />

          <div className="h-[12px]" />

          <ContactRow
            href="https://www.instagram.com/tulsiguidance/"
            icon={
                <div className="iconPulse" style={{ animationDelay: "12s" }}>
                    <Image
                    src="/hero/elements/i.png"
                    alt=""
                    width={34}
                    height={34}
                    />
                </div>
                }
            text="Instagram"
            blank
          />

          <div className="h-[12px]" />

          <ContactRow
            href="https://www.youtube.com/@tulsiguidance-vrindaspeaks6809"
            icon={
                <div className="iconPulse" style={{ animationDelay: "15s" }}>
                    <Image
                    src="/hero/elements/y.png"
                    alt=""
                    width={34}
                    height={34}
                    />
                </div>
                }
            text="YouTube"
            blank
          />

          <div className="h-[12px]" />

          <ContactRow
            href="https://www.facebook.com/tulsiguidance/"
            icon={
                <div className="iconPulse" style={{ animationDelay: "18s" }}>
                    <Image
                    src="/hero/elements/f.png"
                    alt=""
                    width={34}
                    height={34}
                    />
                </div>
                }
            text="Facebook"
            blank
          />

          <div className="h-[12px]" />

          <ContactRow
            href="https://www.linkedin.com/in/tulsi-guidance-vrinda-speaks-154102270/"
            icon={
                <div className="iconPulse" style={{ animationDelay: "21s" }}>
                    <Image
                    src="/hero/elements/l.png"
                    alt=""
                    width={34}
                    height={34}
                    />
                </div>
                }
            text="LinkedIn"
            blank
          />

        </div>
        <div className="object-contain peacock">
        <Image
          src="/hero/elements/p-1.png"
          alt="Peacock"
          width={370}
          height={450}
          style={{ paddingTop: "30px", animationDelay: "15s"  }}
        />
        </div>
      </div>
    </div>
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
      className="flex items-center gap-4 group"
    >
      {icon}

      <span
        className="
          text-[24px]
          font-medium
          bg-gradient-to-r
          from-[#4F8F5C]
          via-[#4C8CBF]
          to-[#D7B46A]
          bg-clip-text
          text-transparent
          transition-opacity
          duration-300
          group-hover:opacity-80
        "
      >
        {text}
      </span>
    </a>
  );
}