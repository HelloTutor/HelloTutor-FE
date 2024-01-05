'use client';

import DashboardNavBar from '@/components/DashboardNavBar';
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
    navi() {
      console.log('최신순');
    },
  },
  {
    navTitle: '오래된순',
    fontSize: 'text-lg',

    navi() {
      console.log('오래된순');
    },
  },
  {
    navTitle: '조회순',
    fontSize: 'text-lg',
    navi() {
      console.log('조회순');
    },
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
      <section className='flex flex-col ml-[69px] mt-20'>
        <DashboardNavBar navItem={statusNavigationItems} />
        <SearchForm />
        <div className='flex'>
          <DashboardNavBar navItem={sortNavigationItems} />
          <Link href='/question/write-content'>
            <span>글쓰기</span>
          </Link>
        </div>
        <div>
          <ul>
            {questionList.map((post) => {
              return (
                <li key={post.id}>
                  <div>
                    <div>{post.status}</div>
                    <p>{post.title}</p>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: post.desc }} />
                  <div>
                    <div>
                      <span>{post.name}</span>/<span>{post.time}</span>
                    </div>
                    <div>
                      <span>{post.hits}</span>/<span>{post.numOfComments}</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div>페이지네이션</div>
        </div>
      </section>
    </div>
  );
}
