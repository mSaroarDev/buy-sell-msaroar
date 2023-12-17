import prisma from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import I_eye from "../../../../public/i-eye";
import UserDeleteButton from "./UserDeleteModal";

export default async function SAUserCard({ data }) {
  const userProfile = await prisma.User_Profile.findUnique({
    where: {
      email: data?.email,
    },
  });

  return (
    <>
      <div className="p-2 rounded-md border-[1px] border-brandColor2/50 flex items-center justify-between">
        <div className="flex items-center justify-start gap-2">
          <div className="image-container h-14 w-14 rounded-full overflow-hidden object-cover relative">
            <Image
              src={userProfile?.profile_image}
              fill
              alt={data?.name}
              className="absolute inset-0 object-cover"
            />
          </div>
          <div>
            <h4 className="text-md font-bold">{data?.name}</h4>
            <p>{data?.email}</p>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
          <Link
            href={"/"}
            title="View User Profile"
            className="bg-[#292929] text-white p-2 rounded-full"
          >
            <I_eye />
          </Link>
          <UserDeleteButton data={userProfile} />
        </div>
      </div>
    </>
  );
}
