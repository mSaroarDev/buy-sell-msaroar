import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const id = params.id;
  try {
    const formData = await req.json();
    const { myRole, category_name, category_image } = formData;

    if (myRole !== "SuperAdmin") {
      return NextResponse.json(
        { status: "failed", data: "user not permitted" },
        { status: 406 }
      );
    } else {
      const category = await prisma.Categories.update({
        where: { id: parseInt(id) },
        data: {
          category_name: category_name,
          category_image: category_image,
        },
      });

      return NextResponse.json(
        { status: "success", data: category },
        { status: 200 }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ status: "failed", data: err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
