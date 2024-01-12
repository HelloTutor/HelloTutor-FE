export default function SelectTab({
  index,
  item,
  tab,
  setTab,
}: {
  index: number;
  item: string;
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <p
      className={`${
        tab === index && "font-semibold"
      } w-[56px] hover:cursor-pointer`}
      onClick={() => setTab(index)}
      key={index}
    >
      {item}
    </p>
  );
}
