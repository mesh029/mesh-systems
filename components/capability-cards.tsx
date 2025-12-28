import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { capabilities } from "@/lib/capabilities";
import { ArrowRight } from "lucide-react";
import { CapabilityIcon } from "@/components/capability-icon";

export function CapabilityCards() {
  return (
    <section
      id="capabilities"
      className="container mx-auto px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-left text-3xl font-bold tracking-tight sm:text-4xl">
          Capabilities
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <Link
              key={capability.id}
              href={`/capabilities/${capability.slug}`}
              className="group"
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex items-center gap-3">
                    <CapabilityIcon
                      iconName={capability.icon}
                      className="text-primary"
                      size={24}
                    />
                    <CardTitle className="text-left text-xl">
                      {capability.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-left text-sm text-muted-foreground">
                    {capability.summary}
                  </p>
                  <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

