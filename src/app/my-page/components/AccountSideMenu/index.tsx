"use client";
import Link from "next/link";

function MenuList({
  title,
  link,
  linkName,
  secondLink,
  secondLinkName,
  isLine,
}: {
  title: string;
  link: string;
  linkName: string;
  secondLink?: string;
  secondLinkName?: string;
  isLine?: boolean;
}) {
  return (
    <>
      <div className="flex flex-col gap-y-2">
        <p className="font-semibold">{title}</p>
        <Link href={link}>{linkName}</Link>
        {secondLink && secondLinkName && (
          <Link href={secondLink}>{secondLinkName}</Link>
        )}
      </div>
      {isLine && <hr className="border-black" />}
    </>
  );
}
export default function AccountSideMenu() {
  // tutor , tutee 구분 로직 추후 추가
  const isTutor = false;
  return (
    <div className="w-[200px] h-[70vh] mt-10">
      {/* 프로필 사진, 닉네임, 계정 설정 버튼 */}
      <div className="flex flex-col items-center text-center gap-y-4">
        <div className="w-[86px] h-[86px] bg-black" />

        <p>회원 닉네임</p>
      </div>
      {/* 메뉴 리스트 */}
      <div className="flex flex-col gap-y-4 mt-[48px]">
        <MenuList
          title="마이페이지"
          link="/my-page"
          linkName="계정설정"
          isLine
        />
        <MenuList
          title="질문하기"
          link={isTutor ? "/" : "/my-page/my-question"}
          linkName={isTutor ? "찜한 질문" : "작성글 / 채팅내역"}
          isLine
        />
        <MenuList
          title="tutor 찾기"
          link="/my-page/liked-tutor"
          linkName="찜한 tutor"
          isLine
        />
        <MenuList
          title="자유게시판"
          link="/my-page/my-dashboard"
          linkName="작성글 / 댓글"
          isLine
        />
        <MenuList
          title="튜터게시판"
          link={`/find-tutor/${123}`}
          linkName="내 튜터 게시판"
          secondLink={`/my-page/tutor-info`}
          secondLinkName="튜터 정보 수정"
          isLine={isTutor ? true : false}
        />
      </div>
    </div>
  );
}
