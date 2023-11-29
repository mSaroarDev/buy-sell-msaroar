import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const data = await prisma.Categories.findMany();
    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "failed", data: err });
  } finally {
    await prisma.$disconnect();
  }
}
