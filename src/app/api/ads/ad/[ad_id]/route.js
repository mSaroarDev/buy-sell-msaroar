import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const ads_id = req.ad_id;

  try {
    const ad = await prisma.Ads.findUnique({
      where: {
        id: parseInt(ads_id),
      },
    });

    return NextResponse.json({ mgs: "success", data: ad }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ mgs: "failed", data: error }, { status: 500 });
  }
}
