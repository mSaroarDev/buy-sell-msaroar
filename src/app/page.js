import BuyandSell from "@/components/sections/BuyandSell";
import CategorySection from "@/components/sections/CategorySection";
import HomeSearch from "@/components/sections/HomeSearch";
import Footer from "@/components/sub-components/Footer";
import Navbar from "@/components/sub-components/Navbar";

export default function Home() {
  return (
    <div className="h-full w-full bg-[#f7f7f7]">
      <Navbar />
      <HomeSearch />
      <CategorySection />
      <BuyandSell />
      <Footer />
    </div>
  );
}
