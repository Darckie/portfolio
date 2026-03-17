
'use client'
import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import whatsappScreenshot1 from './whatsapp_chat/images/Screenshot1.png';

export default function ProjectSection() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [activeStep, setActiveStep] = useState<number>(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const projects = useMemo(() => [
        {
            title: "Mortgage Auction Platform",
            status: "In Progress",
            completion: 78,
            year: "2024-Present",
            client: "Nadlan Capital Group",
            clientUrl: "https://nadlancapitalgroup.com/",
            projectUrl: "https://nandalanfinance.netlify.app/",
            imageFolder: "/project/nadlan_finance",
            images: [],
            tech: ["Next.js 15", "TypeScript", "TailwindCSS", "React Table", "React Hook Form", "Zod", "NextAuth", "Zustand", "React Query", "Shadcn UI"],
            description: "A full-stack NextJS application connecting Agents, Lenders, Brokers, and Borrowers for real estate loan auctions and management. Features advanced table implementation with sorting, filtering, pagination, role-based access control, and comprehensive loan program management.",
            myRole: "Frontend Developer",
            duration: "Ongoing",
            learnings: [
                "Next.js 15 App Router architecture with TypeScript for type-safe development",
                "Zustand for global state management and React Query for server state & caching",
                "Advanced TanStack React Table implementation with sorting, filtering, pagination, and multi-select rows",
                "Complex filtering system with 30+ filter criteria and debounced search across multiple fields",
                "NextAuth integration with JWT Bearer tokens and role-based access control (RBAC)",
                "React Hook Form with Zod schema validation for multi-step forms",
                "Excel/CSV export functionality with binary data handling",
                "Real estate domain features including lender qualification criteria and geographic coverage tracking"
            ],
            challenges: [
                "Implementing complex table functionality with 30+ filter criteria and dynamic column rendering",
                "Building scalable role-based access control for multiple user types (Agent, Lender, Broker, Borrower, Superadmin)",
                "Optimizing performance for large datasets with pagination and virtual scrolling",
                "Creating intuitive UI/UX for real estate professionals with dark mode support",
                "Integrating multiple APIs and handling CSRF security utilities & rate limiting"
            ],
            outcomes: [
                "Built comprehensive mortgage auction platform from scratch",
                "Implemented advanced data management with Excel/CSV export capabilities",
                "Created scalable authentication system supporting multiple user roles",
                "Developed responsive design with TailwindCSS and Shadcn components",
                "Established robust form validation and API integration patterns"
            ]
        },

        // <a
        //     href="/brijesh_kunwar_resume.pdf"
        //     download
        //     className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-purple-500 text-purple-700 font-semibold bg-white shadow-md hover:bg-purple-50 hover:scale-105 transition-transform duration-200"
        //     title="Download Resume"
        //   >
        //     {/* Document download icon */}
        //     <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17v-6m0 6l-3-3m3 3l3-3" /><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 2v4m8-4v4" /></svg>
        //     <span className="text-sm">Resume</span>
        //   </a>

        {
            title: "WhatsApp Chat Web App",
            status: "LIVE",
            year: "2023-2024",
            imageFolder: "/project/whatsapp_chat",
            images: [whatsappScreenshot1],


            documents: [
                {
                    label: "WhatsApp Chat Web App – Architecture & API Doc (PDF)",
                    href: "/whatsapp_chat_doc.pdf",
                },
            ],
            tech: ["Node.js", "Express.js", "React.js", "TypeScript", "MySQL", "Sequelize", "JWT", "WebSockets"],
            description: "Custom WhatsApp chat management portal built on top of (generic) WhatsApp providers like Gallabox/infobeep. Agents use a secure web app to receive, reply, and track WhatsApp conversations, while our backend handles webhooks, message routing, status tracking, and analytics.",
            myRole: "Full-Stack Developer",
            duration: "4 months",
            learnings: [
                "Designed webhook-driven architecture using (generic) WhatsApp providers like Gallabox/infobeep as the WhatsApp provider",
                "Implemented secure inbound webhooks for WhatsApp messages and status updates",
                "Built agent web portal for live chat, templates, file sharing and session management",
                "Designed REST APIs for send, history, per-customer chats, templates and transfers",
                "Implemented delivery/read tracking with database-backed status updates",
                "Added admin dashboards for agent stats, dispositions, and chat analytics"
            ],
            challenges: [
                "Ensuring webhooks are reliable, idempotent and reachable from the public internet",
                "Avoiding duplicate message processing using message IDs and proper indexing",
                "Designing chat session lifecycle, transfer between agents and template workflows",
                "Handling large variety of media types (images, docs, videos up to 16MB)",
                "Exposing clear APIs while keeping infrastructure details secure (HTTPS, logging, retries)"
            ],
            outcomes: [
                "Delivered a production-ready WhatsApp chat portal tailored for the client",
                "Enabled agents to handle all WhatsApp conversations from a single web interface",
                "Provided full chat history, per-customer view and analytics dashboards",
                "Improved reliability with structured logging, retries and status webhooks",
                "Documented architecture, flows and APIs in a client-facing PDF guide"
            ]
        },
        {
            title: "Clixxo Gateway Management Server",
            status: "In Progress",
            year: "2025-Present",
            tech: ["Node.js", "Express.js", "Sequelize", "MySQL", "JWT", "Winston", "Linux"],
            description: "A robust backend server for managing network gateway devices, user authentication, SIP registration, and high-availability configurations. Provides RESTful APIs for system/network management, diagnostics, and secure user access.",
            myRole: "Backend Developer",
            duration: "3 months - Present",
            learnings: [
                "Designing secure REST APIs with JWT-based authentication",
                "Implementing role-based access and middleware in Express.js",
                "Database modeling and optimization with Sequelize and MySQL",
                "System-level scripting for network diagnostics (ping, traceroute) via Node.js",
                "Advanced logging and error handling using Winston",
                "Managing environment configurations and secure credential storage"
            ],
            challenges: [
                "Ensuring secure access to system-level network operations",
                "Integrating real-time diagnostics with asynchronous Node.js processes",
                "Maintaining high availability and failover mechanisms",
                "Implementing robust logging and monitoring for production environments",
                "Coordinating database migrations and schema updates with minimal downtime"
            ],
            outcomes: [
                "Deployed on production gateways for real-time network management",
                "Enabled secure multi-user access with JWT authentication",
                "Streamlined diagnostics and troubleshooting for network admins",
                "Reduced manual intervention through automated system APIs",
                "Established a scalable backend foundation for future gateway features"
            ]
        },
        {
            title: "Maharashtra Cyber Complaints Portal",
            status: "LIVE",
            year: "2023-Present",
            tech: ["React.js", "Redux", "Crypto.js", "MySQL", "Java", "JWT"],
            description: "A government-deployed complaint management system helping curb online fraud across Maharashtra. Real-time monitoring, advanced search, and data visualization dashboards.",
            myRole: "Frontend Lead Developer",
            duration: "Ongoing (2+ years)",
            learnings: [
                "Government-grade security implementation with JWT and Crypto.js",
                "Large-scale React application architecture with Redux",
                "Real-time data monitoring and visualization techniques",
                "Advanced search algorithms for complaint filtering",
                "Database optimization for handling thousands of complaints",
                "Integration with government APIs and systems"
            ],
            challenges: [
                "Implementing robust security for sensitive government data",
                "Handling high volume of concurrent users and complaints",
                "Creating intuitive dashboards for non-technical government officials",
                "Ensuring 99.9% uptime for critical government infrastructure",
                "Data privacy compliance and encryption standards"
            ],
            outcomes: [
                "Successfully deployed across entire Maharashtra state",
                "Processing thousands of cyber complaints daily",
                "Reduced complaint resolution time by 60%",
                "Implemented end-to-end encryption for sensitive data",
                "Created comprehensive admin dashboards for real-time monitoring"
            ]
        },
        {
            title: "ACEHELPLINE (Emergency Call Management)",
            status: "LIVE",
            year: "2025-Present",
            tech: ["React.js", "MUI", "Tailwind", "TypeScript", "Java", "MySQL"],
            description: "A modern emergency call management and dispatcher system for real-time incident tracking, call history, and ambulance dispatch. Features include tabbed navigation, call/incident history, and advanced search.",
            myRole: "Frontend Lead Developer",
            duration: "8+ months",
            learnings: [
                "TypeScript integration for large-scale React applications",
                "Material-UI component customization and theming",
                "Real-time emergency dispatch system architecture",
                "Advanced DataGrid implementation for call management",
                "Performance optimization for critical emergency systems",
                "Accessibility standards for emergency response interfaces"
            ],
            challenges: [
                "Zero-latency requirements for emergency response",
                "Complex state management for real-time call tracking",
                "Creating intuitive interfaces under high-stress scenarios",
                "Ensuring system reliability during peak emergency periods",
                "Integration with existing emergency infrastructure"
            ],
            outcomes: [
                "Built mission-critical emergency response system",
                "Achieved sub-second response times for call dispatch",
                "Implemented comprehensive call history and tracking",
                "Created user-friendly interfaces for emergency operators",
                "Established robust real-time incident management workflow"
            ]
        }
    ], []);

    const handleProjectSelect = (index: number) => {
        setSelectedProject(index);
        setActiveStep(0);
    };

    const steps = selectedProject !== null ? [
        { title: "Overview", icon: "📋" },
        { title: "Learnings", icon: "🎓" },
        { title: "Challenges", icon: "⚡" },
        { title: "Outcomes", icon: "🎯" }
    ] : [];

    const renderStepContent = () => {
        if (selectedProject === null) return null;

        const project = projects[selectedProject];

        switch (activeStep) {
            case 0:
                return (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
                                <h4 className="heading-font text-base font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <span className="text-blue-600">👤</span>
                                    Role
                                </h4>
                                <p className="main-font text-gray-700 font-medium">{project.myRole}</p>
                            </div>
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-200 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
                                <h4 className="heading-font text-base font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <span className="text-gray-600">⏱️</span>
                                    Duration
                                </h4>
                                <p className="main-font text-gray-700 font-medium">{project.duration}</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 p-6 rounded-lg transition-all duration-200 hover:shadow-sm">
                            <h4 className="heading-font text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-blue-600">🛠️</span>
                                Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1.5 bg-white text-gray-700 text-sm font-medium border border-gray-300 rounded-md hover:border-blue-400 hover:text-blue-700 transition-colors main-font">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {project.projectUrl && (
                                <div className="mt-6">
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium main-font hover:bg-blue-700 transition-colors"
                                    >
                                        View Live Project
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5v14h14" />
                                        </svg>
                                    </a>
                                </div>
                            )}
                        </div>
                        {project.completion && (
                            <div className="bg-white border border-gray-200 p-6 rounded-lg transition-all duration-200 hover:shadow-sm">
                                <h4 className="heading-font text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="text-green-600">📊</span>
                                    Progress
                                </h4>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                                    <div
                                        className="bg-gray-900 h-2.5 rounded-full transition-all duration-500"
                                        style={{ width: `${project.completion}%` }}
                                    />
                                </div>
                                <p className="main-font text-sm text-gray-600">{project.completion}% Complete</p>
                            </div>
                        )}
                    </div>
                );
            case 1:
                return (
                    <div className="space-y-3">
                        {project.learnings.map((learning, idx) => (
                            <div key={idx} className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-white border-l-4 border-green-500 p-4 rounded-lg hover:shadow-md transition-all duration-300">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                                    <span className="text-green-600 text-sm font-bold">✓</span>
                                </div>
                                <p className="main-font text-gray-700 leading-relaxed flex-1">{learning}</p>
                            </div>
                        ))}
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-3">
                        {project.challenges.map((challenge, idx) => (
                            <div key={idx} className="flex items-start gap-4 bg-gradient-to-r from-orange-50 to-white border-l-4 border-orange-500 p-4 rounded-lg hover:shadow-md transition-all duration-300">
                                <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                                    <span className="text-orange-600 text-sm font-bold">⚠</span>
                                </div>
                                <p className="main-font text-gray-700 leading-relaxed flex-1">{challenge}</p>
                            </div>
                        ))}
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-3">
                        {project.outcomes.map((outcome, idx) => (
                            <div key={idx} className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-500 p-4 rounded-lg hover:shadow-md transition-all duration-300">
                                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                                    <span className="text-blue-600 text-sm">🎯</span>
                                </div>
                                <p className="main-font text-gray-700 leading-relaxed flex-1">{outcome}</p>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden relative">
            {/* Custom Fonts */}
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700&display=swap');
                
                .main-font {
                  font-family: 'Inter', sans-serif;
                }
                
                .heading-font {
                  font-family: 'Poppins', sans-serif;
                }
            `}</style>

            {/* Subtle Background Pattern */}
            <div className="fixed inset-0 z-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className={`max-w-7xl mx-auto transform transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                    {/* Page Title */}
                    <div className="text-center mb-12">
                        <h2 className="cyber-font text-3xl md:text-5xl font-black text-black mb-6">
                            My <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className="main-font text-base text-gray-600 max-w-2xl mx-auto">
                            A collection of projects showcasing my expertise in modern web development
                        </p>
                        <div className="w-16 h-[2px] bg-gray-900 mx-auto mt-5 rounded-full" />
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                onClick={() => handleProjectSelect(index)}
                                className={`group relative bg-white border transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md rounded-lg p-5 overflow-hidden cursor-pointer ${selectedProject === index
                                        ? 'border-black shadow-md'
                                        : 'border-gray-200 hover:border-gray-400'
                                    }`}
                            >
                                {/* Progress Bar for In Progress Projects */}
                                {project.completion && (
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100">
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500"
                                            style={{ width: `${project.completion}%` }}
                                        />
                                    </div>
                                )}

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="px-3 py-1 rounded-full text-[11px] font-semibold main-font bg-gray-900 text-white">
                                                {project.status}
                                            </span>
                                            {project.completion && (
                                                <span className="px-2 py-1 rounded text-[11px] font-medium bg-gray-100 text-gray-800">
                                                    {project.completion}%
                                                </span>
                                            )}
                                        </div>
                                        <span className="main-font text-xs text-gray-500 font-medium">{project.year}</span>
                                    </div>

                                    <h3 className="heading-font text-lg font-semibold text-gray-900 mb-3 group-hover:text-black transition-colors">
                                        {project.title}
                                    </h3>

                                    {project.client && (
                                        <div className="mb-3">
                                            <span className="text-xs text-gray-500 main-font">Client: </span>
                                            {project.clientUrl ? (
                                                <a
                                                    href={project.clientUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs text-blue-600 hover:text-blue-700 font-medium hover:underline main-font"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {project.client}
                                                </a>
                                            ) : (
                                                <span className="text-xs text-gray-700 font-medium main-font">{project.client}</span>
                                            )}
                                        </div>
                                    )}

                                    <p className="main-font text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.slice(0, 4).map((tech) => (
                                            <span key={tech} className="px-2.5 py-1 bg-gray-50 text-gray-700 text-xs font-medium border border-gray-200 rounded-md main-font">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 4 && (
                                            <span className="px-2.5 py-1 bg-gray-50 text-gray-700 text-xs font-medium border border-gray-200 rounded-md main-font">
                                                +{project.tech.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                        <span className="text-xs text-gray-500 main-font">{project.myRole}</span>
                                        <div className="flex items-center gap-3">
                                            {project.projectUrl && (
                                                <a
                                                    href={project.projectUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="text-[11px] text-gray-900 font-semibold main-font underline-offset-2 hover:underline"
                                                >
                                                    Live Demo
                                                </a>
                                            )}
                                            <span className="text-[11px] text-gray-900 font-medium main-font group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                                View Details
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Project Details */}
                    {selectedProject !== null && (
                        <section className="mb-16">
                            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 md:p-8 transition-all duration-300">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex-1">
                                        <h3 className="heading-font text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                            {projects[selectedProject].title}
                                        </h3>
                                        {projects[selectedProject].client && (
                                            <div className="mb-2">
                                                <span className="text-sm text-gray-500 main-font">Client: </span>
                                                {projects[selectedProject].clientUrl ? (
                                                    <a
                                                        href={projects[selectedProject].clientUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline main-font"
                                                    >
                                                        {projects[selectedProject].client}
                                                    </a>
                                                ) : (
                                                    <span className="text-sm text-gray-700 font-medium main-font">{projects[selectedProject].client}</span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="ml-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                                        aria-label="Close"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Step Navigation */}
                                <div className="flex flex-wrap gap-2 md:gap-4 mb-8 border-b border-gray-200 pb-4">
                                    {steps.map((step, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveStep(index)}
                                            className={`px-4 py-2 rounded-lg main-font font-medium transition-all duration-200 flex items-center gap-2 ${activeStep === index
                                                    ? 'bg-blue-600 text-white shadow-md'
                                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                                }`}
                                        >
                                            <span>{step.icon}</span>
                                            <span>{step.title}</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Step Content */}
                                <div className="min-h-[400px] mb-8 space-y-8">
                                    {renderStepContent()}

                                    {/* Image Gallery */}
                                    {projects[selectedProject].images && projects[selectedProject].images.length > 0 && (
                                        <div className="space-y-3">
                                            <h4 className="heading-font text-base font-semibold text-gray-900">
                                                Project Screenshots
                                            </h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {projects[selectedProject].images.map((src, idx) => (
                                                    <div key={idx} className="relative w-full overflow-hidden rounded-md border border-gray-200 bg-gray-50">
                                                        <Image
                                                            src={src}
                                                            alt={`${projects[selectedProject].title} screenshot ${idx + 1}`}
                                                            width={400}
                                                            height={250}
                                                            className="w-full h-44 object-cover"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Documents */}
                                    {projects[selectedProject].documents && projects[selectedProject].documents.length > 0 && (
                                        <div className="space-y-3">
                                            <h4 className="heading-font text-base font-semibold text-gray-900">
                                                Project Documents
                                            </h4>
                                            <ul className="space-y-2">
                                                {projects[selectedProject].documents.map((doc, idx) => (
                                                    <li key={idx}>
                                                        <a
                                                            href={doc.href}
                                                            download
                                                            className="inline-flex items-center gap-2 text-sm main-font text-gray-900 underline-offset-2 hover:underline"
                                                        >
                                                            <span className="inline-block w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-[11px]">
                                                                PDF
                                                            </span>
                                                            <span>{doc.label}</span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Navigation Arrows */}
                                <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                                    <button
                                        onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                                        disabled={activeStep === 0}
                                        className={`px-6 py-2.5 rounded-lg main-font font-medium transition-all duration-200 flex items-center gap-2 ${activeStep === 0
                                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                                            }`}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                        Previous
                                    </button>
                                    <button
                                        onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                                        disabled={activeStep === steps.length - 1}
                                        className={`px-6 py-2.5 rounded-lg main-font font-medium transition-all duration-200 flex items-center gap-2 ${activeStep === steps.length - 1
                                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md'
                                            }`}
                                    >
                                        Next
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </section>
                    )}

                    {selectedProject === null && (
                        <div className="text-center main-font text-gray-500 py-16 border-2 border-dashed border-gray-300 rounded-lg mb-8 bg-white/50">
                            <div className="text-5xl mb-4">👆</div>
                            <p className="text-lg font-medium">Click on any project above to explore details</p>
                            <p className="text-sm mt-2 text-gray-400">Learn about my role, challenges, and outcomes</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}