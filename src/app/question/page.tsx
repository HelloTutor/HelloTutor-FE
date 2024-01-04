import SearchForm from '@/components/SearchForm';
import SubjectSideBar from '@/components/SubjectSideBar';

export default function Question() {
  return (
    <div className='flex'>
      {/* left side bar */}
      <SubjectSideBar title='질문하기' />

      {/* content right */}
      <section className='flex flex-col ml-[69px] mt-20'>
        <SearchForm />
      </section>
    </div>
  );
}
