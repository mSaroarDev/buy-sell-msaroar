import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import md5 from "md5";

export async function POST(req) {
  //   const prisma = new PrismaClient();
  const formData = await req.json();
  const { name, email, phone_no, address, profile_image, password, role } =
    formData;

  try {
    if (
      !name ||
      !email ||
      !phone_no ||
      !address ||
      !profile_image ||
      !password
    ) {
      return NextResponse.json(
        { msg: "failed", data: "missing required data" },
        { status: 406 }
      );
    } else {
      const data = await prisma.Super_Admin.create({
        data: {
          name,
          email,
          phone_no,
          address,
          profile_image,
          password: md5(password),
          role,
        },
      });
      return NextResponse.json({ msg: "success", data: data }, { status: 201 });
    }
  } catch (err) {
    return NextResponse.json({ msg: "failed", data: err });
  } finally {
    await prisma.$disconnect();
  }
}
