"use client";
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import AccountSideMenu from "../components/AccountSideMenu";
import MyPageTitle from "../components/MyPageTitle";
import { TrashIcon } from "@heroicons/react/24/outline";
import { subjectKoEn } from "@/constants/subject";

interface TutorInfoTypes {
  introduction: string;
  detailedDescription: string;
  career: number;
  experience: { newExperience: string }[];
  servicePrice: string;
  subject: string[];
}
export default function TutorInfo() {
  const { handleSubmit, control, register } = useForm<TutorInfoTypes>({
    defaultValues: {
      experience: [{ newExperience: "2" }, { newExperience: "3" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "experience",
    control,
  });
  const onSubmit: SubmitHandler<TutorInfoTypes> = (data) => {
    console.log(data);
    alert("수정사항이 반영되었습니다.");
  };

  return (
    <div className="flex">
      <AccountSideMenu />
      <section className="w-full">
        <MyPageTitle title="튜터 정보" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[400px] mx-auto mt-16 flex flex-col gap-y-8"
        >
          <div className="flex flex-col gap-y-2">
            <label htmlFor="introduction">한줄소개</label>
            <Controller
              name="introduction"
              control={control}
              defaultValue="어쩌구저쩌구"
              render={({ field }) => (
                <input className=" border-b-2" {...field} />
              )}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="introduction">상세설명</label>
            <Controller
              name="detailedDescription"
              control={control}
              defaultValue="어쩌구저쩌구"
              render={({ field }) => (
                <textarea className="border-2 min-h-[120px]" {...field} />
              )}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="subject">강의 가능 과목</label>

            <div className="flex gap-x-4 justify-center">
              {subjectKoEn.map((item) => (
                <div key={item.en}>
                  <input
                    type="checkbox"
                    value={item.en}
                    key={item.en}
                    {...register("subject")}
                    className="mr-1"
                  />
                  <label>{item.ko}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="careerYear">총 경력 기간</label>

            <div className="flex ">
              <input
                type="number"
                defaultValue={"1"}
                {...register("career")}
                className="w-10 ml-2"
              />
              <label>년차</label>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="experience">경력사항</label>
            {fields.map((field, index) => (
              <div key={field.id}>
                <div className="flex">
                  <input
                    className="border-2 w-full"
                    {...register(`experience.${index}.newExperience`, {
                      required: true,
                    })}
                  />

                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="w-6 ml-2"
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => append({ newExperience: "" })}
              className="w-8 bg-gray-200 "
            >
              +
            </button>
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="money">서비스 가격(단위: 원)</label>
            <Controller
              name="servicePrice"
              control={control}
              defaultValue={"1000"}
              render={({ field }) => (
                <input className=" bg-gray-200" {...field} />
              )}
            />
          </div>

          <button type="submit">수정하기</button>
        </form>
      </section>
    </div>
  );
}
