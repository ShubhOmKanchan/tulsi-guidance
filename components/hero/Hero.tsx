import Container from "@/components/layout/Container";
import FounderPortrait from "./FounderPortrait";
import HeroContent from "./HeroContent";
import HeroBackground from "./HeroBackground";
import BambooCluster from "./BambooCluster";
import GroundLayer from "./GroundLayer";
import TulsiPlant from "./TulsiPlant";
import MorningSunlight from "./MorningSunlight";
import ButterflyField from "./ButterflyField";
import EarthenPots from "./EarthenPots";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FCFAF6]">

      {/* Background Layer */}
      <HeroBackground />
      <BambooCluster />
      <GroundLayer />
      <EarthenPots />
      <MorningSunlight />
      <ButterflyField />
      <TulsiPlant />
      <Container>


        <div
            className="
                grid
                items-center
                gap-14
                pt-16
                pb-14

                lg:min-h-[calc(100vh-96px)]
                lg:gap-20
                lg:pt-28
                lg:pb-20
                lg:grid-cols-2
            "
        >

          {/* LEFT CONTENT */}

          <HeroContent />

          {/* RIGHT */}

          <div
            className="
                relative
                flex
                justify-center
                pt-20
                pb-16

                lg:pt-0
                lg:pb-0
                lg:translate-y-6
            "
            >

            <FounderPortrait />

          </div>

        </div>

    

      </Container>

    </section>
  );
}