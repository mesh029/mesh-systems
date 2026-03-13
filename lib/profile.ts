/**
 * Comprehensive Profile Data
 * 
 * This is the single source of truth for:
 * - Website content (practice areas, journey, projects)
 * - CV/PDF generation (with selective section inclusion)
 * 
 * When downloading CV, user can select which sections to include.
 */

export interface Role {
  title: string;
  organization: string;
  location: string;
  baseStations: string[];
  countiesCovered: string[];
  start: { month: number; year: number };
  end?: { month: number; year: number } | "present";
  bullets: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location?: string;
  graduationYear: number;
  major?: string;
  focusAreas: string[]; // key topics / modules
}

export interface Certification {
  name: string;
  issuer: string;
  year?: number;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  role?: string;
  context: string;
  tech: string[];
  actions: string[];   // what you actually did
  outcomes: string[];  // results, measurable or qualitative
  tags: string[];     // e.g. ["HIS", "Security", "Infra", "AI"]
}

export interface Hackathon {
  name: string;
  year: number;
  location?: string;
  partners?: string[];
  focus: string;
  achievements?: string[];
}

export interface CTF {
  platform: string;
  activities: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface CommunityWork {
  title: string;
  organization?: string;
  description: string;
  year?: number;
}

export interface Publication {
  title: string;
  type: "abstract" | "article" | "presentation" | "other";
  year?: number;
  context?: string;
  description?: string;
}

export interface Profile {
  name: string;
  title: string;        // "Systems Engineer and HIS Practitioner"
  location?: string;
  summary: string;      // 2–3 sentences, first person
  links: {
    website?: string;
    github?: string;
    linkedin?: string;
    email: string;
  };
  roles: Role[];
  education: EducationEntry[];
  certifications: Certification[];
  projects: ProjectCaseStudy[];
  hackathons?: Hackathon[];
  ctfs?: CTF[];
  skills?: Skill[];
  communityWork?: CommunityWork[];
  publications?: Publication[];
  achievements?: string[];
  toolsAndPlatforms?: string[];
}

export const profile: Profile = {
  name: "Meshack Ariri",
  title: "Systems Engineer and HIS Practitioner",
  summary:
    "I design, secure, and operate health information systems and infrastructure for programs that run in the real world. My work spans EMR deployments, network and server engineering, security-aware backend and internal tools, and AI/LLM integration. I focus on reliable rollouts, clear workflows, and systems that stay maintainable under pressure.",
  links: {
    website: "https://meshreallycodes.online",
    github: "https://github.com/mesh029",
    linkedin: "https://www.linkedin.com/in/meshack-ariri/",
    email: "aririmeshack@gmail.com",
  },
  roles: [
    {
      title: "HMIS (Health Management Information Systems)",
      organization: "Program Appropriate for Technology in Health (PATH)",
      location: "Kenya",
      baseStations: ["Nyamira", "Kisumu"],
      countiesCovered: ["Homabay", "Nyamira", "Kisumu", "Migori", "Vihiga", "Kakamega"],
      start: { month: 3, year: 2025 },
      end: "present",
      bullets: [
        "Operate real-time cybersecurity monitoring across 180+ EMR deployments (KenyaEMR, TaifaCare, DHIS2), detecting and neutralizing threats before patient data exposure.",
        "Execute vulnerability assessments and security audits on production databases, VPN infrastructure, and application servers, maintaining compliance with healthcare data protection standards.",
        "Secure and maintain Windows/Linux server infrastructure hosting critical EMR data across 6 counties, implementing automated backups, encryption, and disaster recovery protocols.",
        "Design and deliver cybersecurity training programs for 80+ healthcare workers, reducing phishing incidents and strengthening organizational security posture.",
        "Lead security incident investigations with digital forensics analysis, producing actionable reports that prevent recurrence and improve system resilience.",
        "Produce executive-level security and uptime reports tracking EMR system availability, incident response times, and compliance metrics across multi-county operations.",
        "Architect secure integrations between EMR, laboratory, and pharmacy systems, enforcing data protection policies and HIPAA-aligned access controls.",
        "Design and execute ETL operations across multiple EMR database servers (MySQL, PostgreSQL, MariaDB), transforming and migrating patient data between systems while maintaining data integrity and compliance.",
        "Optimize database performance for high-volume EMR systems, writing complex SQL queries, managing indexes, and tuning configurations to reduce query response times by 50%.",
        "Manage IT asset lifecycle and access control systems, implementing role-based permissions that reduce unauthorized access by 40%.",
      ],
    },
    {
      title: "ICT Officer",
      organization: "Program Appropriate for Technology in Health (PATH)",
      location: "Kenya",
      baseStations: ["Kisumu", "Kakamega"],
      countiesCovered: ["Homabay", "Nyamira", "Kisumu", "Migori", "Vihiga", "Kakamega"],
      start: { month: 1, year: 2024 },
      end: { month: 3, year: 2025 },
      bullets: [
        "Managed ITIL-based incident lifecycle for 120+ users via Freshdesk, routing critical security escalations to subject matter experts and reducing mean time to resolution by 35%.",
        "Delivered tier-1 and tier-2 technical support across 6 counties, maintaining >98% system uptime through proactive monitoring and rapid incident response protocols.",
        "Architected and managed global Cisco Meraki network infrastructure (APs, switches, security appliances), delivering secure connectivity for multi-country operations with zero-downtime deployments.",
        "Optimized international network performance through Meraki dashboard analytics, resolving connectivity bottlenecks, enforcing firewall policies, and supporting remote access across 15+ office locations.",
        "Deployed and hardened Windows 10/11 endpoints, VoIP systems, and Office 365 suite (Outlook, Teams, SharePoint) with security baselines, reducing endpoint vulnerabilities by 50%.",
        "Administered Active Directory for 120+ accounts, implementing least-privilege access models, automated provisioning workflows, and group policy enforcement across organizational units.",
        "Operated VMware Carbon Black endpoint detection and response (EDR), neutralizing advanced threats in real time and reducing security incidents by 45%.",
        "Maintained Linux server infrastructure with automated patch management, vulnerability scanning, and compliance monitoring, ensuring 99.9% uptime for critical services.",
        "Performed database administration across multiple EMR servers, executing ETL workflows, data migrations, and backup operations using MySQL, PostgreSQL, and MariaDB to ensure data consistency and availability.",
        "Developed database schemas and optimized SQL queries for reporting systems, reducing data extraction times from 2 hours to 15 minutes for monthly analytics dashboards.",
        "Executed penetration testing and red team exercises, identifying 12 critical vulnerabilities and leading remediation efforts that strengthened organizational security posture.",
        "Developed and delivered security awareness training programs on phishing, password management, and data handling, reducing user-reported security incidents by 60%.",
        "Produced executive SLA compliance dashboards and IT asset inventory reports, enabling data-driven decisions that reduced operational costs by 20%.",
        "Built comprehensive knowledge base documenting incident patterns, resolution procedures, and preventive measures, accelerating future incident response by 40%.",
      ],
    },
    {
      title: "ICT Associate",
      organization: "Program Appropriate for Technology in Health (PATH)",
      location: "Kenya",
      baseStations: ["Kisumu", "Homabay"],
      countiesCovered: ["Homabay", "Nyamira", "Kisumu", "Migori", "Vihiga", "Kakamega"],
      start: { month: 4, year: 2023 },
      end: { month: 12, year: 2023 },
      bullets: [
        "Resolved 200+ tier-1 IT support tickets across 6 county offices, troubleshooting hardware failures, software conflicts, and network connectivity issues with 95% first-call resolution rate.",
        "Deployed network infrastructure for 8 remote office locations, configuring routers, switches, and wireless access points to establish reliable connectivity for field operations.",
        "Executed EMR system deployments (KenyaEMR, OpenMRS) across 50+ healthcare facilities, performing system configuration, user training, and post-deployment support.",
        "Engineered mobile data collection workflows using ODK (OpenDataKit) and Kobo Toolbox, enabling real-time field data capture and automated reporting for M&E teams.",
        "Managed EMR database servers (MySQL, MariaDB) across multiple facilities, performing routine maintenance, data backups, and ETL operations to ensure data consistency and system reliability.",
        "Streamlined data reporting pipelines from field collection to PRISM and National Data Warehouse, reducing reporting latency from 2 weeks to 48 hours.",
        "Maintained IT infrastructure across county offices, performing preventive maintenance, hardware upgrades, and system optimizations that reduced downtime by 30%.",
        "Supported ECD and DREAMS program technology initiatives, deploying tablets, mobile apps, and training materials for community health workers and program beneficiaries.",
        "Completed cybersecurity training programs and implemented security best practices, contributing to zero security breaches during deployment period.",
      ],
    },
  ],
  education: [
    {
      degree: "BSc Applied Computing",
      institution: "University",
      graduationYear: 2023,
      major: "Forensics and Cyber Security",
      focusAreas: [
        "Artificial Intelligence",
        "Database Management",
        "Human Computer Interaction",
        "Data Analysis",
        "Business Process Engineering",
        "Web Development",
      ],
    },
  ],
  certifications: [
    {
      name: "GitHub & Microsoft Career Essentials in Data Analysis",
      issuer: "GitHub & Microsoft",
    },
    {
      name: "Google IT Support",
      issuer: "Google",
    },
    {
      name: "CCNA",
      issuer: "Cisco",
    },
    {
      name: "GitHub Professional",
      issuer: "GitHub",
    },
    {
      name: "Azure Fundamentals",
      issuer: "Microsoft",
    },
  ],
  projects: [
    {
      slug: "emr-infrastructure-rollout",
      title: "EMR Infrastructure Rollout across 180 Facilities",
      context: "Overseeing comprehensive rollout of EMR infrastructure across multiple healthcare facilities in Kenya",
      tech: ["KenyaEMR", "TaifaCare", "Tibabu", "OpenMRS", "Linux", "MySQL", "Docker"],
      actions: [
        "Planned and executed infrastructure deployment across 180+ healthcare facilities",
        "Configured location hierarchies, user roles, and form customization for each facility",
        "Set up and maintained Linux servers hosting EMR applications and databases",
        "Implemented biometric access management systems for secure facility access",
        "Coordinated with vendors and procurement teams for equipment and services",
        "Developed infrastructure SOPs and best practice documentation",
        "Provided ongoing technical support and troubleshooting for facility staff",
      ],
      outcomes: [
        "Successfully deployed EMR systems across 180+ facilities",
        "Improved patient data management and reporting capabilities",
        "Reduced system downtime through proactive maintenance and monitoring",
        "Established standardized deployment processes for future rollouts",
      ],
      tags: ["HIS", "Infrastructure", "EMR", "Healthcare"],
    },
    {
      slug: "county-his-pilots",
      title: "County HIS Pilots: Nyamira (Tibabu, TaifaCare)",
      context: "Piloting county-level health information systems rollout in Nyamira County",
      tech: ["Tibabu", "TaifaCare", "ODK", "PRISM", "National Data Warehouse"],
      actions: [
        "Configured and deployed Tibabu and TaifaCare systems for pilot facilities",
        "Coordinated with county health officials and facility administrators",
        "Implemented data collection workflows using ODK tools",
        "Established reporting pipelines to PRISM and National Data Warehouse",
        "Conducted user training and provided ongoing support",
        "Documented pilot findings and recommendations for full rollout",
      ],
      outcomes: [
        "Successful pilot deployment in Nyamira County",
        "Improved data collection and reporting workflows",
        "Validated system configurations for broader county rollout",
        "Enhanced collaboration between county health offices and facilities",
      ],
      tags: ["HIS", "Pilot", "County Systems", "Data Collection"],
    },
    {
      slug: "cloud-migration",
      title: "Migration of On-Premise Servers to Cloud",
      context: "Migrating EMR and application servers from on-premise infrastructure to cloud environments",
      tech: ["Azure", "Linux", "Docker", "MySQL", "Backup Systems"],
      actions: [
        "Planned migration strategy and timeline for server migration",
        "Configured cloud infrastructure and security settings",
        "Migrated databases and application data with zero downtime",
        "Set up backup and disaster recovery procedures",
        "Configured monitoring and alerting systems",
        "Documented migration processes and cloud infrastructure",
      ],
      outcomes: [
        "Successfully migrated servers to cloud with minimal downtime",
        "Improved scalability and resource management",
        "Reduced maintenance overhead and infrastructure costs",
        "Enhanced disaster recovery capabilities",
      ],
      tags: ["Infrastructure", "Cloud", "Migration", "DevOps"],
    },
    {
      slug: "internal-tools-development",
      title: "Internal Tools Development",
      context: "Developed internal systems to improve organizational efficiency",
      tech: ["Flutter", "React", "Node.js", "PostgreSQL", "REST APIs", "Payment APIs"],
      actions: [
        "Built Boardroom Booking application for managing meeting room reservations",
        "Developed HR System for employee management and workflows",
        "Created Inventory Management System for tracking organizational assets",
        "Integrated payment APIs for processing transactions",
        "Designed and implemented REST APIs for system integrations",
        "Deployed applications and provided user training",
      ],
      outcomes: [
        "Improved operational efficiency through automated workflows",
        "Reduced manual processes and administrative overhead",
        "Enhanced data tracking and reporting capabilities",
        "Streamlined internal operations across multiple departments",
      ],
      tags: ["Backend", "Mobile", "Internal Tools", "APIs"],
    },
    {
      slug: "github-workflows-marketplace",
      title: "GitHub Workflows and Marketplace Publishing",
      context: "Developed and published GitHub workflows and marketplace actions",
      tech: ["GitHub Actions", "YAML", "JavaScript", "Node.js"],
      actions: [
        "Created reusable GitHub Actions workflows for CI/CD pipelines",
        "Developed Podcasting API with GitHub Marketplace integration",
        "Published workflows to GitHub Marketplace for public use",
        "Documented workflow usage and best practices",
        "Maintained and updated workflows based on feedback",
      ],
      outcomes: [
        "Published workflows available to GitHub community",
        "Improved development workflows through automation",
        "Contributed to open-source GitHub ecosystem",
        "Streamlined CI/CD processes for multiple projects",
      ],
      tags: ["DevOps", "GitHub", "CI/CD", "Open Source"],
    },
    {
      slug: "security-improvements",
      title: "Security Improvements in HIS Systems",
      context: "Applied security best practices and conducted security assessments for healthcare systems",
      tech: ["OWASP", "Penetration Testing", "Vulnerability Assessment", "Biometrics", "Access Management"],
      actions: [
        "Applied OWASP best practices to backend systems and APIs",
        "Conducted vulnerability assessments and penetration testing",
        "Implemented biometric access management systems",
        "Developed ticketing system for HIS security issues",
        "Applied security patches and hardening measures",
        "Conducted security awareness training for healthcare workers",
      ],
      outcomes: [
        "Improved system security posture and compliance",
        "Reduced security vulnerabilities through proactive assessments",
        "Enhanced access controls and authentication mechanisms",
        "Established security incident response procedures",
      ],
      tags: ["Security", "HIS", "OWASP", "Compliance"],
    },
  ],
  hackathons: [
    {
      name: "NRF 2024",
      year: 2024,
      partners: ["Safaricom", "Microsoft"],
      focus: "Security and innovation in systems",
      achievements: [
        "Competed in security-focused challenges",
        "Applied practical security practices to healthcare systems",
        "Collaborated with industry partners on innovative solutions",
      ],
    },
    {
      name: "Cyberise Hackathon 2024",
      year: 2024,
      partners: ["Safaricom", "Microsoft"],
      focus: "Cybersecurity and system security",
      achievements: [
        "Participated in cybersecurity challenges",
        "Explored security innovations for healthcare systems",
        "Gained hands-on experience with cutting-edge security practices",
      ],
    },
    {
      name: "ICP Blockchain Hackathon 2025",
      year: 2025,
      focus: "Blockchain applications and innovations",
      achievements: [
        "Explored blockchain technology applications",
        "Developed innovative solutions using blockchain",
        "Collaborated with developers on decentralized systems",
      ],
    },
  ],
  ctfs: [
    {
      platform: "Hack the Box",
      activities: [
        "Participated in Capture The Flag challenges",
        "Practiced penetration testing and vulnerability exploitation",
        "Developed skills in network security and system hardening",
        "Completed various security challenges and labs",
      ],
    },
  ],
  skills: [
    {
      category: "Systems Engineering & Infrastructure",
      items: [
        "Linux/Unix System Administration",
        "Windows Server Administration",
        "Cisco Meraki Network Management",
        "Docker & Containerization",
        "Cloud Infrastructure (Azure)",
        "Server Migration & Deployment",
        "Network Setup & Optimization",
        "VPN Configuration",
        "APN-based Connectivity",
      ],
    },
    {
      category: "Health Information Systems",
      items: [
        "KenyaEMR Deployment & Configuration",
        "OpenMRS Administration",
        "TaifaCare & Tibabu Systems",
        "DHIS2 Integration",
        "EMR Infrastructure Rollout",
        "Biometric Access Management",
        "HIS Ticketing Systems",
        "ODK Data Collection",
        "PRISM & National Data Warehouse Reporting",
      ],
    },
    {
      category: "Security",
      items: [
        "OWASP Best Practices",
        "Penetration Testing",
        "Vulnerability Assessment",
        "Network Security",
        "Endpoint Security (VMware Carbon Black)",
        "Active Directory Administration",
        "Security Incident Response",
        "Digital Forensics",
        "Security Awareness Training",
      ],
    },
    {
      category: "Backend Development",
      items: [
        "Node.js & Express",
        "Python & FastAPI",
        "REST API Design",
        "API Integration",
        "Payment APIs",
        "GitHub Actions & CI/CD",
        "Git Workflows",
      ],
    },
    {
      category: "Database Management",
      items: [
        "SQL (Advanced Querying & Optimization)",
        "MySQL Administration",
        "PostgreSQL Administration",
        "MariaDB Administration",
        "Prisma ORM",
        "Database Design & Schema Architecture",
        "ETL Operations & Data Migration",
        "Database Performance Tuning",
        "Backup & Recovery Strategies",
        "Multi-Server Database Management",
      ],
    },
    {
      category: "Frontend & Mobile",
      items: [
        "React & Next.js",
        "TypeScript",
        "Flutter (Cross-platform Mobile)",
        "React Native",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      category: "AI & LLM Integration",
      items: [
        "ChatGPT Integration",
        "Claude AI",
        "Cursor AI Assistant",
        "Generative AI for Content & Design",
        "AI-Powered Development Workflows",
        "LLM API Integration",
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        "Git & Version Control",
        "GitHub Workflows",
        "Docker & Docker Compose",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Backup & Disaster Recovery",
      ],
    },
    {
      category: "IT Support & Administration",
      items: [
        "ITIL Workflows",
        "Freshdesk Ticketing",
        "Office 365 Administration",
        "VoIP Systems",
        "Remote Support",
        "User Training & Documentation",
        "IT Asset Management",
      ],
    },
  ],
  communityWork: [
    {
      title: "Promoting Children Growth and Development (ECD)",
      description: "Supported Early Childhood Development programs through technology and infrastructure",
    },
    {
      title: "Championing Young Girls Education and ICT Introduction",
      description: "Championed young girls' education and introduction to ICT systems, fostering innovation with DREAMS programs",
    },
    {
      title: "Abstract Writing",
      description: "Contributed to technical and academic abstract writing for conferences and publications",
    },
  ],
  publications: [
    {
      title: "Abstract Writing",
      type: "abstract",
      description: "Contributed abstracts for technical conferences and healthcare system publications",
    },
  ],
  achievements: [
    "Oversaw EMR infrastructure rollout across 180+ healthcare facilities",
    "Successfully migrated on-premise servers to cloud infrastructure",
    "Participated in multiple hackathons (NRF 2024, Cyberise 2024, ICP Blockchain 2025)",
    "Published GitHub workflows and actions to GitHub Marketplace",
    "Developed internal tools (Boardroom Booking, HR System, Inventory Management) improving organizational efficiency",
    "Conducted security assessments and implemented OWASP best practices across systems",
    "Supported county-level HIS pilots (Nyamira - Tibabu, TaifaCare)",
    "Delivered cybersecurity awareness training to 80+ healthcare workers",
  ],
  toolsAndPlatforms: [
    "Cisco Meraki Dashboards",
    "GitHub Actions & Marketplace",
    "ODK Tools",
    "PRISM & National Data Warehouse",
    "Freshdesk",
    "VMware Carbon Black",
    "Active Directory",
    "Office 365",
    "Azure",
    "Docker",
    "Linux/Unix",
    "Windows Server",
  ],
};
