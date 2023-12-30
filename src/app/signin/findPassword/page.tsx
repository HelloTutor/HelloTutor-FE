import SubmitButton from "@/components/SubmitButton";

export default function FindPassword() {
  return (
    <>
      <p className="text-5xl my-10 text-center">비밀번호 찾기</p>
      <div className="bg-[#fdfbfb] w-[520px] py-[60px]  mx-auto ">
        <form className="flex flex-col gap-y-12 max-w-[400px] mx-auto">
          <div>
            <label className="ml-2 mb-3" htmlFor="email">
              가입한 이메일 주소를 입력해 주세요.
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="example@hellotutor.com"
              className="border-2 border-[#d9d9d9] rounded-lg h-[60px] px-4 w-[400px] shadow-md"
            />
          </div>
          <div>
            <p>가입하신 이메일 주소를 입력해 주시면</p>
            <p>새로운 비밀번호를 설정 가능 링크를 보내드립니다.</p>
          </div>
          <SubmitButton title="이메일 전송하기" />
        </form>
      </div>
    </>
  );
}
