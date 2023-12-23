'use client';

import TextEditor from '@/components/quill-editor';
import QuillWrapDoesntUseSSR from '@/components/quill-editor';
import React, { useRef } from 'react';

export default function QuestionWriting() {
  return (
    <div>
      <TextEditor />
    </div>
  );
}
