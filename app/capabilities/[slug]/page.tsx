import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CapabilityHero } from "@/components/capability-hero";
import { CapabilityDetails } from "@/components/capability-details";
import {
  getCapabilityBySlug,
  getAllCapabilitySlugs,
} from "@/lib/capabilities";

export async function generateStaticParams() {
  const slugs = getAllCapabilitySlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function CapabilityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);

  if (!capability) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <CapabilityHero capability={capability} />
      <CapabilityDetails capability={capability} />
      <Footer />
    </main>
  );
}

