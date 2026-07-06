import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import FloatingNavigation from "@/components/navigation/FloatingNavigation";
export default function Home() {
  return (
    <>
    <div className="lg:hidden">
      <FloatingNavigation page="home" />
    </div>
      <Navbar />
      <Hero />
    </>
  );
}