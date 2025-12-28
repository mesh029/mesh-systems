import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-card py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Build Your Next Project?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Get in touch to discuss your web, mobile, or infrastructure needs.
            Let's create something great together.
          </p>
          <Card className="mx-auto max-w-md">
            <CardContent className="space-y-4 p-6">
              <Button className="w-full" size="lg" asChild>
                <a href="mailto:aririmeshack@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  aririmeshack@gmail.com
                </a>
              </Button>
              <Button
                className="w-full"
                size="lg"
                variant="outline"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/meshack-ariri/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

