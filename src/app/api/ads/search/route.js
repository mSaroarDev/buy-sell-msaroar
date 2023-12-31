// Assuming you have a Categories model in your Prisma schema

// Import the PrismaClient from your db file
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  // Extract the search query from req.query
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");
  const page = searchParams.get("page");

  try {
    const adResults = await prisma.Ads.findMany({
      skip: (parseInt(page) - 1) * 10,
      take: 10,
      where: {
        OR: [
          {
            product_name: {
              contains: query,
            },
          },
          {
            description: {
              contains: query,
            },
          },
          {
            brand: {
              contains: query,
            },
          },
          {
            model: {
              contains: query,
            },
          },
          {
            keywords: {
              contains: query,
            },
          },
        ],
        status: "Not Sold",
      },
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(
      { msg: "success", data: adResults },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ msg: "failed", data: err }, { status: 500 });
  }
}
