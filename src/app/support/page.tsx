'use client';

import FileUpload from '@/components/FileUpload';
import SubmitButton from '@/components/SubmitButton';
import TextField from '@/components/TextField';
import { useEffect, useState } from 'react';

type FormState = {
  email: string;
  title: string;
  description: string;
  joinEmail: string;
  phoneNumber: string;
  file: File | null;
};

export default function Support() {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    title: '',
    description: '',
    joinEmail: '',
    phoneNumber: '',
    file: null,
  });
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (file: File | null) => {
    setFormState((prevState) => ({
      ...prevState,
      file,
    }));
  };

  return (
    <form onSubmit={() => {}} className='mt-10'>
      <TextField
        title='이메일 주소'
        placeholder='ex) helloTutor@gmail.com'
        value={formState.email}
        onChange={handleInputChange}
        name='email'
        required={true}
      />
      <TextField
        title='제목'
        placeholder='ex) 선형대수학 문의합니다.'
        value={formState.title}
        onChange={handleInputChange}
        name='title'
        required={true}
      />
      <TextField
        title='설명'
        type='textarea'
        placeholder='이곳에 내용을 적어주세요!'
        value={formState.description}
        onChange={handleInputChange}
        name='description'
        required={true}
      />
      <TextField
        title='HelloTutor 가입 이메일'
        placeholder='ex) helloTutor@gmail.com'
        value={formState.joinEmail}
        onChange={handleInputChange}
        name='joinEmail'
        required={true}
      />
      <TextField
        title='HelloTutor 가입 휴대폰 번호'
        placeholder='ex) 010-1212-1213'
        value={formState.phoneNumber}
        onChange={handleInputChange}
        name='phoneNumber'
        required={true}
      />

      <FileUpload
        fileName={formState.title}
        setFileName={handleFileChange}
        isFileUploaded={isFileUploaded}
        setIsFileUploaded={setIsFileUploaded}
      />

      <div className='flex justify-center mt-20'>
        <SubmitButton title='제출' />
      </div>
    </form>
  );
}
