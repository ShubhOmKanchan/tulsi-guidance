import OfferingsSection from "@/components/offerings/OfferingsSection";
import FloatingNavigation from "@/components/navigation/FloatingNavigation";

export default function OfferingsPage() {
  return (
    <>
      <FloatingNavigation page="offerings" />
      <OfferingsSection />
    </>
  );
}