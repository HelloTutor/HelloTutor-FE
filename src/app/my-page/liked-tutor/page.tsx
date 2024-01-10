import AccountSideMenu from "@/app/my-page/components/AccountSideMenu";
import MyPageTitle from "../components/MyPageTitle";

export default function LikedTutor() {
  return (
    <div className="flex">
      <AccountSideMenu />
      {/* right side */}
      <section className="w-full ">
        <MyPageTitle title="찜한 tutor" />
        <div className="flex flex-col gap-y-5 mt-[48px] ml-[80px]">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              className="rounded-sm w-[700px] hover:shadow-sm mx-auto"
              key={index}
            >
              <div className="flex items-center ">
                <div className="rounded-lg min-w-[80px] h-[80px] bg-black" />
                <div className="ml-3">
                  <p className="font-semibold">닉네임</p>
                  <p className=" overflow-hidden text-ellipsis   line-clamp-2 break-words slick-vertical">
                    {/* 자기소개는 2줄이 넘게 표시 되지 않음*/}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus, voluptatum? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Repellendus, voluptatum?
                    consectetur adipisicing elit. Repellendus, voluptatum?
                    consectetur adipisicing elit. Repellendus, voluptatum?
                  </p>
                  <p className=" text-gray-500">
                    별점(리뷰 수) / 채택 수 / 경력
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
