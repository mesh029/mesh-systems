import { Capability } from "@/lib/capabilities";
import { CapabilityIcon } from "@/components/capability-icon";

interface CapabilityHeroProps {
  capability: Capability;
}

export function CapabilityHero({ capability }: CapabilityHeroProps) {
  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center gap-4">
          <CapabilityIcon
            iconName={capability.icon}
            className="text-primary"
            size={32}
          />
          <h1 className="text-left text-4xl font-bold tracking-tight sm:text-5xl">
            {capability.title}
          </h1>
        </div>
        <p className="text-left text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {capability.summary}
        </p>
      </div>
    </section>
  );
}

