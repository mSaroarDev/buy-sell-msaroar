import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.json();
  const session = await getServerSession(authOptions);
  const userInfo = await prisma.User.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  try {
    if (userInfo?.role !== "SuperAdmin") {
      return NextResponse.json({ msg: "user not permitted" }, { status: 406 });
    } else if (userInfo?.role === "SuperAdmin") {
      const action = await prisma.Ads.update({
        where: {
          id: parseInt(formData.id),
        },
        data: {
          status: formData.status,
        },
      });
      return NextResponse.json(
        { msg: "success", data: action },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ msg: "server error" }, { status: 500 });
  }
}
