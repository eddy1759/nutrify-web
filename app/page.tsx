import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Capabilities />
      <HowItWorks />
      <Trust />
      <CTA />
      <Footer />
    </main>
  );
}
