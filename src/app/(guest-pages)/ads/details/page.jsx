import SingleAdDetails from "@/components/sections/SingleAd";
import prisma from "@/lib/db";

export default async function SingleAd({searchParams}) {

  const ad_id = searchParams.ad_id;
  const ad_details = await prisma.Ads.findUnique({
    where: {
      id: parseInt(ad_id)
    }
  })

  return (
    <div className="min-h-screen w-full bg-bgGray">
      <SingleAdDetails data={ad_details} />
    </div>
  );
}
