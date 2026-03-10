import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";
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
} from "@/lib/profile";

// Register fonts for better typography (optional - uses default fonts if not available)
// You can add custom fonts later if needed

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontSize: 10,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 30,
    borderBottomWidth: 3,
    borderBottomColor: "#2563eb",
    paddingBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 15,
    color: "#475569",
    marginBottom: 10,
    marginTop: 0,
    fontWeight: "medium",
  },
  contactInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    fontSize: 9,
    color: "#64748b",
  },
  section: {
    marginBottom: 20,
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 12,
    marginTop: 0,
    borderBottomWidth: 1.5,
    borderBottomColor: "#cbd5e1",
    paddingBottom: 6,
    letterSpacing: 0.3,
  },
  sectionTitleWithBreak: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 12,
    marginTop: 0,
    borderBottomWidth: 1.5,
    borderBottomColor: "#cbd5e1",
    paddingBottom: 6,
    letterSpacing: 0.3,
  },
  summary: {
    fontSize: 10.5,
    color: "#475569",
    lineHeight: 1.7,
    marginBottom: 0,
    marginTop: 0,
    textAlign: "justify",
  },
  roleContainer: {
    marginBottom: 14,
    marginTop: 0,
  },
  roleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  roleTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 2,
  },
  roleDate: {
    fontSize: 9.5,
    color: "#64748b",
    fontWeight: "medium",
  },
  roleOrg: {
    fontSize: 9.5,
    color: "#64748b",
    marginBottom: 8,
    fontStyle: "italic",
  },
  bulletList: {
    marginLeft: 8,
    marginTop: 4,
  },
  bulletItem: {
    fontSize: 9.5,
    color: "#475569",
    lineHeight: 1.6,
    marginBottom: 4,
    marginLeft: 8,
    flexDirection: "row",
  },
  bulletPoint: {
    color: "#2563eb",
    marginRight: 8,
    fontWeight: "bold",
  },
  educationContainer: {
    marginBottom: 10,
  },
  educationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  educationDegree: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1e293b",
  },
  educationDetails: {
    fontSize: 9,
    color: "#64748b",
    marginBottom: 4,
  },
  educationYear: {
    fontSize: 9,
    color: "#64748b",
  },
  focusAreas: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginTop: 4,
  },
  focusAreaTag: {
    fontSize: 8,
    color: "#2563eb",
    backgroundColor: "#eff6ff",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
  },
  certContainer: {
    marginBottom: 8,
  },
  certName: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 2,
  },
  certIssuer: {
    fontSize: 9,
    color: "#64748b",
  },
  certGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  certItem: {
    width: "48%",
    marginBottom: 8,
  },
});

function formatDate(
  start: { month: number; year: number },
  end?: { month: number; year: number } | "present"
): string {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const startStr = `${monthNames[start.month - 1]} ${start.year}`;
  const endStr =
    end === "present" ? "Present" : end ? `${monthNames[end.month - 1]} ${end.year}` : "";

  return `${startStr} - ${endStr}`;
}

interface CVPDFProps {
  profile: Profile;
  selectedRoles: Set<number>;
  selectedCerts: Set<number>;
  selectedProjects: Set<number>;
  selectedHackathons: Set<number>;
  selectedSkills: Set<number>;
  includeEducation: boolean;
  includeCTFs: boolean;
  includeCommunityWork: boolean;
  includeAchievements: boolean;
  includeTools: boolean;
}

export const CVPDF: React.FC<CVPDFProps> = ({
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
  includeTools,
}) => {
  const selectedRolesList = profile.roles.filter((_, index) =>
    selectedRoles.has(index)
  );
  const selectedCertsList = profile.certifications.filter((_, index) =>
    selectedCerts.has(index)
  );
  const selectedProjectsList = profile.projects?.filter((_, index) =>
    selectedProjects.has(index)
  ) || [];
  const selectedHackathonsList = profile.hackathons?.filter((_, index) =>
    selectedHackathons.has(index)
  ) || [];
  const selectedSkillsList = profile.skills?.filter((_, index) =>
    selectedSkills.has(index)
  ) || [];

  return (
    <Document>
      {/* Page 1: Header, Summary, Experience */}
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title}</Text>
          <View style={styles.contactInfo}>
            {profile.links.email && <Text>{profile.links.email}</Text>}
            {profile.links.github && (
              <Link src={profile.links.github} style={{ color: "#2563eb" }}>
                GitHub
              </Link>
            )}
            {profile.links.linkedin && (
              <Link src={profile.links.linkedin} style={{ color: "#2563eb" }}>
                LinkedIn
              </Link>
            )}
            {profile.links.website && (
              <Link src={profile.links.website} style={{ color: "#2563eb" }}>
                Website
              </Link>
            )}
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summary}>{profile.summary}</Text>
        </View>

        {/* Experience */}
        {selectedRolesList.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {selectedRolesList.map((role: Role, index: number) => (
              <View key={index} style={styles.roleContainer}>
                <View style={styles.roleHeader}>
                  <View>
                    <Text style={styles.roleTitle}>{role.title}</Text>
                    <Text style={styles.roleOrg}>
                      {role.organization} • {role.location}
                    </Text>
                  </View>
                  <Text style={styles.roleDate}>
                    {formatDate(role.start, role.end)}
                  </Text>
                </View>
                <View style={styles.bulletList}>
                  {role.bullets.map((bullet: string, bulletIndex: number) => (
                    <View key={bulletIndex} style={styles.bulletItem}>
                      <Text style={styles.bulletPoint}>•</Text>
                      <Text style={{ flex: 1 }}>{bullet}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        )}
      </Page>

      {/* Page 2: Education */}
      {includeEducation && (
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {profile.education.map((edu: EducationEntry, index: number) => (
              <View key={index} style={styles.educationContainer}>
                <View style={styles.educationHeader}>
                  <View>
                    <Text style={styles.educationDegree}>
                      {edu.degree}
                      {edu.major && ` - ${edu.major}`}
                    </Text>
                    <Text style={styles.educationDetails}>
                      {edu.institution}
                      {edu.location && ` • ${edu.location}`}
                    </Text>
                  </View>
                  <Text style={styles.educationYear}>{edu.graduationYear}</Text>
                </View>
                {edu.focusAreas.length > 0 && (
                  <View style={styles.focusAreas}>
                    {edu.focusAreas.map((area: string, areaIndex: number) => (
                      <View key={areaIndex} style={styles.focusAreaTag}>
                        <Text>{area}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        </Page>
      )}

      {/* Page 3: Certifications */}
      {selectedCertsList.length > 0 && (
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            <View style={styles.certGrid}>
              {selectedCertsList.map((cert: Certification, index: number) => (
                <View key={index} style={styles.certItem}>
                  <Text style={styles.certName}>{cert.name}</Text>
                  <Text style={styles.certIssuer}>
                    {cert.issuer}
                    {cert.year && ` • ${cert.year}`}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </Page>
      )}

      {/* Page 4+: Projects, Hackathons, CTFs, Skills, Community Work, Achievements, Tools */}
      {(selectedProjectsList.length > 0 ||
        selectedHackathonsList.length > 0 ||
        (includeCTFs && profile.ctfs && profile.ctfs.length > 0) ||
        selectedSkillsList.length > 0 ||
        (includeCommunityWork && profile.communityWork && profile.communityWork.length > 0) ||
        (includeAchievements && profile.achievements && profile.achievements.length > 0) ||
        (includeTools && profile.toolsAndPlatforms && profile.toolsAndPlatforms.length > 0)) && (
        <Page size="A4" style={styles.page}>
          {/* Projects */}
          {selectedProjectsList.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Projects & Case Studies</Text>
            {selectedProjectsList.map((project: ProjectCaseStudy, index: number) => (
              <View key={index} style={styles.roleContainer}>
                <Text style={styles.roleTitle}>{project.title}</Text>
                <Text style={styles.roleOrg}>{project.context}</Text>
                <View style={styles.bulletList}>
                  {project.actions.map((action: string, actionIndex: number) => (
                    <View key={actionIndex} style={styles.bulletItem}>
                      <Text style={styles.bulletPoint}>•</Text>
                      <Text style={{ flex: 1 }}>{action}</Text>
                    </View>
                  ))}
                </View>
                {project.outcomes.length > 0 && (
                  <View style={{ marginTop: 6 }}>
                    <Text style={{ fontSize: 8, fontWeight: "bold", marginBottom: 4 }}>Outcomes:</Text>
                    {project.outcomes.map((outcome: string, outcomeIndex: number) => (
                      <View key={outcomeIndex} style={styles.bulletItem}>
                        <Text style={styles.bulletPoint}>✓</Text>
                        <Text style={{ flex: 1, fontSize: 9 }}>{outcome}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
            </View>
          )}

          {/* Hackathons */}
          {selectedHackathonsList.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Hackathons</Text>
            {selectedHackathonsList.map((hackathon: Hackathon, index: number) => (
              <View key={index} style={styles.roleContainer}>
                <View style={styles.roleHeader}>
                  <View>
                    <Text style={styles.roleTitle}>{hackathon.name}</Text>
                    <Text style={styles.roleOrg}>
                      {hackathon.focus}
                      {hackathon.partners && ` • Partners: ${hackathon.partners.join(", ")}`}
                    </Text>
                  </View>
                  <Text style={styles.roleDate}>{hackathon.year}</Text>
                </View>
                {hackathon.achievements && hackathon.achievements.length > 0 && (
                  <View style={styles.bulletList}>
                    {hackathon.achievements.map((achievement: string, achIndex: number) => (
                      <View key={achIndex} style={styles.bulletItem}>
                        <Text style={styles.bulletPoint}>•</Text>
                        <Text style={{ flex: 1 }}>{achievement}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
            </View>
          )}

          {/* CTFs */}
          {includeCTFs && profile.ctfs && profile.ctfs.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>CTF Activities</Text>
            {profile.ctfs.map((ctf: CTF, index: number) => (
              <View key={index} style={styles.roleContainer}>
                <Text style={styles.roleTitle}>{ctf.platform}</Text>
                <View style={styles.bulletList}>
                  {ctf.activities.map((activity: string, actIndex: number) => (
                    <View key={actIndex} style={styles.bulletItem}>
                      <Text style={styles.bulletPoint}>•</Text>
                      <Text style={{ flex: 1 }}>{activity}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
            </View>
          )}

          {/* Skills */}
          {selectedSkillsList.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Skills</Text>
            {selectedSkillsList.map((skill: Skill, index: number) => (
              <View key={index} style={styles.roleContainer}>
                <Text style={styles.roleTitle}>{skill.category}</Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 4, marginTop: 4 }}>
                  {skill.items.map((item: string, itemIndex: number) => (
                    <View
                      key={itemIndex}
                      style={{
                        backgroundColor: "#eff6ff",
                        paddingHorizontal: 6,
                        paddingVertical: 2,
                        borderRadius: 3,
                        marginBottom: 4,
                      }}
                    >
                      <Text style={{ fontSize: 8, color: "#2563eb" }}>{item}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
            </View>
          )}

          {/* Community Work */}
          {includeCommunityWork && profile.communityWork && profile.communityWork.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Community Work</Text>
            {profile.communityWork.map((work: CommunityWork, index: number) => (
              <View key={index} style={styles.roleContainer}>
                <Text style={styles.roleTitle}>{work.title}</Text>
                <Text style={styles.roleOrg}>{work.description}</Text>
              </View>
            ))}
            </View>
          )}

          {/* Achievements */}
          {includeAchievements && profile.achievements && profile.achievements.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Key Achievements</Text>
              <View style={styles.bulletList}>
                {profile.achievements.map((achievement: string, index: number) => (
                  <View key={index} style={styles.bulletItem}>
                    <Text style={styles.bulletPoint}>✓</Text>
                    <Text style={{ flex: 1 }}>{achievement}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Tools & Platforms */}
          {includeTools && profile.toolsAndPlatforms && profile.toolsAndPlatforms.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Tools & Platforms</Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 4 }}>
                {profile.toolsAndPlatforms.map((tool: string, index: number) => (
                  <View
                    key={index}
                    style={{
                      backgroundColor: "#eff6ff",
                      paddingHorizontal: 6,
                      paddingVertical: 2,
                      borderRadius: 3,
                      marginBottom: 4,
                    }}
                  >
                    <Text style={{ fontSize: 8, color: "#2563eb" }}>{tool}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </Page>
      )}
    </Document>
  );
};
