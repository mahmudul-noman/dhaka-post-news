import { ChevronRight } from "lucide-react";

const OPINION_ARTICLES = [
    {
        id: 1,
        title: "Tour showcases shared art history of Indonesia and Singapore",
        author: "John Doe",
    },
    {
        id: 2,
        title: "Finland Has An Education System The Other Country Should Learn From",
        author: "Jane Smith",
    },
    {
        id: 3,
        title: "Women in Politics: Urgency of Quota System For Women In Regional Elections",
        author: "Alice Johnson",
    },
    {
        id: 4,
        title: "China's Peng banned and fined for Wimbledon corruption attempt",
        author: "Robert Brown",
    },
    {
        id: 5,
        title: "Democratic Party politician calls Prabowo ‘cardboard general’",
        author: "John Doe",
    }
];

export default function OpinionList() {
    return (
        <div className="mt-8 p-2 shadow-sm border-1 border-gray-100"> {/* Opinion List Container */}
            <div className="mb-4 border-b-2 border-black pb-2">
                <h2 className="text-xl font-bold text-black uppercase tracking-tight">
                    Opinion
                </h2>
            </div>
            <ul className="flex flex-col">
                {OPINION_ARTICLES.map((item, idx) => (
                    <li key={item.id} className="border-b border-gray-100 py-4 first:pt-0 last:border-0">
                        <div className="group cursor-pointer flex gap-3 items-start">
                            <ChevronRight className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-sm font-semibold leading-relaxed group-hover:text-red-700 transition-colors">
                                    {item.title}
                                </h3>
                                {/* <span className="text-xs text-gray-400 mt-1 block">by {item.author}</span> */}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
