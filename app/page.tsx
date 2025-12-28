import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { CapabilityCards } from "@/components/capability-cards";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CapabilityCards />
      <Contact />
      <Footer />
    </main>
  );
}
