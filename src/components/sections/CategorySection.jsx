import prisma from "@/lib/db";
import CategoryCard from "../sub-components/CategoryCard";

export default async function CategorySection() {

  const categories = await prisma.Categories.findMany();

  return (
    <>
      <main className="py-10 px-5">
        <h2 className="text-lg font-semibold mb-10">Browse by category</h2>
        <div className="categories grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {categories && categories.map((category)=> {
            return (
              <div key={category?.id}><CategoryCard data={category} /></div>
            )
          })}
        
        </div>
      </main>
    </>
  );
}
