import EditAdPage from "@/components/sections/EditAd";
import prisma from "@/lib/db";

export default async function EditAd({params}) {
  const ad_id = params.id;

  const adDetails = await prisma.ads.findUnique({
    where: {
      id: parseInt(ad_id)
    }
  })


  return (
    <>
      <EditAdPage adDetails={adDetails} />
    </>
  );
}
