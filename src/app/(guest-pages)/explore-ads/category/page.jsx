import Ad from "@/components/sub-components/Ad";
import AdspageSidebar from "@/components/sub-components/Adspage-Sidebar";
import Navbar from "@/components/sub-components/Navbar";
import SearchComponent from "@/components/sub-components/SearchComponent";
import prisma from "@/lib/db";
import Image from "next/image";

export default async function FilterByCategory({searchParams}){

    const category = searchParams.cat_id;

    const ads = await prisma.ads.findMany({
        where: {
            category_id: parseInt(category),
            status: "Not Sold",
        }
    })

    const cat_name = await prisma.Categories.findUnique({
        where: {
            id: parseInt(category)
        }
    })

    return (
      <>
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
                  <h3 className="text-base font-bold">Ads in ({cat_name?.category_name})</h3>
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
                  }) }
              </div>
              {/* ads area end */}
            </div>
          </div>
        </div>
      </div>
    </div>
      </>
    )
}