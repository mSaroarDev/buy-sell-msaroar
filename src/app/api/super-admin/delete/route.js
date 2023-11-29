import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import md5 from "md5";

export async function DELETE(req) {
  //   const prisma = new PrismaClient();
  const formData = await req.json();
  const { id, myRole } = formData;

  try {
    if (myRole !== "Developer") {
      return NextResponse.json(
        { msg: "failed", data: "not permitted to delete" },
        { status: 406 }
      );
    } else if (myRole === "Developer") {
      const data = await prisma.Super_Admin.delete({
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
