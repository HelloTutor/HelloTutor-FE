import SubjectSideBar from "@/components/SubjectSideBar";

export default function Question() {
  return (
    <div className="flex">
      {/* left side bar */}
      <SubjectSideBar title="질문하기" />
      {/* content right */}
      <section></section>
    </div>
  );
}
