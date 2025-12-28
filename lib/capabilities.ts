export interface TechStackGroup {
  category: string;
  technologies: string[];
}

export interface Capability {
  id: string;
  slug: string;
  title: string;
  summary: string;
  icon: string; // Lucide icon name
  activities: string[];
  techStack: TechStackGroup[];
  systems: {
    title: string;
    description: string;
  }[];
  outcomes: string[];
}

export const capabilities: Capability[] = [
  {
    id: "health-information-systems",
    slug: "health-information-systems",
    title: "Health Information Systems (KenyaEMR / OpenMRS)",
    icon: "HeartPulse",
    summary:
      "We deploy and maintain KenyaEMR and OpenMRS instances for healthcare facilities. We configure location hierarchies, user roles, and form customization. We troubleshoot production issues, perform system updates, and ensure data integrity across facility sites.",
    activities: [
      "KenyaEMR system installation and configuration",
      "OpenMRS module deployment and customization",
      "Database setup and optimization (MySQL)",
      "Production environment troubleshooting",
      "User access management and role configuration",
      "Data migration and backup operations",
      "System performance monitoring and tuning",
      "Integration with existing healthcare workflows",
    ],
    techStack: [
      {
        category: "EMR Platform",
        technologies: ["KenyaEMR", "OpenMRS", "Bahmni"],
      },
      {
        category: "Backend",
        technologies: ["Java", "Spring Framework", "Hibernate"],
      },
      {
        category: "Database",
        technologies: ["MySQL", "PostgreSQL"],
      },
      {
        category: "Infrastructure",
        technologies: ["Linux", "Docker", "Apache Tomcat"],
      },
      {
        category: "Tools",
        technologies: ["Maven", "Git", "SQL"],
      },
    ],
    systems: [
      {
        title: "KenyaEMR Production Deployments",
        description:
          "We deploy and maintain KenyaEMR instances for healthcare facilities, handling patient registration, clinical encounters, and reporting. We configure location hierarchies, user roles, and form customization to match facility workflows.",
      },
      {
        title: "Dockerized OpenMRS Environments",
        description:
          "We containerize OpenMRS deployments for development and testing environments. We manage Docker Compose configurations for multi-container setups including application server, database, and supporting services.",
      },
      {
        title: "NGO Healthcare Program Support",
        description:
          "We provide technical support for healthcare programs implementing EMR systems. We address production issues, perform system updates, and ensure data integrity across multiple facility sites.",
      },
    ],
    outcomes: [
      "Reliable patient data management and reporting",
      "Improved clinical workflow efficiency through system configuration",
      "Stable production environments with consistent uptime",
      "Maintainable system architecture supporting long-term operations",
    ],
  },
  {
    id: "full-stack-development",
    slug: "full-stack-development",
    title: "Full-Stack Web Development",
    icon: "Layers",
    summary:
      "We build full-stack web applications from database design to user interface. We develop REST APIs, implement authentication systems, and create responsive frontends. We deploy applications serving real users with proper error handling and data persistence.",
    activities: [
      "RESTful API design and implementation",
      "Database schema design and optimization",
      "Frontend component architecture",
      "Authentication and authorization systems",
      "State management and data flow",
      "API integration and third-party services",
      "Performance optimization and caching",
      "Error handling and logging",
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
        ],
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Express", "Python", "FastAPI"],
      },
      {
        category: "Database",
        technologies: ["PostgreSQL", "MySQL", "MongoDB"],
      },
      {
        category: "Tools",
        technologies: ["Git", "Docker", "npm/yarn"],
      },
    ],
    systems: [
      {
        title: "Production Web Applications",
        description:
          "We build and deploy full-stack applications serving real users. We implement authentication, data persistence, and responsive user interfaces. Applications handle user workflows, data processing, and reporting requirements.",
      },
      {
        title: "API Development",
        description:
          "We develop REST APIs for web and mobile clients. We design endpoints for data retrieval, updates, and business logic. We implement proper error handling, validation, and security measures.",
      },
      {
        title: "Database-Backed Systems",
        description:
          "We design and implement database schemas for complex data relationships. We optimize queries for performance and maintain data integrity through proper normalization and constraints.",
      },
    ],
    outcomes: [
      "Production-ready applications with reliable functionality",
      "Maintainable codebase following best practices",
      "Scalable architecture supporting growth",
      "User-friendly interfaces with responsive design",
    ],
  },
  {
    id: "mobile-development",
    slug: "mobile-development",
    title: "Mobile Application Development",
    icon: "Smartphone",
    summary:
      "We develop cross-platform mobile applications using React Native. We deploy apps to app stores, integrate with REST APIs, and implement offline data synchronization. We handle authentication, push notifications, and platform-specific requirements for iOS and Android.",
    activities: [
      "Mobile app architecture and design",
      "Cross-platform development",
      "API integration for mobile clients",
      "Offline data synchronization",
      "Push notification implementation",
      "App store deployment",
      "Mobile-specific UI/UX optimization",
      "Performance optimization for mobile devices",
    ],
    techStack: [
      {
        category: "Mobile Framework",
        technologies: ["React Native", "Expo"],
      },
      {
        category: "Languages",
        technologies: ["JavaScript", "TypeScript"],
      },
      {
        category: "State Management",
        technologies: ["React Context", "Redux"],
      },
      {
        category: "Tools",
        technologies: ["npm/yarn", "Git", "Android Studio", "Xcode"],
      },
    ],
    systems: [
      {
        title: "Production Mobile Applications",
        description:
          "We develop and deploy mobile applications to app stores. Applications handle user authentication, data synchronization with backend services, and offline functionality. We implement proper error handling and user feedback mechanisms.",
      },
      {
        title: "Backend Integration",
        description:
          "We integrate mobile applications with REST APIs, handling authentication tokens, data fetching, and error states. We implement proper loading states and user experience optimizations.",
      },
      {
        title: "Cross-Platform Deployment",
        description:
          "We build applications targeting both iOS and Android platforms from a single codebase. We handle platform-specific requirements and testing across devices.",
      },
    ],
    outcomes: [
      "Functional mobile applications deployed to app stores",
      "Reliable data synchronization with backend services",
      "Consistent user experience across platforms",
      "Maintainable codebase supporting updates and features",
    ],
  },
  {
    id: "devops-infrastructure",
    slug: "devops-infrastructure",
    title: "DevOps & Infrastructure",
    icon: "Server",
    summary:
      "We set up and maintain Linux servers for production applications. We containerize applications with Docker, manage environment configurations, and implement deployment processes. We perform system updates, security patches, and monitoring.",
    activities: [
      "Docker containerization and orchestration",
      "Server setup and configuration (Linux)",
      "CI/CD pipeline implementation",
      "Database backup and recovery",
      "System monitoring and logging",
      "Environment management (dev/staging/prod)",
      "Security configuration and hardening",
      "Performance tuning and optimization",
    ],
    techStack: [
      {
        category: "Containers",
        technologies: ["Docker", "Docker Compose"],
      },
      {
        category: "Operating Systems",
        technologies: ["Linux", "Ubuntu", "CentOS"],
      },
      {
        category: "Web Servers",
        technologies: ["Nginx", "Apache"],
      },
      {
        category: "Databases",
        technologies: ["MySQL", "PostgreSQL"],
      },
      {
        category: "Tools",
        technologies: ["Git", "Bash", "SSH"],
      },
    ],
    systems: [
      {
        title: "Dockerized Application Deployments",
        description:
          "We containerize applications for consistent deployment across environments. We create Docker Compose configurations for multi-service applications including web servers, databases, and supporting services. We manage container lifecycle.",
      },
      {
        title: "Linux Server Management",
        description:
          "We set up and maintain Linux servers for production applications. We configure web servers, database servers, and application runtimes. We perform system updates, security patches, and monitoring.",
      },
      {
        title: "Production vs Local Environments",
        description:
          "We manage environment-specific configurations for development, staging, and production. We ensure proper separation of concerns, environment variables, and deployment processes. We handle database migrations and rollback procedures.",
      },
    ],
    outcomes: [
      "Reliable deployment processes reducing manual errors",
      "Consistent environments across development and production",
      "Improved system stability and uptime",
      "Maintainable infrastructure supporting long-term operations",
    ],
  },
  {
    id: "enterprise-it-support",
    slug: "enterprise-it-support",
    title: "Enterprise & NGO IT Support",
    icon: "LifeBuoy",
    summary:
      "We provide IT support for NGO and enterprise operations. We handle desktop support, network troubleshooting, system maintenance, and user account management. We respond to technical issues affecting organizational operations and maintain documentation for ongoing support.",
    activities: [
      "User support and troubleshooting",
      "System administration and maintenance",
      "Network configuration and troubleshooting",
      "Hardware and software installation",
      "Security updates and patches",
      "Backup and disaster recovery",
      "Documentation and knowledge transfer",
      "Training and user onboarding",
    ],
    techStack: [
      {
        category: "Operating Systems",
        technologies: ["Windows", "Linux", "macOS"],
      },
      {
        category: "Networking",
        technologies: ["TCP/IP", "DNS", "VPN"],
      },
      {
        category: "Tools",
        technologies: ["Remote Desktop", "SSH", "Ticketing Systems"],
      },
    ],
    systems: [
      {
        title: "NGO IT Infrastructure Support",
        description:
          "We provide IT support for NGO operations, including desktop support, network troubleshooting, and system maintenance. We handle user account management, software installations, and hardware issues. We ensure reliable access to critical systems and applications.",
      },
      {
        title: "Healthcare Program IT Support",
        description:
          "We support healthcare programs with IT infrastructure needs. We maintain EMR systems, network connectivity, and user access. We address technical issues affecting clinical workflows and data access.",
      },
      {
        title: "Production System Maintenance",
        description:
          "We perform regular maintenance on production systems including updates, backups, and monitoring. We respond to system issues affecting organizational operations. We maintain documentation and procedures for ongoing support.",
      },
    ],
    outcomes: [
      "Reliable IT infrastructure supporting organizational operations",
      "Reduced downtime through proactive maintenance",
      "Improved user productivity through effective support",
      "Maintained system security and compliance",
    ],
  },
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((cap) => cap.slug === slug);
}

export function getAllCapabilitySlugs(): string[] {
  return capabilities.map((cap) => cap.slug);
}

