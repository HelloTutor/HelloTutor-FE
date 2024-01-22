import { useEffect, useState } from "react";

export default function AgreeOfTos({
  setPolicy,
  policy,
  policyError,
}: {
  setPolicy: React.Dispatch<React.SetStateAction<boolean>>;
  policy: boolean;
  policyError: boolean;
}) {
  // 필수동의, 개인정보 동의, 14세 이상 동의 체크박스 상태 관리
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [age, setAge] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAllCheck = () => {
    if (!policy) {
      setTerms(true);
      setPrivacy(true);
      setAge(true);
    } else {
      setTerms(false);
      setPrivacy(false);
      setAge(false);
    }
  };
  useEffect(() => {
    if (terms && privacy && age) {
      setPolicy(true);
    } else {
      setPolicy(false);
    }
  }, [terms, privacy, age, setPolicy]);
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={policy}
            className="w-[20px] h-[20px] border-2 border-[#d9d9d9] rounded-lg"
            onChange={() => {
              handleAllCheck();
              setPolicy(!policy);
            }}
          />
          <p>전체동의</p>
          {policyError && <p className="text-red-500">필수 동의 사항입니다.</p>}
        </div>
        <hr />
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={terms}
            className="w-[20px] h-[20px] border-2 border-[#d9d9d9] rounded-lg"
            onChange={(e) => {
              setTerms(e.target.checked);
            }}
          />
          <div className=" flex ">
            <p>(필수) 이용약관 동의</p>
            <button
              className="text-blue-500 ml-2"
              type="button"
              onClick={() => setModalOpen(true)}
            >
              보기
            </button>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={privacy}
            className="w-[20px] h-[20px] border-2 border-[#d9d9d9] rounded-lg"
            onChange={(e) => {
              setPrivacy(e.target.checked);
            }}
          />
          <div className="flex ">
            <p>(필수) 개인정보 수집 및 이용동의</p>
            <button
              className="text-blue-500 ml-2"
              onClick={() => setModalOpen(true)}
            >
              보기
            </button>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={age}
            className="w-[20px] h-[20px] border-2 border-[#d9d9d9] rounded-lg"
            onChange={(e) => {
              setAge(e.target.checked);
            }}
          />
          <p>(필수) 14세 이상 입니다</p>
        </div>
      </div>

      {/* 이용약관 모달 */}
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-white w-[800px] h-[600px] rounded-lg overflow-auto">
            <button
              className="absolute right-[20px] top-[10px]"
              onClick={() => setModalOpen(false)}
            >
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
