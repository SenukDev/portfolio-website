import Image from 'next/image';

type Tag = {
    name: string;
    color?: string;
};

type DescriptionItem = string | { content: string; indent?: boolean };

type ProjectCardProps = {
    title: string;
    description: DescriptionItem[];
    tags: Tag[];
    imageUrl?: string;
    visitUrl?: string;
    sourceUrl?: string;
    videoUrl?: string;
};

export default function ProjectCard({
    title,
    description,
    tags,
    visitUrl,
    imageUrl,
    sourceUrl,
    videoUrl
}: ProjectCardProps) {
    return (
        <>
            <div className="text-2xl md:text-3xl font-bold mb-2">{title}</div>
            <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                    <span key={index} className={`px-3 py-1 text-xs font-medium rounded-full border ${tag.color ?? "border-white" }`}>
                        {tag.name}
                    </span>
                    ))}
                </div>
            <div className="px-6">
                {imageUrl && (
                    <div className="relative w-full aspect-[16/9] mb-4">
                        <Image 
                            src={imageUrl}
                            fill
                            alt="Profile Picture"
                            className="rounded-lg object-cover"
                        />
                    </div>
                )}

                <div className="text-md mb-4">
                    <ul className="list-disc list-inside space-y-1">
                    {description.map((item, index) => {
                        const isIndented = typeof item !== "string" && item.indent;
                        const content = typeof item === "string" ? item : item.content;

                        return (
                        <li
                            key={index}
                            dangerouslySetInnerHTML={{ __html: content }}
                            className={`text-md ${isIndented ? "ml-6 list-[circle]" : ""}`}
                        />
                        );
                    })}
                    </ul>
                </div>
                {videoUrl && (
                    <div className="relative w-full aspect-[16/9]  mb-4">
                        <iframe className="absolute top-0 left-0 w-full h-full rounded-lg" src={videoUrl} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                )}
                
                <div className="flex justify-end gap-4">
                    {sourceUrl && (
                        <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="border px-4 py-1 rounded-full text-sm md:text-lg">
                            Source Code
                        </a>
                    )}
                    {visitUrl && (
                        <a href={visitUrl} target="_blank" rel="noopener noreferrer" className="border px-4 py-1 rounded-full text-sm md:text-lg">
                            Visit Page
                        </a>
                    )}
                </div>
                
            </div>
        </>
    );
}
