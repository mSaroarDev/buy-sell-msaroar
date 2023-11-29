import CategoryCard from "../sub-components/CategoryCard";

export default function CategorySection() {
  return (
    <>
      <main className="py-10 px-5">
        <h2 className="text-lg font-semibold mb-10">Browse by category</h2>
        <div className="categories grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </main>
    </>
  );
}
