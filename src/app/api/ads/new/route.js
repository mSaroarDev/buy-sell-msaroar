import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const formData = await req.json();

  // get user data
  const data = await prisma.User_Profile.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  const category = await prisma.Categories.findUnique({
    where: {
      id: parseInt(formData.category_id),
    },
  });

  try {
    const { myRole } = formData;

    const seo = `${formData.product_name}, ${formData.description}, ${formData.edition}, ${formData.features}, ${formData.brand}, ${formData.model}, ${category?.category_name}, ${formData.keywords}`;

    if (myRole === "User") {
      const ad = await prisma.Ads.create({
        data: {
          product_name: formData.product_name,
          description: formData.description,
          price: formData.price,
          edition: formData.edition,
          condition: formData.condition,
          authenticity: formData.authenticity,
          features: formData.features,
          negotible: formData.negotible,
          brand: formData.brand,
          model: formData.model,
          category_id: parseInt(formData.category_id),
          // category_id: parseInt(formData.category_id),
          product_image: formData.product_image,
          saler_name: formData.saler_name,
          contact_no: formData.contact_no,
          division: formData.division,
          district: formData.district,
          upazilla: formData.upazilla,
          keywords: seo,
          created_by: data.user_id,
          // created_by: 14,
        },
      });
      return NextResponse.json(
        { status: "success", data: ad },
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
