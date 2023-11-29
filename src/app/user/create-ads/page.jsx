import CreateAdPage from "@/components/sections/CreateAd";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";

export default async function CreateAds() {
  const session = await getServerSession(authOptions);

  // get user data
  const data = await prisma.User_Profile.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  return (
    <>
      <CreateAdPage data={data} />
    </>
  );
}
