import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NewsLayoutProps {
    leftSidebar: ReactNode;
    main: ReactNode;
    rightSidebar: ReactNode;
    className?: string;
}

export default function NewsLayout({
    leftSidebar,
    main,
    rightSidebar,
    className,
}: NewsLayoutProps) {
    return (
        <div className={cn("container mx-auto px-4 md:px-6", className)}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Sidebar: 'The Latest' - Responsive Order: 2nd on Mobile (after Main), 1st on Desktop */}

                {/* Left Sidebar (Latest) */}
                {/* Mobile: Order 2. Tablet: Col Span 4. Desktop: Col Span 3. */}
                <aside className="order-2 md:order-1 col-span-1 md:col-span-4 lg:col-span-3">
                    {leftSidebar}
                </aside>

                {/* Main Content */}
                {/* Mobile: Order 1. Tablet: Col Span 8. Desktop: Col Span 6. */}
                <main className="order-1 md:order-2 col-span-1 md:col-span-8 lg:col-span-6">
                    {main}
                </main>

                {/* Right Sidebar (Opinion) - Responsive Order: 3rd on Mobile, wraps below content on Tablet */}
                <aside className="order-3 md:order-3 col-span-1 md:col-span-12 lg:col-span-3">
                    {rightSidebar}
                </aside>
            </div>
        </div>
    );
}
