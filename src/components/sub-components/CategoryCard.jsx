import RightArrow from "../../../public/RightArrow";

export default function CategoryCard() {
  return (
    <>
      <div className="w-full p-5 cursor-pointer category__card duration-300 border-[1px] border-transparent hover:border-[#FFC800]/30 rounded-lg hover:bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Mobiles</h3>
              <p className="text-xs">12 ADS</p>
            </div>
          </div>
          <div className="arrow hidden">
            <RightArrow />
          </div>
        </div>
      </div>
    </>
  );
}
