import LoginBox from "@/components/sections/LoginBox";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function LoginPage() {

  const session = await getServerSession(authOptions);

  if(session){
    redirect("/logged")
  }
  

  return (
    <>
      <div className="min-h-screen w-full bg-[#f7f7f7] flex items-center justify-center px-5">
        <LoginBox />
      </div>
    </>
  );
}
