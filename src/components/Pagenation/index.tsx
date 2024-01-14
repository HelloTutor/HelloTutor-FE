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
        // 페이징 버튼 내부에 적용될 CSS 클래스를 지정
        innerClass='flex justify-center'
        // 페이지 아이템에 적용될 CSS 클래스 지정 (배경 입힐시 bg-gray-500 hover:bg-gray-700 사용)
        itemClass='px-2 text-black hover:text-gray-600 rounded'
        // 링크에 적용될 CSS 클래스 지정
        linkClass='text-lg'
      ></Pagination>
    </div>
  );
}
