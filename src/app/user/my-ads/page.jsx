import EditModal from "@/components/sub-components/EditModal";
import MyAdsCard from "@/components/sub-components/MyAdsCard";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { appendMutableCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export default async function MyAds() {
  const session = await getServerSession(authOptions);
  const loggedMail = session.user.email;

  const user = await prisma.user.findUnique({
    where: {
      email: loggedMail,
    },
  });

  const adsByThisUser = await prisma.ads.findMany({
    where: {
      created_by: parseInt(user?.id),
    },
  });

  return (
    <>
      <div className="w-full px-5">
        <div className="py-3">
          <h3 className="font-bold text-xl">My Ads</h3>
        </div>
        <hr />

        <div className="p-3 flex flex-col gap-2 mt-5 w-full">
          {adsByThisUser.length === 0 ? (
            <p className="text-center">No Ads created by you</p>
          ) : (
            adsByThisUser.map((ad) => {
              return (
                <div key={ad.id}>
                  <MyAdsCard data={ad} />
                </div>
              );
            })
          )}
        </div>
      </div>
      
    </>
  );
}
