"use client";
import Image from "next/image";
import EditProfileButton from "../sub-components/EditProfileButton";

export default function Profile({ data, name }) {
  const {
    email,
    gender,
    dob,
    mobile_no,
    division,
    district,
    sub_district,
    address,
    profile_image,
  } = data;

  return (
    <>
      <div className="pb-3">
        <h1 className="text-2xl font-bold w-full">{name}</h1>
      </div>
      <hr />

      {division === null ||
      district === null ||
      sub_district === null ||
      address === null ? (
        <EditProfileButton />
      ) : (
        <div className="flex gap-5 mt-5">
          <div>
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden ring-2 ring-brandColor relative">
              <Image
                src={profile_image}
                width={120}
                height={120}
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
              <li>Email: {email}</li>
              <li>Gender: {gender}</li>
              <li>Date of Birth: {dob}</li>
              <li>Mobile No: {mobile_no}</li>
              <li>Division: {division}</li>
              <li>District: {district}</li>
              <li>Sub District: {sub_district}</li>
              <li>Address: {address}</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
