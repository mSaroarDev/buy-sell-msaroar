"use client";
import { useFormik } from "formik";
import TrashIcon from "../../../../public/trash";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import Working from "../working/Working";

export default function CategoryDeleteButton({ cat_id }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const showSuccess = (message) => toast.success(message);
  const showError = (message) => toast.error(message);

  const formik = useFormik({
    initialValues: {
      id: cat_id,
    },
    onSubmit: async (values) => {
      setLoading(true);

      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + "/api/categories/delete",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        if (res.status === 406) {
          showError("Delete Failed. Not permittable.");
        } else if (res.status === 500) {
          showError("Failed..!");
        } else if (res.status === 200) {
          showSuccess("Succesfully Deleted");
        }
      } catch (error) {
        showError("Uncaught Error");
      } finally {
        setLoading(false);
        router.refresh();
        document.getElementById(`delete_cat_id_${cat_id}`).close();
      }
    },
  });

  return (
    <>
      <Toaster />

      <button
        onClick={() =>
          document.getElementById(`delete_cat_id_${cat_id}`).showModal()
        }
        className="text-red-600"
      >
        <TrashIcon />
      </button>

      {/* modal */}
      <dialog id={`delete_cat_id_${cat_id}`} className="modal">
        {loading ? (
          <Working />
        ) : (
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="modal__contents p-5">
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col items-center justify-center gap-y-5">
                  <Image
                    src="/delete-icon.png"
                    height={100}
                    width={100}
                    alt="Delete it?"
                  />
                  <h1 className="text-lg font-bold">
                    Are you sure you want to Delete?
                  </h1>
                  <div className="flex items-center gap-4">
                    <button
                      type="submit"
                      className="bg-red-600 text-white py-2 px-3 rounded-md hover:text-red-600 hover:bg-red-600/20"
                    >
                      Yes! Delete
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
