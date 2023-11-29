"use client";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import UserNavbar from "../sub-components/UserNavbar";
import Navbar from "../sub-components/Navbar";
import Image from "next/image";
import saler from "public/saler.svg";
import call from "public/call.svg";

export default function SingleAdDetails() {
  const searhParams = useSearchParams();
  const ad_id = searhParams.get("ad-id");

  // session
  const session = useSession();

  return (
    <>
      <div>
        {session?.status === "authenticated" ? <UserNavbar /> : <Navbar />}
      </div>
      <div className="p-5">
        <div className="w-full max-w-5xl mx-auto">
          <div className="bg-white p-7">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 title">
                <h1 className="text-2xl font-bold">
                  Samsung Galaxy S21 8/256 Gb Duel (Used)
                </h1>
                <p>Posted 1 min ago at Mirpur, Dhaka</p>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <div className="w-full h-[500px] bg-bgGray flex flex-col items-center justify-center gap-3 my-5">
                  <Image
                    src="/fitted.jpg"
                    height={500}
                    width={500}
                    alt="Image"
                  />
                </div>
                <div className="all-images flex gap-5 items-center justify-center my-5">
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
                </div>
                <hr />
                <div className="flex gap-5 mt-10 items-baseline">
                  <h3 className="text-brandColor2 font-bold text-3xl">
                    ৳ 10,750{" "}
                  </h3>{" "}
                  <div className="badge badge-warning gap-2">Negotible</div>
                </div>
                <div className="details mt-5">
                  <ul>
                    <li>Condition: </li>
                    <li>Brand: </li>
                    <li>Model: </li>
                    <li>Edition: </li>
                    <li>Authencity: </li>
                  </ul>

                  <div className="description mt-10">
                    <p>
                      Features 4G, Dual SIM, Micro SIM, Mini SIM, USB Type-B
                      Port, USB Type-C Port, Fast Charging, Flash Charging,
                      Android, Windows, iOS, Expandable Memory, 4 GB RAM, 6 GB
                      RAM, 8 GB RAM, Dual Camera, Triple Camera, Dual LED Flash,
                      Quad LED Flash, Bluetooth, Wifi, GPS, Fingerprint Sensor,
                      Infrared port Description Fully fresh condition phone
                      Chokchok Kore akhono surveying hoi nai Kono problem nai 8
                      months used With Box nei original Charger ta ase atai
                      paben Snapdragon 730G Super AMOLED Display 6.7 Camera 64
                      and 32 mp Selfie Battery 4500 Quick charge 25W Supported.
                      Price fixed 😔😁
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-3 mt-5">
                <div className="border-[1px] border-gray-200 rounded-md">
                  <div className="mt-5 flex flex-col gap-3">
                    <div className="px-5 flex items-center gap-3">
                      <Image
                        src={saler}
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
                          Muhammad Saroar
                        </span>
                      </div>
                    </div>

                    <hr />
                    <div className="px-5 flex items-center gap-3">
                      <Image
                        src={call}
                        height={30}
                        width={30}
                        alt="Sales by"
                      />
                      <div>
                        <div className="badge badge-primary badge-md">
                          Contact No
                        </div>{" "}
                        <br />{" "}
                        <span className="font-bold text-black">
                          +8801798456380
                        </span>
                      </div>
                    </div>

                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
