import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dollarBag from "public/dollarbag.svg";
import explore from "public/explore.svg";

export default function BuyandSell() {

  return (
    <>
      <div className="py-10">
        <main>
          <div className="w-full lg:w-5/6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-md shadow-lg duration-300 border-[1px] border-transparent hover:border-[#FFC800]/30">
                <div className="flex items-center justify-between">
                  <div className="w-20 h-20 rounded-full bg-[#FFC800]/10 flex items-center justify-center">
                    <Image
                      src={dollarBag}
                      height={150}
                      width={150}
                      alt="Sell"
                    />
                  </div>

                  <div className="texts">
                    <h2 className="text-xl font-semibold mb-2">
                      Start making money!
                    </h2>
                    <p>
                      Do you have something to sell? <br />
                      Post your first ad and start making money!
                    </p>
                    <Link href={"/user/create-ads"} className="btn-full w-fit flex items-center gap-x-2 mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Sell your items
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-md shadow-lg duration-300 border-[1px] border-transparent hover:border-[#FFC800]/30">
                <div className="flex items-center justify-between">
                  <div className="w-20 h-20 rounded-full bg-[#FFC800]/10 flex items-center justify-center">
                    <Image src={explore} height={150} width={150} alt="Sell" />
                  </div>

                  <div className="texts">
                    <h2 className="text-xl font-semibold mb-2">
                      Save your money!
                    </h2>
                    <p>
                      Do you need to something buy? <br />
                      Get your desired product for less money!
                    </p>
                    <Link href={"/explore-ads"} className="btn-full w-fit flex items-center gap-x-2 mt-4">
                      Explore Items
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
