import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function DELETE(req) {
  //   const prisma = new PrismaClient();
  const formData = await req.json();
  const { id, myRole } = formData;

  try {
    if (myRole !== "SuperAdmin") {
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
