import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  try {
    const formData = await req.json();

    const ad = await prisma.Ads.update({
      where: { id: parseInt(params.id) },
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
        product_image: formData.product_image,
        saler_name: formData.saler_name,
        contact_no: formData.contact_no,
        division: formData.division,
        district: formData.district,
        upazilla: formData.upazilla,
        keywords: formData.keywords,
      },
    });

    return NextResponse.json({ status: "success", data: ad }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ status: "failed", data: err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
