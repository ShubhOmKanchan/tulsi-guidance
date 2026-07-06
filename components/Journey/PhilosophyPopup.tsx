"use client";

interface PhilosophyPopupProps {
  title: string;
  description: string;
  icon: React.ElementType;
  position: "top" | "bottom" | "left" | "right";
}

export default function PhilosophyPopup({
  title,
  description,
  icon: Icon,
  position,
}: PhilosophyPopupProps) {

  const popupStyle =
    position === "bottom"
      ? { marginTop: "40px" }
      : position === "top"
      ? { marginBottom: "28px" }
      : position === "left"
      ? { marginRight: "34px" }
      : { marginLeft: "42px" };

  const triangleStyle =
    position === "bottom"
      ? {
          top: "-10px",
          left: "42%",
        }
      : position === "top"
      ? {
          bottom: "-10px",
          left: "50%",
          transform: "translateX(-50%)",
        }
      : position === "left"
      ? {
          right: "-10px",
          top: "50%",
          transform: "translateY(-50%)",
        }
      : {
          left: "-10px",
          top: "42%",
        };

  return (
    <div
      className={`
        absolute
        z-50
        w-[320px]
        h-[146px]
        rounded-[24px]
        border border-[#D7B46A]/25
        backdrop-blur-xl
        p-6
        shadow-2xl
        philosophyPopup

        ${
          position === "bottom"
            ? "top-full left-1/2 -translate-x-1/2"
            : ""
        }

        ${
          position === "top"
            ? "bottom-full left-1/2 -translate-x-1/2"
            : ""
        }

        ${
          position === "left"
            ? "right-full top-1/2 -translate-y-1/3"
            : ""
        }

        ${
          position === "right"
            ? "left-full top-1/2 -translate-y-1/2"
            : ""
        }
      `}
      style={{
        ...popupStyle,
        background:
          "linear-gradient(145deg,#FFFDFC 0%, #FDF5EA 40%, #F8E7C7 75%, #F2D8A3 100%)",
        boxShadow: "0 28px 70px rgba(110,90,45,.15)",
      }}
    >
      <div className="relative h-full">

        {/* Background Icon */}

        <Icon
            size={146}
            className="
            absolute
            right-[83px]
            top-1/2
            -translate-y-1/2

            text-[#4F8F5C]
            opacity-[0.28]

            pointer-events-none
            "
        />

        {/* Text */}

        <p
            className="
            relative
            z-10

            text-[17px]
            leading-8

            text-[#5B5B5B]
            "
            style={{ paddingLeft: "12px",paddingTop: "12px"  }}
        >
            {description}
        </p>

        </div>

      <div
        style={triangleStyle}
        className={`
          absolute
          w-0
          h-0

          ${
            position === "bottom"
              ? "border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#F8F5EF]"
              : ""
          }

          ${
            position === "top"
              ? "border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#F8F5EF]"
              : ""
          }

          ${
            position === "left"
              ? "border-t-[10px] border-b-[10px] border-l-[10px] border-t-transparent border-b-transparent border-l-[#F8F5EF]"
              : ""
          }

          ${
            position === "right"
              ? "border-t-[10px] border-b-[10px] border-r-[10px] border-t-transparent border-b-transparent border-r-[#F8F5EF]"
              : ""
          }
        `}
      />
    </div>
  );
}