'use client';

import { writeContent } from '@/api/auth';
import QuestionWriting from '@/components/QuestionWriting';
import { useState } from 'react';

export default function WriteContent() {
  const [html, setHtml] = useState('');

  return (
    <div>
      <QuestionWriting setHtml={setHtml} html={html} />
    </div>
  );
}
