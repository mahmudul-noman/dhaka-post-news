"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDER_NEWS = [
    {
        id: 1,
        title: "A Digital Media Startup Growing Up With Millennial Women",
        imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&q=80",
    },
    {
        id: 2,
        title: "Indonesia To Offer Infrastructure Projects At IMF-World Bank Meeting",
        imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=200&q=80",
    },
    {
        id: 3,
        title: "Ngurah Rai International Airport To Close For 24 Hours For Nyepi",
        imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=200&q=80",
    },
    {
        id: 4,
        title: "The Chinese smartphone upstarts taking on Apple and Samsung",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&q=80",
    },
    {
        id: 5,
        title: "Presidential Train Now Available For Jakartans Traveling To Bandung",
        imageUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=200&q=80",
    }
];

export default function NewsSlider() {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 3;

    const nextSlide = () => {
        setStartIndex((prev) =>
            prev + 1 > SLIDER_NEWS.length - visibleCount ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setStartIndex((prev) =>
            prev - 1 < 0 ? SLIDER_NEWS.length - visibleCount : prev - 1
        );
    };

    const visibleNews = [
        SLIDER_NEWS[(startIndex) % SLIDER_NEWS.length],
        SLIDER_NEWS[(startIndex + 1) % SLIDER_NEWS.length],
        SLIDER_NEWS[(startIndex + 2) % SLIDER_NEWS.length],
    ];

    return (
        <div className="bg-white mb-8 p-2 shadow-sm border-1 border-gray-100">
            <div className="flex items-center gap-4">
                <button
                    onClick={prevSlide}
                    className="p-2 border border-gray-200 hover:bg-gray-100 transition-colors hidden md:block"
                >
                    <ChevronLeft className="w-4 h-4 text-gray-500" />
                </button>

                <div className="flex-1 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {visibleNews.map((news, idx) => (
                            <div key={`${news.id}-${idx}`} className="flex gap-3 items-center">
                                <div className="relative w-16 h-16 flex-shrink-0 bg-gray-100">
                                    <Image
                                        src={news.imageUrl}
                                        alt={news.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h4 className="text-xs font-bold leading-snug line-clamp-3 hover:text-red-700 cursor-pointer">
                                    {news.title}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    className="p-2 border border-gray-200 hover:bg-gray-100 transition-colors hidden md:block"
                >
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                </button>
            </div>
        </div>
    );
}
