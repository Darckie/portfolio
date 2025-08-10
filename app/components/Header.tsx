'use client'
import { MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react'


const Header = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  const [currentTime, setCurrentTime] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-cyan-500/20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex justify-center align-center cyber-font text-xl font-black text-black">
            {/* give size small to icon */}
            <MapPin className="mr-2 text-xs h-4 w-4 text-red-900" />
            <p>         <span className="text-gray-700 text-sm"> UTTARAKHAND /</span>      <span className="text-teal-500 text-xs">NOIDA</span></p>


          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="cyber-font text-xs text-teal-700 mt-1">
              {currentTime}
            </div>
            {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((item) => (
              <button
                key={item}
                onClick={() =>

                  onNavigate && onNavigate(item.toLowerCase())
                }
                className="text-black text-sm hover:text-cyan-500 transition-colors duration-300 relative group font-mono"
              >
                {item}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
