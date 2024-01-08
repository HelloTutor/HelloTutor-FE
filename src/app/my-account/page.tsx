"use client";
import AccountSideMenu from "@/components/AccountSideMenu";
import SubmitButton from "@/components/SubmitButton";
import { Controller, useForm } from "react-hook-form";

interface MyAccountTypes {
  nickname: string;
  email: string;
  password: string;
  phone: string;
}
export default function MyAccountPage() {
  const { handleSubmit, control, setValue } = useForm<MyAccountTypes>();
  const onSubmit = () => console.log("submit");
  return (
    <div className="flex">
      <AccountSideMenu />
      {/* right side */}
      <section className="w-full ">
        <p className="ht-md-title block ml-20 mt-10">계정설정</p>
        <div className="relative flex flex-col items-center gap-y-8">
          <div className="rounded-full w-[100px] h-[100px] bg-black" />
          {/* 닉네임, 이메일, 비밀번호, 휴대전화 번호 변경 form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-2">
                <label htmlFor="nickname" className="font-bold text-lg">
                  닉네임
                </label>
                <Controller
                  name="nickname"
                  control={control}
                  defaultValue={"nickname"}
                  render={({ field }) => <input {...field} />}
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="email" className="font-bold text-lg">
                  이메일
                </label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue={"tutor@example.com"}
                  render={({ field }) => <input {...field} />}
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="password" className="font-bold text-lg">
                  비밀번호
                </label>
                <Controller
                  name="password"
                  control={control}
                  defaultValue={"password"}
                  render={({ field }) => <input {...field} />}
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="phone" className="font-bold text-lg">
                  휴대전화 번호
                </label>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue={"010-1234-5678"}
                  render={({ field }) => <input {...field} />}
                />
              </div>
            </div>
            <SubmitButton title="변경하기" className="mt-10" />
          </form>
          <button
            onClick={() => console.log("탈퇴하기")}
            className="right-0 underline "
          >
            탈퇴하기
          </button>
        </div>
      </section>
    </div>
  );
}
