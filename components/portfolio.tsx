import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "KenyaEMR (TaifaCare) Deployment",
    description:
      "Production deployment and support for KenyaEMR, a comprehensive electronic medical records system serving healthcare facilities across Kenya.",
    tech: ["OpenMRS", "Java", "MySQL", "Linux"],
    caseStudy: "#case-study-kenyaemr",
    github: "https://github.com",
  },
  {
    title: "JuaX Platform",
    description:
      "A scalable digital platform engineered for high-performance applications with modern cloud infrastructure and DevOps practices.",
    tech: ["Next.js", "TypeScript", "AWS", "Docker"],
    caseStudy: "#case-study-juax",
    github: "https://github.com",
  },
  {
    title: "Healthcare Infrastructure Modernization",
    description:
      "End-to-end infrastructure upgrade for multi-facility healthcare network, ensuring high availability and compliance.",
    tech: ["Kubernetes", "Terraform", "Monitoring", "CI/CD"],
    caseStudy: "#case-study-healthcare",
    github: "https://github.com",
  },
];

export function Portfolio() {
  return (
    <section
      id="work"
      className="border-t border-border bg-card py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="flex flex-col">
                <div className="aspect-video w-full bg-muted"></div>
                <CardHeader>
                  <CardTitle className="text-left text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-left">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.caseStudy}>
                        Case Study
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-3 w-3" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

