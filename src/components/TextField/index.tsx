'use client';

import { useState } from 'react';

type Props = {
  title: string;
  type?: string;
  placeholder: string;
  required: boolean;
};
export default function TextField({
  title,
  type = 'text',
  placeholder,
  required,
}: Props) {
  const [value, setValue] = useState('');

  return (
    <div className='flex flex-col mb-8'>
      <label htmlFor={title} className='mb-2'>
        <span className='text-gray-600'>{title}</span>{' '}
        {required && <span className='text-red-600'>*</span>}
      </label>
      {type === 'textarea' ? (
        <div className='flex flex-col'>
          <textarea
            value={value}
            id={title}
            placeholder={placeholder}
            rows={10}
            onChange={(e) => setValue(e.target.value)}
            className='flex-1 border border-solid rounded border-gray-300 p-2'
          />
          <span className='text-gray-400 mt-1 text-sm'>
            요청에 관한 세부 정보를 입력하세요.
          </span>
        </div>
      ) : (
        <input
          className='flex-1 border border-solid rounded border-gray-300 p-2'
          id={title}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
}
