import EditProfileForm from "@/components/sections/EditProfile";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";

export default async function SettingsPage() {
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
      <div className="px-24 py-5">
        <EditProfileForm data={userData} name={name?.name} />
      </div>
    </>
  );
}
