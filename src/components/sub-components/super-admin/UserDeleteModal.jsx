"use client";
import { useFormik } from "formik";
import TrashIcon from "../../../../public/trash";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../spinner/Spinner";

export default function UserDeleteButton({ data }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const showSuccess = (message) => toast.success(message);
  const showError = (message) => toast.error(message);

  const formik = useFormik({
    initialValues: {
      id: data?.user_id,
      myRole: "SuperAdmin",
    },
    onSubmit: async (values) => {
      try {
        document.getElementById(`delete_user_${data?.id}`).close()
        setLoading(true);
        const res = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + "/api/user/delete",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        if (res.status === 200) {
          setLoading(false);
          showSuccess("Successfully Removed the user!");
          router.refresh();
        } else {
          setLoading(false);
          showError("Error!");
          router.refresh();
        }
      } catch (error) {
        setLoading(false);
        showError("Internal server error");
      }
    },
  });

  return (
    <>
      {loading && <Spinner />}
      <Toaster />
      <button
        onClick={() =>
          document.getElementById(`delete_user_${data?.id}`).showModal()
        }
        href={"/"}
        title="Delete the user"
        className="bg-red-600 text-white p-2 rounded-full"
      >
        <TrashIcon />
      </button>

      {/* delete modal  */}
      <dialog id={`delete_user_${data?.id}`} className="modal">
        <div className="modal-box my-10">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="modal-content">
            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="h-fit w-fit bg-red-600 text-white p-5 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
              <h3 className="text-md font-bold">
                Are you sure you want to delete the user?
              </h3>
              <form
                onSubmit={formik.handleSubmit}
                className="flex items-center justify-center gap-3 mt-5"
              >
                <button className="btn btn-neutral">Yes! Romove</button>
                <button className="btn btn-warning">No! Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
