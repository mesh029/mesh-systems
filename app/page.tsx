import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { FeatureCards } from "@/components/feature-cards";
import { Portfolio } from "@/components/portfolio";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeatureCards />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
