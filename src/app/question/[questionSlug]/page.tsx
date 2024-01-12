import Button from '@/components/Button';
import HorizontalLine from '@/components/HorizontalLine';

type Props = {
  params: {
    questionSlug: string;
  };
};

export default function QuestionDetail({ params }: Props) {
  let data = {
    id: 1,
    status: false,
    profileUrl: 'https://',
    alt: '임시 alt',
    title: '제목 1 입니다...',
    desc: '<p>본문 1 입니다..</p>',
    name: '김민수',
    time: '2024-01-04 20:20:59',
    hits: 20,
    numOfComments: 2,
    comments: [
      {
        id: '1',
        profileUrl: 'https://',
        alt: '임시 alt',
        name: '강민수',
        role: 'tutor',
        subject: '수학',
        desc: '댓글내용..',
        date: '2022-02-01',
      },
      {
        id: '2',
        profileUrl: 'https://',
        alt: '임시 alt',
        name: '정민수',
        role: 'tutor',
        subject: '수학',
        desc: '댓글내용..',
        date: '2022-02-01',
      },
    ],
  };
  const tmpApi = () => {
    // params.questionSlug에 대한 요청
  };

  return (
    <div>
      <div className='flex justify-between'>
        <div>
          <p className='text-3xl font-semibold mb-5'>{data.title}</p>
          <span>{data.time}</span> / <span>{data.hits}</span>
        </div>
        <div>
          <img src={data.profileUrl} alt={data.alt} className='mb-5' />
          <span>{data.name}</span>
        </div>
      </div>
      <p
        dangerouslySetInnerHTML={{ __html: data.desc }}
        className='text-3xl font-medium mb-5 mt-5 w-full border border-solid border-black p-5'
      />
      <input
        placeholder='댓글을 남겨보세요.'
        className='flex-1 border border-solid border-gray-300 w-full mb-5 p-2'
      />
      <ul>
        {data.comments.map((comment) => {
          return (
            <li key={comment.id} className='flex flex-col mb-5'>
              <div className='flex mb-3'>
                <img src={comment.profileUrl} alt={comment.alt} />
                <div className='pl-5 w-full'>
                  <div className='flex justify-between'>
                    <div>
                      <span>{comment.name}</span>
                      <span>{comment.role}</span>
                      <span>{comment.subject}</span>
                    </div>
                    <Button title='프로필보기' type='button'></Button>
                  </div>
                  <p className='mb-5'>{comment.desc}</p>
                  <div>{comment.date}</div>
                </div>
              </div>
              <HorizontalLine />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
