'use client';

import Button from '@/components/Button';
import DashboardNavBar from '@/components/DashboardNavBar';
import HorizontalLine from '@/components/HorizontalLine';
import SearchForm from '@/components/SearchForm';
import SubjectSideBar from '@/components/SubjectSideBar';
import Link from 'next/link';

const statusNavigationItems = [
  {
    navTitle: '전체',
    fontSize: 'text-xl',
    navi() {
      console.log('전체');
    },
  },
  {
    navTitle: '미해결',
    fontSize: 'text-xl',

    navi() {
      console.log('미해결');
    },
  },
  {
    navTitle: '해결',
    fontSize: 'text-xl',
    navi() {
      console.log('해결');
    },
  },
];

const sortNavigationItems = [
  {
    navTitle: '최신순',
    fontSize: 'text-lg',
    navi() {},
  },
];

/** 질문글 임시 리스트 */
const questionList = [
  {
    id: 1,
    status: false,
    title: '제목 1 입니다...',
    desc: '<p>본문 1 입니다..</p>',
    name: '이선균',
    time: '2024-01-04 20:20:59',
    hits: 20,
    numOfComments: 2,
  },
  {
    id: 2,
    status: true,
    title: '제목 2 입니다...',
    desc: '<p>본문 2 입니다..</p>',
    name: '아이유',
    time: '2024-01-04 20:20:59',
    hits: 10,
    numOfComments: 1,
  },
];

export default function Question() {
  return (
    <div className='flex'>
      {/* left side bar */}
      <SubjectSideBar title='질문하기' />

      {/* content right */}
      <section className='flex flex-col ml-[69px] mt-20 w-full gap-5'>
        <DashboardNavBar navItem={statusNavigationItems} />
        <div className='mt-1.5' />
        <SearchForm />
        <div className='flex items-center border-b-4 border-gray-300 border-solid pb-1.5'>
          <DashboardNavBar navItem={sortNavigationItems} />
          <Link href='/question/write-content'>
            <Button title='글쓰기' type='button' />
          </Link>
        </div>

        <div className='mt-6'>
          <HorizontalLine />
          <ul>
            {questionList.map((post) => {
              return (
                <li key={post.id} className='flex flex-col gap-2 pt-2 pb-2'>
                  <div className='flex'>
                    <div className='flex justify-center w-20 mr-20'>
                      <div className='rounded-lg bg-gray-300 py-1 px-3'>
                        {post.status ? '해결' : '미해결'}
                      </div>
                    </div>
                    <p>{post.title}</p>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: post.desc }} />
                  <div className='flex justify-between'>
                    <div>
                      <span>{`이름: ${post.name}`}</span>/
                      <span>{`${post.time}시간 전`}</span>
                    </div>
                    <div>
                      <span>{`조회 수: ${post.hits}`}</span>/
                      <span>{`댓글 수: ${post.numOfComments}`}</span>
                    </div>
                  </div>
                  <HorizontalLine />
                </li>
              );
            })}
          </ul>

          <div className='flex justify-center mt-10'>
            {/* 임시 */}
            {'<'}&nbsp;&nbsp; 1 2 3 4 5 &nbsp;&nbsp;{' > >>'}
          </div>
        </div>
      </section>
    </div>
  );
}
