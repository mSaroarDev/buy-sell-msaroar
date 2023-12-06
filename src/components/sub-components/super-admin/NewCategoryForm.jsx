"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../spinner/Spinner";
import Working from "../working/Working";

export default function NewCategoryForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const showSuccess = (message) => toast.success(message);
  const showError = (message) => toast.error(message);

  const [imgUrl, setImgUrl] = useState();
  const [selectedImage, setSelectedImage] = useState(null);

  const imageUpload = async () => {
    if (selectedImage) {
      const data = new FormData();
      data.append("file", selectedImage);
      data.append("upload_preset", "full_stack_blog");
      data.append("cloud_name", "ahnaf");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/ahnaf/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const res2 = await res.json();
      setImgUrl(res2.url);
      return res2.url;
    } else {
      return "";
    }
  };

  const formik = useFormik({
    initialValues: {
      category_name: "",
      category_image: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      const data = await imageUpload();
      values.category_image = data;

      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + "/api/categories/new",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        console.log(res);

        if (res.status === 201) {
          setLoading(false);
          showSuccess("New category added.");
          setSelectedImage(null);
          router.refresh();
          document.getElementById("new_category_modal").close();
        } else if (res.status === 406) {
          showError("You cannot add a category.");
        } else if (res.status === 500) {
          showError("Internal server error.");
        }
      } catch (error) {
        showError("Something is wrong!");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <Toaster />
      {loading ? (
        <Working />
      ) : (
        <div>
          <form onSubmit={formik.handleSubmit} className="p-7">
            <h2 className="font-bold text-lg my-1">Add New Category</h2>
            <div className="flex flex-col gap-3">
              <div>
                <label htmlFor="category_name" className="font-bold">
                  Category Name <span className="text-red-600 text-xs">*</span>
                </label>
                <br />
                <input
                  id="category_name"
                  name="category_name"
                  value={formik.values.category_name}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="eg: Mobile Phones"
                  className="input input-bordered input-success w-full mt-2"
                />
              </div>

              <div>
                <label htmlFor="category_image" className="font-bold">
                  Category Image <span className="text-red-600 text-xs">*</span>
                </label>
                <br />
                <input
                  type="file"
                  id="category_image"
                  name="category_image"
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </div>

              <div className="text-right mt-3">
                <button
                  type="submit"
                  className="bg-[#FFC800] text-[#673500] px-7 py-3 rounded-full text-[14px] uppercase font-bold"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
          {selectedImage && (
            <div className="h-24 w-24 p-1">
              <img
                src={URL.createObjectURL(selectedImage)}
                className="w-full h-full"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
