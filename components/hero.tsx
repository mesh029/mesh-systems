import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-6 text-center sm:text-left">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Mesh Systems
        </h1>
        <p className="mx-auto max-w-2xl text-xl font-medium text-foreground sm:mx-0 sm:text-2xl">
          Systems Engineering & Development
        </p>
        <p className="mx-auto max-w-3xl text-left text-base leading-relaxed text-muted-foreground sm:mx-0 sm:text-lg">
          We deploy and maintain production systems for healthcare facilities, NGOs, and organizations. Our work involves configuring, troubleshooting, and operating EMR systems, web applications, mobile apps, and infrastructure.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 sm:justify-start">
          <Badge variant="secondary">Health Information Systems</Badge>
          <Badge variant="secondary">Full-Stack Development</Badge>
          <Badge variant="secondary">Mobile Development</Badge>
          <Badge variant="secondary">DevOps & Infrastructure</Badge>
          <Badge variant="secondary">Enterprise IT Support</Badge>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row sm:justify-start">
          <Button size="lg" asChild>
            <a href="#capabilities">View Capabilities</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

