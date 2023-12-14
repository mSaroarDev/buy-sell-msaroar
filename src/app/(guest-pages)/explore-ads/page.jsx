import Ad from "@/components/sub-components/Ad";
import AdspageSidebar from "@/components/sub-components/Adspage-Sidebar";
import Navbar from "@/components/sub-components/Navbar";
import Image from "next/image";
import searchIcon from "public/search.svg";
import prisma from "@/lib/db";
import SearchComponent from "@/components/sub-components/SearchComponent";

export default async function ExploreAds() {
  const ads = await prisma.Ads.findMany({
    where: {
      status: "Not Sold",
    },
  });

  return (
    <div className="bg-[#f7f7f7] min-h-screen w-full">
      <Navbar />
      <div className="my-5 px-5">
        <div className="w-full max-w-4xl mx-auto bg-white rounded-lg">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-3">
              <AdspageSidebar />
            </div>
            <div className="col-span-12 lg:col-span-9">
              <div className="w-full p-4 border-b-[1px] border-slate-20">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold">All Ads</h3>
                  <SearchComponent />
                </div>
              </div>

              {/* ads area starts */}
              <div className="ads p-5 flex flex-col gap-4 border-l-[1px] border-slate-200">
                {ads &&
                  ads.map((ad) => {
                    return (
                      <div key={ad.id}>
                        <Ad data={ad} />
                      </div>
                    );
                  })}
              </div>
              {/* ads area end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
