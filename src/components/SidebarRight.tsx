import Image from "next/image";

export default function SidebarRight() {
    return (
        <section className="flex flex-col gap-8 p-2">
            {/* Ad Space */}
            <div className="w-full aspect-square relative bg-gray-100 mb-4 overflow-hidden group cursor-pointer">
                <Image
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80"
                    alt="Ad"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white p-6 text-center">
                    <h3 className="text-3xl font-black uppercase leading-none mb-2">New Scientist</h3>
                    <p className="font-bold text-sm mb-4">33 Reasons We Can't Think Clearly</p>
                    <span className="bg-black text-white px-4 py-1 text-xs font-bold uppercase">Learn More</span>
                </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden group">
                    <Image
                        src="/sn2.jpg"
                        alt="Featured Opinion"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider">Opinion</span>
                    </div>
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-bold leading-tight mb-3 text-black hover:text-red-700 cursor-pointer transition-colors">
                        Democratic Party politician calls Prabowo ‘cardboard general’
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                        <span className="italic">by</span>
                        <span className="text-black font-bold uppercase">John Doe</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span className="text-gray-400">August 10, 2018</span>
                    </div>

                    <p className="text-sm text-gray-500 font-serif leading-relaxed line-clamp-3">
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...
                    </p>
                </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden group">
                    <Image
                        src="/sn1.jpg"
                        alt="Lifestyle"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-pink-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">Lifestyle</span>
                    </div>
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-bold leading-tight mb-3 text-black hover:text-red-700 cursor-pointer transition-colors">
                        Google tracks location data even when users turn service off
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                        <span className="italic">by</span>
                        <span className="text-black font-bold uppercase">John Doe</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span className="text-gray-400">August 14, 2018</span>
                    </div>

                    <p className="text-sm text-gray-500 font-serif leading-relaxed line-clamp-3">
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...
                    </p>
                </div>
            </div>
        </section>
    );
}
