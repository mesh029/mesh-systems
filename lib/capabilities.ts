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
      "I deploy and maintain KenyaEMR, TaifaCare, and OpenMRS instances for healthcare facilities. I configure location hierarchies, user roles, and form customization. I troubleshoot production issues, perform system updates, and ensure data integrity across facility sites.",
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
          "I deploy and maintain KenyaEMR and TaifaCare instances for healthcare facilities, handling patient registration, clinical encounters, and reporting. I configure location hierarchies, user roles, and form customization to match facility workflows.",
      },
      {
        title: "Dockerized OpenMRS Environments",
        description:
          "I containerize OpenMRS deployments for development and testing environments. I manage Docker Compose configurations for multi-container setups including application server, database, and supporting services.",
      },
      {
        title: "NGO Healthcare Program Support",
        description:
          "I provide technical support for healthcare programs implementing EMR systems. I address production issues, perform system updates, and ensure data integrity across multiple facility sites.",
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
      "I build full-stack web applications from database design to user interface. I develop REST APIs, implement authentication systems, and create responsive frontends. I deploy applications serving real users with proper error handling and data persistence.",
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
          "I build and deploy full-stack applications serving real users. I implement authentication, data persistence, and responsive user interfaces. Applications handle user workflows, data processing, and reporting requirements.",
      },
      {
        title: "API Development",
        description:
          "I develop REST APIs for web and mobile clients. I design endpoints for data retrieval, updates, and business logic. I implement proper error handling, validation, and security measures.",
      },
      {
        title: "Database-Backed Systems",
        description:
          "I design and implement database schemas for complex data relationships. I optimize queries for performance and maintain data integrity through proper normalization and constraints.",
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
      "I develop cross-platform mobile applications using Flutter and React Native. I deploy apps to app stores, integrate with REST APIs, and implement offline data synchronization. I handle authentication, push notifications, and platform-specific requirements for iOS and Android.",
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
        technologies: ["Flutter", "React Native", "Expo"],
      },
      {
        category: "Languages",
        technologies: ["Dart", "JavaScript", "TypeScript"],
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
          "I develop and deploy mobile applications to app stores using Flutter. Applications handle user authentication, data synchronization with backend services, and offline functionality. I implement proper error handling and user feedback mechanisms.",
      },
      {
        title: "Backend Integration",
        description:
          "I integrate mobile applications with REST APIs, handling authentication tokens, data fetching, and error states. I implement proper loading states and user experience optimizations.",
      },
      {
        title: "Cross-Platform Deployment",
        description:
          "I build applications targeting both iOS and Android platforms from a single codebase using Flutter. I handle platform-specific requirements and testing across devices.",
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
      "I set up and maintain Linux servers for production applications. I containerize applications with Docker, manage environment configurations, and implement deployment processes. I perform system updates, security patches, and monitoring using Cisco Meraki dashboards for multi-location management.",
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
          "I containerize applications for consistent deployment across environments. I create Docker Compose configurations for multi-service applications including web servers, databases, and supporting services. I manage container lifecycle.",
      },
      {
        title: "Linux Server Management",
        description:
          "I set up and maintain Linux servers for production applications. I configure web servers, database servers, and application runtimes. I perform system updates, security patches, and monitoring. I manage network infrastructure using Cisco Meraki dashboards across multiple office locations.",
      },
      {
        title: "Production vs Local Environments",
        description:
          "I manage environment-specific configurations for development, staging, and production. I ensure proper separation of concerns, environment variables, and deployment processes. I handle database migrations and rollback procedures. I've migrated on-premise servers to cloud environments.",
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
      "I provide IT support for NGO and enterprise operations. I handle desktop support, network troubleshooting, system maintenance, and user account management. I respond to technical issues affecting organizational operations and maintain documentation for ongoing support.",
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
          "I provide IT support for NGO operations, including desktop support, network troubleshooting, and system maintenance. I handle user account management, software installations, and hardware issues. I ensure reliable access to critical systems and applications.",
      },
      {
        title: "Healthcare Program IT Support",
        description:
          "I support healthcare programs with IT infrastructure needs. I maintain EMR systems, network connectivity, and user access. I address technical issues affecting clinical workflows and data access.",
      },
      {
        title: "Production System Maintenance",
        description:
          "I perform regular maintenance on production systems including updates, backups, and monitoring. I respond to system issues affecting organizational operations. I maintain documentation and procedures for ongoing support.",
      },
    ],
    outcomes: [
      "Reliable IT infrastructure supporting organizational operations",
      "Reduced downtime through proactive maintenance",
      "Improved user productivity through effective support",
      "Maintained system security and compliance",
    ],
  },
  {
    id: "ai-llm-integration",
    slug: "ai-llm-integration",
    title: "AI & LLM Integration",
    icon: "Bot",
    summary:
      "I integrate LLMs and agentic AI systems to improve efficiency and work output. I use ChatGPT, Claude, Cursor, and other AI tools to generate high-quality content, designs, and automate workflows. I build AI-powered features into applications and optimize development processes.",
    activities: [
      "LLM integration for content generation and automation",
      "Agentic AI workflow design and implementation",
      "AI-powered application features",
      "Development process optimization using AI tools",
      "Prompt engineering and AI system configuration",
      "AI-assisted code generation and refactoring",
      "Content creation and design generation using AI",
      "Workflow automation with AI agents",
    ],
    techStack: [
      {
        category: "AI Platforms",
        technologies: ["OpenAI GPT", "Claude (Anthropic)", "Cursor AI"],
      },
      {
        category: "Tools",
        technologies: ["GitHub Copilot", "AI Code Assistants"],
      },
      {
        category: "Integration",
        technologies: ["REST APIs", "Python", "Node.js"],
      },
    ],
    systems: [
      {
        title: "AI-Powered Development Workflows",
        description:
          "I use Cursor, Claude, and ChatGPT to accelerate development, generate code, refactor systems, and create documentation. I integrate AI tools into my daily workflow to improve productivity and code quality.",
      },
      {
        title: "Content and Design Generation",
        description:
          "I leverage generative AI to produce high-quality content, designs, and visual assets. I use AI tools to create documentation, presentations, and marketing materials efficiently.",
      },
      {
        title: "AI-Enhanced Applications",
        description:
          "I build AI-powered features into applications, integrating LLM APIs for natural language processing, content generation, and intelligent automation. I design systems that leverage AI to improve user experience and operational efficiency.",
      },
    ],
    outcomes: [
      "Improved development efficiency and code quality",
      "Faster content creation and design generation",
      "Enhanced application capabilities through AI integration",
      "Streamlined workflows with automated AI assistance",
    ],
  },
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((cap) => cap.slug === slug);
}

export function getAllCapabilitySlugs(): string[] {
  return capabilities.map((cap) => cap.slug);
}

