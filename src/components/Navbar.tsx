"use client";

import Link from "next/link";
import { Menu, Search, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="flex flex-col bg-white mb-8 relative">
            {/* Top Black Bar */}
            <div className="w-full h-3 bg-gray-800"></div>

            {/* Logo Section */}
            <div className="py-6 text-center">
                <Link href="/" className="text-2xl md:text-3xl font-black tracking-tight uppercase text-black font-sans">
                    The Downtown
                </Link>
            </div>

            {/* Navigation Bar */}
            <div className="border-t-2 border-b-2 border-black py-3 sticky top-0 bg-white z-50">
                <div className="container mx-auto px-4 flex items-center justify-between">

                    {/* Left: Hamburger Menu */}
                    <button
                        className="p-1 hover:text-gray-600 transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>

                    {/* Center: Navigation Links (Desktop) */}
                    <nav className="hidden xl:flex items-center gap-8 text-[11px] font-extrabold uppercase tracking-wider text-black">
                        <Link href="/" className="flex items-center gap-1 border-b-2 border-black pb-0.5">
                            Home <ChevronDown className="w-3 h-3" />
                        </Link>
                        <Link href="#" className="hover:text-red-600 transition-colors">News</Link>
                        <Link href="#" className="hover:text-red-600 transition-colors">Politics</Link>
                        <Link href="#" className="hover:text-red-600 transition-colors">Business</Link>
                        <Link href="#" className="hover:text-red-600 transition-colors">National</Link>
                        <Link href="#" className="hover:text-red-600 transition-colors">Culture</Link>
                        <Link href="#" className="hover:text-red-600 transition-colors">Opinion</Link>
                        <Link href="#" className="hover:text-red-600 transition-colors">Lifestyle</Link>
                        <Link href="#" className="hover:text-red-600 transition-colors">Sports</Link>
                    </nav>

                    {/* Mobile/Tablet Placeholder for Center if Hidden */}
                    <div className="xl:hidden flex-1"></div>

                    {/* Right: Search Icon */}
                    <button className="p-1 hover:text-gray-600 transition-colors">
                        <Search className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div className={cn(
                "fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out pt-40 px-6",
                isMenuOpen ? "translate-x-0" : "-translate-x-full",
                "xl:hidden"
            )}>
                <nav className="flex flex-col gap-6 text-lg font-bold uppercase tracking-wider text-black">
                    <Link href="/" onClick={() => setIsMenuOpen(false)} className="border-b border-gray-100 pb-2">Home</Link>
                    <Link href="#" onClick={() => setIsMenuOpen(false)} className="border-b border-gray-100 pb-2 hover:text-red-600">News</Link>
                    <Link href="#" onClick={() => setIsMenuOpen(false)} className="border-b border-gray-100 pb-2 hover:text-red-600">Politics</Link>
                    <Link href="#" onClick={() => setIsMenuOpen(false)} className="border-b border-gray-100 pb-2 hover:text-red-600">Business</Link>
                    <Link href="#" onClick={() => setIsMenuOpen(false)} className="border-b border-gray-100 pb-2 hover:text-red-600">National</Link>
                    <Link href="#" onClick={() => setIsMenuOpen(false)} className="border-b border-gray-100 pb-2 hover:text-red-600">Culture</Link>
                    <Link href="#" onClick={() => setIsMenuOpen(false)} className="border-b border-gray-100 pb-2 hover:text-red-600">Opinion</Link>
                    <Link href="#" onClick={() => setIsMenuOpen(false)} className="border-b border-gray-100 pb-2 hover:text-red-600">Lifestyle</Link>
                    <Link href="#" onClick={() => setIsMenuOpen(false)} className="border-b border-gray-100 pb-2 hover:text-red-600">Sports</Link>
                </nav>
            </div>
        </header>
    );
}
