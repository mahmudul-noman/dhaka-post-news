import Image from "next/image";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default function FeaturedArticle() {
    return (
        <section className="flex flex-col bg-white border border-gray-100 shadow-sm">
            <div className="relative w-full aspect-[16/9] overflow-hidden group">
                <Image
                    src="/fn1.jpg"
                    alt="Protest"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                />
            </div>

            <div className="relative bg-white -mt-16 mx-4 p-6">
                <div className="mb-3">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Politics</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-black mb-3 hover:text-red-700 cursor-pointer transition-colors">
                    ‘Election was rigged’ says opposition, police confirm three dead
                </h1>

                <div className="flex items-center text-xs text-gray-400 gap-3 mb-5">
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-black uppercase">by John Doe</span>
                        <span className="italic">and 1 others</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-gray-300">•</span>
                        <span>February 17, 2026</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-gray-300">•</span>
                        <MessageSquare className="w-3 h-3" />
                        <span>0</span>
                    </div>
                </div>

                <p className="text-base text-gray-600 font-serif leading-relaxed mb-6">
                    When we get out of the glass bottle of our ego and when we escape like the squirrels in the cage of our personality and get into the forest again, we shall shiver with cold and fright. But things will happen to us so that we don't know ourselves. Cool, unlying life will rush in.
                </p>

                <div>
                    <button className="px-5 py-3 text-[10px] font-bold tracking-[0.2em] uppercase border border-gray-300 text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                        Read More
                    </button>
                </div>
            </div>
        </section>
    );
}
