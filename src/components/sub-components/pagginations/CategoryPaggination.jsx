"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function AdsPaginationCategory({ totalAds, cat }) {
  //   const totalAds = parseInt(100);
  const params = useSearchParams();
  const page_no = parseInt(params.get("page")) || 1; // Ensure page_no is a number

  const buttons = [];
  const startPage = Math.max(1, page_no - 5);
  const endPage = Math.min(Math.ceil(totalAds / 10), page_no + 5);

  for (let i = startPage; i <= endPage; i++) {
    buttons.push(
      <Link
        href={`/explore-ads/category?cat_id=${cat?.id}&category=${cat?.category_name}?page=${i}`}
        key={i}
        className={`join-item btn ${page_no === i ? "btn-active" : ""}`}
      >
        {i}
      </Link>
    );
  }

  return (
    <>
      <div className="join">
        <Link
          href={`/explore-ads/category?cat_id=${cat?.id}&category=${cat?.category_name}&page=1`}
          className={`join-item btn`}
        >
          «
        </Link>
        {Math.ceil(totalAds / 10) <= 1 ? (
          <Link
            href={`/explore-ads/category?cat_id=${cat?.id}&category=${cat?.category_name}&page=1`}
            className={`join-item btn btn-active`}
          >
            1
          </Link>
        ) : (
          buttons
        )}
        <Link
          href={`/explore-ads/category?cat_id=${cat?.id}&category=${
            cat?.category_name
          }&page=${Math.ceil(totalAds / 10)}`}
          className={`join-item btn`}
        >
          »
        </Link>
      </div>
    </>
  );
}
