"use client";
import Image from "next/image";
import EditProfileButton from "../sub-components/EditProfileButton";

export default function Profile({ data, name }) {


  return (
    <>
      <div className="pb-3">
        <h1 className="text-2xl font-bold w-full">{name}</h1>
      </div>
      <hr />

      {data?.division === "" ||
      data?.district === "" ||
      data?.sub_district === "" ||
      data?.address === "" ? (
        <EditProfileButton />
      ) : data === null ? <EditProfileButton /> : (
        <div className="flex gap-5 mt-5">
          <div>
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden ring-2 ring-brandColor relative">
              <Image
                src={data?.profile_image}
                fill
                alt={name}
                className="absolute inset-0 object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold">Profile Details</h2>
            <hr />
            <ul className="mt-3">
              <li>Name: {name}</li>
              <li>Email: {data?.email}</li>
              <li>Gender: {data?.gender}</li>
              <li>Date of Birth: {data?.dob}</li>
              <li>Mobile No: {data?.mobile_no}</li>
              <li>Division: {data?.division}</li>
              <li>District: {data?.district}</li>
              <li>Sub District: {data?.sub_district}</li>
              <li>Address: {data?.address}</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
