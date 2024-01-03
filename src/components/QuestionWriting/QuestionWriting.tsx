import React from 'react';
import TextEditor from '../QuillEditor';

export default function QuestionWriting({ setHtml, html }: any) {
  return (
    <form>
      <TextEditor setHtml={setHtml} html={html} />
    </form>
  );
}
