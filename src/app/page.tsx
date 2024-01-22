"use client";
import { NextArrow, PrevArrow } from "@/components/SlideButton";
import { subjectArr, subjectKoEn } from "@/constants/subject";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Slider, { Settings } from "react-slick";
export default function Home() {
  const settings: Settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className=" max-w-[970px] mx-auto">
      {/* 헤더 이미지 */}
      <div className=" bg-black w-full h-72" />
      {/* 과목 이미지 */}
      <div className="flex gap-x-6 my-16 justify-center">
        {subjectKoEn.map((subject) => (
          <Link key={subject.en} href={`/find-tutor?subject=${subject.en}`}>
            <div className="bg-black w-[123px] h-[123px]" />
            <p className="mt-2 text-center">{subject.ko}</p>
          </Link>
        ))}
      </div>
      {/* 지금 인기있는 tutor */}
      <div className="mb-16">
        <p className="ht-h2-title">지금 인기있는 tutor</p>
        {/* subject filter banners 추후 components화 */}
        <div className="flex gap-x-5 mt-6 ml-8">
          {subjectArr.map((subject) => (
            <button
              className="bg-[#d9d9d9] rounded-3xl px-4 py-1"
              key={subject}
            >
              <p>{subject}</p>
            </button>
          ))}
        </div>

        {/* tutor slide */}
        <Slider {...settings} className="max-w-[900px] pt-10 mx-auto relative">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
            <div className=" bg-slate-400 max-w-[168px] h-[168px]" key={number}>
              <span>{number}</span>
            </div>
          ))}
        </Slider>
      </div>
      {/* 실시간 질문 */}
      <div className="mb-16">
        <p className="ht-h2-title">실시간 질문</p>
        <div className="flex gap-x-5 mt-6 ml-8">
          {subjectArr.map((subject) => (
            <button
              className="bg-[#d9d9d9] rounded-3xl px-4 py-1"
              key={subject}
            >
              <p>{subject}</p>
            </button>
          ))}
        </div>
      </div>
      {/* 오늘의 인기있는 글 */}
      <p className="ht-h2-title">오늘의 인기있는 글</p>
    </div>
  );
}
