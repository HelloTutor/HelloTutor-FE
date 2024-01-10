import AccountSideMenu from "@/app/my-page/components/AccountSideMenu";
import MyPageTitle from "../components/MyPageTitle";

export default function MyDashBoard() {
  return (
    <div className="flex">
      <AccountSideMenu />
      {/* right side */}
      <section className="w-full ">
        <MyPageTitle title="자유게시판" />
      </section>
    </div>
  );
}
