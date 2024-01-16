"use client";

import { subjectArr } from "@/constants/subject";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";

import { useState } from "react";

export default function FindTutorPage() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const isTutor = false;

  return (
    <div className="max-w-[814px] mt-[42px]  flex flex-col gap-y-6 mx-auto">
      <div className="flex items-center justify-between">
        <div className="w-[110px] h-[95px] bg-black" />
        {/* 학생은 찜하기 & 채팅하기 버튼, tutor 본인 계정은 프로필 수정하기 */}
        <div className="flex flex-col gap-y-2 text-center">
          <button
            className="flex  items-center"
            onClick={() => setIsLiked(!isLiked)}
          >
            {isLiked ? (
              <HeartIcon className="w-[30px] mr-2" />
            ) : (
              <HeartIconOutline className="w-[30px] mr-2" />
            )}
            <p> 찜하기</p>
          </button>
          <button type="button" className="border-2 px-4 py-2 rounded-md ">
            채팅하기
          </button>
        </div>
      </div>
      <p className="text-3xl">tutor 이름</p>
      <div className="flex gap-x-5">
        {subjectArr.map((subject) => (
          <button className="bg-[#d9d9d9] rounded-3xl px-4 py-1" key={subject}>
            <p>{subject}</p>
          </button>
        ))}
      </div>
      <div className="bg-[#d9d9d9] w-full h-[80px] flex items-center justify-center gap-x-40 text-center ">
        <div>
          <p className="font-bold">123</p>
          <p>고용횟수</p>
        </div>
        <div>
          <p className="font-bold">5.0</p>
          <p>평점</p>
        </div>
        <div>
          <p className="font-bold">2년</p>
          <p>총 경력</p>
        </div>
      </div>
      {/* 자기소개 */}
      <div>
        {/* 자기소개 탭 */}
        <div className="flex gap-x-6">
          <button
            type="button"
            onClick={() => setSelectedTab(1)}
            className={`${selectedTab === 1 && "font-bold"} w-[71px]`}
          >
            tutor 정보
          </button>
          <button
            type="button"
            onClick={() => setSelectedTab(2)}
            className={`${selectedTab === 2 && "font-bold"} w-[31px]`}
          >
            리뷰
          </button>
        </div>
        <hr className="my-4" />
        {/* tutor정보 */}
        {selectedTab === 1 && (
          <div className="flex flex-col gap-y-3">
            <p>상세설명</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus, quibusdam, voluptate, fugiat voluptas quia
              reprehenderit voluptatum quos molestiae doloribus doloremque
              eligendi? Quisquam voluptatibus, quibusdam, voluptate, fugiat
              voluptas quia reprehenderit voluptatum quos molestiae doloribus
              doloremque eligendi?
            </p>
            <p>경력사항</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus, quibusdam, voluptate, fugiat voluptas quia
              reprehenderit voluptatum quos molestiae doloribus doloremque
              eligendi? Quisquam voluptatibus, quibusdam, voluptate, fugiat
              voluptas quia reprehenderit voluptatum quos molestiae doloribus
              doloremque eligendi?
            </p>
          </div>
        )}
        {/* 리뷰 */}
        {selectedTab === 2 && (
          <>
            <div className="flex gap-x-6  items-center mb-5">
              <p className="text-4xl">5.0</p>
              <div>
                <p>⭐️⭐️⭐️⭐️⭐️</p>
                <p className=" text-slate-400">4개 리뷰</p>
              </div>
            </div>
            <hr />
            {/* 리뷰코멘트 */}
            {[1, 2, 3, 4].map((review) => (
              <div className="flex flex-col gap-y-1 my-3 ml-3" key={review}>
                <p>닉네임</p>
                <p>⭐️ 5.0</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptatibus, quibusdam, voluptate, fugiat voluptas
                  quia reprehenderit voluptatum quos molestiae doloribus
                  doloremque eligendi? Quisquam voluptatibus, quibusdam,
                  voluptate, fugiat voluptas quia reprehenderit voluptatum quos
                  molestiae doloribus doloremque eligendi?
                </p>
                <p>2021.08.01</p>
                <hr className="mt-2" />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
