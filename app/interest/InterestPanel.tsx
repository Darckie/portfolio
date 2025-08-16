

'use client'
import { useMemo, useState } from 'react';
interface Interest {
    title: string;
    icon: string;
    description: string;
    color: string;
}
export default function InterestsSection() {
    const [selectedInterest, setSelectedInterest] = useState<Interest | null>(null);

    const interests = useMemo(() => [
        {
            title: 'Space Science',
            icon: '🚀',
            description: 'Astronomy, cosmology, and space exploration',
            color: 'bg-blue-500'
        },
        {
            title: 'Philosophy',
            icon: '🧠',
            description: 'Existentialism, ethics, and consciousness',
            color: 'bg-purple-500'
        },
        {
            title: 'Poetry',
            icon: '✍️',
            description: 'Creative writing and expression',
            color: 'bg-green-500'
        },
        {
            title: 'Guitar',
            icon: '🎸',
            description: 'Fingerstyle guitar and various genres',
            color: 'bg-yellow-500'
        },
        {
            title: 'Art & Sketching',
            icon: '🎨',
            description: 'Drawing and visual creativity',
            color: 'bg-red-500'
        },
        {
            title: 'Reading & Fitness',
            icon: '📚',
            description: 'Books and kickboxing',
            color: 'bg-indigo-500'
        }
    ], []);

    return (
        <div className="max-w-4xl mx-auto p-6">
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
            <h2 className="cyber-font text-2xl font-bold text-black text-center mb-12">
                My Interests
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {interests.map((interest, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedInterest(selectedInterest === interest ? null : interest)}
                        className={`p-6 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${selectedInterest === interest
                            ? `${interest.color} text-white border-transparent shadow-lg`
                            : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 shadow-sm'
                            }`}
                    >
                        <div className="text-3xl mb-2">{interest.icon}</div>
                        <h3 className="font-semibold text-sm">{interest.title}</h3>
                    </button>
                ))}
            </div>

            {/* Selected Interest Details */}
            {selectedInterest !== null && (
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <div className="text-5xl mb-4">
                        {selectedInterest.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {selectedInterest.title}
                    </h3>
                    <p className="text-gray-600">
                        {selectedInterest.description}
                    </p>
                </div>
            )}

            {selectedInterest === null && (
                <div className="text-center text-gray-500 py-8">
                    Click on any interest above to learn more
                </div>
            )}
        </div>
    );
}