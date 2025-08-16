
'use client'
import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { Hand } from 'lucide-react';


export default function LandingPage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);
    const [glitchActive, setGlitchActive] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [currentTime, setCurrentTime] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);
 console.log(currentTime,scrollY)
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

    // Update skills to match revised resume and user feedback
    const skills = useMemo(() => [
        { name: 'REACT.JS', level: 90, color: 'from-cyan-400 to-blue-500', icon: '⚛️' },
        { name: 'JAVASCRIPT', level: 90, color: 'from-yellow-400 to-yellow-500', icon: '📜' },
        { name: 'HTML5/CSS3', level: 90, color: 'from-orange-400 to-pink-500', icon: '🌐' },
        { name: 'REDUX', level: 70, color: 'from-purple-400 to-indigo-500', icon: '🔄' },
        { name: 'TAILWIND CSS', level: 70, color: 'from-teal-400 to-cyan-500', icon: '🎨' },
        { name: 'TYPESCRIPT', level: 60, color: 'from-blue-400 to-indigo-400', icon: '📘' },
        { name: 'NEXT.JS', level: 40, color: 'from-gray-400 to-gray-600', icon: '▲' },
        { name: 'React Native', level: 40, color: 'from-gray-400 to-teal-600', icon: '📱' },
        // { name: 'MATERIAL-UI', level: 80, color: 'from-blue-400 to-indigo-500', icon: '🖌️' },
        { name: 'GIT & GITHUB', level: 85, color: 'from-gray-700 to-black', icon: '🔗' },

        { name: 'NODE.JS', level: 70, color: 'from-green-400 to-emerald-500', icon: '⚡' },
        { name: 'EXPRESS.JS', level: 75, color: 'from-gray-400 to-gray-600', icon: '🚀' },
        { name: 'MYSQL', level: 50, color: 'from-blue-500 to-blue-700', icon: '🗄️' },

        { name: 'MONGODB', level: 40, color: 'from-green-500 to-teal-500', icon: '🍃' },
    ], []);

    // Update projects to match revised resume and user feedback
    // const projects = useMemo(() => [
    //     {
    //         title: 'Maharashtra Cyber Complaints Portal',
    //         description: 'A government-deployed complaint management system helping curb online fraud across Maharashtra. Real-time monitoring, advanced search, and data visualization dashboards.',
    //         tech: ['React.js', 'Redux', 'Crypto.js', 'MySQL', 'Java', 'JWT'],
    //         gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    //         status: 'LIVE',
    //         year: '2023-Present'
    //     },
    //     {
    //         title: 'ACEHELPLINE (Emergency Call Management)',
    //         description: 'A modern emergency call management and dispatcher system for real-time incident tracking, call history, and ambulance dispatch. Features include tabbed navigation, call/incident history, and advanced search, built with React, MUI, and DataGrid.',
    //         tech: ['React.js', 'MUI', 'Tailwind', 'TypeScript', 'Java', 'MySQL'],
    //         gradient: 'from-purple-500 via-blue-500 to-cyan-500',
    //         status: 'LIVE',
    //         year: '2025-Present'
    //     },
    //     {
    //         title: 'WhatsApp Business API-Based Messaging & Msg Portal',
    //         description: 'Custom solution to automate customer engagement for small businesses. Real-time, two-way messaging, role-based access, dashboard, and automated responses.',
    //         tech: ['Node.js', 'Express.js', 'React.js', 'Java'],
    //         gradient: 'from-green-400 via-teal-400 to-blue-400',
    //         status: 'LIVE',
    //         year: '2023'
    //     }

    // ], []);

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
                                            src="portfolio/images/sanji.jpg"
                                            alt="Kunwar Brijesh"
                                            width={306}
                                            height={306}
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
                                    <span className="text-sm flex align-center font-medium text-amber-800">Hi I&apos;m Brijesh !<Hand className="w-4 h-4 ml-2 text-amber-800" /></span>
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
                        <h1 className={`cyber-font text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-2 ${glitchActive ? 'glitch' : ''}`}
                            data-text="Brijesh Kunwar">
                            Brijesh Kunwar
                        </h1>
                        <h2 className="cyber-font text-2xl md:text-3xl font-semibold tracking-tight text-cyan-700 mb-4">
                            Frontend Developer
                        </h2>
                    </div>

                    {/* Role with Typing Effect */}
                    <div className="mb-8 relative">
                        <div className="tech-font text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            <span className="text-black">
                                React Developer
                            </span>
                        </div>
                        <div className="w-48 h-1 mx-auto rounded-full bg-gray-500" />
                    </div>

                    {/* Description */}
                    <p className="tech-font text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                        Frontend Developer with 2 years of experience building scalable, dynamic applications using React.js. Specialized in creating optimized UI/UX, managing state, and integrating with backend services. I also have good knowledge of backend development with Node.js, Java, and MySQL. Passionate about delivering clean, user-centric solutions and currently seeking frontend roles where I can contribute to impactful web applications.
                    </p>

                    {/* Action Buttons */}
                    {/* <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
                        <div className="relative group">
                            <button
                                className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                            >
                                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                                    <div className="relative z-10 flex items-center space-x-2">
                                        <span className="transition-all duration-500 group-hover:translate-x-1">View Projects</span>
                                        <svg className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd"></path></svg>
                                    </div>
                                </span>
                            </button>
                        </div>
                        <div className="relative group">
                            <button
                                className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                            >
                                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                                    <div className="relative z-10 flex items-center space-x-2">
                                        <span className="transition-all duration-500 group-hover:translate-x-1">Contact Me</span>
                                        <svg className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd"></path></svg>
                                    </div>
                                </span>
                            </button>
                        </div>
                    </div> */}

                    {/* Tech Stack */}
                    <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-4">
                        {['React.js', 'JavaScript', 'TypeScript', 'Redux', 'React-Native', 'Tailwind CSS', 'Material-UI', 'Next.js', 'HTML5', 'CSS3', 'Node.js', 'Java', 'MySQL', 'Git'].map((tech, index) => (
                            <div
                                key={tech}
                                className="mono-font px-5 py-2 bg-white/20 backdrop-blur-sm border border-cyan-500/30 text-gray-900 font-semibold text-xs rounded hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
                        <h2 className="cyber-font text-3xl md:text-5xl font-black text-black mb-6">
                            TECH <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">SKILLS</span>
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((skill, index) => (
                            <div key={skill.name} className="group relative bg-white/80 backdrop-blur-xl border-2 border-gray-200 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 px-8 py-6">
                                <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-4">
                                        <span className="text-2xl">{skill.icon}</span>
                                        <h3 className="cyber-font text-sm font-bold text-gray-900">{skill.name}</h3>
                                    </div>
                                    <span className="mono-font text-cyan-500 font-semi-bold text-md">{skill.level}%</span>
                                </div>

                                <div className="w-full bg-gray-200 h-3 overflow-hidden mb-4">
                                    <div
                                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 delay-${index * 100}`}
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>

                                <div className="mono-font text-xs text-gray-600 font-medium">
                                    PROFICIENCY LEVEL
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            {/* <section className="relative py-32 px-6">
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

                                    <div className="relative group">
                                        <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                                            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                                            <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                                                <div className="relative z-10 flex items-center space-x-2">
                                                    <span className="transition-all duration-500 group-hover:translate-x-1 text-xs">Access Project</span>
                                                    <svg className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd"></path></svg>
                                                </div>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Contact Section */}
            <section className="relative py-32 px-6 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-center mb-10">
                        <h2 className="cyber-font text-3xl md:text-5xl font-black text-black mb-6">
                            Let&apos;s connect <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">CONNECT</span>
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
                    </div>
                    <p className="tech-font text-2xl text-gray-700 mb-16 font-medium">
                        Ready to build the future together? Let&apos;s create something extraordinary.
                    </p>

                    <div className="flex flex-row flex-wrap gap-4 justify-center items-center mt-8">
                        <a
                            href="mailto:brijeshkunwar85@gmail.com"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-200"
                            title="Email Me"
                        >
                            {/* Envelope icon */}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="M22 6.5 12 13 2 6.5" /></svg>
                            <span className="text-sm">Email</span>
                        </a>
                        <a
                            href="/brijesh_kunwar_resume.pdf"
                            download
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-purple-500 text-purple-700 font-semibold bg-white shadow-md hover:bg-purple-50 hover:scale-105 transition-transform duration-200"
                            title="Download Resume"
                        >
                            {/* Document download icon */}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17v-6m0 6l-3-3m3 3l3-3" /><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 2v4m8-4v4" /></svg>
                            <span className="text-sm">Resume</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/brijeshkunwar85/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-blue-500 text-blue-700 font-semibold bg-white shadow-md hover:bg-blue-50 hover:scale-105 transition-transform duration-200"
                            title="LinkedIn"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" /></svg>
                            <span className="text-sm">LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/Darckie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-800 text-gray-800 font-semibold bg-white shadow-md hover:bg-gray-100 hover:scale-105 transition-transform duration-200"
                            title="GitHub"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.012-1.243-.018-2.25-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.698.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" /></svg>
                            <span className="text-sm">GitHub</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}