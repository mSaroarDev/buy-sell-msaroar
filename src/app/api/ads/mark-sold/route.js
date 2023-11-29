import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.json();

    const ad = await prisma.Ads.update({
      where: { id: parseInt(formData.id) },
      data: {
        status: formData.status,
      },
    });

    return NextResponse.json({ status: "success", data: ad }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ status: "failed", data: err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
