import Link from 'next/link';

function NavBar(){
    return(
        <nav className='h-[96px] flex justify-between items-center text-xl font-medium'>
            {/* menu left */}
        <div className='flex'>
            {/* home icon */}
            <p className='mr-[32px]'>HelloTutor</p>
            {/* menu list */}
            <ul className='flex gap-x-6 min-w-[290px]'>
                <li><Link href="/question">질문하기</Link></li>
                <li><Link href="/findTutor">tutor 찾기</Link></li>
                <li><Link href="/dashboard">자유게시판</Link></li>
            </ul>
        </div>
        {/* menu right - sign in/up button */}
        <div className='flex gap-x-6 min-w-[146px]'>
            <button>로그인</button>
            <button>회원가입</button>
        </div>
        </nav>
    )
}

export default NavBar;