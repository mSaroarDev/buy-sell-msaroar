import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.json();

  const { name, user_id } = formData;
  console.log("user id", user_id);

  try {
    const data = await prisma.User.update({
      where: {
        id: parseInt(user_id),
      },
      data: {
        name: name,
      },
    });
    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
    // }
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
