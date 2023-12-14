import prisma from "@/lib/db";
import Image from "next/image";

export default async function SideCategoryCard({ data }) {
  const totalAds = await prisma.Ads.count({
    where: {
      category_id: data?.id,
      status: "Not Sold",
    },
  });

  return (
    <>
      <li className="flex items-center gap-2 w-full p-2 hover:bg-brandColor2/10 rounded-md">
        <Image
          src={data?.category_image}
          height={14}
          width={14}
          alt={data?.category_name}
        />
        {data?.category_name} ({totalAds})
      </li>
    </>
  );
}
