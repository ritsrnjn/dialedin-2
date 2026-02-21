export const COMPANY = {
  name: "DialedIn Solutions",
  tagline: "Precision-Engineered Software",
  description:
    "We design, build, and scale custom software for companies that refuse to settle for off-the-shelf.",
  email: "hello@dialedinsolutions.com",
  phone: "(555) 123-4567",
  bookingUrl: "/contact",
  calendarUrl: "#", // Replace with actual calendar link
  linkedinUrl: "#", // Replace with actual LinkedIn
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "mailto:hello@dialedinsolutions.com" },
];

export const NAV_PAGES = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Company", href: "/company" },
];

export const SERVICE_CATEGORIES: Record<
  string,
  { title: string; description: string; icon: string }[]
> = {
  "Custom Development": [
    {
      title: "Web Applications",
      description:
        "High-performance web platforms built with modern frameworks like React, Next.js, and scalable cloud architecture.",
      icon: "globe",
    },
    {
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile apps for iOS and Android that deliver seamless, performant user experiences.",
      icon: "smartphone",
    },
    {
      title: "Enterprise Solutions",
      description:
        "Robust, secure enterprise software tailored to complex organizational needs — from ERPs to multi-tenant SaaS.",
      icon: "building",
    },
    {
      title: "Scalable Architecture",
      description:
        "Cloud-native infrastructure on AWS, GCP, and Azure — designed to grow with your business from day one.",
      icon: "layers",
    },
  ],
  "AI & Intelligence": [
    {
      title: "AI & LLM-Powered Tools",
      description:
        "Custom AI solutions using the latest large language models — from intelligent assistants to decision-making engines.",
      icon: "brain",
    },
    {
      title: "Automation & Optimization",
      description:
        "End-to-end process automation that eliminates manual work, accelerates pipelines, and reduces operational cost.",
      icon: "zap",
    },
    {
      title: "Data & Analytics",
      description:
        "Data pipelines, real-time dashboards, and analytics platforms that turn raw data into actionable business decisions.",
      icon: "barChart3",
    },
  ],
  "Specialized Platforms": [
    {
      title: "Scientific & Research Software",
      description:
        "Purpose-built LIMS, data acquisition tools, and research platforms for laboratories and scientific teams.",
      icon: "flask",
    },
    {
      title: "Health & Fitness Platforms",
      description:
        "HIPAA-compliant health tech and fitness platforms — telehealth, wearable integrations, and coaching tools.",
      icon: "heart",
    },
    {
      title: "CRM & Workflow Solutions",
      description:
        "Custom CRM systems and business workflow engines that streamline operations and improve client management.",
      icon: "workflow",
    },
  ],
};

export const SERVICES_DETAILED = [
  {
    title: "AI & LLM-Powered Tools",
    slug: "ai",
    description:
      "Intelligent decision-making systems powered by the latest in AI and large language models.",
    icon: "brain",
    capabilities: [
      "Custom LLM integration & fine-tuning",
      "Natural language processing pipelines",
      "AI-powered recommendation engines",
      "Conversational AI & chatbot development",
      "Predictive analytics & forecasting",
    ],
  },
  {
    title: "Web Applications",
    slug: "web",
    description:
      "High-performance web platforms built with modern frameworks and scalable architecture.",
    icon: "globe",
    capabilities: [
      "React, Next.js & modern SPA frameworks",
      "Progressive web apps (PWA)",
      "Real-time collaborative platforms",
      "E-commerce & marketplace solutions",
      "Admin dashboards & internal tools",
    ],
  },
  {
    title: "Mobile Applications",
    slug: "mobile",
    description:
      "Native and cross-platform mobile apps that deliver seamless user experiences.",
    icon: "smartphone",
    capabilities: [
      "iOS & Android native development",
      "React Native & cross-platform apps",
      "Offline-first architecture",
      "Push notifications & real-time sync",
      "App Store optimization & launch support",
    ],
  },
  {
    title: "CRM & Workflow Solutions",
    slug: "crm",
    description:
      "Custom CRM systems and business workflows that streamline your operations.",
    icon: "workflow",
    capabilities: [
      "Custom CRM development",
      "Sales pipeline automation",
      "Client relationship tracking",
      "Workflow orchestration engines",
      "Third-party CRM integration",
    ],
  },
  {
    title: "Scientific & Research Software",
    slug: "scientific",
    description:
      "Specialized tools for laboratories, research teams, and scientific data processing.",
    icon: "flask",
    capabilities: [
      "LIMS & laboratory management systems",
      "Data acquisition & instrument integration",
      "Research data visualization",
      "Statistical analysis platforms",
      "Compliance & audit trail systems",
    ],
  },
  {
    title: "Health & Fitness Platforms",
    slug: "health",
    description:
      "HIPAA-aware health tech and fitness platforms built for scale and compliance.",
    icon: "heart",
    capabilities: [
      "HIPAA-compliant application design",
      "Telehealth & patient portals",
      "Wearable device integration",
      "Fitness tracking & coaching platforms",
      "Health data analytics & reporting",
    ],
  },
  {
    title: "Enterprise Solutions",
    slug: "enterprise",
    description:
      "Robust, secure enterprise software tailored to complex organizational needs.",
    icon: "building",
    capabilities: [
      "Legacy system modernization",
      "Enterprise resource planning (ERP)",
      "Role-based access & security",
      "Multi-tenant SaaS platforms",
      "System integration & middleware",
    ],
  },
  {
    title: "Automation & Optimization",
    slug: "automation",
    description:
      "Process automation that eliminates manual work and accelerates your pipeline.",
    icon: "zap",
    capabilities: [
      "Business process automation (BPA)",
      "ETL pipelines & data workflows",
      "CI/CD & DevOps automation",
      "Document processing & OCR",
      "Scheduling & task orchestration",
    ],
  },
  {
    title: "Data & Analytics",
    slug: "data",
    description:
      "Data pipelines, dashboards, and analytics platforms that turn raw data into decisions.",
    icon: "barChart3",
    capabilities: [
      "Data warehouse design & implementation",
      "Real-time analytics dashboards",
      "Business intelligence platforms",
      "Data lake architecture",
      "Reporting & visualization tools",
    ],
  },
  {
    title: "Scalable Architecture",
    slug: "architecture",
    description:
      "Cloud-native infrastructure and architecture designed to grow with your business.",
    icon: "layers",
    capabilities: [
      "Cloud migration & optimization (AWS, GCP, Azure)",
      "Microservices & event-driven architecture",
      "Containerization & Kubernetes",
      "Performance optimization & load testing",
      "Infrastructure as code (IaC)",
    ],
  },
];

export const INDUSTRIES_DETAILED = [
  {
    title: "Laboratory & Scientific",
    slug: "lab",
    description:
      "Purpose-built software for research laboratories, scientific instruments, and data-driven discovery.",
    highlights: [
      "LIMS & sample tracking systems",
      "Instrument data acquisition & automation",
      "Research collaboration portals",
      "Regulatory compliance & audit trails",
    ],
    icon: "microscope",
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    description:
      "HIPAA-compliant healthcare platforms that improve patient outcomes and streamline clinical workflows.",
    highlights: [
      "Telehealth & remote monitoring",
      "EHR/EMR integration",
      "Patient engagement portals",
      "Clinical decision support tools",
    ],
    icon: "stethoscope",
  },
  {
    title: "Fitness & Lifestyle Coaching",
    slug: "fitness",
    description:
      "Engaging platforms that connect coaches with clients and turn fitness goals into measurable results.",
    highlights: [
      "Workout & meal planning engines",
      "Wearable & IoT device integration",
      "Progress tracking & analytics",
      "Subscription & billing management",
    ],
    icon: "dumbbell",
  },
  {
    title: "Fintech",
    slug: "fintech",
    description:
      "Secure, compliant financial technology solutions that move money and manage risk with confidence.",
    highlights: [
      "Payment processing & gateways",
      "Risk assessment & fraud detection",
      "Regulatory compliance (PCI-DSS, SOC2)",
      "Portfolio & wealth management tools",
    ],
    icon: "dollarSign",
  },
  {
    title: "Real Estate",
    slug: "realestate",
    description:
      "Technology platforms that modernize property management, transactions, and market intelligence.",
    highlights: [
      "Property management systems",
      "MLS integration & listing platforms",
      "Virtual tours & 3D visualization",
      "Transaction management & e-signing",
    ],
    icon: "home",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your business, define the scope, and map out a technical strategy tailored to your goals. No ambiguity — just a clear plan.",
  },
  {
    number: "02",
    title: "Development",
    description:
      "Our engineers build your solution in focused sprints with continuous feedback, full transparency, and zero surprises.",
  },
  {
    number: "03",
    title: "Launch & Scale",
    description:
      "We deploy, monitor, and iterate — ensuring your product performs flawlessly as demand grows.",
  },
];

export const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "12+", label: "Industries Served" },
  { value: "100%", label: "On-Time Delivery" },
];

export const TESTIMONIALS = [
  {
    name: "Alex Chen",
    role: "CTO at MedFlow",
    content:
      "DialedIn took our LIMS prototype and turned it into a production-grade platform in 3 months. Their scientific software expertise is unmatched.",
    rating: 5,
    initials: "AC",
  },
  {
    name: "Sarah Mitchell",
    role: "CEO at FinanceHub",
    content:
      "We needed a team that understood both fintech compliance and modern architecture. DialedIn delivered on every front — on time and under budget.",
    rating: 5,
    initials: "SM",
  },
];

export const FAQS = [
  {
    question: "What services does DialedIn Solutions offer?",
    answer:
      "We offer full-spectrum software engineering — from web and mobile app development to AI/LLM tools, scientific research software, enterprise solutions, and scalable cloud architecture. If it involves code, we build it.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope and complexity. A focused MVP typically takes 6–10 weeks. Larger enterprise projects may span 3–6 months. We'll give you a realistic timeline during Discovery before a single line of code is written.",
  },
  {
    question: "What does your development process look like?",
    answer:
      "We follow a three-phase approach: Discovery (scope, strategy, architecture), Development (agile sprints with weekly demos), and Launch & Scale (deployment, monitoring, iteration). You have full visibility at every stage.",
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer:
      "Both. We've built MVPs for seed-stage startups and modernized legacy systems for established enterprises. Our engagements scale to fit — whether you need a 2-person team for 8 weeks or a full squad for 6 months.",
  },
];

export const PARTNERS = [
  "TechCorp",
  "Innovate Labs",
  "Vertex AI",
  "MedFlow",
  "FinanceHub",
  "ScaleOps",
];
