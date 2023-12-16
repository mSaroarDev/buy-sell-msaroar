import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import md5 from "md5";

export async function POST(req) {
  const formData = await req.json();

  const {
    name,
    email,
    otp,
    password,
    role,
    gender,
    mobile_no,
    division,
    district,
    sub_district,
    address,
    profile_image,
  } = formData;

  try {
    const existUser = await prisma.user.count({
      where: {
        email: email,
      },
    });

    if (!name || !email || !password) {
      return NextResponse.json(
        { msg: "failed", data: "Missing required fields" },
        { status: 400 }
      );
    } else if (existUser > 0) {
      return NextResponse.json(
        { msg: "failed", data: "Email already exists" },
        { status: 409 }
      );
    } else {
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          otp,
          password: md5(password),
          role,
          User_Profile: {
            create: {
              email: email,
              gender,
              mobile_no,
              division,
              district,
              sub_district,
              address,
              profile_image,
            },
          },
        },
      });
      return NextResponse.json(
        { msg: "success", data: newUser },
        { status: 201 }
      );
    }
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json(
      { msg: "error", data: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
