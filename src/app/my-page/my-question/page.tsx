"use client";
import AccountSideMenu from "@/app/my-page/components/AccountSideMenu";
import MyPageTitle from "../components/MyPageTitle";
import { useState } from "react";
import SelectTab from "../components/SelectTab";

export default function MyQuestion() {
  const [tab, setTab] = useState(0);
  return (
    <div className="flex">
      <AccountSideMenu />
      <section className="w-full ">
        <MyPageTitle title="질문하기" />
        <div className="flex flex-col gap-y-4 mt-[48px] ml-[80px]">
          {/* tab */}
          <div className="flex gap-x-2">
            {["작성글", "채팅내역"].map((item, index) => (
              <SelectTab
                index={index}
                item={item}
                tab={tab}
                setTab={setTab}
                key={item}
              />
            ))}
          </div>
          <hr />
          {/* 작성글 */}
          {tab === 0 && (
            // 작성글 components 추후 추가
            <></>
          )}
          {/* 채팅내역 */}
          {tab === 1 && (
            <div className="flex flex-col gap-y-5">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div
                  className="rounded-sm w-[700px] mx-auto hover:cursor-pointer"
                  key={index}
                >
                  <div className="flex items-center">
                    <div className="rounded-lg w-[60px] h-[60px] bg-black" />
                    <div className="ml-3">
                      <p className="font-semibold">닉네임</p>
                      <p>과목</p>
                      <p className=" text-gray-500">마지막 대화</p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <p>가격 1,000원</p>
                    <p>2024.1.4</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
