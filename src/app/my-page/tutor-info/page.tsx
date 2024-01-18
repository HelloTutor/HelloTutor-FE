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

interface TutorInfoTypes {
  introduction: string;
  detailedDescription: string;
  career: string;
  experience: { newExperience: string }[];
  servicePrice: string;
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
            <label htmlFor="careerYear">총 경력 기간</label>
            <Controller
              name="career"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <option value={item} key={item}>
                      {item}년차
                    </option>
                  ))}
                </select>
              )}
            />
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
