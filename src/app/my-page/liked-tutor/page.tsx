import AccountSideMenu from "@/app/my-page/components/AccountSideMenu";
import MyPageTitle from "../components/MyPageTitle";

export default function LikedTutor() {
  return (
    <div className="flex">
      <AccountSideMenu />
      {/* right side */}
      <section className="w-full ">
        <MyPageTitle title="찜한 tutor" />
      </section>
    </div>
  );
}
