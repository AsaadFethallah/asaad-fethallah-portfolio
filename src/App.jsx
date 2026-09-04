import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronRight,
  Cloud,
  Code2,
  Command,
  Database,
  Download,
  ExternalLink,
  FileText,
  Fingerprint,
  Github,
  GraduationCap,
  KeyRound,
  Layers,
  Linkedin,
  Lock,
  Mail,
  Moon,
  Network,
  Radar,
  Server,
  Shield,
  Sun,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";

const cvPath = "/AsaadFethallah_CV_PFE_EN.pdf";

const navItems = [
  { label: "Domains", href: "#domains" },
  { label: "Operations", href: "#operations" },
  { label: "Credentials", href: "#credentials" },
  { label: "Thomas", href: "#thomas" },
];

const techLogos = [
  "AWS",
  "Wazuh",
  "Docker",
  "Kubernetes",
  "Linux",
  "Red Hat",
  "Fortinet",
  "Cisco",
  "Python",
  "Java",
  "React",
  "Angular",
  "Django",
  "Spring Boot",
  "OPA",
  "JWT",
  "ELK",
  "Git",
  "MCP",
  "gVisor",
  "KEDA",
];

const domains = [
  {
    icon: Radar,
    eyebrow: "SOC console",
    title: "Detection and SIEM",
    accent: "cyan",
    desc: "Wazuh deployment, real-time alerts, dashboards, log centralization, triage prioritization and intrusion detection.",
    nodes: ["Wazuh", "ELK", "Rules", "Dashboards"],
  },
  {
    icon: Cloud,
    eyebrow: "Cloud perimeter",
    title: "AWS security",
    accent: "amber",
    desc: "Provisioning and hardening around EC2, VPC, S3 and IAM with a security-first infrastructure mindset.",
    nodes: ["EC2", "VPC", "S3", "IAM"],
  },
  {
    icon: Layers,
    eyebrow: "Secure delivery",
    title: "DevSecOps systems",
    accent: "green",
    desc: "Linux, Docker, Kubernetes, CI/CD foundations, gVisor, KEDA and operational automation.",
    nodes: ["Linux", "Docker", "K8s", "CI/CD"],
  },
  {
    icon: BrainCircuit,
    eyebrow: "AI governance",
    title: "Agent security",
    accent: "violet",
    desc: "Exposure to governed AI-agent access patterns with MCP, OPA, JWT, RBAC/ABAC, HITL, SLA, PKI and JIT concepts.",
    nodes: ["MCP", "OPA", "JWT", "PKI"],
  },
];

const operations = [
  {
    icon: BrainCircuit,
    title: "Arcax - Talentys Data",
    meta: "Jun 2026 - Present",
    type: "AI security gateway",
    desc: "Worked on a secure mediation gateway that transforms enterprise resources into governed capabilities for AI agents.",
    stack: ["MCP", "OPA", "JWT", "RBAC/ABAC", "gVisor", "KEDA", "OTEL"],
  },
  {
    icon: Cloud,
    title: "AWS Architecture Deployment - Wazuh SIEM",
    meta: "Security lab",
    type: "Cloud SOC architecture",
    desc: "AWS infrastructure for Wazuh using EC2, VPC, S3 and IAM, with detection rules, dashboards and real-time alerts.",
    impact: [{ value: "~40%", label: "reported triage reduction" }],
    stack: ["AWS", "Wazuh", "IAM", "Detection"],
  },
  {
    icon: Activity,
    title: "SOC Alert Prioritization Engine",
    meta: "Machine learning",
    type: "Alert intelligence",
    desc: "ML pipeline trained on roughly 10,000 events to classify SOC alert criticality with 87% accuracy.",
    impact: [
      { value: "~10K", label: "events used" },
      { value: "87%", label: "reported accuracy" },
      { value: "~60%", label: "reported alert-noise reduction" },
    ],
    stack: ["Python", "ML", "SOC", "Triage"],
  },
  {
    icon: BriefcaseBusiness,
    title: "NTT Data Web Application",
    meta: "Jun-Jul 2025",
    type: "Full-stack delivery",
    desc: "Full-stack web application work using a Spring Boot REST API and Angular frontend.",
    stack: ["Spring Boot", "Angular", "REST"],
  },
  {
    icon: Code2,
    title: "SNRT Mobile Application",
    meta: "Apr-Jun 2024",
    type: "Mobile/backend",
    desc: "Cross-platform Flutter development connected to a Django REST backend.",
    stack: ["Flutter", "Django", "REST API"],
  },
  {
    icon: Lock,
    title: "Secure E-commerce - ODARIS",
    meta: "Project",
    type: "Secure web platform",
    desc: "Spring Boot and React e-commerce project involving JWT authentication, secure sessions and payment flows.",
    stack: ["React", "Spring Boot", "JWT"],
  },
];

const education = [
  {
    title: "Computer Science Engineering - Cybersecurity",
    place: "ENSET - Engineering Cycle II-CCN",
    period: "2024 - Present",
    detail:
      "Web development, virtualization, AWS cloud, ethical hacking, cryptography, systems administration and machine learning.",
  },
  {
    title: "Specialized Technician / DUT in Computer Engineering",
    place: "EST Casablanca",
    period: "2022 - 2024",
    detail:
      "Linux, Windows Server, Cisco networking, security, databases and web development.",
  },
];

const credentialGroups = [
  {
    issuer: "Cisco Networking Academy",
    items: [
      "Introduction to Cybersecurity",
      "Ethical Hacker",
      "Linux Unhatched and Linux Essentials",
      "CCNA: Introduction to Networks",
      "Python Essentials 1 and 2",
      "eCIR course - exam not taken",
    ],
  },
  {
    issuer: "AWS Academy",
    items: ["Cloud Security Foundations", "Cloud Foundations"],
  },
  {
    issuer: "Red Hat",
    items: ["Red Hat System Administration I (RH124) - Version 10"],
  },
  {
    issuer: "Fortinet NSE",
    items: [
      "Introduction to the Threat Landscape 3.0",
      "Technical Introduction to Cybersecurity 3.0",
      "Getting Started in Cybersecurity 3.0",
    ],
  },
  {
    issuer: "Offensive Security, OSINT and Governance",
    items: [
      "Ethical Hacker Arabic - ls7ee7",
      "OSINT Fundamentals - TCM Security",
      "ISO 27001: ISMS Certified - SkillFront",
      "EF SET English Certificate 73/100 - C2 Proficient",
    ],
  },
];

const technologyAliases = {
  K8s: "Kubernetes",
  Rules: "Detection Rules",
  Dashboards: "Security Dashboards",
  OTEL: "OpenTelemetry",
  ML: "Machine Learning",
  SOC: "Security Operations Center",
  Triage: "Alert Triage",
  REST: "REST API",
  Infrastructure: "Infrastructure Security",
  Networks: "Networking",
  Logs: "Security Logs",
  Access: "Access Control",
};

const technologyIntel = {
  AWS: {
    logo: "AWS",
    category: "Cloud platform",
    definition:
      "Amazon Web Services is a cloud platform for compute, networking, storage, identity, monitoring and application infrastructure.",
    facts: [
      "IAM controls identities, permissions and least-privilege access.",
      "VPC lets teams design isolated cloud networks with subnets and routing.",
      "Security teams often combine AWS logs, SIEM rules and alerts for cloud monitoring.",
    ],
    profile:
      "Appears in Asaad's AWS/Wazuh SIEM architecture through EC2, VPC, S3 and IAM.",
    related: ["EC2", "VPC", "S3", "IAM"],
  },
  Wazuh: {
    logo: "WZ",
    category: "SIEM and security monitoring",
    definition:
      "Wazuh is an open-source security platform used for log collection, threat detection, alerting, compliance monitoring and endpoint visibility.",
    facts: [
      "It can collect events from endpoints, servers and cloud environments.",
      "Detection rules turn raw events into security alerts.",
      "Dashboards help analysts investigate and prioritize alerts.",
    ],
    profile:
      "Used in Asaad's AWS-based SIEM project with detection rules, dashboards and real-time alerts.",
    related: ["Detection Rules", "Security Dashboards", "ELK"],
  },
  Docker: {
    logo: "DK",
    category: "Container platform",
    definition:
      "Docker packages applications and dependencies into containers so software can run consistently across environments.",
    facts: [
      "Containers share the host kernel but isolate application processes.",
      "Docker images make deployment repeatable.",
      "Container security depends on image hygiene, permissions and runtime isolation.",
    ],
    profile:
      "Listed in Asaad's cloud and infrastructure stack and relevant to DevSecOps work.",
    related: ["Kubernetes", "gVisor", "KEDA"],
  },
  Kubernetes: {
    logo: "K8S",
    category: "Container orchestration",
    definition:
      "Kubernetes orchestrates containers across clusters, managing scheduling, services, deployments and scaling.",
    facts: [
      "Pods are the smallest deployable workload unit in Kubernetes.",
      "Services expose workloads reliably inside or outside a cluster.",
      "Security work often includes RBAC, network policy, secrets and runtime isolation.",
    ],
    profile:
      "Appears in Asaad's cloud-native exposure around gVisor, KEDA and Arcax.",
    related: ["Docker", "gVisor", "KEDA", "RBAC/ABAC"],
  },
  Linux: {
    logo: "LX",
    category: "Operating system",
    definition:
      "Linux is an open-source operating-system family widely used for servers, cloud infrastructure, security tooling and development.",
    facts: [
      "SOC work often depends on Linux logs, services, permissions and process analysis.",
      "Cloud servers and containers commonly run Linux-based systems.",
      "Strong Linux fundamentals help with troubleshooting and hardening.",
    ],
    profile:
      "Part of Asaad's education and systems foundation, alongside Windows Server and Red Hat.",
    related: ["Red Hat", "Docker", "Security Logs"],
  },
  "Red Hat": {
    logo: "RH",
    category: "Enterprise Linux",
    definition:
      "Red Hat is an enterprise Linux ecosystem used for server administration, automation and production infrastructure.",
    facts: [
      "Red Hat Enterprise Linux is common in business server environments.",
      "System administration includes users, services, storage, networking and logs.",
      "RH124 is the Red Hat System Administration I course.",
    ],
    profile:
      "Asaad lists Red Hat System Administration I (RH124) - Version 10 training.",
    related: ["Linux", "Security Logs", "Infrastructure Security"],
  },
  Fortinet: {
    logo: "FT",
    category: "Cybersecurity vendor",
    definition:
      "Fortinet provides cybersecurity products and training around networks, threat landscape awareness and security operations.",
    facts: [
      "Fortinet training often covers threat concepts, security fundamentals and network protection.",
      "Threat landscape knowledge helps analysts understand attacker behavior.",
      "Vendor training is useful when paired with hands-on projects.",
    ],
    profile:
      "Asaad lists Fortinet NSE training in threat landscape and cybersecurity fundamentals.",
    related: ["Cisco", "Security Operations Center", "Detection"],
  },
  Cisco: {
    logo: "CS",
    category: "Networking and security training",
    definition:
      "Cisco is a major networking vendor and Cisco Networking Academy provides training in networking, Linux, Python and cybersecurity fundamentals.",
    facts: [
      "Networking fundamentals support SOC, cloud security and incident triage.",
      "CCNA: Introduction to Networks is foundation-level networking training.",
      "Security analysts need protocols, ports, routing and segmentation basics.",
    ],
    profile:
      "Asaad lists Cisco training in cybersecurity, ethical hacking, Linux, networking and Python.",
    related: ["Networking", "Linux", "Python"],
  },
  Python: {
    logo: "PY",
    category: "Programming language",
    definition:
      "Python is a general-purpose programming language widely used for automation, APIs, scripting, data analysis and machine learning.",
    facts: [
      "Python is common in security automation and log processing.",
      "It has a large ML and data ecosystem.",
      "Django is a Python web framework used for backend applications.",
    ],
    profile:
      "Used in Asaad's SOC ML project, salary prediction project and Django-related backend work.",
    related: ["Machine Learning", "Django", "REST API"],
  },
  Java: {
    logo: "JV",
    category: "Programming language",
    definition:
      "Java is a strongly typed programming language used for backend services, enterprise applications and cross-platform systems.",
    facts: [
      "Spring Boot is a popular Java framework for APIs and backend services.",
      "Java applications often power enterprise web platforms.",
      "Security concerns include authentication, authorization, sessions and API validation.",
    ],
    profile:
      "Appears through Asaad's Spring Boot REST API and secure e-commerce work.",
    related: ["Spring Boot", "REST API", "JWT"],
  },
  React: {
    logo: "RX",
    category: "Frontend library",
    definition:
      "React is a JavaScript library for building component-based user interfaces.",
    facts: [
      "React apps are built from reusable UI components.",
      "It is often paired with APIs built in frameworks such as Spring Boot or Django.",
      "Secure frontend work includes careful handling of sessions, tokens and user inputs.",
    ],
    profile:
      "Appears in Asaad's secure e-commerce project and this portfolio interface.",
    related: ["JavaScript", "Spring Boot", "JWT"],
  },
  Angular: {
    logo: "NG",
    category: "Frontend framework",
    definition:
      "Angular is a TypeScript-based framework for building structured web applications.",
    facts: [
      "Angular includes routing, forms, dependency injection and HTTP tooling.",
      "It is commonly used in enterprise frontend projects.",
      "Frontend/backend integration often depends on REST APIs.",
    ],
    profile:
      "Used in Asaad's NTT Data web application experience with a Spring Boot REST API.",
    related: ["Spring Boot", "REST API", "Java"],
  },
  Django: {
    logo: "DJ",
    category: "Python web framework",
    definition:
      "Django is a Python framework for building backend web applications and APIs.",
    facts: [
      "Django can expose REST APIs through Django REST Framework.",
      "It includes built-in patterns for models, routing and admin workflows.",
      "Backend security includes validation, authentication and permissions.",
    ],
    profile:
      "Used in Asaad's SNRT mobile application backend with Flutter.",
    related: ["Python", "REST API", "Flutter"],
  },
  "Spring Boot": {
    logo: "SB",
    category: "Java backend framework",
    definition:
      "Spring Boot is a Java framework that simplifies building REST APIs, backend services and web applications.",
    facts: [
      "It is commonly used for enterprise backend services.",
      "REST controllers expose HTTP API endpoints.",
      "Security work often involves authentication, authorization and session handling.",
    ],
    profile:
      "Used in Asaad's NTT Data web application and secure e-commerce project.",
    related: ["Java", "REST API", "JWT"],
  },
  OPA: {
    logo: "OPA",
    category: "Policy engine",
    definition:
      "Open Policy Agent is a policy engine used to make authorization and governance decisions with policy-as-code.",
    facts: [
      "OPA separates policy decisions from application logic.",
      "It can support authorization models such as RBAC and ABAC.",
      "Policies are commonly evaluated by services, gateways or infrastructure components.",
    ],
    profile:
      "Appears in Asaad's Arcax exposure around governed AI-agent access.",
    related: ["RBAC/ABAC", "JWT", "MCP"],
  },
  JWT: {
    logo: "JWT",
    category: "Token format",
    definition:
      "JSON Web Token is a compact token format used to carry signed claims between systems.",
    facts: [
      "JWTs are often used in authentication and authorization flows.",
      "A signed token can prove claims were issued by a trusted party.",
      "JWT security depends on validation, expiration, issuer checks and key management.",
    ],
    profile:
      "Appears in Asaad's secure e-commerce project and Arcax-related security context.",
    related: ["Access Control", "PKI", "OPA"],
  },
  ELK: {
    logo: "ELK",
    category: "Log analytics stack",
    definition:
      "ELK refers to Elasticsearch, Logstash and Kibana, a stack often used for search, log processing and dashboards.",
    facts: [
      "Elasticsearch indexes and searches data.",
      "Logstash processes and enriches events.",
      "Kibana visualizes logs and metrics for investigation.",
    ],
    profile:
      "Listed in Asaad's security tools stack alongside Wazuh SIEM.",
    related: ["Wazuh", "Security Logs", "Security Dashboards"],
  },
  Git: {
    logo: "GIT",
    category: "Version control",
    definition:
      "Git is a distributed version-control system used to track source-code changes and collaborate on software.",
    facts: [
      "Git records changes through commits.",
      "Branches allow parallel development workflows.",
      "Version control supports auditability and reliable collaboration.",
    ],
    profile:
      "Listed in Asaad's engineering tools and used across software-oriented work.",
    related: ["CI/CD", "DevSecOps", "Spring Boot"],
  },
  MCP: {
    logo: "MCP",
    category: "AI-agent integration protocol",
    definition:
      "Model Context Protocol is a protocol pattern for connecting AI agents to tools, resources and structured context.",
    facts: [
      "MCP helps standardize how AI systems access external capabilities.",
      "Governance matters because agents may request sensitive tools or data.",
      "Security design can include authorization, isolation, telemetry and human approval.",
    ],
    profile:
      "Appears in Arcax, described in the CV as a secure mediation gateway for AI agents.",
    related: ["OPA", "RBAC/ABAC", "OpenTelemetry"],
  },
  gVisor: {
    logo: "GV",
    category: "Container isolation",
    definition:
      "gVisor is a container sandboxing technology that adds an isolation layer between workloads and the host kernel.",
    facts: [
      "It is designed to reduce the kernel attack surface exposed to containers.",
      "Runtime isolation is one layer of cloud-native security.",
      "It is relevant when running untrusted or sensitive workloads.",
    ],
    profile:
      "Appears in Asaad's Arcax/cloud-native security exposure.",
    related: ["Docker", "Kubernetes", "Infrastructure Security"],
  },
  KEDA: {
    logo: "KD",
    category: "Kubernetes autoscaling",
    definition:
      "KEDA is Kubernetes Event-Driven Autoscaling, used to scale workloads based on events and external metrics.",
    facts: [
      "KEDA can scale workloads from event sources such as queues or metrics systems.",
      "Autoscaling helps match resources to demand.",
      "Security-minded scaling still needs policy, observability and resource limits.",
    ],
    profile:
      "Appears in Asaad's Arcax/cloud-native infrastructure exposure.",
    related: ["Kubernetes", "OpenTelemetry", "gVisor"],
  },
  "Detection Rules": {
    logo: "RULE",
    category: "SOC concept",
    definition:
      "Detection rules define conditions that turn logs or events into security alerts.",
    facts: [
      "Rules encode suspicious patterns or policy violations.",
      "Good rules balance visibility with false-positive control.",
      "Detection engineering is the practice of building and improving these rules.",
    ],
    profile:
      "Asaad configured detection rules in the AWS/Wazuh SIEM project.",
    related: ["Wazuh", "Detection", "Security Logs"],
  },
  "Security Dashboards": {
    logo: "DASH",
    category: "SOC visibility",
    definition:
      "Security dashboards visualize alerts, logs, trends and investigation signals for analysts.",
    facts: [
      "Dashboards help reduce time spent searching raw logs.",
      "Useful dashboards emphasize priority, context and actionability.",
      "SIEM dashboards often support triage and reporting.",
    ],
    profile:
      "Asaad configured dashboards in the Wazuh SIEM project.",
    related: ["Wazuh", "ELK", "Alert Triage"],
  },
  EC2: {
    logo: "EC2",
    category: "AWS compute",
    definition:
      "Amazon EC2 provides virtual servers for running applications and services in AWS.",
    facts: [
      "EC2 instances run in VPC networks.",
      "Security groups control allowed traffic to instances.",
      "Logs and agents can feed SIEM monitoring.",
    ],
    profile:
      "Used in Asaad's AWS architecture dedicated to Wazuh SIEM.",
    related: ["AWS", "VPC", "IAM"],
  },
  VPC: {
    logo: "VPC",
    category: "AWS networking",
    definition:
      "Amazon VPC lets teams create isolated virtual networks in AWS.",
    facts: [
      "VPC design includes subnets, routing tables and gateways.",
      "Network segmentation supports cloud security.",
      "Security groups and network ACLs help control traffic.",
    ],
    profile:
      "Used in Asaad's AWS/Wazuh architecture for cloud networking.",
    related: ["AWS", "EC2", "Networking"],
  },
  S3: {
    logo: "S3",
    category: "AWS object storage",
    definition:
      "Amazon S3 is object storage used for files, backups, logs, static assets and data lakes.",
    facts: [
      "S3 access is controlled by IAM and bucket policies.",
      "Cloud security requires careful public-access and encryption settings.",
      "S3 can store logs or artifacts used by security workflows.",
    ],
    profile:
      "Listed as part of Asaad's AWS architecture work.",
    related: ["AWS", "IAM", "Security Logs"],
  },
  IAM: {
    logo: "IAM",
    category: "Identity and access management",
    definition:
      "IAM manages users, roles, permissions and policies for access to cloud resources.",
    facts: [
      "Least privilege means granting only the permissions required.",
      "Roles are often safer than long-lived static credentials.",
      "IAM mistakes can become serious cloud security risks.",
    ],
    profile:
      "Used in Asaad's AWS SIEM architecture and relevant to cloud security.",
    related: ["AWS", "Access Control", "JWT"],
  },
  "CI/CD": {
    logo: "CI",
    category: "Delivery automation",
    definition:
      "CI/CD automates building, testing and delivering software changes.",
    facts: [
      "Continuous integration validates code changes early.",
      "Continuous delivery prepares deployable releases.",
      "DevSecOps adds security checks into the delivery pipeline.",
    ],
    profile:
      "Listed in Asaad's security and engineering tools as a DevSecOps-related area.",
    related: ["Git", "Docker", "DevSecOps"],
  },
  PKI: {
    logo: "PKI",
    category: "Trust infrastructure",
    definition:
      "Public Key Infrastructure manages certificates, keys and trust relationships for secure communication and identity.",
    facts: [
      "PKI supports TLS certificates and trust chains.",
      "It relies on public/private key cryptography.",
      "Certificate lifecycle management is important for secure systems.",
    ],
    profile:
      "Appears in Asaad's Arcax technology exposure.",
    related: ["JWT", "Access Control", "MCP"],
  },
  "RBAC/ABAC": {
    logo: "AC",
    category: "Authorization models",
    definition:
      "RBAC grants permissions by role, while ABAC grants permissions using attributes such as user, resource, action and context.",
    facts: [
      "RBAC is easier to reason about for role-based organizations.",
      "ABAC can express more contextual authorization policies.",
      "OPA can evaluate policy decisions involving RBAC or ABAC concepts.",
    ],
    profile:
      "Appears in Asaad's Arcax exposure around governed access control.",
    related: ["OPA", "JWT", "Access Control"],
  },
  OpenTelemetry: {
    logo: "OTEL",
    category: "Observability",
    definition:
      "OpenTelemetry is an observability standard for collecting traces, metrics and logs from software systems.",
    facts: [
      "Telemetry helps teams understand system behavior.",
      "Distributed traces show how requests move through services.",
      "Security teams can use observability signals during investigation.",
    ],
    profile:
      "Appears in Asaad's Arcax technology exposure as OTEL.",
    related: ["MCP", "KEDA", "Security Logs"],
  },
  Detection: {
    logo: "DET",
    category: "Security monitoring",
    definition:
      "Detection is the process of identifying suspicious or malicious activity from events, logs and behavior.",
    facts: [
      "Detection quality affects alert volume and analyst workload.",
      "Useful detections need context and tuning.",
      "Detection work connects directly to SIEM and SOC operations.",
    ],
    profile:
      "Appears through Wazuh detection rules, alerting and SOC alert prioritization.",
    related: ["Wazuh", "Detection Rules", "Security Operations Center"],
  },
  "Machine Learning": {
    logo: "ML",
    category: "Applied data modeling",
    definition:
      "Machine learning uses data to train models that identify patterns or make predictions.",
    facts: [
      "Classification models can assign events to categories.",
      "Model metrics need clear validation methodology.",
      "In security, ML can support prioritization but does not replace analyst judgment.",
    ],
    profile:
      "Used in Asaad's SOC alert prioritization project and salary prediction project.",
    related: ["Python", "Security Operations Center", "Alert Triage"],
  },
  "Security Operations Center": {
    logo: "SOC",
    category: "Security operations",
    definition:
      "A Security Operations Center monitors, detects, investigates and escalates security events.",
    facts: [
      "SOC work depends on logs, alerts, triage and playbooks.",
      "SIEM platforms centralize data for monitoring.",
      "Blue Team roles focus on defense, detection and response readiness.",
    ],
    profile:
      "Asaad's strongest career positioning is SOC, Blue Team, cloud security and DevSecOps.",
    related: ["Wazuh", "Detection", "Alert Triage"],
  },
  "Alert Triage": {
    logo: "TRI",
    category: "SOC workflow",
    definition:
      "Alert triage is the process of reviewing alerts, judging severity and deciding what should be investigated first.",
    facts: [
      "Triage reduces overload by focusing attention on higher-risk alerts.",
      "Context from logs, assets and identity improves prioritization.",
      "False positives are a major triage challenge.",
    ],
    profile:
      "Appears in Asaad's Wazuh SIEM work and ML-based alert prioritization project.",
    related: ["Security Operations Center", "Wazuh", "Machine Learning"],
  },
  "REST API": {
    logo: "API",
    category: "Backend interface",
    definition:
      "A REST API exposes resources and actions over HTTP so frontends, mobile apps and services can communicate.",
    facts: [
      "Common REST methods include GET, POST, PUT, PATCH and DELETE.",
      "API security includes validation, authentication and authorization.",
      "REST APIs often connect web or mobile clients to backend logic.",
    ],
    profile:
      "Appears in Asaad's Spring Boot, Angular, Django and Flutter work.",
    related: ["Django", "Spring Boot", "JWT"],
  },
  Flutter: {
    logo: "FL",
    category: "Mobile UI toolkit",
    definition:
      "Flutter is a cross-platform UI toolkit for building mobile, web and desktop applications from one codebase.",
    facts: [
      "Flutter uses the Dart programming language.",
      "It is often paired with REST APIs for backend communication.",
      "Cross-platform development can target Android and iOS from shared code.",
    ],
    profile:
      "Used in Asaad's SNRT mobile application experience with a Django REST backend.",
    related: ["Django", "REST API"],
  },
  "Infrastructure Security": {
    logo: "INF",
    category: "Security discipline",
    definition:
      "Infrastructure security protects servers, cloud resources, networks, containers and operational platforms.",
    facts: [
      "It combines hardening, access control, monitoring and secure architecture.",
      "Cloud-native infrastructure adds container and orchestration security concerns.",
      "Good infrastructure security supports reliable SOC visibility.",
    ],
    profile:
      "Matches Asaad's Linux, AWS, Docker, Kubernetes, Wazuh and Arcax exposure.",
    related: ["AWS", "Linux", "Kubernetes"],
  },
  Networking: {
    logo: "NET",
    category: "Systems foundation",
    definition:
      "Networking connects systems through protocols, addressing, routing, ports and traffic controls.",
    facts: [
      "SOC analysis often starts with IPs, ports, DNS, HTTP and network flows.",
      "Cloud VPC design is a networking problem as much as a cloud problem.",
      "Segmentation helps limit exposure and movement across systems.",
    ],
    profile:
      "Supported by Asaad's Cisco networking foundation and AWS VPC work.",
    related: ["Cisco", "VPC", "Security Operations Center"],
  },
  "Security Logs": {
    logo: "LOG",
    category: "Security data",
    definition:
      "Security logs are records of system, application, network and identity activity used for monitoring and investigation.",
    facts: [
      "Centralized logs help analysts search and correlate events.",
      "Log quality affects detection and triage quality.",
      "Logs can feed SIEM dashboards, rules and alerts.",
    ],
    profile:
      "Appears in Asaad's Wazuh SIEM project through centralized security logging.",
    related: ["Wazuh", "ELK", "Detection Rules"],
  },
  "Access Control": {
    logo: "ACL",
    category: "Security principle",
    definition:
      "Access control decides who or what can access a resource and which actions are allowed.",
    facts: [
      "Authorization checks should be explicit and auditable.",
      "Common models include IAM, RBAC and ABAC.",
      "Tokens, policies and certificates often support access-control systems.",
    ],
    profile:
      "Appears through AWS IAM, JWT, OPA, RBAC/ABAC and Arcax governance concepts.",
    related: ["IAM", "OPA", "RBAC/ABAC"],
  },
  DevSecOps: {
    logo: "DSO",
    category: "Security practice",
    definition:
      "DevSecOps integrates security practices into software delivery, infrastructure and operations.",
    facts: [
      "It brings security earlier into development workflows.",
      "Common areas include CI/CD, containers, secrets, dependency checks and runtime monitoring.",
      "Security engineering connects software delivery with defensive operations.",
    ],
    profile:
      "One of Asaad's target areas, supported by software development, Docker, Kubernetes, Git and cloud exposure.",
    related: ["CI/CD", "Docker", "Git"],
  },
  JavaScript: {
    logo: "JS",
    category: "Web language",
    definition:
      "JavaScript is the main programming language of the web browser and is also used on servers through runtimes such as Node.js.",
    facts: [
      "React applications are written with JavaScript or TypeScript.",
      "Frontend security includes careful handling of inputs, tokens and browser APIs.",
      "JavaScript powers interactive portfolio features like Thomas and the tech intel screen.",
    ],
    profile:
      "Appears indirectly through React and this portfolio's user interface.",
    related: ["React", "REST API"],
  },
};

function getTechnologyIntel(label) {
  const canonicalName = technologyAliases[label] || label;
  const known = technologyIntel[canonicalName];

  if (known) {
    return { name: canonicalName, ...known };
  }

  return {
    name: label,
    logo: label.slice(0, 4).toUpperCase(),
    category: "Portfolio concept",
    definition:
      "This item is part of the portfolio's security and engineering vocabulary.",
    facts: [
      "It appears as a clickable profile signal on the page.",
      "Its meaning depends on the section where it is used.",
      "Thomas can also answer profile-oriented questions through the terminal.",
    ],
    profile: "Included as a visible keyword in Asaad's portfolio.",
    related: ["Security Operations Center", "AWS", "Wazuh"],
  };
}

const terminalResponses = {
  help: [
    "Available commands:",
    "whoami: profile summary",
    "skills: security and engineering stack",
    "projects: operational project log",
    "certs: certification and training vault",
    "pfe: final-year project target",
    "contact: professional channels",
    "scan: run portfolio signal scan",
    "clear: reset terminal",
  ],
  whoami: [
    "Asaad FETHALLAH",
    "Cybersecurity and Digital Trust engineering student at ENSET.",
    "Focus: SOC engineering, cloud security, DevSecOps and governed AI access.",
  ],
  skills: [
    "Security: Wazuh SIEM, ELK, detection rules, intrusion detection, OSINT, ISO 27001.",
    "Cloud: AWS, EC2, VPC, S3, IAM, Docker, Kubernetes, gVisor, KEDA, VMware.",
    "Systems: Linux, Windows Server, Red Hat, Cisco networking.",
    "Code: Java, Python, SQL/NoSQL, React, Angular, Spring Boot, Django, Git.",
  ],
  projects: [
    "1. Arcax - governed AI-agent mediation platform.",
    "2. AWS Wazuh SIEM - cloud SOC architecture and alerting.",
    "3. SOC Alert Prioritization - ML classifier, 87% accuracy.",
    "4. Secure E-commerce - React/Spring Boot/JWT secure sessions.",
    "5. SNRT Mobile - Flutter client with Django REST backend.",
  ],
  certs: [
    "Cisco: Ethical Hacker, Introduction to Cybersecurity, CCNA Intro, Linux, Python.",
    "AWS Academy: Cloud Security Foundations, Cloud Foundations.",
    "Red Hat: RH124 System Administration I.",
    "Fortinet: Threat Landscape, Technical Cybersecurity, Getting Started.",
    "TCM Security: OSINT Fundamentals. SkillFront: ISO 27001 ISMS.",
  ],
  pfe: [
    "Target: final-year project oriented toward cybersecurity.",
    "Preferred missions: SOC, SIEM automation, detection engineering, cloud security, DevSecOps, alert enrichment, AI access governance.",
  ],
  contact: [
    "Email: assaad2005.fet@gmail.com",
    "Location: Casablanca, Morocco",
    "LinkedIn: linkedin.com/in/asaad-fethallah-1137b1338",
    "GitHub: github.com/AsaadFethallah",
  ],
  scan: [
    "thomas scan --profile asaad",
    "[ok] SOC signal detected",
    "[ok] AWS and Wazuh experience indexed",
    "[ok] DevSecOps stack loaded",
    "[ok] PFE readiness: strong student-level match",
  ],
};

const initialTerminal = [
  { type: "system", text: "Hi, I am Thomas." },
  { type: "system", text: "I answer questions about Asaad's cybersecurity profile in terminal mode." },
  { type: "system", text: "Run 'help' to see what you can ask me." },
];

function LogoSvg({ children, className = "" }) {
  return (
    <svg
      className={`tech-logo-mark ${className}`}
      viewBox="0 0 120 120"
      role="img"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function TechLogo({ name }) {
  switch (name) {
    case "AWS":
      return (
        <LogoSvg className="logo-aws">
          <path d="M25 56c4-15 17-24 32-20 7-12 27-9 31 5 10 1 18 9 18 20 0 12-9 21-22 21H38c-13 0-23-10-23-22 0-10 4-17 10-20" />
          <path d="M37 80c14 11 36 15 58 2" />
          <path d="M88 77l9 4-6 8" />
          <path d="M38 55h10l4 20 7-20h8l7 20 4-20h10" />
        </LogoSvg>
      );
    case "Wazuh":
      return (
        <LogoSvg>
          <path d="M60 16l39 13v27c0 25-15 40-39 49-24-9-39-24-39-49V29l39-13z" />
          <path d="M34 46l10 32 13-25 12 25 16-38" />
          <path d="M44 78h32" />
        </LogoSvg>
      );
    case "Docker":
      return (
        <LogoSvg>
          <path d="M30 50h14v12H30zM47 50h14v12H47zM64 50h14v12H64zM47 35h14v12H47zM64 35h14v12H64zM81 50h14v12H81z" />
          <path d="M19 65c12 4 55 4 84-1-4 19-19 30-42 30-21 0-36-9-42-29z" />
          <path d="M91 55c6-8 13-6 18 1-5 3-11 4-18 3" />
          <path d="M38 93c-5 0-10-1-15-4" />
        </LogoSvg>
      );
    case "Kubernetes":
      return (
        <LogoSvg>
          <path d="M60 13l42 24v47l-42 23-42-23V37l42-24z" />
          <circle cx="60" cy="60" r="21" />
          <circle cx="60" cy="60" r="5" className="fill-strong" />
          <path d="M60 27v21M60 72v21M27 60h21M72 60h21M37 37l15 15M68 68l15 15M83 37L68 52M52 68L37 83" />
        </LogoSvg>
      );
    case "Linux":
      return (
        <LogoSvg>
          <path d="M42 84c-12 2-21 7-24 15 15 7 69 7 84 0-3-8-12-13-24-15" />
          <path d="M43 51c0-21 8-34 17-34s17 13 17 34c0 12 6 20 8 31H35c2-11 8-19 8-31z" />
          <circle cx="52" cy="44" r="3" className="fill-strong" />
          <circle cx="68" cy="44" r="3" className="fill-strong" />
          <path d="M53 59c4 4 10 4 14 0" />
        </LogoSvg>
      );
    case "Red Hat":
      return (
        <LogoSvg>
          <path d="M21 72c13 18 65 18 78 0" />
          <path d="M32 65c2-20 13-31 28-31s26 11 28 31H32z" />
          <path d="M44 37c6-10 26-10 32 0" />
          <path d="M27 67c20 8 46 8 66 0" />
        </LogoSvg>
      );
    case "Fortinet":
      return (
        <LogoSvg>
          <path d="M28 28h20v20H28zM72 28h20v20H72zM28 72h20v20H28zM72 72h20v20H72z" />
          <path d="M50 40h20M40 50v20M80 50v20M50 80h20" />
          <path d="M54 54h12v12H54z" className="fill-soft" />
        </LogoSvg>
      );
    case "Cisco":
      return (
        <LogoSvg>
          <path d="M22 75h76" />
          <path d="M30 67V45M42 67V35M54 67V25M66 67V25M78 67V35M90 67V45" />
          <path d="M28 86c17 9 47 9 64 0" />
        </LogoSvg>
      );
    case "Python":
      return (
        <LogoSvg>
          <path d="M59 17c-17 0-26 5-26 15v16h33c8 0 14 6 14 14v11h8c11 0 18-8 18-19v-7c0-11-7-18-18-18H56" />
          <path d="M61 103c17 0 26-5 26-15V72H54c-8 0-14-6-14-14V47h-8c-11 0-18 8-18 19v7c0 11 7 18 18 18h32" />
          <circle cx="47" cy="32" r="3" className="fill-strong" />
          <circle cx="73" cy="88" r="3" className="fill-strong" />
        </LogoSvg>
      );
    case "Java":
      return (
        <LogoSvg>
          <path d="M44 70h39c0 14-9 24-20 24S44 84 44 70z" />
          <path d="M82 73h8c7 0 7 12-5 13" />
          <path d="M38 99h50" />
          <path d="M56 18c11 12-12 18 1 31M69 18c12 14-16 20-1 35M49 51c9 5 29 5 38-1" />
        </LogoSvg>
      );
    case "React":
      return (
        <LogoSvg>
          <circle cx="60" cy="60" r="6" className="fill-strong" />
          <ellipse cx="60" cy="60" rx="42" ry="16" />
          <ellipse cx="60" cy="60" rx="42" ry="16" transform="rotate(60 60 60)" />
          <ellipse cx="60" cy="60" rx="42" ry="16" transform="rotate(120 60 60)" />
        </LogoSvg>
      );
    case "Angular":
      return (
        <LogoSvg>
          <path d="M60 14l39 15-7 56-32 21-32-21-7-56 39-15z" />
          <path d="M42 82l18-45 18 45M49 67h22" />
        </LogoSvg>
      );
    case "Django":
      return (
        <LogoSvg>
          <path d="M43 22v76h18c22 0 35-15 35-38S83 22 61 22H43z" />
          <path d="M60 40v40h3c11 0 17-8 17-20s-6-20-17-20h-3z" />
          <path d="M29 22v76" />
        </LogoSvg>
      );
    case "Spring Boot":
      return (
        <LogoSvg>
          <path d="M97 25C70 23 43 34 29 58 16 80 23 99 45 104c30 7 55-17 52-79z" />
          <path d="M35 82c18-2 35-13 49-37" />
          <path d="M49 66c7 0 15 3 21 8" />
        </LogoSvg>
      );
    case "Git":
      return (
        <LogoSvg>
          <path d="M60 13l47 47-47 47-47-47 47-47z" />
          <circle cx="45" cy="45" r="6" className="fill-strong" />
          <circle cx="61" cy="61" r="6" className="fill-strong" />
          <circle cx="76" cy="77" r="6" className="fill-strong" />
          <path d="M49 49l24 24M49 45h20c7 0 12 5 12 12v13" />
        </LogoSvg>
      );
    case "JWT":
      return (
        <LogoSvg>
          <path d="M60 20v22M60 78v22M20 60h22M78 60h22M32 32l16 16M72 72l16 16M88 32L72 48M48 72L32 88" />
          <path d="M46 46h28v28H46z" />
        </LogoSvg>
      );
    case "ELK":
      return (
        <LogoSvg>
          <path d="M25 31h70v19H25zM25 55h70v19H25zM25 79h70v19H25z" />
          <path d="M37 40h20M37 64h32M37 88h26" />
        </LogoSvg>
      );
    case "Flutter":
      return (
        <LogoSvg>
          <path d="M71 16L26 61l16 16 61-61H71z" />
          <path d="M72 58L50 80l22 22h31L66 65l6-7z" />
          <path d="M50 80l16-15" />
        </LogoSvg>
      );
    case "OPA":
      return (
        <LogoSvg>
          <path d="M25 24h52l18 18v54H25V24z" />
          <path d="M77 24v19h18" />
          <path d="M39 56h42M39 69h28M39 82h36" />
          <circle cx="84" cy="84" r="12" />
          <path d="M78 84l4 4 8-10" />
        </LogoSvg>
      );
    case "MCP":
      return (
        <LogoSvg>
          <path d="M34 35h21v21H34zM65 35h21v21H65zM49 69h22v22H49z" />
          <path d="M55 46h10M45 56v13M75 56v13M49 80H28M71 80h21" />
          <circle cx="25" cy="80" r="5" className="fill-strong" />
          <circle cx="95" cy="80" r="5" className="fill-strong" />
        </LogoSvg>
      );
    case "gVisor":
      return (
        <LogoSvg>
          <path d="M60 16l38 14v26c0 24-14 40-38 49-24-9-38-25-38-49V30l38-14z" />
          <path d="M42 45h36v30H42z" />
          <path d="M52 45v-8h16v8M51 60h18" />
        </LogoSvg>
      );
    case "KEDA":
      return (
        <LogoSvg>
          <path d="M60 15l37 22v45l-37 23-37-23V37l37-22z" />
          <path d="M28 65h18l7-20 13 35 8-22h18" />
          <circle cx="60" cy="60" r="23" />
        </LogoSvg>
      );
    case "EC2":
      return (
        <LogoSvg>
          <path d="M25 33h70v54H25z" />
          <path d="M39 47h42M39 60h42M39 73h26" />
          <path d="M48 87v13M72 87v13M40 100h40" />
        </LogoSvg>
      );
    case "VPC":
      return (
        <LogoSvg>
          <path d="M60 15l45 45-45 45-45-45 45-45z" />
          <path d="M33 40h54v40H33z" />
          <circle cx="44" cy="60" r="5" className="fill-strong" />
          <circle cx="60" cy="48" r="5" className="fill-strong" />
          <circle cx="76" cy="60" r="5" className="fill-strong" />
          <circle cx="60" cy="74" r="5" className="fill-strong" />
          <path d="M49 57l8-6M65 51l7 6M72 64l-8 7M56 71l-8-7" />
        </LogoSvg>
      );
    case "S3":
      return (
        <LogoSvg>
          <ellipse cx="60" cy="32" rx="31" ry="12" />
          <path d="M29 32v54c0 7 14 12 31 12s31-5 31-12V32" />
          <path d="M29 59c0 7 14 12 31 12s31-5 31-12" />
        </LogoSvg>
      );
    case "IAM":
      return (
        <LogoSvg>
          <circle cx="49" cy="48" r="15" />
          <path d="M25 92c3-18 13-27 24-27s21 9 24 27" />
          <path d="M78 51h27M97 51v13M88 51v9" />
          <circle cx="78" cy="51" r="7" />
        </LogoSvg>
      );
    case "CI/CD":
      return (
        <LogoSvg>
          <path d="M38 39c10-13 31-15 44-4l8 7" />
          <path d="M91 25v18H73" />
          <path d="M82 81c-10 13-31 15-44 4l-8-7" />
          <path d="M29 95V77h18" />
          <path d="M44 60h32" />
        </LogoSvg>
      );
    case "PKI":
      return (
        <LogoSvg>
          <path d="M31 25h44l14 14v57H31V25z" />
          <path d="M75 25v15h14" />
          <circle cx="55" cy="58" r="11" />
          <path d="M64 66l20 20M78 80l-8 8" />
        </LogoSvg>
      );
    case "RBAC/ABAC":
    case "Access Control":
      return (
        <LogoSvg>
          <circle cx="60" cy="33" r="12" />
          <path d="M33 89c4-23 18-36 27-36s23 13 27 36" />
          <path d="M23 44h20M77 44h20M33 44v18M87 44v18" />
          <path d="M49 82h22" />
        </LogoSvg>
      );
    case "OpenTelemetry":
      return (
        <LogoSvg>
          <circle cx="27" cy="72" r="8" className="fill-strong" />
          <circle cx="60" cy="42" r="8" className="fill-strong" />
          <circle cx="93" cy="72" r="8" className="fill-strong" />
          <path d="M34 67l19-18M67 49l19 18M27 80v15h66V80" />
          <path d="M45 95v-9M60 95v-15M75 95v-9" />
        </LogoSvg>
      );
    case "Machine Learning":
      return (
        <LogoSvg>
          <circle cx="31" cy="38" r="8" className="fill-strong" />
          <circle cx="31" cy="82" r="8" className="fill-strong" />
          <circle cx="60" cy="60" r="9" className="fill-strong" />
          <circle cx="91" cy="35" r="8" className="fill-strong" />
          <circle cx="91" cy="85" r="8" className="fill-strong" />
          <path d="M38 42l14 12M38 78l14-12M69 56l15-15M69 65l15 15" />
        </LogoSvg>
      );
    case "Security Operations Center":
      return (
        <LogoSvg>
          <path d="M19 29h82v48H19z" />
          <path d="M29 41h25v24H29zM64 41h27M64 54h27M64 67h18" />
          <path d="M48 77v15M72 77v15M39 92h42" />
        </LogoSvg>
      );
    case "Alert Triage":
      return (
        <LogoSvg>
          <path d="M25 26h70L68 59v35l-16 8V59L25 26z" />
          <path d="M60 34v22" />
          <circle cx="60" cy="72" r="4" className="fill-strong" />
        </LogoSvg>
      );
    case "REST API":
      return (
        <LogoSvg>
          <path d="M29 39h62v42H29z" />
          <path d="M43 54h34M43 67h20" />
          <circle cx="25" cy="60" r="8" />
          <circle cx="95" cy="60" r="8" />
          <path d="M33 60h54" />
        </LogoSvg>
      );
    case "Infrastructure Security":
      return (
        <LogoSvg>
          <path d="M27 25h66v24H27zM27 54h66v24H27zM27 83h66v15H27z" />
          <path d="M60 45l22 8v15c0 14-8 24-22 29-14-5-22-15-22-29V53l22-8z" />
        </LogoSvg>
      );
    case "Networking":
      return (
        <LogoSvg>
          <circle cx="28" cy="60" r="10" className="fill-strong" />
          <circle cx="60" cy="32" r="10" className="fill-strong" />
          <circle cx="92" cy="60" r="10" className="fill-strong" />
          <circle cx="60" cy="88" r="10" className="fill-strong" />
          <path d="M36 53l16-14M68 39l16 14M84 67L68 81M52 81L36 67M38 60h44M60 42v36" />
        </LogoSvg>
      );
    case "Security Logs":
      return (
        <LogoSvg>
          <path d="M32 19h47l15 15v67H32V19z" />
          <path d="M79 19v17h15" />
          <path d="M45 49h33M45 63h33M45 77h22" />
          <path d="M42 92l9-9 8 8 15-17" />
        </LogoSvg>
      );
    case "Detection":
    case "Detection Rules":
      return (
        <LogoSvg>
          <circle cx="60" cy="60" r="38" />
          <circle cx="60" cy="60" r="22" />
          <circle cx="60" cy="60" r="6" className="fill-strong" />
          <path d="M60 22v16M60 82v16M22 60h16M82 60h16" />
          <path d="M60 60l27-20" />
        </LogoSvg>
      );
    case "Security Dashboards":
      return (
        <LogoSvg>
          <path d="M22 25h76v70H22z" />
          <path d="M22 45h76M45 45v50" />
          <path d="M33 80l12-15M58 80l10-22 11 12 11-25" />
        </LogoSvg>
      );
    case "DevSecOps":
      return (
        <LogoSvg>
          <path d="M34 70c-16 0-20-20-7-29 12-8 24 1 33 19 9 18 21 27 33 19 13-9 9-29-7-29-12 0-21 10-26 20-5-10-14-20-26-20z" />
          <path d="M60 43l16 6v12c0 10-6 17-16 21-10-4-16-11-16-21V49l16-6z" />
        </LogoSvg>
      );
    case "JavaScript":
      return (
        <LogoSvg>
          <path d="M25 25h70v70H25z" />
          <path d="M48 43v31c0 10-6 16-17 13M67 82c5 5 18 5 20-3 4-14-22-9-20-24 1-10 14-13 24-6" />
        </LogoSvg>
      );
    default:
      return (
        <LogoSvg>
          <path d="M60 15l40 23v44l-40 23-40-23V38l40-23z" />
          <path d="M36 60h48M60 36v48" />
          <circle cx="60" cy="60" r="18" />
        </LogoSvg>
      );
  }
}

function TechButton({ label, index, className, onSelect, children }) {
  const intel = getTechnologyIntel(label);

  return (
    <button
      type="button"
      className={className}
      onClick={() => onSelect(label)}
      aria-label={`Read facts about ${intel.name}`}
    >
      {children || (
        <>
          {typeof index === "number" ? (
            <span>{String(index + 1).padStart(2, "0")}</span>
          ) : null}
          {label}
        </>
      )}
    </button>
  );
}

function TechIntelScreen({ intel, onClose, onSelect }) {
  if (!intel) {
    return null;
  }

  return (
    <div className="tech-intel-backdrop" role="presentation" onMouseDown={onClose}>
      <article
        className="tech-intel-screen"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tech-intel-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="intel-topline">
          <span>technology intel</span>
          <button type="button" className="intel-close" onClick={onClose} aria-label="Close">
            <X aria-hidden="true" />
          </button>
        </div>

        <div className="intel-hero">
          <div className="intel-logo" aria-hidden="true">
            <TechLogo name={intel.name} />
          </div>
          <div className="intel-copy">
            <span className="intel-category">{intel.category}</span>
            <h3 id="tech-intel-title">{intel.name}</h3>
            <p>{intel.definition}</p>
          </div>
        </div>

        <div className="intel-grid">
          <section>
            <h4>Facts</h4>
            <ul>
              {intel.facts.map((fact) => (
                <li key={fact}>
                  <ChevronRight aria-hidden="true" />
                  {fact}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4>Profile link</h4>
            <p>{intel.profile}</p>
            <div className="intel-related" aria-label={`Related items for ${intel.name}`}>
              {intel.related?.map((item) => (
                <button type="button" key={item} onClick={() => onSelect(item)}>
                  {item}
                </button>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}

function Portfolio() {
  const [dark, setDark] = useState(true);
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState(initialTerminal);
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  const visibleYear = useMemo(() => new Date().getFullYear(), []);
  const selectedIntel = selectedTechnology
    ? getTechnologyIntel(selectedTechnology)
    : null;

  const openTechnology = (label) => {
    setSelectedTechnology(label);
  };

  const runCommand = (rawCommand) => {
    const normalized = rawCommand.trim().toLowerCase();

    if (!normalized) {
      return;
    }

    if (normalized === "clear") {
      setHistory(initialTerminal);
      setCommand("");
      return;
    }

    const response = terminalResponses[normalized] || [
      `command not found: ${rawCommand}`,
      "Run 'help' for the command list.",
    ];

    setHistory((current) => [
      ...current,
      { type: "command", text: `thomas@asaad:~$ ${rawCommand}` },
      ...response.map((line) => ({ type: "output", text: line })),
    ]);
    setCommand("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    runCommand(command);
  };

  return (
    <div className={dark ? "portfolio-shell dark-mode dark" : "portfolio-shell light-mode"}>
      <div className="circuit-background" aria-hidden="true" />
      <header className="topbar">
        <a className="brand-lockup" href="#top" aria-label="Asaad Fethallah home">
          <span className="brand-mark">
            <Shield aria-hidden="true" />
          </span>
          <span>
            <strong>Asaad FETHALLAH</strong>
            <small>Cybersecurity and Digital Trust</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Portfolio sections">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          className="theme-toggle"
          size="icon"
          variant="outline"
          onClick={() => setDark((current) => !current)}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
        </Button>
      </header>

      <main id="top">
        <section className="hero-section section-band">
          <div className="hero-copy">
            <div className="status-pill">
              <span className="status-dot" aria-hidden="true" />
              Open to SOC-oriented PFE opportunities
            </div>
            <h1>Cybersecurity student building SOC, cloud and AI-security systems.</h1>
            <p className="hero-lead">
              Engineering student in Cybersecurity and Digital Trust at ENSET,
              with hands-on exposure to Wazuh SIEM, AWS infrastructure, Linux,
              cloud-native tools, software development and ML-assisted SOC alert
              prioritization.
            </p>

            <div className="hero-actions">
              <Button asChild className="primary-action">
                <a href={cvPath} download>
                  <Download aria-hidden="true" />
                  Download CV
                </a>
              </Button>
              <Button asChild variant="outline" className="ghost-action">
                <a href="mailto:assaad2005.fet@gmail.com">
                  <Mail aria-hidden="true" />
                  Contact
                </a>
              </Button>
            </div>

            <div className="social-row" aria-label="Professional links">
              <a
                href="https://www.linkedin.com/in/asaad-fethallah-1137b1338/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin aria-hidden="true" />
                LinkedIn
                <ExternalLink aria-hidden="true" />
              </a>
              <a
                href="https://github.com/AsaadFethallah/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <Github aria-hidden="true" />
                GitHub
                <ExternalLink aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-console" aria-label="Profile command console">
            <div className="hud-frame">
              <div className="hud-header">
                <span>identity packet</span>
                <span>verified</span>
              </div>
              <div className="portrait-shell">
                <img src="/Toxedo.jpeg" alt="Asaad Fethallah portrait" />
                <div className="portrait-scan" aria-hidden="true" />
              </div>
              <div className="identity-grid">
                <span>Casablanca</span>
                <span>ENSET II-CCN</span>
                <span>SOC Focus</span>
                <span>C2 English</span>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-matrix section-band" aria-label="Technology stack">
          <div className="section-heading compact">
            <span className="section-kicker">Stack radar</span>
            <h2>Tools, systems and platforms in the lab.</h2>
          </div>
          <div className="logo-wall">
            {techLogos.map((logo, index) => (
              <TechButton
                className="logo-chip"
                index={index}
                key={logo}
                label={logo}
                onSelect={openTechnology}
              />
            ))}
          </div>
        </section>

        <section className="section-band" id="domains">
          <div className="section-heading">
            <span className="section-kicker">Core domains</span>
            <h2>Four synced security themes.</h2>
            <p>
              Detection, cloud perimeter, secure delivery and AI governance,
              each grounded in technologies from the CV.
            </p>
          </div>

          <div className="domain-grid">
            {domains.map((domain) => {
              const Icon = domain.icon;
              return (
                <Card className={`domain-card accent-${domain.accent}`} key={domain.title}>
                  <CardContent>
                    <div className="domain-icon">
                      <Icon aria-hidden="true" />
                    </div>
                    <span>{domain.eyebrow}</span>
                    <h3>{domain.title}</h3>
                    <p>{domain.desc}</p>
                    <div className="node-row">
                      {domain.nodes.map((node) => (
                        <TechButton
                          className="node-chip"
                          key={node}
                          label={node}
                          onSelect={openTechnology}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="section-band operations-zone" id="operations">
          <div className="section-heading">
            <span className="section-kicker">Operation log</span>
            <h2>Experience and project record.</h2>
            <p>
              Professional experience and technical projects are separated from
              generic skill lists so the story reads quickly and credibly.
            </p>
          </div>

          <div className="operation-list">
            {operations.map((operation) => {
              const Icon = operation.icon;
              return (
                <article className="operation-card" key={operation.title}>
                  <div className="operation-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <div className="operation-meta">
                      <span>{operation.type}</span>
                      <span>{operation.meta}</span>
                    </div>
                    <h3>{operation.title}</h3>
                    <p>{operation.desc}</p>
                    {operation.impact ? (
                      <div className="impact-row" aria-label={`${operation.title} metrics`}>
                        {operation.impact.map((item) => (
                          <span className="impact-pill" key={item.label}>
                            <strong>{item.value}</strong>
                            {item.label}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    <div className="stack-row">
                      {operation.stack.map((item) => (
                        <TechButton
                          className="stack-chip"
                          key={item}
                          label={item}
                          onSelect={openTechnology}
                        />
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="split-section section-band">
          <div className="education-panel">
            <div className="section-heading inline">
              <span className="section-kicker">Training path</span>
              <h2>Education.</h2>
            </div>
            <div className="education-list">
              {education.map((item) => (
                <article className="education-item" key={item.title}>
                  <GraduationCap aria-hidden="true" />
                  <div>
                    <span>{item.period}</span>
                    <h3>{item.title}</h3>
                    <p>{item.place}</p>
                    <small>{item.detail}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="focus-panel">
            <div className="focus-header">
              <Fingerprint aria-hidden="true" />
              <span>PFE target</span>
            </div>
            <h2>SOC engineering with cloud, automation and AI governance.</h2>
            <p>
              Best-fit missions: SIEM automation, detection engineering, cloud
              security, DevSecOps pipelines, alert enrichment, infrastructure
              hardening or governed AI-agent access.
            </p>
            <div className="focus-grid">
              <TechButton
                className="focus-chip"
                label="Infrastructure"
                onSelect={openTechnology}
              >
                <Server aria-hidden="true" />
                Infrastructure
              </TechButton>
              <TechButton
                className="focus-chip"
                label="Networks"
                onSelect={openTechnology}
              >
                <Network aria-hidden="true" />
                Networks
              </TechButton>
              <TechButton
                className="focus-chip"
                label="Logs"
                onSelect={openTechnology}
              >
                <Database aria-hidden="true" />
                Logs
              </TechButton>
              <TechButton
                className="focus-chip"
                label="Access"
                onSelect={openTechnology}
              >
                <KeyRound aria-hidden="true" />
                Access
              </TechButton>
            </div>
          </div>
        </section>

        <section className="section-band credentials-zone" id="credentials">
          <div className="section-heading">
            <span className="section-kicker">Credential vault</span>
            <h2>Certifications and training grouped by signal.</h2>
          </div>

          <div className="credential-grid">
            {credentialGroups.map((group) => (
              <Card className="credential-card" key={group.issuer}>
                <CardContent>
                  <div className="credential-title">
                    <BadgeCheck aria-hidden="true" />
                    <h3>{group.issuer}</h3>
                  </div>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <ChevronRight aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="section-band thomas-zone" id="thomas">
          <div className="section-heading">
            <span className="section-kicker">Interactive shell</span>
            <h2>Ask Thomas Anything.</h2>
            <p>
              Query the portfolio like a command-line profile instead of reading
              every section manually.
            </p>
          </div>

          <div className="terminal-layout">
            <div className="terminal-card">
              <div className="terminal-top">
                <div className="terminal-lights" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="terminal-title">
                  <Terminal aria-hidden="true" />
                  Thomas
                </div>
                <span className="terminal-status">secure session</span>
              </div>

              <div className="terminal-screen" aria-live="polite">
                {history.map((entry, index) => (
                  <div className={`terminal-line ${entry.type}`} key={`${entry.text}-${index}`}>
                    {entry.text}
                  </div>
                ))}
              </div>

              <form className="terminal-input" onSubmit={handleSubmit}>
                <label htmlFor="thomas-command">thomas@asaad:~$</label>
                <input
                  id="thomas-command"
                  value={command}
                  onChange={(event) => setCommand(event.target.value)}
                  placeholder="help"
                  autoComplete="off"
                />
                <Button type="submit" className="terminal-run">
                  <Command aria-hidden="true" />
                  Run
                </Button>
              </form>
            </div>

            <div className="quick-commands" aria-label="Thomas command shortcuts">
              {["whoami", "skills", "projects", "certs", "pfe", "contact", "scan"].map(
                (shortcut) => (
                  <button type="button" key={shortcut} onClick={() => runCommand(shortcut)}>
                    <Zap aria-hidden="true" />
                    {shortcut}
                  </button>
                ),
              )}
            </div>
          </div>
        </section>
      </main>

      <TechIntelScreen
        intel={selectedIntel}
        onClose={() => setSelectedTechnology(null)}
        onSelect={openTechnology}
      />

      <footer className="footer-band">
        <div>
          <FileText aria-hidden="true" />
          <a href={cvPath} download>
            Download CV
          </a>
        </div>
        <p>Casablanca, Morocco - {visibleYear}</p>
        <a href="mailto:assaad2005.fet@gmail.com">assaad2005.fet@gmail.com</a>
      </footer>
    </div>
  );
}

export default Portfolio;
