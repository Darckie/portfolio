import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AboutPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentTime, setCurrentTime] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsLoaded(true);

        // Update time every second
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }));
        };
        updateTime();
        const timeInterval = setInterval(updateTime, 1000);

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

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(timeInterval);
        };
    }, []);

    const experiences = [
        {
            year: '2024',
            title: 'SENIOR FULL-STACK DEVELOPER',
            company: 'TECH CORP',
            description: 'Leading development of enterprise-scale applications with React, Node.js, and cloud technologies.',
            tech: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript']
        },
        {
            year: '2023',
            title: 'FULL-STACK DEVELOPER',
            company: 'INNOVATION LABS',
            description: 'Built scalable web applications and microservices architecture for high-traffic platforms.',
            tech: ['Next.js', 'Express.js', 'PostgreSQL', 'Redis', 'Docker']
        },
        {
            year: '2022',
            title: 'FRONTEND DEVELOPER',
            company: 'DIGITAL AGENCY',
            description: 'Created responsive and interactive user interfaces for various client projects.',
            tech: ['React', 'Vue.js', 'Sass', 'Webpack', 'Jest']
        }
    ];

    const education = [
        {
            degree: 'BACHELOR OF TECHNOLOGY',
            institution: 'COMPUTER SCIENCE',
            year: '2022',
            description: 'Specialized in software engineering and web development technologies.'
        },
        {
            degree: 'CERTIFICATION',
            institution: 'AWS DEVELOPER',
            year: '2023',
            description: 'Certified in cloud development and deployment practices.'
        }
    ];

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
        
        .neon-glow {
          text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor;
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

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-cyan-500/20">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="cyber-font text-2xl font-black text-black">
                            <span className="text-cyan-500">KB</span>
                            <span className="text-purple-500">.</span>
                            <span className="text-pink-500">DEV</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <div className="mono-font text-sm text-gray-600">
                                {currentTime}
                            </div>
                            {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => onNavigate && onNavigate(item.toLowerCase())}
                                    className={`tech-font transition-colors duration-300 relative group font-semibold ${
                                        item === 'ABOUT' ? 'text-cyan-500' : 'text-black hover:text-cyan-500'
                                    }`}
                                >
                                    {item}
                                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 ${
                                        item === 'ABOUT' ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6">
                <div className={`max-w-7xl mx-auto transform transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    
                    {/* Page Title */}
                    <div className="text-center mb-20">
                        <h1 className="cyber-font text-6xl md:text-7xl font-black text-black mb-6">
                            ABOUT <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">PROTOCOL</span>
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
                    </div>

                    {/* About Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                        {/* Profile Section */}
                        <div className="relative">
                            <div className="bg-white/80 backdrop-blur-xl border-2 border-gray-200 p-8 rounded-lg shadow-2xl">
                                <div className="flex items-center space-x-6 mb-8">
                                    <div className="relative">
                                        <Image
                                            src="/images/vinsmokeSanji.jpeg"
                                            alt="Kunwar Brijesh"
                                            width={120}
                                            height={120}
                                            className="w-24 h-24 object-cover rounded-full border-4 border-cyan-500"
                                        />
                                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                                    </div>
                                    <div>
                                        <h2 className="cyber-font text-2xl font-bold text-black">KUNWAR BRIJESH</h2>
                                        <p className="tech-font text-gray-600 font-medium">FULL-STACK DEVELOPER</p>
                                        <p className="mono-font text-sm text-cyan-500">ID: KB-2024-001</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    <p className="tech-font text-gray-700 leading-relaxed">
                                        Passionate full-stack developer with expertise in modern web technologies. 
                                        Specialized in building scalable applications with cutting-edge frameworks 
                                        and cloud-native architectures.
                                    </p>
                                    <p className="tech-font text-gray-700 leading-relaxed">
                                        Committed to writing clean, maintainable code and staying updated with 
                                        the latest industry trends and best practices.
                                    </p>
                                </div>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                                    <div className="text-center">
                                        <div className="cyber-font text-2xl font-bold text-cyan-500">3+</div>
                                        <div className="tech-font text-sm text-gray-600">Years Experience</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="cyber-font text-2xl font-bold text-purple-500">50+</div>
                                        <div className="tech-font text-sm text-gray-600">Projects Completed</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="cyber-font text-2xl font-bold text-pink-500">15+</div>
                                        <div className="tech-font text-sm text-gray-600">Technologies</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <div className="space-y-6">
                            <h3 className="cyber-font text-3xl font-bold text-black mb-6">CORE COMPETENCIES</h3>
                            
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { name: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
                                    { name: 'Backend', skills: ['Node.js', 'Express', 'Python', 'Java'] },
                                    { name: 'Database', skills: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL'] },
                                    { name: 'DevOps', skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'] }
                                ].map((category) => (
                                    <div key={category.name} className="bg-white/60 backdrop-blur-sm border border-gray-200 p-4 rounded-lg hover:border-cyan-500/50 transition-all duration-300">
                                        <h4 className="cyber-font text-lg font-bold text-black mb-3">{category.name}</h4>
                                        <div className="space-y-2">
                                            {category.skills.map((skill) => (
                                                <div key={skill} className="mono-font text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded">
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <section className="mb-20">
                        <h2 className="cyber-font text-4xl font-bold text-black text-center mb-12">
                            MISSION <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">LOG</span>
                        </h2>
                        
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative bg-white/80 backdrop-blur-xl border-2 border-gray-200 p-8 rounded-lg shadow-xl hover:border-cyan-500/50 transition-all duration-300">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="cyber-font text-2xl font-bold text-black">{exp.title}</h3>
                                            <p className="tech-font text-xl text-purple-500 font-semibold">{exp.company}</p>
                                        </div>
                                        <div className="mono-font text-lg text-cyan-500 font-bold">{exp.year}</div>
                                    </div>
                                    
                                    <p className="tech-font text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((tech) => (
                                            <span key={tech} className="mono-font px-3 py-1 bg-cyan-500/10 text-cyan-700 text-sm font-medium border border-cyan-500/20 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="mb-20">
                        <h2 className="cyber-font text-4xl font-bold text-black text-center mb-12">
                            TRAINING <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">PROTOCOLS</span>
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {education.map((edu, index) => (
                                <div key={index} className="bg-white/80 backdrop-blur-xl border-2 border-gray-200 p-8 rounded-lg shadow-xl hover:border-purple-500/50 transition-all duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="cyber-font text-xl font-bold text-black">{edu.degree}</h3>
                                        <span className="mono-font text-lg text-purple-500 font-bold">{edu.year}</span>
                                    </div>
                                    <p className="tech-font text-lg text-purple-500 font-semibold mb-3">{edu.institution}</p>
                                    <p className="tech-font text-gray-700 leading-relaxed">{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Back to Home Button */}
                    <div className="text-center">
                        <button 
                            onClick={() => onNavigate && onNavigate('home')}
                            className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white tech-font font-bold text-xl rounded-none border-2 border-cyan-500 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50"
                        >
                            <span className="relative z-10">RETURN TO HOME</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
} 