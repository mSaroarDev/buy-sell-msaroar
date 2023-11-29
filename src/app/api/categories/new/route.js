import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.json();
    const { myRole, category_name, category_image, created_by } = formData;

    if (myRole !== "SuperAdmin") {
      return NextResponse.json(
        { status: "failed", data: "user not permitted" },
        { status: 406 }
      );
    } else {
      const category = await prisma.Categories.create({
        data: {
          category_name: category_name,
          category_image: category_image,
          created_by: parseInt(created_by),
        },
      });

      return NextResponse.json(
        { status: "success", data: category },
        { status: 201 }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ status: "failed", data: err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
