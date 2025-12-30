import Image from "next/image";

type ProjectCardProps = {
  image: string;
  title: string;
  link?: string;
};

export default function ProjectCard({ image, title, link }: ProjectCardProps) {
  return (
    <div className="min-w-[300px] bg-white dark:bg-zinc-900 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
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
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        {link && (


          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
          >
            Visit →
          </a>



        )}
      </div>
    </div>
  );
}
