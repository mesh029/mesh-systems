import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx";
import { saveAs } from "file-saver";
import {
  Profile,
  Role,
  EducationEntry,
  Certification,
  ProjectCaseStudy,
  Hackathon,
  CTF,
  Skill,
  CommunityWork,
} from "./profile";

function formatDate(
  start: { month: number; year: number },
  end?: { month: number; year: number } | "present"
): string {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const startStr = `${monthNames[start.month - 1]} ${start.year}`;
  const endStr =
    end === "present" ? "Present" : end ? `${monthNames[end.month - 1]} ${end.year}` : "";

  return `${startStr} - ${endStr}`;
}

export async function generateWordCV(
  profile: Profile,
  selectedRoles: Set<number>,
  selectedCerts: Set<number>,
  selectedProjects: Set<number>,
  selectedHackathons: Set<number>,
  selectedSkills: Set<number>,
  includeEducation: boolean,
  includeCTFs: boolean,
  includeCommunityWork: boolean,
  includeAchievements: boolean,
  includeTools: boolean
): Promise<void> {
  const selectedRolesList = profile.roles.filter((_, index) => selectedRoles.has(index));
  const selectedCertsList = profile.certifications.filter((_, index) => selectedCerts.has(index));
  const selectedProjectsList = profile.projects?.filter((_, index) => selectedProjects.has(index)) || [];
  const selectedHackathonsList = profile.hackathons?.filter((_, index) => selectedHackathons.has(index)) || [];
  const selectedSkillsList = profile.skills?.filter((_, index) => selectedSkills.has(index)) || [];

  const children: Paragraph[] = [];

  // Header
  children.push(
    new Paragraph({
      text: profile.name,
      heading: HeadingLevel.TITLE,
      spacing: { after: 200 },
    })
  );

  children.push(
    new Paragraph({
      text: profile.title,
      spacing: { after: 300 },
      style: "Subtitle",
    })
  );

  // Contact Info
  const contactParts: TextRun[] = [];
  if (profile.links.email) {
    contactParts.push(new TextRun(profile.links.email));
  }
  if (profile.links.github) {
    if (contactParts.length > 0) contactParts.push(new TextRun(" • "));
    contactParts.push(new TextRun({ text: "GitHub", color: "0066CC" }));
  }
  if (profile.links.linkedin) {
    if (contactParts.length > 0) contactParts.push(new TextRun(" • "));
    contactParts.push(new TextRun({ text: "LinkedIn", color: "0066CC" }));
  }
  if (profile.links.website) {
    if (contactParts.length > 0) contactParts.push(new TextRun(" • "));
    contactParts.push(new TextRun({ text: "Website", color: "0066CC" }));
  }

  if (contactParts.length > 0) {
    children.push(
      new Paragraph({
        children: contactParts,
        spacing: { after: 400 },
      })
    );
  }

  // Summary
  children.push(
    new Paragraph({
      text: "Summary",
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 200, after: 200 },
    })
  );

  children.push(
    new Paragraph({
      text: profile.summary,
      spacing: { after: 400 },
    })
  );

  // Experience
  if (selectedRolesList.length > 0) {
    children.push(
      new Paragraph({
        text: "Experience",
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 200, after: 200 },
      })
    );

    selectedRolesList.forEach((role: Role) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: role.title,
              bold: true,
              size: 22,
            }),
            new TextRun({
              text: `\t${formatDate(role.start, role.end)}`,
              size: 20,
            }),
          ],
          spacing: { after: 100 },
        })
      );

      children.push(
        new Paragraph({
          text: `${role.organization} • ${role.location}`,
          spacing: { after: 200 },
        })
      );

      role.bullets.forEach((bullet: string) => {
        children.push(
          new Paragraph({
            text: bullet,
            bullet: {
              level: 0,
            },
            spacing: { after: 100 },
          })
        );
      });

      children.push(new Paragraph({ text: "", spacing: { after: 200 } }));
    });
  }

  // Education
  if (includeEducation) {
    children.push(
      new Paragraph({
        text: "Education",
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 200, after: 200 },
      })
    );

    profile.education.forEach((edu: EducationEntry) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${edu.degree}${edu.major ? ` - ${edu.major}` : ""}`,
              bold: true,
              size: 22,
            }),
            new TextRun({
              text: `\t${edu.graduationYear}`,
              size: 20,
            }),
          ],
          spacing: { after: 100 },
        })
      );

      children.push(
        new Paragraph({
          text: `${edu.institution}${edu.location ? ` • ${edu.location}` : ""}`,
          spacing: { after: 200 },
        })
      );

      if (edu.focusAreas.length > 0) {
        const focusText = edu.focusAreas.join(" • ");
        children.push(
          new Paragraph({
            text: focusText,
            spacing: { after: 200 },
          })
        );
      }
    });
  }

  // Certifications
  if (selectedCertsList.length > 0) {
    children.push(
      new Paragraph({
        text: "Certifications",
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 200, after: 200 },
      })
    );

    selectedCertsList.forEach((cert: Certification) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: cert.name,
              bold: true,
            }),
            new TextRun({
              text: ` - ${cert.issuer}${cert.year ? ` • ${cert.year}` : ""}`,
            }),
          ],
          spacing: { after: 150 },
        })
      );
    });
  }

  // Projects
  if (selectedProjectsList.length > 0) {
    children.push(
      new Paragraph({
        text: "Projects & Case Studies",
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 200, after: 200 },
      })
    );

    selectedProjectsList.forEach((project: ProjectCaseStudy) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: project.title,
              bold: true,
              size: 22,
            }),
          ],
          spacing: { after: 100 },
        })
      );

      children.push(
        new Paragraph({
          text: project.context,
          spacing: { after: 200 },
        })
      );

      project.actions.forEach((action: string) => {
        children.push(
          new Paragraph({
            text: action,
            bullet: { level: 0 },
            spacing: { after: 100 },
          })
        );
      });

      if (project.outcomes.length > 0) {
        children.push(
          new Paragraph({
            children: [
              new TextRun({
                text: "Outcomes:",
                bold: true,
              }),
            ],
            spacing: { before: 200, after: 100 },
          })
        );
        project.outcomes.forEach((outcome: string) => {
          children.push(
            new Paragraph({
              text: outcome,
              bullet: { level: 0 },
              spacing: { after: 100 },
            })
          );
        });
      }

      children.push(new Paragraph({ text: "", spacing: { after: 200 } }));
    });
  }

  // Hackathons
  if (selectedHackathonsList.length > 0) {
    children.push(
      new Paragraph({
        text: "Hackathons",
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 200, after: 200 },
      })
    );

    selectedHackathonsList.forEach((hackathon: Hackathon) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: hackathon.name,
              bold: true,
              size: 22,
            }),
            new TextRun({
              text: `\t${hackathon.year}`,
              size: 20,
            }),
          ],
          spacing: { after: 100 },
        })
      );

      children.push(
        new Paragraph({
          text: hackathon.focus + (hackathon.partners ? ` • Partners: ${hackathon.partners.join(", ")}` : ""),
          spacing: { after: 200 },
        })
      );

      if (hackathon.achievements) {
        hackathon.achievements.forEach((achievement: string) => {
          children.push(
            new Paragraph({
              text: achievement,
              bullet: { level: 0 },
              spacing: { after: 100 },
            })
          );
        });
      }

      children.push(new Paragraph({ text: "", spacing: { after: 200 } }));
    });
  }

  // CTFs
  if (includeCTFs && profile.ctfs && profile.ctfs.length > 0) {
    children.push(
      new Paragraph({
        text: "CTF Activities",
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 200, after: 200 },
      })
    );

    profile.ctfs.forEach((ctf: CTF) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: ctf.platform,
              bold: true,
              size: 22,
            }),
          ],
          spacing: { after: 200 },
        })
      );

      ctf.activities.forEach((activity: string) => {
        children.push(
          new Paragraph({
            text: activity,
            bullet: { level: 0 },
            spacing: { after: 100 },
          })
        );
      });

      children.push(new Paragraph({ text: "", spacing: { after: 200 } }));
    });
  }

  // Skills
  if (selectedSkillsList.length > 0) {
    children.push(
      new Paragraph({
        text: "Skills",
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 200, after: 200 },
      })
    );

    selectedSkillsList.forEach((skill: Skill) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: skill.category,
              bold: true,
              size: 22,
            }),
          ],
          spacing: { after: 100 },
        })
      );

      const skillsText = skill.items.join(" • ");
      children.push(
        new Paragraph({
          text: skillsText,
          spacing: { after: 200 },
        })
      );
    });
  }

  // Community Work
  if (includeCommunityWork && profile.communityWork && profile.communityWork.length > 0) {
    children.push(
      new Paragraph({
        text: "Community Work",
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 200, after: 200 },
      })
    );

    profile.communityWork.forEach((work: CommunityWork) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: work.title,
              bold: true,
              size: 22,
            }),
          ],
          spacing: { after: 100 },
        })
      );

      children.push(
        new Paragraph({
          text: work.description,
          spacing: { after: 200 },
        })
      );
    });
  }

  // Achievements
  if (includeAchievements && profile.achievements && profile.achievements.length > 0) {
    children.push(
      new Paragraph({
        text: "Key Achievements",
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 200, after: 200 },
      })
    );

    profile.achievements.forEach((achievement: string) => {
      children.push(
        new Paragraph({
          text: achievement,
          bullet: { level: 0 },
          spacing: { after: 100 },
        })
      );
    });
  }

  // Tools & Platforms
  if (includeTools && profile.toolsAndPlatforms && profile.toolsAndPlatforms.length > 0) {
    children.push(
      new Paragraph({
        text: "Tools & Platforms",
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 200, after: 200 },
      })
    );

    const toolsText = profile.toolsAndPlatforms.join(" • ");
    children.push(
      new Paragraph({
        text: toolsText,
        spacing: { after: 200 },
      })
    );
  }

  const doc = new Document({
    sections: [
      {
        properties: {},
        children,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const fileName = `${profile.name.replace(/\s+/g, "_")}_CV.docx`;
  saveAs(blob, fileName);
}
