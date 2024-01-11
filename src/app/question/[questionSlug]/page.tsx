type Props = {
  params: {
    questionSlug: string;
  };
};

export default function page({ params }: Props) {
  let data = {};
  const tmpApi = () => {
    // params.questionSlug에 대한 요청
    data = {
      id: 1,
      status: false,
      title: '제목 1 입니다...',
      desc: '<p>본문 1 입니다..</p>',
      name: '이선균',
      time: '2024-01-04 20:20:59',
      hits: 20,
      numOfComments: 2,
      comments: [],
    };
  };
  return <div>{params.questionSlug} </div>;
}
