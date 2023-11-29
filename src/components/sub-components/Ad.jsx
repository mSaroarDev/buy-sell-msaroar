import Image from "next/image";
import Link from "next/link";

export default function Ad({ data }) {
  return (
    <>
      <Link href={`/ads?category=${data?.category}&ad-id=${data?.id}`}>
        <div className="flex items-start justify-start gap-2 rounded-md hover:shadow-md border-[1px] border-brandColor/40 duration-300">
          <div className="max-w-[180px] h-auto">
            <Image
              src={data?.image}
              height={140}
              width={180}
              alt={data?.name}
              className="object-cover rounded-l-lg"
            />
          </div>
          <div className="p-3 w-full">
            <h1 className="text-lg font-bold">{data?.name}</h1>
            <p>
              {data?.district}, {data?.category}
            </p>
            <p className="text-brandColor2 font-bold">
              ৳ {data?.price.toLocaleString()}
            </p>
            <div className="text-right">{data?.posted_on}</div>
          </div>
        </div>
      </Link>
    </>
  );
}
