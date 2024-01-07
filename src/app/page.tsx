import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main >
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
    </main>
  );
}
