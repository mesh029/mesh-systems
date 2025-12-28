import { Badge } from "@/components/ui/badge";
import { TechStackGroup } from "@/lib/capabilities";

interface TechStackChipsProps {
  techStack: TechStackGroup[];
}

export function TechStackChips({ techStack }: TechStackChipsProps) {
  return (
    <div className="space-y-6">
      {techStack.map((group) => (
        <div key={group.category} className="space-y-3">
          <h4 className="text-left text-sm font-semibold text-foreground">
            {group.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {group.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

