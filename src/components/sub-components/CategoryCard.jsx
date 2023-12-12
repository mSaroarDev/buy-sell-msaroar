import Image from "next/image";
import RightArrow from "../../../public/RightArrow";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function CategoryCard({ data }) {
  const countAds = await prisma.Ads.count({
    where: {
      category_id: data?.id,
    },
  });

  return (
    <>
      <Link
        href={`/explore-ads/category?cat_id=${data.id}&category=${data?.category_name}`}
      >
        <div className="w-full p-5 cursor-pointer category__card duration-300 border-[1px] border-transparent hover:border-[#FFC800]/30 rounded-lg hover:bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-5">
              <div>
                <Image
                  src={data?.category_image}
                  height={40}
                  width={40}
                  alt={data?.category_name}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{data?.category_name}</h3>
                <p className="text-xs">{countAds} ADS</p>
              </div>
            </div>
            <div className="arrow hidden">
              <RightArrow />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
