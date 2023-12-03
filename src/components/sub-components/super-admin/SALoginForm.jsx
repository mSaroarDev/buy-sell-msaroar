"use client";
import Image from "next/image";

export default function SaLoginForm() {
  return (
    <>
      <form>
        <div className="flex flex-col items-center justify-center gap-3 w-full">
          <div className="image rounded-full overflow-hidden">
            <Image src="/avatar.png" width={100} height={100} alt="Login" />
          </div>
          <p className="text-lg font-bold">Super Admin Login</p>
          <div className="email text-left w-full">
            <label htmlFor="email" className="font-bold my-1 inline-block ml-1">
              Enter Email
            </label>
            <input
              type="text"
              placeholder="admin@mail.com"
              className="input input-bordered input-warning w-full"
            />
          </div>
          <div className="email text-left w-full">
            <label
              htmlFor="password"
              className="font-bold my-1 inline-block ml-1"
            >
              Enter Password
            </label>
            <input
              type="password"
              placeholder="******"
              className="input input-bordered input-warning w-full"
            />
          </div>
          <div className="email w-full text-right">
            <button type="submit" className="btn-1 btn-md">
              Authorize
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
