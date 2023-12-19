import Image from "next/image";
import saler from "public/saler.svg";
import call from "public/call.svg";
import formatTimeAgo from "@/utils/convert_date";
import Link from "next/link";
// import convert_to_currency_format from '@/utils/convert_to_currency'

export default function AdDetails({ data }) {
  const main_price = parseInt(data?.price);
  const stringPrice = main_price.toLocaleString("en-US");

  return (
    <>
      <div className="p-5">
        <div className="w-full max-w-5xl mx-auto">
          <div className="bg-white p-7">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 title">
                <h1 className="text-2xl font-bold">
                  {data?.product_name} ({data?.condition})
                </h1>
                <p>Posted {formatTimeAgo(data?.created_at)} at {data?.upazilla}, {data?.district}</p>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <div className="w-full h-[500px] bg-bgGray flex flex-col items-center justify-center gap-3 my-5 relative">
                  <Image
                    src={data?.product_image}
                    fill
                    alt="Image"
                    className="absolute inset-0 object-contain"
                  />
                </div>
                {/* <div className="all-images flex gap-5 items-center justify-center my-5">
                  <Image
                    src="/fitted.jpg"
                    height={100}
                    width={100}
                    alt="Images"
                  />
                  <Image
                    src="/fitted.jpg"
                    height={100}
                    width={100}
                    alt="Images"
                  />
                  <Image
                    src="/fitted.jpg"
                    height={100}
                    width={100}
                    alt="Images"
                  />
                  <Image
                    src="/fitted.jpg"
                    height={100}
                    width={100}
                    alt="Images"
                  />
                </div> */}
                <hr />
                <div className="flex gap-5 mt-10 items-baseline">
                  <h3 className="text-brandColor2 font-bold text-3xl">
                    {/* ৳ {convert_to_currency_format(data?.price)} {" "} */}৳{" "}
                    {stringPrice}{" "}
                  </h3>{" "}
                  <div className="badge badge-warning gap-2">
                    {data?.negotible === "Yes" ? "Negotible" : "Not Negotible"}
                  </div>
                </div>
                <div className="details mt-5">
                  <ul>
                    <li>Condition: {data?.condition}</li>
                    <li>Brand: {data?.brand} </li>
                    <li>Model: {data?.model} </li>
                    <li>Edition: {data?.edition} </li>
                    <li>Authencity: {data?.authenticity} </li>
                  </ul>

                  <div className="description mt-10">
                    <p>{data?.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-3 mt-5">
                <div className="border-[1px] border-gray-200 rounded-md">
                  <div className="mt-5 flex flex-col gap-3">
                    <div className="px-5 flex items-center gap-3">
                      <Image
                        src="/man.png"
                        height={30}
                        width={30}
                        alt="Sales by"
                      />
                      <div>
                        <div className="badge badge-primary badge-md">
                          Sales By
                        </div>{" "}
                        <br />{" "}
                        <span className="font-bold text-black">
                          {data?.saler_name}
                        </span>
                      </div>
                    </div>

                    <hr />
                    <div className="px-5 flex items-center gap-3">
                      <Image src={call} height={30} width={30} alt="Sales by" />
                      <div>
                        <div className="badge badge-primary badge-md">
                          Contact No
                        </div>{" "}
                        <br />{" "}
                        <span className="font-bold text-black">
                          +88{data?.contact_no}
                        </span>
                      </div>
                    </div>

                    <hr />
                  </div>
                </div>

                {/* external ads */}
                <div className="hidden lg:block w-full h-full p-2 relative">
                  <a href="http://teamsaroar.pw">
                    <Image src="/external-ad.png" fill className="absolute object-contain top-[20px]" alt="External Ad"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
