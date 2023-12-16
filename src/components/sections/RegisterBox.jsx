"use client";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import googleLogo from "public/google.svg";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Working from "../sub-components/working/Working";

export default function RegisterBox() {
  const router = useRouter();
  const showSuccess = (m) => toast.success(m);
  const showError = (m) => toast.error(m);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password2: "",
    },

    onSubmit: async (values, { resetForm }) => {
      if (
        !values.name ||
        !values.email ||
        !values.password ||
        !values.password2
      ) {
        showError("Please fill all fields.");
      } else if (values.password !== values.password2) {
        showError("Password & Confirm password doesn't match.");
      } else if (values.password.length < 6) {
        showError("Password length must be upper than 6 character");
      } else {
        try {
          setLoading(true);
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/register`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            }
          );

          if (res.status === 400) {
            setLoading(false);
            showError("All fiels are required.");
          } else if (res.status === 409) {
            setLoading(false);
            showError("Account already registered with this email.");
          } else if (res.status === 201) {
            setLoading(false);
            showSuccess("You are registered now. Please login...");
            router.replace("/login");
          } else {
            setLoading(false);
            showError("Error Happened. Try later.");
          }
        } catch (error) {
          setLoading(false);
          showError("Something wrong");
        } finally {
          setLoading(false);
        }
      }
    },
  });

  return (
    <>
      <Toaster />
      {loading ? (
        <Working />
      ) : (
        <div className="w-full max-w-[800px] h-auto bg-white rounded-xl shadow-md">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6 bg-currentColor w-full h-full rounded-l-xl hidden lg:block relative">
              <Image
                src="/sign-up.jpg"
                fill
                className="absolute inset-0 object-contain"
                alt="Sign Up"
              />
            </div>
            <div className="col-span-12 lg:col-span-6 w-full h-full p-7">
              <h2 className="text-lg font-bold uppercase mb-5">
                Register to Explore
              </h2>
              <div className="credential__login">
                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col gap-2"
                >
                  <div className="my-1">
                    <label
                      className="text-base font-bold mb-1 inline-block"
                      htmlFor="Name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      placeholder="John Doe"
                      className="input input-bordered input-success w-full"
                    />
                  </div>
                  <div className="my-1">
                    <label
                      className="text-base font-bold mb-1 inline-block"
                      htmlFor="Email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      placeholder="example@example.com"
                      className="input input-bordered input-success w-full"
                    />
                  </div>
                  <div className="my-1">
                    <label
                      className="text-base font-bold mb-1 inline-block"
                      htmlFor="Password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      placeholder="******"
                      className="input input-bordered input-success w-full"
                    />
                  </div>
                  <div className="my-1">
                    <label
                      className="text-base font-bold mb-1 inline-block"
                      htmlFor="CPassword"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="password2"
                      name="password2"
                      value={formik.values.password2}
                      onChange={formik.handleChange}
                      placeholder="******"
                      className="input input-bordered input-success w-full"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#FFC800] text-[#673500] p-[14px] text-[14px] uppercase font-bold w-full rounded-lg"
                  >
                    Register
                  </button>
                </form>
              </div>
              <div className="text-right my-3">
                <Link href={"/login"}>
                  Already Have an Account?{" "}
                  <span className="text-brandColor2 underline">Login Now</span>
                </Link>
              </div>
              <div className="divider my-5">OR</div>
              <div className="social__login flex flex-col gap-y-3">
                <button className="btn flex items-center justify-center gap-y-2">
                  <Image
                    src={googleLogo}
                    width={20}
                    height={20}
                    alt="Google Login"
                  />{" "}
                  Sign Up with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
