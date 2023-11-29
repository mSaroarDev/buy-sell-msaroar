"use client";
import { useSession } from "next-auth/react";

export default function GetEmail() {
  const session = useSession();
  return (
    <>
      <p>{session?.data?.user?.email}</p>
    </>
  );
}
