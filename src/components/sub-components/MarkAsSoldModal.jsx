"use client";
import { useState } from "react";
import Spinner from "./spinner/Spinner";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

export default function MarkAsSoldModal({ data }) {
  const router = useRouter();
  const showSuccess = (m) => toast.success(m);
  const showError = (m) => toast.error(m);

  const [submitting, setSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      id: data?.id,
      status: "Sold",
    },

    onSubmit: async (values) => {
      setSubmitting(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/ads/mark-sold`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      console.log(res.status);

      if (res.status === 200) {
        setSubmitting(false);
        showSuccess("This product is marked as Sold Succesfully");
        router.refresh();
        document.getElementById(`my_modal_ad_sold${data?.id}`).close();
      } else {
        setSubmitting(false);
        showError("Update Failed");
      }
    },
  });

  return (
    <>
      <div className="modal-box py-10">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col items-center justify-center gap-3">
            <Image src="/doneicon.webp" height={150} width={150} alt="Done?" />
            <h3 className="text-xl font-bold text-center mt-7">
              The product{" "}
              <span className="text-brandColor2">{data?.product_name}</span>{" "}
              will be mark as Sold?
            </h3>
            <div className="flex items-center justify-center gap-3 w-full mt-5">
              <button
                type="submit"
                className="bg-red-600 py-2 px-4 rounded-md text-white hover:bg-red-600/20 hover:text-red-600"
              >
                Yes, Its Sold
              </button>
              <button className="bg-[#292929] py-2 px-4 rounded-md text-white hover:bg-[#292929]/20 hover:text-[#292929]">
                No, Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster />
      {submitting ? <Spinner /> : ""}
    </>
  );
}
