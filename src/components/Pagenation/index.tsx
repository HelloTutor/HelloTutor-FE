import Pagination from 'react-js-pagination';

export default function Pagenation() {
  return (
    <div className='flex justify-center'>
      <Pagination
        // 현재 페이지
        activePage={1}
        // 페이지당 보여질 아이템 수
        itemsCountPerPage={5}
        // 총 아이템수
        totalItemsCount={300}
        // 표시할 총 페이지 수
        pageRangeDisplayed={5}
        onChange={() => {}}
        // <ul> 태그 의 클래스 이름
        innerClass='flex justify-center item items-center'
        // <li> 태그 의 기본 클래스 (배경 입힐시 bg-gray-500 hover:bg-gray-700 사용)
        itemClass='px-2 text-gray-500 hover:text-gray-600 rounded text-lg'
        // <li> 첫 번째 태그 의 클래스
        itemClassFirst='my-custom-class'
        // 마지막 <li> 태그 의 클래스
        itemClassLast='my-custom-class'
        // <li> 활성 태그 의 클래스 이름
        activeClass='text-gray-800'
        // 태그 의 기본 클래스
        // linkClass=''
      />
    </div>
  );
}
