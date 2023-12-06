import SAUserCard from "@/components/sub-components/super-admin/SAUserCard";
import prisma from "@/lib/db";

export default async function SAUsersPage() {
  const users = await prisma.User.findMany({
    where: {
      role: "User",
    },
  });

  return (
    <>
      <h4 className="font-bold text-xl">Users</h4>
      <div className="p-5 flex flex-col gap-1">
        {users &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <SAUserCard data={user} />
              </div>
            );
          })}
      </div>
    </>
  );
}
