import Ad from "@/components/sub-components/Ad";
import AdspageSidebar from "@/components/sub-components/Adspage-Sidebar";
import Navbar from "@/components/sub-components/Navbar";
import SearchComponent from "@/components/sub-components/SearchComponent";
import AdsPaginationSearchResults from "@/components/sub-components/pagginations/SearchPaggination";
import prisma from "@/lib/db";
import Image from "next/image";

export default async function SearchPage({ searchParams }) {
  // const cat_name = await prisma.Categories.findUnique({
  //     where: {
  //         id: parseInt(category)
  //     }
  // })

  const totalAds = await prisma.Ads.count({})

  const queryParam = searchParams.q;
  const page_no = searchParams.page;

  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL +
      `/api/ads/search?q=${queryParam}&page=${page_no}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    console.error(
      `Error: ${searchResults.status} - ${searchResults.statusText}`
    );
  }

  const results = await res.json();
  const ads = results.data;

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
                    <h3 className="text-base font-bold">{`${ads.length} results with '${searchParams.q}'`}</h3>
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

                <div className="my-5 text-right">
                  <AdsPaginationSearchResults
                    totalAds={totalAds}
                    query={queryParam}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
