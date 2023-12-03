import StatCard from "@/components/sub-components/super-admin/StatCard";
import prisma from "@/lib/db";

export default async function SuperAdminDashboard(){
  const totalUsers = await prisma.User.count({
    where: {
      role: "User"
    }
  })

  const totalAds = await prisma.Ads.count({})
  const runningAds = await prisma.Ads.count({
    where: {
      status: "Not Sold"
    }
  })

  const soldAds = await prisma.Ads.count({
    where: {
      status: "Sold"
    }
  })

  const totalCategories = await prisma.Categories.count({})

    return (
      <>
        <div className="stats-cards">
          <div className="flex flex-wrap items-start justify-start gap-5 p-10">
            <StatCard data={totalUsers} title={"Total Users"} />
            <StatCard data={totalCategories} title={"Categories"} />
            <StatCard data={totalAds} title={"Total Ads"} />
            <StatCard data={runningAds} title={"Running Ads"} />
            <StatCard data={soldAds} title={"Sold Items"} />
          </div>
        </div>
      </>
    )
}