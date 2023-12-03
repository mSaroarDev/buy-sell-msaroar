"use client";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../sub-components/spinner/Spinner";

export default function EditProfileForm({ data, name }) {
  const [imgUrl, setImgUrl] = useState();
  const [selectedImage, setSelectedImage] = useState(null);

  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();
  const showSuccess = (msg) => toast.success(msg);
  const showError = (msg) => toast.error(msg);

  const {
    email,
    gender,
    dob,
    mobile_no,
    division,
    district,
    sub_district,
    address,
    profile_image,
    user_id,
  } = data;

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
      return profile_image;
    }
  };

  const formik = useFormik({
    initialValues: {
      name: name,
      email: email,
      gender: gender,
      dob: dob,
      mobile_no: mobile_no,
      division: division,
      district: district,
      sub_district: sub_district,
      address: address,
      profile_image: profile_image,
      user_id: user_id,
    },

    onSubmit: async (values) => {
      setSubmitting(true);
      const data = await imageUpload();
      values.profile_image = data;
      await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/user/edit-name", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/user/edit-profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (res.status === 200) {
        router.refresh();
        showSuccess("Updated");
        setSubmitting(false);
      } else {
        showError("Something is wrong!");
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Toaster />
      {submitting ? <Spinner /> : ""}
      <div className="edit-form">
        <div className="py-3">
          <h3 className="font-bold text-xl">Edit Profile</h3>
        </div>
        <hr />
        {/* form */}
        <form onSubmit={formik.handleSubmit} className="mt-5">
          <div className="form grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6">
              <label htmlFor="name" className="font-bold">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                type="text"
                placeholder="John Doe"
                className="input input-bordered input-success w-full"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="John Doe"
                className="input input-bordered input-success w-full"
                disabled
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label htmlFor="dob" className="font-bold">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formik.values.dob}
                onChange={formik.handleChange}
                placeholder="15-11-1999"
                className="input input-bordered input-success w-full"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label htmlFor="name" className="font-bold">
                Mobile No
              </label>
              <input
                type="text"
                id="mobile_no"
                name="mobile_no"
                value={formik.values.mobile_no}
                onChange={formik.handleChange}
                placeholder="+8801798456380"
                className="input input-bordered input-success w-full"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label htmlFor="Gender" className="font-bold">
                Gender
              </label>{" "}
              <br />
              {/* <input
                type="text"
                id="gender"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                placeholder="Male"
                className="input input-bordered input-success w-full"
              /> */}
              <select
                type="text"
                id="gender"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                className="select select-success w-full max-w-xs"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label htmlFor="division" className="font-bold">
                Division
              </label>
              <input
                type="text"
                id="division"
                name="division"
                value={formik.values.division}
                onChange={formik.handleChange}
                placeholder="Rajshahi"
                className="input input-bordered input-success w-full"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label htmlFor="district" className="font-bold">
                District
              </label>
              <input
                type="text"
                id="district"
                name="district"
                value={formik.values.district}
                onChange={formik.handleChange}
                placeholder="Rajshahi"
                className="input input-bordered input-success w-full"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <label htmlFor="district" className="font-bold">
                Sub District
              </label>
              <input
                type="text"
                id="sub_district"
                name="sub_district"
                value={formik.values.sub_district}
                onChange={formik.handleChange}
                placeholder="Rajshahi"
                className="input input-bordered input-success w-full"
              />
            </div>
            <div className="col-span-12">
              <label htmlFor="address" className="font-bold">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                placeholder="Rajshahi, Rajshahi"
                className="input input-bordered input-success w-full"
              />
            </div>
            <div className="col-span-12 flex items-center gap-5">
              <div>
                <label htmlFor="photo" className="font-bold">
                  Profile Image
                </label>
                <div className="w-24 h-24 rounded-md border-[1px] border-gray-200 flex justify-center items-center">
                  {selectedImage ? (
                    <Image
                      src={URL.createObjectURL(selectedImage)}
                      width={80}
                      height={80}
                      alt={"name"}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <Image
                      src={profile_image}
                      width={80}
                      height={80}
                      alt={"name"}
                      className="rounded-full object-cover"
                    />
                  )}
                </div>
              </div>
              <div>
                <input
                  type="file"
                  id="profile_image"
                  name="profile_image"
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                  className="file-input file-input-bordered file-input-warning file-input-sm w-full max-w-xs"
                />
              </div>
            </div>
          </div>
          <div align="right">
            <button
              onClick={formik.handleSubmit}
              type="submit"
              className="btn-1 mt-5"
            >
              Update Profile
            </button>
          </div>
        </form>

        {/* form */}
      </div>
    </>
  );
}
