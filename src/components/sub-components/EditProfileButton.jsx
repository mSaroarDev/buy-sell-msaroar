import Link from "next/link";

export default function EditProfileButton(){
    return (
      <>
      <Link href={"/user/settings"} className="btn-1 mt-10 inline-block">Edit Your Profile Now </Link>
      </>
    )
}