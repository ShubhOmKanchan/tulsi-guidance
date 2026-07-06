import BackgroundGlow from "./BackgroundGlow";
import LightRays from "./LightRays";
import SacredMandala from "./SacredMandala";
import SacredLotus from "./SacredLotus";
import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="
          absolute
          top-1
          left-2
          z-[998]
          lg:hidden
        "
      >
        <Image
          src="/images/logos/LogoM.png"
          alt="Tulsi Guidance"
          width={120}
          height={120}
          priority
          className="
            w-20
            h-auto
            opacity-90
            select-none
            pointer-events-none
          "
        />
      </div>
      <BackgroundGlow />
      <LightRays />
      <SacredMandala />
      <SacredLotus />
    </div>
  );
}