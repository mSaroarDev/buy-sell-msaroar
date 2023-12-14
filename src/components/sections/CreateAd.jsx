"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../sub-components/spinner/Spinner";
import EditProfileButton from "../sub-components/EditProfileButton";

export default function CreateAdPage({ data, categories }) {
  const { division, district, sub_district, address } = data;

  const [imgUrl, setImgUrl] = useState();
  const [selectedImage, setSelectedImage] = useState(null);

  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();
  const showSuccess = (msg) => toast.success(msg);
  const showError = (msg) => toast.error(msg);

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
      product_name: "",
      description: "",
      price: "",
      edition: "",
      condition: "",
      authenticity: "",
      features: "",
      negotible: "",
      brand: "",
      model: "",
      category_id: "",
      product_image: "",
      saler_name: "",
      contact_no: "",
      division: "",
      district: "",
      upazilla: "",
      keywords: "",
      myRole: "User",
    },

    onSubmit: async (values, { resetForm }) => {
      setSubmitting(true);
      const data = await imageUpload();
      values.product_image = data;

      const res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/ads/new",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (res.status === 201) {
        router.refresh();
        showSuccess("Ad Created!");
        setSubmitting(false);
        setSelectedImage("");
        resetForm();
        router.refresh();
        router.push(process.env.NEXT_PUBLIC_BASE_URL + "/user/my-ads");
      } else if (res.status === 406) {
        showError("Input Required Fields");
        setSubmitting(false);
      } else {
        showError("Failed! Something wrong.");
        setSubmitting(false);
      }
      // console.log(values)
      // setSubmitting(false);
    },
  });

  const handleConditionChange = (event) => {
    formik.setFieldValue("condition", event.target.value);
  };

  const handleAuthencityChange = (event) => {
    formik.setFieldValue("authenticity", event.target.value);
  };

  const handleFeaturesChange = (event) => {
    formik.setFieldValue("features", event.target.value);
  };

  const handleNegotibleChange = (event) => {
    formik.setFieldValue("negotible", event.target.value);
  };

  return (
    <>
      <Toaster />
      {submitting ? <Spinner /> : ""}
      <div className="edit-form p-7">
        <div className="py-3">
          <h3 className="font-bold text-xl">Create Ad</h3>
        </div>
        <hr />
        {/* form */}

        {division === null ||
        district === null ||
        sub_district === null ||
        address === null ||
        division === "" ||
        district === "" ||
        sub_district === "" ||
        address === "" ? (
          <EditProfileButton />
        ) : (
          <form onSubmit={formik.handleSubmit} className="mt-5">
            <div className="form grid grid-cols-12 gap-5">
              <div className="col-span-12">
                <label htmlFor="name" className="font-regular text-gray-500">
                  Product Name <span className="text-xs text-red-500">*</span>
                </label>
                <input
                  id="product_name"
                  name="product_name"
                  value={formik.values.product_name}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="eg: Samsung Galaxy A20 3/32"
                  className="input input-bordered input-success w-full"
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <label htmlFor="name" className="font-regular text-gray-500">
                  Price (BDT) <span className="text-xs text-red-500">*</span>
                </label>
                <input
                  id="price"
                  name="price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="eg: 106574"
                  className="input input-bordered input-success w-full"
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <label htmlFor="name" className="font-regular text-gray-500">
                  Edition <span className="text-xs text-red-500">*</span>
                </label>
                <input
                  id="edition"
                  name="edition"
                  value={formik.values.edition}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="eg: 2016"
                  className="input input-bordered input-success w-full"
                />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <label htmlFor="name" className="font-regular text-gray-500">
                  Division <span className="text-xs text-red-500">*</span>
                </label>
                <select
                  id="division"
                  name="division"
                  value={formik.values.division}
                  onChange={formik.handleChange}
                  type="text"
                  className="select select-success w-full max-w-xs"
                >
                  <option value="" disabled>
                    Select Division
                  </option>
                  <option value={"Dhaka"}>Dhaka</option>
                  <option value={"Rajshahi"}>Rajshahi</option>
                  <option value={"Barishal"}>Barishal</option>
                  <option value={"Chittagong"}>Chittagong</option>
                  <option value={"Khulna"}>Khulna</option>
                  <option value={"Mymensign"}>Mymensign</option>
                  <option value={"Rangpur"}>Rangpur</option>
                  <option value={"Sylhet"}>Sylhet</option>
                </select>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <label htmlFor="name" className="font-regular text-gray-500">
                  District <span className="text-xs text-red-500">*</span>
                </label>
                <input
                  id="district"
                  name="district"
                  value={formik.values.district}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="eg: Rajshahi"
                  className="input input-bordered input-success w-full"
                />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <label htmlFor="name" className="font-regular text-gray-500">
                  Sub District <span className="text-xs text-red-500">*</span>
                </label>
                <input
                  id="upazilla"
                  name="upazilla"
                  value={formik.values.upazilla}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="eg: Paba"
                  className="input input-bordered input-success w-full"
                />
              </div>
              {/* conditon ratio start */}
              <div className="col-span-12 lg:col-span-6">
                <label htmlFor="name" className="font-regular text-gray-500">
                  Condition <span className="text-xs text-red-500">*</span>
                </label>{" "}
                <br />
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="condition"
                      value="Used"
                      className="radio radio-success"
                      checked={formik.values.condition === "Used"}
                      onChange={handleConditionChange}
                    />
                    Used{" "}
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="condition"
                      value="New"
                      className="radio radio-success"
                      checked={formik.values.condition === "New"}
                      onChange={handleConditionChange}
                    />
                    New
                  </div>
                </div>
              </div>
              {/* conditon ratio end */}
              {/* authenticity ratio start */}
              <div className="col-span-12 lg:col-span-6">
                <label htmlFor="name" className="font-regular text-gray-500">
                  Authenticity <span className="text-xs text-red-500">*</span>
                </label>{" "}
                <br />
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="authenticity"
                      value="Original"
                      className="radio radio-success"
                      checked={formik.values.authenticity === "Original"}
                      onChange={handleAuthencityChange}
                    />
                    Original{" "}
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="authenticity"
                      value="Copy"
                      className="radio radio-success"
                      checked={formik.values.authenticity === "Copy"}
                      onChange={handleAuthencityChange}
                    />
                    Copy
                  </div>
                </div>
              </div>
              {/* authenticity ratio end */}

              {/* authenticity ratio start */}
              <div className="col-span-12 lg:col-span-6">
                <label htmlFor="name" className="font-regular text-gray-500">
                  Features <span className="text-xs text-red-500">*</span>
                </label>{" "}
                <br />
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="features"
                      value="Physical Product"
                      className="radio radio-success"
                      checked={formik.values.features === "Physical Product"}
                      onChange={handleFeaturesChange}
                    />
                    Physical Product{" "}
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="features"
                      value="Digital Product"
                      className="radio radio-success"
                      checked={formik.values.features === "Digital Product"}
                      onChange={handleFeaturesChange}
                    />
                    Digital Product
                  </div>
                </div>
              </div>
              {/* authenticity ratio end */}
              {/* authenticity ratio start */}
              <div className="col-span-12 lg:col-span-6">
                <label htmlFor="name" className="font-regular text-gray-500">
                  Negotible <span className="text-xs text-red-500">*</span>
                </label>{" "}
                <br />
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="negotible"
                      value="Yes"
                      className="radio radio-success"
                      checked={formik.values.negotible === "Yes"}
                      onChange={handleNegotibleChange}
                    />
                    Yes{" "}
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="negotible"
                      value="No"
                      className="radio radio-success"
                      checked={formik.values.negotible === "No"}
                      onChange={handleNegotibleChange}
                    />
                    No
                  </div>
                </div>
              </div>
              {/* authenticity ratio end */}
              <div className="col-span-12 lg:col-span-4">
                <label htmlFor="name" className="font-regular text-gray-500">
                  Brand <span className="text-xs text-red-500">*</span>
                </label>
                <input
                  id="brand"
                  name="brand"
                  value={formik.values.brand}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="eg: Samsung"
                  className="input input-bordered input-success w-full"
                />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <label htmlFor="name" className="font-regular text-gray-500">
                  Model <span className="text-xs text-red-500">*</span>
                </label>
                <input
                  id="model"
                  name="model"
                  value={formik.values.model}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="eg: Galaxy A20"
                  className="input input-bordered input-success w-full"
                />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <label htmlFor="name" className="font-regular text-gray-500">
                  Category <span className="text-xs text-red-500">*</span>
                </label>
                <select
                  id="category_id"
                  name="category_id"
                  value={formik.values.category_id}
                  onChange={formik.handleChange}
                  type="text"
                  className="input input-bordered input-success w-full"
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  {categories &&
                    categories.map((category) => {
                      return (
                        <option key={category?.id} value={category?.id}>
                          {category?.category_name}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div className="col-span-12">
                <label htmlFor="name" className="font-regular text-gray-500">
                  Description <span className="text-xs text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  className="textarea textarea-success w-full resize-none"
                  placeholder="Bio"
                ></textarea>
              </div>

              <div className="col-span-12 lg:col-span-6">
                <label htmlFor="name" className="font-regular text-gray-500">
                  Featured Image <span className="text-xs text-red-500">*</span>
                </label>{" "}
                <br />
                <input
                  type="file"
                  id="product_image"
                  name="product_image"
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                  className="file-input file-input-bordered file-input-success w-full max-w-xs"
                />
              </div>

              <div className="col-span-12 lg:col-span-6">
                <label htmlFor="name" className="font-regular text-gray-500">
                  All Images <span className="text-xs text-red-500">*</span>
                </label>{" "}
                <br />
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-success w-full max-w-xs"
                />
              </div>

              <div className="col-span-12 rounded-lg overflow-hidden w-[300px]">
                {selectedImage ? (
                  <div>
                    <img src={URL.createObjectURL(selectedImage)} />
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="col-span-12 lg:col-span-6">
                <label htmlFor="name" className="font-regular text-gray-500">
                  Saler Name <span className="text-xs text-red-500">*</span>
                </label>
                <input
                  id="saler_name"
                  name="saler_name"
                  value={formik.values.saler_name}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="eg: Muhammad Saroar"
                  className="input input-bordered input-success w-full"
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <label htmlFor="name" className="font-regular text-gray-500">
                  Saler Contact No{" "}
                  <span className="text-xs text-red-500">*</span>
                </label>
                <input
                  id="contact_no"
                  name="contact_no"
                  value={formik.values.contact_no}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="eg: 017985456380"
                  className="input input-bordered input-success w-full"
                />
              </div>
              <div className="col-span-12">
                <label htmlFor="keywords">
                  Keywords{" "}
                  <span className="text-xs text-green-600">
                    Input search keywords separated with comma.
                  </span>{" "}
                </label>
                <input
                  type="text"
                  id="keywords"
                  name="keywords"
                  value={formik.values.keywords}
                  onChange={formik.handleChange}
                  placeholder="eg: samsung, laptops, hp"
                  className="input input-bordered input-success w-full"
                />
              </div>
            </div>
            <div align="right">
              <button
                onClick={formik.handleSubmit}
                type="submit"
                className="btn-1 mt-5"
              >
                Create Ad
              </button>
            </div>
          </form>
        )}

        {/* form */}
      </div>
    </>
  );
}
