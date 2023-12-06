"use client";

import NewCategoryForm from "./NewCategoryForm";

export default function AddNewCategoryButton() {
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold">Categories</h3>
        <button
          onClick={() =>
            document.getElementById("new_category_modal").showModal()
          }
          className="px-5 py-1 rounded-full text-white bg-[#E9327C]"
        >
          + Add New Category
        </button>
      </div>

      {/* modal */}
      <dialog id="new_category_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="form_elements">
            <NewCategoryForm />
          </div>
        </div>
      </dialog>
    </>
  );
}
