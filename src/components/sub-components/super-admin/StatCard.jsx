export default function StatCard({data, title}) {
  return (
    <>
      <div className="h-[120px] w-[200px] bg-white rounded-md shadow-md p-5 flex flex-col items-center justify-center gap-1">
        <h3 className="text-5xl font-bold">{data}</h3>
        <p className="font-bold">{title}</p>
      </div>
    </>
  );
}
