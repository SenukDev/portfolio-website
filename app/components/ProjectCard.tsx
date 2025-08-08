type Tag = {
  name: string;
  color?: string;
};

type ProjectCardProps = {
  title: string;
  description: string[];
  tags: Tag[];
  visitUrl: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  visitUrl,
}: ProjectCardProps) {
    return (
        <div className="w-full border border-gray-400 rounded-xl p-4 ">
            <div className="flex justify-between gap-6 items-stretch">
                <div className="flex-1 flex flex-col justify-between">
                    <h3 className="text-md md:text-lg font-bold mb-2">{title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`px-3 py-1 text-xs font-medium rounded-full border ${
                            tag.color ?? "border-white"
                            }`}
                        >
                            {tag.name}
                        </span>
                        ))}
                    </div>

                    <div className="text-sm mb-4">
                        <ul className="list-disc list-inside space-y-1">
                        {description.map((line, index) => (
                            <li
                            key={index}
                            dangerouslySetInnerHTML={{ __html: line }}
                            className="text-sm"
                            />
                        ))}
                        </ul>
                    </div>

                    <div className="self-end">
                        <a
                            href={visitUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border px-4 py-1 rounded-full text-md"
                        >
                        Visit
                        </a>
                    </div>
                </div>
                <div className="w-[60px] border-l border-gray-400 rounded-r-lg overflow-hidden">
                    <button
                        className="w-full h-full flex items-center justify-center"
                        aria-label="Expand section"
                    >
                        <span className="text-2xl font-bold">▼</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
