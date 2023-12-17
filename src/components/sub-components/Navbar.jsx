import Link from "next/link";
import Logo from "../../../public/logo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Navbar() {

  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="bg-brandColor2">
        <main>
          <div className="navbar lg:px-10">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link href={"/all-ads"}>All ADS</Link>
                  </li>
                  <li>
                    <Link href={"/all-ads"}>Post Your AD</Link>
                  </li>
                  <li>
                    <Link href={"/all-ads"}>My Account</Link>
                  </li>
                </ul>
              </div>
              <Link href={"/"}>
                <Logo />
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 hidden">
                <li>
                  <a>Item 1</a>
                </li>
                <li tabIndex={0}>
                  <details>
                    <summary>Parent</summary>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end hidden lg:flex gap-x-5">
              <Link
                href={"/explore-ads"}
                className="flex items-center gap-x-2 text-white font-medium text-[14px] uppercase"
              >
                All ADS
              </Link>
              {session ? <Link
                href={"/logged"}
                className="flex items-center gap-x-2 text-white font-medium text-[14px] uppercase"
              >
                My Profile
              </Link> : 
              <Link
                href={"/login"}
                className="flex items-center gap-x-2 text-white font-medium text-[14px] uppercase"
              >
                Login
              </Link>}
              <Link href={"/user/create-ads"} className="btn-1 ml-6">
                Post Your ADS
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
