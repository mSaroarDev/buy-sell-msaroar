import prisma from "@/lib/db";
import UserNavbar from "./UserNavbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function UserNavServerComp() {
  const session = await getServerSession(authOptions);

  const data = await prisma.User_Profile.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  return (
    <>
      <UserNavbar data={data} />
    </>
  );
}
