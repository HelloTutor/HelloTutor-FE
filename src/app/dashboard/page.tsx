'use client';

import Button from '@/components/Button';
import DashboardNavBar from '@/components/DashboardNavBar';
import HorizontalLine from '@/components/HorizontalLine';
import SearchForm from '@/components/SearchForm';
import Link from 'next/link';

const sortNavigationItems = [
  {
    navTitle: '최신순',
    fontSize: 'text-lg',
    navi() {},
  },
  {
    navTitle: '좋아요순',
    fontSize: 'text-lg',
    navi() {},
  },
  {
    navTitle: '댓글 많은 순',
    fontSize: 'text-lg',
    navi() {},
  },
];

/** 자유게시판 임시 리스트 */
const dashboardList = [
  {
    id: 1,
    title: '제목 1 입니다...',
    name: '이선균',
    time: '2024-01-04 20:20:59',
    hits: 20,
    numOfComments: 2,
  },
  {
    id: 2,
    title: '제목 2 입니다...',
    name: '아이유',
    time: '2024-01-04 20:20:59',
    hits: 10,
    numOfComments: 1,
  },
];
export default function Dashboard() {
  return (
    <section className='flex flex-col ml-[69px] mt-20 w-full gap-3'>
      <SearchForm />
      <div className='flex items-center border-b-4 border-gray-300 border-solid pb-1.5'>
        <DashboardNavBar navItem={sortNavigationItems} />
        <Link href='/question/write-content'>
          <Button title='글쓰기' type='button' />
        </Link>
      </div>

      <div>
        <HorizontalLine />
        <ul>
          {dashboardList.map((post) => {
            return (
              <li key={post.id} className='flex flex-col gap-2 pt-2 pb-2'>
                <p>{post.title}</p>
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
  );
}
