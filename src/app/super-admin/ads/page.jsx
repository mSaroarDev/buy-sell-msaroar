
import SAAdCard from "@/components/sub-components/super-admin/AdCard";
import AdsPagination from "@/components/sub-components/super-admin/AdPagination";
import prisma from "@/lib/db";

export default async function SAAds({searchParams}) {

  const page_no = searchParams.page;

  const ads = await prisma.Ads.findMany({
    skip: (page_no - 1) * 10,
    take: 10,
    where: {
      status: {
        not: "Deleted"
      },
    },
    orderBy: {
      id: "desc"
    }
  });

  const totalAds = ads?.length;


  return (
    <>
      <h4 className="font-bold text-xl">Running Ads</h4>
      <div className="p-5 flex flex-col gap-1">
        {ads &&
          ads.map((ad) => {
            return (
              <div key={ad?.id}>
                <SAAdCard data={ad} />
              </div>
            );
          })}
      </div>

      <div className="ad__pagination text-right mt-5">
        <AdsPagination totalAds={totalAds} />
      </div>
    </>
  );
}
