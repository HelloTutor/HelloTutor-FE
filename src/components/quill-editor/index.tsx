import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useState, useMemo, useRef, useEffect } from 'react';
// import styled from 'styled-components';
// import { useForm } from 'react-hook-form';
// import moment from 'moment';
// import { storage } from '../common/firebase';
// import {
//   ref,
//   getDownloadURL,
//   uploadBytes,
//   deleteObject,
// } from 'firebase/storage';
// import { communityWrite } from '../api/backEndApi';
// import Loader from './Loader';
// import { getCookie } from '../common/utills';

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    return function comp({ forwardedRef, ...props }: any) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false, loading: () => <div>로딩</div> }
);

export default function TextEditor() {
  const [title, setTitle] = useState('');
  const [dom, setDom] = useState('');
  const [img, setImg] = useState([] as any);

  const quillRef = useRef<any>();

  const imageHandler = () => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');

    input.click();

    input.onchange = async (event: any) => {
      const file: File = event?.target?.files[0];

      const path =
        'images/community/' +
        new Date().getFullYear() +
        '년/' +
        (new Date().getMonth() + 1) +
        '월/';
    };
  };

  const quillImage = useMemo(() => {
    const result = Array.from(
      dom.replace(/amp;/g, '').matchAll(/<img[^>]+src=["']([^'">]+)['"]/gi)
    );
    return result.map((item) => item.pop() || '');
  }, [dom]);

  useEffect(() => {
    const dellFile = img?.filter((item: any) => !quillImage.includes(item));
    if (dellFile.length) {
      dellFile.forEach((item: any) => {});
    }
  }, [img, quillImage]);

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'align',
    'strike',
    'script',
    'blockquote',
    'background',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'code-block',
  ];

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],

          [{ header: 1 }, { header: 2 }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }],
          [{ indent: '-1' }, { indent: '+1' }],
          [{ direction: 'rtl' }],

          [{ size: ['small', false, 'large', 'huge'] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }],
          [{ font: [] }],
          [{ align: [] }],

          ['clean'],
          ['image', 'video'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  const onValid = () => {
    const requestObj = {
      title: title,
      content: quillRef.current?.editor.getText(),
      img: JSON.stringify(img),
      dom: dom,
    };
  };

  return (
    <form>
      <span>제목</span>

      <ReactQuill
        forwardedRef={quillRef}
        modules={modules}
        formats={formats}
        theme='snow'
        style={{ height: '90%' }}
        onChange={setDom}
      />
    </form>
  );
}
