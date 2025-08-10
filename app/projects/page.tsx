import { useState, useEffect, useRef } from 'react';

export default function ProjectSection() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [activeStep, setActiveStep] = useState<number>(0);
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsLoaded(true);
        const handleMouseMove = (e: MouseEvent) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                setMousePosition({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100,
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const projects = [
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
        },
        {
            title: "WhatsApp Business API-Based Messaging Portal",
            status: "LIVE",
            year: "2023",
            tech: ["Node.js", "Express.js", "React.js", "Java"],
            description: "Custom solution to automate customer engagement for small businesses. Real-time, two-way messaging, role-based access, dashboard, and automated responses.",
            myRole: "Full-Stack Developer",
            duration: "4 months",
            learnings: [
                "WhatsApp Business API integration and webhook handling",
                "Real-time messaging architecture with WebSockets",
                "Role-based access control implementation",
                "Automated response system design and development",
                "Customer engagement analytics and dashboard creation",
                "RESTful API design for messaging services"
            ],
            challenges: [
                "WhatsApp API rate limiting and message queue management",
                "Real-time synchronization between multiple user sessions",
                "Creating scalable architecture for multiple business clients",
                "Handling message delivery failures and retry mechanisms",
                "Implementing secure authentication for business accounts"
            ],
            outcomes: [
                "Successfully automated customer engagement for 50+ small businesses",
                "Reduced response time by 80% through automated messaging",
                "Built comprehensive analytics dashboard for message tracking",
                "Implemented role-based access for team collaboration",
                "Created reusable messaging framework for future projects"
            ]
        }
    ];

    const handleProjectSelect = (index:number) => {
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
        
        switch(activeStep) {
            case 0:
                return (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/60 backdrop-blur-sm border border-gray-200 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300">
                                <h4 className="cyber-font text-lg font-bold text-black mb-3">Role</h4>
                                <p className="tech-font text-gray-700">{project.myRole}</p>
                            </div>
                            <div className="bg-white/60 backdrop-blur-sm border border-gray-200 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300">
                                <h4 className="cyber-font text-lg font-bold text-black mb-3">Duration</h4>
                                <p className="tech-font text-gray-700">{project.duration}</p>
                            </div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm border border-gray-200 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300">
                            <h4 className="cyber-font text-lg font-bold text-black mb-4">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="mono-font px-3 py-1 bg-cyan-500/10 text-cyan-700 text-sm font-medium border border-cyan-500/20 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className="space-y-4">
                        {project.learnings.map((learning, idx) => (
                            <div key={idx} className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm border border-gray-200 p-4 rounded-lg hover:border-green-500/50 transition-all duration-300">
                                <span className="text-green-500 mt-1 text-lg">✓</span>
                                <p className="tech-font text-gray-700 leading-relaxed">{learning}</p>
                            </div>
                        ))}
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-4">
                        {project.challenges.map((challenge, idx) => (
                            <div key={idx} className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm border border-gray-200 p-4 rounded-lg hover:border-orange-500/50 transition-all duration-300">
                                <span className="text-orange-500 mt-1 text-lg">⚠</span>
                                <p className="tech-font text-gray-700 leading-relaxed">{challenge}</p>
                            </div>
                        ))}
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-4">
                        {project.outcomes.map((outcome, idx) => (
                            <div key={idx} className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm border border-gray-200 p-4 rounded-lg hover:border-purple-500/50 transition-all duration-300">
                                <span className="text-purple-500 mt-1 text-lg">🎯</span>
                                <p className="tech-font text-gray-700 leading-relaxed">{outcome}</p>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-white overflow-hidden relative">
            {/* Custom Fonts */}
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Share+Tech+Mono:wght@400&display=swap');
                
                .cyber-font {
                  font-family: 'Orbitron', monospace;
                }
                
                .tech-font {
                  font-family: 'Rajdhani', sans-serif;
                }
                
                .mono-font {
                  font-family: 'Share Tech Mono', monospace;
                }
                
                .scan-lines {
                  background: linear-gradient(transparent 50%, rgba(0, 255, 255, 0.03) 50%);
                  background-size: 100% 4px;
                  animation: scan 0.1s linear infinite;
                }
                
                @keyframes scan {
                  0% { background-position: 0 0; }
                  100% { background-position: 0 4px; }
                }
            `}</style>

            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-20 transition-all duration-1000"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                            rgba(0, 255, 255, 0.3) 0%, 
                            rgba(255, 0, 255, 0.2) 25%, 
                            rgba(255, 255, 0, 0.1) 50%, 
                            rgba(255, 255, 255, 0.05) 100%)`
                    }}
                />

                {/* Circuit Board Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" className="absolute inset-0">
                        <defs>
                            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="#00ffff" strokeWidth="0.5" opacity="0.3" />
                                <circle cx="20" cy="20" r="2" fill="#ff00ff" opacity="0.5" />
                                <circle cx="80" cy="80" r="2" fill="#ffff00" opacity="0.5" />
                                <path d="M20,20 L80,20 L80,80" fill="none" stroke="#00ff00" strokeWidth="1" opacity="0.3" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#circuit)" />
                    </svg>
                </div>

                {/* Scan Lines */}
                <div className="absolute inset-0 scan-lines opacity-30"></div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-15 px-6">
                <div className={`max-w-7xl mx-auto transform transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    
                    {/* Page Title */}
                    <div className="text-center mb-8">
                        <h2 className="cyber-font text-3xl md:text-5xl font-black text-black mb-6">
                            PROJECT <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">ARCHIVE</span>
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                onClick={() => handleProjectSelect(index)}
                                className={`group relative bg-white/80 backdrop-blur-xl border-2 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl p-8 overflow-hidden cursor-pointer ${
                                    selectedProject === index 
                                        ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                                        : 'border-gray-200 hover:border-purple-500/50 hover:shadow-purple-500/20'
                                }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-4">
                                            <div className={`px-3 py-1 rounded-full text-xs font-bold mono-font ${
                                                project.status === 'LIVE' ? 'bg-green-500 text-white' :
                                                project.status === 'BETA' ? 'bg-yellow-500 text-black' :
                                                'bg-purple-500 text-white'
                                            }`}>
                                                {project.status}
                                            </div>
                                            <span className="mono-font text-sm text-gray-500">{project.year}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-black mb-4">{project.title}</h3>
                                    <p className="tech-font text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.slice(0, 3).map((tech) => (
                                            <span key={tech} className="mono-font px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium border border-gray-300">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="mono-font px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium border border-gray-300">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Project Details */}
                    {selectedProject !== null && (
                        <section className="mb-20">
                            <div className="bg-white/80 backdrop-blur-xl border-2 border-gray-200 p-8 rounded-lg shadow-2xl hover:border-cyan-500/50 transition-all duration-300">
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="cyber-font text-2xl font-bold text-black">
                                        {projects[selectedProject].title}
                                    </h3>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="tech-font text-gray-500 hover:text-gray-700 text-2xl font-bold"
                                    >
                                        ×
                                    </button>
                                </div>

                                {/* Step Navigation */}
                                <div className="flex space-x-8 mb-8 border-b border-gray-200">
                                    {steps.map((step, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveStep(index)}
                                            className={`pb-4 px-2 cyber-font font-medium transition-colors duration-200 ${
                                                activeStep === index
                                                    ? 'text-cyan-500 border-b-2 border-cyan-500'
                                                    : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                        >
                                            <span className="mr-2">{step.icon}</span>
                                            {step.title}
                                        </button>
                                    ))}
                                </div>

                                {/* Step Content */}
                                <div className="min-h-[400px] mb-8">
                                    {renderStepContent()}
                                </div>

                                {/* Navigation Arrows */}
                                <div className="flex justify-between">
                                    <button
                                        onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                                        disabled={activeStep === 0}
                                        className="relative group disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 disabled:hover:scale-100">
                                            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                                            <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                                                <span className="transition-all duration-500 group-hover:-translate-x-1 text-sm">← Previous</span>
                                            </span>
                                        </span>
                                    </button>
                                    <button
                                        onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                                        disabled={activeStep === steps.length - 1}
                                        className="relative group disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 disabled:hover:scale-100">
                                            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                                            <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                                                <span className="transition-all duration-500 group-hover:translate-x-1 text-sm">Next →</span>
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </section>
                    )}

                    {selectedProject === null && (
                        <div className="text-center tech-font text-gray-500 py-12 border-2 border-dashed border-gray-200 rounded-lg mb-8">
                            <div className="text-4xl mb-4">👆</div>
                            <p className="text-lg">Click on any project above to explore details</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}