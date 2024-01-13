'use client';

import { useRef, useState } from 'react';

export default function FileUpload() {
  const fileInput = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState('');
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setIsFileUploaded(true);
    }
  };

  return (
    <>
      <label htmlFor='file' className='text-gray-600'>
        첨부 파일
      </label>
      <div className='relative py-6 px-6 border-2 border-dashed border-gray-300 rounded'>
        {!isFileUploaded && (
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center transition duration-200'>
            <span className='text-gray-500'>
              <span className='text-gray-300'>파일 추가</span> 또는 파일을
              여기로 드래그
            </span>
          </div>
        )}
        {isFileUploaded && (
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white'>
            <span className='text-gray-500'>{fileName}</span>
          </div>
        )}
        <input
          id='file'
          ref={fileInput}
          type='file'
          className='absolute w-full h-full opacity-0 cursor-pointer z-10 top-0'
          onChange={handleFileChange}
        />
      </div>
    </>
  );
}
