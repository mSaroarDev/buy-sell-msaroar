"use client"
import Link from "next/link";
import MarkAsSoldModal from "../MarkAsSoldModal";
import PendingButton from "./PendingButton";

export default function SAAdCard({data}){
    return (
      <>
       <div className="rounded-md shadow-md">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between">
          <div className="flex flex-nowrap">
            <div className="flex items-center gap-2 h-14 w-24">
              <img
                src={data?.product_image}
                className="w-24 h-14 rounded-l-md image-full object-cover"
              />
            </div>
            <div className="p-2">
              <p className="font-semibold truncate">{data?.product_name}</p>
              <p className="text-sm text-gray-500 -mt-1">{"1 day ago"}</p>
            </div>
          </div>
          <div>
            <div className="flex flex-nowrap gap-2 items-center justify-end text-sm p-3">
              
              <PendingButton data={data} />

              <div
                onClick={() =>
                  document
                    .getElementById(`my_modal_ad_delete${data?.id}`)
                    .showModal()
                }
                className="h-fit w-fit px-2 py-1 cursor-pointer rounded-full bg-red-500 text-white"
              >
                Delete
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* edit modal */}
      <dialog id={`my_modal_ad_sold${data?.id}`} className="modal">
        <MarkAsSoldModal data={data} />
      </dialog>

      </>
    )
}