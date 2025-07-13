import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Header from './Header';

export default function CyberpunkPortfolio({ onNavigate }: { onNavigate?: (page: string) => void }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);
    const [glitchActive, setGlitchActive] = useState(false);
    const [scrollY, setScrollY] = useState(0);
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

        // Glitch effect
        const glitchInterval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 200);
        }, 5000);

        const handleMouseMove = (e: MouseEvent) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                setMousePosition({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100,
                });
            }
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timeInterval);
            clearInterval(glitchInterval);
        };
    }, []);

    const skills = [
        { name: 'REACT.JS', level: 98, color: 'from-cyan-400 to-blue-500', icon: '⚛️' },
        { name: 'NODE.JS', level: 95, color: 'from-green-400 to-emerald-500', icon: '⚡' },
        { name: 'MONGODB', level: 92, color: 'from-green-500 to-teal-500', icon: '🍃' },
        { name: 'NEXT.JS', level: 96, color: 'from-gray-400 to-gray-600', icon: '▲' },
        { name: 'TYPESCRIPT', level: 94, color: 'from-blue-400 to-indigo-500', icon: '📘' },
        { name: 'TAILWIND', level: 97, color: 'from-teal-400 to-cyan-500', icon: '🎨' }
    ];

    const projects = [
        {
            title: 'NEURAL COMMERCE',
            description: 'AI-powered e-commerce platform with real-time analytics and predictive recommendations',
            tech: ['React', 'Node.js', 'TensorFlow', 'MongoDB'],
            gradient: 'from-purple-500 via-pink-500 to-red-500',
            status: 'LIVE',
            year: '2024'
        },
        {
            title: 'QUANTUM DASHBOARD',
            description: 'Advanced data visualization platform with 3D charts and real-time streaming',
            tech: ['Next.js', 'Three.js', 'WebSocket', 'D3.js'],
            gradient: 'from-blue-500 via-cyan-500 to-teal-500',
            status: 'BETA',
            year: '2024'
        },
        {
            title: 'CRYPTO NEXUS',
            description: 'Decentralized trading platform with advanced portfolio management',
            tech: ['React', 'Web3.js', 'Solidity', 'GraphQL'],
            gradient: 'from-yellow-400 via-orange-500 to-red-500',
            status: 'DEV',
            year: '2024'
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
        
        .glitch {
          position: relative;
          animation: glitch 0.3s infinite;
        }
        
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch::before {
          animation: glitch-1 0.3s infinite;
          color: #ff00ff;
          z-index: -1;
        }
        
        .glitch::after {
          animation: glitch-2 0.3s infinite;
          color: #00ffff;
          z-index: -2;
        }
        
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        
        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(2px, -2px); }
          40% { transform: translate(-2px, 2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(2px, 2px); }
        }
        
        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, -2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(-2px, 2px); }
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
        
        .hologram {
          background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
          background-size: 200% 200%;
          animation: hologram 3s ease-in-out infinite;
        }
        
        @keyframes hologram {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
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
           

            <Header onNavigate={onNavigate} />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
                <div className={`text-center transform transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>


                    {/* Profile Avatar */}
                    <div className="flex flex-col items-center justify-center min-h-screen p-8">

                        <div className={`relative transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:-translate-y-3`}>

                            {/* Floating Decorative Elements */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-8 left-4 w-2 h-2 bg-amber-300 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                                <div className="absolute top-32 right-6 w-2 h-2 bg-orange-300 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
                                <div className="absolute top-20 left-8 w-1 h-1 bg-amber-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
                            </div>

                            {/* Main Profile Container */}
                            <div className="relative">

                                {/* Main Profile Circle */}
                                <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-white via-orange-50 to-amber-50 shadow-2xl border-2 border-amber-100 overflow-hidden">

                                    {/* Top Glass Shine Effect */}
                                    <div className="absolute top-4 left-8 w-20 h-32 bg-gradient-to-br from-white/60 to-white/10 rounded-full blur-xl"></div>

                                    {/* Secondary Shine */}
                                    <div className="absolute top-8 left-12 w-12 h-24 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-lg"></div>

                                    {/* Status Indicator */}
                                    <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>

                                    {/* Profile Image */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src="/images/vinsmokeSanji.jpeg"
                                            alt="Kunwar Brijesh"
                                            width={256}
                                            height={256}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>

                                    {/* Inner Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-full"></div>
                                </div>

                                {/* Mirror Reflection */}
                                <div className="absolute top-full left-0 w-64 h-32 -mt-2 rounded-full bg-gradient-to-br from-white via-orange-50 to-amber-50 opacity-20 blur-sm transform rotate-180 scale-y-50"></div>

                                {/* Reflection Fade Effect */}
                                <div className="absolute top-full left-0 w-64 h-32 -mt-2 rounded-full bg-gradient-to-b from-amber-50 to-transparent opacity-60"></div>
                            </div>

                            {/* Profile Info */}
                            <div className="mt-16 text-center">
                                <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/90 backdrop-blur-sm border border-amber-200 rounded-full shadow-lg">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-amber-800">Available for Projects</span>
                                </div>
                            </div>

                            {/* Decorative Dots */}
                            <div className="mt-8 flex justify-center space-x-2">
                                <div className="w-1 h-1 bg-amber-400 rounded-full opacity-70"></div>
                                <div className="w-2 h-2 bg-orange-400 rounded-full opacity-80"></div>
                                <div className="w-1 h-1 bg-amber-400 rounded-full opacity-70"></div>
                            </div>
                        </div>
                    </div>

                    {/* Main Title */}
                    <div className="mb-8 overflow-hidden">
                        <h1 className={`cyber-font text-5xl md:text-6xl font-black tracking-tight text-black ${glitchActive ? 'glitch' : ''
                            }`} data-text="KUNWAR">
                            KUNWAR
                        </h1>
                        <h1 className="cyber-font text-5xl md:text-6xl font-black tracking-tight -mt-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent neon-glow">
                            BRIJESH
                        </h1>
                    </div>

                    {/* Role with Typing Effect */}
                    <div className="mb-8 relative">
                        <div className="tech-font text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            <span className="text-black">
                                FULL-STACK DEVELOPER
                            </span>
                        </div>
                        <div className="w-48 h-1 mx-auto rounded-full bg-gray-500" />
                    </div>

                    {/* Description */}
                    <p className="tech-font text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
                        Building <span className="text-cyan-500 font-bold ">NEXT-GEN</span> digital experiences with
                        <span className="text-purple-500 font-bold "> CUTTING-EDGE</span> technology and
                        <span className="text-pink-500 font-bold "> FUTURISTIC</span> design
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
                        <button className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white tech-font font-bold text-xl rounded-none border-2 border-cyan-500 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50">
                            <span className="relative z-10">VIEW PROJECTS</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                        </button>
                        <button className="group relative px-12 py-6 border-2 border-purple-500 text-purple-500 tech-font font-bold text-xl rounded-none overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50">
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">CONTACT ME</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 scale-0 group-hover:scale-100 transition-transform duration-300" />
                        </button>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {['REACT', 'NODE.JS', 'MONGODB', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND'].map((tech, index) => (
                            <div
                                key={tech}
                                className="mono-font px-6 py-3 bg-white/20 backdrop-blur-sm border border-cyan-500/30 text-black font-bold text-sm hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animation: isLoaded ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                                }}
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="relative py-32 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="cyber-font text-6xl md:text-7xl font-black text-black mb-6">
                            SYSTEM <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">SPECS</span>
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((skill, index) => (
                            <div key={skill.name} className="group relative bg-white/80 backdrop-blur-xl border-2 border-gray-200 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 p-8">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center space-x-4">
                                        <span className="text-3xl">{skill.icon}</span>
                                        <h3 className="cyber-font text-xl font-bold text-black">{skill.name}</h3>
                                    </div>
                                    <span className="mono-font text-cyan-500 font-bold text-xl">{skill.level}%</span>
                                </div>

                                <div className="w-full bg-gray-200 h-3 overflow-hidden mb-4">
                                    <div
                                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 delay-${index * 100}`}
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>

                                <div className="mono-font text-sm text-gray-600 font-medium">
                                    PROFICIENCY LEVEL: EXPERT
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="relative py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="cyber-font text-6xl md:text-7xl font-black text-black mb-6">
                            PROJECT <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">ARCHIVE</span>
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={project.title} className="group relative bg-white/80 backdrop-blur-xl border-2 border-gray-200 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 p-8 overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-4">
                                            <div className={`px-3 py-1 rounded-full text-xs font-bold mono-font ${project.status === 'LIVE' ? 'bg-green-500 text-white' :
                                                project.status === 'BETA' ? 'bg-yellow-500 text-black' :
                                                    'bg-purple-500 text-white'
                                                }`}>
                                                {project.status}
                                            </div>
                                            <span className="mono-font text-sm text-gray-500">{project.year}</span>
                                        </div>
                                    </div>

                                    <h3 className="cyber-font text-2xl font-bold text-black mb-4">{project.title}</h3>
                                    <p className="tech-font text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="mono-font px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium border border-gray-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="tech-font text-purple-500 hover:text-purple-700 font-bold text-lg transition-colors duration-300 flex items-center space-x-2">
                                        <span>ACCESS PROJECT</span>
                                        <span>→</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="relative py-32 px-6 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="cyber-font text-6xl md:text-7xl font-black text-black mb-8">
                        INITIALIZE <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">CONNECTION</span>
                    </h2>
                    <p className="tech-font text-2xl text-gray-700 mb-16 font-medium">
                        Ready to build the future together? Let's create something extraordinary.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        <button className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white tech-font font-bold text-xl border-2 border-cyan-500 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50">
                            <span className="relative z-10">START PROJECT</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                        </button>
                        <button className="group relative px-12 py-6 border-2 border-purple-500 text-purple-500 tech-font font-bold text-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50">
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">DOWNLOAD RESUME</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 scale-0 group-hover:scale-100 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}