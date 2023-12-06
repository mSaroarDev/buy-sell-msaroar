import prisma from "@/lib/db";
import Image from "next/image";
import CategoryDeleteButton from "./CategoryDeleteButton";
import EditIcon from "../../../../public/edit";
import GoIcon from "../../../../public/gobutton";
import Link from "next/link";

export default async function CategoryCard({ data }) {
  const totalAds = await prisma.Ads.count({
    where: {
      category_id: parseInt(data?.id),
    },
  });

  return (
    <>
      <div className="bg-white rounded-md shadow-md w-full lg:w-[43%]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 h-14 w-auto">
            <div className="h-14 w-20 bg-brandColor2/10 rounded-l-md flex items-center justify-center">
              <Image
                src={data?.category_image}
                height={40}
                width={40}
                alt={data?.category_name}
              />
            </div>
            <div>
              <h2 className="text-base font-bold hover:underline">
                <Link
                  href={`/ads/categoris&${data?.category_name}?category_id=${data?.id}`}
                >
                  {data?.category_name}
                </Link>
              </h2>
              <p className="text-sm">{totalAds} Ads</p>
            </div>
          </div>
          <div className="px-3 flex items-center justify-center gap-3">
            <CategoryDeleteButton cat_id={data?.id}/>
            <EditIcon />
            <Link
              href={`/ads/categoris&${data?.category_name}?category_id=${data?.id}`}
            >
              <GoIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
