import Link from "next/link";

function MenuList({
  title,
  link,
  linkName,
}: {
  title: string;
  link: string;
  linkName: string;
}) {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="font-semibold">{title}</p>
      <Link href={link}>{linkName}</Link>
    </div>
  );
}
export default function AccountSideMenu() {
  return (
    <div className="w-[200px] h-[70vh] mt-10">
      {/* 프로필 사진, 닉네임, 계정 설정 버튼 */}
      <div className="flex flex-col items-center text-center gap-y-4">
        <div className="w-[86px] h-[86px] bg-black" />

        <p>회원 닉네임</p>
      </div>
      {/* 메뉴 리스트 */}
      <div className="flex flex-col gap-y-4 mt-[48px]">
        <MenuList title="마이페이지" link="/my-page" linkName="계정설정" />
        <hr className="border-black" />
        <MenuList
          title="질문하기"
          link="/my-page/my-question"
          linkName="작성글 / 채팅내역"
        />
        <hr className="border-black" />
        <MenuList
          title="tutor 찾기"
          link="/my-page/liked-tutor"
          linkName="찜한 tutor"
        />
        <hr className="border-black" />
        <MenuList
          title="자유게시판"
          link="/my-page/my-dashboard"
          linkName="작성글 / 댓글"
        />
      </div>
    </div>
  );
}
