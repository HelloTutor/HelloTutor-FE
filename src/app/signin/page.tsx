import SubmitButton from "@/components/SubmitButton";
import Link from "next/link";

export default function Signin() {
  return (
    <>
      <div className="max-w-[970px] mx-auto mt-[160px]">
        {/* 로그인 form */}
        <form className="flex flex-col gap-y-6 max-w-[400px] mx-auto">
          <div>
            <label className="text-lg" htmlFor="email">
              이메일
            </label>
            <input
              id="email"
              className="border-2 border-[#d9d9d9] rounded-lg h-[60px] px-4 w-[400px] mt-4"
              type="email"
              name="email"
              placeholder="이메일을 입력하세요."
            />
          </div>
          <div>
            <label className="text-lg " htmlFor="password">
              비밀번호
            </label>
            <input
              id="password"
              className="border-2 border-[#d9d9d9] rounded-lg h-[60px] px-4 w-[400px] mt-4"
              type="password"
              name="password"
            />
          </div>
          <SubmitButton title="로그인" />
        </form>

        {/* 비밀번호 찾기 &  회원가입 */}
        <div className="max-w-[400px] text-center mt-12 flex justify-between mx-auto underline underline-offset-4">
          <Link href="/signin/findPassword">
            <span>비밀번호 찾기</span>
          </Link>
          <Link href="/signup">
            <span>회원가입</span>
          </Link>
        </div>
      </div>

      {/* 구글 간편 로그인*/}
      <div>
        <div className="mt-12 text-center">
          <SubmitButton title="구글로 가입하기" />
        </div>
      </div>
    </>
  );
}
