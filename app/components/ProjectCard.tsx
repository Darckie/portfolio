import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ title, description, image, link }: any) {
  return (
    <div className="border rounded-2xl overflow-hidden shadow-md dark:shadow-white/10 transition">
      <Image src={image} alt={title} width={600} height={400} className="w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
        <Link href={link} target="_blank" className="inline-block mt-4 text-sm underline">
          View on GitHub
        </Link>
      </div>
    </div>
  );
}
