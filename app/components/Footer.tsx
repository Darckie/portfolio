export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 py-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Left: Branding */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Brijesh Kunwar</h3>
            <p className="text-sm text-gray-600">Frontend Developer | React Specialist</p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex gap-8">
            <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">GitHub</a>
            <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">LinkedIn</a>
            <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Twitter</a>
          </div>

          {/* Right: Email */}
          <a
            href="mailto:brijeshkunwar85@gmail.com"
            className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
          >
            Get in touch
          </a>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Brijesh Kunwar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
