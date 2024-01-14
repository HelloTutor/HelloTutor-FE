import Pagination from 'react-js-pagination';

export default function Pagenation() {
  return (
    <div>
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
      ></Pagination>
    </div>
  );
}
