'use client'
import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';

import Interest from '../interest/InterestPanel'

export default function AboutPage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);
    // const [currentTime, setCurrentTime] = useState('');
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

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);

        };
    }, []);

    // Real experience
    const experiences = useMemo(() => [
        {
            year: '2023–Present',
            title: 'Mid-Senior Frontend Developer',
            company: 'Technical Offerings & System Solutions Pvt Ltd. (TOSS)',
            description: 'Working as a mid-senior developer focused on creating and maintaining business applications. My main tasks include building interactive dashboards for data visualization, developing CRM systems for customer management, and creating user portals for different business needs. I work with React.js, Redux, and other modern frontend tools to build responsive and user-friendly interfaces. I also help with backend development using Node.js, Java, and MySQL when needed. I collaborate with team members to plan features, review code, and ensure high-quality deliverables.',
            tech: ['React.js', 'Redux', 'Node.js', 'Java', 'Tailwind CSS', 'TypeScript', 'MySQL']
        }
    ], []);

    // Real education
    const education = useMemo(() => [
        {
            degree: 'Master of Computer Applications (MCA)',
            institution: 'H.N.B.G.U Srinagar',
            year: '2023',
            description: 'CGPA: 7.4'
        },
        {
            degree: 'Bachelor of Science (B.Sc)',
            institution: 'P.G.C Gopeshwer',
            year: '2021',
            description: 'CGPA: 6.4'
        },
        {
            degree: '12th Grade',
            institution: 'GIC Kansuwa',
            year: '2017',
            description: 'Percentage: 72%'
        }
    ], []);

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


            {/* Hero Section */}
            <section className="relative pt-32 pb-15 px-6">
                <div className={`max-w-7xl mx-auto transform transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                    {/* Page Title */}
                    <div className="text-center mb-10">
                        <h2 className="cyber-font text-3xl md:text-5xl font-black text-black mb-4">
                            ABOUT <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">ME</span>
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
                    </div>

                    {/* About Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                        {/* Profile Section */}
                        <div className="relative">
                            <div className="bg-white/80 backdrop-blur-xl border-gray-300 border-r-2 p-8 ">
                                <div className="flex items-center space-x-6 mb-8">
                                    <div className="relative">
                                        <Image
                                            src="portfolio/images/vinsmokeSanji.jpeg"
                                            alt="Kunwar Brijesh"
                                            width={120}
                                            height={120}
                                            className="w-24 h-24 object-cover rounded-full border-4 border-cyan-500"
                                        />
                                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                                    </div>
                                    <div>
                                        <h2 className="cyber-font text-2xl font-bold text-black">Brijesh Kunwar</h2>
                                        <p className="tech-font text-gray-600 font-medium">React Developer / Frontend Engineer</p>
                                        <p className="mono-font text-sm text-cyan-500">Introvert</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="tech-font text-gray-700 leading-relaxed">
                                        Frontend Developer with 2 years of experience building scalable, dynamic applications using React.js. Specialized in creating optimized UI/UX, managing state, and integrating with backend services. I also have decent knowledge of backend development with Node.js, Express.js, and MySQL. Passionate about delivering clean, user-centric solutions and currently seeking frontend roles where I can contribute to impactful web applications.
                                    </p>
                                    <p className="tech-font text-gray-700 leading-relaxed">
                                        Committed to writing clean, maintainable code and staying updated with the latest industry trends and best practices. Enthusiast of poetry, sketching, and fingerstyle guitar. Passionate about reading, kickboxing, and creative expression.
                                    </p>
                                </div>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                                    <div className="text-center">
                                        <div className="cyber-font text-2xl font-bold text-cyan-500">2</div>
                                        <div className="tech-font text-sm text-gray-600">Years Experience</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="cyber-font text-2xl font-bold text-purple-500">30+</div>
                                        <div className="tech-font text-sm text-gray-600">Projects</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="cyber-font text-2xl font-bold text-pink-500">13+</div>
                                        <div className="tech-font text-sm text-gray-600">Technologies</div>
                                    </div>
                                </div>



                            </div>
                        </div>

                        {/* Skills Grid */}
                        <div className="space-y-6">
                            <h3 className="cyber-font text-2xl font-bold text-black mb-6">Skills</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { name: 'Frontend', skills: ['React.js', 'Next.js', 'JavaScript/TypeScript', 'Redux', 'Tailwind CSS', 'Material-UI', 'HTML5/CSS3'] },
                                    { name: 'Backend', skills: ['Node.js', 'Express.js', 'Java', 'Sequelize', 'JWT', 'Next.js'] },
                                    { name: 'Database', skills: ['MySQL', 'MongoDB'] },
                                    { name: 'Tools', skills: ['Git', 'GitHub', 'Postman'] }
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
                        <h2 className="cyber-font text-2xl font-bold text-black text-center mb-12">
                            Experience
                        </h2>

                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative  backdrop-blur-xl border-2 bg-gray-50 border-gray-100 p-8 rounded-lg  hover:border-cyan-200/50 transition-all duration-300">
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





                    <section className="mb-12">
                        <div className="max-w mx-auto">
                            <h2 className="cyber-font text-2xl font-bold text-black text-center mb-12">
                                Education
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                {education.map((edu, index) => (
                                    <button
                                        key={index}

                                        className={`py-4 px-6 bg-pink-50 rounded-lg border-2 transition-all duration-200 hover:scale-105 text-left`}
                              >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="text-sm m-0">🎓</div>
                                            <span className={`mono-font text-sm font-medium ${true ? 'text-gray-800' : 'text-purple-500'
                                                }`}>
                                                {edu.year}
                                            </span>
                                            
                                        </div>
                                        <h3 className="system-font font-semibold text-md mb-3">{edu.degree}</h3>
                                        <p className={`tech-font text-sm ${true ? 'text-gray-800' : 'text-purple-500'
                                            }`}>
                                            {edu.institution} / <span className="font-bold text-blue-900">{edu.description}</span>
                                        </p>
                                        
                                    </button>
                                ))}
                            </div>

                        </div>




                    </section>

                    {/* Interests Section */}
                    <Interest />



                </div>
            </section>
        </div>
    );
} 