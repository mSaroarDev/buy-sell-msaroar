"use client";
import MarkAsSoldModal from "../MarkAsSoldModal";
import PendingButton from "./PendingButton";
import DeleteAdButton from "./DeleteAdButton";
import formatTimeAgo from "@/utils/convert_date";
import Image from "next/image";

export default function SAAdCard({ data }) {
  return (
    <>
      <div className="rounded-md shadow-md">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between">
          <div className="flex flex-nowrap">
            <div className="flex items-center overflow-hidden gap-2 h-14 w-24 rounded-full relative">
              <Image
                src={data?.product_image}
                fill
                className="absolute inset-0 object-cover"
                alt={data?.product_name}
              />
            </div>
            <div className="p-2">
              <p className="font-semibold">{data?.product_name.slice(0, 40)}</p>
              <p className="text-sm text-gray-500 -mt-1">
                {formatTimeAgo(data?.created_at)}
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-nowrap gap-2 items-center justify-end text-sm p-3">
              <PendingButton data={data} />
              <DeleteAdButton data={data} />
            </div>
          </div>
        </div>
      </div>

      {/* edit modal */}
      <dialog id={`my_modal_ad_sold${data?.id}`} className="modal">
        <MarkAsSoldModal data={data} />
      </dialog>
    </>
  );
}
