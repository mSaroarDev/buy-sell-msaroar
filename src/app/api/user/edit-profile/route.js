import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.json();

  const {
    name,
    gender,
    dob,
    mobile_no,
    division,
    district,
    sub_district,
    address,
    profile_image,
    user_id,
  } = formData;

  console.log("id", user_id);

  try {
    // if (
    //   !gender ||
    //   !dob ||
    //   !mobile_no ||
    //   !division ||
    //   !district ||
    //   !sub_district ||
    //   !address
    // ) {
    //   return NextResponse.json(
    //     { msg: "failed", data: "Missing required fields" },
    //     { status: 406 }
    //   );
    // } else {

    const data = await prisma.User_Profile.update({
      where: {
        user_id: parseInt(user_id),
      },
      data: {
        gender,
        dob,
        mobile_no,
        division,
        district,
        sub_district,
        address,
        profile_image,
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
