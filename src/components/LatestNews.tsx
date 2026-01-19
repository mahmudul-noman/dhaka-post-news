import Link from "next/link";
import ArticleCard from "./ArticleCard";

const LATEST_ARTICLES = [
    {
        id: 1,
        title: "Unconventional Workouts That Torch Fat And Sculpt Muscle",
        category: "LIFESTYLE",
        imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    },
    {
        id: 2,
        title: "Millions of Indigenous People May Lose Voting Rights: Alliance",
        category: "POLITICS",
        imageUrl: "https://images.unsplash.com/photo-1575320181282-9afab399332c?w=800&q=80",
    },
    {
        id: 3,
        title: "Crismonita Dwi Putri, RI's Track Cycling Athlete for Asian Games",
        category: "SPORTS",
        imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
    },
    {
        id: 4,
        title: "President Joko \"Jokowi\" Widodo Refuses to Sign MD3 Law",
        category: "POLITICS",
        imageUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
    },
    {
        id: 5,
        title: "Garuda operates larger planes for Jakarta-Palembang route",
        category: "BUSINESS",
        imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    },
];

export default function LatestNews() {
    return (
        <section className="flex flex-col p-2 shadow-sm border-1 border-gray-100">
            <div className="mb-6 border-b-2 border-black pb-2">
                <h2 className="text-xl font-bold text-black uppercase tracking-tight">
                    The Latest
                </h2>
            </div>
            <div className="flex flex-col gap-6">
                {LATEST_ARTICLES.map((article) => (
                    <ArticleCard
                        key={article.id}
                        title={article.title}
                        imageUrl={article.imageUrl}
                    />
                ))}
            </div>
        </section>
    );
}
