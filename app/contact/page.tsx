import FloatingNavbar from "@/components/navigation/FloatingNavigation";
import ContactPageMobile from "@/components/navigation/ContactPageMobile";

export default function ContactPage() {
  return (
    <>
      <FloatingNavbar page="contact" />
      <ContactPageMobile />
    </>
  );
}