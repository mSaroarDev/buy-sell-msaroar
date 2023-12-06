import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  const userInfo = await prisma.User.findUnique({
    where: {
      email: session?.user?.email,
    },
  });
  console.log(userInfo);

  const formData = await req.json();
  const { category_name, category_image } = formData;

  try {
    if (userInfo.role !== "SuperAdmin") {
      return NextResponse.json(
        { status: "failed", data: "user not permitted" },
        { status: 406 }
      );
    } else {
      const category = await prisma.Categories.create({
        data: {
          category_name: category_name,
          category_image: category_image,
          created_by: userInfo.id,
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
