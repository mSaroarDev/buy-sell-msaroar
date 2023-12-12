import Ad from "@/components/sub-components/Ad";
import AdspageSidebar from "@/components/sub-components/Adspage-Sidebar";
import Navbar from "@/components/sub-components/Navbar";
import Image from "next/image";
import searchIcon from "public/search.svg";
import prisma from "@/lib/db";

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
                  <div className="search">
                    <div className="relative text-gray-600">
                      <input
                        type="search"
                        name="serch"
                        placeholder="Anything you need..."
                        className="bg-white h-10 px-7 pr-10 rounded-full text-sm w-full border-[1px] border-brandColor/50 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="absolute right-0 top-0 m-1 bottom-0 bg-[#FFC800] text-[#673500] p-4 rounded-full text-[14px] uppercase font-bold flex items-center gap-x-2"
                      >
                        <Image
                          src={searchIcon}
                          height={20}
                          width={20}
                          alt="Search"
                        />
                      </button>
                    </div>
                  </div>
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
