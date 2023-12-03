import Profile from "@/components/sections/Profile";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import prisma from "@/lib/db";

export default async function MyProfile(){

  const session = await getServerSession(authOptions);
  console.log(session);

  // get user data
  const data = await prisma.User_Profile.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  // get name
  const user = await prisma.User.findUnique({
    where: {
      email: session?.user?.email,
    },
  });


    return (
      <>
      <div className="p-5">
        <Profile data={data} name={user?.name} />
      </div>
      </>
    )
}