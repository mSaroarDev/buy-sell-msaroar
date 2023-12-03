import Profile from "@/components/sections/Profile";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";

export default async function SAMyProfile(){
    const session = await getServerSession(authOptions);
  const userData = await prisma.User_Profile.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  const name = await prisma.User.findUnique({
    where: {
      email: session?.user?.email,
    },
  });
    return (
      <>
      <Profile data={userData} name={name?.name} />
      </>
    )
}