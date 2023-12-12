import Image from "next/image";

export default function HomeSearch() {
  return (
    <>
      <div className="bg-[#149777]">
        <main className="pt-24 pb-20 px-5">
          <div className="w-full max-w-[600px] mx-auto">
            <div className="relative text-gray-600">
              <input
                type="search"
                name="serch"
                placeholder="Anything you need..."
                class="bg-white h-14 px-7 pr-10 rounded-full text-sm focus:outline-none w-full"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 m-1 bottom-0 bg-[#FFC800] text-[#673500] px-8 rounded-full text-[14px] uppercase font-bold flex items-center gap-x-2"
              >
                <Image src="/search.svg" height={20} width={20} alt="Search" />
                Search
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
