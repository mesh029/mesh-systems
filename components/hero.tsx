import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/lib/profile";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-6 text-center sm:text-left">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mx-auto max-w-2xl text-xl font-medium text-foreground sm:mx-0 sm:text-2xl">
          {profile.title}
        </p>
        <p className="mx-auto max-w-3xl text-left text-base leading-relaxed text-muted-foreground sm:mx-0 sm:text-lg">
          {profile.summary}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 sm:justify-start">
          <Badge variant="secondary">Health Information Systems</Badge>
          <Badge variant="secondary">Systems Engineering</Badge>
          <Badge variant="secondary">Security & Infrastructure</Badge>
          <Badge variant="secondary">AI & LLM Integration</Badge>
          <Badge variant="secondary">Backend Development</Badge>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row sm:justify-start">
          <Button size="lg" asChild>
            <a href="#work">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/cv">View CV</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

