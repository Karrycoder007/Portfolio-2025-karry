import Image from "next/image";

type ProjectCardProps = {
  image: string;
  title: string;
  link?: string;
};

export default function ProjectCard({ image, title, link }: ProjectCardProps) {
  return (
    <div className="min-w-[300px] bg-white text-blue-50 dark:bg-zinc-900 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 text-sm"
          >
            Visit →
          </a>
        )}
      </div>
    </div>
  );
}
