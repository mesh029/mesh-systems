import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-foreground">
          Mesh Systems
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-8 sm:flex">
            <Link
              href="/#capabilities"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Capabilities
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
            <Button size="sm" variant="outline" asChild>
              <Link href="/#contact">Get In Touch</Link>
            </Button>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

