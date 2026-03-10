import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { profile } from "@/lib/profile";
import { Calendar, MapPin, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function formatDate(start: { month: number; year: number }, end?: { month: number; year: number } | "present") {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const startStr = `${monthNames[start.month - 1]} ${start.year}`;
  const endStr = end === "present" ? "Present" : end ? `${monthNames[end.month - 1]} ${end.year}` : "";
  
  return `${startStr} - ${endStr}`;
}

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-left text-4xl font-bold tracking-tight sm:text-5xl">
            My Journey
          </h1>
          <p className="mb-12 text-left text-lg leading-relaxed text-muted-foreground">
            A timeline of my professional experience, education, and growth as a systems engineer and HIS practitioner.
          </p>

          <div className="space-y-8">
            {profile.roles.map((role, index) => (
              <Card key={index} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <CardTitle className="text-left text-xl sm:text-2xl">
                        {role.title}
                      </CardTitle>
                      <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        <span>{role.organization}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:text-right">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(role.start, role.end)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{role.location}</span>
                      </div>
                    </div>
                  </div>
                  {(role.baseStations.length > 0 || role.countiesCovered.length > 0) && (
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                      {role.baseStations.length > 0 && (
                        <span>Base: {role.baseStations.join(", ")}</span>
                      )}
                      {role.countiesCovered.length > 0 && (
                        <span>Counties: {role.countiesCovered.join(", ")}</span>
                      )}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left text-sm leading-relaxed text-muted-foreground">
                    {role.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="mb-6 text-left text-3xl font-bold tracking-tight sm:text-4xl">
              Education
            </h2>
            <div className="space-y-6">
              {profile.education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-left text-xl">
                      {edu.degree}
                      {edu.major && ` - ${edu.major}`}
                    </CardTitle>
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span>{edu.institution}</span>
                      {edu.location && <span> • {edu.location}</span>}
                      <span> • {edu.graduationYear}</span>
                    </div>
                  </CardHeader>
                  {edu.focusAreas.length > 0 && (
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Focus Areas:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.focusAreas.map((area, areaIndex) => (
                            <span
                              key={areaIndex}
                              className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="mb-6 text-left text-3xl font-bold tracking-tight sm:text-4xl">
              Certifications
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {profile.certifications.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      {cert.year && (
                        <p className="mt-1 text-xs text-muted-foreground">{cert.year}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
