import Spinner from "@/components/sub-components/spinner/Spinner";
import { authOptions } from "@/lib/auth"
import prisma from "@/lib/db";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

export default async function LoggedPage(){
    const session = await getServerSession(authOptions);

    if(!session){
        redirect("/login")
    }

    const userInfo = await prisma.User.findUnique({
        where: {
            email: session?.user?.email
        }
    })

    if(session && userInfo.role === "User"){
        redirect("/user/my-profile")
    }else if(session && userInfo.role === "SuperAdmin"){
        redirect("/super-admin/stats")
    }else if(session && userInfo.role === "Developer"){
        redirect("/developer-area")
    }

    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <Spinner />
      </div>
    )
}