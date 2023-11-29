"use client";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import googleLogo from "public/google.svg";
import { useRouter } from "next/navigation";

export default function LoginBox() {

  return (
    <>
      <div className="w-full max-w-[800px] h-auto bg-white rounded-xl shadow-md">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6 bg-brandColor2 w-full h-full rounded-l-xl hidden lg:block"></div>
          <div className="col-span-12 lg:col-span-6 w-full h-full p-7">
            <h2 className="text-lg font-bold uppercase mb-5">
              Login to Dashboard
            </h2>
            <div className="credential__login">
              <form className="flex flex-col gap-2">
                <div className="my-1">
                  <label
                    className="text-base font-bold mb-1 inline-block"
                    htmlFor="Email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
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
                    placeholder="******"
                    className="input input-bordered input-success w-full"
                  />
                </div>
                <button className="bg-[#FFC800] text-[#673500] p-[14px] text-[14px] uppercase font-bold w-full rounded-lg">
                  Login
                </button>
              </form>
            </div>
            <div className="text-right my-3">
              <Link href={"/register"}>
                Dont Have an Account?{" "}
                <span className="text-brandColor2 underline">
                  Create Account
                </span>
              </Link>
            </div>
            <div className="divider my-5">OR</div>
            <div className="social__login flex flex-col gap-y-3">
              <button
                onClick={() => signIn("google", { callbackUrl: '/user/my-profile' })}
                className="btn flex items-center justify-center gap-y-2"
              >
                <Image
                  src={googleLogo}
                  width={20}
                  height={20}
                  alt="Google Login"
                />{" "}
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
