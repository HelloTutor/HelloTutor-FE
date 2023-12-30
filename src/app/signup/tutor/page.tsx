"use client";
import SubmitButton from "@/components/SubmitButton";
import { subjectKoEn } from "@/constants/subject";
import { SubmitHandler, useForm } from "react-hook-form";

interface TutorDataTypes {
  email: string;
  password: string;
  confirm_password: string;
  name: string;
  subject: string;
}

export default function Tutor() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TutorDataTypes>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
      name: "",
      subject: "",
    },
  });
  const onSubmitHandler: SubmitHandler<TutorDataTypes> = (data) =>
    console.log(data);

  return (
    <>
      <p className="text-5xl my-10 text-center">회원가입</p>
      <div className="w-[520px] py-[60px]  mx-auto">
        <form
          className="flex flex-col gap-y-8 max-w-[400px] mx-auto"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div>
            <label className="ml-2 mb-3" htmlFor="email">
              이메일(ID)
            </label>
            <input
              id="email"
              placeholder="이메일을 입력해주세요."
              className="border-2 border-[#d9d9d9] rounded-lg h-[60px] px-4 w-[400px] shadow-md"
              {...register("email", {
                required: "이메일은 필수 값입니다.",
                pattern: {
                  value: /^[a-zA-Z0-9_\.\.-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                  message: "이메일 형식이 올바르지 않습니다.",
                },
              })}
            />
            <p className="relative text-red-500 h-[10px]">
              {errors?.email?.message}
            </p>
          </div>
          <div>
            <label className="ml-2 mb-3" htmlFor="password">
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              className="border-2 border-[#d9d9d9] rounded-lg h-[60px] px-4 w-[400px] shadow-md"
              {...register("password", {
                required: "비밀번호는 필수 값입니다.",
                minLength: {
                  value: 8,
                  message: "8자리 이상 비밀번호를 사용하세요",
                },
                pattern: {
                  value: /^[a-zA-Z0-9]{8,10}/,
                  message: "영문, 숫자 포함 8 ~ 10자로 입력해주세요",
                },
              })}
            />
            <p className="relative text-red-500 h-[10px]">
              {errors?.password?.message}
            </p>
          </div>
          <div>
            <label className="ml-2 mb-3" htmlFor="confirm_password">
              비밀번호 확인
            </label>
            <input
              id="confirm_password"
              type="password"
              placeholder="비밀번호를 다시 입력해주세요."
              className="border-2 border-[#d9d9d9] rounded-lg h-[60px] px-4 w-[400px] shadow-md"
              {...register("confirm_password", {
                required: "비밀번호를 확인해주세요",
                validate: {
                  checkPassword: (value) =>
                    value === watch("password") ||
                    "비밀번호가 일치하지 않습니다.",
                },
              })}
            />
            <p className="relative text-red-500 h-[10px]">
              {errors?.confirm_password?.message}
            </p>
          </div>
          <div>
            <label className="ml-2 mb-3">이름</label>
            <input
              id="name"
              type="text"
              placeholder="이름을 입력해주세요."
              className="border-2 border-[#d9d9d9] rounded-lg h-[60px] px-4 w-[400px] shadow-md"
              {...register("name", {
                required: "이름은 필수 값입니다.",
              })}
            />
            <p className="relative text-red-500 h-[10px]">
              {errors?.name?.message}
            </p>
          </div>
          <div>
            <label className="ml-2">활동분야</label>
            <div className="flex gap-x-4 justify-center pt-3">
              {subjectKoEn.map((subject) => (
                <div key={subject.en}>
                  <input
                    type="radio"
                    id={subject.en}
                    value={subject.en}
                    {...register("subject")}
                  />
                  <label htmlFor={subject.en}>{subject.ko}</label>
                </div>
              ))}
            </div>
          </div>

          {/* 휴대전화 인증*/}

          <SubmitButton title="가입하기" />
        </form>
      </div>
    </>
  );
}
