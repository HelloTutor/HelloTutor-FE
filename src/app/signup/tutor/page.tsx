'use client'
import SubmitButton from '@/components/SubmitButton';
import { useState } from 'react';

export default function Tutor(){
    const [userData, setUserData] = useState({
        email:'',
        password:'',
        confirm_password:'',
        name:'',
        subject:''
    })
    const handleInput = (e:React.ChangeEvent<HTMLFormElement>) =>{
        const {name, value} = e.target;
        setUserData({
            ...userData,
            [name]:value
        })
    }

    const {email, password, confirm_password, name, } = userData;

    return(<>
    
    <p className='text-5xl my-10 text-center'>회원가입</p>
    <div className='w-[520px] py-[60px]  mx-auto'>

        <form className='flex flex-col gap-y-8 max-w-[400px] mx-auto' onChange={handleInput}>
            <div>
                <label className='ml-2 mb-3' htmlFor='email'>이메일(ID)</label>
                <input id="email" name="email" value={email} type="text" placeholder="이메일을 입력해주세요." className='border-2 border-[#d9d9d9] rounded-lg h-[60px] px-4 w-[400px] shadow-md'></input>
            </div>
            <div>

                <label className='ml-2 mb-3' htmlFor='password'>비밀번호</label>
                <input id="password" name="password" value={password} type="password" placeholder="비밀번호를 입력해주세요." className='border-2 border-[#d9d9d9] rounded-lg h-[60px] px-4 w-[400px] shadow-md'></input>
            </div>
            <div>

                <label className='ml-2 mb-3' htmlFor='confirm_password'>비밀번호 확인</label>
                <input id="confirm_password" value={confirm_password} name="confirm_password" type="password" placeholder="비밀번호를 다시 입력해주세요." className='border-2 border-[#d9d9d9] rounded-lg h-[60px] px-4 w-[400px] shadow-md'></input>
                { userData.confirm_password &&userData.password !== userData.confirm_password && <p className='text-red-500'>비밀번호가 일치하지 않습니다.</p>}
            </div>
            <div>
                <label className='ml-2 mb-3'>이름</label>
                <input id="name" value={name} name="name" type="text" placeholder="이름을 입력해주세요." className='border-2 border-[#d9d9d9] rounded-lg h-[60px] px-4 w-[400px] shadow-md'></input>
            </div>
            <div>
                <label className='ml-2'>활동분야</label>
                <div className='flex gap-x-4 justify-center pt-3'>
                    <div>
                        <input type="radio" id="korean" name="subject" value="korean"/>
                        <label htmlFor="korean">국어</label>
                    </div>
                    <div>
                        <input type="radio" id="english" name="subject" value="english"/>
                        <label htmlFor="english">영어</label>
                    </div>
                    <div>
                        <input type="radio" id="math" name="subject" value="math"/>
                        <label htmlFor="math">수학</label>
                    </div>
                    <div>
                        <input type="radio" id="social" name="subject" value="social"/>
                        <label htmlFor="social">사회</label>
                    </div>
                    <div>
                        <input type="radio" id="science" name="subject" value="science"/>
                        <label htmlFor="science">과학</label>
                    </div>
                </div>
            </div>

            {/* 휴대전화 인증*/}
            

          

            <SubmitButton title="가입하기"/>
        </form>
        
    </div>        
    
    </>)
}   