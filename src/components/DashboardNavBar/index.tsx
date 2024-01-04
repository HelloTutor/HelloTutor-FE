'use client';

interface NavItem {
  navTitle: string; // navTitle은 문자열로 가정합니다. 필요에 따라 타입을 변경할 수 있습니다.
  navi: () => void; // navi는 함수로 가정하고, 반환값이 없는 경우 void로 설정합니다.
}

export default function DashboardNavBar<T extends NavItem>({
  navItem,
}: {
  navItem: T[];
}) {
  return (
    <ul className='flex gap-8'>
      {navItem.map((item, index) => {
        return (
          <li key={index}>
            <button onClick={item.navi}>
              <span className='text-xl'>{item.navTitle}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
