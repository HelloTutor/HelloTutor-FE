import Link from 'next/link';

export default function Signin() {
    return(<>
    
    <div className='max-w-[970px] mx-auto mt-[160px]'>
    {/* 로그인 form */}
        <form className='flex flex-col gap-y-6 max-w-[400px] mx-auto'>
            <label>
                <p className='text-lg mb-4'>이메일</p>
                <input className='border-2 border-[#d9d9d9] rounded-lg h-[64px] px-4 w-[400px]' type="email" name="email" placeholder='이메일을 입력하세요.'/>
            </label>
            <label>
                <p className='text-lg mb-4'>비밀번호</p>
                <input className='border-2 border-[#d9d9d9] rounded-lg h-[64px] px-4 w-[400px]' type="password" name="password" />
            </label>
            <button className='bg-[#d9d9d9] rounded-lg h-[64px] text-lg'>로그인</button>
        </form>


        {/* 비밀번호 찾기 &  회원가입 */}
        <div className='max-w-[400px] text-center mt-12 flex justify-between mx-auto underline underline-offset-4'>
                <Link href="/signin/findPassword" ><span>비밀번호 찾기</span></Link>
                <Link href="/signup"><span>회원가입</span></Link>
            </div>
        </div>

        {/* 구글 & 카카오 간편 로그인 추후 이미지로 교체*/}
        <div>
            <div className='mt-12 text-center'>
                    <button className='bg-[#d9d9d9] rounded-full  text-lg'>구글</button>
                    <button className='bg-[#d9d9d9] rounded-full  text-lg ml-6'>카카오</button>
            </div>
        </div>
    
    </>)
}