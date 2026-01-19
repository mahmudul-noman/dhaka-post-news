import Navbar from "@/components/Navbar";
import NewsLayout from "@/components/NewsLayout";
import LatestNews from "@/components/LatestNews";
import FeaturedArticle from "@/components/FeaturedArticle";
import OpinionList from "@/components/OpinionList";
import SidebarRight from "@/components/SidebarRight";
import NewsSlider from "@/components/NewsSlider";
import SecondaryFeatured from "@/components/SecondaryFeatured";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans pb-20">
      <Navbar />

      <NewsLayout
        leftSidebar={
          <>
            <LatestNews />
            <OpinionList />
          </>
        }
        main={
          <>
            <NewsSlider />
            <FeaturedArticle />
            <SecondaryFeatured />
          </>
        }
        rightSidebar={<SidebarRight />}
      />

      {/* Extra visual separator or footer could go here */}
      <footer className="mt-20 border-t border-black py-8 text-center text-sm font-bold uppercase tracking-widest text-gray-400">
        © 2026 The News. All Rights Reserved.
      </footer>
    </div>
  );
}
