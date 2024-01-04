'use client';

import DashboardNavBar from '@/components/DashboardNavBar';
import SearchForm from '@/components/SearchForm';
import SubjectSideBar from '@/components/SubjectSideBar';

const navItemMap = [
  {
    navTitle: '전체',
    navi() {
      console.log('전체');
    },
  },
  {
    navTitle: '미해결',
    navi() {
      console.log('미해결');
    },
  },
  {
    navTitle: '해결',
    navi() {
      console.log('해결');
    },
  },
];

export default function Question() {
  return (
    <div className='flex'>
      {/* left side bar */}
      <SubjectSideBar title='질문하기' />

      {/* content right */}
      <section className='flex flex-col ml-[69px] mt-20'>
        <DashboardNavBar navItem={navItemMap} />
        <SearchForm />
      </section>
    </div>
  );
}
