'use client';

import { writeContent } from '@/api/auth';
import QuestionWriting from '@/components/QuestionWriting';
import { useState } from 'react';

export default function WriteContent() {
  const [html, setHtml] = useState('');
  console.log('test');
  const testApi = async () => {
    const data = await writeContent('/free', {
      title: '테스트',
      content: [
        {
          type: 'p',
          attributes: {},
          children: [{ type: 'text', textContent: 'asdf' }],
        },
        {
          type: 'p',
          attributes: {},
          children: [{ type: 'br', attributes: {}, children: [] }],
        },
        {
          type: 'p',
          attributes: {},
          children: [
            { type: 'text', textContent: 'asdf' },
            {
              type: 'span',
              attributes: { style: 'color: rgb(230, 0, 0);' },
              children: [{ type: 'text', textContent: 'test' }],
            },
          ],
        },
      ],
    });

    console.log(data);
  };
  testApi();
  return (
    <div>
      <QuestionWriting setHtml={setHtml} html={html} />
    </div>
  );
}
