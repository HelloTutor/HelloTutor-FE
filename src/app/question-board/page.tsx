'use client';

import QuestionWriting from '@/components/QuestionWriting/QuestionWriting';
import React, { useState } from 'react';

export default function QuestionBoard() {
  const [html, setHtml] = useState('');

  return (
    <div>
      <QuestionWriting setHtml={setHtml} html={html} />
    </div>
  );
}
