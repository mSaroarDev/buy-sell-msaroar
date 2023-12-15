"use client";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader";
import Working from "../working/Working";

export default function PendingButton({ data }) {
  const router = useRouter();
  const showSuccess = (m) => toast.success(m);
  const showError = (m) => toast.error(m);

  const [submitting, setSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      id: data?.id,
      status: data?.status,
    },

    onSubmit: async (values) => {
      console.log(values);

      setSubmitting(true);
      const res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/api/ads/mark-active`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (res.status === 406) {
        setSubmitting(false);
        showError("You are not permitted to take this action.");
        document.getElementById(`my_modal_ad_active${data?.id}`).close();
      }

      if (res.status === 200) {
        setSubmitting(false);
        showSuccess("This Ad approved Succesfully");
        router.refresh();
        document.getElementById(`my_modal_ad_active${data?.id}`).close();
      } else {
        setSubmitting(false);
        showError("Update Failed");
      }
    },
  });

  return (
    <>
      <Toaster />
      <div
        onClick={() =>
          document.getElementById(`my_modal_ad_active${data?.id}`).showModal()
        }
        className="h-fit w-fit px-4 py-1 cursor-normal rounded-full bg-green-500 text-white whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer"
      >
        {data?.status}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      {/* modal */}
      <dialog id={`my_modal_ad_active${data?.id}`} className="modal">
        {submitting ? (
          <Working />
        ) : (
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in the form, it will close the modal */}
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() =>
                  document
                    .getElementById(`my_modal_ad_active${data?.id}`)
                    .close()
                }
              >
                ✕
              </button>
            </form>
            <div className="flex flex-col gap-3 items-center py-5">
              <Image
                src="/faq.png"
                height={100}
                width={100}
                alt="Mark as check?"
              />
              <h4 className="text-lg font-bold mt-5 text-center">
                Select the status to change.
              </h4>
              <div className="flex items-center gap-5">
                <form className="flex gap-2" onSubmit={formik.handleSubmit}>
                  <select
                    id="status"
                    name="status"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    type="text"
                    className="select select-success w-full max-w-xs"
                  >
                    <option value={"Pending"}>Pending</option>
                    <option value={"Not Sold"}>Not Sold</option>
                    <option value={"Sold"}>Sold</option>
                    <option value={"Block"}>Block</option>
                    <option value={"Archive"}>Archive</option>
                  </select>
                  <button
                    type="submit" // Use type="button" for cancel
                    className="btn bg-green-500 text-white rounded-[4px] px-6 py-3 hover:bg-green-500/20 hover:text-green-500 border-0"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
