import Image from 'next/image';


export default function ProjectCard({ title, description, image, link }: any) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white/10 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-xl transition-transform hover:scale-105 hover:shadow-[0_0_24px_4px_rgba(59,130,246,0.4)] hover:border-blue-500 duration-300 flex flex-col items-center overflow-hidden"
    >
      {/* Animated Gradient Accent Bar */}
      <span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 via-white to-blue-500 opacity-60 group-hover:opacity-100 transition-all duration-500 blur-sm" />

      <div className="w-full h-40 mb-4 overflow-hidden rounded-xl border border-white/10">
        <Image
          src={image}
          alt={title}
          width={660}
          height={200}
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-300"
        />
      </div>
      <h3 className="text-2xl font-bold tracking-widest uppercase mb-2 bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>

      {/* Animated Glow Ring */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400 group-hover:shadow-[0_0_24px_4px_rgba(59,130,246,0.5)] transition-all duration-300" />
    </a>
  );
}
