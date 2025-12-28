import { Capability } from "@/lib/capabilities";
import { TechStackChips } from "@/components/tech-stack-chips";
import { ListChecks, Wrench, Server, Target } from "lucide-react";

interface CapabilityDetailsProps {
  capability: Capability;
}

export function CapabilityDetails({ capability }: CapabilityDetailsProps) {
  return (
    <div className="container mx-auto px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* What We Actively Do */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <ListChecks className="h-6 w-6 text-muted-foreground" />
            <h2 className="text-left text-2xl font-bold tracking-tight sm:text-3xl">
              What We Actively Do
            </h2>
          </div>
          <ul className="space-y-2 text-left text-base leading-relaxed text-muted-foreground">
            {capability.activities.map((activity, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tools & Technologies Used */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Wrench className="h-6 w-6 text-muted-foreground" />
            <h2 className="text-left text-2xl font-bold tracking-tight sm:text-3xl">
              Tools & Technologies Used
            </h2>
          </div>
          <TechStackChips techStack={capability.techStack} />
        </section>

        {/* Real Systems & Context */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Server className="h-6 w-6 text-muted-foreground" />
            <h2 className="text-left text-2xl font-bold tracking-tight sm:text-3xl">
              Real Systems & Context
            </h2>
          </div>
          <div className="space-y-6">
            {capability.systems.map((system, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-left text-lg font-semibold text-foreground">
                  {system.title}
                </h3>
                <p className="text-left text-base leading-relaxed text-muted-foreground">
                  {system.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcome-Focused Notes */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Target className="h-6 w-6 text-muted-foreground" />
            <h2 className="text-left text-2xl font-bold tracking-tight sm:text-3xl">
              Outcome-Focused Notes
            </h2>
          </div>
          <ul className="space-y-2 text-left text-base leading-relaxed text-muted-foreground">
            {capability.outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

