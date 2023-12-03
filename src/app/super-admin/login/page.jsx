import SaLoginForm from "@/components/sub-components/super-admin/SALoginForm";

export default function SALogin() {
  return (
    <>
      <div className="h-screen bg-[#f7f7f7] w-full flex items-center justify-center">
        <div className="login__box bg-white w-[400px] h-auto p-10 shadow-md rounded-[20px]">
          <SaLoginForm />
        </div>
      </div>
    </>
  );
}
