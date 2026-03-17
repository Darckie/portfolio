
import { PhoneCallIcon } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen text-gray-900 relative">
      <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700&display=swap');
                
                .cyber-font {
                  font-family: 'Poppins', sans-serif;
                }
                
                .tech-font {
                  font-family: 'Inter', sans-serif;
                }
                
                .mono-font {
                  font-family: 'Inter', sans-serif;
                }
            `}</style>

      <section className="relative py-32 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-center mb-10">
            <h2 className="cyber-font text-3xl md:text-5xl font-black text-black mb-6">
              LETS <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">CONNECT</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          </div>
          <p className="tech-font text-2xl text-gray-700 mb-16 font-medium">
            Ready to build the future together? Let&apos;s create something extraordinary.
          </p>
          <span className='text-gray-600 font-bold flex justify-center gap-1 text-align-center'><PhoneCallIcon />7830372716</span>
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
    </main>
  );
}
