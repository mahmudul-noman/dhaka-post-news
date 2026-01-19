import Image from "next/image";

const ARTICLES = [
    {
        id: 1,
        title: "Grab tackles Jakarta’s odd-even license plate policy with special algorithm",
        category: "BUSINESS",
        categoryColor: "bg-blue-500",
        date: "February 17, 2020",
        imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80"
    },
    {
        id: 2,
        title: "Jokowi supporters try to prevent anti-Jokowi activist from entering Batam",
        category: "POLITICS",
        categoryColor: "bg-red-600",
        date: "August 10, 2018",
        imageUrl: "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?w=600&q=80"
    }
];

export default function SecondaryFeatured() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {ARTICLES.map((article) => (
                <div key={article.id} className="flex flex-col bg-white border border-gray-100 shadow-sm">
                    <div className="relative aspect-[4/3] w-full overflow-hidden group">
                        <Image
                            src={article.imageUrl}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                            <span className={`${article.categoryColor} text-white text-[12px] font-bold px-3.5 py-2 uppercase`}>
                                {article.category}
                            </span>
                        </div>
                    </div>

                    <div className="p-6 text-center">
                        <h3 className="text-xl font-bold leading-tight mb-3 text-black hover:text-red-700 cursor-pointer transition-colors">
                            {article.title}
                        </h3>

                        <div className="flex items-center justify-center gap-1 text-xs text-gray-400">
                            {/* Date Display with Icon */}
                            <span className="text-gray-400">🕒</span>
                            <span>{article.date}</span>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
