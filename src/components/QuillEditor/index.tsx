import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useMemo, useRef } from "react";
import "./test.css";
import { domTreeToJson } from "@/utils/domTreeToJson";
import { applyCssClasses } from "@/utils/applyCssClasses";
import { jsonToHtml } from "@/utils/jsonToHtml";

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");

    // class 생성을 위해 임시로 만들어 두었습니다.
    let Block = RQ.Quill.import("blots/block/embed");
    class TestBlot extends Block {}
    TestBlot.blotName = "test";
    TestBlot.tagName = "p";
    TestBlot.className = "test";
    RQ.Quill.register(TestBlot);

    return function comp({ forwardedRef, ...props }: any) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false, loading: () => <div>Loading...</div> }
);

// 임시
const imageApi = (img: any): Promise<any> => {
  return new Promise(() => {});
};

export default function TextEditor({ setHtml, html }: any) {
  const quillRef = useRef<any>();

  let cssClasses: any = {
    color: {
      red: "test",
      "rgb(200, 0, 0)": "test2",
    },
    "background-color": {
      red: "test3",
      "rgb(200, 0, 0)": "test4",
    },
    width: {
      "200px": "test5",
      "50%": "test6",
    },
  };

  const handleChange = (content: any, delta: any, source: any, editor: any) => {
    let domTree = new DOMParser();
    let doc = domTree.parseFromString(editor.getHTML(), "text/html");

    let iterator = document.createNodeIterator(doc.body, NodeFilter.SHOW_ALL);
    let node;

    let children = [];
    while ((node = iterator.nextNode())) {
      if (node.parentNode === doc.body) {
        let jsonObj = domTreeToJson(node);
        applyCssClasses(jsonObj, cssClasses);
        children.push(jsonObj);
      }
    }
    // console.log(children);
    // console.log(jsonToHtml(children));
    // let jsonStr = JSON.stringify(children);
    // console.log(jsonStr);
    setHtml(jsonToHtml(children));
  };

  // 임시
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const file = input.files ? input.files[0] : null;

      try {
        const res = await imageApi({ img: file });
        const imgUrl = res.data.imgUrl;
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range.index, "image", imgUrl);
        editor.setSelection(range.index + 1);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code-block"],

          [{ header: 1 }, { header: 2 }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ direction: "rtl" }],

          [{ size: ["small", false, "large", "huge"] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }],
          [{ font: [] }],
          [{ align: [] }],

          ["clean"],
          ["link", "image", "video"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "strike",
    "script",
    "blockquote",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "code-block",
    "test",
  ];

  return (
    <div>
      <span>테스트</span>

      <ReactQuill
        forwardedRef={quillRef}
        onChange={handleChange}
        // className={}
        modules={modules}
        formats={formats}
        value={html}
        placeholder={"후원받고자 하는 동물의 자세한 정보를 입력해주세요!"}
        theme="snow"
      />
    </div>
  );
}
