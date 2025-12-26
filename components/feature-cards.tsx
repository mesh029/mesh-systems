import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Heart, Code, Server } from "lucide-react";

const features = [
  {
    title: "Cloud & Infrastructure",
    description:
      "Scalable cloud architectures and infrastructure automation for modern applications.",
    icon: Cloud,
  },
  {
    title: "Healthcare Systems",
    description:
      "Specialized EMR deployments and healthcare technology solutions for critical care environments.",
    icon: Heart,
  },
  {
    title: "Platform Engineering",
    description:
      "Developer platforms and tooling that accelerate software delivery and operations.",
    icon: Code,
  },
  {
    title: "IT Support & Operations",
    description:
      "Comprehensive IT operations, monitoring, and support services for production systems.",
    icon: Server,
  },
];

export function FeatureCards() {
  return (
    <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Our Expertise
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-left text-xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-left text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

