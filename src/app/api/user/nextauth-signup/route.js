import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.json();
  const { name, email, image } = formData;

  try {
    const ifExistEmail = await prisma.User.count({
      where: {
        email: email,
      },
    });

    if (ifExistEmail) {
      return NextResponse.json({ msg: "Welcome Back" });
    } else {
      const userData = await prisma.User.create({
        data: {
          name: name,
          email: email,
          User_Profile: {
            create: {
              profile_image: image,
              email: email,
            },
          },
        },
      });
      return NextResponse.json(
        { msg: "success", data: userData },
        { status: 201 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      { msg: "server error", data: err },
      { status: 500 }
    );
  }
}
