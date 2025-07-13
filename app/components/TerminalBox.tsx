'use client';
import { useState, useEffect, useRef } from 'react';

interface Particle {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
}

interface MousePosition {
    x: number;
    y: number;
}

export default function FuturisticDeveloperTerminal() {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const [terminalStep, setTerminalStep] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [showWelcome, setShowWelcome] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
    const [glitchEffect, setGlitchEffect] = useState(false);
    const [scanlineProgress, setScanlineProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState('');

    // Ref for the terminal box
    const boxRef = useRef<HTMLDivElement>(null);

    const texts = [
        'HELLO, I AM KUNWAR BRIJESH.',
        'MERN STACK DEVELOPER.',
        'FULL-STACK ENGINEER.',
        'REACT & NODE.JS SPECIALIST.',
        'BUILDING MODERN WEB APPS.'
    ];

    // Initialize particles
    useEffect(() => {
        const newParticles: Particle[] = [];
        for (let i = 0; i < 50; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            });
        }
        setParticles(newParticles);
    }, []);

    // Particle animation
    useEffect(() => {
        const animateParticles = () => {
            setParticles(prev => prev.map(particle => ({
                ...particle,
                x: particle.x + particle.vx,
                y: particle.y + particle.vy,
                vx: particle.x <= 0 || particle.x >= (typeof window !== 'undefined' ? window.innerWidth : 1200) ? -particle.vx : particle.vx,
                vy: particle.y <= 0 || particle.y >= (typeof window !== 'undefined' ? window.innerHeight : 800) ? -particle.vy : particle.vy
            })));
        };

        const interval = setInterval(animateParticles, 50);
        return () => clearInterval(interval);
    }, []);

    // Mouse tracking
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        if (typeof window !== 'undefined') {
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    // Scanline effect
    useEffect(() => {
        const scanlineTimer = setInterval(() => {
            setScanlineProgress(prev => (prev + 1) % 100);
        }, 100);
        return () => clearInterval(scanlineTimer);
    }, []);

    // Typewriter effect with glitch
    useEffect(() => {
        const currentWord = texts[currentIndex];
        const typeTimer = setTimeout(() => {
            if (!isDeleting) {
                if (currentText !== currentWord) {
                    setCurrentText(currentWord.slice(0, currentText.length + 1));
                    // Random glitch effect
                    if (Math.random() < 0.1) {
                        setGlitchEffect(true);
                        setTimeout(() => setGlitchEffect(false), 150);
                    }
                } else {
                    setTimeout(() => setIsDeleting(true), 3000);
                }
            } else {
                if (currentText !== '') {
                    setCurrentText(currentText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? 50 : Math.random() * 100 + 50);

        return () => clearTimeout(typeTimer);
    }, [currentText, currentIndex, isDeleting, texts]);

    // Cursor blinking
    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(cursorTimer);
    }, []);

    // Update time on client side only
    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(new Date().toLocaleTimeString());
        };
        
        updateTime(); // Set initial time
        const interval = setInterval(updateTime, 1000);
        
        return () => clearInterval(interval);
    }, []);

    // Function to reset all state to initial (minimize box)
    const resetTerminal = () => {
        setTerminalStep(0);
        setShowWelcome(false);
        setShowSkills(false);
        setShowProjects(false);
        setCommandHistory([]);
        setCurrentText('');
        setCurrentIndex(0);
        setIsDeleting(false);
        setGlitchEffect(false);
    };

    // Detect click outside the terminal box
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
                resetTerminal();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleInitialize = () => {
        if (terminalStep === 0) {
            setTerminalStep(1);
            setShowWelcome(true);
            setCommandHistory(['> quantum_init --neural-link']);
            setGlitchEffect(true);
            setTimeout(() => setGlitchEffect(false), 300);
        }
    };

    const handleSkillsClick = () => {
        if (terminalStep >= 1) {
            setTerminalStep(2);
            setShowSkills(true);
            setCommandHistory(prev => [...prev, '> neural_scan --abilities']);
        }
    };

    const handleProjectsClick = () => {
        if (terminalStep >= 1) {
            setTerminalStep(3);
            setShowProjects(true);
            setCommandHistory(prev => [...prev, '> hologram_display --projects']);
        }
    };

    return (
        <div className="min-h-screen bg-black relative overflow-hidden" style={{
            backgroundImage: 'url("/images/background.jpg")', // Add your image path here
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            {/* Background Image Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>
            
            {/* Animated Gradient Background */}
            <div 
                className="absolute inset-0 opacity-20"
                style={{
                    // background: 'linear-gradient(45deg, #1a0033, #003366, #001a33)',
                    // animation: 'gradient-shift 8s ease infinite'
                }}
            ></div>
            
            {/* Neural Network Grid */}
            <div className="absolute inset-0 opacity-10">
                <div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at 25% 25%, #00ffff 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, #ff00ff 1px, transparent 1px),
                            linear-gradient(45deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(-45deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px, 60px 60px, 30px 30px, 30px 30px'
                    }}
                ></div>
            </div>

            {/* Floating Particles */}
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 pointer-events-none"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        boxShadow: '0 0 6px #00ffff, 0 0 12px #00ffff'
                    }}
                ></div>
            ))}

            {/* Mouse Trail Effect */}
            <div
                className="absolute w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-100"
                style={{
                    left: mousePos.x - 16,
                    top: mousePos.y - 16,
                    background: 'radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%)'
                }}
            ></div>

            {/* Scanline Effect */}
            <div
                className="absolute inset-0 pointer-events-none z-40"
                style={{
                    background: `linear-gradient(transparent ${scanlineProgress}%, rgba(0, 255, 255, 0.03) ${scanlineProgress + 1}%, transparent ${scanlineProgress + 2}%)`
                }}
            ></div>

            <div className="flex items-center justify-center min-h-screen p-4 relative z-20">
                <div
                    ref={boxRef}
                    className={`relative group transition-all duration-1000 ${
                        terminalStep > 0 ? 'scale-105' : 'scale-100'
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Multi-layer Glow Effect */}
                    <div className={`absolute -inset-8 transition-all duration-1000 ${
                        isHovered || terminalStep > 0 ? 'opacity-60' : 'opacity-20'
                    }`}>
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-50"></div>
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-30"></div>
                    </div>

                    {/* Main Terminal */}
                    <div 
                        className={`relative backdrop-blur-2xl border border-cyan-500/60 rounded-2xl p-6 md:p-8 w-full max-w-5xl mx-auto shadow-2xl transition-all duration-500 ${
                            glitchEffect ? 'animate-glitch' : ''
                        }`} 
                        style={{
                            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(20, 20, 40, 0.8) 50%, rgba(0, 0, 0, 0.9) 100%)',
                            boxShadow: `
                                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                                0 0 20px rgba(0, 255, 255, 0.3),
                                0 0 40px rgba(0, 255, 255, 0.1),
                                0 0 80px rgba(0, 255, 255, 0.05)
                            `
                        }}
                    >
                        
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-cyan-500/30">
                            <div className="flex items-center space-x-4">
                                <div className="flex space-x-2">
                                    <div className="w-4 h-4 bg-red-400 rounded-full shadow-lg shadow-red-400/50"></div>
                                    <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"></div>
                                    <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
                                </div>
                                <span className="text-cyan-400 font-mono text-sm" style={{ textShadow: '0 0 10px #00ffff' }}>
                                    quantum@neural-net:~$
                                </span>
                            </div>
                            <div className="text-gray-400 text-xs font-mono bg-black/50 px-3 py-1 rounded-full border border-gray-600/30">
                                Neural Link: {currentTime}
                            </div>
                        </div>

                        {/* Main Display */}
                        <div className="space-y-6">
                            {/* Typewriter Text with Holographic Effect */}
                            <div className="mb-8 relative">
                                <h1 
                                    className={`text-3xl md:text-6xl font-bold font-mono leading-tight relative ${glitchEffect ? 'animate-glitch' : ''}`}
                                    style={{
                                        background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ffff)',
                                        backgroundSize: '300% 300%',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        animation: 'gradient-shift 3s ease infinite, text-glow 2s ease-in-out infinite alternate'
                                    }}
                                >
                                    {currentText}
                                    <span 
                                        className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
                                        style={{ color: '#00ffff', textShadow: '0 0 10px #00ffff' }}
                                    >
                                        |
                                    </span>
                                </h1>
                                
                                {/* Holographic Reflection */}
                                <div className="absolute inset-0 opacity-30 blur-sm transform scale-y-75 origin-bottom pointer-events-none" style={{ transform: 'scaleY(-0.75)' }}>
                                    <h1 
                                        className="text-3xl md:text-6xl font-bold font-mono leading-tight"
                                        style={{
                                            background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ffff)',
                                            backgroundSize: '300% 300%',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}
                                    >
                                        {currentText}
                                    </h1>
                                </div>
                            </div>

                            {/* Command History */}
                            {commandHistory.length > 0 && (
                                <div className="bg-black/60 border border-cyan-500/40 rounded-lg p-4 font-mono text-sm backdrop-blur-md relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent transform -skew-x-12"></div>
                                    {commandHistory.map((cmd, index) => (
                                        <div 
                                            key={index} 
                                            className="text-cyan-400 mb-1"
                                            style={{ 
                                                textShadow: '0 0 10px #00ffff',
                                                animation: `type-in 0.8s ease-out ${index * 200}ms forwards`
                                            }}
                                        >
                                            {cmd}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Step 0: Initial State */}
                            {terminalStep === 0 && (
                                <div className="space-y-4">
                                    <div className="bg-black/40 border border-gray-500/40 rounded-lg p-6 backdrop-blur-md relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10"></div>
                                        <p className="text-gray-300 font-mono text-sm mb-6 relative z-10">
                                            <span className="text-cyan-400" style={{ textShadow: '0 0 10px #00ffff' }}>Developer Portfolio Terminal</span><br/>
                                            Welcome to my developer portfolio terminal.<br/>
                                            Ready to explore my skills, projects, and experience.
                                        </p>
                                        <button
                                            onClick={handleInitialize}
                                            className="relative px-8 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/60 text-cyan-400 rounded-lg font-mono text-sm hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 group overflow-hidden"
                                            style={{ textShadow: '0 0 10px #00ffff' }}
                                        >
                                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></span>
                                            <span className="relative">Know More About Me</span>
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 1: Welcome Message */}
                            {showWelcome && (
                                <div className="bg-black/60 border border-cyan-500/50 rounded-lg p-6 font-mono backdrop-blur-md relative overflow-hidden animate-matrix-reveal">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10"></div>
                                    <div className="relative z-10">
                                        <div className="text-cyan-400 mb-4" style={{ textShadow: '0 0 10px #00ffff' }}>
                                            <span className="text-green-400">⬢</span> Neural link established • Consciousness synchronized
                                        </div>
                                        <div className="text-gray-300 space-y-2 text-sm">
                                            <p className="animate-type-in">→ Quantum Full Stack Developer • 1.9+ cycles experience</p>
                                            <p className="animate-type-in" style={{ animationDelay: '0.2s' }}>→ MERN Stack Neural Architecture Specialist</p>
                                            <p className="animate-type-in" style={{ animationDelay: '0.4s' }}>→ Built scalable quantum web matrices and APIs</p>
                                            <p className="animate-type-in" style={{ animationDelay: '0.6s' }}>→ Currently architecting Government Portal Nexus</p>
                                        </div>
                                        
                                        <div className="mt-6 space-y-3">
                                            <p className="text-purple-400 text-sm" style={{ textShadow: '0 0 10px #ff00ff' }}>Available quantum commands:</p>
                                            <div className="flex flex-wrap gap-3">
                                                <button
                                                    onClick={handleSkillsClick}
                                                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/60 text-purple-400 rounded-lg text-sm hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                                                    style={{ textShadow: '0 0 10px #ff00ff' }}
                                                >
                                                    ◈ neural_scan --abilities
                                                </button>
                                                <button
                                                    onClick={handleProjectsClick}
                                                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/60 text-blue-400 rounded-lg text-sm hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                                                    style={{ textShadow: '0 0 10px #0080ff' }}
                                                >
                                                    ◇ hologram_display --projects
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Skills Display */}
                            {showSkills && (
                                <div className="bg-black/60 border border-purple-500/50 rounded-lg p-6 font-mono backdrop-blur-md relative overflow-hidden animate-hologram-in">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-500/10"></div>
                                    <div className="relative z-10">
                                        <div className="text-purple-400 mb-4" style={{ textShadow: '0 0 10px #ff00ff' }}>
                                            <span className="text-green-400">⬢</span> Neural abilities scanned • Matrix loaded
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="relative">
                                                <h3 className="text-cyan-400 text-sm mb-3" style={{ textShadow: '0 0 10px #00ffff' }}>◈ Frontend Neural Networks:</h3>
                                                <div className="space-y-2 text-sm">
                                                    {['React.js Quantum Core', 'JavaScript ES2024+ Matrix', 'HTML5 & CSS3 Nexus', 'Tailwind CSS Grid', 'Material-UI Interface'].map((skill, index) => (
                                                        <div key={skill} className="flex items-center text-gray-300 hover:text-cyan-300 transition-colors duration-300 animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
                                                            <span className="text-cyan-400 mr-2">▶</span>
                                                            {skill}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            <div className="relative">
                                                <h3 className="text-purple-400 text-sm mb-3" style={{ textShadow: '0 0 10px #ff00ff' }}>◇ Backend Quantum Architecture:</h3>
                                                <div className="space-y-2 text-sm">
                                                    {['Node.js Reactor Core', 'Express.js Lightning', 'REST API Protocols', 'MySQL Data Nexus', 'MongoDB Quantum DB'].map((skill, index) => (
                                                        <div key={skill} className="flex items-center text-gray-300 hover:text-purple-300 transition-colors duration-300 animate-slide-in" style={{ animationDelay: `${index * 100 + 300}ms` }}>
                                                            <span className="text-purple-400 mr-2">▶</span>
                                                            {skill}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-6">
                                            <h3 className="text-pink-400 text-sm mb-3" style={{ textShadow: '0 0 10px #ff1493' }}>◆ Quantum Tools & Protocols:</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {['Git Timeline', 'GitHub Nexus', 'Postman API', 'Redux State', 'Socket.IO Real-time', 'JWT Security'].map((tool, index) => (
                                                    <span 
                                                        key={tool} 
                                                        className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/40 text-pink-300 rounded text-xs hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 animate-float-in" 
                                                        style={{ 
                                                            animationDelay: `${index * 50}ms`,
                                                            textShadow: '0 0 5px #ff1493'
                                                        }}
                                                    >
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Projects Display */}
                            {showProjects && (
                                <div className="bg-black/60 border border-blue-500/50 rounded-lg p-6 font-mono backdrop-blur-md relative overflow-hidden animate-hologram-reveal">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-500/10"></div>
                                    <div className="relative z-10">
                                        <div className="text-blue-400 mb-4" style={{ textShadow: '0 0 10px #0080ff' }}>
                                            <span className="text-green-400">⬢</span> Holographic projects materialized • Database synchronized
                                        </div>
                                        
                                        <div className="space-y-6">
                                            <div className="border-l-4 border-green-500 pl-4 bg-gradient-to-r from-green-500/10 to-transparent rounded-r-lg p-4 hover:from-green-500/20 transition-all duration-500 animate-project-slide">
                                                <h3 className="text-green-400 text-lg font-bold mb-2" style={{ textShadow: '0 0 10px #00ff00' }}>⬡ Maharashtra Cyber Nexus Portal</h3>
                                                <p className="text-gray-300 text-sm mb-3">
                                                    Government-deployed quantum complaint management system neutralizing online fraud across Maharashtra dimension.
                                                </p>
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {['React.js', 'Node.js', 'MySQL', 'Express.js'].map((tech) => (
                                                        <span 
                                                            key={tech} 
                                                            className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs border border-green-500/30 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                                                            style={{ textShadow: '0 0 5px #00ff00' }}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                                <p className="text-green-400 text-xs" style={{ textShadow: '0 0 5px #00ff00' }}>Status: ACTIVE NEXUS • Aug 2023 - Present</p>
                                            </div>

                                            <div className="border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-r-lg p-4 hover:from-cyan-500/20 transition-all duration-500 animate-project-slide" style={{ animationDelay: '0.2s' }}>
                                                <h3 className="text-cyan-400 text-lg font-bold mb-2" style={{ textShadow: '0 0 10px #00ffff' }}>◈ WhatsApp Quantum Business API</h3>
                                                <p className="text-gray-300 text-sm mb-3">
                                                    Neural solution automating customer engagement matrices for quantum businesses with real-time messaging protocols.
                                                </p>
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {['React.js', 'Node.js', 'WhatsApp API', 'MongoDB'].map((tech) => (
                                                        <span 
                                                            key={tech} 
                                                            className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs border border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                                                            style={{ textShadow: '0 0 5px #00ffff' }}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                                <p className="text-cyan-400 text-xs" style={{ textShadow: '0 0 5px #00ffff' }}>Status: MISSION COMPLETE</p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 bg-gradient-to-r from-purple-500/10 to-transparent rounded-r-lg p-4 hover:from-purple-500/20 transition-all duration-500 animate-project-slide" style={{ animationDelay: '0.4s' }}>
                                                <h3 className="text-purple-400 text-lg font-bold mb-2" style={{ textShadow: '0 0 10px #ff00ff' }}>◇ AI Neural Resume Parser</h3>
                                                <p className="text-gray-300 text-sm mb-3">
                                                    Quantum intelligence tool analyzing resume matrices, extracting neural patterns, and providing enhancement protocols.
                                                </p>
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {['Express.js', 'Hugging Face AI', 'React.js', 'NLP'].map((tech) => (
                                                        <span 
                                                            key={tech} 
                                                            className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                                                            style={{ textShadow: '0 0 5px #ff00ff' }}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                                <p className="text-purple-400 text-xs" style={{ textShadow: '0 0 5px #ff00ff' }}>Status: PERSONAL QUANTUM LAB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Contact Info */}
                            {terminalStep > 0 && (
                                <div className="bg-black/40 border border-gray-500/40 rounded-lg p-4 mt-6 backdrop-blur-md relative overflow-hidden animate-contact-reveal">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent transform -skew-x-12"></div>
                                    <div className="relative z-10">
                                        <div className="text-cyan-400 mb-3" style={{ textShadow: '0 0 10px #00ffff' }}>
                                            <span className="text-green-400">⬢</span> Neural contact protocols • Quantum communication channels
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                            <div className="flex items-center text-gray-300 hover:text-cyan-300 transition-colors duration-300">
                                                <span className="text-cyan-400 mr-2">◈</span>
                                                <span>Email: brijeshkunwar@gmail.com</span>
                                            </div>
                                            <div className="flex items-center text-gray-300 hover:text-purple-300 transition-colors duration-300">
                                                <span className="text-purple-400 mr-2">◇</span>
                                                <span>LinkedIn: linkedin.com/in/brijesh-kunwar</span>
                                            </div>
                                            <div className="flex items-center text-gray-300 hover:text-pink-300 transition-colors duration-300">
                                                <span className="text-pink-400 mr-2">◆</span>
                                                <span>GitHub: github.com/brijeshkunwar</span>
                                            </div>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <p className="text-gray-400 text-xs" style={{ textShadow: '0 0 5px #666' }}>
                                                Ready to establish quantum collaboration • Neural link awaiting response...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes text-glow {
                    0% { filter: drop-shadow(0 0 5px #00ffff); }
                    100% { filter: drop-shadow(0 0 20px #00ffff) drop-shadow(0 0 30px #00ffff); }
                }
                
                @keyframes type-in {
                    0% { opacity: 0; transform: translateY(10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes slide-in {
                    0% { opacity: 0; transform: translateX(-20px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                
                @keyframes float-in {
                    0% { opacity: 0; transform: translateY(10px) scale(0.8); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                
                @keyframes project-slide {
                    0% { opacity: 0; transform: translateX(-30px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                
                @keyframes hologram-in {
                    0% { opacity: 0; transform: scale(0.9) rotateY(10deg); }
                    100% { opacity: 1; transform: scale(1) rotateY(0deg); }
                }
                
                @keyframes hologram-reveal {
                    0% { opacity: 0; transform: scale(0.8) rotateX(10deg); }
                    100% { opacity: 1; transform: scale(1) rotateX(0deg); }
                }
                
                @keyframes matrix-reveal {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes contact-reveal {
                    0% { opacity: 0; transform: scale(0.95); }
                    100% { opacity: 1; transform: scale(1); }
                }
                
                @keyframes glitch {
                    0%, 100% { transform: translate(0); }
                    20% { transform: translate(-2px, 2px); }
                    40% { transform: translate(-2px, -2px); }
                    60% { transform: translate(2px, 2px); }
                    80% { transform: translate(2px, -2px); }
                }
                
                .animate-glitch {
                    animation: glitch 0.3s ease-in-out;
                }
                
                .animate-type-in {
                    animation: type-in 0.8s ease-out forwards;
                }
                
                .animate-slide-in {
                    animation: slide-in 0.6s ease-out forwards;
                }
                
                .animate-float-in {
                    animation: float-in 0.5s ease-out forwards;
                }
                
                .animate-project-slide {
                    animation: project-slide 0.8s ease-out forwards;
                }
                
                .animate-hologram-in {
                    animation: hologram-in 0.6s ease-out forwards;
                }
                
                .animate-hologram-reveal {
                    animation: hologram-reveal 0.8s ease-out forwards;
                }
                
                .animate-matrix-reveal {
                    animation: matrix-reveal 0.5s ease-out forwards;
                }
                
                .animate-contact-reveal {
                    animation: contact-reveal 0.4s ease-out forwards;
                }
            `}</style>
        </div>
    );
} 