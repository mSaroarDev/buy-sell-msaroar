import Ad from "@/components/sub-components/Ad";
import MyAdsCard from "@/components/sub-components/MyAdsCard";
import SAAdCard from "@/components/sub-components/super-admin/AdCard";
import prisma from "@/lib/db";

export default async function SAAds() {
  const ads = await prisma.Ads.findMany();

  console.log(ads);

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
    </>
  );
}
