import prisma from "@/lib/db";
import Link from "next/link";
import SideCategoryCard from "./SideCategoryCard";

export default async function AdspageSidebar() {

  const categories = await prisma.categories.findMany()
  // console.log(categories);

  return (
    <>
      <div>
        <div className="head">
          <h3 className="text-base font-bold px-5 py-6 border-b-[1px] border-slate-20">
            Select Categories
          </h3>
          <div className="categories flex flex-col gap-y-2 p-4">
            <ul>
              {categories &&
                categories?.map((item) => {
                  return (
                    <Link key={item?.id} href={`/explore-ads/category?cat_id=${item.id}&category=${item?.category_name}`}>
                      <SideCategoryCard data={item} />
                    </Link>
                  );
                })}
            </ul>
          </div>

          
        </div>
      </div>
    </>
  );
}
