'use client';

import FileUpload from '@/components/FileUpload';
import TextField from '@/components/TextField';

export default function Support() {
  return (
    <>
      <TextField
        title='이메일 주소'
        placeholder='ex) helloTutor@gmail.com'
        required={true}
      />
      <TextField
        title='제목'
        placeholder='ex) 선형대수학 문의합니다.'
        required={true}
      />
      <TextField
        title='설명'
        type='textarea'
        placeholder='이곳에 내용을 적어주세요!'
        required={true}
      />
      <TextField
        title='HelloTutor 가입 이메일'
        placeholder='ex) helloTutor@gmail.com'
        required={true}
      />
      <TextField
        title='HelloTutor 가입 휴대폰 번호'
        placeholder='ex) 010-1212-1213'
        required={true}
      />

      <FileUpload />
    </>
  );
}
