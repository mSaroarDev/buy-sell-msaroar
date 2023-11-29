import data from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

export default function AdspageSidebar() {
  return (
    <>
      <div>
        <div className="head">
          <h3 className="text-base font-bold px-5 py-6 border-b-[1px] border-slate-20">
            Select Categories
          </h3>
          <div className="categories flex flex-col gap-y-2 p-4">
            <ul>
              {data &&
                data?.map((item) => {
                  return (
                    <Link key={item.id} href={item.link}>
                      <li className="flex items-center gap-2 w-full p-2 hover:bg-brandColor2/10 rounded-md">
                        <Image
                          src={item.image}
                          height={14}
                          width={14}
                          alt="item.name"
                        />
                        {item.name} (100)
                      </li>
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
