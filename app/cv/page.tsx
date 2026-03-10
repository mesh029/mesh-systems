"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { profile } from "@/lib/profile";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Download, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { pdf } from "@react-pdf/renderer";
import { CVPDF } from "@/components/cv-pdf";
import { generateWordCV } from "@/lib/cv-word";

function formatDate(start: { month: number; year: number }, end?: { month: number; year: number } | "present") {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const startStr = `${monthNames[start.month - 1]} ${start.year}`;
  const endStr = end === "present" ? "Present" : end ? `${monthNames[end.month - 1]} ${end.year}` : "";
  
  return `${startStr} - ${endStr}`;
}

export default function CVPage() {
  const [selectedRoles, setSelectedRoles] = useState<Set<number>>(
    new Set(profile.roles.map((_, i) => i))
  );
  const [selectedCerts, setSelectedCerts] = useState<Set<number>>(
    new Set(profile.certifications.map((_, i) => i))
  );
  const [selectedProjects, setSelectedProjects] = useState<Set<number>>(
    new Set(profile.projects.map((_, i) => i))
  );
  const [selectedHackathons, setSelectedHackathons] = useState<Set<number>>(
    new Set(profile.hackathons?.map((_, i) => i) || [])
  );
  const [selectedSkills, setSelectedSkills] = useState<Set<number>>(
    new Set(profile.skills?.map((_, i) => i) || [])
  );
  const [includeEducation, setIncludeEducation] = useState(true);
  const [includeCTFs, setIncludeCTFs] = useState(true);
  const [includeCommunityWork, setIncludeCommunityWork] = useState(true);
  const [includeAchievements, setIncludeAchievements] = useState(true);
  const [includeTools, setIncludeTools] = useState(true);

  const applyFullStoryPreset = () => {
    setSelectedRoles(new Set(profile.roles.map((_, i) => i)));
    setSelectedCerts(new Set(profile.certifications.map((_, i) => i)));
    setSelectedProjects(new Set(profile.projects.map((_, i) => i)));
    setSelectedHackathons(new Set(profile.hackathons?.map((_, i) => i) || []));
    setSelectedSkills(new Set(profile.skills?.map((_, i) => i) || []));
    setIncludeEducation(true);
    setIncludeCTFs(true);
    setIncludeCommunityWork(true);
    setIncludeAchievements(true);
    setIncludeTools(true);
  };

  const applyHisNgoPreset = () => {
    // All PATH roles are relevant to NGO/HIS work
    setSelectedRoles(new Set(profile.roles.map((_, i) => i)));

    setSelectedCerts(new Set(profile.certifications.map((_, i) => i)));

    const hisProjectIndexes = profile.projects
      .map((project, index) => ({ project, index }))
      .filter(({ project }) =>
        project.tags.some((tag) =>
          ["HIS", "EMR", "Healthcare", "County Systems"].includes(tag)
        )
      )
      .map(({ index }) => index);
    setSelectedProjects(new Set(hisProjectIndexes));

    setSelectedHackathons(new Set(profile.hackathons?.map((_, i) => i) || []));

    const hisSkillIndexes =
      profile.skills
        ?.map((skill, index) => ({ skill, index }))
        .filter(({ skill }) =>
          [
            "Health Information Systems",
            "Systems Engineering & Infrastructure",
            "IT Support & Administration",
            "AI & LLM Integration",
          ].includes(skill.category)
        )
        .map(({ index }) => index) || [];
    setSelectedSkills(new Set(hisSkillIndexes));

    setIncludeEducation(true);
    setIncludeCTFs(false);
    setIncludeCommunityWork(true);
    setIncludeAchievements(true);
    setIncludeTools(true);
  };

  const applySecurityInfraPreset = () => {
    // Focus on roles with strong security and infra responsibilities (HMIS + ICT Officer)
    const securityRoleIndexes = profile.roles
      .map((role, index) => ({ role, index }))
      .filter(({ role }) =>
        ["HMIS (Health Management Information Systems)", "ICT Officer"].includes(
          role.title
        )
      )
      .map(({ index }) => index);
    setSelectedRoles(new Set(securityRoleIndexes));

    setSelectedCerts(new Set(profile.certifications.map((_, i) => i)));

    const securityProjectIndexes = profile.projects
      .map((project, index) => ({ project, index }))
      .filter(({ project }) =>
        project.tags.some((tag) =>
          ["Security", "OWASP", "Compliance", "Infrastructure", "Cloud", "DevOps"].includes(
            tag
          )
        )
      )
      .map(({ index }) => index);
    setSelectedProjects(new Set(securityProjectIndexes));

    setSelectedHackathons(new Set(profile.hackathons?.map((_, i) => i) || []));

    const securitySkillIndexes =
      profile.skills
        ?.map((skill, index) => ({ skill, index }))
        .filter(({ skill }) =>
          [
            "Systems Engineering & Infrastructure",
            "Security",
            "DevOps & Tools",
            "Backend Development",
          ].includes(skill.category)
        )
        .map(({ index }) => index) || [];
    setSelectedSkills(new Set(securitySkillIndexes));

    setIncludeEducation(true);
    setIncludeCTFs(true);
    setIncludeCommunityWork(false);
    setIncludeAchievements(true);
    setIncludeTools(true);
  };

  const toggleRole = (index: number) => {
    const newSet = new Set(selectedRoles);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setSelectedRoles(newSet);
  };

  const toggleCert = (index: number) => {
    const newSet = new Set(selectedCerts);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setSelectedCerts(newSet);
  };

  const toggleProject = (index: number) => {
    const newSet = new Set(selectedProjects);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setSelectedProjects(newSet);
  };

  const toggleHackathon = (index: number) => {
    const newSet = new Set(selectedHackathons);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setSelectedHackathons(newSet);
  };

  const toggleSkill = (index: number) => {
    const newSet = new Set(selectedSkills);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setSelectedSkills(newSet);
  };

  const handleDownload = async () => {
    try {
      const doc = (
        <CVPDF
          profile={profile}
          selectedRoles={selectedRoles}
          selectedCerts={selectedCerts}
          selectedProjects={selectedProjects}
          selectedHackathons={selectedHackathons}
          selectedSkills={selectedSkills}
          includeEducation={includeEducation}
          includeCTFs={includeCTFs}
          includeCommunityWork={includeCommunityWork}
          includeAchievements={includeAchievements}
          includeTools={includeTools}
        />
      );

      const asPdf = pdf(doc);
      const blob = await asPdf.toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${profile.name.replace(/\s+/g, "_")}_CV.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-left text-4xl font-bold tracking-tight sm:text-5xl">
                Curriculum Vitae
              </h1>
              <p className="mt-2 text-left text-muted-foreground">
                Select sections to include in your CV download
              </p>
            </div>
            <div className="flex gap-2">
              <Button size="lg" onClick={handleDownload} className="gap-2">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={async () => {
                  try {
                    await generateWordCV(
                      profile,
                      selectedRoles,
                      selectedCerts,
                      selectedProjects,
                      selectedHackathons,
                      selectedSkills,
                      includeEducation,
                      includeCTFs,
                      includeCommunityWork,
                      includeAchievements,
                      includeTools
                    );
                  } catch (error) {
                    console.error("Error generating Word document:", error);
                    alert("Error generating Word document. Please try again.");
                  }
                }}
                className="gap-2"
              >
                <FileText className="h-4 w-4" />
                Download Word
              </Button>
            </div>
          </div>

          {/* Selection Controls */}
          <Card className="mb-8 print:hidden">
            <CardHeader>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle>Select Sections to Include</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Use presets to quickly switch between different CV versions, then fine-tune with the checkboxes.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    onClick={applyFullStoryPreset}
                  >
                    Full Story
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    onClick={applyHisNgoPreset}
                  >
                    HIS / NGO Focus
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    onClick={applySecurityInfraPreset}
                  >
                    Security & Infra
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-3 text-sm font-semibold">Experience</h3>
                <div className="space-y-2">
                  {profile.roles.map((role, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox
                        id={`role-${index}`}
                        checked={selectedRoles.has(index)}
                        onCheckedChange={() => toggleRole(index)}
                      />
                      <label
                        htmlFor={`role-${index}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {role.title} - {role.organization} ({formatDate(role.start, role.end)})
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold">Education</h3>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="education"
                    checked={includeEducation}
                    onCheckedChange={(checked) => setIncludeEducation(checked as boolean)}
                  />
                  <label
                    htmlFor="education"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Education
                  </label>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold">Certifications</h3>
                <div className="space-y-2">
                  {profile.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox
                        id={`cert-${index}`}
                        checked={selectedCerts.has(index)}
                        onCheckedChange={() => toggleCert(index)}
                      />
                      <label
                        htmlFor={`cert-${index}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {cert.name} - {cert.issuer}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {profile.projects && profile.projects.length > 0 && (
                <div>
                  <h3 className="mb-3 text-sm font-semibold">Projects & Case Studies</h3>
                  <div className="space-y-2">
                    {profile.projects.map((project, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox
                          id={`project-${index}`}
                          checked={selectedProjects.has(index)}
                          onCheckedChange={() => toggleProject(index)}
                        />
                        <label
                          htmlFor={`project-${index}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {project.title}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {profile.hackathons && profile.hackathons.length > 0 && (
                <div>
                  <h3 className="mb-3 text-sm font-semibold">Hackathons</h3>
                  <div className="space-y-2">
                    {profile.hackathons.map((hackathon, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox
                          id={`hackathon-${index}`}
                          checked={selectedHackathons.has(index)}
                          onCheckedChange={() => toggleHackathon(index)}
                        />
                        <label
                          htmlFor={`hackathon-${index}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {hackathon.name} ({hackathon.year})
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {profile.skills && profile.skills.length > 0 && (
                <div>
                  <h3 className="mb-3 text-sm font-semibold">Skills Categories</h3>
                  <div className="space-y-2">
                    {profile.skills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox
                          id={`skill-${index}`}
                          checked={selectedSkills.has(index)}
                          onCheckedChange={() => toggleSkill(index)}
                        />
                        <label
                          htmlFor={`skill-${index}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {skill.category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="mb-3 text-sm font-semibold">Additional Sections</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ctfs"
                      checked={includeCTFs}
                      onCheckedChange={(checked) => setIncludeCTFs(checked as boolean)}
                    />
                    <label
                      htmlFor="ctfs"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      CTF Activities
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="community"
                      checked={includeCommunityWork}
                      onCheckedChange={(checked) => setIncludeCommunityWork(checked as boolean)}
                    />
                    <label
                      htmlFor="community"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Community Work
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="achievements"
                      checked={includeAchievements}
                      onCheckedChange={(checked) => setIncludeAchievements(checked as boolean)}
                    />
                    <label
                      htmlFor="achievements"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Key Achievements
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="tools"
                      checked={includeTools}
                      onCheckedChange={(checked) => setIncludeTools(checked as boolean)}
                    />
                    <label
                      htmlFor="tools"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Tools & Platforms
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CV Preview */}
          <div className="space-y-8 print:space-y-6">
            {/* Header */}
            <div className="border-b border-border pb-8 print:border-b-2 print:pb-6">
              <h1 className="text-3xl font-bold print:text-2xl">{profile.name}</h1>
              <p className="mt-1 text-lg text-muted-foreground print:text-base">{profile.title}</p>
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground print:text-xs">
                {profile.links.email && (
                  <span>{profile.links.email}</span>
                )}
                {profile.links.github && (
                  <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    GitHub
                  </a>
                )}
                {profile.links.linkedin && (
                  <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    LinkedIn
                  </a>
                )}
                {profile.links.website && (
                  <a href={profile.links.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Website
                  </a>
                )}
              </div>
            </div>

            {/* Summary */}
            <div className="pt-2">
              <h2 className="mb-2 text-xl font-bold print:text-lg">Summary</h2>
              <p className="text-sm leading-relaxed text-muted-foreground print:text-xs">
                {profile.summary}
              </p>
            </div>

            {/* Experience */}
            {selectedRoles.size > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-bold print:text-lg">Experience</h2>
                <div className="space-y-6 print:space-y-4">
                  {profile.roles
                    .filter((_, index) => selectedRoles.has(index))
                    .map((role, index) => (
                      <div key={index} className="print:break-inside-avoid">
                        <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                          <div>
                            <h3 className="font-semibold text-foreground print:text-sm">
                              {role.title}
                            </h3>
                            <p className="text-sm text-muted-foreground print:text-xs">
                              {role.organization} • {role.location}
                            </p>
                          </div>
                          <p className="text-sm text-muted-foreground print:text-xs">
                            {formatDate(role.start, role.end)}
                          </p>
                        </div>
                        <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted-foreground print:mt-1 print:text-xs">
                          {role.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="flex items-start">
                              <span className="mr-2 text-primary print:mr-1">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Education */}
            {includeEducation && (
              <div>
                <h2 className="mb-4 text-xl font-bold print:text-lg">Education</h2>
                <div className="space-y-4 print:space-y-2">
                  {profile.education.map((edu, index) => (
                    <div key={index}>
                      <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground print:text-sm">
                            {edu.degree}
                            {edu.major && ` - ${edu.major}`}
                          </h3>
                          <p className="text-sm text-muted-foreground print:text-xs">
                            {edu.institution}
                            {edu.location && ` • ${edu.location}`}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground print:text-xs">
                          {edu.graduationYear}
                        </p>
                      </div>
                      {edu.focusAreas.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1 print:mt-1">
                          {edu.focusAreas.map((area, areaIndex) => (
                            <Badge
                              key={areaIndex}
                              variant="secondary"
                              className="text-xs print:text-[10px]"
                            >
                              {area}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {selectedCerts.size > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-bold print:text-lg">Certifications</h2>
                <div className="grid gap-3 sm:grid-cols-2 print:grid-cols-2 print:gap-2">
                  {profile.certifications
                    .filter((_, index) => selectedCerts.has(index))
                    .map((cert, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-foreground print:text-sm">
                          {cert.name}
                        </h3>
                        <p className="text-sm text-muted-foreground print:text-xs">
                          {cert.issuer}
                          {cert.year && ` • ${cert.year}`}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Projects */}
            {selectedProjects.size > 0 && profile.projects && (
              <div>
                <h2 className="mb-4 text-xl font-bold print:text-lg">Projects & Case Studies</h2>
                <div className="space-y-6 print:space-y-4">
                  {profile.projects
                    .filter((_, index) => selectedProjects.has(index))
                    .map((project, index) => (
                      <div key={index} className="print:break-inside-avoid">
                        <h3 className="font-semibold text-foreground print:text-sm mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground print:text-xs mb-2">
                          {project.context}
                        </p>
                        <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted-foreground print:mt-1 print:text-xs">
                          {project.actions.map((action, actionIndex) => (
                            <li key={actionIndex} className="flex items-start">
                              <span className="mr-2 text-primary print:mr-1">•</span>
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                        {project.outcomes.length > 0 && (
                          <div className="mt-3">
                            <p className="text-xs font-semibold text-foreground mb-1">Outcomes:</p>
                            <ul className="space-y-1 text-xs text-muted-foreground">
                              {project.outcomes.map((outcome, outcomeIndex) => (
                                <li key={outcomeIndex} className="flex items-start">
                                  <span className="mr-2 text-primary">✓</span>
                                  <span>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Hackathons */}
            {selectedHackathons.size > 0 && profile.hackathons && (
              <div>
                <h2 className="mb-4 text-xl font-bold print:text-lg">Hackathons</h2>
                <div className="space-y-4 print:space-y-3">
                  {profile.hackathons
                    .filter((_, index) => selectedHackathons.has(index))
                    .map((hackathon, index) => (
                      <div key={index}>
                        <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                          <div>
                            <h3 className="font-semibold text-foreground print:text-sm">
                              {hackathon.name}
                            </h3>
                            <p className="text-sm text-muted-foreground print:text-xs">
                              {hackathon.focus}
                              {hackathon.partners && ` • Partners: ${hackathon.partners.join(", ")}`}
                            </p>
                          </div>
                          <p className="text-sm text-muted-foreground print:text-xs">
                            {hackathon.year}
                          </p>
                        </div>
                        {hackathon.achievements && hackathon.achievements.length > 0 && (
                          <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted-foreground print:mt-1 print:text-xs">
                            {hackathon.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start">
                                <span className="mr-2 text-primary print:mr-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* CTFs */}
            {includeCTFs && profile.ctfs && profile.ctfs.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-bold print:text-lg">CTF Activities</h2>
                <div className="space-y-4 print:space-y-3">
                  {profile.ctfs.map((ctf, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-foreground print:text-sm mb-2">
                        {ctf.platform}
                      </h3>
                      <ul className="space-y-1 text-sm leading-relaxed text-muted-foreground print:text-xs">
                        {ctf.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start">
                            <span className="mr-2 text-primary print:mr-1">•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {selectedSkills.size > 0 && profile.skills && (
              <div>
                <h2 className="mb-4 text-xl font-bold print:text-lg">Skills</h2>
                <div className="space-y-4 print:space-y-3">
                  {profile.skills
                    .filter((_, index) => selectedSkills.has(index))
                    .map((skill, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-foreground print:text-sm mb-2">
                          {skill.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map((item, itemIndex) => (
                            <Badge
                              key={itemIndex}
                              variant="secondary"
                              className="text-xs print:text-[10px]"
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Community Work */}
            {includeCommunityWork && profile.communityWork && profile.communityWork.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-bold print:text-lg">Community Work</h2>
                <div className="space-y-3 print:space-y-2">
                  {profile.communityWork.map((work, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-foreground print:text-sm">
                        {work.title}
                      </h3>
                      <p className="text-sm text-muted-foreground print:text-xs">
                        {work.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements */}
            {includeAchievements && profile.achievements && profile.achievements.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-bold print:text-lg">Key Achievements</h2>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground print:text-xs">
                  {profile.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-primary print:mr-1">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tools & Platforms */}
            {includeTools && profile.toolsAndPlatforms && profile.toolsAndPlatforms.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-bold print:text-lg">Tools & Platforms</h2>
                <div className="flex flex-wrap gap-2">
                  {profile.toolsAndPlatforms.map((tool, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs print:text-[10px]"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
