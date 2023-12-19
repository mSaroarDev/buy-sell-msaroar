import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import EditProfileForm from "@/components/sections/EditProfile";
import prisma from "@/lib/db";

export default async function Settings() {
  const session = await getServerSession(authOptions);

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
        <EditProfileForm data={data} name={user?.name} user={user} />
      </div>
    </>
  );
}
