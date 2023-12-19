// Import the formatTimeAgo function
import prisma from "@/lib/db";
import formatTimeAgo from "@/utils/convert_date";
import Image from "next/image";
import Link from "next/link";

export default async function Ad({ data }) {
  const categoryNameInfo = await prisma.categories.findUnique({
    where: {
      id: data?.category_id,
    },
  });

  // Use formatTimeAgo to get the formatted time difference
  const formattedTimeAgo = formatTimeAgo(data?.created_at);
  const numberPrice = parseInt(data?.price);

  return (
    <>
      <Link
        href={`/ads/details?category=${categoryNameInfo?.category_name}&ad_id=${data?.id}&ad=${data?.product_name}`}
      >
        <div className="h-[120px] flex items-start justify-start gap-2 rounded-md hover:shadow-md border-[1px] border-brandColor/40 duration-300 overflow-hidden">
          <div className="w-[220px] h-[120px] relative">
            <Image
              src={data?.product_image}
              fill
              alt={data?.product_name}
              className="absolute object-cover rounded-l-lg inset-0"
            />
          </div>
          <div className="p-3 w-full">
            <h1 className="text-lg font-bold">{data?.product_name}</h1>
            <p>
              {data?.district}, {categoryNameInfo?.category_name}
            </p>
            <p className="text-brandColor2 font-bold">
              ৳ {numberPrice.toLocaleString()}
            </p>
            {/* Display the formatted time difference */}
            <div className="text-right">{formattedTimeAgo}</div>
          </div>
        </div>
      </Link>
    </>
  );
}
