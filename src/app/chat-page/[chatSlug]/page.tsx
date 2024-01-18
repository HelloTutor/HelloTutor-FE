'use client';

import Button from '@/components/Button';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  params: {
    chatSlug: string;
  };
};

export default function ChatPage({ params }: Props) {
  const [navType, setNavType] = useState('튜터프로필');

  return (
    <div className='flex'>
      <div className='flex-1'>채팅창 예정</div>
      <aside className='flex flex-col'>
        <nav className='flex gap-5 mb-5'>
          <Button
            title='튜터프로필'
            type='button'
            onClick={() => setNavType('튜터프로필')}
          />
          <Button
            title='거래정보'
            type='button'
            onClick={() => setNavType('거래정보')}
          />
        </nav>
        {navType === '튜터프로필' ? (
          <div>
            <div>이름: name</div>
            <div>소개: introduce</div>
            <div>경력: career</div>
            <div>가격: service_price</div>
            <div>답변 수: answer</div>
            <div>리뷰 수: review_count</div>
            <div>리뷰 평균 점수: review_avg</div>
            <div>과목: subject.map</div>
          </div>
        ) : (
          <div>
            <Link
              href={`/review/${params.chatSlug}`}
              className='flex justify-center mb-10'
            >
              <Button title='리뷰 작성' type='button'></Button>
            </Link>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2'>
                <span className='font-bold'>서비스 정보</span>
                <div className='flex flex-col gap-2'>
                  <div className='flex justify-between'>
                    <span className='text-sm'>과목</span>
                    <span className='text-sm'>국어</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-sm'>서비스 진행일</span>
                    <span className='text-sm'>2023.12.06 (수)</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <span className='font-bold'>결제 금액</span>
                <div className='flex justify-end'>
                  <span className='text-sm'>1,000 원</span>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <span className='font-bold'>결제정보</span>
                <div className='flex flex-col gap-2'>
                  <div className='flex justify-between'>
                    <span className='text-sm'>결제일시</span>
                    <span className='text-sm'>2023-12-06 15:00</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-sm'>결제수단</span>
                    <span className='text-sm'>신용카드 신한</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-sm'>결제방식</span>
                    <span className='text-sm'>일시불</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
