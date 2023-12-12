"use client";
import UserNavbar from "../sub-components/UserNavbar";
import Navbar from "../sub-components/Navbar";
import AdDetails from "../sub-components/AdDetails";
import { useSession } from "next-auth/react";

export default function SingleAdDetails({data}) {

 // session 
 const session = useSession();

  return (
    <>
      <div>
        {session ? <UserNavbar /> : <Navbar />}
      </div>
      <AdDetails data={data} />
    </>
  );
}
