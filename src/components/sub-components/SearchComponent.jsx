"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchComponent() {
  const router = useRouter();

  const [q_param, setQ_param] = useState("");
  const search_query = encodeURI(q_param);

  const onSearch = (e) => {
    e.preventDefault();
    if (search_query === "") {
      router.push(`/explore-ads`);
    } else {
      router.push(`/explore-ads/search?q=${search_query}`);
    }
  };

  return (
    <>
      <div className="search">
        <form onSubmit={onSearch}>
          <div className="relative text-gray-600">
            <input
              type="text"
              name="search"
              onChange={(e) => setQ_param(e.target.value)}
              value={q_param}
              placeholder="Search Here..."
              className="bg-white h-10 px-7 pr-10 rounded-full text-sm w-full border-[1px] border-brandColor/50 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 m-1 bottom-0 bg-[#FFC800] text-[#673500] p-4 rounded-full text-[14px] uppercase font-bold flex items-center gap-x-2"
            >
              <Image src="/search.svg" height={20} width={20} alt="Search" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
