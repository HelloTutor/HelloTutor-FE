function NavBar(){
    return(
        <div className='h-[96px] flex justify-between items-center text-xl font-medium'>
            {/* menu left */}
        <div className='flex'>
            {/* home icon */}
            <p className='mr-[32px]'>HelloTutor</p>
            {/* menu list */}
            <ul className='flex gap-x-6 min-w-[290px]'>
                <li>질문하기</li>
                <li>tutor 찾기</li>
                <li>자유게시판</li>
            </ul>
        </div>
        {/* menu right - sign in/up button */}
        <div className='flex gap-x-6 min-w-[146px]'>
            <button>로그인</button>
            <button>회원가입</button>
        </div>
        </div>
    )
}

export default NavBar;