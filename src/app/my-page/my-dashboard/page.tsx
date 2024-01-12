"use client";
import AccountSideMenu from "@/app/my-page/components/AccountSideMenu";
import MyPageTitle from "../components/MyPageTitle";
import SelectTab from "../components/SelectTab";
import { useState } from "react";

export default function MyDashBoard() {
  const [tab, setTab] = useState(0);

  return (
    <div className="flex">
      <AccountSideMenu />
      {/* right side */}
      <section className="w-full ">
        <MyPageTitle title="자유게시판" />
        <div className="flex flex-col gap-y-4 mt-[48px] ml-[80px]">
          {/* tab */}
          <div className="flex gap-x-2">
            {["작성글", "댓글"].map((item, index) => (
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
            <div className="flex flex-col gap-y-4 w-[800px] mx-auto">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div key={item}>
                  <p className="font-semibold">작성글 제목</p>
                  <p className="text-gray-500">작성날짜 (2024.01.11)</p>
                </div>
              ))}
            </div>
          )}

          {/* 댓글 */}
          {tab === 1 && (
            <div className="flex flex-col gap-y-4 w-[800px] mx-auto">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div key={item}>
                  <p>작성 댓글</p>
                  <p> - 댓글 단 글의 제목</p>
                  <p className="text-gray-500">작성날짜 (2024.01.11)</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
