import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function DELETE(req) {
  const session = await getServerSession(authOptions);
  const userInfo = await prisma.User.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  const formData = await req.json();
  const { id } = formData;

  try {
    if (userInfo.role !== "SuperAdmin") {
      return NextResponse.json(
        { msg: "failed", data: "not permitted to delete" },
        { status: 406 }
      );
    } else {
      const data = await prisma.categories.delete({
        where: {
          id: parseInt(id),
        },
      });
      return NextResponse.json({ msg: "success", data: data }, { status: 200 });
    }
  } catch (err) {
    return NextResponse.json({ msg: "failed", data: err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
