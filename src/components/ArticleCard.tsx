import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
    title: string;
    category?: string;
    author?: string;
    date?: string;
    imageUrl?: string;
    className?: string;
    priority?: boolean;
}

export default function ArticleCard({
    title,
    category,
    author,
    date,
    imageUrl,
    className,
    priority = false,
}: ArticleCardProps) {
    return (
        <article className={cn("flex gap-4 group cursor-pointer", className)}>
            {imageUrl && (
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-md bg-gray-200">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 96px"
                        priority={priority}
                    />
                </div>
            )}
            <div className="flex flex-col justify-center">
                {category && (
                    <span className="text-xs font-bold text-red-600 uppercase mb-1 tracking-wider">
                        {category}
                    </span>
                )}
                <h3 className="text-sm font-semibold leading-snug group-hover:text-red-700 transition-colors line-clamp-3">
                    {title}
                </h3>
                {(author || date) && (
                    <div className="mt-2 text-xs text-gray-500 flex items-center gap-2">
                        {author && <span className="font-medium text-black">{author}</span>}
                        {date && <span>{date}</span>}
                    </div>
                )}
            </div>
        </article>
    );
}
