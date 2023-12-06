import AddNewCategoryButton from "@/components/sub-components/super-admin/AddNewCategory";
import CategoryCard from "@/components/sub-components/super-admin/CategoryCard";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";

export default async function CategoriesPage() {
  const categories = await prisma.Categories.findMany();

  return (
    <>
      <AddNewCategoryButton />
      <div className="flex flex-wrap gap-3">
        {categories &&
          categories.map((category) => {
            return <CategoryCard key={category.id} data={category} />;
          })}
      </div>
    </>
  );
}
