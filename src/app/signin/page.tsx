"use client";
import { signin } from "@/api/auth";
import SubmitButton from "@/components/SubmitButton";
import { useAuthContext } from "@/context/auth-context";
import { TutorDataTypes } from "@/typings/user";
import { decodeToken } from "@/utils/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type SigninDataTypes = Pick<TutorDataTypes, "email" | "pw">;
export default function Signin() {
  const { register, handleSubmit } = useForm<SigninDataTypes>();
  const router = useRouter();

  const { setUserId } = useAuthContext();
  const onSubmitHandler: SubmitHandler<SigninDataTypes> = async (data) => {
    try {
      const response = await signin(data);
      const decodededToken = decodeToken(response.accessToken);
      sessionStorage.setItem("accessToken", response.accessToken);
      sessionStorage.setItem("refreshToken", response.refreshToken);
      const decodedUserId =
        decodededToken && typeof decodededToken === "object"
          ? decodededToken.id
          : null;
      if (decodedUserId !== null && decodedUserId !== undefined) {
        setUserId(decodedUserId);
      } else {
        console.log("decodedUserId is null");
      }
      alert("로그인이 완료되었습니다.");
      router.push("/");
    } catch (error: any) {
      if (error.request.status === 404) {
        alert("존재하지 않는 계정입니다.");
      } else {
        alert("로그인에 실패하였습니다.");
      }
    }
  };
  return (
    <>
      <div className="max-w-[970px] mx-auto mt-[160px] mb-[320px]">
        {/* 로그인 form */}
        <form
          className="flex flex-col gap-y-6 max-w-[400px] mx-auto"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div>
            <label className="text-lg" htmlFor="email">
              이메일
            </label>
            <input
              {...register("email")}
              className="border-2 border-[#d9d9d9] rounded-lg h-[60px] px-4 w-[400px] mt-4"
              type="email"
              placeholder="이메일을 입력하세요."
            />
          </div>
          <div>
            <label className="text-lg " htmlFor="password">
              비밀번호
            </label>
            <input
              {...register("pw")}
              className="border-2 border-[#d9d9d9] rounded-lg h-[60px] px-4 w-[400px] mt-4"
              type="password"
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
        {/* 구글 간편 로그인*/}
        <div>
          <div className="mt-12 text-center">
            <SubmitButton title="구글로 가입하기" />
          </div>
        </div>
      </div>
    </>
  );
}
