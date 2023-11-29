import UserNavServerComp from "@/components/sub-components/UserNavServer";
import UserNavbar from "@/components/sub-components/UserNavbar";
import UserSidebar from "@/components/sub-components/UserSidebar";

export const metadata = {
  title: "Mr Saroar - Dashboard",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen w-full bg-[#f7f7f7]">
        <UserNavServerComp />
        <main>
          <div className="grid grid-cols-12 gap-5 mt-5">
            <div className="col-span-3 hidden lg:block p-5 bg-white rounded-xl h-fit">
              <UserSidebar />
            </div>
            <div className="col-span-12 lg:col-span-9 p-5 bg-white rounded-xl mx-5 lg:mx-0">
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
