import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function DELETE(req) {
  //   const prisma = new PrismaClient();
  const formData = await req.json();

  try {
    const data = await prisma.Ads.delete({
      where: {
        id: parseInt(formData.id),
      },
    });
    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "failed", data: err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
