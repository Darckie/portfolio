export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-16 bg-white text-black dark:bg-black dark:text-white transition-colors">
      <h1 className="text-5xl sm:text-6xl font-cyborg tracking-wider text-center">
        Hello, I’m Dark Sentry
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-300 text-center">
        I build futuristic and accessible web apps using Next.js, TypeScript, and Tailwind CSS.
        Passionate about clean design and fast performance.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="border border-black dark:border-white px-6 py-2 text-sm font-medium uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-2 text-sm font-medium uppercase border border-transparent bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}
