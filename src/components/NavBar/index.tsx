"use client";
import { useAuthContext } from "@/context/auth-context";
import Link from "next/link";

function NavBar() {
  const { userId, setUserId } = useAuthContext();
  console.log(userId, "navbar");
  return (
    <nav className="h-[96px] flex justify-between items-center text-xl font-medium">
      {/* menu left */}
      <div className="flex">
        {/* home icon */}
        <p className="mr-[32px]">
          <Link href="/">HelloTutor</Link>
        </p>
        {/* menu list */}
        <ul className="flex gap-x-6 min-w-[290px]">
          <li>
            <Link href="/question">질문하기</Link>
          </li>
          <li>
            <Link href="/find-tutor">tutor 찾기</Link>
          </li>
          <li>
            <Link href="/dashboard">자유게시판</Link>
          </li>
        </ul>
      </div>
      {/* menu right - sign in/up button */}
      <div className="flex gap-x-6 min-w-[146px]">
        {userId ? (
          <>
            <button type="button" onClick={() => setUserId(null)}>
              로그아웃
            </button>
            <Link href="/my-page">마이페이지</Link>
          </>
        ) : (
          <>
            <Link href="/signin">로그인</Link>
            <Link href="/signup">회원가입</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
